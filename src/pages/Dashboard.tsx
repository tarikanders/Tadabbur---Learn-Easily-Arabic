import { BookOpen, Trophy, Sparkles, TrendingUp, Play } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "../lib/utils";
import { useSRS } from "../hooks/useSRS";
import { VOCABULARY_LIST } from "../data/vocabulary";

export default function Dashboard() {
  const { getStats, streakData, getUnlockedTier, srsData } = useSRS();
  
  const stats = getStats();
  const totalWords = VOCABULARY_LIST.length;
  const progression = ((stats.mastered / totalWords) * 100).toFixed(1);
  const currentTier = getUnlockedTier();
  
  const wordsToReview = Object.values(srsData).filter((s: any) => s.status === 'learning').length;
  
  return (
    <div className="space-y-6 sm:space-y-8 animate-in fade-in duration-500 relative max-w-lg mx-auto pb-24 px-0 sm:px-4">
      <div className="absolute inset-0 pattern-ornament pointer-events-none -z-10 opacity-30" />
      
      <header className="text-center space-y-2 pt-4 sm:pt-6">
        <h1 className="font-arabic text-6xl sm:text-7xl text-brand-emerald mb-1 sm:mb-2" dir="rtl">تَدَبُّر</h1>
        <p className="text-xl sm:text-2xl text-brand-gold-dark font-serif font-medium tracking-widest uppercase">Tadabbur</p>
      </header>

      <div className="grid grid-cols-2 gap-3 sm:gap-4">
        <div className="bg-white p-4 sm:p-5 rounded-3xl border border-slate-200 flex flex-col items-center justify-center text-center shadow-sm">
          <BookOpen className="w-6 h-6 text-brand-emerald mb-2" />
          <p className="text-[10px] sm:text-xs text-slate-500 uppercase tracking-widest font-bold mb-1">Maîtrisés</p>
          <p className="text-xl sm:text-2xl font-bold text-slate-900">{stats.mastered} <span className="text-xs sm:text-sm font-normal text-slate-400">/ 550</span></p>
        </div>
        
        <div className="bg-white p-4 sm:p-5 rounded-3xl border border-slate-200 flex flex-col items-center justify-center text-center shadow-sm">
          <Trophy className="w-6 h-6 text-brand-gold-dark mb-2" />
          <p className="text-[10px] sm:text-xs text-slate-500 uppercase tracking-widest font-bold mb-1">Streak</p>
          <p className="text-xl sm:text-2xl font-bold text-slate-900">{streakData.currentStreak} <span className="text-xs sm:text-sm font-normal text-slate-400">jours</span></p>
        </div>

        <Link to="/bibliotheque?filter=learning" className="bg-white hover:bg-slate-50 transition-colors p-4 sm:p-5 rounded-3xl border border-slate-200 flex flex-col items-center justify-center text-center shadow-sm">
          <Sparkles className="w-6 h-6 text-orange-500 mb-2" />
          <p className="text-[10px] sm:text-xs text-slate-500 uppercase tracking-widest font-bold mb-1">À revoir</p>
          <p className="text-xl sm:text-2xl font-bold text-slate-900">{wordsToReview}</p>
        </Link>
        
        <div className="bg-white p-4 sm:p-5 rounded-3xl border border-slate-200 flex flex-col items-center justify-center text-center shadow-sm">
          <TrendingUp className="w-6 h-6 text-brand-emerald mb-2" />
          <p className="text-[10px] sm:text-xs text-slate-500 uppercase tracking-widest font-bold mb-1">Vus ce jour</p>
          <p className="text-xl sm:text-2xl font-bold text-slate-900">{streakData.wordsStudiedToday}</p>
        </div>
      </div>

      <section className="bg-white rounded-[24px] sm:rounded-3xl p-6 border border-brand-gold-dark/20 shadow-sm text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold-light rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none" />
        
        <div className="mb-6 z-10 relative">
          <p className="text-slate-800 font-medium mb-1">Session Quotidienne</p>
          <p className="text-sm text-slate-600">
            <span className="text-brand-emerald-dark font-bold">{stats.dueToday} cartes à réviser</span> aujourd'hui<br/>
            <span className="text-brand-gold-dark font-bold">{stats.newWords} nouveaux mots</span> disponibles
          </p>
        </div>
        
        <Link 
          to="/vocabulaire" 
          className="w-full inline-flex items-center justify-center px-6 py-4 rounded-2xl bg-brand-gold-dark hover:bg-[#A37D3D] text-white font-bold text-[15px] sm:text-lg transition-all shadow-md active:scale-[0.98] relative z-10"
        >
          <Play className="w-5 h-5 mr-3 fill-white" />
          Commencer la session
        </Link>
      </section>

      <section>
        <div className="flex justify-between items-end mb-4 px-1">
          <h3 className="text-slate-900 font-serif font-bold text-xl">Progression Globale</h3>
          <span className="text-[10px] sm:text-xs font-bold text-brand-gold-dark uppercase tracking-wider">Palier {currentTier}</span>
        </div>
        
        <div className="space-y-3 sm:space-y-4 relative">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(tier => {
            const isUnlocked = true;
            const isCurrent = currentTier === tier;
            
            const startRank = (tier - 1) * 50;
            const endRank = tier * 50;
            
            const sortedWords = [...VOCABULARY_LIST].sort((a,b) => b.frequency - a.frequency);
            const tierWords = sortedWords.slice(startRank, endRank);
            
            const masteredCount = tierWords.filter(w => srsData[w.id]?.status === 'mastered').length;
            const percentage = tierWords.length > 0 ? (masteredCount / tierWords.length) * 100 : 0;
            
            return (
              <div key={tier} className={cn("relative p-4 rounded-[20px] sm:rounded-2xl border transition-all", 
                isCurrent ? "bg-white border-brand-gold-dark/40 shadow-sm" : 
                "bg-slate-50 border-brand-emerald/20 hover:border-brand-emerald/40 cursor-pointer"
              )}>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[13px] sm:text-sm font-bold text-slate-800">Palier {tier} <span className="text-slate-500 text-[10px] sm:text-xs ml-1 sm:ml-2">({startRank + 1}-{endRank})</span></span>
                  {percentage === 100 && <span className="text-[10px] sm:text-xs text-brand-emerald-dark font-bold">Complété</span>}
                  {percentage < 100 && <span className="text-[10px] sm:text-xs text-brand-gold-dark font-bold">{masteredCount}/{tierWords.length}</span>}
                </div>
                <div className="h-1.5 sm:h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                  <div 
                    className={cn("h-full transition-all duration-1000", isCurrent ? "bg-brand-gold-dark" : "bg-brand-emerald")}
                    style={{ width: `${percentage}%` }}
                  />
                </div>
              </div>
            )
          })}
        </div>
      </section>

    </div>
  );
}

