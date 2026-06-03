import { useState } from "react";
import { Exercise } from "../../data/lessonTypes";
import { CheckCircle2, Target, XCircle } from "lucide-react";
import { useLessons } from "../../hooks/useLessons";
import { motion, AnimatePresence } from "motion/react";

export default function ExerciseBlock({ lessonId, exercise, onComplete }: { lessonId: number, exercise: Exercise, onComplete: () => void }) {
  const { saveExerciseScore } = useLessons();
  const [completed, setCompleted] = useState(false);
  
  if (exercise.type === "classify" && exercise.words) {
    return <ClassifyExercise exercise={exercise} onWin={() => { saveExerciseScore(lessonId, exercise.id, true); setCompleted(true); onComplete(); }} />;
  }
  
  if (exercise.type === "highlight" && exercise.arabic && exercise.highlight_words) {
     return <HighlightExercise exercise={exercise} onWin={() => { saveExerciseScore(lessonId, exercise.id, true); setCompleted(true); onComplete(); }} />;
  }

  return null;
}

function ClassifyExercise({ exercise, onWin }: { exercise: Exercise, onWin: () => void }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [feedback, setFeedback] = useState<"correct" | "wrong" | null>(null);
  
  const currentWord: any = exercise.words![currentIndex] || { arabic: "", correct: "", options: [] };
  const isFinished = currentIndex >= exercise.words!.length;

  const handleGuess = (option: string) => {
    if (option === currentWord.correct) {
      setFeedback("correct");
      setTimeout(() => {
        setFeedback(null);
        if (currentIndex < exercise.words!.length - 1) {
          setCurrentIndex(prev => prev + 1);
        } else {
          onWin();
          setCurrentIndex(prev => prev + 1); // trigger finish state
        }
      }, 1000);
    } else {
      setFeedback("wrong");
      setTimeout(() => setFeedback(null), 1000);
    }
  };

  return (
    <div className="bg-white p-8 rounded-[32px] border border-brand-gold-dark/20 text-center shadow-sm">
      <h3 className="text-brand-gold-dark font-bold uppercase tracking-widest text-sm mb-6 flex items-center justify-center gap-2">
         <Target className="w-4 h-4" /> Exercice : {exercise.instruction}
      </h3>
      
      <AnimatePresence mode="wait">
        {!isFinished ? (
          <motion.div 
            key={`word-${currentIndex}`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-8"
          >
             <div className="font-arabic text-6xl text-slate-900 py-8 drop-shadow-sm" dir="rtl">{currentWord.arabic}</div>
             
             <div className="flex flex-wrap justify-center gap-4">
               {currentWord.options?.map((opt: string) => (
                 <motion.button
                   whileHover={{ scale: 1.05 }}
                   whileTap={{ scale: 0.95 }}
                   key={opt}
                   onClick={() => handleGuess(opt)}
                   className="px-6 py-3 rounded-xl bg-slate-50 text-slate-800 font-bold hover:bg-slate-100 transition-colors capitalize border border-slate-200 hover:border-slate-300 shadow-sm"
                 >
                   {opt}
                 </motion.button>
               ))}
             </div>
             
             <div className="h-8 flex items-center justify-center">
               <AnimatePresence>
                 {feedback === "correct" && (
                   <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="text-brand-emerald font-bold flex items-center gap-2">
                     <CheckCircle2 className="w-5 h-5"/> Correct !
                   </motion.span>
                 )}
                 {feedback === "wrong" && (
                   <motion.span initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: [0, -10, 10, -10, 10, 0] }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }} className="text-orange-500 font-bold flex items-center gap-2">
                     <XCircle className="w-5 h-5"/> Essaie encore
                   </motion.span>
                 )}
               </AnimatePresence>
             </div>
             
             <div className="text-xs text-slate-500 font-bold">
               Mot {currentIndex + 1} / {exercise.words!.length}
             </div>
          </motion.div>
        ) : (
          <motion.div 
            key="finished"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="py-8"
          >
            <div className="w-16 h-16 bg-brand-emerald-light rounded-full flex items-center justify-center mx-auto mb-4 border border-brand-emerald/20">
              <CheckCircle2 className="w-8 h-8 text-brand-emerald-dark" />
            </div>
            <p className="text-xl font-bold text-slate-900">Exercice terminé !</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function HighlightExercise({ exercise, onWin }: { exercise: Exercise, onWin: () => void }) {
  const [selected, setSelected] = useState<string[]>([]);
  const [status, setStatus] = useState<"playing" | "won">("playing");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const toggleWord = (word: string) => {
    if (status === "won") return;
    
    setErrorMsg(null);
    let newSelected = [...selected];
    if (newSelected.includes(word)) {
      newSelected = newSelected.filter(w => w !== word);
    } else {
      newSelected.push(word);
    }
    setSelected(newSelected);
  };

  const checkAnswer = () => {
    const correct = exercise.correct_words || [];
    const isCorrect = selected.length === correct.length && selected.every(w => correct.includes(w));
    
    if (isCorrect) {
      setStatus("won");
      onWin();
    } else {
      setErrorMsg(exercise.feedback_wrong || "Presque ! La règle est de vérifier les indices.");
    }
  };

  return (
    <div className="bg-white p-8 rounded-[32px] border border-brand-gold-dark/20 shadow-sm text-center">
      <h3 className="text-brand-gold-dark font-bold uppercase tracking-widest text-sm mb-6 flex items-center justify-center gap-2">
         <Target className="w-4 h-4" /> Exercice : {exercise.instruction}
      </h3>
      
      <div className="py-12 bg-slate-50 rounded-3xl border border-slate-200 mb-8 px-6 flex flex-row-reverse flex-wrap justify-center gap-4 shadow-[inset_0_2px_10px_rgba(0,0,0,0.02)]">
        {exercise.highlight_words!.map((word, idx) => (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            key={idx}
            onClick={() => toggleWord(word)}
            className={`font-arabic text-4xl sm:text-5xl p-3 sm:px-4 sm:py-3 rounded-2xl transition-all shadow-sm ${
              selected.includes(word) 
                ? status === "won" ? "bg-brand-emerald-light text-brand-emerald-dark border border-brand-emerald/50 shadow-brand-emerald/20" : "bg-brand-gold-light text-brand-gold-dark border border-brand-gold-dark/50 shadow-brand-gold/20" 
                : "text-slate-900 bg-white hover:bg-slate-100 border border-slate-200"
            }`}
            dir="rtl"
          >
            {word}
          </motion.button>
        ))}
      </div>
      
      <div className="h-16 flex flex-col justify-center">
        {status === "playing" && (
          <AnimatePresence mode="wait">
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-4">
              <button 
                onClick={checkAnswer}
                disabled={selected.length === 0}
                className="px-8 py-4 rounded-xl bg-slate-900 text-white font-bold hover:bg-slate-800 transition-colors disabled:opacity-50 border border-slate-900 shadow-md active:scale-95"
              >
                Vérifier ma réponse
              </button>
              {errorMsg && (
                <motion.p initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-orange-500 font-bold mt-3">
                  {errorMsg}
                </motion.p>
              )}
            </motion.div>
          </AnimatePresence>
        )}

        {status === "won" && (
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center justify-center">
            <p className="text-brand-emerald-dark text-lg font-bold flex items-center justify-center gap-2 mb-2">
              <CheckCircle2 className="w-6 h-6 text-brand-emerald"/> {exercise.feedback_correct}
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
