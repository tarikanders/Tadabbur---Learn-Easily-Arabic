import { VOCABULARY_LIST } from './src/data/vocabulary.js';
import { writeFileSync } from 'fs';

// Normalize grammatical type labels (some are in English or inconsistent)
const TYPE_MAP: Record<string, string> = {
  // English → French
  'Interogative particle': 'Particule interrogative',
  'interrogative particle': 'Particule interrogative',
  'Interrogative particle': 'Particule interrogative',
  'Conjunction': 'Conjonction',
  'conjunction': 'Conjonction',
  'Supplemental particle': 'Particule',
  'supplemental particle': 'Particule',
  'Conditional particle': 'Particule conditionnelle',
  'conditional particle': 'Particule conditionnelle',
  'Relative pronoun': 'Pronom relatif',
  'relative pronoun': 'Pronom relatif',
  'Negative particle': 'Particule de négation',
  'negative particle': 'Particule de négation',
  'Noun': 'Nom',
  'noun': 'Nom',
  'Adjective': 'Adjectif',
  'adjective': 'Adjectif',
  'Verb': 'Verbe',
  'verb': 'Verbe',
  'Preposition': 'Préposition',
  'preposition': 'Préposition',
  'Amendment particle': "Particule d'amendement",
  'Answer particle': 'Particule de réponse',
  'Aversion particle': "Particule d'aversion",
  'Exceptive particle': "Particule d'exception",
  'Exhortation particle': "Particule d'exhortation",
  'Explanation particle': 'Particule explicative',
  'Future particle': 'Particule du futur',
  'Inceptive particle': 'Particule inceptive',
  'Particle of certainty': 'Particule de certitude',
  'Particle of interpretation': "Particule d'interprétation",
  'Personal pronoun': 'Pronom personnel',
  'Prohibition particle': 'Particule prohibitive',
  'Restriction particle': 'Particule restrictive',
  'Retraction particle': 'Particule de rétractation',
  'Surprise particle': 'Particule de surprise',
};

function normalizeType(t: string | undefined): string {
  if (!t) return 'Autre';
  return TYPE_MAP[t] ?? t;
}

// Score an entry: prefer entries with verse + root filled
function completeness(w: typeof VOCABULARY_LIST[0]): number {
  let score = 0;
  if (w.verse && w.verse.trim()) score += 2;
  if (w.root && w.root !== '-') score += 1;
  if (w.verseTranslation && w.verseTranslation.trim()) score += 1;
  return score;
}

// Dedup: same arabic + same normalized type → keep highest frequency, then most complete
const seen = new Map<string, typeof VOCABULARY_LIST[0]>();

for (const word of VOCABULARY_LIST) {
  const normType = normalizeType(word.type);
  const key = `${word.arabic}|${normType}`;

  if (!seen.has(key)) {
    seen.set(key, { ...word, type: normType });
  } else {
    const existing = seen.get(key)!;
    const keepNew =
      word.frequency > existing.frequency ||
      (word.frequency === existing.frequency && completeness(word) > completeness(existing));
    if (keepNew) {
      seen.set(key, { ...word, type: normType });
    }
  }
}

const deduped = Array.from(seen.values());
console.log(`Original: ${VOCABULARY_LIST.length} → Deduped: ${deduped.length} (removed ${VOCABULARY_LIST.length - deduped.length})`);

// Show what was removed
const removedIds = new Set(VOCABULARY_LIST.map(w => w.id));
deduped.forEach(w => removedIds.delete(w.id));
console.log(`\nRemoved IDs (${removedIds.size}):`);
removedIds.forEach(id => {
  const w = VOCABULARY_LIST.find(x => x.id === id)!;
  console.log(`  ${id} | ${w.arabic} | ${w.type} | freq=${w.frequency}`);
});

// Generate new vocabulary.ts
const entries = deduped.map(w => {
  const fields = [
    `    "id": ${JSON.stringify(w.id)}`,
    `    "arabic": ${JSON.stringify(w.arabic)}`,
    `    "transliteration": ${JSON.stringify(w.transliteration)}`,
    `    "translation": ${JSON.stringify(w.translation)}`,
    `    "root": ${JSON.stringify(w.root)}`,
    `    "frequency": ${w.frequency}`,
    w.type !== undefined ? `    "type": ${JSON.stringify(w.type)}` : null,
    w.verse !== undefined ? `    "verse": ${JSON.stringify(w.verse)}` : null,
    w.verseTranslation !== undefined ? `    "verseTranslation": ${JSON.stringify(w.verseTranslation)}` : null,
    w.example_arabic !== undefined ? `    "example_arabic": ${JSON.stringify(w.example_arabic)}` : null,
    w.example_french !== undefined ? `    "example_french": ${JSON.stringify(w.example_french)}` : null,
  ].filter(Boolean).join(',\n');
  return `  {\n${fields}\n  }`;
});

const output = `export interface WordData {
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
${entries.join(',\n')}
];
`;

writeFileSync('./src/data/vocabulary.ts', output, 'utf8');
console.log(`\n✅ vocabulary.ts written with ${deduped.length} entries.`);
