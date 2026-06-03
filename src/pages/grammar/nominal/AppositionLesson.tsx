import React from 'react';
import { Split, Info } from 'lucide-react';

export default function AppositionLesson({ onBack }: { onBack: () => void }) {
  return (
    <div className="space-y-8 animate-in fade-in duration-500 pb-10">
      <button onClick={onBack} className="text-brand-emerald font-bold flex items-center gap-2 hover:underline bg-emerald-50 dark:bg-emerald-900/30 px-4 py-2 rounded-full">
        &larr; Retour aux leçons
      </button>
      
      <div className="bg-white dark:bg-slate-800 rounded-[40px] p-8 md:p-12 border border-cream-200 dark:border-slate-700 shadow-xl relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-4xl font-serif font-bold mb-6 text-slate-900 dark:text-cream-50 flex items-center gap-3">
            <Split className="w-10 h-10 text-brand-emerald" /> Apposition (Badal)
          </h2>
          
          <div className="prose dark:prose-invert max-w-none text-lg text-slate-600 dark:text-cream-300 space-y-8">
            <p className="lead text-xl text-slate-700 dark:text-cream-200">
              Le Badal (بَدَل) est une "substitution". C'est un nom qui en suit un autre pour le clarifier ou le définir exactement, <strong>sans aucun mot de liaison</strong> (comme "et", "de"). Grammaticalement, le Badal adopte exactement le même cas que le mot qu'il remplace.
            </p>

            <div className="bg-brand-emerald text-white p-8 md:p-12 rounded-[32px] my-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
              
              <h3 className="font-serif text-3xl font-bold mb-8 opacity-95">Exemples Majeurs du Coran</h3>
              
              <div className="space-y-6 relative z-10">
                {/* Exemple 1 */}
                <div className="bg-emerald-950/40 p-6 rounded-2xl border border-emerald-400/20 backdrop-blur-sm">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="flex-1">
                      <h4 className="text-gold-300 font-bold mb-2 uppercase tracking-widest text-sm">A. Le Pronom Démonstratif</h4>
                      <p className="text-emerald-100 text-sm">Lorsqu'un pronom démonstratif (Ceci, Cela) est suivi immédiatement d'un nom Défini (avec AL), c'est une apposition.</p>
                    </div>
                    <div className="flex-1 text-center bg-white/10 p-4 rounded-xl">
                      <div className="font-arabic text-5xl mb-3" dir="rtl">هَٰذَا الْبَلَدِ</div>
                      <div className="font-bold">Haathaa Al-Baladi</div>
                      <div className="text-sm opacity-90">Cette ville</div>
                    </div>
                  </div>
                </div>

                {/* Exemple 2 */}
                <div className="bg-emerald-950/40 p-6 rounded-2xl border border-emerald-400/20 backdrop-blur-sm">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="flex-1">
                      <h4 className="text-gold-300 font-bold mb-2 uppercase tracking-widest text-sm">B. Titre suivi d'un Nom Propre</h4>
                      <p className="text-emerald-100 text-sm">Le titre (ex: Le Messie) suivi du nom (Jésus) désigne la même personne sans intermédiaire.</p>
                    </div>
                    <div className="flex-1 text-center bg-white/10 p-4 rounded-xl">
                      <div className="font-arabic text-5xl mb-3" dir="rtl">الْمَسِيحُ عِيسَى</div>
                      <div className="font-bold">Al-Maseehu 'Eesaa</div>
                      <div className="text-sm opacity-90">Le Messie, Jésus</div>
                    </div>
                  </div>
                </div>

                {/* Exemple 3 */}
                <div className="bg-emerald-950/40 p-6 rounded-2xl border border-emerald-400/20 backdrop-blur-sm">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="flex-1">
                      <h4 className="text-gold-300 font-bold mb-2 uppercase tracking-widest text-sm">C. Répétition de clarification</h4>
                      <p className="text-emerald-100 text-sm">Un mot est répété pour ajouter des détails, remplaçant la première mention.</p>
                    </div>
                    <div className="flex-1 text-center bg-white/10 p-4 rounded-xl">
                      <div className="font-arabic text-4xl mb-3 leading-loose" dir="rtl">صِرَاطَ الْمُسْتَقِيمَ صِرَاطَ الَّذِينَ...</div>
                      <div className="font-bold text-sm opacity-90">Le chemin droit. Le chemin de ceux... (Al-Fatiha)</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/10 p-8 rounded-[32px] border-2 border-blue-100 dark:border-blue-900/30 flex gap-6">
              <div className="mt-1">
                <Info className="w-8 h-8 text-blue-500" />
              </div>
              <div>
                <h4 className="text-2xl font-bold text-blue-900 dark:text-blue-300 mb-4">Le détail qui change tout</h4>
                <p className="text-blue-800 dark:text-blue-200">
                  Prenez <span className="font-arabic font-bold text-2xl mx-2">هَٰذَا الْقُرْآن</span> (Haathaa Al-Qur'aan). 
                  Avec le "AL", c'est une <strong>apposition</strong> : "Ce Coran".
                </p>
                <p className="text-blue-800 dark:text-blue-200 mt-2">
                  Si j'enlève le "AL" : <span className="font-arabic font-bold text-2xl mx-2">هَٰذَا قُرْآن</span> (Haathaa Qur'aan). Ça devient une <strong>phrase nominale complète</strong> : "Ceci est un Coran". 
                  <br/>La présence ou l'absence d'une simple lettre (AL) modifie radicalement la fondation de la phrase en grammaire arabe.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
