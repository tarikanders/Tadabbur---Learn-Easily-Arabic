import React, { useState } from 'react';
import { Hash, RotateCw, RefreshCw, CheckCircle2 } from 'lucide-react';
import { cn } from '../../../lib/utils';

export default function NumberLesson({ onBack }: { onBack: () => void }) {
  const [showAnswers, setShowAnswers] = useState(false);

  const exercises = [
    { sing: "مُؤْمِن", tr: "Mu'min", pl: "مُؤْمِنُون", plTr: "Mu'minuun", type: "Pluriel Sain Masculin", rule: "Ajout de وُنَ (uun)" },
    { sing: "آيَة", tr: "Aayah", pl: "آيَات", plTr: "Aayaat", type: "Pluriel Sain Féminin", rule: "Remplacement par اَات (aat)" },
    { sing: "كِتَاب", tr: "Kitaab", pl: "كُتُب", plTr: "Kutub", type: "Pluriel Brisé", rule: "Structure interne modifiée" },
    { sing: "جَنَّة", tr: "Jannah", pl: "جَنَّاتَانِ", plTr: "Jannataani", type: "Duel", rule: "Ajout de اَانِ (aani) - 'Deux jardins'" },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-500 pb-10">
      <button onClick={onBack} className="text-brand-emerald font-bold flex items-center gap-2 hover:underline bg-emerald-50 dark:bg-emerald-900/30 px-4 py-2 rounded-full">
        &larr; Retour aux leçons
      </button>
      
      <div className="bg-white dark:bg-slate-800 rounded-[40px] p-8 md:p-12 border border-cream-200 dark:border-slate-700 shadow-xl relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-4xl font-serif font-bold mb-6 text-slate-900 dark:text-cream-50 flex items-center gap-3">
            <Hash className="w-10 h-10 text-brand-emerald" /> Le Nombre (Singulier, Duel, Pluriel)
          </h2>
          
          <div className="prose dark:prose-invert max-w-none text-lg text-slate-600 dark:text-cream-300 space-y-8">
            <p className="lead text-xl text-slate-700 dark:text-cream-200">
              Une des grandes beautés de la langue arabe est son traitement du nombre. Au-delà du <strong>Singulier</strong> (1) et du <strong>Pluriel</strong> (3+), l'arabe possède un nombre dédié spécifiquement à la paire : le <strong>Duel</strong> (2).
            </p>

            <div className="grid md:grid-cols-3 gap-6 my-10">
              <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-[32px] border border-slate-200 dark:border-slate-700 text-center flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-2xl mb-2 text-slate-800 dark:text-slate-200">1. Singulier</h3>
                  <span className="text-sm font-bold text-slate-400 uppercase tracking-widest block mb-6">Mufrad</span>
                  <div className="font-arabic text-6xl mb-4 text-brand-emerald" dir="rtl">مُسْلِم</div>
                  <div className="font-bold text-xl">Muslim</div>
                  <div className="text-slate-500">Un (1) musulman</div>
                </div>
              </div>

              <div className="bg-emerald-50 dark:bg-emerald-900/20 p-8 rounded-[32px] border border-emerald-200 dark:border-emerald-900/30 text-center flex flex-col justify-between transform transition-transform hover:scale-105 shadow-sm">
                <div>
                  <h3 className="font-bold text-2xl mb-2 text-emerald-800 dark:text-emerald-400">2. Duel</h3>
                  <span className="text-sm font-bold text-emerald-500 uppercase tracking-widest block mb-6">Muthanna</span>
                  <div className="font-arabic text-6xl mb-4 text-gold-500" dir="rtl">مُسْلِمَانِ</div>
                  <div className="font-bold text-xl">Muslimaani</div>
                  <div className="text-slate-500">Deux (2) musulmans</div>
                </div>
                <div className="mt-6 pt-6 border-t border-emerald-200 dark:border-emerald-800/50">
                  <span className="text-xs font-bold block mb-1">Terminaisons :</span>
                  <span className="font-arabic text-lg">ـَانِ (aan)</span> ou <span className="font-arabic text-lg">ـَيْنِ (ayn)</span>
                </div>
              </div>

              <div className="bg-gold-50 dark:bg-gold-900/10 p-8 rounded-[32px] border border-gold-200 dark:border-gold-900/30 text-center flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-2xl mb-2 text-gold-800 dark:text-gold-400">3. Pluriel</h3>
                  <span className="text-sm font-bold text-gold-500 uppercase tracking-widest block mb-6">Jam'</span>
                  <div className="font-arabic text-6xl mb-4 text-brand-emerald" dir="rtl">مُسْلِمُون</div>
                  <div className="font-bold text-xl">Muslimuuna</div>
                  <div className="text-slate-500">Des musulmans (3+)</div>
                </div>
                <div className="mt-6 pt-6 border-t border-gold-200 dark:border-gold-800/50 text-xs text-gold-700 dark:text-gold-300">
                  Le pluriel se divise en deux grandes catégories (voir ci-dessous).
                </div>
              </div>
            </div>

            {/* Pluriels */}
            <div className="bg-brand-cream-muted dark:bg-slate-900 p-8 md:p-12 rounded-[40px] my-12">
              <h3 className="text-3xl font-serif font-bold text-slate-800 dark:text-cream-50 mb-8 border-b border-cream-200 dark:border-slate-800 pb-4">La Science du Pluriel (Jam')</h3>
              
              <div className="space-y-8">
                <div className="bg-white dark:bg-slate-800 p-8 rounded-[32px] shadow-sm">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-8 h-8 text-brand-emerald" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold mb-2">1. Le Pluriel Sain (Sālim)</h4>
                      <p className="mb-4">La racine de base du mot n'est pas cassée. On ajoute simplement un suffixe à la fin, comme un wagon attaché à un train.</p>
                      
                      <div className="flex flex-col md:flex-row gap-4 mt-6">
                        <div className="flex-1 bg-slate-50 dark:bg-slate-700/50 p-4 rounded-2xl border border-slate-100 dark:border-slate-600">
                          <strong className="block text-brand-emerald mb-2">Masculin Sain</strong>
                          <p className="text-sm mb-3">On ajoute <span className="font-arabic text-xl">ـُونَ</span> (uuna) ou <span className="font-arabic text-xl">ـِينَ</span> (iina).</p>
                          <div className="flex items-center justify-between font-arabic text-2xl">
                             <span>كَافِر</span>
                             <span className="text-slate-400">&rarr;</span>
                             <span className="text-brand-emerald">كَافِرُون</span>
                          </div>
                        </div>
                        <div className="flex-1 bg-slate-50 dark:bg-slate-700/50 p-4 rounded-2xl border border-slate-100 dark:border-slate-600">
                          <strong className="block text-gold-600 mb-2">Féminin Sain</strong>
                          <p className="text-sm mb-3">On supprime le Ta' Marbuta et on ajoute <span className="font-arabic text-xl">ـَات</span> (aat).</p>
                          <div className="flex items-center justify-between font-arabic text-2xl">
                             <span>آيَة</span>
                             <span className="text-slate-400">&rarr;</span>
                             <span className="text-gold-500">آيَات</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-slate-800 p-8 rounded-[32px] shadow-sm">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-amber-100 dark:bg-amber-900/50 flex items-center justify-center shrink-0">
                      <RefreshCw className="w-8 h-8 text-amber-600" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold mb-2">2. Le Pluriel Brisé (Mukassar)</h4>
                      <p className="mb-4">Très courant en arabe ! La structure interne du mot est "brisée", des voyelles changent, des lettres sont insérées ou retirées.</p>
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                        <div className="bg-slate-50 dark:bg-slate-700/50 p-4 rounded-xl text-center">
                          <div className="font-arabic text-2xl mb-1">قَلْب</div>
                          <div className="text-sm text-amber-600 font-bold mb-1">&darr;</div>
                          <div className="font-arabic text-2xl font-bold text-amber-500">قُلُوب</div>
                          <div className="text-xs mt-2 text-slate-500">Cœur / Cœurs</div>
                        </div>
                        <div className="bg-slate-50 dark:bg-slate-700/50 p-4 rounded-xl text-center">
                          <div className="font-arabic text-2xl mb-1">نَبِيّ</div>
                          <div className="text-sm text-amber-600 font-bold mb-1">&darr;</div>
                          <div className="font-arabic text-2xl font-bold text-amber-500">أَنْبِيَاء</div>
                          <div className="text-xs mt-2 text-slate-500">Prophète / Prophètes</div>
                        </div>
                        <div className="bg-slate-50 dark:bg-slate-700/50 p-4 rounded-xl text-center">
                          <div className="font-arabic text-2xl mb-1">كِتَاب</div>
                          <div className="text-sm text-amber-600 font-bold mb-1">&darr;</div>
                          <div className="font-arabic text-2xl font-bold text-amber-500">كُتُب</div>
                          <div className="text-xs mt-2 text-slate-500">Livre / Livres</div>
                        </div>
                        <div className="bg-slate-50 dark:bg-slate-700/50 p-4 rounded-xl text-center">
                          <div className="font-arabic text-2xl mb-1">عَبْد</div>
                          <div className="text-sm text-amber-600 font-bold mb-1">&darr;</div>
                          <div className="font-arabic text-2xl font-bold text-amber-500">عِباد</div>
                          <div className="text-xs mt-2 text-slate-500">Serviteur / Serviteurs</div>
                        </div>
                      </div>

                      <div className="mt-8 bg-blue-50 dark:bg-blue-900/20 p-6 rounded-2xl border-l-4 border-blue-500">
                        <strong className="text-blue-800 dark:text-blue-300 block mb-2">⚠️ Règle d'Or du Coran (et de l'Arabe)</strong>
                        <p className="text-sm text-blue-900 dark:text-blue-200">
                          Les pluriels désignant des objets irrationnels (non-humains, comme des livres, des cieux, des montagnes) sont traités grammaticalement comme des <strong>Féminins Singuliers</strong>. Les adjectifs et pronoms qui s'y rapportent seront au féminin singulier ("Elle").
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Application Section */}
            <div className="mt-16 bg-slate-50 dark:bg-slate-900/50 p-8 md:p-12 rounded-[40px] border border-slate-200 dark:border-slate-800">
              <div className="text-center mb-10">
                <h4 className="text-3xl font-serif font-bold mb-4">Mise en pratique</h4>
                <p>Observez ces transformations. Identifiez s'il s'agit d'un pluriel sain, brisé ou d'un duel.</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                {exercises.map((item, i) => (
                  <div key={i} className="flex flex-col text-center p-6 bg-white dark:bg-slate-800 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-md transition-shadow relative overflow-hidden">
                    <div className="flex justify-between items-center bg-slate-50 dark:bg-slate-900 p-4 rounded-2xl mb-6">
                      <div className="text-center w-1/2 border-r border-slate-200 dark:border-slate-700">
                         <div className="font-arabic text-3xl mb-1">{item.sing}</div>
                         <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">{item.tr}</div>
                      </div>
                      <div className="text-center w-1/2">
                         <div className="font-arabic text-4xl mb-1 font-bold text-brand-emerald">{item.pl}</div>
                         <div className="text-xs font-bold text-emerald-600/50 dark:text-emerald-400 uppercase tracking-widest">{item.plTr}</div>
                      </div>
                    </div>
                    
                    <div className={cn(
                      "mt-auto transition-all duration-500",
                      showAnswers ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
                    )}>
                      <div className="font-bold text-lg mb-1 text-gold-600 dark:text-gold-400">
                        {item.type}
                      </div>
                      <div className="text-sm text-slate-500">{item.rule}</div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="text-center">
                <button 
                  onClick={() => setShowAnswers(!showAnswers)} 
                  className="px-8 py-4 bg-slate-900 dark:bg-white dark:text-slate-900 text-white rounded-2xl hover:bg-slate-800 transition-all font-bold shadow-lg hover:shadow-xl inline-flex items-center gap-2"
                >
                  <RotateCw className={cn("w-5 h-5 transition-transform", showAnswers && "rotate-180")} />
                  {showAnswers ? "Masquer la transformation" : "Comprendre la transformation"}
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
