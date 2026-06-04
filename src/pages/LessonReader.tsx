import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { LESSONS } from "../data/lessons";
import { useLessons } from "../hooks/useLessons";
import { cn } from "../lib/utils";
import WordByWordTable from "../components/lessons/WordByWordTable";
import ConceptCard from "../components/lessons/ConceptCard";
import ExerciseBlock from "../components/lessons/ExerciseBlock";
import { motion, AnimatePresence } from "motion/react";

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring" as const, stiffness: 300, damping: 24 }
  }
};

export default function LessonReader() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { startLesson, completeLesson, progress } = useLessons();
  
  const lesson = LESSONS.find(l => l.id === Number(id));
  const [currentSection, setCurrentSection] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (lesson) {
      startLesson(lesson.id);
      window.scrollTo(0, 0);
    }
  }, [lesson?.id]);

  if (!lesson) {
    return <div className="text-center py-20 min-h-screen">Leçon introuvable.</div>;
  }

  const sections = [
    { id: "hook", type: "intro" },
    ...lesson.concepts.map((_, i) => ({ id: `concept-${i}`, type: "concept", index: i })),
    { id: "quran", type: "quran" },
    ...lesson.exercises.map((_, i) => ({ id: `exercise-${i}`, type: "exercise", index: i })),
    { id: "summary", type: "summary" }
  ];

  const handleNext = () => {
    if (currentSection < sections.length - 1) {
      setCurrentSection(prev => prev + 1);
    } else {
      completeLesson(lesson.id);
      navigate("/cours#lesson-" + lesson.id);
    }
  };

  const renderSection = (section: any, isVisible: boolean) => {
    if (!isVisible) return null;

    switch (section.type) {
      case "intro":
        return (
          <div className="bg-white p-8 rounded-[32px] border border-brand-gold-dark/20 shadow-sm text-center">
            <h3 className="text-xl font-serif font-bold text-brand-gold-dark mb-4 tracking-wide">POUR COMMENCER</h3>
            <p className="text-2xl font-bold text-slate-800 mb-6 leading-tight">"{lesson.hook.question}"</p>
            <p className="text-slate-600 text-lg">{lesson.hook.insight}</p>
          </div>
        );

      case "concept":
        const concept = lesson.concepts[section.index];
        return (
          <div>
            <ConceptCard concept={concept} />
          </div>
        );

      case "quran":
        return (
          <div>
            <div className="bg-white p-8 rounded-[32px] border border-brand-emerald/30 shadow-md overflow-hidden relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-emerald-light rounded-full blur-3xl -mr-10 -mt-10" />
              <h3 className="text-brand-emerald font-bold uppercase tracking-widest text-sm mb-6 text-center">Exemple Coranique</h3>
              
              <div className="text-center mb-8">
                <p className="font-arabic text-4xl sm:text-5xl text-slate-900 leading-loose mb-4" dir="rtl">{lesson.quran_example.arabic}</p>
                <p className="text-slate-600 italic">« {lesson.quran_example.french} »</p>
                <p className="text-sm text-slate-500 mt-2 font-bold uppercase tracking-wider">— Sourate {lesson.quran_example.surah}, {lesson.quran_example.verse_number}</p>
              </div>

              <WordByWordTable analysis={lesson.quran_example.word_analysis} />
            </div>
          </div>
        );

      case "exercise":
        const exercise = lesson.exercises[section.index];
        return (
          <div>
            <ExerciseBlock lessonId={lesson.id} exercise={exercise} onComplete={() => {}} />
          </div>
        );

      case "summary":
        return (
          <div>
            <div className="bg-white p-8 rounded-[32px] border border-brand-gold-dark/30 shadow-sm">
              <h3 className="text-brand-gold-dark font-bold uppercase tracking-widest text-sm mb-6 text-center">Fiche Mémo</h3>
              
              <div className="space-y-4 mb-8">
                {lesson.summary.table.map((row, idx) => (
                  <div key={idx} className="bg-slate-50 p-4 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 border border-brand-gold-dark/20">
                    <span className="font-bold text-slate-800 min-w-[140px]">{row.type}</span>
                    <span className="text-slate-600 text-sm flex-1">{row.signal}</span>
                    <span className="font-arabic text-xl text-brand-gold-dark" dir="rtl">{row.example}</span>
                  </div>
                ))}
              </div>
              
              <div className="bg-brand-gold-light border border-brand-gold-dark/20 p-4 rounded-xl">
                <p className="text-brand-gold-dark text-center font-medium">💡 {lesson.summary.rule}</p>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="-mx-4 -mt-6 sm:mx-0 sm:mt-0 sm:rounded-3xl relative">
      <div className="flex items-center justify-between mb-8 sticky top-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl z-40 px-4 sm:px-8 py-4 border-b border-slate-200 dark:border-slate-800 shadow-sm">
        <div className="absolute bottom-0 left-0 h-[2px] bg-slate-100 w-full" />
        <motion.div 
          className="absolute bottom-0 left-0 h-[2px] bg-brand-gold-dark" 
          initial={{ width: 0 }}
          animate={{ width: `${(currentSection / (sections.length - 1)) * 100}%` }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
        <Link to={`/cours#lesson-${lesson.id}`} className="flex items-center gap-2 text-slate-500 hover:text-slate-800 transition-colors">
          <ArrowLeft className="w-5 h-5" />
          <span className="hidden sm:inline font-medium">Retour</span>
        </Link>
        <span className="font-bold text-slate-400 uppercase tracking-widest text-xs">Leçon {lesson.id}</span>
        <div className="w-[80px]" />
      </div>

      <div className="max-w-2xl mx-auto pb-32 px-4 sm:px-8 pt-2">
        <header className="space-y-4 mb-16 text-center">
          <motion.p 
            initial={{ opacity: 0, scale: 0.8 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            className="font-arabic text-7xl text-brand-gold-dark mb-4 drop-shadow-sm" 
            dir="rtl"
          >
            {lesson.arabic_title}
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-serif text-4xl font-bold text-slate-900 leading-tight"
          >
            {lesson.title}
          </motion.h1>
        </header>
        
        <div className="space-y-12">
          <AnimatePresence>
            {sections.map((section, idx) => (
              currentSection >= idx && (
                <motion.div 
                  key={section.id}
                  ref={el => { sectionRefs.current[idx] = el; }}
                  variants={sectionVariants}
                  initial="hidden"
                  animate="visible"
                  layout
                >
                  {renderSection(section, true)}
                </motion.div>
              )
            ))}
          </AnimatePresence>
        </div>

        <motion.div 
          layout
          className="mt-8 sm:mt-16 flex justify-center sticky bottom-4 sm:bottom-8 z-30 px-4 pointer-events-none"
        >
          <button 
            onClick={handleNext}
            className={cn(
              "pointer-events-auto px-8 sm:px-10 py-3 sm:py-4 rounded-full font-bold shadow-2xl transition-all w-auto text-base sm:text-lg flex items-center justify-center gap-2 sm:gap-3 backdrop-blur-md active:scale-95 border",
              currentSection === sections.length - 1 
                ? "bg-brand-emerald/95 hover:bg-brand-emerald text-white border-brand-emerald-dark hover:shadow-brand-emerald/20"
                : "bg-slate-900/95 dark:bg-brand-cream/95 text-white dark:text-slate-900 border-slate-800 dark:border-brand-cream-border hover:shadow-slate-900/40 shadow-[0_8px_32px_rgba(0,0,0,0.25)]"
            )}
          >
            {currentSection === sections.length - 1 ? (
               <><CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6"/> Terminer</>
            ) : (
               "Continuer"
            )}
          </button>
        </motion.div>
      </div>
    </div>
  );
}
