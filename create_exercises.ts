import fs from 'fs';

const data = `import { Exercise } from "./exerciseTypes";

export const AL_MULK_EXERCISES: Exercise[] = [
  // VERSET 1
  {
    id: "67_1_highlight_nouns",
    verse_ref: "67:1",
    surah: "Al-Mulk",
    verse_number: 1,
    arabic: "تَبَارَكَ الَّذِي بِيَدِهِ الْمُلْكُ وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ",
    french: "Béni soit Celui en la main de Qui est le royaume, et Il est Omnipotent",
    type: "highlight",
    difficulty: 1,
    instruction: "Surligne tous les noms (اسم) dans ce verset",
    words_correct: ["الَّذِي", "بِيَدِهِ", "الْمُلْكُ", "كُلِّ", "شَيْءٍ", "قَدِيرٌ"],
    feedback: "تَبَارَكَ est un verbe. وَهُوَ est pronom. عَلَىٰ est préposition. Tout le reste = nom.",
    linked_lesson: 1
  },
  {
    id: "67_1_idafa",
    verse_ref: "67:1",
    surah: "Al-Mulk",
    verse_number: 1,
    arabic: "تَبَارَكَ الَّذِي بِيَدِهِ الْمُلْكُ وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ",
    french: "Béni soit Celui en la main de Qui est le royaume, et Il est Omnipotent",
    type: "idafa_identifier",
    difficulty: 2,
    instruction: "Identifie l'annexion (إضافة) cachée dans بِيَدِهِ",
    answer: "بِيَد + هِ = la main de Lui (Sa main)",
    rule: "يَد = مضاف (perd tanwîn). هِ = مضاف إليه (pronom suffixe, toujours مجرور)",
    linked_lesson: 11
  },
  {
    id: "67_1_case",
    verse_ref: "67:1",
    surah: "Al-Mulk",
    verse_number: 1,
    arabic: "تَبَارَكَ الَّذِي بِيَدِهِ الْمُلْكُ وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ",
    french: "Béni soit Celui en la main de Qui est le royaume, et Il est Omnipotent",
    type: "case_identifier",
    difficulty: 2,
    instruction: "Quel est le cas de الْمُلْكُ ?",
    highlighted: "الْمُلْكُ",
    correct_case: "مرفوع",
    correct_reason: "مبتدأ مؤخر — le sujet est placé après le prédicat بِيَدِهِ",
    linked_lesson: 6
  },
  {
    id: "67_1_root",
    verse_ref: "67:1",
    surah: "Al-Mulk",
    verse_number: 1,
    arabic: "تَبَارَكَ الَّذِي بِيَدِهِ الْمُلْكُ وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ",
    french: "Béni soit Celui en la main de Qui est le royaume, et Il est Omnipotent",
    type: "root_finder",
    difficulty: 1,
    word: "قَدِيرٌ",
    correct_root: "ق-د-ر",
    meaning: "capacité, pouvoir",
    family: ["قَدَرَ (il a pu)", "قُدْرَة (capacité)", "مَقْدُور (possible)", "قَدَر (destin)"],
    linked_lesson: 2
  },

  // VERSET 2
  {
    id: "67_2_classify",
    verse_ref: "67:2",
    surah: "Al-Mulk",
    verse_number: 2,
    arabic: "الَّذِي خَلَقَ الْمَوْتَ وَالْحَيَاةَ لِيَبْلُوَكُمْ أَيُّكُمْ أَحْسَنُ عَمَلًا",
    french: "Celui qui a créé la mort et la vie pour vous éprouver : lequel d'entre vous est le meilleur en œuvre",
    type: "classify",
    difficulty: 1,
    instruction: "Classe : NOM / VERBE / PARTICULE",
    words: [
      { word: "خَلَقَ", correct: "فعل" },
      { word: "الْمَوْتَ", correct: "اسم" },
      { word: "الْحَيَاةَ", correct: "اسم" },
      { word: "وَ", correct: "حرف" },
      { word: "لِ", correct: "حرف" },
      { word: "أَحْسَنُ", correct: "اسم" }
    ],
    linked_lesson: 1
  },
  {
    id: "67_2_verb",
    verse_ref: "67:2",
    surah: "Al-Mulk",
    verse_number: 2,
    arabic: "الَّذِي خَلَقَ الْمَوْتَ وَالْحَيَاةَ لِيَبْلُوَكُمْ أَيُّكُمْ أَحْسَنُ عَمَلًا",
    french: "Celui qui a créé la mort et la vie pour vous éprouver",
    type: "verb_analyzer",
    difficulty: 2,
    verb: "خَلَقَ",
    root: "خ-ل-ق",
    tense: "ماضٍ",
    person: "3ème masc. sing. (هُوَ sous-entendu)",
    meaning: "il a créé",
    linked_lesson: 15
  },
  {
    id: "67_2_mansoub",
    verse_ref: "67:2",
    surah: "Al-Mulk",
    verse_number: 2,
    arabic: "الَّذِي خَلَقَ الْمَوْتَ وَالْحَيَاةَ لِيَبْلُوَكُمْ أَيُّكُمْ أَحْسَنُ عَمَلًا",
    french: "Celui qui a créé la mort et la vie pour vous éprouver",
    type: "case_identifier",
    difficulty: 2,
    instruction: "Pourquoi الْمَوْتَ et الْحَيَاةَ ont une fatha (ـَ) ?",
    correct_case: "مَنْصُوب",
    correct_reason: "مفعول به — objets directs du verbe خَلَقَ",
    linked_lesson: 6
  },
  {
    id: "67_2_root_ihsan",
    verse_ref: "67:2",
    surah: "Al-Mulk",
    verse_number: 2,
    arabic: "الَّذِي خَلَقَ الْمَوْتَ وَالْحَيَاةَ لِيَبْلُوَكُمْ أَيُّكُمْ أَحْسَنُ عَمَلًا",
    french: "Celui qui a créé la mort et la vie pour vous éprouver",
    type: "root_finder",
    difficulty: 2,
    word: "أَحْسَنُ",
    correct_root: "ح-س-ن",
    meaning: "bonté, beauté, excellence",
    family: ["حَسَنٌ (beau/bon)", "إِحْسَان (bienfaisance)", "حُسْن (beauté)", "مُحْسِن (bienfaisant)"],
    linked_lesson: 2
  },

  // VERSET 3
  {
    id: "67_3_idafa",
    verse_ref: "67:3",
    surah: "Al-Mulk",
    verse_number: 3,
    arabic: "الَّذِي خَلَقَ سَبْعَ سَمَاوَاتٍ طِبَاقًا ۖ مَّا تَرَىٰ فِي خَلْقِ الرَّحْمَٰنِ مِن تَفَاوُتٍ",
    french: "Celui qui a créé sept cieux superposés. Tu ne vois aucune irrégularité dans la création du Tout Miséricordieux.",
    type: "idafa_identifier",
    difficulty: 2,
    instruction: "Trouve l'annexion (إضافة) dans la 2ème partie du verset",
    correct_answers: [
      "خَلْقِ الرَّحْمَٰنِ = la création du Tout Miséricordieux"
    ],
    note: "خَلْقِ (majrour) = مضاف, الرَّحْمَٰنِ = مضاف إليه (majrour)",
    linked_lesson: 11
  },
  {
    id: "67_3_hal",
    verse_ref: "67:3",
    surah: "Al-Mulk",
    verse_number: 3,
    arabic: "الَّذِي خَلَقَ سَبْعَ سَمَاوَاتٍ طِبَاقًا ۖ مَّا تَرَىٰ فِي خَلْقِ الرَّحْمَٰنِ مِن تَفَاوُتٍ",
    french: "Celui qui a créé sept cieux superposés. Tu ne vois aucune irrégularité dans la création du Tout Miséricordieux.",
    type: "case_identifier",
    difficulty: 3,
    instruction: "Quel est le rôle grammatical de طِبَاقًا ?",
    correct_role: "حال (circonstancielle d'état)",
    correct_case: "مَنْصُوب (فتحة + تنوين)",
    explanation: "طِبَاقًا décrit l'état des cieux au moment de leur création. = 'étant superposés'",
    linked_lesson: 25
  },

  // VERSET 4
  {
    id: "67_4_imperative",
    verse_ref: "67:4",
    surah: "Al-Mulk",
    verse_number: 4,
    arabic: "ثُمَّ ارْجِعِ الْبَصَرَ كَرَّتَيْنِ يَنقَلِبْ إِلَيْكَ الْبَصَرُ خَاسِئًا وَهُوَ حَسِيرٌ",
    french: "Puis retourne ton regard deux fois — le regard te reviendra humilié et épuisé",
    type: "verb_analyzer",
    difficulty: 2,
    verb: "ارْجِعِ",
    instruction: "Analyse ce verbe impératif",
    root: "ر-ج-ع",
    tense: "أمر (impératif)",
    person: "2ème masc. sing. (أنت sous-entendu)",
    meaning: "reviens ! / retourne !",
    linked_lesson: 17
  },
  {
    id: "67_4_dual",
    verse_ref: "67:4",
    surah: "Al-Mulk",
    verse_number: 4,
    arabic: "ثُمَّ ارْجِعِ الْبَصَرَ كَرَّتَيْنِ يَنقَلِبْ إِلَيْكَ الْبَصَرُ خَاسِئًا وَهُوَ حَسِيرٌ",
    french: "Puis retourne ton regard deux fois — le regard te reviendra humilié et épuisé",
    type: "case_identifier",
    difficulty: 2,
    instruction: "كَرَّتَيْنِ = 'deux fois'. C'est quel nombre ? Quel cas ?",
    highlighted: "كَرَّتَيْنِ",
    correct_number: "مُثَنَّى (duel)",
    correct_case: "مَنْصُوب (ياء du duel en position mansoub)",
    rule: "Duel mansoub/majrour = ـَيْنِ (ya + nun kasra)",
    linked_lesson: 5
  },
  {
    id: "67_4_hal",
    verse_ref: "67:4",
    surah: "Al-Mulk",
    verse_number: 4,
    arabic: "ثُمَّ ارْجِعِ الْبَصَرَ كَرَّتَيْنِ يَنقَلِبْ إِلَيْكَ الْبَصَرُ خَاسِئًا وَهُوَ حَسِيرٌ",
    french: "Puis retourne ton regard deux fois — le regard te reviendra humilié et épuisé",
    type: "highlight",
    difficulty: 3,
    instruction: "Surligne le حال (circonstancielles d'état) dans la 2ème partie",
    words_correct: ["خَاسِئًا"],
    explanation: "خَاسِئًا (humilié) décrit l'état du regard",
    linked_lesson: 25
  },

  // VERSET 5
  {
    id: "67_5_verb_nahnu",
    verse_ref: "67:5",
    surah: "Al-Mulk",
    verse_number: 5,
    arabic: "وَلَقَدْ زَيَّنَّا السَّمَاءَ الدُّنْيَا بِمَصَابِيحَ وَجَعَلْنَاهَا رُجُومًا لِّلشَّيَاطِينِ",
    french: "Et certes, Nous avons orné le ciel le plus proche de lampes et Nous en avons fait des jets pour les diables",
    type: "verb_analyzer",
    difficulty: 2,
    verb: "زَيَّنَّا",
    instruction: "Analyse ce verbe — qui est le sujet ?",
    root: "ز-ي-ن",
    form: "Forme II (زَيَّنَ = embellir, orner)",
    tense: "ماضٍ",
    person: "نَحْنُ (nous) — نَا intégré au verbe",
    note: "Allah utilise نحن = pluriel de majesté",
    linked_lesson: 15
  },
  {
    id: "67_5_adjective",
    verse_ref: "67:5",
    surah: "Al-Mulk",
    verse_number: 5,
    arabic: "وَلَقَدْ زَيَّنَّا السَّمَاءَ الدُّنْيَا بِمَصَابِيحَ وَجَعَلْنَاهَا رُجُومًا لِّلشَّيَاطِينِ",
    french: "Et certes, Nous avons orné le ciel le plus proche de lampes et Nous en avons fait des jets pour les diables",
    type: "case_identifier",
    difficulty: 2,
    instruction: "السَّمَاءَ الدُّنْيَا : quel est le rôle de الدُّنْيَا ?",
    highlighted: "الدُّنْيَا",
    correct_role: "نعت (adjectif) — il qualifie السَّمَاءَ",
    correct_case: "مَنْصُوب comme السَّمَاءَ (accord en cas)",
    rule: "L'adjectif suit le cas du nom qu'il qualifie. السَّمَاءَ = منصوب → الدُّنْيَا = منصوب",
    linked_lesson: 12
  },
  {
    id: "67_5_root_zayn",
    verse_ref: "67:5",
    surah: "Al-Mulk",
    verse_number: 5,
    arabic: "وَلَقَدْ زَيَّنَّا السَّمَاءَ الدُّنْيَا بِمَصَابِيحَ وَجَعَلْنَاهَا رُجُومًا لِّلشَّيَاطِينِ",
    french: "Et certes, Nous avons orné le ciel le plus proche de lampes et Nous en avons fait des jets pour les diables",
    type: "root_finder",
    difficulty: 1,
    word: "زَيَّنَّا",
    correct_root: "ز-ي-ن",
    meaning: "ornement, beauté",
    family: ["زِينَة (parure, ornement)", "مُزَيَّن (orné)", "الزِّينَة (la parure)"],
    linked_lesson: 2
  }
];
`;
fs.writeFileSync('src/data/quranExercises.ts', data);
console.log('Exercises created.');
