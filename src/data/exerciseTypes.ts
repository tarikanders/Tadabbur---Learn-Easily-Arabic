export type ExerciseType = 
  | "highlight" 
  | "classify" 
  | "root_finder" 
  | "case_identifier" 
  | "idafa_identifier" 
  | "verb_analyzer" 
  | "guided_translation" 
  | "free_irab";

export interface Exercise {
  id: string;
  type: ExerciseType;
  surah: string;
  verse_number: number;
  verse_ref: string;
  arabic: string;
  french: string;
  difficulty: 1 | 2 | 3;
  instruction: string;
  linked_lesson: number | number[];
  
  // highlight
  words_correct?: string[];
  feedback?: string;
  
  // idafa_identifier
  answer?: string;
  rule?: string;
  correct_answers?: string[];
  note?: string;

  // case_identifier
  highlighted?: string;
  correct_case?: string;
  correct_reason?: string;
  correct_role?: string;
  explanation?: string;
  correct_number?: string;

  // root_finder
  word?: string;
  correct_root?: string;
  meaning?: string;
  family?: string[];

  // classify
  words?: { word: string; correct: string }[];

  // verb_analyzer
  verb?: string;
  root?: string;
  tense?: string;
  person?: string;
  form?: string;
}
