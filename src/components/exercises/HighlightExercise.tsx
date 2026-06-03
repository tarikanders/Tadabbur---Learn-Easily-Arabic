import { useState } from "react";
import { Exercise } from "../../data/exerciseTypes";
import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";

export default function HighlightExercise({ exercise, onCorrect, onWrong }: { exercise: Exercise, onCorrect: (pts: number, msg: string) => void, onWrong: (pts: number, msg: string) => void }) {
  const words = exercise.arabic.split(" ");
  const [selected, setSelected] = useState<number[]>([]);
  const [hasAttempted, setHasAttempted] = useState(false);

  const toggleWord = (index: number) => {
    if (selected.includes(index)) {
      setSelected(selected.filter(i => i !== index));
    } else {
      setSelected([...selected, index]);
    }
  };

  const handleValidate = () => {
    setHasAttempted(true);
    const selectedWords = selected.map(i => words[i]);
    
    // Check if the selected words match exactly the correct words
    const correctTarget = exercise.words_correct || [];
    
    // Very naive comparison
    const isCorrect = 
      selectedWords.length === correctTarget.length && 
      selectedWords.every(w => correctTarget.some(cw => w.includes(cw) || cw.includes(w)));
      
    if (isCorrect) {
      onCorrect(10, exercise.feedback || "Bien joué ! Tu as trouvé la bonne réponse.");
    } else {
      onWrong(0, exercise.feedback || "La règle est de chercher les mots correspondant aux critères donnés.");
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap flex-row-reverse justify-center gap-4 py-8">
        {words.map((word, idx) => (
          <motion.button
            key={idx}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => toggleWord(idx)}
            className={`font-arabic text-4xl p-3 sm:px-5 sm:py-4 rounded-2xl transition-all shadow-sm ${
              selected.includes(idx) 
                ? "bg-brand-gold-light text-brand-gold-dark border-brand-gold-dark/50 shadow-brand-gold/20 border-2" 
                : "bg-slate-50 text-slate-900 border border-slate-200 hover:bg-slate-100"
            }`}
            dir="rtl"
          >
            {word}
          </motion.button>
        ))}
      </div>
      
      <div className="flex justify-center">
        <button 
          onClick={handleValidate}
          disabled={selected.length === 0 || hasAttempted}
          className="px-10 py-5 rounded-full bg-slate-900 text-white font-bold text-lg hover:bg-slate-800 transition-colors disabled:opacity-50 active:scale-95 shadow-xl disabled:active:scale-100"
        >
          Vérifier ma sélection
        </button>
      </div>
    </div>
  );
}
