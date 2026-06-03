import { useState } from "react";
import { Exercise } from "../../data/exerciseTypes";
import { motion } from "motion/react";

export default function CaseIdentifierExercise({ exercise, onCorrect, onWrong }: { exercise: Exercise, onCorrect: (pts: number, msg: string) => void, onWrong: (pts: number, msg: string) => void }) {
  
  const handleValidate = () => {
    onCorrect(10, exercise.rule || exercise.explanation || exercise.correct_reason || "C'est la bonne réponse !");
  }

  // To highlight the specific word in the verse, we can split it.
  const renderHighlightedVerse = () => {
    if (!exercise.highlighted) return <div className="font-arabic text-4xl leading-relaxed text-slate-800" dir="rtl">{exercise.arabic}</div>;
    
    const parts = exercise.arabic.split(exercise.highlighted);
    if (parts.length === 1) return <div className="font-arabic text-4xl leading-relaxed text-slate-800" dir="rtl">{exercise.arabic}</div>;
    
    return (
      <div className="font-arabic text-4xl sm:text-5xl leading-[1.8] text-slate-400 drop-shadow-sm text-center" dir="rtl">
        {parts[0]}
        <span className="text-brand-emerald-dark bg-brand-emerald-light/40 px-2 rounded-lg border-b-4 border-brand-emerald mx-1">{exercise.highlighted}</span>
        {parts[1]}
      </div>
    );
  };

  return (
    <div className="py-8 space-y-12">
      <div className="bg-slate-50 p-6 sm:p-10 rounded-3xl border border-slate-200">
        {renderHighlightedVerse()}
      </div>
      
      <div className="space-y-6">
        <h4 className="text-center font-bold text-slate-800 text-xl">{exercise.instruction}</h4>
        
        <div className="flex justify-center">
           <button 
             onClick={handleValidate}
             className="w-full sm:w-auto px-10 py-5 bg-white border-2 border-slate-200 text-slate-900 rounded-2xl font-bold text-xl hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm active:scale-95"
           >
             {exercise.correct_case || exercise.answer || exercise.correct_role || exercise.correct_answers?.[0]}
           </button>
        </div>
        
        {exercise.correct_reason && (
           <div className="text-center">
             <button 
               onClick={handleValidate}
               className="w-full sm:w-auto px-10 py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-slate-800 transition-all shadow-xl active:scale-95"
             >
               Pourquoi ?
             </button>
           </div>
        )}
      </div>
    </div>
  );
}
