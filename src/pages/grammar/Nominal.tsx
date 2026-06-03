import React, { useState } from 'react';
import { Layers, Users, Tags, Link as LinkIcon, Split, Eye, Hash } from 'lucide-react';
import GenderLesson from './nominal/GenderLesson';
import NumberLesson from './nominal/NumberLesson';
import AdjectiveLesson from './nominal/AdjectiveLesson';
import PossessiveLesson from './nominal/PossessiveLesson';
import AppositionLesson from './nominal/AppositionLesson';
import SpecificationLesson from './nominal/SpecificationLesson';

const lessons = [
  { id: 'gender', title: 'Genre (Gender)', icon: Users, desc: 'Masculin et Féminin' },
  { id: 'number', title: 'Nombre (Number)', icon: Hash, desc: 'Singulier, Duel et Pluriel' },
  { id: 'adjective', title: 'Adjectif (Adjective)', icon: Tags, desc: 'Description (Sifa)' },
  { id: 'possessive', title: 'Construction Possessive (Idafa)', icon: LinkIcon, desc: 'Possession et Annexion' },
  { id: 'apposition', title: 'Apposition (Badal)', icon: Split, desc: 'Substitution sans lien' },
  { id: 'specification', title: 'Spécification (Tamyeez)', icon: Eye, desc: "Supprimer l'ambiguïté" }
];

export default function Nominal() {
  const [activeLesson, setActiveLesson] = useState<string | null>(null);

  if (activeLesson === 'gender') return <GenderLesson onBack={() => setActiveLesson(null)} />;
  if (activeLesson === 'number') return <NumberLesson onBack={() => setActiveLesson(null)} />;
  if (activeLesson === 'adjective') return <AdjectiveLesson onBack={() => setActiveLesson(null)} />;
  if (activeLesson === 'possessive') return <PossessiveLesson onBack={() => setActiveLesson(null)} />;
  if (activeLesson === 'apposition') return <AppositionLesson onBack={() => setActiveLesson(null)} />;
  if (activeLesson === 'specification') return <SpecificationLesson onBack={() => setActiveLesson(null)} />;

  return (
    <div className="space-y-8">
      <div className="bg-brand-emerald text-white p-10 md:p-14 rounded-[40px] shadow-lg relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
        <div className="relative z-10">
          <h2 className="text-4xl font-serif font-bold mb-4 flex items-center gap-4">
            <Layers className="w-10 h-10 opacity-80 text-gold-300" /> Le Groupe Nominal
          </h2>
          <p className="max-w-3xl text-emerald-50 text-xl leading-relaxed mt-6">
            En grammaire arabe (Nahw), le nom (Ism) occupe une place centrale. L'architecture d'un mot et son rapport aux autres dictent la compréhension d'un verset. Explorez les modules ci-dessous pour percer les secrets du groupe nominal coranique.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {lessons.map((lesson) => (
          <button
            key={lesson.id}
            onClick={() => setActiveLesson(lesson.id)}
            className="flex flex-col items-start p-8 bg-white dark:bg-slate-800 rounded-3xl border border-cream-200 dark:border-slate-700 hover:border-gold-400 dark:hover:border-gold-600 transition-all group text-left shadow-sm hover:shadow-xl hover:-translate-y-1"
          >
            <div className="w-16 h-16 bg-cream-100 dark:bg-slate-700 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gold-100 dark:group-hover:bg-gold-900/30 transition-colors">
              <lesson.icon className="w-8 h-8 text-gold-500 group-hover:scale-110 transition-transform" />
            </div>
            <h3 className="text-2xl font-bold font-serif text-slate-900 dark:text-cream-50 mb-2">{lesson.title}</h3>
            <p className="text-slate-500 dark:text-cream-400 text-base font-medium">{lesson.desc}</p>
          </button>
        ))}
      </div>
    </div>
  );
}
