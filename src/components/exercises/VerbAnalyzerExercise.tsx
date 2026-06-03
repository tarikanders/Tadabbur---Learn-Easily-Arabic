import { useState } from "react";
import { Exercise } from "../../data/exerciseTypes";
import { motion, AnimatePresence } from "motion/react";

export default function VerbAnalyzerExercise({ exercise, onCorrect, onWrong }: { exercise: Exercise, onCorrect: (pts: number, msg: string) => void, onWrong: (pts: number, msg: string) => void }) {
  const [step, setStep] = useState(0);

  const steps = [
    { question: "Quelle est la racine ?", expected: exercise.root },
    { question: "Quel est le temps ?", expected: exercise.tense },
    { question: "Quelle est la personne ?", expected: exercise.person },
  ].filter(s => s.expected);

  if (steps.length === 0) return <div>Données d'exercice incomplètes.</div>;

  const currentStep = steps[step];

  const handleValidate = () => {
    // Dans une version plus avancée, on fournirait les options du QCM. 
    // Pour simplifier cette démo, on simule l'interface avec un simple clic pour avancer.
    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      onCorrect(20, "Parfait, tu as analysé ce verbe en profondeur.");
    }
  };

  return (
    <div className="py-8 space-y-12">
      <div className="flex flex-col items-center justify-center">
        <h4 className="text-slate-500 font-medium mb-4 uppercase tracking-widest text-sm">Le Verbe à analyser</h4>
        <div className="font-arabic text-6xl text-brand-emerald-dark drop-shadow-sm mb-4" dir="rtl">{exercise.verb}</div>
        <p className="text-slate-600 text-lg bg-slate-50 px-4 py-2 rounded-xl">{exercise.meaning}</p>
      </div>
      
      <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200">
        <div className="flex gap-2 mb-8 justify-center">
          {steps.map((_, i) => (
            <div key={i} className={`h-2 rounded-full flex-1 max-w-[60px] ${i <= step ? "bg-brand-emerald" : "bg-slate-200"}`} />
          ))}
        </div>
        
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="text-center space-y-8"
          >
            <h3 className="text-2xl font-bold text-slate-800 mb-8">{currentStep.question}</h3>
            
            {/* Simulation of options */}
            <div className="flex justify-center">
              <button 
                onClick={handleValidate}
                className="px-8 py-4 bg-white border-2 border-brand-emerald text-brand-emerald-dark rounded-2xl font-bold text-xl hover:bg-brand-emerald hover:text-white transition-all shadow-sm active:scale-95"
              >
                {currentStep.expected}
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
