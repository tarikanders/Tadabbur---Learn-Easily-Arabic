import { useState, useEffect } from "react";
import { CheckCircle2, RotateCw, Check, X, ArrowLeft, Sparkles } from "lucide-react";
import { cn } from "../lib/utils";
import { useSRS } from "../hooks/useSRS";
import { WordData } from "../data/vocabulary";
import { motion, useMotionValue, useTransform, useAnimation, PanInfo } from "motion/react";
import { Link } from "react-router-dom";
import AiTipModal from "../components/AiTipModal";

export default function Vocabulary() {
  const { getDueWords, processReview, srsData } = useSRS();
  
  const [dueWords, setDueWords] = useState<WordData[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isRevealed, setIsRevealed] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  
  const [sessionStats, setSessionStats] = useState({
    success: 0,
    fail: 0,
    newSeen: 0
  });

  const [showAiTip, setShowAiTip] = useState(false);

  const controls = useAnimation();
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 200], [-10, 10]);
  const overlayOpacityLeft = useTransform(x, [0, -100], [0, 1]);
  const overlayOpacityRight = useTransform(x, [0, 100], [0, 1]);

  useEffect(() => {
    setDueWords(getDueWords({}, 20));
  }, []);

  if (dueWords.length === 0) {
    return (
      <div className="max-w-2xl mx-auto space-y-8 animate-in fade-in duration-500 pb-20 text-center mt-20">
         <p className="text-slate-500 font-bold">Préparation de la session...</p>
      </div>
    );
  }

  const isSessionFinished = currentIndex >= dueWords.length;

  if (isSessionFinished) {
    return (
      <div className="max-w-xl mx-auto space-y-8 animate-in fade-in duration-500 pb-20 text-center px-4 mt-12">
        <div className="bg-white border border-slate-200 rounded-[40px] p-8 sm:p-12 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-emerald-light rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none" />
          
          <div className="w-24 h-24 bg-brand-emerald/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-12 h-12 text-brand-emerald" />
          </div>
          
          <h2 className="text-2xl font-serif font-bold text-slate-900 mb-6">Session Terminée !</h2>
          
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
              <span className="text-brand-emerald-dark font-bold flex items-center justify-center gap-2 mb-1"><Check className="w-4 h-4"/> Savais</span>
              <span className="text-2xl font-bold text-slate-900">{sessionStats.success}</span>
            </div>
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
              <span className="text-orange-500 font-bold flex items-center justify-center gap-2 mb-1"><X className="w-4 h-4"/> À revoir</span>
              <span className="text-2xl font-bold text-slate-900">{sessionStats.fail}</span>
            </div>
          </div>
          
          <p className="text-slate-600 font-medium mb-8">Vous avez découvert <span className="text-brand-gold-dark font-bold">{sessionStats.newSeen}</span> nouveaux mots.</p>
          
          <Link 
            to="/" 
            className="w-full flex items-center justify-center px-6 py-4 bg-brand-gold-dark text-white font-bold rounded-2xl hover:bg-[#A37D3D] transition-colors shadow-md"
          >
            <ArrowLeft className="w-5 h-5 mr-2" /> Retour à l'accueil
          </Link>
        </div>
      </div>
    );
  }

  const currentWord = dueWords[currentIndex];

  const submitAnswer = async (isSuccess: boolean, direction: 'left' | 'right' | 'none' = 'none') => {
    if (isProcessing) return;
    setIsProcessing(true);

    if (direction === 'left') {
      await controls.start({ x: -400, opacity: 0, transition: { duration: 0.25 } });
    } else if (direction === 'right') {
      await controls.start({ x: 400, opacity: 0, transition: { duration: 0.25 } });
    }

    const state = srsData[currentWord.id];
    const isNew = !state || state.status === "unseen";

    setSessionStats(prev => ({
      success: prev.success + (isSuccess ? 1 : 0),
      fail: prev.fail + (!isSuccess ? 1 : 0),
      newSeen: prev.newSeen + (isNew ? 1 : 0)
    }));

    processReview(currentWord.id, isSuccess);

    const prevStreak = state?.streak || 0;
    const newStreak = isSuccess ? prevStreak + 1 : 0;

    if (!isSuccess || newStreak < 2) {
      // Re-add to the end of the session so they must get it right twice in a row before finishing
      setDueWords(prev => [...prev, currentWord]);
    }
    
    setIsRevealed(false);
    setShowAiTip(false);
    setCurrentIndex(prev => prev + 1);
    
    x.set(0);
    controls.set({ x: 0, opacity: 1 });
    setIsProcessing(false);
  };


  const handleDragEnd = async (event: any, info: PanInfo) => {
    const threshold = 100;
    if (info.offset.x > threshold) {
      // Swipe Right -> Success
      await submitAnswer(true, 'right');
    } else if (info.offset.x < -threshold) {
      // Swipe Left -> Failure
      await submitAnswer(false, 'left');
    } else {
      // Return to center
      controls.start({ x: 0, transition: { type: "spring", stiffness: 300, damping: 20 } });
    }
  };

  return (
    <div className="max-w-md mx-auto space-y-4 sm:space-y-6 animate-in fade-in duration-500 pb-24 flex flex-col min-h-[calc(100vh-140px)] overflow-hidden">
      <header className="text-center space-y-4 mt-4 px-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-slate-500 font-medium text-sm">Carte {currentIndex + 1} / {dueWords.length}</span>
          <span className="text-slate-600 font-bold text-xs uppercase tracking-widest bg-slate-100 px-2 py-1 rounded">Rank #{[...dueWords].sort((a,b)=>b.frequency - a.frequency).findIndex(w=>w.id === currentWord.id) + 1}</span>
        </div>
        {/* Progress bar */}
        <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
          <div 
            className="h-full bg-brand-gold-dark transition-all duration-300"
            style={{ width: `${((currentIndex) / dueWords.length) * 100}%` }}
          />
        </div>
      </header>

      {/* Flashcard container */}
      <div className="flex-1 flex flex-col justify-center relative w-full perspective-1000 px-4">
        <motion.div 
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={handleDragEnd}
          style={{ x, rotate }}
          animate={controls}
          onClick={() => !isRevealed && !isProcessing && setIsRevealed(true)}
          className={cn(
            "w-full min-h-[450px] sm:min-h-[500px] rounded-[32px] p-6 sm:p-8 flex flex-col justify-center items-center text-center shadow-sm relative overflow-hidden bg-white touch-none border",
            isRevealed ? "border-brand-gold-dark/40 cursor-grab active:cursor-grabbing" : "border-slate-200 cursor-pointer hover:border-slate-300 group"
          )}
        >
          <div className="absolute inset-0 pattern-ornament pointer-events-none opacity-20" />
          
          <div className="absolute top-4 w-full px-6 flex justify-between text-[10px] text-slate-400 font-bold uppercase tracking-widest">
            {/* Pseudo-rank calculation from our data */}
            <span>Fréquence: {currentWord.frequency}×</span>
          </div>
          
          {/* Overlays during drag */}
          {true && (
            <>
              <motion.div style={{ opacity: overlayOpacityLeft }} className="absolute inset-0 bg-rose-50 z-20 flex items-center justify-start pl-8 border border-rose-200 rounded-[32px] pointer-events-none">
                <span className="text-rose-600 font-bold text-2xl flex flex-col items-center gap-2"><X className="w-10 h-10"/> À REVOIR</span>
              </motion.div>
              <motion.div style={{ opacity: overlayOpacityRight }} className="absolute inset-0 bg-emerald-50 z-20 flex items-center justify-end pr-8 border border-emerald-200 rounded-[32px] pointer-events-none">
                <span className="text-brand-emerald-dark font-bold text-2xl flex flex-col items-center gap-2"><Check className="w-10 h-10"/> JE SAVAIS</span>
              </motion.div>
            </>
          )}
          
          <div className="space-y-6 w-full relative z-10 flex-1 flex flex-col justify-center items-center">
            {/* Recto */}
            <div className="px-2 w-full">
              <p className="font-arabic text-[15vw] sm:text-[80px] text-brand-gold-dark leading-tight py-4" dir="rtl">{currentWord.arabic}</p>
              
              <div className={cn(
                "transition-all duration-300 w-full flex justify-center",
                isRevealed ? "opacity-100" : "opacity-0"
              )}>
                 <p className="text-slate-500 font-bold tracking-widest uppercase text-sm mb-4">{currentWord.transliteration}</p>
              </div>
            </div>

            {/* Verso */}
            <div className={cn(
              "transition-all duration-500 w-full flex flex-col items-center",
              isRevealed ? "opacity-100 translate-y-0 h-auto" : "opacity-0 translate-y-4 h-0 overflow-hidden"
            )}>
              <div className="w-full space-y-4 text-center">
                <p className="text-2xl font-serif font-bold text-slate-900 leading-tight">✦ {currentWord.translation}</p>
                
                <div className="flex flex-col gap-1 text-sm font-medium text-slate-600">
                  <p>📖 Racine : <span className="font-arabic text-lg text-slate-900 ml-1" dir="rtl">{currentWord.root}</span></p>
                  <p>🏷️ Type : <span className="uppercase text-xs tracking-wider text-slate-800 ml-1">{currentWord.type}</span></p>
                </div>
                
                {currentWord.verse && (
                  <div className="pt-4 border-t border-slate-200 mt-4 flex flex-col items-center">
                    <p className="font-arabic text-xl sm:text-2xl text-slate-800 leading-relaxed max-w-[90%] mx-auto" dir="rtl">
                      {currentWord.verse}
                    </p>
                    <p className="text-sm text-slate-600 italic mt-3 line-clamp-3">« {currentWord.verseTranslation} »</p>
                  </div>
                )}
                
                <button
                  onPointerDown={(e) => e.stopPropagation()}
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowAiTip(true);
                  }}
                  className="pointer-events-auto mt-6 flex items-center gap-2 mx-auto px-4 py-2 bg-brand-gold-light/30 text-brand-gold-dark font-medium rounded-xl hover:bg-brand-gold-light/60 transition-colors cursor-pointer"
                >
                  <Sparkles className="w-4 h-4" />
                  Astuce par IA
                </button>
              </div>
            </div>
          </div>

          {!isRevealed && (
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center justify-center py-2 px-4 rounded-xl border border-slate-200 text-slate-500 bg-slate-50 group-hover:border-brand-gold-dark/30 group-hover:text-brand-gold-dark transition-colors pointer-events-none w-3/4 shadow-sm">
               Voir la réponse
            </div>
          )}
        </motion.div>
      </div>

      {/* Manual buttons fallback */}
      <div className={cn(
        "flex justify-between gap-4 transition-all duration-300 relative z-20 px-4",
        "opacity-100 translate-y-0" 
      )}>
        <button onClick={() => submitAnswer(false, 'left')} className="flex-1 py-4 rounded-2xl flex items-center justify-center gap-2 transition-all shadow-sm font-bold text-sm bg-white text-slate-700 border border-slate-200 hover:bg-rose-50 hover:text-rose-600 hover:border-rose-200 active:scale-[0.98]">
          <X className="w-5 h-5"/> ✗ À revoir
        </button>
        <button onClick={() => submitAnswer(true, 'right')} className="flex-1 py-4 rounded-2xl flex items-center justify-center gap-2 transition-all shadow-sm font-bold text-sm bg-white text-slate-700 border border-slate-200 hover:bg-emerald-50 hover:text-brand-emerald-dark hover:border-brand-emerald/30 active:scale-[0.98]">
          ✓ Je savais <Check className="w-5 h-5"/>
        </button>
      </div>

      <AiTipModal
        word={showAiTip ? currentWord : null}
        onClose={() => setShowAiTip(false)}
      />
    </div>
  );
}
