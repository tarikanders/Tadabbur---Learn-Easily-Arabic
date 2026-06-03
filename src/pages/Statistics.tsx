import { Award, TrendingUp, Sparkles, AlertCircle, BookOpen } from "lucide-react";
import { useSRS } from "../hooks/useSRS";

export default function Statistics() {
  const { getStats, streakData, srsData } = useSRS();
  
  const stats = getStats();
  
  // Custom visual for "Retention" based on data
  // How many times have we answered correctly vs total reviews?
  // We don't track total reviews exactly right now, so we can make a visual based on ease factors
  const masteredWords = Object.values(srsData || {}).filter((s: any) => s.status === 'mastered').length;
  const learningWords = Object.values(srsData || {}).filter((s: any) => s.status === 'learning').length;

  return (
    <div className="max-w-2xl mx-auto space-y-8 animate-in fade-in duration-500 pb-24 px-4 pt-6">
      <header className="text-center space-y-2 mb-10">
        <h1 className="font-serif text-4xl font-bold text-slate-900">Statistiques</h1>
        <p className="text-slate-500">Analysez votre mémorisation du vocabulaire.</p>
      </header>

      <section className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold-light rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none" />
        
        <h2 className="text-xl font-serif font-bold text-slate-800 mb-6 flex items-center gap-2">
           <Award className="w-5 h-5 text-brand-gold-dark" /> Vue Globale
        </h2>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 flex flex-col items-center justify-center text-center">
            <span className="text-4xl font-bold text-brand-emerald mb-2">{stats.mastered}</span>
            <span className="text-sm text-slate-500 font-bold uppercase tracking-wider">Mots Maîtrisés</span>
          </div>

          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 flex flex-col items-center justify-center text-center">
            <span className="text-4xl font-bold text-brand-gold-dark mb-2">{streakData.currentStreak}</span>
            <span className="text-sm text-slate-500 font-bold uppercase tracking-wider">Jours de suite</span>
          </div>
          
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 flex flex-col items-center justify-center text-center">
            <span className="text-4xl font-bold text-brand-navy mb-2">{streakData.bestStreak}</span>
            <span className="text-sm text-slate-500 font-bold uppercase tracking-wider">Record (Streak)</span>
          </div>
          
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 flex flex-col items-center justify-center text-center">
            <span className="text-4xl font-bold text-brand-emerald mb-2">{stats.learning}</span>
            <span className="text-sm text-slate-500 font-bold uppercase tracking-wider">En cours d'app.</span>
          </div>
        </div>
      </section>

      <section className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm relative overflow-hidden">
        <h2 className="text-xl font-serif font-bold text-slate-800 mb-6 flex items-center gap-2">
           <TrendingUp className="w-5 h-5 text-brand-emerald" /> Rétention (SRS)
        </h2>
        
        <div className="space-y-6">
          <div className="flex justify-between items-end mb-2">
            <span className="text-sm font-bold text-slate-600">Taux de maîtrise estimé</span>
            <span className="text-2xl font-bold text-brand-emerald">{stats.mastered > 0 ? Math.round((stats.mastered / (stats.mastered+stats.learning)) * 100) : 0}%</span>
          </div>
          
          <div className="w-full h-4 bg-slate-100 rounded-full overflow-hidden flex border border-slate-200">
            <div 
              className="h-full bg-brand-emerald transition-all duration-1000"
              style={{ width: `${stats.mastered > 0 ? (stats.mastered / (stats.mastered+stats.learning)) * 100 : 0}%` }}
              title="Maîtrisés"
            />
            <div 
              className="h-full bg-brand-gold transition-all duration-1000"
              style={{ width: `${stats.learning > 0 ? (stats.learning / (stats.mastered+stats.learning)) * 100 : 0}%` }}
              title="En apprentissage"
            />
          </div>
          
          <div className="flex justify-between text-xs font-bold text-slate-500 uppercase tracking-widest mt-2">
             <div className="flex items-center gap-2"><div className="w-3 h-3 bg-brand-emerald rounded-sm"></div> Maîtrisé solide</div>
             <div className="flex items-center gap-2"><div className="w-3 h-3 bg-brand-gold rounded-sm"></div> En fragilité</div>
          </div>
        </div>
      </section>

    </div>
  );
}
