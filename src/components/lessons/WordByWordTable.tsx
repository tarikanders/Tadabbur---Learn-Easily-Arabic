import { WordAnalysis } from "../../data/lessonTypes";

export default function WordByWordTable({ analysis }: { analysis: WordAnalysis[] }) {
  if (!analysis || analysis.length === 0) return null;

  return (
    <div className="w-full overflow-x-auto mt-10 rounded-3xl border border-slate-200 shadow-sm bg-white">
      <table className="w-full text-right" dir="rtl">
        <thead className="bg-slate-50/50">
          <tr className="border-b border-slate-200">
            <th className="py-5 px-6 font-bold text-slate-500 tracking-wide">الكلمة</th>
            <th className="py-5 px-6 font-bold text-slate-500 tracking-wide">النوع</th>
            <th className="py-5 px-6 font-bold text-slate-500 tracking-wide">الإعراب</th>
            <th className="py-5 px-6 font-bold text-slate-500 text-left tracking-wide">Sens détaillé</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {analysis.map((item, idx) => (
            <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
              <td className="py-6 px-6 font-arabic text-3xl text-slate-900 border-l border-slate-100/50 w-[15%]">{item.word}</td>
              <td className="py-6 px-6 border-l border-slate-100/50 w-[15%]">
                 <span className={`text-xs px-3 py-1.5 rounded-lg inline-block font-bold uppercase tracking-wider ${
                   item.type.includes('noun') ? 'bg-brand-gold-light text-brand-gold-dark border border-brand-gold-dark/20' :
                   item.type.includes('verb') ? 'bg-brand-emerald-light text-brand-emerald-dark border border-brand-emerald/20' :
                   'bg-rose-50 text-rose-700 border border-rose-200'
                 }`}>
                   {item.type}
                 </span>
              </td>
              <td className="py-6 px-6 text-slate-700 font-arabic text-xl border-l border-slate-100/50 w-[30%] leading-relaxed">{item.role}</td>
              <td className="py-6 px-6 text-slate-600 text-left w-[40%]" dir="ltr">
                <span className="text-slate-900 font-bold block mb-1 text-lg">{item.french}</span>
                {item.note && <span className="text-sm text-slate-500 leading-relaxed block">{item.note}</span>}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
