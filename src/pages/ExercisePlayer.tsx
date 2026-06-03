import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, CheckCircle2, AlertCircle } from "lucide-react";
import { AL_MULK_EXERCISES } from "../data/quranExercises";
import { Exercise } from "../data/exerciseTypes";
import VerseHeader from "../components/exercises/VerseHeader";
import FeedbackToast from "../components/exercises/FeedbackToast";
import HighlightExercise from "../components/exercises/HighlightExercise";
import ClassifyExercise from "../components/exercises/ClassifyExercise";
import VerbAnalyzerExercise from "../components/exercises/VerbAnalyzerExercise";
import RootFinderExercise from "../components/exercises/RootFinderExercise";
import CaseIdentifierExercise from "../components/exercises/CaseIdentifierExercise";

export default function ExercisePlayer() {
  const { type, id } = useParams();
  const navigate = useNavigate();
  
  // Here we'd normally fetch the subset of exercises based on type and id
  // For now, we'll just use the mock data sequentially
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [feedback, setFeedback] = useState<{ isCorrect: boolean, message: string } | null>(null);

  useEffect(() => {
    // Very simple logic to load exercises: if "daily", return first 5 etc.
    let exList = AL_MULK_EXERCISES;
    if (type === "daily") {
      exList = AL_MULK_EXERCISES.slice(0, 5);
    } else if (type === "sourate") {
      exList = AL_MULK_EXERCISES; // All of them
    } else if (type === "rule" && id) {
      exList = AL_MULK_EXERCISES.filter(ex => ex.type === id);
      if (exList.length === 0) exList = [AL_MULK_EXERCISES[0]]; // fallback
    }
    setExercises(exList);
  }, [type, id]);

  if (exercises.length === 0) return <div>Chargement...</div>;

  const currentExercise = exercises[currentIndex];

  const handleNext = () => {
    setFeedback(null);
    if (currentIndex < exercises.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      setIsFinished(true);
    }
  };

  const handleCorrect = (points: number, explanation: string) => {
    setScore(prev => prev + points);
    setFeedback({ isCorrect: true, message: explanation });
  };

  const handleWrong = (penalty: number, explanation: string) => {
    setScore(prev => Math.max(0, prev - penalty));
    setFeedback({ isCorrect: false, message: explanation });
  };

  return (
    <div className="-mx-4 -mt-6 sm:mx-0 sm:mt-0 sm:rounded-3xl relative min-h-screen bg-slate-50 dark:bg-slate-900 pb-32">
      <div className="flex items-center justify-between mb-6 sticky top-0 bg-slate-50/90 dark:bg-slate-900/90 backdrop-blur-xl z-40 px-4 sm:px-8 py-4 border-b border-slate-200 dark:border-slate-800 shadow-sm">
        <button onClick={() => navigate("/pratique")} className="flex items-center gap-2 text-slate-500 hover:text-slate-800 transition-colors">
          <ArrowLeft className="w-5 h-5" />
          <span className="hidden sm:inline font-medium">Quitter</span>
        </button>
        <div className="flex items-center gap-4">
          <span className="font-bold text-slate-400 text-sm">{currentIndex + 1} / {exercises.length}</span>
          <div className="bg-slate-200 w-32 h-2 rounded-full overflow-hidden">
            <div className="bg-brand-emerald h-full transition-all" style={{ width: `${((currentIndex) / exercises.length) * 100}%` }} />
          </div>
          <span className="font-bold text-brand-gold-dark ml-2">⭐ {score}</span>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-8 space-y-8">
        <AnimatePresence mode="wait">
          {!isFinished ? (
            <motion.div 
              key={currentExercise.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20, position: "absolute" }}
              transition={{ duration: 0.4 }}
              className="space-y-6"
            >
              <VerseHeader 
                arabic={currentExercise.arabic} 
                french={currentExercise.french} 
                surah={currentExercise.surah} 
                verseNumber={currentExercise.verse_number} 
              />
              
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm">
                <h3 className="font-bold text-lg text-slate-800 mb-6 pb-4 border-b border-slate-100 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-brand-gold-light text-brand-gold-dark flex items-center justify-center text-sm">{currentIndex + 1}</span>
                  {currentExercise.instruction}
                </h3>
                
                {/* Renders the specific exercise tool based on type */}
                {currentExercise.type === "highlight" && (
                  <HighlightExercise exercise={currentExercise} onCorrect={handleCorrect} onWrong={handleWrong} />
                )}
                {currentExercise.type === "classify" && (
                  <ClassifyExercise exercise={currentExercise} onCorrect={handleCorrect} onWrong={handleWrong} />
                )}
                {currentExercise.type === "verb_analyzer" && (
                  <VerbAnalyzerExercise exercise={currentExercise} onCorrect={handleCorrect} onWrong={handleWrong} />
                )}
                {currentExercise.type === "root_finder" && (
                  <RootFinderExercise exercise={currentExercise} onCorrect={handleCorrect} onWrong={handleWrong} />
                )}
                {(currentExercise.type === "case_identifier" || currentExercise.type === "idafa_identifier") && (
                  <CaseIdentifierExercise exercise={currentExercise} onCorrect={handleCorrect} onWrong={handleWrong} />
                )}
                
              </div>
            </motion.div>
          ) : (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white p-10 rounded-[40px] border border-brand-emerald-dark/20 shadow-xl text-center space-y-6 mt-12"
            >
              <div className="w-24 h-24 bg-brand-emerald-light rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-12 h-12 text-brand-emerald-dark" />
              </div>
              <h2 className="text-3xl font-serif font-bold text-slate-900">Entraînement terminé !</h2>
              <p className="text-slate-600 text-lg">Tu as brillamment accompli cette session.</p>
              
              <div className="py-6 border-y border-slate-100 flex justify-center gap-12 my-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-brand-gold-dark mb-1">{score}</div>
                  <div className="text-sm font-bold text-slate-400 uppercase tracking-widest">Points</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-slate-800 mb-1">{exercises.length}</div>
                  <div className="text-sm font-bold text-slate-400 uppercase tracking-widest">Versets</div>
                </div>
              </div>
              
              <button 
                onClick={() => navigate("/pratique")}
                className="bg-slate-900 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all active:scale-95"
              >
                Retour à l'accueil
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      {/* Feedback Toast that pops up when user finishes interacting with the exercise */}
      <FeedbackToast feedback={feedback} onNext={handleNext} />
    </div>
  );
}
