/**
 * Nettoyage des données de vocabulaire (corrige le bug "mauvais contexte").
 * Un verset n'est gardé comme exemple que s'il contient RÉELLEMENT le mot
 * (comparaison sans diacritiques) ET n'est pas un placeholder artificiel
 * (Bismillah collé à "wal-Fajr", traduit "Par l'Aube!").
 * Sinon verset + traduction sont vidés -> jamais d'exemple trompeur.
 * Usage : npx tsx clean_vocabulary.ts
 */
import fs from 'fs';
import { VOCABULARY_LIST, WordData } from './src/data/vocabulary';

// Retire UNIQUEMENT harakat (U+064B-065F), alef suscrit (U+0670),
// signes coraniques (U+06D6-06ED) et tatweel (U+0640). Garde les lettres.
function normalizeArabic(s: string): string {
  if (!s) return '';
  return s
    .replace(/[ً-ٰٟۖ-ۭـ]/g, '')
    .replace(/[آأإٱ]/g, 'ا') // آأإٱ -> ا
    .replace(/ى/g, 'ي')                       // ى -> ي
    .replace(/ة/g, 'ه')                       // ة -> ه
    .replace(/[^ء-ي]/g, '');
}

const FAJR = normalizeArabic('وَٱلْفَجْرِ');
const BASMALA = normalizeArabic('بِسْمِ ٱللَّهِ');

let cleared = 0;
const cleaned: WordData[] = VOCABULARY_LIST.map((w) => {
  const nv = normalizeArabic(w.verse || '');
  const nw = normalizeArabic(w.arabic || '');
  const wordPresent = nw.length >= 2 && nv.includes(nw);
  const isGluedPlaceholder = BASMALA.length > 0 && FAJR.length > 0 &&
                             nv.includes(BASMALA) && nv.includes(FAJR);
  const vt = (w.verseTranslation || '').trim();
  const badTranslation = vt === 'Par l’Aube!' || vt === "Par l'Aube!";
  if (!w.verse || !wordPresent || isGluedPlaceholder || badTranslation) {
    if (w.verse) cleared++;
    return { ...w, verse: '', verseTranslation: '' };
  }
  return w;
});

const body = cleaned
  .map((w) => {
    const lines = [
      `    "id": ${JSON.stringify(w.id)}`,
      `    "arabic": ${JSON.stringify(w.arabic)}`,
      `    "transliteration": ${JSON.stringify(w.transliteration)}`,
      `    "translation": ${JSON.stringify(w.translation)}`,
      `    "root": ${JSON.stringify(w.root)}`,
      `    "frequency": ${w.frequency}`,
      `    "type": ${JSON.stringify(w.type ?? '')}`,
      `    "verse": ${JSON.stringify(w.verse ?? '')}`,
      `    "verseTranslation": ${JSON.stringify(w.verseTranslation ?? '')}`,
    ];
    return `  {\n${lines.join(',\n')}\n  }`;
  })
  .join(',\n');

const out = `export interface WordData {
  id: string;
  arabic: string;
  transliteration: string;
  translation: string;
  root: string;
  frequency: number;
  verse?: string;
  verseTranslation?: string;
  type?: string;
  example_arabic?: string;
  example_french?: string;
}

export const VOCABULARY_LIST: WordData[] = [
${body}
];
`;

fs.writeFileSync('src/data/vocabulary.ts', out);
const withVerse = cleaned.filter((w) => w.verse).length;
console.log(`Nettoyage OK. Versets trompeurs vidés : ${cleared}. Exemples valides conservés : ${withVerse}/${cleaned.length}.`);
