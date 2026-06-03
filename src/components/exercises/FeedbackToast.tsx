import { motion, AnimatePresence } from "motion/react";
import { CheckCircle2, AlertCircle, ArrowRight } from "lucide-react";

export default function FeedbackToast({ feedback, onNext }: { feedback: { isCorrect: boolean, message: string } | null, onNext: () => void }) {
  return (
    <AnimatePresence>
      {feedback && (
        <>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 pointer-events-none"
          />
          <motion.div 
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            className="fixed bottom-0 left-0 right-0 z-50 p-4"
          >
            <div className={`max-w-2xl mx-auto rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-2xl ${
              feedback.isCorrect ? "bg-brand-emerald-light/95 border-brand-emerald/30" : "bg-rose-50/95 border-rose-200"
            } border backdrop-blur-xl`}
            >
              <div className="flex gap-4 sm:gap-6">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 ${
                  feedback.isCorrect ? "bg-brand-emerald text-white shadow-brand-emerald/20" : "bg-rose-500 text-white shadow-rose-500/20"
                } shadow-lg`}
                >
                  {feedback.isCorrect ? <CheckCircle2 className="w-6 h-6" /> : <AlertCircle className="w-6 h-6" />}
                </div>
                <div>
                  <h4 className={`text-xl font-bold mb-1 ${feedback.isCorrect ? "text-brand-emerald-dark" : "text-rose-900"}`}>
                    {feedback.isCorrect ? "Excellent !" : "Presque..."}
                  </h4>
                  <p className={`text-sm sm:text-base leading-relaxed ${feedback.isCorrect ? "text-brand-emerald-dark/80" : "text-rose-800"}`}>
                    {feedback.message}
                  </p>
                </div>
              </div>
              
              <button 
                onClick={onNext}
                className={`px-8 py-4 rounded-2xl font-bold text-lg transition-transform active:scale-95 shrink-0 ${
                  feedback.isCorrect 
                    ? "bg-brand-emerald text-white hover:bg-brand-emerald-dark" 
                    : "bg-rose-500 text-white hover:bg-rose-600"
                }`}
              >
                Continuer
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
