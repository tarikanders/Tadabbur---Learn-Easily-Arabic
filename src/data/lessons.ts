import { LessonData } from "./lessonTypes";

export const LESSONS: LessonData[] = [
  {
    id: 1,
    level: 1,
    title: "Les 3 types de mots",
    arabic_title: "أقسام الكلمة",
    duration_minutes: 8,
    prerequisite_lesson_id: null,
    hook: {
      question: "Comment différencier كِتَاب (livre) de كَتَبَ (il a écrit) ?",
      insight: "En arabe, chaque mot appartient à une des 3 grandes familles. Cette famille détermine comment le mot fonctionne dans la phrase."
    },
    concepts: [
      {
        id: "noun",
        arabic_term: "اِسْم",
        french_name: "Le Nom",
        definition: "Désigne une personne, une chose, un lieu, une idée. Peut prendre ال ou le tanwîn.",
        signals: ["peut prendre ال → الكِتَاب", "peut prendre le tanwîn → كِتَابٌ", "peut suivre une préposition"],
        color: "#C9A84C",
        examples: [
          { arabic: "اللَّهُ", french: "Allah", note: "nom propre" },
          { arabic: "كِتَابٌ", french: "un livre", note: "nom avec tanwîn" },
          { arabic: "الرَّحِيمُ", french: "le Très Miséricordieux", note: "nom avec ال" }
        ]
      },
      {
        id: "verb",
        arabic_term: "فِعْل",
        french_name: "Le Verbe",
        definition: "Exprime une action ou un état. Contient une information sur le temps.",
        signals: ["passé : se conjugue", "présent : commence par ي، ت، أ، ن"],
        color: "#2D6A4F",
        examples: [
          { arabic: "قَالَ", french: "il a dit", note: "verbe passé" },
          { arabic: "يَعْلَمُ", french: "il sait", note: "verbe présent" }
        ]
      },
      {
        id: "particle",
        arabic_term: "حَرْف",
        french_name: "La Particule",
        definition: "Mot outil qui n'est ni nom ni verbe. N'a de sens que dans un contexte.",
        signals: ["ne prend pas ال", "ne prend pas le tanwîn", "souvent court (1-3 lettres)"],
        color: "#8B5E3C",
        examples: [
          { arabic: "فِي", french: "dans", note: "préposition" },
          { arabic: "وَ", french: "et", note: "conjonction" }
        ]
      }
    ],
    quran_example: {
      surah: "Al-Fatiha",
      verse_number: 2,
      arabic: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
      french: "Louange à Allah, Seigneur des mondes",
      word_analysis: [
        { word: "الْحَمْدُ", type: "noun", role: "مبتدأ", french: "La louange", note: "nom avec ال" },
        { word: "لِلَّهِ", type: "particle+noun", role: "جار ومجرور", french: "à Allah", note: "préposition (حرف) + nom (اسم)" },
        { word: "رَبِّ", type: "noun", role: "مضاف", french: "Seigneur", note: "nom (اسم)" },
        { word: "الْعَالَمِينَ", type: "noun", role: "مضاف إليه", french: "des mondes", note: "nom (اسم)" }
      ]
    },
    exercises: [
      {
        id: "ex1-1",
        type: "classify",
        instruction: "Classe chacun de ces mots : اسم، فعل، ou حرف ?",
        words: [
          { arabic: "مِنْ", correct: "particle", options: ["noun", "verb", "particle"] },
          { arabic: "خَلَقَ", correct: "verb", options: ["noun", "verb", "particle"] },
          { arabic: "مُسْلِمٌ", correct: "noun", options: ["noun", "verb", "particle"] },
          { arabic: "عَلَى", correct: "particle", options: ["noun", "verb", "particle"] },
          { arabic: "رَحْمَةٌ", correct: "noun", options: ["noun", "verb", "particle"] }
        ]
      },
      {
        id: "ex1-2",
        type: "highlight",
        instruction: "Dans ce verset, appuie sur tous les noms (اسم)",
        arabic: "إِنَّ اللَّهَ عَلِيمٌ حَكِيمٌ",
        highlight_words: ["إِنَّ", "اللَّهَ", "عَلِيمٌ", "حَكِيمٌ"],
        correct_words: ["اللَّهَ", "عَلِيمٌ", "حَكِيمٌ"],
        feedback_correct: "✓ Bravo ! إِنَّ est une particule, les 3 autres sont des noms.",
        feedback_wrong: "Presque ! Regarde bien si le mot peut prendre ال ou le tanwîn."
      }
    ],
    summary: {
      table: [
        { type: "اِسْم (Nom)", signal: "Prend ال ou tanwîn", example: "كِتَابٌ / الكِتَابُ" },
        { type: "فِعْل (Verbe)", signal: "Se conjugue, ou commence par ي ت أ ن", example: "قَالَ / يَقُولُ" },
        { type: "حَرْف (Particule)", signal: "Ni ال, ni tanwîn. Mot outil.", example: "فِي / وَ" }
      ],
      rule: "Tout mot arabe est soit un nom, soit un verbe, soit une particule."
    },
    unlocks_lesson_id: 2
  },
  {
    id: 2,
    level: 1,
    title: "L'article défini ال",
    arabic_title: "ال التعريف",
    duration_minutes: 8,
    prerequisite_lesson_id: 1,
    hook: {
      question: "Pourquoi كِتَاب veut dire 'un livre' mais الكِتَاب veut dire 'le livre' ?",
      insight: "L'article ال (Al) rend un nom défini en arabe. Attention : un nom avec ال ne peut plus prendre de tanwîn."
    },
    concepts: [
      {
        id: "qamariyya",
        arabic_term: "ال القمرية",
        french_name: "Lettres Lunaires",
        definition: "La lettre ل de l'article se prononce clairement.",
        signals: ["Le ل porte un soukoun (ْ) visible", "Pas de shadda (ّ) sur la lettre suivante"],
        color: "#1E3A8A",
        examples: [
          { arabic: "الْقَمَرُ", french: "la lune", note: "qamar" },
          { arabic: "الْحَمْدُ", french: "la louange", note: "hamd" }
        ]
      },
      {
        id: "shamsiyya",
        arabic_term: "ال الشمسية",
        french_name: "Lettres Solaires",
        definition: "La lettre ل s'assimile à la lettre suivante.",
        signals: ["Le ل n'est pas prononcé", "La lettre suivante porte une shadda (ّ)"],
        color: "#D97706",
        examples: [
          { arabic: "الشَّمْسُ", french: "le soleil", note: "shams" },
          { arabic: "الرَّحْمَٰنِ", french: "Le tout Miséricordieux", note: "rahman" }
        ]
      }
    ],
    quran_example: {
      surah: "Al-Fatiha",
      verse_number: 1,
      arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
      french: "Au nom d'Allah, le Tout Miséricordieux, le Très Miséricordieux",
      word_analysis: [
        { word: "الرَّحْمَٰنِ", type: "noun", role: "نعت (Adjectif)", french: "le Tout Miséricordieux", note: "ال Solaire (Shadda sur le ر)" },
        { word: "الرَّحِيمِ", type: "noun", role: "نعت (Adjectif)", french: "le Très Miséricordieux", note: "ال Solaire (Shadda sur le ر)" }
      ]
    },
    exercises: [
      {
        id: "ex2-1",
        type: "classify",
        instruction: "Solaire (شمسية) ou Lunaire (قمرية) ?",
        words: [
          { arabic: "الْكِتَاب", correct: "lunaire", options: ["solaire", "lunaire"] },
          { arabic: "السَّماء", correct: "solaire", options: ["solaire", "lunaire"] },
          { arabic: "الْمَلِك", correct: "lunaire", options: ["solaire", "lunaire"] },
          { arabic: "الرَّحِيم", correct: "solaire", options: ["solaire", "lunaire"] },
          { arabic: "الْيَوْم", correct: "lunaire", options: ["solaire", "lunaire"] },
          { arabic: "الصِّرَاط", correct: "solaire", options: ["solaire", "lunaire"] }
        ]
      }
    ],
    summary: {
      table: [
        { type: "الْـ + Lettre Lunaire", signal: "Le ل se prononce (الْقَمَرُ)", example: "الْكِتَابُ, الْعَالَمِينَ" },
        { type: "الـ + Lettre Solaire", signal: "Le ل disparaît, shadda sur la lettre d'après (الشَّمْسُ)", example: "الرَّحْمَٰنِ, الصِّرَاطَ" }
      ],
      rule: "L'article (ال) s'attache toujours au nom. Il ne peut jamais coexister avec un Tanwin (ٌ ٍ ً)."
    },
    unlocks_lesson_id: 3
  },
  {
    id: 3,
    level: 1,
    title: "Masculin et Féminin",
    arabic_title: "المذكر والمؤنث",
    duration_minutes: 6,
    prerequisite_lesson_id: 2,
    hook: {
      question: "Comment sait-on qu'un mot arabe est féminin ?",
      insight: "Contrairement au français, il n'y a pas 'le' et 'la'. C'est la terminaison du mot qui nous indique souvent son genre."
    },
    concepts: [
      {
        id: "ta-marbuta",
        arabic_term: "تاء مربوطة",
        french_name: "Le signe (ة)",
        definition: "La très grande majorité des mots se terminant par (ة) sont féminins.",
        signals: ["Fini par ة", "S'accorde au féminin"],
        color: "#BE185D",
        examples: [
          { arabic: "رَحْمَةٌ", french: "miséricorde", note: "féminin" },
          { arabic: "مُسْلِمَةٌ", french: "musulmane", note: "féminin" }
        ]
      },
      {
        id: "alif-maqsura",
        arabic_term: "ألف مقصورة / ممدودة",
        french_name: "Fin en ى ou اء",
        definition: "Ces terminaisons indiquent aussi très souvent le féminin.",
        signals: ["Fini par ى (Alif Maqsura)", "Fini par اء (Alif Mamduda)"],
        color: "#9D174D",
        examples: [
          { arabic: "بُشْرَى", french: "bonne nouvelle", note: "féminin" },
          { arabic: "سَمَاء", french: "ciel", note: "féminin" }
        ]
      }
    ],
    quran_example: {
      surah: "Al-A'raf",
      verse_number: 56,
      arabic: "إِنَّ رَحْمَتَ اللَّهِ قَرِيبٌ مِّنَ الْمُحْسِنِينَ",
      french: "La miséricorde d'Allah est proche des bienfaisants",
      word_analysis: [
        { word: "رَحْمَتَ", type: "noun", role: "اسم إن", french: "miséricorde", note: "C'est un mot féminin terminant normalement par ة, ici écrit ت à cause de la construction" }
      ]
    },
    exercises: [
      {
        id: "ex3-1",
        type: "classify",
        instruction: "Masculin (مذكر) ou Féminin (مؤنث) ?",
        words: [
          { arabic: "جَنَّةٌ", correct: "féminin", options: ["masculin", "féminin"] },
          { arabic: "كِتَابٌ", correct: "masculin", options: ["masculin", "féminin"] },
          { arabic: "دُنْيَا", correct: "féminin", options: ["masculin", "féminin"] },
          { arabic: "أَرْضٌ", correct: "féminin", options: ["masculin", "féminin"] },
          { arabic: "قَمَرٌ", correct: "masculin", options: ["masculin", "féminin"] },
          { arabic: "صَلَاةٌ", correct: "féminin", options: ["masculin", "féminin"] },
          { arabic: "نُورٌ", correct: "masculin", options: ["masculin", "féminin"] },
          { arabic: "بُشْرَى", correct: "féminin", options: ["masculin", "féminin"] }
        ]
      }
    ],
    summary: {
      table: [
        { type: "Mots avec (ة)", signal: "Presque toujours féminins", example: "آيَة (verset) / جَنَّة (jardin)" },
        { type: "Nature", signal: "Sans signe mais naturellement féminin", example: "أُمّ (mère) / أَرْض (terre)" }
      ],
      rule: "Le genre est fondamental car les adjectifs et verbes s'accordent avec le nom."
    },
    unlocks_lesson_id: 4
  },
  {
    id: 4,
    level: 1,
    title: "Singulier, Duel, Pluriel",
    arabic_title: "المفرد والمثنى والجمع",
    duration_minutes: 8,
    prerequisite_lesson_id: 3,
    hook: {
      question: "En arabe, il y a 3 nombres, pas 2 comme en français.",
      insight: "Il y a un cas spécial pour 'exactement deux' éléments : le Duel (المثنى)."
    },
    concepts: [
      {
        id: "dual",
        arabic_term: "مُثَنَّى",
        french_name: "Le Duel (2)",
        definition: "Désigne exactement deux entités. Se forme en ajoutant انِ ou يْنِ au singulier.",
        signals: ["Fini par انِ (Ani) ou يْنِ (Ayni)"],
        color: "#0284C7",
        examples: [
          { arabic: "جَنَّتَانِ", french: "deux jardins", note: "de jannah" },
          { arabic: "الْبَحْرَيْنِ", french: "les deux mers", note: "de bahr" }
        ]
      },
      {
        id: "plural-sound",
        arabic_term: "جمع مؤنث/مذكر سالم",
        french_name: "Pluriels réguliers",
        definition: "Masculin : ون / ين. Féminin : ات",
        signals: ["Fini par ونَ ou ينَ (Masc)", "Fini par ات (Fém)"],
        color: "#0369A1",
        examples: [
          { arabic: "مُسْلِمُونَ", french: "des musulmans", note: "Masc" },
          { arabic: "مُؤْمِنَاتٌ", french: "des croyantes", note: "Fém" }
        ]
      },
      {
        id: "plural-broken",
        arabic_term: "جمع تكسير",
        french_name: "Pluriel irrégulier",
        definition: "La structure interne du mot change. Très fréquent !",
        signals: ["Structure différente du singulier", "A mémoriser"],
        color: "#075985",
        examples: [
          { arabic: "رِجَالٌ", french: "des hommes", note: "sing. rajul" },
          { arabic: "كُتُبٌ", french: "des livres", note: "sing. kitab" }
        ]
      }
    ],
    quran_example: {
      surah: "At-Tawbah",
      verse_number: 71,
      arabic: "وَالْمُؤْمِنُونَ وَالْمُؤْمِنَاتُ بَعْضُهُمْ أَوْلِيَاءُ بَعْضٍ",
      french: "Les croyants et les croyantes sont alliés les uns des autres",
      word_analysis: [
        { word: "الْمُؤْمِنُونَ", type: "noun", role: "مبتدأ", french: "Les croyants", note: "Pluriel masculin (ون)" },
        { word: "الْمُؤْمِنَاتُ", type: "noun", role: "معطوف", french: "les croyantes", note: "Pluriel féminin (ات)" },
        { word: "أَوْلِيَاءُ", type: "noun", role: "خبر", french: "alliés", note: "Pluriel brisé de وَلِيّ (waliyy)" }
      ]
    },
    exercises: [
      {
        id: "ex4-1",
        type: "classify",
        instruction: "Détermine le nombre de chaque mot : Singulier, Duel, ou Pluriel ?",
        words: [
          { arabic: "الْمُسْلِمِينَ", correct: "pluriel", options: ["singulier", "duel", "pluriel"] },
          { arabic: "رَجُلَانِ", correct: "duel", options: ["singulier", "duel", "pluriel"] },
          { arabic: "جَنَّةٌ", correct: "singulier", options: ["singulier", "duel", "pluriel"] },
          { arabic: "مُؤْمِنَات", correct: "pluriel", options: ["singulier", "duel", "pluriel"] },
          { arabic: "كِتَابَيْنِ", correct: "duel", options: ["singulier", "duel", "pluriel"] }
        ]
      }
    ],
    summary: {
      table: [
        { type: "Duel", signal: "ان / ين", example: "مُسْلِمَانِ / مُسْلِمَيْنِ" },
        { type: "Pluriel Régulier", signal: "ون / ين (M), ات (F)", example: "مُسْلِمُونَ / مُسْلِمَات" },
        { type: "Pluriel Brisé", signal: "Structure altérée", example: "كِتَاب ← كُتُب" }
      ],
      rule: "La majorité des pluriels d'objets inanimés sont traités comme des mots 'féminins singuliers' en grammaire."
    },
    unlocks_lesson_id: 5
  },
  {
    id: 5,
    level: 1,
    title: "La phrase nominale",
    arabic_title: "الجملة الاسمية",
    duration_minutes: 10,
    prerequisite_lesson_id: 4,
    hook: {
      question: "En arabe, on peut dire 'Allah miséricordieux' sans verbe. Comment ça marche ?",
      insight: "La phrase nominale ne nécessite aucun verbe 'être'. Elle relie directement un Sujet à une Information."
    },
    concepts: [
      {
        id: "mubtada",
        arabic_term: "مُبْتَدَأ",
        french_name: "Le Sujet (Thème)",
        definition: "Ce dont on parle. Généralement en début de phrase, presque toujours défini, et au cas nominatif (Marfou' - se termine souvent par ـُ).",
        signals: ["Défini (souvent avec ال)", "Termine en ـُ (Damma)"],
        color: "#4338CA",
        examples: [
          { arabic: "اللَّهُ", french: "Allah", note: "Sujet (Défini)" },
          { arabic: "الصَّلَاةُ", french: "La prière", note: "Sujet (Défini)" }
        ]
      },
      {
        id: "khabar",
        arabic_term: "خَبَر",
        french_name: "L'Information (Prédicat)",
        definition: "Ce qu'on dit du sujet. Souvent indéfini, et au cas nominatif (Marfou' - se termine souvent par ـٌ).",
        signals: ["Indéfini (Tanwin ـٌ)", "S'accorde en genre/nombre"],
        color: "#6D28D9",
        examples: [
          { arabic: "أَكْبَرُ", french: "est le Plus Grand", note: "Information" },
          { arabic: "نُورٌ", french: "est une lumière", note: "Information" }
        ]
      }
    ],
    quran_example: {
      surah: "Al-Baqarah",
      verse_number: 257,
      arabic: "اللَّهُ وَلِيُّ الَّذِينَ آمَنُوا",
      french: "Allah est le défenseur de ceux qui ont la foi",
      word_analysis: [
        { word: "اللَّهُ", type: "noun", role: "مبتدأ (Sujet)", french: "Allah", note: "Il est défini, au nominatif (ـُ)" },
        { word: "وَلِيُّ", type: "noun", role: "خبر (Information)", french: "(est) le défenseur", note: "L'information à propos d'Allah. Le verbe 'est' est sous-entendu en français." }
      ]
    },
    exercises: [
      {
        id: "ex5-1",
        type: "highlight",
        instruction: "Trouve l'Information (الخبر) dans cette phrase nominale :",
        arabic: "اللَّهُ غَفُورٌ رَحِيمٌ",
        highlight_words: ["اللَّهُ", "غَفُورٌ", "رَحِيمٌ"],
        correct_words: ["غَفُورٌ", "رَحِيمٌ"],
        feedback_correct: "✓ Exact, « Pardonneur (et) Miséricordieux ». Note le Tanwin (ـٌ) typique du Khabar.",
        feedback_wrong: "Rappelle-toi, l'Information est souvent indéfinie et explique le sujet."
      },
      {
        id: "ex5-2",
        type: "highlight",
        instruction: "Trouve le Sujet (المبتدأ) dans cette phrase nominale :",
        arabic: "مُحَمَّدٌ رَسُولُ اللَّهِ",
        highlight_words: ["مُحَمَّدٌ", "رَسُولُ", "اللَّهِ"],
        correct_words: ["مُحَمَّدٌ"],
        feedback_correct: "✓ Parfait ! C'est le nom défini qui débute la phrase.",
        feedback_wrong: "Cherche le nom qui débute la phrase et dont on va parler."
      },
      {
        id: "ex5-3",
        type: "highlight",
        instruction: "Trouve l'Information (الخبر) dans cette phrase nominale :",
        arabic: "الصَّلَاةُ نُورٌ",
        highlight_words: ["الصَّلَاةُ", "نُورٌ"],
        correct_words: ["نُورٌ"],
        feedback_correct: "✓ Excellent ! La nouvelle information apportée sur le sujet.",
        feedback_wrong: "C'est l'information indéfinie qui qualifie le sujet."
      },
      {
        id: "ex5-4",
        type: "highlight",
        instruction: "Trouve le Sujet (المبتدأ) :",
        arabic: "الصَّلَاةُ نُورٌ",
        highlight_words: ["الصَّلَاةُ", "نُورٌ"],
        correct_words: ["الصَّلَاةُ"],
        feedback_correct: "✓ Parfait.",
        feedback_wrong: "C'est le mot défini qui commence la phrase."
      }
    ],
    summary: {
      table: [
        { type: "Sujet (مبتدأ)", signal: "Défini, ـُ", example: "المَسْجِدُ (La mosquée...)" },
        { type: "Info (خبر)", signal: "Indéfini, ـٌ", example: "كَبِيرٌ (...est grande)" }
      ],
      rule: "La phrase nominale fonctionne telle quelle = [Sujet] [Information]. Le verbe 'Être' au présent n'existe pas."
    },
    unlocks_lesson_id: null
  }
  , {
    id: 6,
    level: 1,
    title: "Les 3 cas grammaticaux",
    arabic_title: "الإعراب",
    duration_minutes: 8,
    prerequisite_lesson_id: null,
    hook: {
      question: "Explorez cette nouvelle leçon : Les 3 cas grammaticaux.",
      insight: "Apprenez les principes de base pour maîtriser ce concept grammatical."
    },
    concepts: [],
    quran_example: {
      surah: "Al-Fatiha",
      verse_number: 1,
      arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
      french: "Au nom d'Allah, le Tout Miséricordieux, le Très Miséricordieux",
      word_analysis: []
    },
    exercises: [],
    summary: {
      table: [],
      rule: "Découvrez cette règle dans le cours complet."
    },
    unlocks_lesson_id: null
  }
  , {
    id: 7,
    level: 1,
    title: "La phrase nominale",
    arabic_title: "الجملة الاسمية",
    duration_minutes: 8,
    prerequisite_lesson_id: null,
    hook: {
      question: "Explorez cette nouvelle leçon : La phrase nominale.",
      insight: "Apprenez les principes de base pour maîtriser ce concept grammatical."
    },
    concepts: [],
    quran_example: {
      surah: "Al-Fatiha",
      verse_number: 1,
      arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
      french: "Au nom d'Allah, le Tout Miséricordieux, le Très Miséricordieux",
      word_analysis: []
    },
    exercises: [],
    summary: {
      table: [],
      rule: "Découvrez cette règle dans le cours complet."
    },
    unlocks_lesson_id: null
  }
  , {
    id: 8,
    level: 1,
    title: "Les prépositions + cas مجرور",
    arabic_title: "حروف الجر",
    duration_minutes: 8,
    prerequisite_lesson_id: null,
    hook: {
      question: "Explorez cette nouvelle leçon : Les prépositions + cas مجرور.",
      insight: "Apprenez les principes de base pour maîtriser ce concept grammatical."
    },
    concepts: [],
    quran_example: {
      surah: "Al-Fatiha",
      verse_number: 1,
      arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
      french: "Au nom d'Allah, le Tout Miséricordieux, le Très Miséricordieux",
      word_analysis: []
    },
    exercises: [],
    summary: {
      table: [],
      rule: "Découvrez cette règle dans le cours complet."
    },
    unlocks_lesson_id: null
  }
  , {
    id: 9,
    level: 1,
    title: "Les pronoms personnels détachés",
    arabic_title: "الضمائر المنفصلة",
    duration_minutes: 8,
    prerequisite_lesson_id: null,
    hook: {
      question: "Explorez cette nouvelle leçon : Les pronoms personnels détachés.",
      insight: "Apprenez les principes de base pour maîtriser ce concept grammatical."
    },
    concepts: [],
    quran_example: {
      surah: "Al-Fatiha",
      verse_number: 1,
      arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
      french: "Au nom d'Allah, le Tout Miséricordieux, le Très Miséricordieux",
      word_analysis: []
    },
    exercises: [],
    summary: {
      table: [],
      rule: "Découvrez cette règle dans le cours complet."
    },
    unlocks_lesson_id: null
  }
  , {
    id: 10,
    level: 1,
    title: "Les pronoms suffixes",
    arabic_title: "الضمائر المتصلة",
    duration_minutes: 8,
    prerequisite_lesson_id: null,
    hook: {
      question: "Explorez cette nouvelle leçon : Les pronoms suffixes.",
      insight: "Apprenez les principes de base pour maîtriser ce concept grammatical."
    },
    concepts: [],
    quran_example: {
      surah: "Al-Fatiha",
      verse_number: 1,
      arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
      french: "Au nom d'Allah, le Tout Miséricordieux, le Très Miséricordieux",
      word_analysis: []
    },
    exercises: [],
    summary: {
      table: [],
      rule: "Découvrez cette règle dans le cours complet."
    },
    unlocks_lesson_id: null
  }
  , {
    id: 11,
    level: 2,
    title: "L'annexion",
    arabic_title: "الإضافة",
    duration_minutes: 8,
    prerequisite_lesson_id: null,
    hook: {
      question: "Explorez cette nouvelle leçon : L'annexion.",
      insight: "Apprenez les principes de base pour maîtriser ce concept grammatical."
    },
    concepts: [],
    quran_example: {
      surah: "Al-Fatiha",
      verse_number: 1,
      arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
      french: "Au nom d'Allah, le Tout Miséricordieux, le Très Miséricordieux",
      word_analysis: []
    },
    exercises: [],
    summary: {
      table: [],
      rule: "Découvrez cette règle dans le cours complet."
    },
    unlocks_lesson_id: null
  }
  , {
    id: 12,
    level: 2,
    title: "L'adjectif",
    arabic_title: "النعت",
    duration_minutes: 8,
    prerequisite_lesson_id: null,
    hook: {
      question: "Explorez cette nouvelle leçon : L'adjectif.",
      insight: "Apprenez les principes de base pour maîtriser ce concept grammatical."
    },
    concepts: [],
    quran_example: {
      surah: "Al-Fatiha",
      verse_number: 1,
      arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
      french: "Au nom d'Allah, le Tout Miséricordieux, le Très Miséricordieux",
      word_analysis: []
    },
    exercises: [],
    summary: {
      table: [],
      rule: "Découvrez cette règle dans le cours complet."
    },
    unlocks_lesson_id: null
  }
  , {
    id: 13,
    level: 2,
    title: "لا النافية للجنس",
    arabic_title: "لا النافية للجنس",
    duration_minutes: 8,
    prerequisite_lesson_id: null,
    hook: {
      question: "Explorez cette nouvelle leçon : لا النافية للجنس.",
      insight: "Apprenez les principes de base pour maîtriser ce concept grammatical."
    },
    concepts: [],
    quran_example: {
      surah: "Al-Fatiha",
      verse_number: 1,
      arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
      french: "Au nom d'Allah, le Tout Miséricordieux, le Très Miséricordieux",
      word_analysis: []
    },
    exercises: [],
    summary: {
      table: [],
      rule: "Découvrez cette règle dans le cours complet."
    },
    unlocks_lesson_id: null
  }
  , {
    id: 14,
    level: 2,
    title: "إنّ et ses sœurs",
    arabic_title: "إنّ وأخواتها",
    duration_minutes: 8,
    prerequisite_lesson_id: null,
    hook: {
      question: "Explorez cette nouvelle leçon : إنّ et ses sœurs.",
      insight: "Apprenez les principes de base pour maîtriser ce concept grammatical."
    },
    concepts: [],
    quran_example: {
      surah: "Al-Fatiha",
      verse_number: 1,
      arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
      french: "Au nom d'Allah, le Tout Miséricordieux, le Très Miséricordieux",
      word_analysis: []
    },
    exercises: [],
    summary: {
      table: [],
      rule: "Découvrez cette règle dans le cours complet."
    },
    unlocks_lesson_id: null
  }
  , {
    id: 15,
    level: 2,
    title: "Le verbe passé",
    arabic_title: "الفعل الماضي",
    duration_minutes: 8,
    prerequisite_lesson_id: null,
    hook: {
      question: "Explorez cette nouvelle leçon : Le verbe passé.",
      insight: "Apprenez les principes de base pour maîtriser ce concept grammatical."
    },
    concepts: [],
    quran_example: {
      surah: "Al-Fatiha",
      verse_number: 1,
      arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
      french: "Au nom d'Allah, le Tout Miséricordieux, le Très Miséricordieux",
      word_analysis: []
    },
    exercises: [],
    summary: {
      table: [],
      rule: "Découvrez cette règle dans le cours complet."
    },
    unlocks_lesson_id: null
  }
  , {
    id: 16,
    level: 2,
    title: "Le verbe présent/futur",
    arabic_title: "الفعل المضارع",
    duration_minutes: 8,
    prerequisite_lesson_id: null,
    hook: {
      question: "Explorez cette nouvelle leçon : Le verbe présent/futur.",
      insight: "Apprenez les principes de base pour maîtriser ce concept grammatical."
    },
    concepts: [],
    quran_example: {
      surah: "Al-Fatiha",
      verse_number: 1,
      arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
      french: "Au nom d'Allah, le Tout Miséricordieux, le Très Miséricordieux",
      word_analysis: []
    },
    exercises: [],
    summary: {
      table: [],
      rule: "Découvrez cette règle dans le cours complet."
    },
    unlocks_lesson_id: null
  }
  , {
    id: 17,
    level: 2,
    title: "Le verbe impératif",
    arabic_title: "فعل الأمر",
    duration_minutes: 8,
    prerequisite_lesson_id: null,
    hook: {
      question: "Explorez cette nouvelle leçon : Le verbe impératif.",
      insight: "Apprenez les principes de base pour maîtriser ce concept grammatical."
    },
    concepts: [],
    quran_example: {
      surah: "Al-Fatiha",
      verse_number: 1,
      arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
      french: "Au nom d'Allah, le Tout Miséricordieux, le Très Miséricordieux",
      word_analysis: []
    },
    exercises: [],
    summary: {
      table: [],
      rule: "Découvrez cette règle dans le cours complet."
    },
    unlocks_lesson_id: null
  }
  , {
    id: 18,
    level: 2,
    title: "La phrase verbale",
    arabic_title: "الجملة الفعلية",
    duration_minutes: 8,
    prerequisite_lesson_id: null,
    hook: {
      question: "Explorez cette nouvelle leçon : La phrase verbale.",
      insight: "Apprenez les principes de base pour maîtriser ce concept grammatical."
    },
    concepts: [],
    quran_example: {
      surah: "Al-Fatiha",
      verse_number: 1,
      arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
      french: "Au nom d'Allah, le Tout Miséricordieux, le Très Miséricordieux",
      word_analysis: []
    },
    exercises: [],
    summary: {
      table: [],
      rule: "Découvrez cette règle dans le cours complet."
    },
    unlocks_lesson_id: null
  }
  , {
    id: 19,
    level: 2,
    title: "Les pronoms relatifs",
    arabic_title: "الأسماء الموصولة",
    duration_minutes: 8,
    prerequisite_lesson_id: null,
    hook: {
      question: "Explorez cette nouvelle leçon : Les pronoms relatifs.",
      insight: "Apprenez les principes de base pour maîtriser ce concept grammatical."
    },
    concepts: [],
    quran_example: {
      surah: "Al-Fatiha",
      verse_number: 1,
      arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
      french: "Au nom d'Allah, le Tout Miséricordieux, le Très Miséricordieux",
      word_analysis: []
    },
    exercises: [],
    summary: {
      table: [],
      rule: "Découvrez cette règle dans le cours complet."
    },
    unlocks_lesson_id: null
  }
  , {
    id: 20,
    level: 2,
    title: "Les compléments de temps et lieu",
    arabic_title: "الظرف",
    duration_minutes: 8,
    prerequisite_lesson_id: null,
    hook: {
      question: "Explorez cette nouvelle leçon : Les compléments de temps et lieu.",
      insight: "Apprenez les principes de base pour maîtriser ce concept grammatical."
    },
    concepts: [],
    quran_example: {
      surah: "Al-Fatiha",
      verse_number: 1,
      arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
      french: "Au nom d'Allah, le Tout Miséricordieux, le Très Miséricordieux",
      word_analysis: []
    },
    exercises: [],
    summary: {
      table: [],
      rule: "Découvrez cette règle dans le cours complet."
    },
    unlocks_lesson_id: null
  }
  , {
    id: 21,
    level: 3,
    title: "Les patterns de noms",
    arabic_title: "أوزان الأسماء",
    duration_minutes: 8,
    prerequisite_lesson_id: null,
    hook: {
      question: "Explorez cette nouvelle leçon : Les patterns de noms.",
      insight: "Apprenez les principes de base pour maîtriser ce concept grammatical."
    },
    concepts: [],
    quran_example: {
      surah: "Al-Fatiha",
      verse_number: 1,
      arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
      french: "Au nom d'Allah, le Tout Miséricordieux, le Très Miséricordieux",
      word_analysis: []
    },
    exercises: [],
    summary: {
      table: [],
      rule: "Découvrez cette règle dans le cours complet."
    },
    unlocks_lesson_id: null
  }
  , {
    id: 22,
    level: 3,
    title: "Le participe actif et passif",
    arabic_title: "اسم الفاعل واسم المفعول",
    duration_minutes: 8,
    prerequisite_lesson_id: null,
    hook: {
      question: "Explorez cette nouvelle leçon : Le participe actif et passif.",
      insight: "Apprenez les principes de base pour maîtriser ce concept grammatical."
    },
    concepts: [],
    quran_example: {
      surah: "Al-Fatiha",
      verse_number: 1,
      arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
      french: "Au nom d'Allah, le Tout Miséricordieux, le Très Miséricordieux",
      word_analysis: []
    },
    exercises: [],
    summary: {
      table: [],
      rule: "Découvrez cette règle dans le cours complet."
    },
    unlocks_lesson_id: null
  }
  , {
    id: 23,
    level: 3,
    title: "Le nom verbal",
    arabic_title: "المصدر",
    duration_minutes: 8,
    prerequisite_lesson_id: null,
    hook: {
      question: "Explorez cette nouvelle leçon : Le nom verbal.",
      insight: "Apprenez les principes de base pour maîtriser ce concept grammatical."
    },
    concepts: [],
    quran_example: {
      surah: "Al-Fatiha",
      verse_number: 1,
      arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
      french: "Au nom d'Allah, le Tout Miséricordieux, le Très Miséricordieux",
      word_analysis: []
    },
    exercises: [],
    summary: {
      table: [],
      rule: "Découvrez cette règle dans le cours complet."
    },
    unlocks_lesson_id: null
  }
  , {
    id: 24,
    level: 3,
    title: "Les formes verbales augmentées",
    arabic_title: "أبنية الأفعال الزائدة",
    duration_minutes: 8,
    prerequisite_lesson_id: null,
    hook: {
      question: "Explorez cette nouvelle leçon : Les formes verbales augmentées.",
      insight: "Apprenez les principes de base pour maîtriser ce concept grammatical."
    },
    concepts: [],
    quran_example: {
      surah: "Al-Fatiha",
      verse_number: 1,
      arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
      french: "Au nom d'Allah, le Tout Miséricordieux, le Très Miséricordieux",
      word_analysis: []
    },
    exercises: [],
    summary: {
      table: [],
      rule: "Découvrez cette règle dans le cours complet."
    },
    unlocks_lesson_id: null
  }
  , {
    id: 25,
    level: 3,
    title: "الحال — La circonstancielle",
    arabic_title: "الحال",
    duration_minutes: 8,
    prerequisite_lesson_id: null,
    hook: {
      question: "Explorez cette nouvelle leçon : الحال — La circonstancielle.",
      insight: "Apprenez les principes de base pour maîtriser ce concept grammatical."
    },
    concepts: [],
    quran_example: {
      surah: "Al-Fatiha",
      verse_number: 1,
      arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
      french: "Au nom d'Allah, le Tout Miséricordieux, le Très Miséricordieux",
      word_analysis: []
    },
    exercises: [],
    summary: {
      table: [],
      rule: "Découvrez cette règle dans le cours complet."
    },
    unlocks_lesson_id: null
  }
  , {
    id: 26,
    level: 3,
    title: "Les conditions",
    arabic_title: "أسلوب الشرط",
    duration_minutes: 8,
    prerequisite_lesson_id: null,
    hook: {
      question: "Explorez cette nouvelle leçon : Les conditions.",
      insight: "Apprenez les principes de base pour maîtriser ce concept grammatical."
    },
    concepts: [],
    quran_example: {
      surah: "Al-Fatiha",
      verse_number: 1,
      arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
      french: "Au nom d'Allah, le Tout Miséricordieux, le Très Miséricordieux",
      word_analysis: []
    },
    exercises: [],
    summary: {
      table: [],
      rule: "Découvrez cette règle dans le cours complet."
    },
    unlocks_lesson_id: null
  }
  , {
    id: 27,
    level: 3,
    title: "L'analyse syntaxique complète",
    arabic_title: "الإعراب الكامل",
    duration_minutes: 8,
    prerequisite_lesson_id: null,
    hook: {
      question: "Explorez cette nouvelle leçon : L'analyse syntaxique complète.",
      insight: "Apprenez les principes de base pour maîtriser ce concept grammatical."
    },
    concepts: [],
    quran_example: {
      surah: "Al-Fatiha",
      verse_number: 1,
      arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
      french: "Au nom d'Allah, le Tout Miséricordieux, le Très Miséricordieux",
      word_analysis: []
    },
    exercises: [],
    summary: {
      table: [],
      rule: "Découvrez cette règle dans le cours complet."
    },
    unlocks_lesson_id: null
  }
  , {
    id: 28,
    level: 3,
    title: "Révision — Al-Fatiha",
    arabic_title: "إعراب الفاتحة",
    duration_minutes: 8,
    prerequisite_lesson_id: null,
    hook: {
      question: "Explorez cette nouvelle leçon : Révision — Al-Fatiha.",
      insight: "Apprenez les principes de base pour maîtriser ce concept grammatical."
    },
    concepts: [],
    quran_example: {
      surah: "Al-Fatiha",
      verse_number: 1,
      arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
      french: "Au nom d'Allah, le Tout Miséricordieux, le Très Miséricordieux",
      word_analysis: []
    },
    exercises: [],
    summary: {
      table: [],
      rule: "Découvrez cette règle dans le cours complet."
    },
    unlocks_lesson_id: null
  }
  , {
    id: 29,
    level: 3,
    title: "Révision — Sourates courtes",
    arabic_title: "إعراب السور القصيرة",
    duration_minutes: 8,
    prerequisite_lesson_id: null,
    hook: {
      question: "Explorez cette nouvelle leçon : Révision — Sourates courtes.",
      insight: "Apprenez les principes de base pour maîtriser ce concept grammatical."
    },
    concepts: [],
    quran_example: {
      surah: "Al-Fatiha",
      verse_number: 1,
      arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
      french: "Au nom d'Allah, le Tout Miséricordieux, le Très Miséricordieux",
      word_analysis: []
    },
    exercises: [],
    summary: {
      table: [],
      rule: "Découvrez cette règle dans le cours complet."
    },
    unlocks_lesson_id: null
  }
  , {
    id: 30,
    level: 3,
    title: "Méthode d'autonomie",
    arabic_title: "منهج الاستقلالية",
    duration_minutes: 8,
    prerequisite_lesson_id: null,
    hook: {
      question: "Explorez cette nouvelle leçon : Méthode d'autonomie.",
      insight: "Apprenez les principes de base pour maîtriser ce concept grammatical."
    },
    concepts: [],
    quran_example: {
      surah: "Al-Fatiha",
      verse_number: 1,
      arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
      french: "Au nom d'Allah, le Tout Miséricordieux, le Très Miséricordieux",
      word_analysis: []
    },
    exercises: [],
    summary: {
      table: [],
      rule: "Découvrez cette règle dans le cours complet."
    },
    unlocks_lesson_id: null
  }
];
