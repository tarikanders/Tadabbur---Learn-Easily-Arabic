import React, { useState } from 'react';
import { Tags, Eye, Users, Hash, Check } from 'lucide-react';
import { cn } from '../../../lib/utils';

export default function AdjectiveLesson({ onBack }: { onBack: () => void }) {
  const [showAnalysis, setShowAnalysis] = useState(false);

  return (
    <div className="space-y-8 animate-in fade-in duration-500 pb-10">
      <button onClick={onBack} className="text-brand-emerald font-bold flex items-center gap-2 hover:underline bg-emerald-50 dark:bg-emerald-900/30 px-4 py-2 rounded-full">
        &larr; Retour aux leçons
      </button>
      
      <div className="bg-white dark:bg-slate-800 rounded-[40px] p-8 md:p-12 border border-cream-200 dark:border-slate-700 shadow-xl relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-4xl font-serif font-bold mb-6 text-slate-900 dark:text-cream-50 flex items-center gap-3">
            <Tags className="w-10 h-10 text-brand-emerald" /> L'Adjectif (Sifa / Na'at)
          </h2>
          
          <div className="prose dark:prose-invert max-w-none text-lg text-slate-600 dark:text-cream-300 space-y-8">
            <p className="lead text-xl text-slate-700 dark:text-cream-200">
              En arabe, l'adjectif (صِفَة - Sifa) <strong>suit toujours</strong> le nom qu'il décrit (Mawsoof). La règle d'or est que l'adjectif est le miroir parfait du nom : il doit s'accorder avec lui dans 4 caractéristiques précises.
            </p>

            <div className="bg-emerald-50 dark:bg-emerald-900/20 p-8 md:p-12 rounded-[40px] my-12 border border-emerald-100 dark:border-emerald-800/50 shadow-inner">
              <h3 className="font-bold font-serif text-3xl text-center mb-8 text-emerald-900 dark:text-emerald-100">Le Miroir Parfait : La Règle des 4 Accords</h3>
              
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { icon: Hash, title: "Le Nombre", desc: "Singulier, Duel, Pluriel", color: "text-blue-500" },
                  { icon: Users, title: "Le Genre", desc: "Masculin ou Féminin", color: "text-rose-500" },
                  { icon: Eye, title: "Définitude", desc: "Défini (AL) ou Indéfini", color: "text-amber-500" },
                  { icon: Tags, title: "Le Cas", desc: "Raf', Nasb, Jarr (Voyelle)", color: "text-brand-emerald" }
                ].map((rule, i) => (
                  <div key={i} className="bg-white dark:bg-slate-800 p-6 rounded-[24px] shadow-sm text-center relative pt-8">
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center shadow-sm border border-slate-100 dark:border-slate-700">
                      <rule.icon className={cn("w-6 h-6", rule.color)} />
                    </div>
                    <strong className="block text-lg mb-2 text-slate-800 dark:text-cream-50">{rule.title}</strong>
                    <span className="text-sm text-slate-500 leading-snug block">{rule.desc}</span>
                  </div>
                ))}
              </div>
            </div>

            <h3 className="text-3xl font-serif font-bold text-slate-800 dark:text-cream-50 mt-12 mb-8">Comprendre avec le Coran</h3>
            
            <div className="space-y-6">
              {/* Example 1 */}
              <div className="flex flex-col lg:flex-row items-center gap-8 p-8 bg-slate-50 dark:bg-slate-900/50 rounded-[32px] border border-slate-200 dark:border-slate-700">
                <div className="w-full lg:w-1/2 text-center lg:text-right font-arabic">
                  <div className="text-6xl text-brand-emerald mb-4" dir="rtl">صِرَاطٍ مُّسْتَقِيمٍ</div>
                  <div className="text-xl font-bold uppercase tracking-widest text-slate-400 font-sans">Siraatin Mustaqeem</div>
                  <div className="text-lg text-slate-500 font-sans mt-2">Un chemin droit</div>
                </div>
                
                <div className="w-full lg:w-1/2 bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm">
                  <h4 className="font-bold text-lg mb-4 border-b border-slate-100 dark:border-slate-700 pb-2">Vérification de l'accord</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3"><Check className="w-5 h-5 text-brand-emerald" /> <strong>Nombre :</strong> Singulier &rarr; Singulier</li>
                    <li className="flex items-center gap-3"><Check className="w-5 h-5 text-brand-emerald" /> <strong>Genre :</strong> Masculin &rarr; Masculin</li>
                    <li className="flex items-center gap-3"><Check className="w-5 h-5 text-brand-emerald" /> <strong>Définitude :</strong> Indéfini (Pas de AL) &rarr; Indéfini</li>
                    <li className="flex items-center gap-3"><Check className="w-5 h-5 text-brand-emerald" /> <strong>Cas :</strong> Jarr (Kasratayn 'in') &rarr; Jarr</li>
                  </ul>
                </div>
              </div>

              {/* Example 2 */}
              <div className="flex flex-col lg:flex-row items-center gap-8 p-8 bg-gold-50/50 dark:bg-gold-900/10 rounded-[32px] border border-gold-200 dark:border-gold-900/30">
                <div className="w-full lg:w-1/2 text-center lg:text-right font-arabic">
                  <div className="text-6xl text-gold-600 dark:text-gold-400 mb-4" dir="rtl">الْفَوْزُ الْعَظِيمُ</div>
                  <div className="text-xl font-bold uppercase tracking-widest text-slate-400 font-sans">Al-Fawzu Al-'Azeemu</div>
                  <div className="text-lg text-slate-500 font-sans mt-2">Le succès immense</div>
                </div>
                
                <div className="w-full lg:w-1/2 bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm">
                  <h4 className="font-bold text-lg mb-4 border-b border-slate-100 dark:border-slate-700 pb-2">Vérification de l'accord</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3"><Check className="w-5 h-5 text-gold-500" /> <strong>Nombre :</strong> Singulier &rarr; Singulier</li>
                    <li className="flex items-center gap-3"><Check className="w-5 h-5 text-gold-500" /> <strong>Genre :</strong> Masculin &rarr; Masculin</li>
                    <li className="flex items-center gap-3"><Check className="w-5 h-5 text-gold-500" /> <strong>Définitude :</strong> Défini (AL) &rarr; Défini (AL)</li>
                    <li className="flex items-center gap-3"><Check className="w-5 h-5 text-gold-500" /> <strong>Cas :</strong> Raf' (Damma 'u') &rarr; Raf'</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Practice */}
            <div className="mt-16 bg-slate-900 dark:bg-slate-950 p-8 md:p-12 rounded-[40px] text-white">
              <h3 className="text-3xl font-serif font-bold mb-6 text-cream-50">L'exception qui confirme la règle</h3>
              <p className="text-slate-300 mb-8 border-l-4 border-gold-400 pl-4 py-2">
                Si le nom est un <strong>pluriel irrationnel (inanimé)</strong>, l'adjectif qui le qualifie sera au <strong>Féminin Singulier</strong>. C'est une règle majeure en arabe.
              </p>

              <div className="bg-slate-800 p-8 rounded-3xl border border-slate-700 text-center">
                <div className="font-arabic text-6xl text-brand-emerald mb-6" dir="rtl">الْأَسْمَاءُ الْحُسْنَى</div>
                <div className="font-bold text-2xl mb-2 text-cream-100">Al-Asmaa'u Al-Husna</div>
                <div className="text-slate-400">Les Plus Beaux Noms</div>
                
                <button 
                  onClick={() => setShowAnalysis(!showAnalysis)}
                  className="mt-8 px-6 py-3 bg-slate-700 hover:bg-slate-600 rounded-xl font-bold transition-colors"
                >
                  {showAnalysis ? "Cacher l'analyse" : "Analyser grammaticalement"}
                </button>

                <div className={cn(
                  "mt-8 grid md:grid-cols-2 gap-4 text-left transition-all duration-500",
                  showAnalysis ? "opacity-100 h-auto" : "opacity-0 h-0 overflow-hidden"
                )}>
                  <div className="bg-slate-900 p-6 rounded-2xl">
                    <strong className="text-gold-400 block mb-2 font-arabic text-2xl text-center" dir="rtl">الْأَسْمَاءُ</strong>
                    <ul className="text-sm space-y-2 text-slate-300">
                      <li>Nom: Asmaa' (Noms)</li>
                      <li>Pluriel brisé de Ism (inanimé)</li>
                      <li>Traité virtuellement comme: Féminin Singulier</li>
                    </ul>
                  </div>
                  <div className="bg-slate-900 p-6 rounded-2xl">
                    <strong className="text-emerald-400 block mb-2 font-arabic text-2xl text-center" dir="rtl">الْحُسْنَى</strong>
                    <ul className="text-sm space-y-2 text-slate-300">
                      <li>Adjectif: Husna (La plus belle)</li>
                      <li>Forme: Féminin Singulier (se termine par Alif Maqsura ى)</li>
                      <li>Il s'accorde avec le statut virtuel !</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
