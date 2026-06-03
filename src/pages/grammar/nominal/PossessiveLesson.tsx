import React, { useState } from 'react';
import { Link as LinkIcon, AlertCircle } from 'lucide-react';
import { cn } from '../../../lib/utils';

export default function PossessiveLesson({ onBack }: { onBack: () => void }) {
  const [showIdafa, setShowIdafa] = useState(false);

  return (
    <div className="space-y-8 animate-in fade-in duration-500 pb-10">
      <button onClick={onBack} className="text-brand-emerald font-bold flex items-center gap-2 hover:underline bg-emerald-50 dark:bg-emerald-900/30 px-4 py-2 rounded-full">
        &larr; Retour aux leçons
      </button>
      
      <div className="bg-white dark:bg-slate-800 rounded-[40px] p-8 md:p-12 border border-cream-200 dark:border-slate-700 shadow-xl relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-4xl font-serif font-bold mb-6 text-slate-900 dark:text-cream-50 flex items-center gap-3">
            <LinkIcon className="w-10 h-10 text-brand-emerald" /> L'Annexion et Possession (Idafa)
          </h2>
          
          <div className="prose dark:prose-invert max-w-none text-lg text-slate-600 dark:text-cream-300 space-y-8">
            <p className="lead text-xl text-slate-700 dark:text-cream-200">
              L'Idafa (إِضَافَة) est la structure grammaticale la plus fréquente dans le Coran. Elle lie deux noms ensemble pour indiquer une possession, une relation ou une affiliation. En français, cela correspond généralement à <strong>"X de Y"</strong>.
            </p>

            <div className="flex flex-col lg:flex-row gap-8 items-stretch bg-slate-50 dark:bg-slate-900/50 p-8 md:p-12 rounded-[40px] border border-slate-200 dark:border-slate-700 my-12">
              
              <div className="flex-1 bg-white dark:bg-slate-800 p-8 rounded-[32px] shadow-sm relative">
                <div className="absolute top-4 left-4 w-8 h-8 bg-brand-emerald/10 text-brand-emerald rounded-full flex items-center justify-center font-bold">1</div>
                <div className="text-center">
                  <h3 className="font-bold text-2xl text-brand-emerald mb-2">Mudaf <span className="font-arabic font-normal" dir="rtl">(مُضَاف)</span></h3>
                  <p className="text-sm text-slate-500 mb-6 uppercase tracking-widest font-bold">L'objet possédé</p>
                  
                  <div className="font-arabic text-6xl mb-6 py-4 border-y border-slate-100 dark:border-slate-700" dir="rtl">رَسُولُ</div>
                  
                  <div className="bg-red-50 dark:bg-red-900/10 p-4 rounded-2xl border-l-4 border-red-500 text-left">
                    <strong className="text-red-700 dark:text-red-400 block mb-2 text-sm flex items-center gap-2"><AlertCircle className="w-4 h-4"/> 2 Interdits absolus :</strong>
                    <ul className="list-disc pl-4 text-sm text-slate-700 dark:text-slate-300 space-y-2">
                      <li><strong>Jamais</strong> de l'article "AL" (ال)</li>
                      <li><strong>Jamais</strong> de Tanween (Double voyelle, ex: un)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="hidden lg:flex items-center justify-center">
                <div className="w-16 h-16 bg-gold-400 rounded-full flex items-center justify-center text-white font-bold text-3xl shadow-lg z-10 -mx-8 relative">
                  +
                </div>
              </div>
              <div className="flex lg:hidden items-center justify-center -my-4 z-10 relative">
                <div className="w-16 h-16 bg-gold-400 rounded-full flex items-center justify-center text-white font-bold text-3xl shadow-lg border-4 border-slate-50 dark:border-slate-900">
                  +
                </div>
              </div>

              <div className="flex-1 bg-white dark:bg-slate-800 p-8 rounded-[32px] shadow-sm relative">
                <div className="absolute top-4 left-4 w-8 h-8 bg-gold-500/10 text-gold-600 rounded-full flex items-center justify-center font-bold">2</div>
                <div className="text-center">
                  <h3 className="font-bold text-2xl text-gold-600 dark:text-gold-400 mb-2">Mudaf Ilayh <span className="font-arabic font-normal" dir="rtl">(مُضَاف إِلَيْهِ)</span></h3>
                  <p className="text-sm text-slate-500 mb-6 uppercase tracking-widest font-bold">Le possesseur</p>
                  
                  <div className="font-arabic text-6xl mb-6 py-4 border-y border-slate-100 dark:border-slate-700" dir="rtl">اللَّهِ</div>
                  
                  <div className="bg-emerald-50 dark:bg-emerald-900/10 p-4 rounded-2xl border-l-4 border-emerald-500 text-left">
                    <strong className="text-emerald-700 dark:text-emerald-400 block mb-2 text-sm flex items-center gap-2"><AlertCircle className="w-4 h-4"/> 1 Obligation absolue :</strong>
                    <ul className="list-disc pl-4 text-sm text-slate-700 dark:text-slate-300 space-y-2">
                      <li><strong>Toujours</strong> au cas Majroor (Génitif). Se termine par Kasra (i) ou Kasratayn (in).</li>
                    </ul>
                  </div>
                </div>
              </div>

            </div>

            <div className="bg-gradient-to-r from-brand-emerald to-emerald-700 p-8 md:p-12 rounded-[40px] text-white my-12 text-center shadow-xl transform hover:scale-[1.02] transition-transform">
              <h4 className="font-serif text-2xl opacity-90 mb-6">Résultat Final</h4>
              <div className="font-arabic text-7xl mb-4 font-bold" dir="rtl">رَسُولُ اللَّهِ</div>
              <div className="text-3xl font-bold mb-2">Rasoolullahi</div>
              <div className="text-emerald-100 text-xl tracking-wide">Le Messager d'Allah</div>
            </div>

            <h3 className="text-3xl font-serif font-bold text-slate-800 dark:text-cream-50 mt-12 mb-8">Idafa avec un pronom attaché</h3>
            <p>
              Souvent, le possesseur (Mudaf Ilayh) n'est pas un nom indépendant, mais un <strong>pronom attaché</strong> à la fin du mot. C'est le cas pour des traductions comme "Mon", "Ton", "Son", "Leur".
            </p>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              {[
                { word: "رَبُّكُمْ", roots: "رَبُّ + كُمْ", meaning: "Votre Seigneur", details: "Rabb (Seigneur) + Kum (Vous pluriel)" },
                { word: "كِتَابُهُ", roots: "كِتَابُ + ـهُ", meaning: "Son Livre", details: "Kitab (Livre) + Hu (Lui/Son)" },
                { word: "دِينِي", roots: "دِينِ + ـي", meaning: "Ma religion", details: "Deen (Religion) + ee (Moi/Ma)" },
                { word: "قُلُوبِهِمْ", roots: "قُلُوبِ + هِمْ", meaning: "Leurs cœurs", details: "Quloob (Cœurs) + Him (Eux/Leurs)" },
              ].map((item, idx) => (
                <div key={idx} className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 p-6 rounded-[24px] flex flex-col items-center text-center">
                  <div className="font-arabic text-5xl text-gold-500 mb-4 font-bold" dir="rtl">{item.word}</div>
                  <div className="font-bold text-xl text-slate-800 dark:text-slate-100 mb-1">{item.meaning}</div>
                  <button 
                    onClick={() => setShowIdafa(showIdafa === idx ? false : idx)}
                    className="text-brand-emerald text-sm font-bold uppercase mt-4 hover:underline"
                  >
                    {showIdafa === idx ? "Cacher la décomposition" : "Voir structure"}
                  </button>
                  <div className={cn(
                    "overflow-hidden transition-all duration-300 w-full mt-4",
                    showIdafa === idx ? "h-auto opacity-100" : "h-0 opacity-0"
                  )}>
                    <div className="bg-white dark:bg-slate-800 p-3 rounded-xl border border-cream-200 dark:border-slate-700">
                      <div className="font-arabic text-2xl text-slate-600 dark:text-cream-200 mb-2" dir="rtl">{item.roots}</div>
                      <div className="text-xs text-slate-500">{item.details}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
