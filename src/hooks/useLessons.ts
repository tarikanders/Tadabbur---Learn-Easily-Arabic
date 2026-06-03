import { useState, useEffect } from "react";
import { LESSONS } from "../data/lessons";

export type LessonStatus = "locked" | "available" | "in_progress" | "completed";

export interface LessonProgress {
  status: LessonStatus;
  started_at?: string;
  completed_at?: string;
  exercises_score?: Record<string, { attempts: number; correct: boolean }>;
  time_spent_seconds?: number;
}

export function useLessons() {
  const [progress, setProgress] = useState<Record<number, LessonProgress>>(() => {
    const stored = localStorage.getItem("lessons_progress_v1");
    if (stored) {
      try {
        return JSON.parse(stored);
      } catch (e) {
        console.error("Failed to parse stored lessons progress", e);
      }
    }
    return {
      1: { status: "available" }
    };
  });

  useEffect(() => {
    // Optionally synchronize across tabs, but standard initialization
    // is safely handled synchronously above.
  }, []);

  const saveProgressState = (newState: Record<number, LessonProgress>) => {
    setProgress(newState);
    localStorage.setItem("lessons_progress_v1", JSON.stringify(newState));
  };

  const startLesson = (lessonId: number) => {
    const current = progress[lessonId] || { status: "available" };
    if (current.status !== "completed") {
      saveProgressState({
        ...progress,
        [lessonId]: {
          ...current,
          status: "in_progress",
          started_at: current.started_at || new Date().toISOString()
        }
      });
    }
  };

  const completeLesson = (lessonId: number) => {
    const lessonData = LESSONS.find(l => l.id === lessonId);
    if (!lessonData) return;

    const current = progress[lessonId] || {};
    const newState = {
      ...progress,
      [lessonId]: {
        ...current,
        status: "completed" as LessonStatus,
        completed_at: current.completed_at || new Date().toISOString()
      }
    };

    // Unlock next
    if (lessonData.unlocks_lesson_id) {
       if (!newState[lessonData.unlocks_lesson_id] || newState[lessonData.unlocks_lesson_id].status === "locked") {
         newState[lessonData.unlocks_lesson_id] = { status: "available" };
       }
    }

    saveProgressState(newState);
  };

  const saveExerciseScore = (lessonId: number, exerciseId: string, correct: boolean) => {
    const current = progress[lessonId] || { status: "in_progress" as LessonStatus };
    const currentScore = current.exercises_score?.[exerciseId] || { attempts: 0, correct: false };
    
    saveProgressState({
      ...progress,
      [lessonId]: {
        ...current,
        exercises_score: {
          ...current.exercises_score,
          [exerciseId]: {
            attempts: currentScore.attempts + 1,
            correct: currentScore.correct || correct
          }
        }
      }
    });
  };

  return {
    progress,
    startLesson,
    completeLesson,
    saveExerciseScore
  };
}
