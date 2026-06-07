import { useState } from 'react';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { WordData } from '../data/vocabulary';

interface UseAiTipResult {
  explanation: string | null;
  isLoading: boolean;
  fetchTip: (word: WordData) => Promise<void>;
  reset: () => void;
}

export function useAiTip(): UseAiTipResult {
  const [explanation, setExplanation] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const reset = () => setExplanation(null);

  const fetchTip = async (word: WordData) => {
    if (explanation || isLoading) return;
    setIsLoading(true);
    try {
      const tipRef = doc(db, 'ai_tips', word.id);

      // 1. Try Firestore cache first
      try {
        const cached = await getDoc(tipRef);
        if (cached.exists()) {
          setExplanation(cached.data().explanation);
          return;
        }
      } catch {
        // Not authenticated or Firestore unavailable — fall through to API
      }

      // 2. Generate via Claude API
      const res = await fetch('/api/explain', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          word: word.transliteration,
          arabic: word.arabic,
          translation: word.translation,
          context: word.verse,
        }),
      });
      const data = await res.json();

      if (data.explanation) {
        setExplanation(data.explanation);
        // 3. Save to Firestore cache (fail silently if not authenticated)
        try {
          await setDoc(tipRef, { explanation: data.explanation, generatedAt: Date.now() });
        } catch {
          // cache write skipped silently
        }
      } else {
        setExplanation("Désolé, impossible de charger l'explication.");
      }
    } catch {
      setExplanation('Erreur de connexion.');
    } finally {
      setIsLoading(false);
    }
  };

  return { explanation, isLoading, fetchTip, reset };
}
