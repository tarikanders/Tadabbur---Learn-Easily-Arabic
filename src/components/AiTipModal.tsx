import { useEffect } from 'react';
import { X, Sparkles } from 'lucide-react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { WordData } from '../data/vocabulary';
import { useAiTip } from '../hooks/useAiTip';

interface AiTipModalProps {
  word: WordData | null;
  onClose: () => void;
}

export default function AiTipModal({ word, onClose }: AiTipModalProps) {
  const { explanation, isLoading, fetchTip, reset } = useAiTip();

  useEffect(() => {
    if (word) fetchTip(word);
    return () => reset();
  }, [word?.id]);

  if (!word) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-slate-800 rounded-[32px] p-6 sm:p-8 w-full max-w-lg shadow-2xl relative max-h-[85vh] overflow-y-auto"
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-slate-100 dark:bg-slate-700/50 p-2 rounded-full text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-cream-50 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-indigo-50 dark:bg-indigo-500/10 rounded-xl flex items-center justify-center text-indigo-500 dark:text-indigo-400">
            <Sparkles className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-bold text-xl text-slate-800 dark:text-cream-50">Astuce IA</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">Pour le mot "{word.arabic}"</p>
          </div>
        </div>

        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-12 space-y-4">
            <div className="w-8 h-8 border-4 border-indigo-200 dark:border-indigo-500/30 border-t-indigo-500 rounded-full animate-spin" />
            <p className="text-slate-500 dark:text-slate-400 font-medium animate-pulse">Génération de l'explication...</p>
          </div>
        ) : (
          <div className="prose prose-slate dark:prose-invert prose-sm sm:prose-base prose-p:leading-relaxed prose-headings:font-serif prose-headings:text-slate-900 dark:prose-headings:text-cream-50 prose-a:text-indigo-500 dark:prose-a:text-indigo-400 max-w-none pb-4">
            <Markdown remarkPlugins={[remarkGfm]}>{explanation ?? ''}</Markdown>
          </div>
        )}
      </div>
    </div>
  );
}
