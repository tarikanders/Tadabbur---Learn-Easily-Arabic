/**
 * Corrige les 550 traductions de to_correct.json via Claude.
 * Envoie par batches de 50 mots pour rester dans les limites de tokens.
 * Usage : npx tsx fix_translations.ts
 */
import fs from 'fs';
import Anthropic from '@anthropic-ai/sdk';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });
dotenv.config();

interface ToCorrect {
  id: string;
  arabic: string;
  trans: string;
  current: string;
}

interface CorrectedWord {
  id: string;
  translation: string;
}

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

const SYSTEM_PROMPT = `Tu es un lexicographe expert en arabe coranique.
Pour chaque mot arabe, fournis une traduction française courte (2-6 mots max), précise, et adaptée au contexte coranique.
Format de réponse : JSON array de {id, translation}. Rien d'autre. Pas d'explication.
Règles :
- Utilise le genre correct (masculin/féminin)
- Pour les prépositions et particules : inclus les nuances (ex: "De, depuis, parmi" pour مِن)
- Pour les noms : inclus le sens principal et un sens secondaire si courant (ex: "Livre, écrit")
- Pour les verbes : forme infinitive + 3ème pers. si utile
- Garde la cohérence islamique classique`;

async function correctBatch(batch: ToCorrect[]): Promise<CorrectedWord[]> {
  const userContent = batch.map(w =>
    `{"id":"${w.id}","arabic":"${w.arabic}","actuelle":"${w.current}"}`
  ).join('\n');

  const message = await client.messages.create({
    model: 'claude-haiku-4-5-20251001',
    max_tokens: 2048,
    system: [{ type: 'text', text: SYSTEM_PROMPT, cache_control: { type: 'ephemeral' } }],
    messages: [{ role: 'user', content: `Corrige ces traductions :\n${userContent}\n\nRéponds uniquement avec un JSON array.` }]
  });

  const raw = message.content
    .filter((b): b is Anthropic.TextBlock => b.type === 'text')
    .map(b => b.text)
    .join('');

  // Extrait le JSON même si Claude ajoute du texte autour
  const match = raw.match(/\[[\s\S]*\]/);
  if (!match) throw new Error(`No JSON array found in response:\n${raw}`);
  return JSON.parse(match[0]) as CorrectedWord[];
}

async function main() {
  const toCorrect: ToCorrect[] = JSON.parse(fs.readFileSync('to_correct.json', 'utf8'));
  console.log(`Correction de ${toCorrect.length} traductions...`);

  const corrections: Record<string, string> = {};
  const BATCH_SIZE = 50;
  let processed = 0;

  for (let i = 0; i < toCorrect.length; i += BATCH_SIZE) {
    const batch = toCorrect.slice(i, i + BATCH_SIZE);
    process.stdout.write(`  Batch ${Math.floor(i / BATCH_SIZE) + 1}/${Math.ceil(toCorrect.length / BATCH_SIZE)}... `);

    try {
      const results = await correctBatch(batch);
      for (const r of results) {
        if (r.id && r.translation) {
          corrections[r.id] = r.translation;
        }
      }
      processed += results.length;
      console.log(`OK (${results.length} mots)`);
    } catch (err) {
      console.error(`ERREUR:`, err);
      // Continue avec le batch suivant
    }

    // Pause légère entre batches
    await new Promise(r => setTimeout(r, 500));
  }

  console.log(`\nCorrections obtenues : ${Object.keys(corrections).length}/${toCorrect.length}`);

  // Applique les corrections à vocabulary.ts
  const vocabPath = 'src/data/vocabulary.ts';
  let vocab = fs.readFileSync(vocabPath, 'utf8');
  let applied = 0;

  for (const [id, newTranslation] of Object.entries(corrections)) {
    // Remplace la traduction pour ce mot par son id
    // Pattern: "id": "xxx", ... "translation": "yyy"
    const escapedId = id.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const pattern = new RegExp(
      `("id":\\s*"${escapedId}"[^}]*?"translation":\\s*)"[^"]*"`,
      's'
    );
    const updated = vocab.replace(pattern, `$1${JSON.stringify(newTranslation)}`);
    if (updated !== vocab) {
      vocab = updated;
      applied++;
    }
  }

  fs.writeFileSync(vocabPath, vocab);
  console.log(`Traductions appliquées dans vocabulary.ts : ${applied}/${Object.keys(corrections).length}`);

  // Sauvegarde les corrections pour audit
  fs.writeFileSync('corrections_applied.json', JSON.stringify(corrections, null, 2));
  console.log('Audit sauvegardé dans corrections_applied.json');
}

main().catch(console.error);
