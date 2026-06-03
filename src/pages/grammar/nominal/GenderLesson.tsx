import React, { useState } from 'react';
import { Users, Activity, CheckCircle2, RotateCw } from 'lucide-react';
import { cn } from '../../../lib/utils';

export default function GenderLesson({ onBack }: { onBack: () => void }) {
  const [showAnswers, setShowAnswers] = useState(false);

  const exercises = [
    { w: "رَحْمَة", tr: "Rahmah", desc: "Miséricorde", an: "Féminin", reason: "Finit par Ta' Marbuta (ة)" },
    { w: "كِتَاب", tr: "Kitab", desc: "Livre", an: "Masculin", reason: "Genre par défaut, aucun signe féminin" },
    { w: "أَرْض", tr: "Ard", desc: "Terre", an: "Féminin", reason: "Exception (Féminin par nature / coutume)" },
    { w: "يَد", tr: "Yad", desc: "Main", an: "Féminin", reason: "Partie du corps allant par paire" },
    { w: "كُبْرَى", tr: "Kubra", desc: "La plus grande", an: "Féminin", reason: "Finit par Alif Maqsura (ى)" },
    { w: "قَمَر", tr: "Qamar", desc: "Lune", an: "Masculin", reason: "Genre par défaut" },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-500 pb-10">
      <button onClick={onBack} className="text-brand-emerald font-bold flex items-center gap-2 hover:underline bg-emerald-50 dark:bg-emerald-900/30 px-4 py-2 rounded-full">
        &larr; Retour aux leçons
      </button>
      
      <div className="bg-white dark:bg-slate-800 rounded-[40px] p-8 md:p-12 border border-cream-200 dark:border-slate-700 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-50 dark:bg-emerald-900/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
        
        <div className="relative z-10">
          <h2 className="text-4xl font-serif font-bold mb-6 text-slate-900 dark:text-cream-50 flex items-center gap-3">
            <Users className="w-10 h-10 text-brand-emerald" /> Le Genre (Masculin / Féminin)
          </h2>
          
          <div className="prose dark:prose-invert max-w-none text-lg text-slate-600 dark:text-cream-300 space-y-8">
            <p className="lead text-xl text-slate-700 dark:text-cream-200">
              En arabe, chaque nom est soit <strong>masculin</strong> (مُذَكَّر - Mudhakkir), soit <strong>féminin</strong> (مُؤَنَّث - Mu'annath). Il n'y a pas de genre neutre. Par défaut, un mot est considéré masculin à moins de porter un signe de féminité ou d'être une exception.
            </p>

            <div className="grid md:grid-cols-2 gap-8 my-10">
              <div className="bg-brand-cream-muted dark:bg-slate-700/50 p-8 rounded-[32px] border border-cream-200 dark:border-slate-600">
                <h3 className="font-bold text-2xl mb-4 text-brand-emerald flex justify-between items-center">
                  Masculin <span className="font-arabic text-3xl" dir="rtl">مُذَكَّر</span>
                </h3>
                <p className="mb-6 opacity-90">C'est l'état naturel du mot. S'il ne répond à aucun critère féminin, il est valide en tant que masculin.</p>
                <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm text-center transform transition-transform hover:scale-105">
                  <span className="font-arabic text-5xl block mb-3 text-slate-900 dark:text-cream-50" dir="rtl">بَيْت</span>
                  <span className="font-bold text-xl block">Bayt</span>
                  <span className="text-slate-500">Maison</span>
                </div>
              </div>

              <div className="bg-gold-50 dark:bg-gold-900/10 p-8 rounded-[32px] border border-gold-200 dark:border-gold-900/30">
                <h3 className="font-bold text-2xl mb-4 text-gold-600 dark:text-gold-400 flex justify-between items-center">
                  Féminin <span className="font-arabic text-3xl" dir="rtl">مُؤَنَّث</span>
                </h3>
                <p className="mb-6 opacity-90">S'identifie par des terminaisons spécifiques ou par nature. Le Coran regorge de métaphores féminines.</p>
                <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm text-center transform transition-transform hover:scale-105 border border-gold-100 dark:border-gold-900/50">
                  <span className="font-arabic text-5xl block mb-3 text-slate-900 dark:text-cream-50" dir="rtl">شَمْس</span>
                  <span className="font-bold text-xl block">Shams</span>
                  <span className="text-slate-500">Soleil (Exception)</span>
                </div>
              </div>
            </div>

            <h3 className="text-3xl font-serif font-bold text-slate-800 dark:text-cream-50 mt-12 mb-6">Les signes et types de féminin</h3>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="bg-white dark:bg-slate-800 p-5 rounded-2xl border-l-4 border-l-brand-emerald shadow-sm">
                <strong className="text-brand-emerald block text-lg mb-2">1. Ta' Marbuta (ـة / ة)</strong>
                <p className="text-sm">Le signe le plus fréquent. Ajouté souvent aux adjectifs pour les féminiser.</p>
                <div className="mt-3 flex justify-between bg-slate-50 dark:bg-slate-900 p-3 rounded-lg">
                  <span>Miséricorde</span>
                  <span className="font-arabic font-bold text-xl">رَحْمَة</span>
                </div>
              </div>

              <div className="bg-white dark:bg-slate-800 p-5 rounded-2xl border-l-4 border-l-brand-emerald shadow-sm">
                <strong className="text-brand-emerald block text-lg mb-2">2. Alif Maqsura (ـى)</strong>
                <p className="text-sm">Terminaison qui ressemble à un Yaa sans points. Souvent pour les superlatifs.</p>
                <div className="mt-3 flex justify-between bg-slate-50 dark:bg-slate-900 p-3 rounded-lg">
                  <span>Le plus beau (fém)</span>
                  <span className="font-arabic font-bold text-xl">حُسْنَى</span>
                </div>
              </div>

              <div className="bg-white dark:bg-slate-800 p-5 rounded-2xl border-l-4 border-l-gold-500 shadow-sm">
                <strong className="text-gold-600 block text-lg mb-2">3. Alif Mamduda (ـاء)</strong>
                <p className="text-sm">Alif suivi d'une Hamza. Très utilisé pour les couleurs et adjectifs de forme.</p>
                <div className="mt-3 flex justify-between bg-slate-50 dark:bg-slate-900 p-3 rounded-lg">
                  <span>Ciel</span>
                  <span className="font-arabic font-bold text-xl">سَمَاء</span>
                </div>
              </div>

              <div className="bg-white dark:bg-slate-800 p-5 rounded-2xl border-l-4 border-l-rose-500 shadow-sm">
                <strong className="text-rose-600 block text-lg mb-2">4. Intrinseque (Naturel)</strong>
                <p className="text-sm">Certains choses sont féminines par définition : corps en paire, éléments terrestres.</p>
                <div className="mt-3 flex items-center justify-between text-sm">
                  <span>Terre (<span className="font-arabic">أَرْض</span>)</span>
                  <span>Feu (<span className="font-arabic">نَار</span>)</span>
                  <span>Oeil (<span className="font-arabic">عَيْن</span>)</span>
                </div>
              </div>
            </div>

            {/* Application Section */}
            <div className="mt-16 bg-slate-50 dark:bg-slate-900/50 p-8 md:p-12 rounded-[40px] border border-slate-200 dark:border-slate-800">
              <div className="text-center mb-10">
                <h4 className="text-3xl font-serif font-bold mb-4 flex items-center justify-center gap-3">
                  <Activity className="w-8 h-8 text-gold-500"/> Atelier Pratique
                </h4>
                <p>Identifiez le genre de ces mots coraniques célèbres et justifiez-le mentalement, puis révélez la réponse.</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                {exercises.map((item, i) => (
                  <div key={i} className="flex flex-col text-center p-6 bg-white dark:bg-slate-800 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-md transition-shadow">
                    <div className="font-arabic text-5xl mb-3 text-slate-900 dark:text-cream-50" dir="rtl">{item.w}</div>
                    <div className="text-sm text-slate-500 font-bold uppercase tracking-widest">{item.tr}</div>
                    <div className="text-slate-400 text-sm mb-4">{item.desc}</div>
                    
                    <div className={cn(
                      "mt-auto pt-4 border-t transition-all duration-500",
                      showAnswers ? "border-slate-100 dark:border-slate-700 opacity-100" : "border-transparent opacity-0"
                    )}>
                      <div className={cn(
                        "font-bold text-lg mb-1",
                        item.an === "Masculin" ? "text-brand-emerald" : "text-gold-600"
                      )}>
                        {item.an}
                      </div>
                      <div className="text-xs text-slate-500">{item.reason}</div>
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
                  {showAnswers ? "Cacher les explications" : "Révéler les explications"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
