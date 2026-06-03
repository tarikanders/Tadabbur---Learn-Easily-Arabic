import { useState } from "react";
import { Exercise } from "../../data/exerciseTypes";
import { motion, AnimatePresence } from "motion/react";

export default function ClassifyExercise({ exercise, onCorrect, onWrong }: { exercise: Exercise, onCorrect: (pts: number, msg: string) => void, onWrong: (pts: number, msg: string) => void }) {
  // Simple match logic for classification
  const items = exercise.words || [];
  const [currentIndex, setCurrentIndex] = useState(0);
  
  if (items.length === 0) return <div>Erreur de chargement.</div>;
  
  const currentItem = items[currentIndex];

  const handleChoice = (choice: string) => {
    if (choice.toLowerCase() === currentItem.correct.toLowerCase()) {
      if (currentIndex === items.length - 1) {
        onCorrect(20, "Parfait, tu as classifié tous les mots correctement.");
      } else {
        setCurrentIndex(prev => prev + 1);
      }
    } else {
      onWrong(0, `Mauvaise catégorie. Regarde bien les signes.`);
    }
  };

  return (
    <div className="space-y-12 py-8">
      <div className="flex justify-center mb-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentItem.word}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="font-arabic text-6xl text-brand-gold-dark drop-shadow-sm"
            dir="rtl"
          >
            {currentItem.word}
          </motion.div>
        </AnimatePresence>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {["اسم", "فعل", "حرف"].map((cat) => {
          // Simplistic mapping for the specific example in AL_MULK 67:2
          const label = cat === "اسم" ? "NOM (اسم)" : cat === "فعل" ? "VERBE (فعل)" : "PARTICULE (حرف)";
          const value = cat === "اسم" ? "اسم" : cat === "فعل" ? "فعل" : "حرف";
          
          return (
            <motion.button
              key={cat}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleChoice(value)}
              className="py-6 px-4 bg-slate-50 border border-slate-200 rounded-3xl text-slate-800 font-bold hover:bg-slate-100 hover:border-slate-300 transition-all shadow-sm flex flex-col items-center justify-center gap-2"
            >
              <span className="text-xl">{label}</span>
            </motion.button>
          )
        })}
      </div>
    </div>
  );
}
