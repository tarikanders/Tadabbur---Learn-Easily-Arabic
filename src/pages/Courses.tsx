import { BookOpen, DraftingCompass, Sparkles, CheckCircle2, PlayCircle, X, Zap } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { LESSONS } from "../data/lessons";
import { useLessons } from "../hooks/useLessons";
import { cn } from "../lib/utils";
import { motion, AnimatePresence } from "motion/react";
import React, { useState, useEffect } from "react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 }
  }
};

export default function Courses() {
  const { progress } = useLessons();
  const navigate = useNavigate();
  const location = useLocation();
  const [revisionLessonId, setRevisionLessonId] = useState<number | null>(null);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }, 300); // Wait for animations to settle
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.hash]);

  const level1 = LESSONS.filter(l => l.level === 1);
  const level2 = LESSONS.filter(l => l.level === 2);
  const level3 = LESSONS.filter(l => l.level === 3);

  const revisionLesson = LESSONS.find(l => l.id === revisionLessonId);

  const levelThemes: Record<string, {
    completed: string;
    active: string;
    iconBorderActive: string;
    iconBorderCompleted: string;
    iconCompleted: string;
    iconActive: string;
    textCompleted: string;
    textActive: string;
  }> = {
    gold: {
      completed: "bg-white border-slate-200 shadow-sm hover:border-slate-300",
      active: "bg-white border-brand-gold-dark shadow-md shadow-brand-gold-dark/10 transform hover:-translate-y-1",
      iconBorderActive: "bg-brand-gold-light border-brand-gold-dark/50",
      iconBorderCompleted: "bg-slate-50 border-slate-200",
      iconCompleted: "text-slate-400",
      iconActive: "text-brand-gold-dark",
      textCompleted: "text-slate-400",
      textActive: "text-brand-gold-dark"
    },
    emerald: {
      completed: "bg-white border-slate-200 shadow-sm hover:border-slate-300",
      active: "bg-white border-brand-emerald shadow-md shadow-brand-emerald/10 transform hover:-translate-y-1",
      iconBorderActive: "bg-brand-emerald-light border-brand-emerald/50",
      iconBorderCompleted: "bg-slate-50 border-slate-200",
      iconCompleted: "text-slate-400",
      iconActive: "text-brand-emerald",
      textCompleted: "text-slate-400",
      textActive: "text-brand-emerald"
    },
    rose: {
      completed: "bg-white border-slate-200 shadow-sm hover:border-slate-300",
      active: "bg-white border-rose-500 shadow-md shadow-rose-500/10 transform hover:-translate-y-1",
      iconBorderActive: "bg-rose-50 border-rose-500/50",
      iconBorderCompleted: "bg-slate-50 border-slate-200",
      iconCompleted: "text-slate-400",
      iconActive: "text-rose-500",
      textCompleted: "text-slate-400",
      textActive: "text-rose-500"
    }
  };

  const CustomCourseCard = ({ lesson, status, theme, onDoubleTap, onClick }: any) => {
    return (
      <div 
        onClick={onClick}
        className={cn(
          "flex items-center justify-between p-5 rounded-[24px] border transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer",
          status === "completed" ? theme.completed : theme.active,
          "dark:bg-slate-800 dark:border-slate-700"
        )}
      >
        <div className="flex items-center gap-4">
          <div className={cn(
            "w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 border",
            status === "completed" ? theme.iconBorderCompleted : theme.iconBorderActive,
            "dark:bg-slate-700 dark:border-slate-600"
          )}>
            {status === "completed" 
              ? <CheckCircle2 className={cn("w-6 h-6", theme.iconCompleted, "dark:text-slate-400")} /> 
              : <PlayCircle className={cn("w-6 h-6", theme.iconActive)} />
            }
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <p className="text-sm font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">Leçon {lesson.id}</p>
            </div>
            <p className={cn("font-bold text-lg text-slate-800 dark:text-cream-50")}>{lesson.title}</p>
          </div>
        </div>
        
        <div className="text-right flex flex-col items-end gap-2">
           <div className="flex flex-col items-end">
             <p className="font-arabic text-2xl text-slate-800 dark:text-cream-50" dir="rtl">{lesson.arabic_title}</p>
             <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{lesson.duration_minutes} min</p>
           </div>
           
           {lesson.summary && (
             <button
                onClick={(e) => {
                  e.stopPropagation();
                  onDoubleTap();
                }}
                className="mt-1 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-brand-gold-dark bg-brand-gold-light border border-brand-gold-dark/20 hover:bg-brand-gold-dark hover:text-white dark:bg-slate-700 dark:text-brand-gold-dark dark:border-slate-600 dark:hover:bg-slate-600 transition-colors"
             >
                <Zap className="w-3.5 h-3.5" />
                <span>Révision rapide</span>
             </button>
           )}
        </div>
      </div>
    );
  };

  const renderLevel = (title: string, lessons: typeof LESSONS, themeKey: string) => {
    if (lessons.length === 0) return null;
    
    const theme = levelThemes[themeKey] || levelThemes.gold;
    
    return (
      <div className="space-y-4 relative">
        <div className="flex items-center gap-4 mb-6">
          <div className="h-px bg-slate-200 dark:bg-slate-700 flex-1" />
          <h2 className={cn("text-xl font-serif font-bold uppercase tracking-widest text-center sm:text-left", theme.textActive)}>{title}</h2>
          <div className="h-px bg-slate-200 dark:bg-slate-700 flex-1" />
        </div>
        
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="grid gap-4">
          {lessons.map(lesson => {
            const status = progress[lesson.id]?.status === "completed" ? "completed" : "active";
            
            return (
              <motion.div key={lesson.id} variants={itemVariants} id={`lesson-${lesson.id}`}>
                <CustomCourseCard 
                  lesson={lesson} 
                  status={status} 
                  theme={theme}
                  onClick={() => navigate(`/cours/${lesson.id}`)}
                  onDoubleTap={() => setRevisionLessonId(lesson.id)}
                />
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    );
  };

  return (
    <div className="-mx-4 -mt-6 sm:mx-0 sm:mt-0 sm:rounded-3xl p-4 pt-8 sm:px-8 pb-24 relative min-h-screen">
      <div className="max-w-3xl mx-auto space-y-12 animate-in fade-in duration-500">
        <header className="text-center space-y-2 mb-10">
          <h1 className="font-serif text-4xl font-bold text-brand-gold-dark">Cours</h1>
          <p className="text-slate-500 text-sm sm:text-base px-2">Fondations grammaticales et règles linguistiques. <br className="hidden sm:block"/> <span className="text-brand-gold-dark font-medium"><Zap className="inline-block w-4 h-4 mr-1 mb-0.5" />Cliquez sur "Révision rapide" pour un résumé.</span></p>
        </header>

        {renderLevel("Niveau 1 — Les bases", level1, "gold")}
        {renderLevel("Niveau 2 — Approfondir", level2, "emerald")}
        {renderLevel("Niveau 3 — Morphologie", level3, "rose")}
      </div>

      {/* Revision Modal */}
      <AnimatePresence>
        {revisionLesson && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm"
            onClick={() => setRevisionLessonId(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-white dark:bg-slate-800 rounded-[32px] p-6 sm:p-8 w-full max-w-lg shadow-2xl relative max-h-[90vh] overflow-y-auto"
              onClick={e => e.stopPropagation()}
            >
              <button 
                onClick={() => setRevisionLessonId(null)}
                className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-slate-100 dark:bg-slate-700/50 p-2 rounded-full text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-cream-50 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-brand-gold-light dark:bg-slate-700 rounded-xl flex items-center justify-center text-brand-gold-dark">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-slate-800 dark:text-cream-50">Résumé rapide</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Leçon {revisionLesson.id} - {revisionLesson.title}</p>
                </div>
              </div>

              {revisionLesson.summary && (
                <div className="space-y-6">
                  {revisionLesson.summary.rule && (
                     <div className="bg-brand-cream/40 dark:bg-slate-700/50 border border-brand-cream-border dark:border-slate-600 p-4 rounded-2xl">
                       <p className="font-bold text-brand-gold-dark dark:text-brand-gold text-sm mb-1 uppercase tracking-widest">Règle essentielle</p>
                       <p className="text-slate-800 dark:text-cream-50 leading-relaxed font-medium">{revisionLesson.summary.rule}</p>
                     </div>
                  )}

                  {revisionLesson.summary.table && revisionLesson.summary.table.length > 0 && (
                    <div className="space-y-3">
                      <p className="font-bold text-slate-400 dark:text-slate-500 text-xs uppercase tracking-widest ml-1">Points clés</p>
                      {revisionLesson.summary.table.map((row, i) => (
                        <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between p-3 sm:p-4 bg-slate-50 dark:bg-slate-700/30 border border-slate-100 dark:border-slate-700 rounded-xl gap-2">
                          <div className="flex-1">
                            <span className="font-bold text-slate-800 dark:text-cream-100 flex items-center gap-2">
                              {row.type}
                            </span>
                            <span className="text-xs text-slate-500 dark:text-slate-400 block mt-1">{row.signal}</span>
                          </div>
                          {row.example && (
                            <div className="font-arabic text-xl font-medium text-brand-emerald-dark dark:text-emerald-400 px-3 py-1 bg-brand-emerald-light/30 dark:bg-emerald-500/10 rounded-lg text-right min-w-[30%]">
                              {row.example}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {!revisionLesson.summary && (
                <div className="text-center py-8">
                  <p className="text-slate-500 dark:text-slate-400">Pas de résumé disponible pour cette leçon.</p>
                </div>
              )}

              <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-700 flex gap-3">
                <button 
                  onClick={() => navigate(`/cours/${revisionLesson.id}`)}
                  className="flex-1 bg-brand-gold-dark hover:bg-slate-900 dark:hover:bg-slate-950 text-white font-bold py-4 rounded-full transition-colors"
                >
                  Ouvrir la leçon
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
