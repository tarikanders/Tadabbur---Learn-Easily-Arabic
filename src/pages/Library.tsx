import { useState, useEffect } from "react";
import { Search, Filter, BookOpen } from "lucide-react";
import { VOCABULARY_LIST } from "../data/vocabulary";
import { useSRS } from "../hooks/useSRS";
import { cn } from "../lib/utils";
import { useSearchParams } from "react-router-dom";

export default function Library() {
  const { srsData } = useSRS();
  const [searchParams, setSearchParams] = useSearchParams();
  const initialFilter = (searchParams.get("filter") as any) || "all";
  
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<"all" | "mastered" | "learning" | "unseen">(
    ["all", "mastered", "learning", "unseen"].includes(initialFilter) ? initialFilter : "all"
  );

  useEffect(() => {
    if (filter !== "all") {
      setSearchParams({ filter });
    } else {
      setSearchParams({});
    }
  }, [filter, setSearchParams]);

  const wordStatuses = VOCABULARY_LIST.map(word => {
    const state = srsData[word.id];
    let status = "unseen";
    if (state) {
      status = state.status;
    }
    return { ...word, status };
  });

  const filteredWords = wordStatuses.filter(word => {
    const matchesSearch = word.arabic.includes(search) || 
                          word.translation.toLowerCase().includes(search.toLowerCase()) ||
                          word.transliteration.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === "all" || word.status === filter;
    
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="max-w-2xl mx-auto space-y-6 animate-in fade-in duration-500 pb-24 px-4 pt-6">
      <header className="text-center space-y-2 mb-8">
        <h1 className="font-serif text-4xl font-bold text-slate-900">Bibliothèque</h1>
        <p className="text-slate-500">Parcourez les 550 mots les plus fréquents.</p>
      </header>

      <div className="space-y-4">
        {/* Search */}
        <div className="relative relative z-10 w-full mb-6">
          <input 
            type="text" 
            placeholder="Rechercher en arabe ou français..." 
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-brand-gold-dark focus:ring-1 focus:ring-brand-gold-dark transition-all shadow-sm"
          />
          <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
        </div>

        {/* Filters */}
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
          <button 
            onClick={() => setFilter("all")}
            className={cn("px-4 py-2 rounded-xl whitespace-nowrap text-sm font-bold transition-colors border", 
               filter === "all" ? "bg-slate-800 text-white border-slate-800" : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"
            )}
          >
            Tous les mots
          </button>
          <button 
            onClick={() => setFilter("unseen")}
            className={cn("px-4 py-2 rounded-xl whitespace-nowrap text-sm font-bold transition-colors border", 
               filter === "unseen" ? "bg-slate-800 text-white border-slate-800" : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"
            )}
          >
            Nouveaux
          </button>
          <button 
            onClick={() => setFilter("learning")}
            className={cn("px-4 py-2 rounded-xl whitespace-nowrap text-sm font-bold transition-colors border", 
               filter === "learning" ? "bg-slate-800 text-white border-slate-800" : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"
            )}
          >
            En cours
          </button>
          <button 
            onClick={() => setFilter("mastered")}
            className={cn("px-4 py-2 rounded-xl whitespace-nowrap text-sm font-bold transition-colors border", 
               filter === "mastered" ? "bg-slate-800 text-white border-slate-800" : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"
            )}
          >
            Maîtrisés
          </button>
        </div>
      </div>

      {/* List */}
      <div className="space-y-3 mt-6">
        {filteredWords.length === 0 ? (
           <div className="text-center py-10 text-slate-500 font-medium">Aucun mot trouvé.</div>
        ) : (
          filteredWords.map(word => (
            <div key={word.id} className="bg-white p-4 rounded-2xl border border-slate-200 flex items-center justify-between hover:border-brand-gold-dark/40 transition-colors shadow-sm">
              <div className="flex items-center gap-4">
                <div className={cn(
                  "w-3 h-3 rounded-full flex-shrink-0",
                  word.status === "mastered" ? "bg-brand-emerald shadow-[0_0_10px_rgba(16,185,129,0.3)]" :
                  word.status === "learning" ? "bg-brand-gold-dark shadow-[0_0_10px_rgba(245,158,11,0.3)]" :
                  "bg-slate-200"
                )} />
                <div>
                  <p className="font-bold text-slate-900 flex items-baseline gap-2">
                    <span className="font-arabic text-2xl" dir="rtl">{word.arabic}</span>
                    <span className="text-xs text-slate-500 uppercase tracking-widest">{word.transliteration}</span>
                  </p>
                  <p className="text-sm text-slate-600">{word.translation}</p>
                </div>
              </div>
              <div className="text-right flex flex-col items-end">
                 <span className="text-[10px] text-brand-gold-dark uppercase tracking-widest font-bold">Rang {word.frequency}</span>
                 <span className="text-xs text-slate-600 bg-slate-100 px-2 py-1 rounded mt-1 border border-slate-200">{word.type}</span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
