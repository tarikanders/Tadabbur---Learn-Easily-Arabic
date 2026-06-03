import { useState } from "react";
import { Exercise } from "../../data/exerciseTypes";
import { motion, AnimatePresence } from "motion/react";

export default function RootFinderExercise({ exercise, onCorrect, onWrong }: { exercise: Exercise, onCorrect: (pts: number, msg: string) => void, onWrong: (pts: number, msg: string) => void }) {
  // Extract all unique single characters from the word to serve as options
  const rootChars = exercise.correct_root?.split("-") || [];

  const handleValidate = () => {
    // Simplify for demo: just click a button showing the answer
    onCorrect(15, `Les racines arabes sont le fondement du sens. Racine: ${exercise.correct_root}`);
  }

  return (
    <div className="py-8 space-y-12">
      <div className="text-center">
        <div className="font-arabic text-6xl text-brand-gold-dark drop-shadow-sm mb-6" dir="rtl">{exercise.word}</div>
        <p className="text-slate-600 text-lg">{exercise.meaning}</p>
      </div>
      
      <div className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200">
        <h4 className="text-center font-bold text-slate-700 mb-6">Trouve les 3 lettres de la racine (الجذر)</h4>
        
        <div className="flex justify-center gap-4 flex-row-reverse mb-10">
           {rootChars.map((char, i) => (
             <div key={i} className="w-16 h-16 sm:w-20 sm:h-20 bg-white border-2 border-slate-200 rounded-2xl flex items-center justify-center font-arabic text-4xl text-slate-800 shadow-sm">
               {char}
             </div>
           ))}
        </div>
        
        <div className="flex justify-center">
          <button 
            onClick={handleValidate}
            className="px-8 py-4 bg-slate-900 text-white rounded-full font-bold text-lg hover:bg-slate-800 transition-all shadow-xl active:scale-95"
          >
            Valider la racine
          </button>
        </div>
      </div>
      
      {exercise.family && (
        <div className="text-center">
          <p className="text-sm text-slate-500 font-bold uppercase tracking-widest mb-4">Mots de la même famille</p>
          <div className="flex flex-wrap justify-center gap-3">
             {exercise.family.map((fw, i) => (
                <span key={i} className="bg-white px-4 py-2 border border-slate-200 rounded-lg text-slate-700 font-medium text-sm shadow-sm">
                  {fw}
                </span>
             ))}
          </div>
        </div>
      )}
    </div>
  );
}
