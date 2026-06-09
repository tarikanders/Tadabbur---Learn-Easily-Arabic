/**
 * Génère le contenu des leçons 6–30 via Claude Sonnet.
 * Usage : node_modules/.bin/tsx generate_lessons.ts
 */
import fs from 'fs';
import Anthropic from '@anthropic-ai/sdk';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });
dotenv.config();

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

// Leçons à générer avec leur contexte pédagogique
const LESSONS_TO_GENERATE = [
  { id: 6, level: 1, title: "Les 3 cas grammaticaux", arabic_title: "الإعراب", prerequisite: 5, unlocks: 7,
    hint: "Couvre : Marfou' (ـُ/nominatif), Mansub (ـَ/accusatif), Majrur (ـِ/génitif). Terminations casuelles avec et sans tanwin. Pourquoi les cas changent." },
  { id: 7, level: 1, title: "La phrase nominale avancée", arabic_title: "الجملة الاسمية المتقدمة", prerequisite: 6, unlocks: 8,
    hint: "Couvre : خبر شبه جملة (prédicat = groupe prépositionnel), exemples 'اللَّهُ فِي السَّمَاءِ', phrase nominale avec démonstratif هَٰذَا, accord en genre du khabar. Cas particuliers." },
  { id: 8, level: 1, title: "Les prépositions + cas مجرور", arabic_title: "حروف الجر", prerequisite: 7, unlocks: 9,
    hint: "Couvre : les 7 prépositions essentielles (مِن، إِلَى، فِي، عَلَى، بِ، لِ، عَنْ), chacune avec sens principal + exemple coranique. Toutes mettent le nom suivant au cas مجرور." },
  { id: 9, level: 1, title: "Les pronoms personnels détachés", arabic_title: "الضمائر المنفصلة", prerequisite: 8, unlocks: 10,
    hint: "Couvre : هُوَ، هِيَ، هُمْ، أَنتَ، أَنتِ، أَنَا، نَحْنُ. Utilisation dans les phrases nominales comme sujet. Phrase nominale avec pronom (الله هو الحق)." },
  { id: 10, level: 1, title: "Les pronoms suffixes", arabic_title: "الضمائر المتصلة", prerequisite: 9, unlocks: 11,
    hint: "Couvre : ـهُ، ـهَا، ـهُمْ، ـكَ، ـكِ، ـي، ـنَا attachés aux noms (possession) et aux verbes (objet). Idafa avec pronom. Exemples : رَبُّهُمْ، كِتَابُهُ، نَعْبُدُكَ." },
  { id: 11, level: 2, title: "L'annexion (Idafa)", arabic_title: "الإضافة", prerequisite: 10, unlocks: 12,
    hint: "Couvre : Structure [nom1 + nom2-au-majrur], le premier nom perd ال et tanwin, le deuxième est au cas مجرور. Double idafa. Exemples coraniques riches : رَسُولُ اللَّهِ، كِتَابُ اللَّهِ." },
  { id: 12, level: 2, title: "L'adjectif (Na't)", arabic_title: "النعت", prerequisite: 11, unlocks: 13,
    hint: "Couvre : accord en genre/nombre/cas/définitude. Adjectif après nom. النعت الحقيقي. Exemples : الرَّجُلُ الكَرِيمُ، كِتَابٌ كَبِيرٌ. Différence avec Khabar." },
  { id: 13, level: 2, title: "لا النافية للجنس", arabic_title: "لا النافية للجنس", prerequisite: 12, unlocks: 14,
    hint: "Couvre : لا qui nie tout le genre/espèce. Nom après لا = Mansub sans tanwin. لَا إِلَٰهَ إِلَّا اللَّهُ (analyse complète). Différence entre لَا النافية للجنس et autres لا." },
  { id: 14, level: 2, title: "إنّ et ses sœurs", arabic_title: "إنّ وأخواتها", prerequisite: 13, unlocks: 15,
    hint: "Couvre : إنّ، أنّ، كأنّ، لكنّ، ليت، لعل. Mettent le 1er nom au Mansub, le 2ème reste Marfou'. إِنَّ اللَّهَ غَفُورٌ رَحِيمٌ. إنّ d'accentuation vs لكنّ d'opposition." },
  { id: 15, level: 2, title: "Le verbe passé (Madi)", arabic_title: "الفعل الماضي", prerequisite: 14, unlocks: 16,
    hint: "Couvre : conjugaison au passé (هو/هي/هم/أنت/أنا/نحن). Racine trilitère. Pattern فَعَلَ. Verbe fort vs faible (aperçu). Exemples : قَالَ، آمَنَ، خَلَقَ." },
  { id: 16, level: 2, title: "Le verbe présent/futur (Mudari)", arabic_title: "الفعل المضارع", prerequisite: 15, unlocks: 17,
    hint: "Couvre : préfixes أَ/تَ/يَ/نَ. Conjugaison au présent. Sens présent vs futur (avec سَ/سَوفَ). Marfou' du mudari (ـُ). Exemples : يَعْلَمُ، تَعْبُدُ، نَسْتَعِينُ." },
  { id: 17, level: 2, title: "Le verbe impératif (Amr)", arabic_title: "فعل الأمر", prerequisite: 16, unlocks: 18,
    hint: "Couvre : Formation de l'impératif à partir du mudari. Suppression du préfixe + hamzat al-wasl. ادْعُ، اقْرَأْ، آمِنُوا. Exemples coraniques : قُلْ، اقْرَأْ، اسْجُدْ." },
  { id: 18, level: 2, title: "La phrase verbale", arabic_title: "الجملة الفعلية", prerequisite: 17, unlocks: 19,
    hint: "Couvre : structure [Verbe + Sujet (Fa'il) + Complément]. Fa'il au Marfou'. Accord du verbe (singulier même si sujet pluriel). Maf'ul bihi au Mansub. خَلَقَ اللَّهُ السَّمَاوَاتِ." },
  { id: 19, level: 2, title: "Les pronoms relatifs", arabic_title: "الأسماء الموصولة", prerequisite: 18, unlocks: 20,
    hint: "Couvre : الَّذِي (m.sg), الَّتِي (f.sg), الَّذِينَ (pl). Proposition relative (silat). الَّذِينَ آمَنُوا، الَّذِي خَلَقَكَ. La silat complète toujours le موصول." },
  { id: 20, level: 2, title: "Les compléments de temps et lieu", arabic_title: "الظرف", prerequisite: 19, unlocks: 21,
    hint: "Couvre : ظرف الزمان (يَوْمَ، حِينَ، لَيْلاً) et ظرف المكان (فَوْقَ، تَحْتَ، أَمَامَ). Toujours au Mansub. يَوْمَ الْقِيَامَةِ، فِي السَّمَاءِ. Différence ظرف/جار ومجرور." },
  { id: 21, level: 3, title: "Les patterns de noms (Awzan)", arabic_title: "أوزان الأسماء", prerequisite: 20, unlocks: 22,
    hint: "Couvre : patterns فَعْل، فَعَل، فَعِيل، فَعَّال، مَفْعَل. Comment le pattern donne le sens (intensité, lieu, instrument). فَعِيل pour les adjectifs de qualité (رَحِيم، كَرِيم). Reconnaissance des patterns." },
  { id: 22, level: 3, title: "Le participe actif et passif", arabic_title: "اسم الفاعل واسم المفعول", prerequisite: 21, unlocks: 23,
    hint: "Couvre : اسم الفاعل (فَاعِل) et اسم المفعول (مَفْعُول) des verbes trilitères. Exemples : كَاتِب/مَكْتُوب، قَادِر/مَقْدُور. Utilisation dans le Coran (غَافِر، مُؤْمِن)." },
  { id: 23, level: 3, title: "Le nom verbal (Masdar)", arabic_title: "المصدر", prerequisite: 22, unlocks: 24,
    hint: "Couvre : les patterns du masdar trilitère (فَعْل، فِعَال، تَفْعِيل). Masdar comme sujet ou complément. Masdar muawwal (أَن + verbe). إِقَامَةُ الصَّلَاةِ، إِيتَاءُ الزَّكَاةِ." },
  { id: 24, level: 3, title: "Les formes verbales augmentées", arabic_title: "أبنية الأفعال الزائدة", prerequisite: 23, unlocks: 25,
    hint: "Couvre : les 10 formes verbales (أوزان). Focus sur les 5 principales : II (فَعَّل), III (فَاعَل), IV (أَفْعَل), V (تَفَعَّل), X (اسْتَفْعَل). Exemples coraniques de chaque forme avec sens." },
  { id: 25, level: 3, title: "الحال — La circonstancielle", arabic_title: "الحال", prerequisite: 24, unlocks: 26,
    hint: "Couvre : الحال = adverbe d'état (comment/dans quel état). Toujours Mansub, indéfini. Accord en genre. جَاءَ الرَّجُلُ مُسْرِعاً. الحال الجملة (proposition circonstancielle). Exemples coraniques." },
  { id: 26, level: 3, title: "Les conditions (Shart)", arabic_title: "أسلوب الشرط", prerequisite: 25, unlocks: 27,
    hint: "Couvre : إِن (si), مَن (celui qui), مَا (ce que). Structure : ادات الشرط + جملة الشرط (Majzum) + جواب الشرط (Majzum). مَن يَعْمَلْ خَيْراً يَرَه. Cas de l'indicatif vs jussif." },
  { id: 27, level: 3, title: "L'analyse syntaxique complète", arabic_title: "الإعراب الكامل", prerequisite: 26, unlocks: 28,
    hint: "Couvre : méthodologie complète de l'إعراب. Pour chaque mot : النوع (type) + الإعراب (cas/fonction) + العلامة (marque). Application sur un verset complet. Outil de lecture autonome du Coran." },
  { id: 28, level: 3, title: "Révision — Al-Fatiha", arabic_title: "إعراب الفاتحة", prerequisite: 27, unlocks: 29,
    hint: "Analyse grammaticale mot par mot de la Sourate Al-Fatiha (7 versets). Chaque mot avec : sa fonction, son cas, sa marque. C'est la leçon de synthèse par excellence." },
  { id: 29, level: 3, title: "Révision — Sourates courtes", arabic_title: "إعراب السور القصيرة", prerequisite: 28, unlocks: 30,
    hint: "Analyse de Al-Ikhlas (112), Al-Falaq (113), Al-Nas (114). Identification rapide des structures vues. Exercices de reconnaissance autonome sans aide." },
  { id: 30, level: 3, title: "Méthode d'autonomie", arabic_title: "منهج الاستقلالية", prerequisite: 29, unlocks: null,
    hint: "Leçon finale : comment continuer seul. Méthodologie pour aborder n'importe quel verset. Ressources (dictionnaires, Lane's Lexicon). Rappel des 10 formes verbales, des cas, de la démarche إعراب." },
];

const SYSTEM_PROMPT = `Tu es un expert en pédagogie de l'arabe coranique, spécialisé dans l'apprentissage pour les francophones.
Tu génères du contenu de cours structuré, précis, et pédagogiquement progressif.
Tu réponds UNIQUEMENT avec du JSON valide. Aucun texte avant ou après.
Tous les exemples arabes doivent être vocalisés (avec les diacritiques).
Les exemples coraniques doivent être authentiques (versets réels).`;

interface LessonContent {
  hook: { question: string; insight: string };
  concepts: Array<{
    id: string;
    arabic_term: string;
    french_name: string;
    definition: string;
    signals: string[];
    color: string;
    examples: Array<{ arabic: string; french: string; note: string }>;
  }>;
  quran_example: {
    surah: string;
    verse_number: number;
    arabic: string;
    french: string;
    word_analysis: Array<{ word: string; type: string; role: string; french: string; note: string }>;
  };
  exercises: Array<{
    id: string;
    type: string;
    instruction: string;
    words?: Array<{ arabic: string; correct: string; options: string[] }>;
    arabic?: string;
    highlight_words?: string[];
    correct_words?: string[];
    feedback_correct?: string;
    feedback_wrong?: string;
  }>;
  summary: {
    table: Array<{ type: string; signal: string; example: string }>;
    rule: string;
  };
}

async function generateLesson(lesson: typeof LESSONS_TO_GENERATE[0]): Promise<LessonContent> {
  const prompt = `Génère le contenu complet de la leçon d'arabe coranique suivante.

Leçon : "${lesson.title}" (${lesson.arabic_title})
Niveau : ${lesson.level} / 3
Contexte pédagogique : ${lesson.hint}

STRUCTURE REQUISE (JSON strict) :
{
  "hook": {
    "question": "Question accrochante qui crée le besoin de comprendre ce concept",
    "insight": "La réponse/clé de compréhension en 1-2 phrases"
  },
  "concepts": [
    {
      "id": "slug_court",
      "arabic_term": "المصطلح العربي مع تشكيل",
      "french_name": "Nom français du concept",
      "definition": "Définition claire en 1-2 phrases",
      "signals": ["Signal visuel/auditif 1 pour reconnaître ce concept", "Signal 2"],
      "color": "#HEXCOLOR",
      "examples": [
        { "arabic": "مثال بالتشكيل", "french": "traduction", "note": "explication courte" }
      ]
    }
  ],
  "quran_example": {
    "surah": "Nom de la sourate",
    "verse_number": 0,
    "arabic": "الآية الكريمة بالتشكيل",
    "french": "Traduction française",
    "word_analysis": [
      { "word": "كَلِمَة", "type": "noun/verb/particle", "role": "الدور النحوي", "french": "traduction", "note": "note grammaticale" }
    ]
  },
  "exercises": [
    {
      "id": "ex${lesson.id}-1",
      "type": "classify",
      "instruction": "Instruction claire",
      "words": [
        { "arabic": "كَلِمَة", "correct": "option_correcte", "options": ["option1", "option2", "option3"] }
      ]
    },
    {
      "id": "ex${lesson.id}-2",
      "type": "highlight",
      "instruction": "Trouve X dans ce verset :",
      "arabic": "الآية",
      "highlight_words": ["مفردة1", "مفردة2"],
      "correct_words": ["المفردة_الصحيحة"],
      "feedback_correct": "✓ Bravo ! explication",
      "feedback_wrong": "Indice pour réessayer"
    }
  ],
  "summary": {
    "table": [
      { "type": "Concept", "signal": "Comment le reconnaître", "example": "مثال" }
    ],
    "rule": "La règle d'or à retenir en 1 phrase"
  }
}

Règles :
- 2-3 concepts maximum par leçon
- Exemples coraniques réels et authentiques avec vocalisation complète
- Exercices progressifs : classify puis highlight
- Options des exercises : 2-4 choix pertinents
- Colors : utilise des hex cohérents avec le niveau (Level 1: bleus/verts, Level 2: orange/violet, Level 3: rouge/bordeaux)
- La leçon est pour les niveaux ${lesson.level === 1 ? 'débutants' : lesson.level === 2 ? 'intermédiaires' : 'avancés'}`;

  const message = await client.messages.create({
    model: 'claude-haiku-4-5-20251001',
    max_tokens: 4096,
    system: [{ type: 'text', text: SYSTEM_PROMPT, cache_control: { type: 'ephemeral' } }],
    messages: [{ role: 'user', content: prompt }]
  });

  const raw = message.content
    .filter((b): b is Anthropic.TextBlock => b.type === 'text')
    .map(b => b.text)
    .join('');

  const match = raw.match(/\{[\s\S]*\}/);
  if (!match) throw new Error(`No JSON found:\n${raw.substring(0, 300)}`);
  return JSON.parse(match[0]) as LessonContent;
}

function buildLessonTs(lesson: typeof LESSONS_TO_GENERATE[0], content: LessonContent): string {
  const data = {
    id: lesson.id,
    level: lesson.level,
    title: lesson.id === 7 ? "La phrase nominale avancée" : lesson.title,
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
  return JSON.stringify(data, null, 4);
}

async function main() {
  const lessonsPath = 'src/data/lessons.ts';
  let lessonsTs = fs.readFileSync(lessonsPath, 'utf8');

  console.log(`Génération de ${LESSONS_TO_GENERATE.length} leçons...\n`);

  for (const lesson of LESSONS_TO_GENERATE) {
    process.stdout.write(`  L${lesson.id}: ${lesson.title}... `);

    try {
      const content = await generateLesson(lesson);
      const lessonJson = buildLessonTs(lesson, content);

      // Remplace le stub dans le fichier TS
      // Cherche l'objet avec id: N, et le remplace jusqu'à la prochaine virgule + { ou la fin de ]
      const idPattern = new RegExp(
        `(\\s*,\\s*)?\\{[\\s\\S]*?(?:"id"|id):\\s*${lesson.id},[\\s\\S]*?unlocks_lesson_id:[\\s\\S]*?\\}(?=\\s*,\\s*\\{|\\s*\\])`,
        'g'
      );

      const matches = [...lessonsTs.matchAll(new RegExp(`(?:,\\s*)?\\{[\\s\\S]*?id:\\s*${lesson.id}\\b`, 'g'))];

      // Approche plus fiable : trouver le bloc entre les deux accolades pour l'id donné
      const startMarker = `id: ${lesson.id},`;
      const idx = lessonsTs.indexOf(startMarker);
      if (idx === -1) {
        console.log(`SKIP (id ${lesson.id} introuvable)`);
        continue;
      }

      // Remonter jusqu'à l'accolade ouvrante
      let start = idx;
      while (start > 0 && lessonsTs[start] !== '{') start--;

      // Trouver l'accolade fermante correspondante
      let depth = 0;
      let end = start;
      for (let i = start; i < lessonsTs.length; i++) {
        if (lessonsTs[i] === '{') depth++;
        else if (lessonsTs[i] === '}') { depth--; if (depth === 0) { end = i; break; } }
      }

      lessonsTs = lessonsTs.substring(0, start) + lessonJson + lessonsTs.substring(end + 1);
      console.log(`OK`);

      // Sauvegarde après chaque leçon (protection contre les crashes)
      fs.writeFileSync(lessonsPath, lessonsTs);

    } catch (err) {
      console.error(`ERREUR:`, err instanceof Error ? err.message : err);
    }

    // Pause entre leçons pour éviter rate limit
    await new Promise(r => setTimeout(r, 1000));
  }

  console.log('\nGénération terminée. lessons.ts mis à jour.');
}

main().catch(console.error);
