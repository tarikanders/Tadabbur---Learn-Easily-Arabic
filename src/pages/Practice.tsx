import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Play, Sparkles, BookOpen, Clock, BrainCircuit, Target, CheckCircle2, ChevronRight } from "lucide-react";
import { useSRS } from "../hooks/useSRS";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "../lib/utils";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 300, damping: 24 }
  }
} as const;

export default function Practice() {
  const { getDueWords } = useSRS();
  const dueWordsCount = getDueWords().length;
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<"daily" | "surah" | "rule">("daily");
  
  return (
    <div className="space-y-8 animate-in fade-in duration-500 relative max-w-2xl mx-auto pb-24">
      <div className="absolute inset-0 pattern-ornament pointer-events-none -z-10 opacity-30" />
      
      <header className="mb-8 mt-6 px-4">
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-slate-900 dark:text-cream-50 mb-4">Pratique</h1>
        <p className="text-slate-600 dark:text-slate-400 text-lg">Entraînez-vous pour consolider vos acquis.</p>
      </header>

      {/* Tabs */}
      <div className="px-4 mb-6">
        <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-2xl">
          <button
            onClick={() => setActiveTab("daily")}
            className={cn("flex-1 py-2.5 px-4 rounded-xl text-sm font-bold transition-all", activeTab === "daily" ? "bg-white dark:bg-slate-700 text-slate-900 dark:text-cream-50 shadow-sm" : "text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-cream-200")}
          >
            Daily Drill
          </button>
          <button
            onClick={() => setActiveTab("surah")}
            className={cn("flex-1 py-2.5 px-4 rounded-xl text-sm font-bold transition-all", activeTab === "surah" ? "bg-white dark:bg-slate-700 text-slate-900 dark:text-cream-50 shadow-sm" : "text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-cream-200")}
          >
            Par Sourate
          </button>
          <button
            onClick={() => setActiveTab("rule")}
            className={cn("flex-1 py-2.5 px-4 rounded-xl text-sm font-bold transition-all", activeTab === "rule" ? "bg-white dark:bg-slate-700 text-slate-900 dark:text-cream-50 shadow-sm" : "text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-cream-200")}
          >
            Par Règle
          </button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div 
          key={activeTab}
          variants={containerVariants} 
          initial="hidden" 
          animate="visible" 
          exit={{ opacity: 0, y: -10 }}
          className="space-y-6 px-4"
        >
          {activeTab === "daily" && (
            <>
              <motion.div variants={itemVariants}>
                <h2 className="text-xl font-bold text-slate-900 dark:text-cream-50 mb-4 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-brand-emerald" /> Entraînement du Jour
                </h2>
                <div className="grid gap-4">
                  <div 
                    onClick={() => navigate("/exercice/daily")}
                    className="bg-brand-emerald-light/40 border border-brand-emerald/40 p-6 rounded-[32px] hover:bg-brand-emerald-light/60 transition-all hover:scale-[1.02] active:scale-95 group cursor-pointer"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-14 h-14 bg-brand-emerald border border-brand-emerald-dark/20 text-white rounded-2xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                        <Play className="w-7 h-7 ml-1" />
                      </div>
                      <span className="bg-white/80 text-brand-emerald-dark text-xs font-bold px-3 py-1 rounded-full border border-brand-emerald/20">
                        10-15 min
                      </span>
                    </div>
                    <h3 className="font-bold text-xl text-brand-emerald-dark mb-2">Daily Drill - Grammaire</h3>
                    <p className="text-slate-700 mb-4 leading-relaxed">5 exercices coraniques générés selon vos erreurs et vos leçons terminées.</p>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="pt-6">
                <h2 className="text-xl font-bold text-slate-900 dark:text-cream-50 mb-4 flex items-center gap-2">
                  <BrainCircuit className="w-5 h-5 text-brand-gold-dark" /> Vocabulaire SRS
                </h2>
                <div className="grid gap-4">
                  <Link to="/vocabulaire" className="bg-brand-gold-light/20 dark:bg-slate-800 border border-brand-gold-dark/20 dark:border-slate-700 p-6 rounded-[32px] hover:bg-brand-gold-light/40 dark:hover:bg-slate-700/50 transition-all hover:scale-[1.02] active:scale-95 group">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-brand-gold-dark text-white rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                          <BrainCircuit className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg text-slate-800 dark:text-cream-50">Session du jour</h3>
                          <p className="text-slate-500 dark:text-slate-400 text-sm">Répétition espacée</p>
                        </div>
                      </div>
                      <span className={cn(
                        "text-sm font-bold px-3 py-1.5 rounded-lg",
                        dueWordsCount > 0 ? "bg-brand-gold-dark text-white" : "bg-white dark:bg-slate-700 text-brand-gold-dark border border-brand-gold-dark/20 dark:border-slate-600"
                      )}>
                        {dueWordsCount > 0 ? `${dueWordsCount} à voir` : "À jour"}
                      </span>
                    </div>
                  </Link>
                </div>
              </motion.div>
            </>
          )}

          {activeTab === "surah" && (
            <motion.div variants={itemVariants}>
              <h2 className="text-xl font-bold text-slate-900 dark:text-cream-50 mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-slate-500" /> Par Sourate
              </h2>
              <div className="space-y-4">
                <Link to="/exercice/sourate/67" className="flex items-center justify-between p-5 rounded-3xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-slate-300 dark:hover:border-slate-600 hover:shadow-sm transition-all group">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-slate-100 dark:bg-slate-700 rounded-xl flex items-center justify-center text-slate-600 dark:text-slate-300 font-bold font-serif">
                      67
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-slate-800 dark:text-cream-50">Al-Mulk (الملك)</h3>
                      <p className="text-slate-500 dark:text-slate-400 text-sm">Sourate principale • 30 versets</p>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-slate-400 group-hover:translate-x-1 transition-transform" />
                </Link>

                <div className="flex items-center justify-between p-5 rounded-3xl border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/50 opacity-70">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-slate-200 dark:bg-slate-700 rounded-xl flex items-center justify-center text-slate-400 dark:text-slate-500 font-bold font-serif">
                      18
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-slate-800 dark:text-cream-50">Al-Kahf (الكهف)</h3>
                      <p className="text-slate-500 dark:text-slate-400 text-sm">Prochainement</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "rule" && (
            <motion.div variants={itemVariants}>
              <h2 className="text-xl font-bold text-slate-900 dark:text-cream-50 mb-4 flex items-center gap-2">
                <Target className="w-5 h-5 text-slate-500" /> Par Règle Grammaticale
              </h2>
              <div className="grid gap-3">
                {[
                  { name: "Les 3 cas (مرفوع / منصوب / مجرور)", type: "case_identifier" },
                  { name: "L'annexion (إضافة)", type: "idafa_identifier" },
                  { name: "Les adjectifs (النعت)", type: "highlight" },
                  { name: "Les verbes (passé/présent/impératif)", type: "verb_analyzer" },
                  { name: "Les racines (الجذر)", type: "root_finder" }
                ].map((rule, idx) => (
                  <Link key={idx} to={`/exercice/rule/${rule.type}`} className="flex items-center justify-between p-4 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors group">
                    <span className="font-medium text-slate-700 dark:text-cream-200">{rule.name}</span>
                    <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
                  </Link>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-700">
                <Link to="/exercice/free_irab" className="flex items-start gap-4 p-5 rounded-3xl bg-brand-gold-dark text-white hover:bg-slate-900 transition-colors shadow-md">
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center shrink-0">
                    <span className="text-xl">🏆</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Mode Défi (I'rab)</h3>
                    <p className="text-white/80 text-sm">Analyser un verset complet sans aide (إعراب libre).</p>
                  </div>
                </Link>
              </div>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
