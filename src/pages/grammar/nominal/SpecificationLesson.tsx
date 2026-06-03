import React from 'react';
import { Eye, Search } from 'lucide-react';

export default function SpecificationLesson({ onBack }: { onBack: () => void }) {
  return (
    <div className="space-y-8 animate-in fade-in duration-500 pb-10">
      <button onClick={onBack} className="text-brand-emerald font-bold flex items-center gap-2 hover:underline bg-emerald-50 dark:bg-emerald-900/30 px-4 py-2 rounded-full">
        &larr; Retour aux leçons
      </button>
      
      <div className="bg-white dark:bg-slate-800 rounded-[40px] p-8 md:p-12 border border-cream-200 dark:border-slate-700 shadow-xl relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-4xl font-serif font-bold mb-6 text-slate-900 dark:text-cream-50 flex items-center gap-3">
            <Search className="w-10 h-10 text-brand-emerald" /> Spécification (Tamyeez)
          </h2>
          
          <div className="prose dark:prose-invert max-w-none text-lg text-slate-600 dark:text-cream-300 space-y-8">
            <p className="lead text-xl text-slate-700 dark:text-cream-200">
              Le Tamyeez (تَمْيِيز), qui signifie "distinction", est un nom particulier utilisé pour retirer l'ambiguïté d'une phrase. Il précise "de quoi parle-t-on exactement ?" ou "dans quel cadre cette affirmation s'applique-t-elle ?".
            </p>

            <div className="bg-amber-50 dark:bg-amber-900/10 p-6 rounded-2xl border-l-4 border-amber-500 my-8">
              <strong className="text-amber-800 dark:text-amber-400 block mb-2 font-serif text-xl">L'empreinte digitale du Tamyeez :</strong>
              <p className="text-sm">Il est presque <strong>toujours indéfini</strong> et porte la marque de <strong>l'accusatif (Mansoob)</strong>, se terminant souvent par "an" (ـًا).</p>
            </div>

            <div className="space-y-12 my-12">
              <h3 className="text-3xl font-serif font-bold text-slate-800 dark:text-cream-50 border-b border-cream-200 dark:border-slate-700 pb-4">Situations courantes dans le Coran</h3>

              {/* Cas 1 */}
              <div className="group">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-brand-emerald text-white flex items-center justify-center font-bold font-serif text-xl">1</div>
                  <h4 className="text-2xl font-bold">Après un nombre (11 à 99)</h4>
                </div>
                <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 group-hover:border-brand-emerald transition-colors">
                  <p className="mb-6 opacity-90">Dire "J'ai vu onze" est ambigu. Onze quoi ? Le Tamyeez arrive pour spécifier le nom.</p>
                  <div className="text-center font-arabic text-5xl mb-4" dir="rtl">أَحَدَ عَشَرَ <span className="text-brand-emerald border-b-4 border-brand-emerald pb-2">كَوْكَبًا</span></div>
                  <div className="text-center font-bold text-xl mb-1">Ahada 'ashara kawkaban</div>
                  <div className="text-center text-slate-500">Onze <span className="text-brand-emerald font-bold">étoiles</span> (Yusuf 12:4)</div>
                </div>
              </div>

              {/* Cas 2 */}
              <div className="group">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gold-500 text-white flex items-center justify-center font-bold font-serif text-xl">2</div>
                  <h4 className="text-2xl font-bold">Après une comparaison (Superlatif)</h4>
                </div>
                <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 group-hover:border-gold-500 transition-colors">
                  <p className="mb-6 opacity-90">Dire "Je suis plus nombreux que toi" est flou. Plus nombreux en quoi ?</p>
                  <div className="text-center font-arabic text-5xl mb-4" dir="rtl">أَكْثَرُ مِنكَ <span className="text-gold-500 border-b-4 border-gold-500 pb-2">مَالًا</span></div>
                  <div className="text-center font-bold text-xl mb-1">Aktharu minka maalan</div>
                  <div className="text-center text-slate-500">Plus [pourvu] que toi <span className="text-gold-600 dark:text-gold-400 font-bold">en richesse</span> (Al-Kahf 18:34)</div>
                </div>
              </div>

              {/* Cas 3 */}
              <div className="group">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold font-serif text-xl">3</div>
                  <h4 className="text-2xl font-bold">La formule Kafaa (كَفَىٰ)</h4>
                </div>
                <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 group-hover:border-blue-500 transition-colors">
                  <p className="mb-6 opacity-90">La fameuse formule "Et Allah suffit". En quelle capacité suffit-Il ? Le Tamyeez répond.</p>
                  <div className="text-center font-arabic text-5xl mb-4" dir="rtl">وَكَفَىٰ بِاللَّهِ <span className="text-blue-500 border-b-4 border-blue-500 pb-2">شَهِيدًا</span></div>
                  <div className="text-center font-bold text-xl mb-1">Wa kafaa billaahi shaheedan</div>
                  <div className="text-center text-slate-500">Et Allah suffit <span className="text-blue-600 dark:text-blue-400 font-bold">comme témoin</span></div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
