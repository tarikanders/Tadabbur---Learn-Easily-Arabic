export default function VerseHeader({ arabic, french, surah, verseNumber }: { arabic: string, french: string, surah: string, verseNumber: number }) {
  return (
    <div className="bg-slate-900 rounded-[32px] overflow-hidden shadow-lg border border-slate-800">
      <div className="bg-slate-800/80 px-6 py-3 flex items-center justify-between border-b border-slate-800">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-gold-dark" />
          <span className="text-white/60 text-xs font-bold uppercase tracking-widest">Coran</span>
        </div>
        <span className="text-white/80 font-medium text-sm">{surah} — Verset {verseNumber}</span>
      </div>
      <div className="p-8 text-center space-y-6">
        <p className="font-arabic text-4xl sm:text-5xl text-brand-gold-light leading-[1.8] drop-shadow-sm" dir="rtl">{arabic}</p>
        <div className="h-px w-24 bg-slate-800 mx-auto" />
        <p className="text-slate-400 text-lg">{french}</p>
      </div>
    </div>
  );
}
