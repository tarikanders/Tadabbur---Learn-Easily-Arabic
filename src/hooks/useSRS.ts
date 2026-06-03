import { useState, useEffect } from 'react';
import { VOCABULARY_LIST, WordData } from '../data/vocabulary';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { useAuth } from './useAuth';

export interface WordState {
  interval: number;
  easeFactor: number;
  nextReview: string; // ISO date format "YYYY-MM-DD"
  seen: boolean;
  totalSeen: number;
  totalSuccess: number;
  streak?: number;
  status: "unseen" | "learning" | "mastered";
}

export type SRSData = Record<string, WordState>;

export interface StreakData {
  lastStudyDate: string;
  currentStreak: number;
  bestStreak: number;
  wordsStudiedToday: number;
}

export function getTodayStr() {
  return new Date().toISOString().split('T')[0];
}

export function addDaysStr(dateStr: string, n: number) {
  const d = new Date(dateStr);
  d.setDate(d.getDate() + n);
  return d.toISOString().split('T')[0];
}

export function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export function useSRS() {
  const { user } = useAuth();
  
  const [srsData, setSrsData] = useState<SRSData>(() => {
    try {
      const saved = localStorage.getItem('srs_state');
      if (saved) return JSON.parse(saved);
      
      // Fallback from old state shape
      const oldSaved = localStorage.getItem('tadabbur_srs');
      if (oldSaved) return {};
      return {};
    } catch {
      return {};
    }
  });

  const [streakData, setStreakData] = useState<StreakData>(() => {
    try {
      const saved = localStorage.getItem('streak_data');
      if (saved) return JSON.parse(saved);
    } catch {}
    return {
      lastStudyDate: "",
      currentStreak: 0,
      bestStreak: 0,
      wordsStudiedToday: 0
    };
  });

  const [isSyncing, setIsSyncing] = useState(false);

  // Load from Firebase on auth
  useEffect(() => {
    if (!user) return;
    const loadFromFirebase = async () => {
      try {
        const docRef = doc(db, 'user_progress_v2', user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          if (data.srsData) {
            setSrsData(data.srsData);
            localStorage.setItem('srs_state', JSON.stringify(data.srsData));
          }
          if (data.streakData) {
            setStreakData(data.streakData);
            localStorage.setItem('streak_data', JSON.stringify(data.streakData));
          }
        }
      } catch (err: any) {
        console.error('Error loading from Firebase', err);
        if (err.message && err.message.includes('Missing or insufficient permissions')) {
          console.warn("Firestore rules blocking access... Did you deploy rules?");
        }
      }
    };
    loadFromFirebase();
  }, [user]);

  // Save to LocalStorage and Firebase whenever it changes
  useEffect(() => {
    localStorage.setItem('srs_state', JSON.stringify(srsData));
    localStorage.setItem('streak_data', JSON.stringify(streakData));
    
    if (Object.keys(srsData).length === 0 || !user) return;
    
    const saveToFirebase = async () => {
      setIsSyncing(true);
      try {
        await setDoc(doc(db, 'user_progress_v2', user.uid), {
          uid: user.uid,
          srsData,
          streakData,
          lastUpdated: Date.now()
        }, { merge: true });
      } catch (err) {
        console.error('Error saving to Firebase', err);
      } finally {
        setIsSyncing(false);
      }
    };
    
    const timeout = setTimeout(saveToFirebase, 1500);
    return () => clearTimeout(timeout);
  }, [srsData, streakData, user]);

  const updateStreak = () => {
    const today = getTodayStr();
    setStreakData(prev => {
      let newStreak = prev.currentStreak;
      let wordsToday = prev.wordsStudiedToday;
      
      if (prev.lastStudyDate === today) {
        wordsToday += 1;
      } else {
        const yesterday = addDaysStr(today, -1);
        if (prev.lastStudyDate === yesterday) {
          newStreak += 1;
        } else {
          newStreak = 1;
        }
        wordsToday = 1;
      }
      
      return {
        lastStudyDate: today,
        currentStreak: newStreak,
        bestStreak: Math.max(prev.bestStreak, newStreak),
        wordsStudiedToday: wordsToday
      };
    });
  };

  const getStats = () => {
    const stats = {
      total: VOCABULARY_LIST.length,
      newWords: 0,
      learning: 0,
      mastered: 0,
      dueToday: 0
    };
    
    const todayStr = getTodayStr();
    VOCABULARY_LIST.forEach(w => {
      const state = srsData[w.id];
      if (!state || state.status === "unseen") {
        stats.newWords++;
      } else if (state.status === "mastered") {
        stats.mastered++;
      } else {
        stats.learning++;
      }
      
      if (state && state.status !== "unseen" && state.nextReview <= todayStr) {
        stats.dueToday++;
      }
    });

    return stats;
  };

  const getCategories = () => {
    const categoriesMap: Record<string, { total: number, new: number, due: number }> = {};
    const todayStr = getTodayStr();
    
    VOCABULARY_LIST.forEach(word => {
      const state = srsData[word.id];
      const isNew = !state || state.status === "unseen";
      const isDue = state && state.status !== "unseen" && state.nextReview <= todayStr;
      
      const type = word.type || 'Autre';
      if (!categoriesMap[type]) {
        categoriesMap[type] = { total: 0, new: 0, due: 0 };
      }
      
      categoriesMap[type].total++;
      if (isNew) categoriesMap[type].new++;
      if (isDue) categoriesMap[type].due++;
    });

    return Object.entries(categoriesMap).map(([name, counts]) => ({
      name,
      count: counts.total,
      newCount: counts.new,
      dueCount: counts.due,
    })).sort((a, b) => b.count - a.count);
  };

  const getDueWords = (filters?: { category?: string, status?: string }, limit: number = 20): WordData[] => {
    const todayStr = getTodayStr();
    
    // Sort words by frequency (rank proxy: higher frequency = better rank/lower rank number)
    const sortedWords = [...VOCABULARY_LIST].sort((a,b) => b.frequency - a.frequency);
    
    // Apply optional category or status filters
    let activeWords = sortedWords;
    if (filters?.category) {
      activeWords = activeWords.filter(w => w.type === filters.category);
    }
    if (filters?.status) {
      if (filters.status === 'new') {
        activeWords = activeWords.filter(w => !srsData[w.id] || srsData[w.id].status === 'unseen');
      } else if (filters.status === 'learning') {
        activeWords = activeWords.filter(w => srsData[w.id] && srsData[w.id].status === 'learning');
      } else if (filters.status === 'mastered') {
        activeWords = activeWords.filter(w => srsData[w.id] && srsData[w.id].status === 'mastered');
      } else if (filters.status === 'due') {
        activeWords = activeWords.filter(w => srsData[w.id] && srsData[w.id].status !== 'unseen' && srsData[w.id].nextReview <= todayStr);
      }
      return shuffleArray(activeWords).slice(0, limit);
    }

    // Default Mix (buildDailySession algorithm)
    const unseen = activeWords
      .filter(w => !srsData[w.id] || srsData[w.id].status === "unseen")
      .slice(0, 10);
      
    const due = activeWords
      .filter(w => {
        const state = srsData[w.id];
        return state && state.status !== "unseen" && state.nextReview <= todayStr;
      })
      .sort((a, b) => {
        const sa = srsData[a.id];
        const sb = srsData[b.id];
        if (sa.easeFactor !== sb.easeFactor) return sa.easeFactor - sb.easeFactor;
        return b.frequency - a.frequency; // Proxy for earlier rank
      })
      .slice(0, 15);
      
    const session = [...unseen, ...due];
    return shuffleArray(session).slice(0, limit);
  };

  const processReview = (wordId: string, isSuccess: boolean) => {
    const wordIndex = [...VOCABULARY_LIST].sort((a,b) => b.frequency - a.frequency).findIndex(w => w.id === wordId);
    if (wordIndex === -1) return;
    
    // rank is index + 1
    const wordRank = wordIndex + 1;

    const rawState = srsData[wordId] || {
      interval: 0,
      easeFactor: 2.5,
      nextReview: getTodayStr(),
      seen: false,
      totalSeen: 0,
      totalSuccess: 0,
      streak: 0,
      status: "unseen"
    };

    let newState: WordState;

    if (isSuccess) {
      const currentStreak = (rawState.streak || 0) + 1;
      let newInterval = rawState.interval;
      
      // Anki-like steps: 0 days -> 1 day -> 3 days -> regular exponential
      if (currentStreak === 1) {
        newInterval = 1;
      } else if (currentStreak === 2) {
        newInterval = 3;
      } else {
        newInterval = Math.floor(Math.max(3, rawState.interval) * rawState.easeFactor);
      }
      
      newState = {
        interval: Math.min(newInterval, 30),
        easeFactor: Math.min(2.5, rawState.easeFactor + 0.1),
        nextReview: addDaysStr(getTodayStr(), Math.min(newInterval, 30)),
        seen: true,
        totalSeen: rawState.totalSeen + 1,
        totalSuccess: rawState.totalSuccess + 1,
        streak: currentStreak,
        status: (currentStreak >= 3 || newInterval >= 5) ? "mastered" : "learning"
      };
    } else {
      newState = {
        ...rawState,
        interval: 0,
        easeFactor: Math.max(1.3, rawState.easeFactor - 0.2),
        nextReview: addDaysStr(getTodayStr(), 0), // Review again today!
        seen: true,
        totalSeen: rawState.totalSeen + 1,
        streak: 0,
        status: "learning"
      };
    }

    setSrsData(prev => ({
      ...prev,
      [wordId]: newState
    }));

    updateStreak();
  };

  const getUnlockedTier = (): number => {
    // Sort words by frequency descending
    const sortedWords = [...VOCABULARY_LIST].sort((a,b) => b.frequency - a.frequency);
    
    for (let tier = 1; tier <= 11; tier++) {
      const startRank = (tier - 1) * 50;
      const endRank = tier * 50;
      // Get the 50 words for this tier
      const tierWords = sortedWords.slice(startRank, endRank);
      if (tierWords.length === 0) return tier; // Reached end of available vocab
      
      const mastered = tierWords.filter(w => srsData[w.id]?.status === "mastered").length;
      if (mastered / tierWords.length < 1) return tier;
    }
    return 11;
  };

  return { getDueWords, processReview, srsData, getStats, getCategories, isSyncing, streakData, getUnlockedTier };
}

