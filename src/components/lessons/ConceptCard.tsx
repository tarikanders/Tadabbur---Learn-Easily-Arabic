import { Concept } from "../../data/lessonTypes";
import { motion } from "motion/react";

export default function ConceptCard({ concept }: { concept: Concept }) {
  return (
    <motion.div 
      whileHover={{ y: -4 }}
      className="bg-white p-8 sm:p-10 rounded-[40px] border border-slate-200 shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300"
    >
      <div className="flex flex-col md:flex-row items-start gap-8">
        <div 
          className="w-20 h-20 rounded-[24px] flex items-center justify-center font-arabic text-4xl text-white font-bold shadow-md shrink-0" 
          style={{ backgroundColor: concept.color }}
        >
          {concept.arabic_term.charAt(0)}
        </div>
        
        <div className="flex-1 w-full">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="font-serif text-3xl font-bold text-brand-gold-dark">{concept.french_name}</h3>
              <p className="font-arabic text-4xl text-slate-800 mt-3 drop-shadow-sm" dir="rtl">{concept.arabic_term}</p>
            </div>
          </div>
          
          <p className="text-slate-700 text-xl leading-relaxed mb-8">{concept.definition}</p>
          
          {concept.signals && concept.signals.length > 0 && (
            <div className="bg-slate-50/80 backdrop-blur-sm p-6 rounded-3xl border border-slate-200 mb-8">
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Signes reconnus</h4>
              <ul className="space-y-3">
                {concept.signals.map((signal, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-slate-800 font-medium">
                    <div className="w-2 h-2 rounded-full shadow-sm" style={{ backgroundColor: concept.color }} />
                    <span className="flex-1">{signal}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {concept.examples && concept.examples.length > 0 && (
            <div>
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Exemples du Coran</h4>
              <div className="grid gap-4">
                {concept.examples.map((ex, idx) => (
                  <motion.div 
                    whileHover={{ scale: 1.01 }}
                    key={idx} 
                    className="flex flex-col sm:flex-row sm:items-center justify-between p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow gap-4 overflow-hidden relative"
                  >
                    <div className="absolute left-0 top-0 bottom-0 w-1 opacity-20" style={{ backgroundColor: concept.color }} />
                    <span className="font-arabic text-3xl text-slate-900 leading-normal" dir="rtl">{ex.arabic}</span>
                    <div className="sm:text-right flex flex-col items-start sm:items-end">
                      <span className="text-slate-800 font-bold block bg-slate-50 px-3 py-1 rounded-md">{ex.french}</span>
                      {ex.note && <span className="text-sm text-slate-500 mt-2 block pl-3 sm:pl-0 sm:pr-3">{ex.note}</span>}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
          
        </div>
      </div>
    </motion.div>
  );
}
