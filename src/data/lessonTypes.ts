export interface Concept {
  id: string;
  arabic_term: string;
  french_name: string;
  definition: string;
  signals: string[];
  color: string;
  examples: { arabic: string; french: string; note: string }[];
}

export interface WordAnalysis {
  word: string;
  type: string;
  role: string;
  french: string;
  note: string;
}

export interface QuranExample {
  surah: string;
  verse_number: number;
  arabic: string;
  french: string;
  word_analysis: WordAnalysis[];
}

export interface Exercise {
  id: string;
  type: "classify" | "highlight" | "fill";
  instruction: string;
  words?: { arabic: string; correct: string; options: string[] }[]; // for classify
  arabic?: string; // for highlight
  highlight_words?: string[]; // words in the sentence
  correct_words?: string[]; // correct words to highlight
  feedback_correct?: string;
  feedback_wrong?: string;
}

export interface LessonSummary {
  table: { type: string; signal: string; example: string }[];
  rule: string;
}

export interface LessonData {
  id: number;
  level: number;
  title: string;
  arabic_title: string;
  duration_minutes: number;
  prerequisite_lesson_id: number | null;
  hook: {
    question: string;
    insight: string;
  };
  concepts: Concept[];
  quran_example: QuranExample;
  exercises: Exercise[];
  summary: LessonSummary;
  unlocks_lesson_id: number | null;
  related_vocabulary?: string[];
}
