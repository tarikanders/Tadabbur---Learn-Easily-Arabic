/**
 * Relance les leçons en échec avec un prompt plus court + max_tokens augmenté.
 * Usage : node_modules/.bin/tsx fix_lessons.ts
 */
import fs from 'fs';
import Anthropic from '@anthropic-ai/sdk';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });
dotenv.config();

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

const FAILED_LESSONS = [
  { id: 12, level: 2, title: "L'adjectif (Na't)", arabic_title: "النعت", prerequisite: 11, unlocks: 13,
    hint: "Accord adjectif/nom (genre, nombre, cas, definition). Exemples: الرَّجُلُ الكَرِيمُ, كِتَابٌ كَبِيرٌ" },
  { id: 13, level: 2, title: "La negation absolue", arabic_title: "لا النافية للجنس", prerequisite: 12, unlocks: 14,
    hint: "La negation absolue laa. Nom apres laa = Mansub sans tanwin. Analyse de la shahada." },
  { id: 14, level: 2, title: "inna et ses soeurs", arabic_title: "إنّ وأخواتها", prerequisite: 13, unlocks: 15,
    hint: "inna, anna, ka-anna, laakinna, layta, la-alla. 1er nom Mansub, 2eme Marfou'. Exemples coraniques." },
  { id: 15, level: 2, title: "Le verbe passe", arabic_title: "الفعل الماضي", prerequisite: 14, unlocks: 16,
    hint: "Conjugaison au passe: huwa/hiya/hum/anta/ana/nahnu. Racine trilitere. qaala, aamana, khalaqa." },
  { id: 21, level: 3, title: "Les patterns de noms", arabic_title: "أوزان الأسماء", prerequisite: 20, unlocks: 22,
    hint: "Patterns faCL, faCaL, faCiyl, faC-CaaL, mafCaL. Comment le pattern donne le sens." },
  { id: 23, level: 3, title: "Le nom verbal", arabic_title: "المصدر", prerequisite: 22, unlocks: 24,
    hint: "Masdar trilitere : patterns principaux. Masdar comme sujet ou complement. Iqaamat as-salaat." },
  { id: 24, level: 3, title: "Les formes verbales augmentees", arabic_title: "أبنية الأفعال الزائدة", prerequisite: 23, unlocks: 25,
    hint: "10 formes, focus II, III, IV, V, X. Sens de chaque forme + exemple coranique." },
  { id: 26, level: 3, title: "Les conditions", arabic_title: "أسلوب الشرط", prerequisite: 25, unlocks: 27,
    hint: "in, man, maa. Verbe au jussif. man yacmal khayran yarahu." },
  { id: 27, level: 3, title: "L'analyse syntaxique complete", arabic_title: "الإعراب الكامل", prerequisite: 26, unlocks: 28,
    hint: "Methodologie i-rab: type + cas/fonction + marque. Application sur verset complet." },
  { id: 28, level: 3, title: "Revision Al-Fatiha", arabic_title: "إعراب الفاتحة", prerequisite: 27, unlocks: 29,
    hint: "Analyse grammaticale mot par mot de la Fatiha. Fonction, cas, marque pour chaque mot." },
  { id: 29, level: 3, title: "Revision sourates courtes", arabic_title: "إعراب السور القصيرة", prerequisite: 28, unlocks: 30,
    hint: "Analyse Al-Ikhlas (112), Al-Falaq (113), Al-Nas (114). Exercices de reconnaissance." },
  { id: 30, level: 3, title: "Methode d'autonomie", arabic_title: "منهج الاستقلالية", prerequisite: 29, unlocks: null,
    hint: "Comment continuer seul. Demarche i-rab. Ressources (dictionnaires). Rappels des regles cles." },
];

function extractJson(raw: string): string {
  // Cherche d'abord un bloc ```json ... ```
  const codeMatch = raw.match(/```json\s*([\s\S]*?)```/);
  if (codeMatch) return codeMatch[1].trim();

  // Sinon extrait entre { et } correspondant
  const start = raw.indexOf('{');
  if (start === -1) throw new Error('Aucun { trouvé dans la réponse');

  let depth = 0;
  for (let i = start; i < raw.length; i++) {
    if (raw[i] === '{') depth++;
    else if (raw[i] === '}') {
      depth--;
      if (depth === 0) return raw.substring(start, i + 1);
    }
  }
  throw new Error('JSON non fermé (réponse tronquée ?)');
}

async function generateLesson(lesson: typeof FAILED_LESSONS[0]): Promise<any> {
  const prompt = `Genere le contenu de la lecon d'arabe coranique suivante en JSON valide.

Lecon ${lesson.id}: "${lesson.title}" (${lesson.arabic_title})
Niveau: ${lesson.level}/3
Contenu: ${lesson.hint}

Reponds UNIQUEMENT avec un bloc JSON valide (entoure de \`\`\`json ... \`\`\`).
Structure exacte:
{
  "hook": { "question": "...", "insight": "..." },
  "concepts": [
    {
      "id": "slug", "arabic_term": "...", "french_name": "...",
      "definition": "...", "signals": ["..."], "color": "#HEX",
      "examples": [{ "arabic": "...", "french": "...", "note": "..." }]
    }
  ],
  "quran_example": {
    "surah": "...", "verse_number": 1, "arabic": "...", "french": "...",
    "word_analysis": [{ "word": "...", "type": "...", "role": "...", "french": "...", "note": "..." }]
  },
  "exercises": [
    {
      "id": "ex${lesson.id}-1", "type": "classify", "instruction": "...",
      "words": [{ "arabic": "...", "correct": "...", "options": ["a","b","c"] }]
    },
    {
      "id": "ex${lesson.id}-2", "type": "highlight", "instruction": "...",
      "arabic": "...", "highlight_words": ["..."], "correct_words": ["..."],
      "feedback_correct": "...", "feedback_wrong": "..."
    }
  ],
  "summary": {
    "table": [{ "type": "...", "signal": "...", "example": "..." }],
    "rule": "..."
  }
}

Limite: 2 concepts max, 2 exercices, 2-3 exemples par concept. JSON compact et valide.`;

  const message = await client.messages.create({
    model: 'claude-sonnet-4-6',
    max_tokens: 6000,
    messages: [{ role: 'user', content: prompt }]
  });

  const raw = message.content
    .filter((b): b is Anthropic.TextBlock => b.type === 'text')
    .map(b => b.text)
    .join('');

  const jsonStr = extractJson(raw);
  return JSON.parse(jsonStr);
}

async function main() {
  const lessonsPath = 'src/data/lessons.ts';
  let lessonsTs = fs.readFileSync(lessonsPath, 'utf8');

  console.log(`Correction de ${FAILED_LESSONS.length} lecons...\n`);

  for (const lesson of FAILED_LESSONS) {
    process.stdout.write(`  L${lesson.id}: ${lesson.title}... `);

    try {
      const content = await generateLesson(lesson);

      const data = {
        id: lesson.id,
        level: lesson.level,
        title: lesson.title,
        arabic_title: lesson.arabic_title,
        duration_minutes: 8,
        prerequisite_lesson_id: lesson.prerequisite,
        hook: content.hook,
        concepts: content.concepts,
        quran_example: content.quran_example,
        exercises: content.exercises,
        summary: content.summary,
        unlocks_lesson_id: lesson.unlocks
      };

      const lessonJson = JSON.stringify(data, null, 4);

      // Trouve le bloc de cette leçon dans le TS
      let idx = lessonsTs.indexOf(`id: ${lesson.id},`);
      if (idx === -1) idx = lessonsTs.indexOf(`"id": ${lesson.id},`);
      if (idx === -1) { console.log(`SKIP (non trouve)`); continue; }

      let start = idx;
      while (start > 0 && lessonsTs[start] !== '{') start--;

      let depth = 0, end = start;
      for (let i = start; i < lessonsTs.length; i++) {
        if (lessonsTs[i] === '{') depth++;
        else if (lessonsTs[i] === '}') { depth--; if (depth === 0) { end = i; break; } }
      }

      lessonsTs = lessonsTs.substring(0, start) + lessonJson + lessonsTs.substring(end + 1);
      fs.writeFileSync(lessonsPath, lessonsTs);
      console.log('OK');

    } catch (err) {
      console.error(`ERREUR: ${err instanceof Error ? err.message.substring(0, 120) : err}`);
    }

    await new Promise(r => setTimeout(r, 800));
  }

  console.log('\nCorrection terminee.');
}

main().catch(console.error);
