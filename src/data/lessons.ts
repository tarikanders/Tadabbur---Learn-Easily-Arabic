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
    unlocks_lesson_id: 6
  }
  , {
    "id": 6,
    "level": 1,
    "title": "Les 3 cas grammaticaux",
    "arabic_title": "الإعراب",
    "duration_minutes": 8,
    "prerequisite_lesson_id": 5,
    "hook": {
        "question": "Pourquoi le même mot arabe se termine parfois par ـُ, parfois par ـَ, et parfois par ـِ ? Est-ce une erreur de prononciation ou une règle secrète ?",
        "insight": "C'est une règle secrète ! En arabe coranique, la terminaison d'un mot change selon son rôle dans la phrase — comme un code grammatical qui indique si le mot est le sujet, le complément ou dépend d'un autre mot."
    },
    "concepts": [
        {
            "id": "marfou",
            "arabic_term": "الْمَرْفُوعُ",
            "french_name": "Marfou' — Le cas nominatif",
            "definition": "Le mot est au cas nominatif quand il est le sujet principal de la phrase, ou l'attribut du sujet. Il porte la voyelle haute ـُ (ou ـٌ avec tanwin).",
            "signals": [
                "Terminaison ـُ (damma) : مُحَمَّدُ — sans tanwin",
                "Terminaison ـٌ (dammatân) : كِتَابٌ — avec tanwin (mot indéfini)"
            ],
            "color": "#2E86AB",
            "examples": [
                {
                    "arabic": "اللهُ رَبُّنَا",
                    "french": "Allah est notre Seigneur",
                    "note": "اللهُ est le sujet (marfou') — رَبُّنَا est l'attribut (marfou')"
                },
                {
                    "arabic": "جَاءَ رَجُلٌ",
                    "french": "Un homme est venu",
                    "note": "رَجُلٌ est le sujet (marfou' avec tanwin, car indéfini)"
                }
            ]
        },
        {
            "id": "mansub",
            "arabic_term": "الْمَنْصُوبُ",
            "french_name": "Mansub — Le cas accusatif",
            "definition": "Le mot est au cas accusatif quand il est le complément d'objet direct, ou quand il suit certaines particules comme إِنَّ. Il porte la voyelle basse ـَ (ou ـً avec tanwin).",
            "signals": [
                "Terminaison ـَ (fatha) : رَأَيْتُ اللهَ — sans tanwin",
                "Terminaison ـً (fathatân) : رَأَيْتُ رَجُلًا — avec tanwin (mot indéfini)"
            ],
            "color": "#28A745",
            "examples": [
                {
                    "arabic": "إِنَّ اللهَ غَفُورٌ",
                    "french": "Certes, Allah est Pardonneur",
                    "note": "اللهَ est mansub car il suit إِنَّ qui impose l'accusatif"
                },
                {
                    "arabic": "قَرَأْتُ كِتَابًا",
                    "french": "J'ai lu un livre",
                    "note": "كِتَابًا est le complément d'objet direct (mansub avec tanwin)"
                }
            ]
        },
        {
            "id": "majrur",
            "arabic_term": "الْمَجْرُورُ",
            "french_name": "Majrur — Le cas génitif",
            "definition": "Le mot est au cas génitif quand il suit une préposition (مِنْ، فِي، إِلَى، بِ…) ou quand il est le second terme d'une annexion (إضافة). Il porte la voyelle basse ـِ (ou ـٍ avec tanwin).",
            "signals": [
                "Terminaison ـِ (kasra) : بِسْمِ اللهِ — précédé d'une préposition",
                "Terminaison ـٍ (kasratân) : مِنْ بَيْتٍ — avec tanwin (mot indéfini)"
            ],
            "color": "#17A2B8",
            "examples": [
                {
                    "arabic": "بِسْمِ اللهِ",
                    "french": "Au nom d'Allah",
                    "note": "اللهِ est majrur car il suit la préposition بِ"
                },
                {
                    "arabic": "ذَهَبْتُ إِلَى الْمَسْجِدِ",
                    "french": "Je suis allé à la mosquée",
                    "note": "الْمَسْجِدِ est majrur car il suit la préposition إِلَى"
                }
            ]
        }
    ],
    "quran_example": {
        "surah": "Al-Fatiha",
        "verse_number": 2,
        "arabic": "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
        "french": "Toute louange appartient à Allah, Seigneur des mondes",
        "word_analysis": [
            {
                "word": "الْحَمْدُ",
                "type": "noun",
                "role": "مُبْتَدَأ (sujet)",
                "french": "la louange",
                "note": "Marfou' ـُ — c'est le sujet de la phrase nominale"
            },
            {
                "word": "لِلَّهِ",
                "type": "particle + noun",
                "role": "جَارٌّ وَمَجْرُورٌ (préposition + génitif)",
                "french": "à Allah",
                "note": "اللهِ est majrur ـِ — il suit la préposition لِ"
            },
            {
                "word": "رَبِّ",
                "type": "noun",
                "role": "نَعْتٌ / بَدَلٌ (apposition, majrur)",
                "french": "Seigneur",
                "note": "Majrur ـِ — il suit اللهِ et s'accorde avec son cas génitif"
            },
            {
                "word": "الْعَالَمِينَ",
                "type": "noun",
                "role": "مُضَافٌ إِلَيْهِ (second terme d'annexion)",
                "french": "des mondes",
                "note": "Majrur par l'annexion avec رَبِّ — terminaison ـِينَ (pluriel masculin sain)"
            }
        ]
    },
    "exercises": [
        {
            "id": "ex6-1",
            "type": "classify",
            "instruction": "Identifie le cas grammatical de chaque mot souligné. Observe bien la voyelle finale !",
            "words": [
                {
                    "arabic": "جَاءَ النَّبِيُّ",
                    "correct": "Marfou' (nominatif)",
                    "options": [
                        "Marfou' (nominatif)",
                        "Mansub (accusatif)",
                        "Majrur (génitif)"
                    ]
                },
                {
                    "arabic": "رَأَيْتُ النَّبِيَّ",
                    "correct": "Mansub (accusatif)",
                    "options": [
                        "Marfou' (nominatif)",
                        "Mansub (accusatif)",
                        "Majrur (génitif)"
                    ]
                },
                {
                    "arabic": "سَلَّمْتُ عَلَى النَّبِيِّ",
                    "correct": "Majrur (génitif)",
                    "options": [
                        "Marfou' (nominatif)",
                        "Mansub (accusatif)",
                        "Majrur (génitif)"
                    ]
                },
                {
                    "arabic": "إِنَّ اللهَ عَلِيمٌ",
                    "correct": "Mansub (accusatif)",
                    "options": [
                        "Marfou' (nominatif)",
                        "Mansub (accusatif)",
                        "Majrur (génitif)"
                    ]
                },
                {
                    "arabic": "فِي الْبَيْتِ",
                    "correct": "Majrur (génitif)",
                    "options": [
                        "Marfou' (nominatif)",
                        "Mansub (accusatif)",
                        "Majrur (génitif)"
                    ]
                }
            ]
        },
        {
            "id": "ex6-2",
            "type": "highlight",
            "instruction": "Trouve le(s) mot(s) au cas Marfou' (nominatif) dans ce verset coranique :",
            "arabic": "اللهُ لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ",
            "highlight_words": [
                "اللهُ",
                "إِلَهَ",
                "هُوَ",
                "الْحَيُّ",
                "الْقَيُّومُ"
            ],
            "correct_words": [
                "اللهُ",
                "الْحَيُّ",
                "الْقَيُّومُ"
            ],
            "feedback_correct": "✓ Bravo ! اللهُ est le sujet (marfou'), الْحَيُّ et الْقَيُّومُ sont ses attributs (marfou') — tous portent la damma ـُ.",
            "feedback_wrong": "Indice : cherche les mots qui se terminent par ـُ (damma). Attention, إِلَهَ porte un ـَ (fatha) — c'est mansub car il suit لَا النَّافِيَة."
        }
    ],
    "summary": {
        "table": [
            {
                "type": "الْمَرْفُوعُ — Marfou'",
                "signal": "Terminaison ـُ ou ـٌ (damma) → sujet de la phrase",
                "example": "اللهُ رَبُّنَا"
            },
            {
                "type": "الْمَنْصُوبُ — Mansub",
                "signal": "Terminaison ـَ ou ـً (fatha) → complément, ou après إِنَّ",
                "example": "إِنَّ اللهَ غَفُورٌ"
            },
            {
                "type": "الْمَجْرُورُ — Majrur",
                "signal": "Terminaison ـِ ou ـٍ (kasra) → après une préposition (بِ، فِي، لِ، مِنْ…)",
                "example": "بِسْمِ اللهِ"
            }
        ],
        "rule": "En arabe coranique, la voyelle finale d'un mot n'est jamais aléatoire : ـُ = sujet (marfou'), ـَ = complément (mansub), ـِ = après préposition (majrur) — apprendre à lire ces voyelles, c'est comprendre le sens de chaque verset."
    },
    "unlocks_lesson_id": 7
}
  , {
    "id": 7,
    "level": 1,
    "title": "La phrase nominale avancée",
    "arabic_title": "الجملة الاسمية المتقدمة",
    "duration_minutes": 8,
    "prerequisite_lesson_id": 6,
    "hook": {
        "question": "Comment dire 'Allah est au ciel' en arabe sans utiliser aucun verbe ? Est-ce vraiment possible ?",
        "insight": "En arabe, la phrase nominale (الجُمْلَةُ الاسْمِيَّةُ) n'a pas besoin de verbe 'être'. Un simple groupe prépositionnel comme 'فِي السَّمَاءِ' (au ciel) peut jouer le rôle de prédicat et compléter le sens à lui seul."
    },
    "concepts": [
        {
            "id": "khabar_shibh_jumla",
            "arabic_term": "خَبَرٌ شِبْهُ جُمْلَةٍ",
            "french_name": "Prédicat = groupe prépositionnel",
            "definition": "Quand le prédicat (الخَبَر) d'une phrase nominale est un groupe prépositionnel (حَرْفُ جَرٍّ + اسْم), il indique le lieu, la direction ou la relation. C'est le cas le plus fréquent dans le Coran.",
            "signals": [
                "Repère une préposition (فِي، عَلَى، مِنْ، إِلَى...) juste après le sujet",
                "Absence de verbe entre le sujet et le groupe prépositionnel"
            ],
            "color": "#2563EB",
            "examples": [
                {
                    "arabic": "اللَّهُ فِي السَّمَاءِ",
                    "french": "Allah est au ciel",
                    "note": "'اللَّهُ' = sujet (مُبْتَدَأ), 'فِي السَّمَاءِ' = prédicat prépositionnel (خَبَرٌ شِبْهُ جُمْلَةٍ)"
                },
                {
                    "arabic": "الْكِتَابُ عَلَى الطَّاوِلَةِ",
                    "french": "Le livre est sur la table",
                    "note": "'عَلَى الطَّاوِلَةِ' remplace entièrement le verbe 'être'"
                },
                {
                    "arabic": "الْحَقُّ مِنَ اللَّهِ",
                    "french": "La vérité vient d'Allah",
                    "note": "'مِنَ اللَّهِ' est un groupe prépositionnel qui forme le prédicat complet"
                }
            ]
        },
        {
            "id": "khabar_isham_demonstratif",
            "arabic_term": "الْجُمْلَةُ الاسْمِيَّةُ مَعَ اسْمِ الْإِشَارَةِ",
            "french_name": "Phrase nominale avec démonstratif",
            "definition": "L'arabe utilise les démonstratifs (هَٰذَا، هَٰذِهِ، ذَٰلِكَ، تِلْكَ) comme sujet ou comme prédicat dans la phrase nominale. Attention : هَٰذَا est masculin et هَٰذِهِ est féminin.",
            "signals": [
                "Présence de هَٰذَا (masc.) ou هَٰذِهِ (fém.) au début ou dans la phrase",
                "Le nom qui suit le démonstratif est souvent défini (avec الـ)"
            ],
            "color": "#059669",
            "examples": [
                {
                    "arabic": "هَٰذَا الْكِتَابُ",
                    "french": "Ce livre / C'est le livre",
                    "note": "هَٰذَا = démonstratif masculin + الْكِتَابُ = nom masculin défini"
                },
                {
                    "arabic": "هَٰذِهِ الْجَنَّةُ",
                    "french": "Voici le Paradis",
                    "note": "هَٰذِهِ = démonstratif féminin accordé avec الْجَنَّةُ (féminin)"
                },
                {
                    "arabic": "ذَٰلِكَ الْكِتَابُ لَا رَيْبَ فِيهِ",
                    "french": "C'est le Livre en lequel il n'y a aucun doute",
                    "note": "ذَٰلِكَ = démonstratif d'éloignement (masc.), extrait de Al-Baqara 2:2"
                }
            ]
        }
    ],
    "quran_example": {
        "surah": "Al-Baqara (La Vache)",
        "verse_number": 255,
        "arabic": "اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ",
        "french": "Allah ! Point de divinité à part Lui, le Vivant, Celui qui subsiste par Lui-même",
        "word_analysis": [
            {
                "word": "اللَّهُ",
                "type": "noun",
                "role": "مُبْتَدَأٌ (sujet)",
                "french": "Allah",
                "note": "Sujet de la phrase nominale, au nominatif (مَرْفُوع), fin en -u"
            },
            {
                "word": "لَا إِلَٰهَ إِلَّا هُوَ",
                "type": "noun phrase",
                "role": "خَبَرٌ (prédicat)",
                "french": "point de divinité hormis Lui",
                "note": "Prédicat de la phrase nominale : لَا النافية للجنس + إِلَٰهَ (nég. du genre) + إِلَّا هُوَ (exception)"
            },
            {
                "word": "الْحَيُّ",
                "type": "noun",
                "role": "خَبَرٌ ثَانٍ أو نَعْتٌ (second prédicat ou épithète)",
                "french": "le Vivant",
                "note": "Nom divin, masculin, défini, au nominatif. Renforce la description d'Allah"
            },
            {
                "word": "الْقَيُّومُ",
                "type": "noun",
                "role": "خَبَرٌ أو نَعْتٌ (prédicat ou épithète)",
                "french": "Celui qui subsiste par Lui-même",
                "note": "Forme intensive (فَعُّول) de قَامَ, masculin, défini, nominatif"
            }
        ]
    },
    "exercises": [
        {
            "id": "ex1-1",
            "type": "classify",
            "instruction": "Identifie le type de prédicat (خَبَر) dans chaque phrase. Est-il un groupe prépositionnel (شِبْهُ جُمْلَةٍ) ou un nom simple (مُفْرَد) ?",
            "words": [
                {
                    "arabic": "اللَّهُ أَكْبَرُ",
                    "correct": "nom simple (مُفْرَد)",
                    "options": [
                        "groupe prépositionnel (شِبْهُ جُمْلَةٍ)",
                        "nom simple (مُفْرَد)",
                        "démonstratif"
                    ]
                },
                {
                    "arabic": "الْحَمْدُ لِلَّهِ",
                    "correct": "groupe prépositionnel (شِبْهُ جُمْلَةٍ)",
                    "options": [
                        "groupe prépositionnel (شِبْهُ جُمْلَةٍ)",
                        "nom simple (مُفْرَد)",
                        "démonstratif"
                    ]
                },
                {
                    "arabic": "هَٰذَا صِرَاطٌ مُسْتَقِيمٌ",
                    "correct": "démonstratif",
                    "options": [
                        "groupe prépositionnel (شِبْهُ جُمْلَةٍ)",
                        "nom simple (مُفْرَد)",
                        "démonstratif"
                    ]
                },
                {
                    "arabic": "الْمَلَائِكَةُ عِنْدَ رَبِّهِمْ",
                    "correct": "groupe prépositionnel (شِبْهُ جُمْلَةٍ)",
                    "options": [
                        "groupe prépositionnel (شِبْهُ جُمْلَةٍ)",
                        "nom simple (مُفْرَد)",
                        "démonstratif"
                    ]
                }
            ]
        },
        {
            "id": "ex1-2",
            "type": "highlight",
            "instruction": "Dans ce verset, trouve le prédicat (الخَبَر) de la phrase nominale. Clique sur le mot ou groupe qui joue ce rôle :",
            "arabic": "وَاللَّهُ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",
            "highlight_words": [
                "وَاللَّهُ",
                "عَلَى كُلِّ شَيْءٍ",
                "قَدِيرٌ"
            ],
            "correct_words": [
                "قَدِيرٌ"
            ],
            "feedback_correct": "✓ Excellent ! 'قَدِيرٌ' est bien le prédicat (خَبَر) : c'est un nom simple (مُفْرَد) qui signifie 'Omnipotent'. Le groupe 'عَلَى كُلِّ شَيْءٍ' est un complément circonstanciel qui précise le champ de la puissance divine.",
            "feedback_wrong": "Indice : cherche le mot qui complète le sens après le sujet 'اللَّهُ' et qui décrit une qualité. Ce mot se termine par un tanwîn (-ٌ), signe du prédicat indéfini."
        }
    ],
    "summary": {
        "table": [
            {
                "type": "Prédicat prépositionnel (خَبَرٌ شِبْهُ جُمْلَةٍ)",
                "signal": "Préposition (فِي، عَلَى، مِنْ...) + nom après le sujet",
                "example": "اللَّهُ فِي السَّمَاءِ"
            },
            {
                "type": "Phrase avec démonstratif (اسْمُ إِشَارَةٍ)",
                "signal": "هَٰذَا (masc.) ou هَٰذِهِ (fém.) au début de la phrase",
                "example": "هَٰذِهِ الْجَنَّةُ"
            },
            {
                "type": "Accord en genre du khabar",
                "signal": "Le prédicat suit le genre du sujet : masc. → masc., fém. → fém.",
                "example": "هَٰذَا كِتَابٌ / هَٰذِهِ سُورَةٌ"
            }
        ],
        "rule": "Dans la phrase nominale arabe, le prédicat (الخَبَر) peut être un nom, un groupe prépositionnel ou un démonstratif — mais il doit toujours s'accorder en genre avec le sujet (المُبْتَدَأ)."
    },
    "unlocks_lesson_id": 8
}
  , {
    "id": 8,
    "level": 1,
    "title": "Les prépositions + cas مجرور",
    "arabic_title": "حروف الجر",
    "duration_minutes": 8,
    "prerequisite_lesson_id": 7,
    "hook": {
        "question": "Comment dire en arabe 'je sors DE la maison', 'je vais VERS la mosquée', 'le livre EST DANS le sac' ? Qu'est-ce qui relie ces mots ?",
        "insight": "En arabe coranique, des petits mots appelés 'prépositions' (حُرُوفُ الجَرِّ) font le lien entre les idées — et ils ont un pouvoir grammatical : ils changent la fin du mot qui les suit en ajoutant une kasra (ـِ), le signe du cas مَجْرُور."
    },
    "concepts": [
        {
            "id": "huruf_al_jarr",
            "arabic_term": "حُرُوفُ الجَرِّ",
            "french_name": "Les prépositions",
            "definition": "Ce sont des petits mots invariables qui se placent AVANT un nom pour indiquer une relation (lieu, direction, appartenance...). Ils sont au nombre de 7 essentiels en arabe coranique.",
            "signals": [
                "Un mot court (1 à 3 lettres) placé juste avant un nom",
                "Le nom qui suit prend obligatoirement une kasra ـِ à sa fin (cas مَجْرُور)"
            ],
            "color": "#1A73E8",
            "examples": [
                {
                    "arabic": "مِنَ المَسْجِدِ",
                    "french": "de la mosquée",
                    "note": "مِنْ = de/depuis → المَسْجِدِ prend kasra finale"
                },
                {
                    "arabic": "إِلَى البَيْتِ",
                    "french": "vers la maison",
                    "note": "إِلَى = vers → البَيْتِ prend kasra finale"
                },
                {
                    "arabic": "فِي السَّمَاءِ",
                    "french": "dans le ciel",
                    "note": "فِي = dans → السَّمَاءِ prend kasra finale"
                },
                {
                    "arabic": "عَلَى الصِّرَاطِ",
                    "french": "sur le chemin",
                    "note": "عَلَى = sur → الصِّرَاطِ prend kasra finale"
                },
                {
                    "arabic": "بِاللَّهِ",
                    "french": "par/en Allah",
                    "note": "بِ = par/avec → اللَّهِ prend kasra finale"
                },
                {
                    "arabic": "لِلَّهِ",
                    "french": "pour Allah / à Allah",
                    "note": "لِ = pour/à → اللَّهِ prend kasra finale"
                },
                {
                    "arabic": "عَنِ القَوْمِ",
                    "french": "au sujet du peuple / loin du peuple",
                    "note": "عَنْ = de/au sujet de → القَوْمِ prend kasra finale"
                }
            ]
        },
        {
            "id": "majrour",
            "arabic_term": "المَجْرُور",
            "french_name": "Le nom au cas مجرور (génitif)",
            "definition": "C'est le nom qui suit une préposition. On le reconnaît à la kasra ـِ (ou ـٍ sans article) placée sur sa dernière lettre. C'est le 'signal de soumission' à la préposition.",
            "signals": [
                "Kasra ـِ sur la dernière lettre du nom (avec article défini الـ)",
                "Double kasra ـٍ sur la dernière lettre (sans article, nom indéfini)"
            ],
            "color": "#0F9D58",
            "examples": [
                {
                    "arabic": "مِنْ نُورٍ",
                    "french": "d'une lumière",
                    "note": "نُورٍ = double kasra car pas d'article → indéfini مجرور"
                },
                {
                    "arabic": "فِي الكِتَابِ",
                    "french": "dans le Livre",
                    "note": "الكِتَابِ = kasra sur le ب car défini → مجرور"
                },
                {
                    "arabic": "إِلَى رَبِّكَ",
                    "french": "vers ton Seigneur",
                    "note": "رَبِّكَ = kasra sur le ب → مجرور avec suffixe"
                }
            ]
        }
    ],
    "quran_example": {
        "surah": "Al-Fatiha",
        "verse_number": 2,
        "arabic": "الحَمْدُ لِلَّهِ رَبِّ العَالَمِينَ",
        "french": "Toute louange appartient à Allah, Seigneur des mondes.",
        "word_analysis": [
            {
                "word": "الحَمْدُ",
                "type": "noun",
                "role": "مُبْتَدَأ (sujet)",
                "french": "la louange",
                "note": "Cas مَرْفُوع → damma ـُ car c'est le sujet"
            },
            {
                "word": "لِ",
                "type": "particle",
                "role": "حَرْفُ جَرٍّ (préposition)",
                "french": "à / pour",
                "note": "Préposition لِ soudée au mot suivant → indique l'appartenance"
            },
            {
                "word": "لِلَّهِ",
                "type": "noun",
                "role": "اسْمٌ مَجْرُور (nom au génitif)",
                "french": "Allah",
                "note": "اللَّهِ prend la kasra ـِ car il est مجرور après لِ"
            },
            {
                "word": "رَبِّ",
                "type": "noun",
                "role": "نَعْت / بَدَل (apposition)",
                "french": "Seigneur de",
                "note": "مجرور aussi par accord avec اللَّهِ → kasra sur الباء"
            },
            {
                "word": "العَالَمِينَ",
                "type": "noun",
                "role": "مُضَافٌ إِلَيْهِ (complément de nom)",
                "french": "des mondes",
                "note": "Pluriel masculin sain au cas مجرور → prend ـِينَ"
            }
        ]
    },
    "exercises": [
        {
            "id": "ex8-1",
            "type": "classify",
            "instruction": "Identifie la préposition correcte (حَرْفُ الجَرِّ) dans chaque groupe de mots. Choisis parmi les options proposées.",
            "words": [
                {
                    "arabic": "_____ البَيْتِ (de la maison / depuis la maison)",
                    "correct": "مِنْ",
                    "options": [
                        "مِنْ",
                        "فِي",
                        "عَلَى",
                        "لِ"
                    ]
                },
                {
                    "arabic": "_____ المَسْجِدِ (dans la mosquée)",
                    "correct": "فِي",
                    "options": [
                        "إِلَى",
                        "فِي",
                        "عَنْ",
                        "بِ"
                    ]
                },
                {
                    "arabic": "_____ اللَّهِ (pour Allah / à Allah)",
                    "correct": "لِ",
                    "options": [
                        "مِنْ",
                        "عَلَى",
                        "لِ",
                        "إِلَى"
                    ]
                },
                {
                    "arabic": "_____ الصِّرَاطِ (sur le chemin)",
                    "correct": "عَلَى",
                    "options": [
                        "عَلَى",
                        "عَنْ",
                        "فِي",
                        "بِ"
                    ]
                },
                {
                    "arabic": "_____ رَبِّكَ (vers ton Seigneur)",
                    "correct": "إِلَى",
                    "options": [
                        "مِنْ",
                        "إِلَى",
                        "لِ",
                        "فِي"
                    ]
                },
                {
                    "arabic": "_____ اللَّهِ (au nom d'Allah / par Allah)",
                    "correct": "بِ",
                    "options": [
                        "عَنْ",
                        "عَلَى",
                        "بِ",
                        "مِنْ"
                    ]
                },
                {
                    "arabic": "_____ الغَافِلِينَ (loin des/au sujet des négligents)",
                    "correct": "عَنْ",
                    "options": [
                        "فِي",
                        "لِ",
                        "إِلَى",
                        "عَنْ"
                    ]
                }
            ]
        },
        {
            "id": "ex8-2",
            "type": "highlight",
            "instruction": "Dans ce verset coranique (Al-Baqara 2:255 — Ayat Al-Kursi, extrait), trouve et clique sur TOUTES les prépositions (حُرُوفُ الجَرِّ) :",
            "arabic": "لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الأَرْضِ",
            "highlight_words": [
                "لَهُ",
                "فِي",
                "السَّمَاوَاتِ",
                "فِي",
                "الأَرْضِ"
            ],
            "correct_words": [
                "لَهُ",
                "فِي",
                "فِي"
            ],
            "feedback_correct": "✓ Bravo ! Tu as trouvé les 3 prépositions : لَهُ (لِ = pour/à lui), فِي (dans) les cieux, et فِي (dans) la terre. Remarque que السَّمَاوَاتِ et الأَرْضِ prennent bien la kasra ـِ car ils sont مجرور !",
            "feedback_wrong": "Indice : cherche les petits mots courts (1-2 lettres) qui précèdent un nom. لَهُ contient لِ (préposition) + هُ (pronom). Combien de fois vois-tu فِي dans la phrase ?"
        }
    ],
    "summary": {
        "table": [
            {
                "type": "مِنْ",
                "signal": "de / depuis (origine, point de départ)",
                "example": "مِنَ السَّمَاءِ (depuis le ciel)"
            },
            {
                "type": "إِلَى",
                "signal": "vers / jusqu'à (direction, destination)",
                "example": "إِلَى اللَّهِ (vers Allah)"
            },
            {
                "type": "فِي",
                "signal": "dans / en (lieu, contenu)",
                "example": "فِي الأَرْضِ (dans la terre)"
            },
            {
                "type": "عَلَى",
                "signal": "sur / au-dessus de (surface, dessus)",
                "example": "عَلَى كُلِّ شَيْءٍ (sur toute chose)"
            },
            {
                "type": "بِ",
                "signal": "par / avec / en (moyen, instrument, serment)",
                "example": "بِسْمِ اللَّهِ (au nom d'Allah)"
            },
            {
                "type": "لِ",
                "signal": "pour / à (appartenance, but, destinataire)",
                "example": "لِلَّهِ الأَمْرُ (à Allah appartient l'ordre)"
            },
            {
                "type": "عَنْ",
                "signal": "de / au sujet de / loin de (éloignement, propos)",
                "example": "عَنِ الصَّلَاةِ (à propos de la prière)"
            },
            {
                "type": "المَجْرُور ـِ / ـٍ",
                "signal": "Kasra ـِ (défini) ou double kasra ـٍ (indéfini) sur la dernière lettre",
                "example": "فِي الكِتَابِ / مِنْ نُورٍ"
            }
        ],
        "rule": "Toute préposition (حَرْفُ جَرٍّ) rend le nom qui la suit مَجْرُور, reconnaissable à la kasra ـِ ou ـٍ sur sa dernière lettre — sans exception !"
    },
    "unlocks_lesson_id": 9
}
  , {
    "id": 9,
    "level": 1,
    "title": "Les pronoms personnels détachés",
    "arabic_title": "الضمائر المنفصلة",
    "duration_minutes": 8,
    "prerequisite_lesson_id": 8,
    "hook": {
        "question": "Dans le Coran, comment Allah parle-t-il de Lui-même ou désigne-t-il les croyants ? Pourquoi trouve-t-on parfois des mots comme هُوَ ou نَحْنُ sans qu'il y ait de verbe autour ?",
        "insight": "En arabe coranique, les pronoms personnels détachés servent souvent de sujet dans des phrases sans verbe (phrases nominales). Reconnaître هُوَ, هِيَ, أَنَا ou نَحْنُ, c'est comprendre immédiatement de qui ou de quoi parle le verset."
    },
    "concepts": [
        {
            "id": "pronoms_3e_personne",
            "arabic_term": "ضَمَائِرُ الغَائِبِ",
            "french_name": "Pronoms de la 3e personne (absent)",
            "definition": "Ces pronoms désignent une personne ou une chose dont on parle, sans qu'elle soit présente dans la conversation. هُوَ signifie 'il/lui', هِيَ signifie 'elle', et هُمْ signifie 'ils/eux'.",
            "signals": [
                "Commence par هُ- (hâ' avec damma) pour le masculin singulier et pluriel",
                "هِيَ commence par هِ- (hâ' avec kasra) pour le féminin singulier"
            ],
            "color": "#2A7FBA",
            "examples": [
                {
                    "arabic": "هُوَ اللهُ",
                    "french": "Il est Allah",
                    "note": "هُوَ est sujet, اللهُ est attribut — phrase nominale sans verbe"
                },
                {
                    "arabic": "هِيَ نَارٌ",
                    "french": "C'est un feu / Elle est un feu",
                    "note": "هِيَ renvoie à un nom féminin mentionné avant"
                },
                {
                    "arabic": "هُمُ الْمُفْلِحُونَ",
                    "french": "Ce sont eux les victorieux / les bienheureux",
                    "note": "هُمْ devient هُمُ devant ال — pronom pluriel masculin"
                }
            ]
        },
        {
            "id": "pronoms_1e_2e_personne",
            "arabic_term": "ضَمَائِرُ المُتَكَلِّمِ وَالمُخَاطَبِ",
            "french_name": "Pronoms des 1re et 2e personnes (locuteur et interlocuteur)",
            "definition": "Ces pronoms désignent celui qui parle (1re personne : أَنَا 'je', نَحْنُ 'nous') ou celui à qui l'on parle (2e personne : أَنتَ 'tu' masc., أَنتِ 'tu' fém.). Ils apparaissent fréquemment dans les invocations et les discours divins du Coran.",
            "signals": [
                "أَنَا et نَحْنُ : Allah parle de Lui-même (majesté ou pluriel de majesté)",
                "أَنتَ / أَنتِ : commence par أَنـ — la distinction masc./fém. se voit sur la voyelle finale (fatha pour masc., kasra pour fém.)"
            ],
            "color": "#1E8A5E",
            "examples": [
                {
                    "arabic": "أَنَا رَبُّكَ",
                    "french": "Je suis ton Seigneur",
                    "note": "Discours divin direct — أَنَا est sujet de la phrase nominale"
                },
                {
                    "arabic": "نَحْنُ نَزَّلْنَا الذِّكْرَ",
                    "french": "C'est Nous qui avons fait descendre le Rappel",
                    "note": "نَحْنُ est pluriel de majesté pour Allah — souligne la grandeur de l'acte"
                },
                {
                    "arabic": "أَنتَ الغَفُورُ الرَّحِيمُ",
                    "french": "Tu es le Tout-Pardonnant, le Très-Miséricordieux",
                    "note": "Invocation adressée à Allah — أَنتَ est sujet masculin singulier"
                }
            ]
        }
    ],
    "quran_example": {
        "surah": "Al-Baqara (La Vache)",
        "verse_number": 255,
        "arabic": "اللهُ لَا إِلَهَ إِلَّا هُوَ الحَيُّ القَيُّومُ",
        "french": "Allah — pas de divinité excepté Lui — le Vivant, le Subsistant par Lui-même",
        "word_analysis": [
            {
                "word": "اللهُ",
                "type": "noun",
                "role": "مُبْتَدَأ (sujet)",
                "french": "Allah",
                "note": "Nom propre, sujet principal de la phrase nominale"
            },
            {
                "word": "لَا",
                "type": "particle",
                "role": "نَفْيٌ (négation)",
                "french": "pas / point de",
                "note": "Particule de négation absolue (لَا النافية للجنس)"
            },
            {
                "word": "إِلَهَ",
                "type": "noun",
                "role": "اسْمُ لَا (nom de لَا)",
                "french": "divinité",
                "note": "Mis en fatha car nom de لَا النافية للجنس"
            },
            {
                "word": "إِلَّا",
                "type": "particle",
                "role": "اسْتِثْنَاء (exception)",
                "french": "excepté / sauf",
                "note": "Particule d'exception — restreint la négation"
            },
            {
                "word": "هُوَ",
                "type": "pronoun",
                "role": "ضَمِيرٌ مُنْفَصِلٌ — بَدَلٌ أَوْ خَبَرٌ (attribut/substitut)",
                "french": "Lui / Il",
                "note": "Pronom détaché de 3e personne masculin singulier — renvoie à Allah"
            },
            {
                "word": "الحَيُّ",
                "type": "noun",
                "role": "خَبَرٌ (attribut du sujet)",
                "french": "le Vivant",
                "note": "Nom divin — attribut de اللهُ dans la phrase nominale"
            },
            {
                "word": "القَيُّومُ",
                "type": "noun",
                "role": "خَبَرٌ ثَانٍ (deuxième attribut)",
                "french": "le Subsistant par Lui-même",
                "note": "Nom divin — celui qui subsiste par Lui-même et fait subsister tout"
            }
        ]
    },
    "exercises": [
        {
            "id": "ex9-1",
            "type": "classify",
            "instruction": "Classifie chaque pronom en arabe dans la bonne catégorie : '3e personne' ou '1re / 2e personne'.",
            "words": [
                {
                    "arabic": "هُوَ",
                    "correct": "3e personne",
                    "options": [
                        "3e personne",
                        "1re / 2e personne"
                    ]
                },
                {
                    "arabic": "أَنَا",
                    "correct": "1re / 2e personne",
                    "options": [
                        "3e personne",
                        "1re / 2e personne"
                    ]
                },
                {
                    "arabic": "هُمْ",
                    "correct": "3e personne",
                    "options": [
                        "3e personne",
                        "1re / 2e personne"
                    ]
                },
                {
                    "arabic": "نَحْنُ",
                    "correct": "1re / 2e personne",
                    "options": [
                        "3e personne",
                        "1re / 2e personne"
                    ]
                },
                {
                    "arabic": "هِيَ",
                    "correct": "3e personne",
                    "options": [
                        "3e personne",
                        "1re / 2e personne"
                    ]
                },
                {
                    "arabic": "أَنتَ",
                    "correct": "1re / 2e personne",
                    "options": [
                        "3e personne",
                        "1re / 2e personne"
                    ]
                }
            ]
        },
        {
            "id": "ex9-2",
            "type": "classify",
            "instruction": "À qui ou à quoi renvoie chaque pronom dans ces extraits coraniques ? Choisis la bonne réponse.",
            "words": [
                {
                    "arabic": "إِنَّهُ هُوَ السَّمِيعُ العَلِيمُ (الشورى : ١٢)",
                    "correct": "Allah (masculin singulier)",
                    "options": [
                        "Allah (masculin singulier)",
                        "Les croyants (pluriel)",
                        "La femme (féminin singulier)"
                    ]
                },
                {
                    "arabic": "وَنَحْنُ أَقْرَبُ إِلَيْهِ مِنْ حَبْلِ الوَرِيدِ (ق : ١٦)",
                    "correct": "Allah (pluriel de majesté)",
                    "options": [
                        "Les anges uniquement",
                        "Allah (pluriel de majesté)",
                        "Les hommes"
                    ]
                },
                {
                    "arabic": "أَنتَ وَلِيُّنَا (الأعراف : ١٥٥)",
                    "correct": "Allah (adresse de Moïse à Allah)",
                    "options": [
                        "Allah (adresse de Moïse à Allah)",
                        "Un prophète masculin",
                        "Un croyant anonyme"
                    ]
                },
                {
                    "arabic": "هُمُ المُفْلِحُونَ (البقرة : ٥)",
                    "correct": "Les croyants (pluriel masculin)",
                    "options": [
                        "Les croyants (pluriel masculin)",
                        "Allah",
                        "Les anges"
                    ]
                }
            ]
        },
        {
            "id": "ex9-3",
            "type": "highlight",
            "instruction": "Trouve et identifie les pronoms personnels détachés (الضمائر المنفصلة) dans ce verset :",
            "arabic": "إِنَّ اللهَ هُوَ الرَّزَّاقُ ذُو القُوَّةِ المَتِينُ",
            "highlight_words": [
                "هُوَ",
                "اللهَ",
                "الرَّزَّاقُ",
                "المَتِينُ"
            ],
            "correct_words": [
                "هُوَ"
            ],
            "feedback_correct": "✓ Bravo ! هُوَ est bien le pronom personnel détaché de 3e personne masculin singulier. Il sert ici de pronom de séparation (ضَمِيرُ الفَصْلِ) entre le sujet اللهَ et l'attribut الرَّزَّاقُ, renforçant l'exclusivité : 'c'est Allah, Lui seul, qui est le Grand Pourvoyeur'.",
            "feedback_wrong": "Cherche un mot court qui commence par هُ et se termine par وَ — c'est lui le pronom détaché dans ce verset !"
        }
    ],
    "summary": {
        "table": [
            {
                "type": "هُوَ — Il / Lui",
                "signal": "هُ + وَ — 3e pers. masc. sing.",
                "example": "هُوَ الحَيُّ"
            },
            {
                "type": "هِيَ — Elle",
                "signal": "هِـ + يَ — 3e pers. fém. sing.",
                "example": "هِيَ نَارٌ"
            },
            {
                "type": "هُمْ — Ils / Eux",
                "signal": "هُمْ — 3e pers. masc. plur.",
                "example": "هُمُ المُفْلِحُونَ"
            },
            {
                "type": "أَنَا — Je / Moi",
                "signal": "أَنَا — 1re pers. sing.",
                "example": "أَنَا رَبُّكَ"
            },
            {
                "type": "نَحْنُ — Nous",
                "signal": "نَحْنُ — 1re pers. plur. (ou majesté divine)",
                "example": "نَحْنُ نَزَّلْنَا الذِّكْرَ"
            },
            {
                "type": "أَنتَ / أَنتِ — Tu",
                "signal": "أَنـ + تَ (masc.) ou تِ (fém.) — 2e pers. sing.",
                "example": "أَنتَ الغَفُورُ"
            }
        ],
        "rule": "Un pronom personnel détaché placé entre le sujet et l'attribut dans une phrase nominale (ex. اللهُ هُوَ الحَقُّ) sert à affirmer et à souligner l'exclusivité : 'Allah, c'est Lui la Vérité — et nul autre'."
    },
    "unlocks_lesson_id": 10
}
  , {
    "id": 10,
    "level": 1,
    "title": "Les pronoms suffixes",
    "arabic_title": "الضمائر المتصلة",
    "duration_minutes": 8,
    "prerequisite_lesson_id": 9,
    "hook": {
        "question": "Dans la Fatiha, tu lis إِيَّاكَ نَعْبُدُ — mais sais-tu pourquoi كَ est collé directement au verbe ? Et dans رَبِّهِمْ, à quoi sert ce هِمْ à la fin ?",
        "insight": "En arabe, on n'écrit pas 'son', 'ton', 'notre' comme des mots séparés : on les colle directement au nom ou au verbe sous forme de petites syllabes. Ce sont les pronoms suffixes — la clé pour comprendre 'à qui appartient quoi' et 'qui est visé par l'action'."
    },
    "concepts": [
        {
            "id": "pronom_possession",
            "arabic_term": "ضَمِيرُ المِلْكِيَّةِ",
            "french_name": "Pronom suffixe de possession (attaché au nom)",
            "definition": "Un petit suffixe collé à la fin d'un nom pour indiquer à qui il appartient. Il remplace les mots 'son', 'ta', 'notre', 'leur' en français.",
            "signals": [
                "Il est attaché directement à un NOM (chose, personne, lieu)",
                "Les terminaisons clés : ـهُ (son/sa), ـهَا (son/sa fém.), ـهُمْ (leur), ـكَ (ton masc.), ـكِ (ton fém.), ـي (mon), ـنَا (notre)"
            ],
            "color": "#2E86AB",
            "examples": [
                {
                    "arabic": "كِتَابُهُ",
                    "french": "son livre (à lui)",
                    "note": "كِتَابُ (livre) + هُ (son) → 'son livre'"
                },
                {
                    "arabic": "رَبُّهُمْ",
                    "french": "leur Seigneur",
                    "note": "رَبُّ (seigneur) + هُمْ (leur) → 'leur Seigneur'"
                },
                {
                    "arabic": "رَبُّنَا",
                    "french": "notre Seigneur",
                    "note": "رَبُّ (seigneur) + نَا (notre) → 'notre Seigneur'"
                },
                {
                    "arabic": "كِتَابُكَ",
                    "french": "ton livre (à toi, masc.)",
                    "note": "كِتَابُ (livre) + كَ (ton) → 'ton livre'"
                },
                {
                    "arabic": "أُمِّي",
                    "french": "ma mère",
                    "note": "أُمّ (mère) + ي (mon/ma) → 'ma mère'"
                }
            ]
        },
        {
            "id": "pronom_objet",
            "arabic_term": "ضَمِيرُ المَفْعُولِ",
            "french_name": "Pronom suffixe d'objet (attaché au verbe)",
            "definition": "Le même suffixe, mais collé cette fois à un VERBE pour indiquer qui reçoit l'action : 'il te voit', 'nous T'adorons', 'Il les guide'.",
            "signals": [
                "Il est attaché directement à un VERBE (une action)",
                "Mêmes terminaisons que pour la possession, mais le sens change : ـكَ après un verbe = 'te/toi', pas 'ton'"
            ],
            "color": "#1B998B",
            "examples": [
                {
                    "arabic": "نَعْبُدُكَ",
                    "french": "nous T'adorons",
                    "note": "نَعْبُدُ (nous adorons) + كَ (toi) → 'nous T'adorons' — verbe + pronom objet"
                },
                {
                    "arabic": "يَهْدِيهِمْ",
                    "french": "Il les guide",
                    "note": "يَهْدِي (il guide) + هِمْ (les) → 'Il les guide'"
                },
                {
                    "arabic": "يُحِبُّهُمْ",
                    "french": "Il les aime",
                    "note": "يُحِبُّ (il aime) + هُمْ (les) → 'Il les aime'"
                },
                {
                    "arabic": "نَسْتَعِينُكَ",
                    "french": "nous implorons Ton aide",
                    "note": "نَسْتَعِينُ (nous demandons l'aide) + كَ (Toi) → 'nous T'implorons'"
                }
            ]
        }
    ],
    "quran_example": {
        "surah": "Al-Fatiha",
        "verse_number": 5,
        "arabic": "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ",
        "french": "C'est Toi seul que nous adorons, et c'est Toi seul dont nous implorons l'aide.",
        "word_analysis": [
            {
                "word": "إِيَّاكَ",
                "type": "pronoun",
                "role": "مَفْعُولٌ بِهِ مُقَدَّم",
                "french": "Toi seul / C'est Toi que",
                "note": "إِيَّا est un pronom fort d'objet + كَ (toi) — placé en avant pour insister sur l'exclusivité : 'Toi et personne d'autre'"
            },
            {
                "word": "نَعْبُدُ",
                "type": "verb",
                "role": "فِعْلٌ مُضَارِع",
                "french": "nous adorons",
                "note": "Verbe au présent, 1ère personne du pluriel — le pronom كَ lui est rattaché via إِيَّاكَ"
            },
            {
                "word": "وَ",
                "type": "particle",
                "role": "حَرْفُ عَطْف",
                "french": "et",
                "note": "Conjonction de coordination"
            },
            {
                "word": "إِيَّاكَ",
                "type": "pronoun",
                "role": "مَفْعُولٌ بِهِ مُقَدَّم",
                "french": "Toi seul / C'est Toi que",
                "note": "Répétition pour renforcer l'exclusivité dans la seconde proposition"
            },
            {
                "word": "نَسْتَعِينُ",
                "type": "verb",
                "role": "فِعْلٌ مُضَارِع",
                "french": "nous demandons l'aide / nous implorons",
                "note": "De la racine ع-و-ن (aide, secours) — نَسْتَعِينُ = 'nous cherchons l'aide'"
            }
        ]
    },
    "exercises": [
        {
            "id": "ex10-1",
            "type": "classify",
            "instruction": "Chaque mot contient un pronom suffixe. Identifie s'il est attaché à un NOM (possession) ou à un VERBE (objet) :",
            "words": [
                {
                    "arabic": "رَبُّهُمْ",
                    "correct": "possession (nom)",
                    "options": [
                        "possession (nom)",
                        "objet (verbe)"
                    ]
                },
                {
                    "arabic": "نَعْبُدُكَ",
                    "correct": "objet (verbe)",
                    "options": [
                        "possession (nom)",
                        "objet (verbe)"
                    ]
                },
                {
                    "arabic": "كِتَابُهُ",
                    "correct": "possession (nom)",
                    "options": [
                        "possession (nom)",
                        "objet (verbe)"
                    ]
                },
                {
                    "arabic": "يَهْدِيهِمْ",
                    "correct": "objet (verbe)",
                    "options": [
                        "possession (nom)",
                        "objet (verbe)"
                    ]
                },
                {
                    "arabic": "رَبُّنَا",
                    "correct": "possession (nom)",
                    "options": [
                        "possession (nom)",
                        "objet (verbe)"
                    ]
                },
                {
                    "arabic": "يُحِبُّهُمْ",
                    "correct": "objet (verbe)",
                    "options": [
                        "possession (nom)",
                        "objet (verbe)"
                    ]
                }
            ]
        },
        {
            "id": "ex10-2",
            "type": "highlight",
            "instruction": "Dans ce verset, trouve et surligne le mot qui contient un pronom suffixe de POSSESSION (attaché à un nom) :",
            "arabic": "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ ۝ الرَّحْمَٰنِ الرَّحِيمِ ۝ مَالِكِ يَوْمِ الدِّينِ",
            "highlight_words": [
                "الْحَمْدُ",
                "رَبِّ",
                "الْعَالَمِينَ",
                "مَالِكِ",
                "يَوْمِ",
                "الدِّينِ"
            ],
            "correct_words": [
                "رَبِّ"
            ],
            "feedback_correct": "✓ Excellent ! رَبِّ est la base du nom رَبّ (seigneur) dans une idafa — ici رَبِّ الْعَالَمِينَ signifie 'le Seigneur des mondes'. C'est une construction de possession (idafa) sans suffixe explicit, mais dans d'autres versets on trouve رَبُّهُمْ (leur Seigneur) avec le suffixe هُمْ attaché directement.",
            "feedback_wrong": "Cherche un nom (pas un verbe) qui exprime une relation d'appartenance — quel mot signifie 'le Seigneur de...' ?"
        }
    ],
    "summary": {
        "table": [
            {
                "type": "Pronom suffixe de possession",
                "signal": "Collé à un NOM → indique à qui il appartient",
                "example": "كِتَابُهُ (son livre) / رَبُّنَا (notre Seigneur)"
            },
            {
                "type": "Pronom suffixe d'objet",
                "signal": "Collé à un VERBE → indique qui reçoit l'action",
                "example": "نَعْبُدُكَ (nous T'adorons) / يَهْدِيهِمْ (Il les guide)"
            },
            {
                "type": "Tableau des suffixes",
                "signal": "ـهُ = son (masc.) / ـهَا = son (fém.) / ـهُمْ = leur / ـكَ = ton/te (masc.) / ـكِ = ton/te (fém.) / ـي = mon/me / ـنَا = notre/nous",
                "example": "رَبُّهُ / رَبُّهَا / رَبُّهُمْ / رَبُّكَ / رَبُّكِ / رَبِّي / رَبُّنَا"
            }
        ],
        "rule": "En arabe coranique, les pronoms de possession et d'objet sont toujours COLLÉS au mot qui précède — si c'est collé à un nom, c'est 'son/ton/notre' ; si c'est collé à un verbe, c'est 'le/te/nous' (objet de l'action)."
    },
    "unlocks_lesson_id": 11
}
  , {
    "id": 11,
    "level": 2,
    "title": "L'annexion (Idafa)",
    "arabic_title": "الإضافة",
    "duration_minutes": 8,
    "prerequisite_lesson_id": 10,
    "hook": {
        "question": "Comment dit-on 'le livre d'Allah' en arabe ? Pourquoi ne peut-on pas mettre ال sur les deux noms en même temps ?",
        "insight": "En arabe, quand deux noms sont liés par une relation de possession ou d'appartenance, ils forment une 'annexion' (إِضَافَة) : le premier nom perd ال et le tanwin, et le second se met au cas مَجْرُور — une règle simple qui déverrouille des centaines d'expressions coraniques."
    },
    "concepts": [
        {
            "id": "idafa_simple",
            "arabic_term": "الإِضَافَةُ البَسِيطَة",
            "french_name": "L'annexion simple",
            "definition": "Structure de deux noms consécutifs exprimant une relation d'appartenance ou de spécification : le premier (المُضَاف) perd ال et le tanwin, le second (المُضَاف إِلَيْه) est obligatoirement au cas مَجْرُور.",
            "signals": [
                "Le premier nom n'a ni ال ni tanwin (ni ـً ـٍ ـٌ)",
                "Le second nom porte une kasra (ـِ) ou une double kasra (ـٍ) à sa fin"
            ],
            "color": "#E07B39",
            "examples": [
                {
                    "arabic": "رَسُولُ اللَّهِ",
                    "french": "le Messager d'Allah",
                    "note": "رَسُولُ = 1er nom (مُضَاف) sans ال ni tanwin — اللَّهِ = 2ème nom (مُضَاف إِلَيْه) au مَجْرُور"
                },
                {
                    "arabic": "كِتَابُ اللَّهِ",
                    "french": "le Livre d'Allah",
                    "note": "كِتَابُ a perdu son tanwin, اللَّهِ est au مَجْرُور (kasra finale)"
                },
                {
                    "arabic": "بَيْتُ الرَّجُلِ",
                    "french": "la maison de l'homme",
                    "note": "الرَّجُلِ est au مَجْرُور grâce à la kasra sur le ل"
                }
            ]
        },
        {
            "id": "idafa_double",
            "arabic_term": "الإِضَافَةُ المُزْدَوَجَة",
            "french_name": "La double annexion (annexion en chaîne)",
            "definition": "Trois noms ou plus liés successivement en annexion : chaque nom (sauf le dernier) est un مُضَاف, et chaque nom suivant est un مُضَاف إِلَيْه au مَجْرُور, formant une chaîne de possession.",
            "signals": [
                "Trois noms ou plus à la suite, sans ال ni tanwin sur les deux premiers",
                "Le dernier mot de la chaîne porte la kasra (ou reste défini avec ال + kasra)"
            ],
            "color": "#7B4FA6",
            "examples": [
                {
                    "arabic": "رَسُولُ رَبِّ العَالَمِينَ",
                    "french": "le Messager du Seigneur des mondes",
                    "note": "Chaîne : رَسُولُ → مُضَاف / رَبِّ → مُضَاف إِلَيْه ET مُضَاف / العَالَمِينَ → مُضَاف إِلَيْه final"
                },
                {
                    "arabic": "نُورُ السَّمَاوَاتِ وَالأَرْضِ",
                    "french": "la lumière des cieux et de la terre",
                    "note": "نُورُ est annexé à السَّمَاوَاتِ, qui est au مَجْرُور (kasra sur ت)"
                }
            ]
        }
    ],
    "quran_example": {
        "surah": "Al-Fath",
        "verse_number": 29,
        "arabic": "مُحَمَّدٌ رَسُولُ اللَّهِ",
        "french": "Muhammad est le Messager d'Allah",
        "word_analysis": [
            {
                "word": "مُحَمَّدٌ",
                "type": "noun",
                "role": "مُبْتَدَأ (sujet)",
                "french": "Muhammad",
                "note": "Nom propre au مَرْفُوع, avec tanwin — il n'est PAS dans l'idafa"
            },
            {
                "word": "رَسُولُ",
                "type": "noun",
                "role": "مُضَاف (1er terme de l'annexion)",
                "french": "Messager",
                "note": "Au مَرْفُوع (ضَمَّة) car خَبَر المُبْتَدَأ, mais sans tanwin à cause de l'idafa"
            },
            {
                "word": "اللَّهِ",
                "type": "noun",
                "role": "مُضَاف إِلَيْه (2ème terme de l'annexion)",
                "french": "d'Allah",
                "note": "Au مَجْرُور obligatoirement dans toute annexion — kasra sur le هِ final"
            }
        ]
    },
    "exercises": [
        {
            "id": "ex11-1",
            "type": "classify",
            "instruction": "Pour chaque expression, identifie le rôle du mot souligné dans l'annexion (إِضَافَة) : est-il مُضَاف (1er terme) ou مُضَاف إِلَيْه (2ème terme) ?",
            "words": [
                {
                    "arabic": "كِتَابُ ← (dans كِتَابُ اللَّهِ)",
                    "correct": "مُضَاف",
                    "options": [
                        "مُضَاف",
                        "مُضَاف إِلَيْه",
                        "لَيْسَ إِضَافَة"
                    ]
                },
                {
                    "arabic": "اللَّهِ ← (dans رَسُولُ اللَّهِ)",
                    "correct": "مُضَاف إِلَيْه",
                    "options": [
                        "مُضَاف",
                        "مُضَاف إِلَيْه",
                        "لَيْسَ إِضَافَة"
                    ]
                },
                {
                    "arabic": "بَابُ ← (dans بَابُ البَيْتِ)",
                    "correct": "مُضَاف",
                    "options": [
                        "مُضَاف",
                        "مُضَاف إِلَيْه",
                        "لَيْسَ إِضَافَة"
                    ]
                },
                {
                    "arabic": "السَّمَاوَاتِ ← (dans نُورُ السَّمَاوَاتِ)",
                    "correct": "مُضَاف إِلَيْه",
                    "options": [
                        "مُضَاف",
                        "مُضَاف إِلَيْه",
                        "لَيْسَ إِضَافَة"
                    ]
                },
                {
                    "arabic": "الرَّحِيمُ ← (dans بِسْمِ اللَّهِ الرَّحِيمُ — attention !)",
                    "correct": "لَيْسَ إِضَافَة",
                    "options": [
                        "مُضَاف",
                        "مُضَاف إِلَيْه",
                        "لَيْسَ إِضَافَة"
                    ]
                }
            ]
        },
        {
            "id": "ex11-2",
            "type": "highlight",
            "instruction": "Dans ce verset, trouve et identifie les deux mots qui forment l'annexion (الإِضَافَة). Clique sur le مُضَاف إِلَيْه (le 2ème terme, celui au مَجْرُور) :",
            "arabic": "وَاللَّهُ وَلِيُّ الْمُؤْمِنِينَ",
            "highlight_words": [
                "وَاللَّهُ",
                "وَلِيُّ",
                "الْمُؤْمِنِينَ"
            ],
            "correct_words": [
                "الْمُؤْمِنِينَ"
            ],
            "feedback_correct": "✓ Excellent ! الْمُؤْمِنِينَ est bien le مُضَاف إِلَيْه : il est au مَجْرُور (يَاء à la place de وَاو pour le pluriel masculin sain, signe du جَرّ). وَلِيُّ est le مُضَاف qui a perdu son tanwin.",
            "feedback_wrong": "Indice : le مُضَاف إِلَيْه est toujours le SECOND nom de l'annexion, et il porte le signe du مَجْرُور. Lequel des deux noms (وَلِيُّ ou الْمُؤْمِنِينَ) vient EN SECOND ?"
        }
    ],
    "summary": {
        "table": [
            {
                "type": "مُضَاف (1er terme)",
                "signal": "Pas de ال, pas de tanwin — vient EN PREMIER",
                "example": "رَسُولُ (dans رَسُولُ اللَّهِ)"
            },
            {
                "type": "مُضَاف إِلَيْه (2ème terme)",
                "signal": "Toujours au مَجْرُور (kasra ou ya) — vient EN SECOND",
                "example": "اللَّهِ (dans رَسُولُ اللَّهِ)"
            },
            {
                "type": "إِضَافَة مُزْدَوَجَة (double annexion)",
                "signal": "Chaîne de 3 noms+, seul le dernier porte la kasra finale",
                "example": "رَسُولُ رَبِّ العَالَمِينَ"
            }
        ],
        "rule": "Dans toute annexion, le premier nom (مُضَاف) perd ال et le tanwin, et le second (مُضَاف إِلَيْه) prend obligatoirement le cas مَجْرُور — sans exception."
    },
    "unlocks_lesson_id": 12
}
  , {
    "id": 12,
    "level": 2,
    "title": "L'adjectif (Na't)",
    "arabic_title": "النعت",
    "duration_minutes": 8,
    "prerequisite_lesson_id": 11,
    "hook": {
        "question": "Comment dire 'le généreux homme' en arabe coranique ? Est-ce que l'adjectif se place avant ou après le nom ?",
        "insight": "En arabe, l'adjectif (النعت) suit toujours le nom qu'il qualifie et doit s'accorder avec lui en genre, nombre, cas et définition — quatre accords là où le français n'en exige qu'un !"
    },
    "concepts": [
        {
            "id": "naat-defini",
            "arabic_term": "النَّعْتُ المَعْرِفَةُ",
            "french_name": "L'adjectif épithète défini",
            "definition": "Lorsque le nom qualifié (المَنْعُوت) est défini par l'article ال, l'adjectif doit lui aussi porter l'article ال. Les deux s'accordent en genre (masculin/féminin), en nombre (singulier/pluriel) et en cas (nominatif/accusatif/génitif).",
            "signals": [
                "ال sur le nom → ال sur l'adjectif",
                "Même terminaison casuelle (ـُ / ـَ / ـِ)",
                "Adjectif placé après le nom"
            ],
            "color": "#4A90D9",
            "examples": [
                {
                    "arabic": "الرَّجُلُ الكَرِيمُ",
                    "french": "l'homme généreux",
                    "note": "Nom masc. sg. nominatif défini → adjectif masc. sg. nominatif défini"
                },
                {
                    "arabic": "المَرْأَةُ الكَرِيمَةُ",
                    "french": "la femme généreuse",
                    "note": "Passage au féminin : ة ajouté au nom ET à l'adjectif"
                },
                {
                    "arabic": "فِي المَسْجِدِ الكَبِيرِ",
                    "french": "dans la grande mosquée",
                    "note": "Cas génitif (ـِ) après la préposition فِي, accordé sur les deux mots"
                }
            ]
        },
        {
            "id": "naat-indefini",
            "arabic_term": "النَّعْتُ النَّكِرَةُ",
            "french_name": "L'adjectif épithète indéfini",
            "definition": "Lorsque le nom qualifié est indéfini (sans ال, avec tanwīn), l'adjectif reste lui aussi indéfini et porte le tanwīn correspondant au cas. L'accord de genre et de cas est identique au cas défini.",
            "signals": [
                "Tanwīn sur le nom → tanwīn sur l'adjectif",
                "Pas d'article ال sur aucun des deux",
                "Même cas que le nom (ـٌ / ـً / ـٍ)"
            ],
            "color": "#E67E22",
            "examples": [
                {
                    "arabic": "كِتَابٌ كَبِيرٌ",
                    "french": "un grand livre",
                    "note": "Nom masc. sg. nominatif indéfini → adjectif masc. sg. nominatif indéfini"
                },
                {
                    "arabic": "قَرَأْتُ كِتَاباً كَبِيراً",
                    "french": "j'ai lu un grand livre",
                    "note": "Passage à l'accusatif (ـً) : tanwīn fath sur le nom ET l'adjectif"
                },
                {
                    "arabic": "بِنْتٌ صَالِحَةٌ",
                    "french": "une fille pieuse",
                    "note": "Féminin indéfini : ة + tanwīn damm sur les deux mots"
                }
            ]
        }
    ],
    "quran_example": {
        "surah": "Al-Fatiha (1)",
        "verse_number": 6,
        "arabic": "اهْدِنَا الصِّرَاطَ المُسْتَقِيمَ",
        "french": "Guide-nous vers le droit chemin",
        "word_analysis": [
            {
                "word": "اهْدِنَا",
                "type": "verbe",
                "role": "verbe à l'impératif + pronom",
                "french": "guide-nous",
                "note": "Verbe هَدَى à l'impératif avec le pronom affixe نَا (nous)"
            },
            {
                "word": "الصِّرَاطَ",
                "type": "nom (مَنْعُوت)",
                "role": "complément d'objet direct, accusatif défini",
                "french": "le chemin",
                "note": "Défini par ال, accusatif → porte le tanwīn fath sans tanwīn (ـَ)"
            },
            {
                "word": "المُسْتَقِيمَ",
                "type": "adjectif (نَعْت)",
                "role": "épithète de الصِّرَاطَ, accusatif défini",
                "french": "droit / rectiligne",
                "note": "Accord parfait : défini (ال), masculin singulier, accusatif (ـَ) — les quatre accords respectés"
            }
        ]
    },
    "exercises": [
        {
            "id": "ex12-1",
            "type": "classify",
            "instruction": "Classifiez chaque groupe nominal : l'adjectif est-il 'défini' (avec ال) ou 'indéfini' (avec tanwīn) ?",
            "words": [
                {
                    "arabic": "الوَلَدُ الصَّغِيرُ",
                    "correct": "défini",
                    "options": [
                        "défini",
                        "indéfini",
                        "incorrect"
                    ]
                },
                {
                    "arabic": "بَيْتٌ جَمِيلٌ",
                    "correct": "indéfini",
                    "options": [
                        "défini",
                        "indéfini",
                        "incorrect"
                    ]
                },
                {
                    "arabic": "كِتَابٌ الكَبِيرُ",
                    "correct": "incorrect",
                    "options": [
                        "défini",
                        "indéfini",
                        "incorrect"
                    ]
                },
                {
                    "arabic": "المَدِينَةُ الكَبِيرَةُ",
                    "correct": "défini",
                    "options": [
                        "défini",
                        "indéfini",
                        "incorrect"
                    ]
                }
            ]
        },
        {
            "id": "ex12-2",
            "type": "highlight",
            "instruction": "Dans ce verset, identifiez et surlignez les deux mots qui forment un groupe nom + adjectif (نعت).",
            "arabic": "وَهُوَ العَلِيُّ العَظِيمُ",
            "highlight_words": [
                "العَلِيُّ",
                "العَظِيمُ"
            ],
            "correct_words": [
                "العَلِيُّ",
                "العَظِيمُ"
            ],
            "feedback_correct": "Excellent ! العَلِيُّ (le Très-Haut) et العَظِيمُ (le Très-Grand) sont deux adjectifs attributs/épithètes de Dieu, tous deux définis, masculins, nominatifs — accord parfait.",
            "feedback_wrong": "Réessayez. Cherchez les deux mots portant ال et une terminaison ـُ (nominatif défini) qui qualifient le sujet هُوَ."
        }
    ],
    "summary": {
        "table": [
            {
                "type": "Adjectif défini",
                "signal": "ال + même cas (ـُ/ـَ/ـِ)",
                "example": "الرَّجُلُ الكَرِيمُ"
            },
            {
                "type": "Adjectif indéfini",
                "signal": "tanwīn + même cas (ـٌ/ـً/ـٍ)",
                "example": "كِتَابٌ كَبِيرٌ"
            },
            {
                "type": "Accord féminin",
                "signal": "ة ajouté au nom ET à l'adjectif",
                "example": "بِنْتٌ صَالِحَةٌ"
            }
        ],
        "rule": "En arabe coranique, le النعت (adjectif épithète) suit toujours son nom et doit lui être identique sur quatre points : le genre (مذكر/مؤنث), le nombre (مفرد/جمع), le cas (مرفوع/منصوب/مجرور) et la définition (معرفة/نكرة). Un seul désaccord rend la phrase incorrecte."
    },
    "unlocks_lesson_id": 13
}
  , {
    "id": 13,
    "level": 2,
    "title": "La negation absolue",
    "arabic_title": "لا النافية للجنس",
    "duration_minutes": 8,
    "prerequisite_lesson_id": 12,
    "hook": {
        "question": "Comment dit-on en arabe 'Il n'y a absolument aucun doute' ?",
        "insight": "L'arabe possède une négation spéciale, لا النافية للجنس, qui nie une catégorie entière d'un seul coup. C'est elle qui se cache au cœur de la Shahada : لا إِلَهَ إِلَّا اللهُ."
    },
    "concepts": [
        {
            "id": "laa-nafiya-lil-jins",
            "arabic_term": "لا النافية للجنس",
            "french_name": "La négation absolue (lā)",
            "definition": "Particule de négation qui nie totalement et sans exception le genre (la catégorie entière) de son nom. Elle fonctionne comme un outil grammatical similaire à إنَّ : elle entre sur une phrase nominale, annule le sens positif et impose des marques casuelles spécifiques.",
            "signals": [
                "Précédée d'aucun article",
                "Le nom qui la suit est indéfini (sans ال)",
                "Souvent suivi de إِلَّا (sauf) pour une exception",
                "Traduit par : 'il n'y a absolument aucun(e)...'"
            ],
            "color": "#C0392B",
            "examples": [
                {
                    "arabic": "لا رَيْبَ فِيهِ",
                    "french": "Il n'y a aucun doute à son sujet",
                    "note": "Al-Baqara 2:2 — رَيْبَ est le nom de لا, au cas accusatif sans tanwīn"
                },
                {
                    "arabic": "لا إِلَهَ إِلَّا اللهُ",
                    "french": "Il n'y a de divinité sinon Allah",
                    "note": "La Shahada — إِلَهَ est le nom de لا, mansūb sans tanwīn"
                },
                {
                    "arabic": "لا طَالِبَ مُهْمِلٌ",
                    "french": "Il n'y a absolument aucun étudiant négligent",
                    "note": "Exemple pédagogique — طَالِبَ mansūb, مُهْمِلٌ est le khabar marfū'"
                }
            ]
        },
        {
            "id": "ism-laa-mansub",
            "arabic_term": "اسم لا المنصوب",
            "french_name": "Le nom de lā (mansūb sans tanwīn)",
            "definition": "Le nom qui suit directement لا النافية للجنس prend la marque de l'accusatif (فتحة) mais SANS tanwīn. C'est sa marque distinctive : fatha simple sur le dernier radical, jamais fathatayn.",
            "signals": [
                "Position : immédiatement après لا",
                "Marque : fatha simple (ـَ) sans tanwīn",
                "Nom indéfini (pas de ال)",
                "Appelé : اسم لا (nom de lā)"
            ],
            "color": "#8E44AD",
            "examples": [
                {
                    "arabic": "لا إِلَهَ",
                    "french": "Aucune divinité (absolument)",
                    "note": "إِلَهَ : fatha sans tanwīn → c'est l'اسم لا"
                },
                {
                    "arabic": "لا رَجُلَ فِي الْبَيْتِ",
                    "french": "Il n'y a absolument aucun homme dans la maison",
                    "note": "رَجُلَ : fatha simple, pas رَجُلٌ ni رَجُلًا"
                },
                {
                    "arabic": "لا مُشْكِلَةَ",
                    "french": "Il n'y a absolument aucun problème",
                    "note": "مُشْكِلَةَ : nom féminin, fatha sans tanwīn sur le tā' marbūta"
                }
            ]
        }
    ],
    "quran_example": {
        "surah": "Al-Baqara (La Vache)",
        "verse_number": 2,
        "arabic": "ذَٰلِكَ الْكِتَابُ لَا رَيْبَ ۛ فِيهِ",
        "french": "C'est le Livre, il n'y a aucun doute en lui.",
        "word_analysis": [
            {
                "word": "ذَٰلِكَ",
                "type": "Pronom démonstratif",
                "role": "Mubtada' (sujet)",
                "french": "C'est / Cela",
                "note": "Pronom démonstratif pour le lointain"
            },
            {
                "word": "الْكِتَابُ",
                "type": "Nom (اسم)",
                "role": "Khabar (attribut) — marfū'",
                "french": "le Livre",
                "note": "Damma sur le bā' : cas sujet"
            },
            {
                "word": "لَا",
                "type": "Particule (لا النافية للجنس)",
                "role": "Outil de négation absolue",
                "french": "il n'y a aucun",
                "note": "Nie toute la catégorie 'doute' sans exception"
            },
            {
                "word": "رَيْبَ",
                "type": "Nom (اسم لا)",
                "role": "Nom de لا — mansūb sans tanwīn",
                "french": "doute",
                "note": "Fatha simple (pas tanwīn) : marque distinctive de l'اسم لا"
            },
            {
                "word": "فِيهِ",
                "type": "Préposition + pronom",
                "role": "Khabar de لا (attribut)",
                "french": "en lui / à son sujet",
                "note": "فِي (dans/en) + هِ (lui) : complète le sens de la négation"
            }
        ]
    },
    "exercises": [
        {
            "id": "ex13-1",
            "type": "classify",
            "instruction": "Identifiez le rôle grammatical de chaque mot souligné dans ces phrases avec لا.",
            "words": [
                {
                    "arabic": "لا وَقْتَ لِلتَّأْخِيرِ",
                    "correct": "اسم لا (mansūb sans tanwīn)",
                    "options": [
                        "اسم لا (mansūb sans tanwīn)",
                        "Khabar (marfū')",
                        "Particule de négation"
                    ]
                },
                {
                    "arabic": "لا إِلَهَ إِلَّا اللهُ — اللهُ",
                    "correct": "Khabar (marfū')",
                    "options": [
                        "اسم لا (mansūb sans tanwīn)",
                        "Khabar (marfū')",
                        "Mubtada'"
                    ]
                },
                {
                    "arabic": "لا رَيْبَ فِيهِ — رَيْبَ",
                    "correct": "اسم لا (mansūb sans tanwīn)",
                    "options": [
                        "Mubtada' (marfū')",
                        "اسم لا (mansūb sans tanwīn)",
                        "Maf'ūl bihi"
                    ]
                }
            ]
        },
        {
            "id": "ex13-2",
            "type": "highlight",
            "instruction": "Dans la Shahada ci-dessous, cliquez sur le mot qui est l'اسم لا (le nom de lā avec fatha sans tanwīn).",
            "arabic": "لا إِلَهَ إِلَّا اللهُ مُحَمَّدٌ رَسُولُ اللهِ",
            "highlight_words": [
                "لا",
                "إِلَهَ",
                "إِلَّا",
                "اللهُ",
                "مُحَمَّدٌ",
                "رَسُولُ",
                "اللهِ"
            ],
            "correct_words": [
                "إِلَهَ"
            ],
            "feedback_correct": "Excellent ! إِلَهَ porte une fatha simple sans tanwīn : c'est bien l'اسم لا, niant toute divinité sauf Allah.",
            "feedback_wrong": "Pas tout à fait. L'اسم لا est le nom indéfini qui suit directement لا avec une fatha simple (sans tanwīn). Cherchez ce mot juste après لا."
        }
    ],
    "summary": {
        "table": [
            {
                "type": "لا النافية للجنس",
                "signal": "Nie une catégorie entière, suivie d'un nom indéfini",
                "example": "لا رَيْبَ (aucun doute du tout)"
            },
            {
                "type": "اسم لا",
                "signal": "Fatha simple SANS tanwīn, juste après لا",
                "example": "إِلَهَ dans لا إِلَهَ إِلَّا اللهُ"
            },
            {
                "type": "خبر لا",
                "signal": "Complète le sens, souvent un jarr-majrūr ou marfū'",
                "example": "فِيهِ dans لا رَيْبَ فِيهِ"
            }
        ],
        "rule": "لا النافية للجنس + اسم (fatha sans tanwīn) + خبر. Elle nie absolument toute existence d'une chose. Dans la Shahada, إِلَهَ est l'اسم لا et اللهُ (après إِلَّا) est le khabar implicite : 'Il n'y a de divinité [digne d'adoration] sinon Allah.'"
    },
    "unlocks_lesson_id": 14
}
  , {
    "id": 14,
    "level": 2,
    "title": "inna et ses soeurs",
    "arabic_title": "إنّ وأخواتها",
    "duration_minutes": 8,
    "prerequisite_lesson_id": 13,
    "hook": {
        "question": "Pourquoi dit-on إِنَّ اللَّهَ عَلِيمٌ et non إِنَّ اللَّهُ عَلِيمٌ ?",
        "insight": "En arabe coranique, certaines particules 'agissent' sur la phrase nominale : elles mettent le 1er nom au cas Mansub (accusatif) et laissent le 2e au cas Marfou' (nominatif). Ces particules s'appellent إنَّ وأخواتها — 'inna et ses sœurs'."
    },
    "concepts": [
        {
            "id": "inna-anna",
            "arabic_term": "إنَّ / أنَّ",
            "french_name": "Inna et Anna — affirmation et assertion",
            "definition": "إنَّ (inna) et أنَّ (anna) sont deux particules d'emphase et d'affirmation. Elles entrent sur la phrase nominale, mettent le sujet (اسم إنَّ) au Mansub et laissent le prédicat (خبر إنَّ) au Marfou'. إنَّ s'emploie en début de phrase indépendante ; أنَّ introduit une proposition subordonnée.",
            "signals": [
                "إنَّ en début de phrase ou après قال",
                "أنَّ après les verbes de perception, annonce ou certitude",
                "Le nom qui suit passe à la Fatha / Kasra / Tanwin Nasb"
            ],
            "color": "#2E86AB",
            "examples": [
                {
                    "arabic": "إِنَّ اللَّهَ غَفُورٌ رَّحِيمٌ",
                    "french": "Certes Allah est Pardonneur, Miséricordieux.",
                    "note": "اللَّهَ → Mansub (اسم إنَّ) | غَفُورٌ → Marfou' (خبر إنَّ)"
                },
                {
                    "arabic": "وَأنَّ اللَّهَ لَا يَهْدِي الْقَوْمَ الظَّالِمِينَ",
                    "french": "Et qu'Allah ne guide pas le peuple injuste.",
                    "note": "أنَّ introduit une subordonnée ; اللَّهَ est Mansub"
                },
                {
                    "arabic": "إِنَّكَ لَمِنَ الْمُرْسَلِينَ",
                    "french": "Tu es assurément parmi les envoyés.",
                    "note": "الكاف ضمير متصل → اسم إنَّ في محل نصب"
                }
            ]
        },
        {
            "id": "laakinna-layta-laalla",
            "arabic_term": "لَكِنَّ / لَيْتَ / لَعَلَّ",
            "french_name": "Laakinna, Layta, La-alla — restriction, souhait, espoir",
            "definition": "Ces trois sœurs de إنَّ suivent la même règle grammaticale (Mansub + Marfou') mais expriment des nuances différentes : لَكِنَّ (lākinna) exprime la restriction/correction ('mais, cependant'), لَيْتَ (layta) exprime le souhait irréalisable ('si seulement'), لَعَلَّ (la-alla) exprime l'espoir ou l'éventualité ('peut-être, afin que').",
            "signals": [
                "لَكِنَّ après une proposition négative pour corriger",
                "لَيْتَ pour un vœu souvent impossible",
                "لَعَلَّ pour l'espoir ou le but — fréquent dans le Coran avec لَعَلَّكُمْ"
            ],
            "color": "#E84855",
            "examples": [
                {
                    "arabic": "لَكِنَّ اللَّهَ يَشْهَدُ بِمَا أَنزَلَ إِلَيْكَ",
                    "french": "Mais Allah témoigne de ce qu'Il t'a révélé.",
                    "note": "اللَّهَ → Mansub (اسم لَكِنَّ) | يَشْهَدُ جملة فعلية → خبر"
                },
                {
                    "arabic": "يَا لَيْتَنِي كُنتُ تُرَابًا",
                    "french": "Hélas ! Si seulement j'avais été poussière !",
                    "note": "ياء المتكلم اسم لَيْتَ في محل نصب | كُنتُ تُرَابًا خبر"
                },
                {
                    "arabic": "لَعَلَّكُمْ تَتَّقُونَ",
                    "french": "Afin que vous soyez pieux / peut-être serez-vous pieux.",
                    "note": "كُمْ اسم لَعَلَّ منصوب | تَتَّقُونَ خبر مرفوع"
                }
            ]
        }
    ],
    "quran_example": {
        "surah": "Al-Baqara",
        "verse_number": 183,
        "arabic": "يَا أَيُّهَا الَّذِينَ آمَنُوا كُتِبَ عَلَيْكُمُ الصِّيَامُ كَمَا كُتِبَ عَلَى الَّذِينَ مِن قَبْلِكُمْ لَعَلَّكُمْ تَتَّقُونَ",
        "french": "Ô vous qui croyez ! Le jeûne vous a été prescrit comme il l'a été à ceux d'avant vous, afin que vous soyez pieux.",
        "word_analysis": [
            {
                "word": "لَعَلَّ",
                "type": "حرف ناسخ (sœur de إنَّ)",
                "role": "Particule d'espoir/but — régit la phrase nominale",
                "french": "afin que / peut-être",
                "note": "Met le nom qui suit au Mansub"
            },
            {
                "word": "كُمْ",
                "type": "ضمير متصل",
                "role": "اسم لَعَلَّ — Mansub (en position)",
                "french": "vous",
                "note": "Le pronom suffixe كُمْ est l'اسم de لَعَلَّ, en محل نصب"
            },
            {
                "word": "تَتَّقُونَ",
                "type": "فعل مضارع مرفوع",
                "role": "خبر لَعَلَّ — Marfou'",
                "french": "vous soyez pieux",
                "note": "Le خبر reste au Marfou' ; ici c'est une phrase verbale jouant le rôle de prédicat"
            }
        ]
    },
    "exercises": [
        {
            "id": "ex14-1",
            "type": "classify",
            "instruction": "Identifiez la sœur de إنَّ utilisée dans chaque phrase et indiquez sa nuance principale.",
            "words": [
                {
                    "arabic": "لَيْتَ الشَّبَابَ يَعُودُ",
                    "correct": "لَيْتَ — souhait irréalisable",
                    "options": [
                        "لَيْتَ — souhait irréalisable",
                        "لَعَلَّ — espoir réalisable",
                        "لَكِنَّ — restriction/correction"
                    ]
                },
                {
                    "arabic": "لَعَلَّ اللَّهَ يَرْحَمُنَا",
                    "correct": "لَعَلَّ — espoir réalisable",
                    "options": [
                        "إنَّ — affirmation forte",
                        "لَعَلَّ — espoir réalisable",
                        "لَيْتَ — souhait irréalisable"
                    ]
                },
                {
                    "arabic": "إِنَّ الصَّلَاةَ كَانَتْ عَلَى الْمُؤْمِنِينَ كِتَابًا مَّوْقُوتًا",
                    "correct": "إنَّ — affirmation forte",
                    "options": [
                        "إنَّ — affirmation forte",
                        "أنَّ — subordonnée assertive",
                        "لَكِنَّ — restriction/correction"
                    ]
                }
            ]
        },
        {
            "id": "ex14-2",
            "type": "highlight",
            "instruction": "Dans la phrase coranique suivante, sélectionnez le mot qui est اسم إنَّ (Mansub) :",
            "arabic": "إِنَّ اللَّهَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",
            "highlight_words": [
                "إِنَّ",
                "اللَّهَ",
                "عَلَى",
                "كُلِّ",
                "شَيْءٍ",
                "قَدِيرٌ"
            ],
            "correct_words": [
                "اللَّهَ"
            ],
            "feedback_correct": "Excellent ! اللَّهَ est bien l'اسم إنَّ, au Mansub (Fatha visible sur le ه). قَدِيرٌ est le خبر au Marfou' (Damma + Tanwin).",
            "feedback_wrong": "Pas tout à fait. Cherchez le mot directement après إنَّ qui porte la marque du Nasb (Fatha/Kasra/Tanwin Nasb). إنَّ est la particule elle-même, et قَدِيرٌ est le خبر au Marfou'."
        }
    ],
    "summary": {
        "table": [
            {
                "type": "إنَّ",
                "signal": "Affirmation en début de phrase indépendante",
                "example": "إِنَّ اللَّهَ غَفُورٌ"
            },
            {
                "type": "أنَّ",
                "signal": "Assertion en proposition subordonnée",
                "example": "عَلِمْتُ أنَّ الحَقَّ نُورٌ"
            },
            {
                "type": "كَأنَّ",
                "signal": "Comparaison / ressemblance",
                "example": "كَأنَّهُ كَوْكَبٌ دُرِّيٌّ"
            },
            {
                "type": "لَكِنَّ",
                "signal": "Restriction / correction après négation",
                "example": "لَكِنَّ اللَّهَ يَشْهَدُ"
            },
            {
                "type": "لَيْتَ",
                "signal": "Souhait (souvent irréalisable)",
                "example": "يَا لَيْتَنِي كُنتُ تُرَابًا"
            },
            {
                "type": "لَعَلَّ",
                "signal": "Espoir / éventualité / but",
                "example": "لَعَلَّكُمْ تَتَّقُونَ"
            }
        ],
        "rule": "Toutes les sœurs de إنَّ (الحروف الناسخة) entrent sur la phrase nominale (الجملة الاسمية) : elles mettent le 1er élément — اسمها — au cas Mansub (نصب), et laissent le 2e élément — خبرها — au cas Marfou' (رفع). Mémo : إنَّ تَنصِبُ الاسمَ وتَرفَعُ الخَبَر."
    },
    "unlocks_lesson_id": 15
}
  , {
    "id": 15,
    "level": 2,
    "title": "Le verbe passe",
    "arabic_title": "الفعل الماضي",
    "duration_minutes": 8,
    "prerequisite_lesson_id": 14,
    "hook": {
        "question": "Comment le Coran raconte-t-il les événements passés comme la création du monde ou la foi des prophètes ?",
        "insight": "Le Coran utilise massivement le verbe passé (الفعل الماضي) pour narrer les actions accomplies par Allah et les prophètes. Maîtriser cette forme, c'est ouvrir la porte aux récits coraniques."
    },
    "concepts": [
        {
            "id": "racine-triliteree",
            "arabic_term": "الجذر الثلاثي",
            "french_name": "La racine trilitère",
            "definition": "Presque tous les verbes arabes sont construits sur une racine de 3 consonnes fondamentales. Ces 3 lettres portent un sens de base que la conjugaison vient moduler. La forme de base (3ème personne masculin singulier au passé) EST la racine vocalisée : فَعَلَ.",
            "signals": [
                "3 lettres consonantiques de base",
                "Forme de dictionnaire = هُوَ au passé",
                "Reconnaître la racine permet de comprendre des dizaines de mots dérivés"
            ],
            "color": "#4A90D9",
            "examples": [
                {
                    "arabic": "خَلَقَ",
                    "french": "Il a créé",
                    "note": "Racine خ-ل-ق → tout ce qui touche à la création"
                },
                {
                    "arabic": "قَالَ",
                    "french": "Il a dit",
                    "note": "Racine ق-و-ل → parole, discours (la lettre و se transforme)"
                },
                {
                    "arabic": "آمَنَ",
                    "french": "Il a cru / Il a fait confiance",
                    "note": "Racine أ-م-ن → foi, sécurité, confiance"
                }
            ]
        },
        {
            "id": "conjugaison-passe",
            "arabic_term": "تَصْرِيفُ الفِعْلِ الْمَاضِي",
            "french_name": "Conjugaison du verbe passé",
            "definition": "Au passé, on ajoute des suffixes (à la fin du verbe) selon le pronom. La voyelle finale de la racine change selon le suffixe. Aucun préfixe : c'est ce qui distingue le passé du présent en arabe.",
            "signals": [
                "Suffixes ajoutés à la fin",
                "Pas de préfixe (contrairement au présent)",
                "هُوَ = forme nue, هِيَ = +ت، هُمْ = +وا، أَنْتَ = +تَ، أَنَا = +تُ، نَحْنُ = +نَا"
            ],
            "color": "#E8A838",
            "examples": [
                {
                    "arabic": "خَلَقَ / خَلَقَتْ / خَلَقُوا / خَلَقْتَ / خَلَقْتُ / خَلَقْنَا",
                    "french": "Il créa / Elle créa / Ils créèrent / Tu créas / Je créai / Nous créâmes",
                    "note": "Verbe خَلَقَ conjugué sur les 6 pronoms principaux"
                },
                {
                    "arabic": "قَالَ / قَالُوا / قُلْتُ",
                    "french": "Il dit / Ils dirent / Je dis",
                    "note": "Verbe creux (حرف علة au milieu) : la racine se contracte avec certains suffixes"
                },
                {
                    "arabic": "آمَنَ / آمَنُوا / آمَنَّا",
                    "french": "Il crut / Ils crurent / Nous crûmes",
                    "note": "Très fréquent dans le Coran : وَآمَنُوا = 'et ils crurent'"
                }
            ]
        }
    ],
    "quran_example": {
        "surah": "Al-Baqara (البقرة)",
        "verse_number": 285,
        "arabic": "آمَنَ الرَّسُولُ بِمَا أُنزِلَ إِلَيْهِ مِن رَّبِّهِ وَالْمُؤْمِنُونَ",
        "french": "Le Messager a cru en ce qui lui a été révélé de la part de son Seigneur, ainsi que les croyants.",
        "word_analysis": [
            {
                "word": "آمَنَ",
                "type": "فعل ماضٍ",
                "role": "Verbe principal au passé",
                "french": "il a cru",
                "note": "هُوَ sous-entendu → forme de base, racine أ-م-ن"
            },
            {
                "word": "الرَّسُولُ",
                "type": "اسم (فاعل)",
                "role": "Sujet du verbe",
                "french": "le Messager",
                "note": "Sujet nominatif مرفوع, placé après le verbe selon l'ordre VSO arabe"
            },
            {
                "word": "وَالْمُؤْمِنُونَ",
                "type": "اسم معطوف",
                "role": "Second sujet (coordonné)",
                "french": "et les croyants",
                "note": "Dérivé de la même racine أ-م-ن → preuve de la richesse de la racine trilitère"
            }
        ]
    },
    "exercises": [
        {
            "id": "ex15-1",
            "type": "classify",
            "instruction": "Identifie le pronom correspondant à chaque forme verbale passée. Classe chaque verbe selon son sujet.",
            "words": [
                {
                    "arabic": "خَلَقُوا",
                    "correct": "هُمْ",
                    "options": [
                        "هُوَ",
                        "هُمْ",
                        "أَنَا"
                    ]
                },
                {
                    "arabic": "قُلْتُ",
                    "correct": "أَنَا",
                    "options": [
                        "أَنَا",
                        "أَنْتَ",
                        "نَحْنُ"
                    ]
                },
                {
                    "arabic": "آمَنَتْ",
                    "correct": "هِيَ",
                    "options": [
                        "هُوَ",
                        "هِيَ",
                        "هُمْ"
                    ]
                },
                {
                    "arabic": "خَلَقْنَا",
                    "correct": "نَحْنُ",
                    "options": [
                        "أَنَا",
                        "أَنْتَ",
                        "نَحْنُ"
                    ]
                }
            ]
        },
        {
            "id": "ex15-2",
            "type": "highlight",
            "instruction": "Dans ce verset, clique sur le(s) verbe(s) au passé (الفعل الماضي).",
            "arabic": "وَقَالَ اللَّهُ خَلَقْنَا الْإِنسَانَ وَآمَنَ الْمُؤْمِنُونَ",
            "highlight_words": [
                "وَقَالَ",
                "خَلَقْنَا",
                "وَآمَنَ"
            ],
            "correct_words": [
                "وَقَالَ",
                "خَلَقْنَا",
                "وَآمَنَ"
            ],
            "feedback_correct": "Excellent ! Tu as identifié les 3 verbes au passé : قَالَ (il dit), خَلَقْنَا (nous créâmes), آمَنَ (il/ils crurent). Remarque : ils ont tous des suffixes caractéristiques et aucun préfixe.",
            "feedback_wrong": "Regarde les mots qui ont des suffixes (وا، نَا، تَ…) ou qui sont sous leur forme courte sans préfixe. اللَّهُ et الْمُؤْمِنُونَ sont des noms (أسماء), pas des verbes."
        }
    ],
    "summary": {
        "table": [
            {
                "type": "هُوَ (il)",
                "signal": "Forme nue : فَعَلَ",
                "example": "خَلَقَ / قَالَ / آمَنَ"
            },
            {
                "type": "هِيَ (elle)",
                "signal": "Suffixe ـَتْ",
                "example": "خَلَقَتْ / قَالَتْ / آمَنَتْ"
            },
            {
                "type": "هُمْ (ils)",
                "signal": "Suffixe ـُوا",
                "example": "خَلَقُوا / قَالُوا / آمَنُوا"
            },
            {
                "type": "أَنْتَ (tu)",
                "signal": "Suffixe ـْتَ",
                "example": "خَلَقْتَ / قُلْتَ / آمَنْتَ"
            },
            {
                "type": "أَنَا (je)",
                "signal": "Suffixe ـْتُ",
                "example": "خَلَقْتُ / قُلْتُ / آمَنْتُ"
            },
            {
                "type": "نَحْنُ (nous)",
                "signal": "Suffixe ـْنَا",
                "example": "خَلَقْنَا / قُلْنَا / آمَنَّا"
            }
        ],
        "rule": "Le verbe passé (الفعل الماضي) se reconnaît à ses SUFFIXES et à l'ABSENCE de préfixe. Il est toujours construit sur une racine trilitère (3 consonnes). La forme هُوَ est la forme de base du dictionnaire. Identifier la racine permet de comprendre le sens de tous les mots dérivés dans le Coran."
    },
    "unlocks_lesson_id": 16
}
  , {
    "id": 16,
    "level": 2,
    "title": "Le verbe présent/futur (Mudari)",
    "arabic_title": "الفعل المضارع",
    "duration_minutes": 8,
    "prerequisite_lesson_id": 15,
    "hook": {
        "question": "Dans la Fatiha, tu lis إِيَّاكَ نَعْبُدُ — mais comment sais-tu que ce verbe parle du présent ET du futur à la fois ?",
        "insight": "En arabe coranique, le verbe مُضَارِع (Mudari) couvre les deux : il exprime ce qu'on fait maintenant et ce qu'on fera. Sa forme se reconnaît immédiatement grâce à un préfixe (أَ / تَ / يَ / نَ) collé au début du verbe."
    },
    "concepts": [
        {
            "id": "prefixes_mudari",
            "arabic_term": "حُرُوفُ الْمُضَارَعَة",
            "french_name": "Les préfixes du Mudari",
            "definition": "Quatre lettres (أَ / تَ / يَ / نَ) ajoutées au début de la racine verbale pour former le verbe au présent-futur. Chaque préfixe indique la personne grammaticale.",
            "signals": [
                "Le mot commence par أَ / تَ / يَ / نَ suivi de la racine",
                "Le verbe n'a pas le ta' de féminisation ni les suffixes du passé"
            ],
            "color": "#E07B39",
            "examples": [
                {
                    "arabic": "يَعْلَمُ",
                    "french": "il sait / il saura",
                    "note": "يَ → 3e personne masculin singulier"
                },
                {
                    "arabic": "تَعْبُدُ",
                    "french": "tu adores / tu adoreras",
                    "note": "تَ → 2e personne masculin singulier"
                },
                {
                    "arabic": "نَسْتَعِينُ",
                    "french": "nous demandons de l'aide",
                    "note": "نَ → 1re personne pluriel"
                },
                {
                    "arabic": "أَعْلَمُ",
                    "french": "je sais",
                    "note": "أَ → 1re personne singulier"
                }
            ]
        },
        {
            "id": "marfou_mudari",
            "arabic_term": "الْمُضَارِعُ الْمَرْفُوعُ",
            "french_name": "Le Mudari à l'état Marfou' (nominatif)",
            "definition": "Lorsque le verbe Mudari n'est précédé d'aucune particule de modification (nasb ou jazm), il reste à son état de base : le Marfou', reconnaissable à la damma (ـُ) sur sa dernière lettre.",
            "signals": [
                "La dernière lettre du verbe porte une damma (ـُ)",
                "Pas de لَنْ / لَمْ / لِ / أَنْ avant le verbe"
            ],
            "color": "#7B4FA6",
            "examples": [
                {
                    "arabic": "يَعْلَمُ",
                    "french": "il sait",
                    "note": "damma sur مَ → Marfou'"
                },
                {
                    "arabic": "نَعْبُدُ",
                    "french": "nous adorons",
                    "note": "damma sur دُ → Marfou'"
                },
                {
                    "arabic": "يَغْفِرُ",
                    "french": "il pardonne",
                    "note": "damma sur رُ → Marfou'"
                }
            ]
        },
        {
            "id": "present_vs_futur",
            "arabic_term": "الْحَالُ وَالاسْتِقْبَالُ",
            "french_name": "Présent vs Futur avec سَ / سَوْفَ",
            "definition": "Le Mudari seul peut exprimer le présent ou le futur selon le contexte. Pour marquer explicitement le futur, on ajoute le préfixe سَ (futur proche) ou la particule سَوْفَ (futur plus lointain/emphatique) devant le verbe.",
            "signals": [
                "سَ collé au début du verbe → futur proche (ex : سَيَعْلَمُ)",
                "سَوْفَ séparé avant le verbe → futur emphatique/lointain (ex : سَوْفَ تَعْلَمُونَ)"
            ],
            "color": "#C0392B",
            "examples": [
                {
                    "arabic": "يَعْلَمُ",
                    "french": "il sait (présent)",
                    "note": "Mudari seul → présent selon contexte"
                },
                {
                    "arabic": "سَيَعْلَمُ",
                    "french": "il saura (futur proche)",
                    "note": "سَ + Mudari → futur proche"
                },
                {
                    "arabic": "سَوْفَ يَعْلَمُونَ",
                    "french": "ils sauront certainement",
                    "note": "سَوْفَ → futur emphatique, Coran 102:4"
                }
            ]
        }
    ],
    "quran_example": {
        "surah": "Al-Fatiha",
        "verse_number": 5,
        "arabic": "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ",
        "french": "C'est Toi seul que nous adorons, et c'est Toi seul dont nous implorons le secours.",
        "word_analysis": [
            {
                "word": "إِيَّاكَ",
                "type": "particle",
                "role": "ضَمِيرُ نَصْبٍ مُنْفَصِل",
                "french": "Toi seul / Toi exclusivement",
                "note": "Pronom de mise en relief placé en tête → insistance sur l'exclusivité"
            },
            {
                "word": "نَعْبُدُ",
                "type": "verb",
                "role": "فِعْلٌ مُضَارِعٌ مَرْفُوعٌ",
                "french": "nous adorons",
                "note": "Préfixe نَ (1re pers. pluriel) + racine عَبَدَ + damma finale → Mudari Marfou'"
            },
            {
                "word": "وَ",
                "type": "particle",
                "role": "حَرْفُ عَطْف",
                "french": "et",
                "note": "Conjonction de coordination"
            },
            {
                "word": "إِيَّاكَ",
                "type": "particle",
                "role": "ضَمِيرُ نَصْبٍ مُنْفَصِل",
                "french": "Toi seul",
                "note": "Répétition pour souligner l'exclusivité du secours demandé à Allah"
            },
            {
                "word": "نَسْتَعِينُ",
                "type": "verb",
                "role": "فِعْلٌ مُضَارِعٌ مَرْفُوعٌ",
                "french": "nous demandons secours",
                "note": "Préfixe نَ + racine عَوَنَ sur le schème اسْتِفْعَال → demande intensive + damma finale → Marfou'"
            }
        ]
    },
    "exercises": [
        {
            "id": "ex16-1",
            "type": "classify",
            "instruction": "Identifie le préfixe du Mudari dans chaque verbe et indique la personne qu'il représente :",
            "words": [
                {
                    "arabic": "يَعْلَمُ",
                    "correct": "3e personne masculin (يَ)",
                    "options": [
                        "1re personne singulier (أَ)",
                        "2e personne (تَ)",
                        "3e personne masculin (يَ)",
                        "1re personne pluriel (نَ)"
                    ]
                },
                {
                    "arabic": "نَسْتَعِينُ",
                    "correct": "1re personne pluriel (نَ)",
                    "options": [
                        "3e personne masculin (يَ)",
                        "1re personne pluriel (نَ)",
                        "2e personne (تَ)"
                    ]
                },
                {
                    "arabic": "تَعْبُدُ",
                    "correct": "2e personne (تَ)",
                    "options": [
                        "1re personne singulier (أَ)",
                        "2e personne (تَ)",
                        "3e personne masculin (يَ)"
                    ]
                },
                {
                    "arabic": "أَعْلَمُ",
                    "correct": "1re personne singulier (أَ)",
                    "options": [
                        "1re personne singulier (أَ)",
                        "1re personne pluriel (نَ)",
                        "3e personne masculin (يَ)"
                    ]
                },
                {
                    "arabic": "سَيَغْفِرُ",
                    "correct": "Futur proche — 3e personne masculin",
                    "options": [
                        "Présent — 1re personne pluriel",
                        "Futur proche — 3e personne masculin",
                        "Futur emphatique — 2e personne",
                        "Passé — 3e personne"
                    ]
                }
            ]
        },
        {
            "id": "ex16-2",
            "type": "highlight",
            "instruction": "Trouve les deux verbes Mudari Marfou' (reconnaissables à leur damma finale ـُ) dans ce verset coranique :",
            "arabic": "اللَّهُ يَعْلَمُ مَا تَفْعَلُونَ",
            "highlight_words": [
                "يَعْلَمُ",
                "تَفْعَلُونَ",
                "اللَّهُ",
                "مَا"
            ],
            "correct_words": [
                "يَعْلَمُ",
                "تَفْعَلُونَ"
            ],
            "feedback_correct": "✓ Excellent ! يَعْلَمُ (préfixe يَ, damma sur مُ) et تَفْعَلُونَ (préfixe تَ, pluriel masculin) sont bien deux Mudari Marfou'. Sens : 'Allah sait ce que vous faites.'",
            "feedback_wrong": "Indice : cherche les mots qui commencent par يَ ou تَ et dont la dernière syllabe porte une damma (ـُ). اللَّهُ est un nom, pas un verbe !"
        }
    ],
    "summary": {
        "table": [
            {
                "type": "Préfixe du Mudari",
                "signal": "أَ / تَ / يَ / نَ au début du verbe",
                "example": "نَعْبُدُ، يَعْلَمُ"
            },
            {
                "type": "Mudari Marfou'",
                "signal": "Damma (ـُ) sur la dernière lettre, sans particule avant",
                "example": "نَسْتَعِينُ، تَعْبُدُ"
            },
            {
                "type": "Futur avec سَ / سَوْفَ",
                "signal": "سَ collé au verbe ou سَوْفَ devant lui",
                "example": "سَيَعْلَمُ، سَوْفَ تَعْلَمُونَ"
            }
        ],
        "rule": "Un verbe qui commence par أَ / تَ / يَ / نَ et se termine par une damma (ـُ) est un Mudari Marfou' : il exprime le présent ou le futur selon le contexte, et devient explicitement futur si précédé de سَ ou سَوْفَ."
    },
    "unlocks_lesson_id": 17
}
  , {
    "id": 17,
    "level": 2,
    "title": "Le verbe impératif (Amr)",
    "arabic_title": "فعل الأمر",
    "duration_minutes": 8,
    "prerequisite_lesson_id": 16,
    "hook": {
        "question": "Pourquoi dans le Coran, Allah dit-Il قُلْ (dis !) et non يَقُولُ (il dit) quand Il s'adresse directement au Prophète ?",
        "insight": "Parce que قُلْ est un impératif (فِعْلُ الأَمْر), une forme verbale qui donne un ordre direct. Dès que tu repères cette structure, tu sais qu'Allah commande — et comprendre comment elle se forme t'ouvre la porte de centaines de versets coraniques."
    },
    "concepts": [
        {
            "id": "formation_amr",
            "arabic_term": "فِعْلُ الأَمْرِ",
            "french_name": "Formation de l'impératif",
            "definition": "L'impératif se forme à partir du présent-subjonctif (مُضَارِع مَجْزُوم) en supprimant le préfixe de la 2ème personne (تَـ), puis en ajoutant une هَمْزَةُ الوَصْل (ا) au début si le mot commence par un sukūn.",
            "signals": [
                "Le préfixe تَـ du مُضَارِع a disparu : تَقْرَأُ → اقْرَأْ",
                "Le verbe commence souvent par اِ (hamzat al-wasl) ou est très court : قُلْ، خُذْ",
                "Le dernier radical porte un sukūn (سُكُون) ou est coupé court"
            ],
            "color": "#D4720A",
            "examples": [
                {
                    "arabic": "تَقْرَأُ → اقْرَأْ",
                    "french": "tu lis → Lis !",
                    "note": "Suppression de تَـ, ajout de هَمْزَةُ الوَصْل car le verbe commençait par sukūn"
                },
                {
                    "arabic": "تَدْعُو → اُدْعُ",
                    "french": "tu invoques → Invoque !",
                    "note": "La wāw finale (واو) disparaît au jussif ; hamzat al-wasl ajoutée"
                },
                {
                    "arabic": "تَقُولُ → قُلْ",
                    "french": "tu dis → Dis !",
                    "note": "Forme très courte : pas besoin de hamzat al-wasl car la voyelle de قُ suffit"
                }
            ]
        },
        {
            "id": "hamzat_al_wasl",
            "arabic_term": "هَمْزَةُ الوَصْلِ",
            "french_name": "La Hamza de liaison (hamzat al-wasl)",
            "definition": "Lettre ا ajoutée au début de l'impératif quand le premier radical se retrouve sans voyelle (sukūn). Elle permet de prononcer le mot sans commencer par un sukūn, mais elle disparaît à la liaison dans la récitation.",
            "signals": [
                "Écrite ٱ (alif sans hamza haute) ou اِ / اُ selon la voyelle du radical suivant",
                "Elle se prononce uniquement en début d'élocution, jamais en milieu de phrase récitée",
                "Présente dans : اقْرَأْ، اسْجُدْ، اُدْعُ — absente dans قُلْ، خُذْ (car pas de sukūn initial)"
            ],
            "color": "#7B2D8B",
            "examples": [
                {
                    "arabic": "ٱقْرَأْ بِاسْمِ رَبِّكَ",
                    "french": "Lis au nom de ton Seigneur",
                    "note": "ٱقْرَأْ : hamzat al-wasl prononcée car début de verset ; disparaîtrait en liaison"
                },
                {
                    "arabic": "ٱسْجُدْ وَاقْتَرِبْ",
                    "french": "Prosterne-toi et rapproche-toi",
                    "note": "ٱسْجُدْ : hamzat al-wasl avec kasra (iِ) car le 2ème radical porte un sukūn suivi d'une damma"
                },
                {
                    "arabic": "وَاُدْعُوهُ خَوْفًا وَطَمَعًا",
                    "french": "Et invoquez-Le avec crainte et espoir",
                    "note": "اُدْعُوا : hamzat al-wasl avec damma car le radical dāl porte un sukūn suivi d'une damma"
                }
            ]
        }
    ],
    "quran_example": {
        "surah": "Al-ʿAlaq (العَلَق)",
        "verse_number": 1,
        "arabic": "ٱقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ",
        "french": "Lis au nom de ton Seigneur qui a créé",
        "word_analysis": [
            {
                "word": "ٱقْرَأْ",
                "type": "verb",
                "role": "فِعْلُ أَمْرٍ",
                "french": "Lis ! / Récite !",
                "note": "Impératif de قَرَأَ (lire/réciter) ; formé depuis تَقْرَأُ → suppression de تَـ → اقْرَأْ ; hamzat al-wasl ajoutée car 1er radical porte sukūn"
            },
            {
                "word": "بِاسْمِ",
                "type": "particle + noun",
                "role": "جَارٌّ وَمَجْرُور",
                "french": "au nom de",
                "note": "بِ (préposition) + اسْم (nom) ; le ا de اسْم est aussi une hamzat al-wasl qui fusionne avec بِ à la liaison"
            },
            {
                "word": "رَبِّكَ",
                "type": "noun",
                "role": "مُضَافٌ إِلَيْهِ",
                "french": "de ton Seigneur",
                "note": "رَبّ (Seigneur) + كَ (pronom suffixe 2ème pers. masc. sing.) ; en annexion (إِضَافَة)"
            },
            {
                "word": "الَّذِي",
                "type": "particle",
                "role": "اسْمٌ مَوْصُول",
                "french": "qui / celui qui",
                "note": "Pronom relatif masculin singulier, introduit la relative"
            },
            {
                "word": "خَلَقَ",
                "type": "verb",
                "role": "فِعْلٌ مَاضٍ",
                "french": "a créé",
                "note": "Verbe au passé (مَاضِي), 3ème pers. masc. sing. ; contraste avec l'impératif ٱقْرَأْ qui ouvre le verset"
            }
        ]
    },
    "exercises": [
        {
            "id": "ex17-1",
            "type": "classify",
            "instruction": "Ces formes verbales sont-elles un impératif (فِعْلُ أَمْر) ou un présent-indicatif (مُضَارِع) ? Classe chaque forme.",
            "words": [
                {
                    "arabic": "اسْجُدْ",
                    "correct": "impératif",
                    "options": [
                        "impératif",
                        "présent-indicatif",
                        "passé"
                    ]
                },
                {
                    "arabic": "يَسْجُدُ",
                    "correct": "présent-indicatif",
                    "options": [
                        "impératif",
                        "présent-indicatif",
                        "passé"
                    ]
                },
                {
                    "arabic": "قُلْ",
                    "correct": "impératif",
                    "options": [
                        "impératif",
                        "présent-indicatif",
                        "passé"
                    ]
                },
                {
                    "arabic": "تَقُولُ",
                    "correct": "présent-indicatif",
                    "options": [
                        "impératif",
                        "présent-indicatif",
                        "passé"
                    ]
                },
                {
                    "arabic": "آمِنُوا",
                    "correct": "impératif",
                    "options": [
                        "impératif",
                        "présent-indicatif",
                        "passé"
                    ]
                },
                {
                    "arabic": "يُؤْمِنُونَ",
                    "correct": "présent-indicatif",
                    "options": [
                        "impératif",
                        "présent-indicatif",
                        "passé"
                    ]
                }
            ]
        },
        {
            "id": "ex17-2",
            "type": "highlight",
            "instruction": "Trouve et identifie les deux impératifs (فِعْلُ أَمْر) cachés dans ce verset coranique :",
            "arabic": "ٱسْجُدْ وَاقْتَرِبْ",
            "highlight_words": [
                "ٱسْجُدْ",
                "وَاقْتَرِبْ",
                "وَ"
            ],
            "correct_words": [
                "ٱسْجُدْ",
                "وَاقْتَرِبْ"
            ],
            "feedback_correct": "✓ Excellent ! ٱسْجُدْ (prosterne-toi) et اقْتَرِبْ (rapproche-toi) sont deux impératifs formés avec hamzat al-wasl. Ils correspondent à سَجَدَ et قَرُبَ respectivement. Ce verset (Al-ʿAlaq, 96:19) est un rappel puissant : l'obéissance passe par l'acte physique de la prosternation.",
            "feedback_wrong": "Indice : cherche les formes qui commencent par اُ ou اِ et dont le dernier radical porte un sukūn — ce sont elles qui donnent les ordres !"
        }
    ],
    "summary": {
        "table": [
            {
                "type": "Impératif (فِعْلُ الأَمْر)",
                "signal": "Préfixe تَـ supprimé + hamzat al-wasl si nécessaire + sukūn final",
                "example": "اقْرَأْ، اسْجُدْ، قُلْ"
            },
            {
                "type": "Hamzat al-wasl (هَمْزَةُ الوَصْل)",
                "signal": "ا au début de l'impératif (ٱ), disparaît à la liaison en récitation",
                "example": "ٱقْرَأْ — mais dans la phrase : وَاقْرَأْ"
            },
            {
                "type": "Impératif pluriel",
                "signal": "Suffixe وا ajouté à la base de l'impératif pour s'adresser à plusieurs",
                "example": "آمِنُوا، اُدْعُوا، اسْجُدُوا"
            }
        ],
        "rule": "Pour former l'impératif : prends le مُضَارِع مَجْزُوم, supprime le préfixe تَـ, et ajoute une هَمْزَةُ وَصْل si le premier radical se retrouve sans voyelle — قُلْ, اقْرَأْ, اسْجُدْ sont tes modèles coraniques."
    },
    "unlocks_lesson_id": 18
}
  , {
    "id": 18,
    "level": 2,
    "title": "La phrase verbale",
    "arabic_title": "الجملة الفعلية",
    "duration_minutes": 8,
    "prerequisite_lesson_id": 17,
    "hook": {
        "question": "En français, on dit 'Les anges descendent' — mais en arabe coranique, est-ce que le verbe change selon que le sujet est singulier ou pluriel ?",
        "insight": "Non ! En arabe, quand le verbe précède son sujet, il reste toujours au singulier, même si le sujet est pluriel. C'est l'une des règles les plus élégantes de la phrase verbale arabe."
    },
    "concepts": [
        {
            "id": "verbe_fil",
            "arabic_term": "الْفِعْلُ",
            "french_name": "Le Verbe (Al-Fi'l)",
            "definition": "Le verbe est le mot qui exprime une action ou un état. Dans la phrase verbale, il vient EN PREMIER et s'accorde en genre avec le sujet, mais reste au singulier même si le sujet est pluriel.",
            "signals": [
                "Il est en tête de phrase, avant le sujet",
                "Au passé, il se termine souvent par une consonne ou un petit suffixe (ـَ, ـَتْ pour le féminin)"
            ],
            "color": "#E07B39",
            "examples": [
                {
                    "arabic": "خَلَقَ",
                    "french": "Il a créé",
                    "note": "Verbe au passé, 3e personne masculin singulier — même s'il précède un sujet pluriel"
                },
                {
                    "arabic": "نَزَلَ",
                    "french": "Il est descendu",
                    "note": "Reste au singulier même si le sujet est 'les anges' (جمع)"
                },
                {
                    "arabic": "قَالَتْ",
                    "french": "Elle a dit",
                    "note": "Le ـتْ indique que le sujet est féminin, mais toujours singulier en forme"
                }
            ]
        },
        {
            "id": "fail_marfou",
            "arabic_term": "الْفَاعِلُ الْمَرْفُوعُ",
            "french_name": "Le Sujet au Marfou' (Al-Fā'il)",
            "definition": "Le Fā'il est le sujet de la phrase verbale — celui qui accomplit l'action. Il suit toujours le verbe et est toujours au cas Marfou' (nominatif), marqué par une Damma (ـُ) ou son équivalent.",
            "signals": [
                "Il vient juste après le verbe",
                "Porte une Damma ( ـُ ) ou Tanwine Damma ( ـٌ ) — signe du Marfou'"
            ],
            "color": "#7E57C2",
            "examples": [
                {
                    "arabic": "خَلَقَ اللَّهُ",
                    "french": "Allah a créé",
                    "note": "اللَّهُ est le Fā'il → Marfou' avec Damma visible sur le ه"
                },
                {
                    "arabic": "جَاءَ رَجُلٌ",
                    "french": "Un homme est venu",
                    "note": "رَجُلٌ est Fā'il → Tanwine Damma (Marfou' indéfini)"
                },
                {
                    "arabic": "نَزَلَ الْمَلَائِكَةُ",
                    "french": "Les anges sont descendus",
                    "note": "Sujet pluriel الْمَلَائِكَةُ mais le verbe نَزَلَ reste au singulier !"
                }
            ]
        },
        {
            "id": "mafoul_mansoub",
            "arabic_term": "الْمَفْعُولُ بِهِ الْمَنْصُوبُ",
            "french_name": "Le Complément d'Objet Direct au Mansub (Al-Maf'ūl bihi)",
            "definition": "Le Maf'ūl bihi est le complément d'objet direct — ce sur quoi porte l'action. Il vient après le verbe et le sujet, et est toujours au cas Mansub (accusatif), marqué par une Fatha (ـَ) ou son équivalent.",
            "signals": [
                "Vient après le Fā'il (en troisième position)",
                "Porte une Fatha ( ـَ ) ou Tanwine Fatha ( ـً ) — signe du Mansub"
            ],
            "color": "#E07B39",
            "examples": [
                {
                    "arabic": "خَلَقَ اللَّهُ السَّمَاوَاتِ",
                    "french": "Allah a créé les cieux",
                    "note": "السَّمَاوَاتِ est Maf'ūl bihi → Mansub (pluriel féminin sain → Kasra au lieu de Fatha)"
                },
                {
                    "arabic": "يَعْلَمُ اللَّهُ السِّرَّ",
                    "french": "Allah connaît le secret",
                    "note": "السِّرَّ est Maf'ūl bihi → Mansub avec Fatha"
                },
                {
                    "arabic": "أَنْزَلَ اللَّهُ الْقُرْآنَ",
                    "french": "Allah a fait descendre le Coran",
                    "note": "الْقُرْآنَ est Maf'ūl bihi → Mansub avec Fatha"
                }
            ]
        }
    ],
    "quran_example": {
        "surah": "Ibrahim",
        "verse_number": 32,
        "arabic": "خَلَقَ اللَّهُ السَّمَاوَاتِ وَالْأَرْضَ",
        "french": "Allah a créé les cieux et la terre",
        "word_analysis": [
            {
                "word": "خَلَقَ",
                "type": "verb",
                "role": "فِعْلٌ مَاضٍ",
                "french": "Il a créé",
                "note": "Verbe passé, masculin singulier — en tête de phrase verbale, même si le sujet qui suit est pluriel"
            },
            {
                "word": "اللَّهُ",
                "type": "noun",
                "role": "فَاعِلٌ مَرْفُوعٌ",
                "french": "Allah",
                "note": "Sujet (Fā'il) au Marfou' → Damma sur le ه final"
            },
            {
                "word": "السَّمَاوَاتِ",
                "type": "noun",
                "role": "مَفْعُولٌ بِهِ مَنْصُوبٌ",
                "french": "les cieux",
                "note": "Complément d'objet direct (Maf'ūl bihi) au Mansub → pluriel féminin sain, donc Kasra (ـِ) en signe de Mansub"
            },
            {
                "word": "وَ",
                "type": "particle",
                "role": "حَرْفُ عَطْفٍ",
                "french": "et",
                "note": "Particule de coordination"
            },
            {
                "word": "الْأَرْضَ",
                "type": "noun",
                "role": "مَعْطُوفٌ مَنْصُوبٌ",
                "french": "la terre",
                "note": "Coordonné au Maf'ūl bihi → aussi au Mansub avec Fatha"
            }
        ]
    },
    "exercises": [
        {
            "id": "ex18-1",
            "type": "classify",
            "instruction": "Identifie le rôle grammatical de chaque mot souligné dans la phrase verbale. Choisis entre : Verbe (فِعْل), Sujet-Fā'il (فَاعِل), ou Complément-Maf'ūl (مَفْعُول بِهِ).",
            "words": [
                {
                    "arabic": "خَلَقَ",
                    "correct": "Verbe (فِعْل)",
                    "options": [
                        "Verbe (فِعْل)",
                        "Sujet-Fā'il (فَاعِل)",
                        "Complément-Maf'ūl (مَفْعُول بِهِ)"
                    ]
                },
                {
                    "arabic": "اللَّهُ",
                    "correct": "Sujet-Fā'il (فَاعِل)",
                    "options": [
                        "Verbe (فِعْل)",
                        "Sujet-Fā'il (فَاعِل)",
                        "Complément-Maf'ūl (مَفْعُول بِهِ)"
                    ]
                },
                {
                    "arabic": "السَّمَاوَاتِ",
                    "correct": "Complément-Maf'ūl (مَفْعُول بِهِ)",
                    "options": [
                        "Verbe (فِعْل)",
                        "Sujet-Fā'il (فَاعِل)",
                        "Complément-Maf'ūl (مَفْعُول بِهِ)"
                    ]
                },
                {
                    "arabic": "الرَّسُولُ",
                    "correct": "Sujet-Fā'il (فَاعِل)",
                    "options": [
                        "Verbe (فِعْل)",
                        "Sujet-Fā'il (فَاعِل)",
                        "Complément-Maf'ūl (مَفْعُول بِهِ)"
                    ]
                },
                {
                    "arabic": "الْقُرْآنَ",
                    "correct": "Complément-Maf'ūl (مَفْعُول بِهِ)",
                    "options": [
                        "Verbe (فِعْل)",
                        "Sujet-Fā'il (فَاعِل)",
                        "Complément-Maf'ūl (مَفْعُول بِهِ)"
                    ]
                },
                {
                    "arabic": "أَنْزَلَ",
                    "correct": "Verbe (فِعْل)",
                    "options": [
                        "Verbe (فِعْل)",
                        "Sujet-Fā'il (فَاعِل)",
                        "Complément-Maf'ūl (مَفْعُول بِهِ)"
                    ]
                }
            ]
        },
        {
            "id": "ex18-2",
            "type": "highlight",
            "instruction": "Dans ce verset coranique, identifie et clique sur le Fā'il (الفَاعِل) — le sujet au Marfou' :",
            "arabic": "يَعْلَمُ اللَّهُ مَا تُبْدُونَ وَمَا تَكْتُمُونَ",
            "highlight_words": [
                "يَعْلَمُ",
                "اللَّهُ",
                "مَا",
                "تُبْدُونَ"
            ],
            "correct_words": [
                "اللَّهُ"
            ],
            "feedback_correct": "✓ Excellent ! اللَّهُ est bien le Fā'il → il porte la Damma (ـُ), signe du Marfou', et vient juste après le verbe يَعْلَمُ.",
            "feedback_wrong": "Cherche le mot qui suit directement le verbe يَعْلَمُ et qui porte une Damma (ـُ) — c'est lui qui accomplit l'action de 'savoir'."
        }
    ],
    "summary": {
        "table": [
            {
                "type": "الْفِعْلُ — Le Verbe",
                "signal": "En tête de phrase ; singulier même si sujet pluriel ; s'accorde en genre (ـَتْ pour féminin)",
                "example": "خَلَقَ / نَزَلَتْ"
            },
            {
                "type": "الْفَاعِلُ — Le Sujet (Marfou')",
                "signal": "Juste après le verbe ; porte une Damma ( ـُ ) ou Tanwine Damma ( ـٌ )",
                "example": "اللَّهُ / رَجُلٌ / الْمَلَائِكَةُ"
            },
            {
                "type": "الْمَفْعُولُ بِهِ — Le COD (Mansub)",
                "signal": "Après le Fā'il ; porte une Fatha ( ـَ ) ou Tanwine Fatha ( ـً ) — ou Kasra si pluriel féminin sain",
                "example": "السَّمَاوَاتِ / الْقُرْآنَ / كِتَابًا"
            }
        ],
        "rule": "Dans la phrase verbale, l'ordre est fixe : الْفِعْلُ ← الْفَاعِلُ (مَرْفُوعٌ) ← الْمَفْعُولُ بِهِ (مَنْصُوبٌ) — et le verbe reste toujours au singulier lorsqu'il précède son sujet, quel que soit le nombre de ce dernier."
    },
    "unlocks_lesson_id": 19
}
  , {
    "id": 19,
    "level": 2,
    "title": "Les pronoms relatifs",
    "arabic_title": "الأسماء الموصولة",
    "duration_minutes": 8,
    "prerequisite_lesson_id": 18,
    "hook": {
        "question": "Dans 'l'homme QUI est venu' et 'la femme QUE tu as vue', comment l'arabe coranique distingue-t-il ces deux mots reliant deux idées ?",
        "insight": "L'arabe possède des pronoms relatifs distincts selon le genre et le nombre : الَّذِي pour le masculin singulier, الَّتِي pour le féminin singulier, et الَّذِينَ pour le pluriel. Chacun est toujours suivi d'une proposition complète qui lui donne son sens — la صِلَة."
    },
    "concepts": [
        {
            "id": "pronom_relatif_masc_sg",
            "arabic_term": "الَّذِي",
            "french_name": "Pronom relatif masculin singulier",
            "definition": "Équivalent de 'qui / que / lequel' en français, il remplace un nom masculin singulier et introduit une proposition relative (صِلَة) qui le complète obligatoirement.",
            "signals": [
                "Commence toujours par الَّ avec une shadda sur le lam",
                "Suivi immédiatement d'une proposition verbale ou nominale complète"
            ],
            "color": "#E07B39",
            "examples": [
                {
                    "arabic": "الَّذِي خَلَقَكَ",
                    "french": "Celui qui t'a créé",
                    "note": "الَّذِي (pronom relatif m.sg) + خَلَقَكَ (verbe + pronom suffixe = la صِلَة)"
                },
                {
                    "arabic": "الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ",
                    "french": "Celui qui souffle (le mal) dans les poitrines des hommes",
                    "note": "La صِلَة est la proposition complète 'يُوَسْوِسُ فِي صُدُورِ النَّاسِ'"
                }
            ]
        },
        {
            "id": "pronom_relatif_fem_sg",
            "arabic_term": "الَّتِي",
            "french_name": "Pronom relatif féminin singulier",
            "definition": "Équivalent de 'qui / que / laquelle', il remplace un nom féminin singulier et exige lui aussi une proposition relative (صِلَة) complète pour avoir du sens.",
            "signals": [
                "Forme en الَّتِي avec un tā' marbūṭa final",
                "Le nom auquel il se réfère est toujours féminin (souvent se termine par ة ou est féminin de nature)"
            ],
            "color": "#7B5EA7",
            "examples": [
                {
                    "arabic": "الَّتِي أَرْضَعَتْكُمْ",
                    "french": "Celle qui vous a allaités",
                    "note": "Réfère à un nom féminin sous-entendu (la mère nourricière) ; الَّتِي + صِلَة verbale"
                },
                {
                    "arabic": "النَّارُ الَّتِي كُنْتُمْ بِهَا تُكَذِّبُونَ",
                    "french": "Le feu que vous traitiez de mensonge",
                    "note": "الَّتِي se rapporte à النَّارُ (féminin)"
                }
            ]
        },
        {
            "id": "pronom_relatif_pl",
            "arabic_term": "الَّذِينَ",
            "french_name": "Pronom relatif pluriel (personnes)",
            "definition": "Utilisé pour les personnes au pluriel (masculin ou mixte), il est invariable en cas et introduit toujours une صِلَة complète. C'est l'un des pronoms relatifs les plus fréquents dans le Coran.",
            "signals": [
                "Se termine toujours par نَ (نون مفتوحة)",
                "Très souvent suivi de آمَنُوا، كَفَرُوا، ظَلَمُوا ou d'autres verbes au pluriel"
            ],
            "color": "#C0392B",
            "examples": [
                {
                    "arabic": "الَّذِينَ آمَنُوا",
                    "french": "Ceux qui ont cru",
                    "note": "الَّذِينَ + آمَنُوا (verbe pluriel = صِلَة) — formule coranique par excellence"
                },
                {
                    "arabic": "الَّذِينَ يُقِيمُونَ الصَّلَاةَ",
                    "french": "Ceux qui accomplissent la prière",
                    "note": "La صِلَة est ici nominale/verbale étendue يُقِيمُونَ الصَّلَاةَ"
                }
            ]
        }
    ],
    "quran_example": {
        "surah": "Al-Baqara",
        "verse_number": 3,
        "arabic": "الَّذِينَ يُؤْمِنُونَ بِالْغَيْبِ وَيُقِيمُونَ الصَّلَاةَ وَمِمَّا رَزَقْنَاهُمْ يُنفِقُونَ",
        "french": "Ceux qui croient à l'invisible, accomplissent la prière et dépensent de ce que Nous leur avons accordé.",
        "word_analysis": [
            {
                "word": "الَّذِينَ",
                "type": "relative pronoun",
                "role": "اسم موصول للجمع",
                "french": "Ceux qui",
                "note": "Pronom relatif pluriel — sujet de la phrase, ce qui suit est sa صِلَة"
            },
            {
                "word": "يُؤْمِنُونَ",
                "type": "verb",
                "role": "فِعل مُضارع — صدر الصِّلَة",
                "french": "croient",
                "note": "Début de la صِلَة : proposition verbale qui complète الَّذِينَ"
            },
            {
                "word": "بِالْغَيْبِ",
                "type": "particle + noun",
                "role": "جار ومجرور — متعلق بـ يُؤْمِنُونَ",
                "french": "à l'invisible",
                "note": "Complément circonstanciel du verbe يُؤْمِنُونَ"
            },
            {
                "word": "وَيُقِيمُونَ",
                "type": "verb",
                "role": "فِعل مُضارع معطوف — تابع للصِّلَة",
                "french": "et accomplissent",
                "note": "Deuxième membre de la صِلَة, coordonné par وَ"
            },
            {
                "word": "الصَّلَاةَ",
                "type": "noun",
                "role": "مفعول به منصوب",
                "french": "la prière",
                "note": "Complément d'objet direct de يُقِيمُونَ, marqué par la fatḥa"
            },
            {
                "word": "يُنفِقُونَ",
                "type": "verb",
                "role": "فِعل مُضارع — ختام الصِّلَة",
                "french": "dépensent",
                "note": "Troisième membre de la صِلَة, clôture la proposition relative"
            }
        ]
    },
    "exercises": [
        {
            "id": "ex19-1",
            "type": "classify",
            "instruction": "Identifie le type de chaque pronom relatif souligné : masculin singulier (الَّذِي), féminin singulier (الَّتِي) ou pluriel (الَّذِينَ).",
            "words": [
                {
                    "arabic": "الَّذِينَ كَفَرُوا",
                    "correct": "الَّذِينَ (pluriel)",
                    "options": [
                        "الَّذِي (m.sg)",
                        "الَّتِي (f.sg)",
                        "الَّذِينَ (pluriel)"
                    ]
                },
                {
                    "arabic": "الَّذِي خَلَقَ",
                    "correct": "الَّذِي (m.sg)",
                    "options": [
                        "الَّذِي (m.sg)",
                        "الَّتِي (f.sg)",
                        "الَّذِينَ (pluriel)"
                    ]
                },
                {
                    "arabic": "الَّتِي تَطَّلِعُ عَلَى الْأَفْئِدَةِ",
                    "correct": "الَّتِي (f.sg)",
                    "options": [
                        "الَّذِي (m.sg)",
                        "الَّتِي (f.sg)",
                        "الَّذِينَ (pluriel)"
                    ]
                },
                {
                    "arabic": "الَّذِينَ ظَلَمُوا",
                    "correct": "الَّذِينَ (pluriel)",
                    "options": [
                        "الَّذِي (m.sg)",
                        "الَّتِي (f.sg)",
                        "الَّذِينَ (pluriel)"
                    ]
                },
                {
                    "arabic": "الَّتِي أَنعَمَ اللَّهُ عَلَيْهَا",
                    "correct": "الَّتِي (f.sg)",
                    "options": [
                        "الَّذِي (m.sg)",
                        "الَّتِي (f.sg)",
                        "الَّذِينَ (pluriel)"
                    ]
                }
            ]
        },
        {
            "id": "ex19-2",
            "type": "highlight",
            "instruction": "Dans ce verset, identifie le pronom relatif (الاسم الموصول) ET le début de sa صِلَة (proposition relative) :",
            "arabic": "إِنَّ الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ كَانَتْ لَهُمْ جَنَّاتُ الْفِرْدَوْسِ نُزُلًا",
            "highlight_words": [
                "الَّذِينَ",
                "آمَنُوا"
            ],
            "correct_words": [
                "الَّذِينَ",
                "آمَنُوا"
            ],
            "feedback_correct": "✓ Excellent ! الَّذِينَ est le pronom relatif pluriel, et آمَنُوا est le premier verbe de sa صِلَة. Toute la séquence 'آمَنُوا وَعَمِلُوا الصَّالِحَاتِ' constitue la صِلَة complète.",
            "feedback_wrong": "Cherche le mot commençant par الَّ avec une shadda — c'est lui le pronom relatif. Puis repère le verbe qui le suit directement : c'est le début de la صِلَة."
        }
    ],
    "summary": {
        "table": [
            {
                "type": "الَّذِي",
                "signal": "Masculin singulier — le nom auquel il se réfère est m.sg",
                "example": "الَّذِي خَلَقَكَ"
            },
            {
                "type": "الَّتِي",
                "signal": "Féminin singulier — se rapporte à un nom féminin (souvent en ة)",
                "example": "النَّارُ الَّتِي كُنْتُمْ بِهَا تُكَذِّبُونَ"
            },
            {
                "type": "الَّذِينَ",
                "signal": "Pluriel (personnes) — toujours suivi d'un verbe au pluriel",
                "example": "الَّذِينَ آمَنُوا"
            },
            {
                "type": "الصِّلَة",
                "signal": "Proposition complète (verbe + compléments) qui suit le pronom relatif",
                "example": "آمَنُوا وَعَمِلُوا الصَّالِحَاتِ"
            }
        ],
        "rule": "Tout pronom relatif (الَّذِي / الَّتِي / الَّذِينَ) est toujours suivi d'une صِلَة — une proposition complète sans laquelle il ne peut exister."
    },
    "unlocks_lesson_id": 20
}
  , {
    "id": 20,
    "level": 2,
    "title": "Les compléments de temps et lieu",
    "arabic_title": "الظرف",
    "duration_minutes": 8,
    "prerequisite_lesson_id": 19,
    "hook": {
        "question": "Pourquoi dit-on يَوْمَ الْقِيَامَةِ avec une fatha à la fin de يَوْم, alors qu'on dit فِي يَوْمِ الْقِيَامَةِ avec une kasra ?",
        "insight": "Parce que يَوْمَ seul est un ظَرْف (complément circonstanciel direct), toujours au manṣūb — il indique QUAND sans préposition. Dès qu'on ajoute فِي, on entre dans le monde du جَارٌّ وَمَجْرُور : même sens, structure différente."
    },
    "concepts": [
        {
            "id": "zarf_zaman",
            "arabic_term": "ظَرْفُ الزَّمَانِ",
            "french_name": "Complément de temps (adverbe de temps)",
            "definition": "Mot au cas manṣūb (fatha) qui répond à la question 'Quand ?' sans avoir besoin d'une préposition. Il indique le moment de l'action directement.",
            "signals": [
                "Répond à la question مَتَى ؟ (Quand ?)",
                "Porte une fatha (ou est invariable) sans préposition devant lui",
                "Mots clés : يَوْمَ، حِينَ، لَيْلاً، نَهَارًا، حِيناً، وَقْتًا"
            ],
            "color": "#E07B39",
            "examples": [
                {
                    "arabic": "يَوْمَ الْقِيَامَةِ",
                    "french": "Le Jour de la Résurrection",
                    "note": "يَوْمَ est manṣūb (fatha) car ظرف زمان directement, sans préposition"
                },
                {
                    "arabic": "وَجَاءَ رَبُّكَ",
                    "french": "et ton Seigneur viendra",
                    "note": "L'action se passe 'quand ?' → يَوْمَ الْقِيَامَةِ, le ظرف répond à cette question"
                },
                {
                    "arabic": "سَبَّحَ لَيْلاً وَنَهَارًا",
                    "french": "Il glorifiait (Allah) nuit et jour",
                    "note": "لَيْلاً et نَهَارًا : deux ظرف زمان, tous les deux au tanwīn fatḥ (manṣūb)"
                }
            ]
        },
        {
            "id": "zarf_makan",
            "arabic_term": "ظَرْفُ الْمَكَانِ",
            "french_name": "Complément de lieu (adverbe de lieu)",
            "definition": "Mot au cas manṣūb (fatha) qui répond à la question 'Où ?' sans préposition. Il indique le lieu de l'action de façon directe et attachée au verbe.",
            "signals": [
                "Répond à la question أَيْنَ ؟ (Où ?)",
                "Porte une fatha sans préposition devant lui",
                "Mots clés : فَوْقَ، تَحْتَ، أَمَامَ، وَرَاءَ، يَمِينَ، شِمَالَ، بَيْنَ، عِنْدَ"
            ],
            "color": "#7B5EA7",
            "examples": [
                {
                    "arabic": "وَالسَّمَاءَ بَنَيْنَاهَا فَوْقَكُمْ",
                    "french": "Et le ciel, Nous l'avons bâti au-dessus de vous",
                    "note": "فَوْقَكُمْ : ظرف مكان au manṣūb, répond à 'où a-t-il été bâti ?'"
                },
                {
                    "arabic": "تَجْرِي مِنْ تَحْتِهَا الْأَنْهَارُ",
                    "french": "sous lesquels coulent les fleuves",
                    "note": "تَحْت ici précédé de مِنْ → جار ومجرور (pas un ظرف مكان seul)"
                },
                {
                    "arabic": "وَقَعَدَ أَمَامَ الْمَسْجِدِ",
                    "french": "Il s'est assis devant la mosquée",
                    "note": "أَمَامَ : ظرف مكان, manṣūb sans préposition"
                }
            ]
        }
    ],
    "quran_example": {
        "surah": "Al-Fajr",
        "verse_number": 23,
        "arabic": "وَجِيءَ يَوْمَئِذٍ بِجَهَنَّمَ",
        "french": "Et en ce jour-là, la Géhenne sera amenée",
        "word_analysis": [
            {
                "word": "وَجِيءَ",
                "type": "verb",
                "role": "فِعْلٌ مَاضٍ مَبْنِيٌّ لِلْمَجْهُولِ",
                "french": "et il sera amené (passif)",
                "note": "Verbe au passif : l'action principale autour de laquelle tourne le ظرف"
            },
            {
                "word": "يَوْمَئِذٍ",
                "type": "noun",
                "role": "ظَرْفُ زَمَانٍ مَنْصُوبٌ",
                "french": "en ce jour-là",
                "note": "يَوْمَ : manṣūb (fatha) car ظرف زمان. إِذٍ : particule de temps ajoutée. Répond à مَتَى جِيءَ بِجَهَنَّمَ ؟"
            },
            {
                "word": "بِجَهَنَّمَ",
                "type": "particle + noun",
                "role": "جَارٌّ وَمَجْرُورٌ (نَائِبُ فَاعِلٍ)",
                "french": "la Géhenne (sujet passif)",
                "note": "بِ est une préposition → جار ومجرور, PAS un ظرف. Contraste direct avec يَوْمَئِذٍ."
            }
        ]
    },
    "exercises": [
        {
            "id": "ex20-1",
            "type": "classify",
            "instruction": "Classifie chaque mot souligné : est-ce un ظَرْفُ زَمَانٍ, un ظَرْفُ مَكَانٍ, ou un جَارٌّ وَمَجْرُورٌ ?",
            "words": [
                {
                    "arabic": "جَلَسَ فَوْقَ الْجَبَلِ",
                    "correct": "ظرف مكان",
                    "options": [
                        "ظرف مكان",
                        "ظرف زمان",
                        "جار ومجرور"
                    ]
                },
                {
                    "arabic": "فِي السَّمَاءِ مَلَائِكَةٌ",
                    "correct": "جار ومجرور",
                    "options": [
                        "ظرف مكان",
                        "ظرف زمان",
                        "جار ومجرور"
                    ]
                },
                {
                    "arabic": "سَجَدَ لَيْلاً",
                    "correct": "ظرف زمان",
                    "options": [
                        "ظرف مكان",
                        "ظرف زمان",
                        "جار ومجرور"
                    ]
                },
                {
                    "arabic": "وَقَفَ أَمَامَ الْبَابِ",
                    "correct": "ظرف مكان",
                    "options": [
                        "ظرف مكان",
                        "ظرف زمان",
                        "جار ومجرور"
                    ]
                },
                {
                    "arabic": "حِينَ تَغْرُبُ الشَّمْسُ",
                    "correct": "ظرف زمان",
                    "options": [
                        "ظرف مكان",
                        "ظرف زمان",
                        "جار ومجرور"
                    ]
                },
                {
                    "arabic": "مِنْ تَحْتِ الشَّجَرَةِ",
                    "correct": "جار ومجرور",
                    "options": [
                        "ظرف مكان",
                        "ظرف زمان",
                        "جار ومجرور"
                    ]
                }
            ]
        },
        {
            "id": "ex20-2",
            "type": "highlight",
            "instruction": "Dans ce verset coranique, identifie les mots qui forment le ظَرْفُ الزَّمَانِ (complément de temps direct, sans préposition) :",
            "arabic": "يَوْمَ لَا تَمْلِكُ نَفْسٌ لِنَفْسٍ شَيْئًا وَالْأَمْرُ يَوْمَئِذٍ لِلَّهِ",
            "highlight_words": [
                "يَوْمَ",
                "يَوْمَئِذٍ"
            ],
            "correct_words": [
                "يَوْمَ",
                "يَوْمَئِذٍ"
            ],
            "feedback_correct": "✓ Parfait ! يَوْمَ et يَوْمَئِذٍ sont tous les deux des ظرف زمان au manṣūb — ils répondent à 'Quand ?' sans aucune préposition devant eux.",
            "feedback_wrong": "Indice : cherche les mots qui indiquent 'Quand ?' et qui portent une fatha sans préposition فِي ou مِنْ devant eux."
        }
    ],
    "summary": {
        "table": [
            {
                "type": "ظَرْفُ الزَّمَانِ",
                "signal": "Répond à مَتَى ؟ • Fatha (manṣūb) • Pas de préposition • Mots : يَوْمَ، حِينَ، لَيْلاً، نَهَارًا",
                "example": "صَلَّى لَيْلاً"
            },
            {
                "type": "ظَرْفُ الْمَكَانِ",
                "signal": "Répond à أَيْنَ ؟ • Fatha (manṣūb) • Pas de préposition • Mots : فَوْقَ، تَحْتَ، أَمَامَ، وَرَاءَ، بَيْنَ",
                "example": "جَلَسَ أَمَامَهُ"
            },
            {
                "type": "جَارٌّ وَمَجْرُورٌ",
                "signal": "Préposition visible (فِي، مِنْ، عَلَى، إِلَى...) + nom au majrūr (kasra) • Même sens possible, structure différente",
                "example": "فِي السَّمَاءِ"
            }
        ],
        "rule": "Le ظَرْف (temps ou lieu) est toujours manṣūb (fatha) et se passe de préposition — dès qu'une préposition apparaît, on a un جَارٌّ وَمَجْرُورٌ, non un ظَرْف."
    },
    "unlocks_lesson_id": 21
}
  , {
    "id": 21,
    "level": 3,
    "title": "Les patterns de noms",
    "arabic_title": "أوزان الأسماء",
    "duration_minutes": 8,
    "prerequisite_lesson_id": 20,
    "hook": {
        "question": "Pourquoi كِتَاب (livre) et كَاتِب (écrivain) partagent-ils les mêmes lettres ك-ت-ب ?",
        "insight": "En arabe, la racine porte le sens, mais le pattern (وزن) détermine la fonction : outil, agent, lieu, intensité. Maîtriser les patterns, c'est décoder des milliers de mots d'un coup."
    },
    "concepts": [
        {
            "id": "pattern-instrument-lieu",
            "arabic_term": "مَفْعَل / فِعَال",
            "french_name": "Patterns d'instrument et d'intensité",
            "definition": "Le pattern مَفْعَل (mafCal) désigne souvent un lieu ou un instrument lié à la racine. Le pattern فِعَال (fiCaaL) exprime une notion intensive ou un objet concret récurrent.",
            "signals": [
                "مَ en préfixe → lieu ou instrument",
                "فِعَال → objet concret ou intensif",
                "Voyelles fixes quelle que soit la racine"
            ],
            "color": "#2E86AB",
            "examples": [
                {
                    "arabic": "مَسْجِد",
                    "french": "mosquée (lieu de prosternation)",
                    "note": "Racine س-ج-د (se prosterner) + pattern مَفْعِل → lieu"
                },
                {
                    "arabic": "مَكْتَب",
                    "french": "bureau (lieu d'écriture)",
                    "note": "Racine ك-ت-ب (écrire) + pattern مَفْعَل → lieu/instrument"
                },
                {
                    "arabic": "كِتَاب",
                    "french": "livre (objet de l'écriture)",
                    "note": "Même racine ك-ت-ب + pattern فِعَال → objet concret"
                }
            ]
        },
        {
            "id": "pattern-agent-adjectif",
            "arabic_term": "فَاعِل / فَعِيل",
            "french_name": "Patterns d'agent et d'adjectif intensif",
            "definition": "Le pattern فَاعِل (faCiL) forme le nom d'agent (celui qui fait). Le pattern فَعِيل (faCiyl) forme un adjectif ou nom à sens intense ou permanent, souvent traduit par un participe ou un qualificatif fort.",
            "signals": [
                "فَاعِل → celui qui fait (agent actif)",
                "فَعِيل → qualité intense ou état durable",
                "Alif entre 2e et 3e radicale dans فَعِيل"
            ],
            "color": "#E84855",
            "examples": [
                {
                    "arabic": "كَاتِب",
                    "french": "écrivain / celui qui écrit",
                    "note": "Racine ك-ت-ب + pattern فَاعِل → agent"
                },
                {
                    "arabic": "عَلِيم",
                    "french": "celui qui sait parfaitement / omniscient",
                    "note": "Racine ع-ل-م + pattern فَعِيل → attribut divin intense dans le Coran"
                },
                {
                    "arabic": "رَحِيم",
                    "french": "très miséricordieux",
                    "note": "Racine ر-ح-م + pattern فَعِيل → miséricorde intense et permanente"
                }
            ]
        }
    ],
    "quran_example": {
        "surah": "Al-Baqara",
        "verse_number": 29,
        "arabic": "وَهُوَ بِكُلِّ شَيْءٍ عَلِيمٌ",
        "french": "Et Il est, de toute chose, Parfaitement Savant.",
        "word_analysis": [
            {
                "word": "وَهُوَ",
                "type": "pronom",
                "role": "sujet",
                "french": "et Lui / et Il",
                "note": "Pronom de majesté renvoyant à Allah"
            },
            {
                "word": "بِكُلِّ",
                "type": "جار ومجرور",
                "role": "complément circonstanciel",
                "french": "de toute",
                "note": "بِ préposition + كُلّ (totalité)"
            },
            {
                "word": "شَيْءٍ",
                "type": "اسم",
                "role": "complément du nom",
                "french": "chose",
                "note": "Pattern فَعْل (faCL) → nom simple et concret"
            },
            {
                "word": "عَلِيمٌ",
                "type": "صفة مشبهة",
                "role": "attribut du sujet",
                "french": "Parfaitement Savant",
                "note": "Pattern فَعِيل → intensité absolue, attribut divin récurrent dans le Coran"
            }
        ]
    },
    "exercises": [
        {
            "id": "ex21-1",
            "type": "classify",
            "instruction": "Identifie le pattern (وزن) de chaque mot et classe-le dans la bonne catégorie.",
            "words": [
                {
                    "arabic": "مَسْجِد",
                    "correct": "مَفْعِل (lieu)",
                    "options": [
                        "فَاعِل (agent)",
                        "مَفْعِل (lieu)",
                        "فَعِيل (intensif)"
                    ]
                },
                {
                    "arabic": "كَاتِب",
                    "correct": "فَاعِل (agent)",
                    "options": [
                        "فَاعِل (agent)",
                        "مَفْعِل (lieu)",
                        "فِعَال (objet concret)"
                    ]
                },
                {
                    "arabic": "رَحِيم",
                    "correct": "فَعِيل (intensif)",
                    "options": [
                        "فَعِيل (intensif)",
                        "فَاعِل (agent)",
                        "مَفْعَل (lieu)"
                    ]
                },
                {
                    "arabic": "كِتَاب",
                    "correct": "فِعَال (objet concret)",
                    "options": [
                        "فَعِيل (intensif)",
                        "فِعَال (objet concret)",
                        "فَاعِل (agent)"
                    ]
                }
            ]
        },
        {
            "id": "ex21-2",
            "type": "highlight",
            "instruction": "Dans ce verset, surligne le mot qui suit le pattern فَعِيل (intensif).",
            "arabic": "إِنَّ اللَّهَ غَفُورٌ رَحِيمٌ",
            "highlight_words": [
                "غَفُورٌ",
                "رَحِيمٌ"
            ],
            "correct_words": [
                "غَفُورٌ",
                "رَحِيمٌ"
            ],
            "feedback_correct": "Excellent ! غَفُور et رَحِيم suivent tous deux le pattern فَعُول / فَعِيل exprimant une qualité divine intense et permanente.",
            "feedback_wrong": "Regarde bien les voyelles : فَعِيل a un alif entre la 2e et la 3e radicale (رَحِيم) et فَعُول une واو (غَفُور) — deux patterns d'intensité proches !"
        }
    ],
    "summary": {
        "table": [
            {
                "type": "فَعْل (faCL)",
                "signal": "Pattern court et simple",
                "example": "شَيْء (chose)"
            },
            {
                "type": "فَاعِل (faCiL)",
                "signal": "Alif après 1re radicale → agent",
                "example": "كَاتِب (écrivain)"
            },
            {
                "type": "فَعِيل (faCiyl)",
                "signal": "Alif entre 2e et 3e radicale → intensité",
                "example": "رَحِيم (très miséricordieux)"
            },
            {
                "type": "فِعَال (fiCaaL)",
                "signal": "Kasra initiale + alif long → objet concret",
                "example": "كِتَاب (livre)"
            },
            {
                "type": "مَفْعَل (mafCal)",
                "signal": "Préfixe مَ → lieu ou instrument",
                "example": "مَكْتَب (bureau)"
            }
        ],
        "rule": "La racine arabe (3 lettres) porte le sens de base ; le pattern (وزن) lui donne sa fonction grammaticale et sémantique. Reconnaître un pattern permet de deviner le rôle d'un mot inconnu : مَ en préfixe → lieu/instrument ; فَاعِل → agent ; فَعِيل → qualité intense. C'est la clé pour lire le Coran avec compréhension."
    },
    "unlocks_lesson_id": 22
}
  , {
    "id": 22,
    "level": 3,
    "title": "Le participe actif et passif",
    "arabic_title": "اسم الفاعل واسم المفعول",
    "duration_minutes": 8,
    "prerequisite_lesson_id": 21,
    "hook": {
        "question": "Dans le verset 'وَهُوَ الْغَافِرُ الذُّنُوبَ' — Allāh est-il en train de pardonner, ou est-ce qu'Il est *Celui qui pardonne* par nature ? Et comment l'arabe fait-il cette distinction en un seul mot ?",
        "insight": "L'arabe coranique forge deux 'noms dérivés' à partir du verbe : اسم الفاعل désigne l'agent (celui qui fait l'action), et اسم المفعول désigne le patient (celui sur qui l'action tombe). Ces deux formes, figées sur des moules précis, permettent au Coran de qualifier Allāh, les croyants et les objets de Sa création avec une précision saisissante."
    },
    "concepts": [
        {
            "id": "ism_al_fail",
            "arabic_term": "اسْمُ الْفَاعِلِ",
            "french_name": "Participe actif",
            "definition": "Nom dérivé du verbe trilitère sur le moule فَاعِل, qui désigne l'agent de l'action — celui qui fait, qui est, ou qui demeure dans cet état. Il peut qualifier un être de façon permanente (attribut divin) ou temporaire.",
            "signals": [
                "Moule visuel : فَ-اعِل → une alif après la première consonne de la racine, puis kasra sous la deuxième",
                "Sens agent : réponds à la question 'qui fait/est ?' → celui qui écrit = كَاتِب, celui qui sait = عَالِم"
            ],
            "color": "#8B0000",
            "examples": [
                {
                    "arabic": "كَاتِبٌ",
                    "french": "écrivant / celui qui écrit",
                    "note": "Racine ك-ت-ب → moule فَاعِل → كَاتِب"
                },
                {
                    "arabic": "قَادِرٌ",
                    "french": "puissant / Celui qui est capable",
                    "note": "Racine ق-د-ر → فَاعِل → قَادِر ; attribut divin fréquent dans le Coran"
                },
                {
                    "arabic": "غَافِرٌ",
                    "french": "Celui qui pardonne / le Pardonneur",
                    "note": "Racine غ-ف-ر → فَاعِل → غَافِر ; titre du sourate 40"
                },
                {
                    "arabic": "مُؤْمِنٌ",
                    "french": "croyant / celui qui croit",
                    "note": "Racine أ-م-ن → le participe actif décrit l'état intérieur du croyant"
                }
            ]
        },
        {
            "id": "ism_al_mafoul",
            "arabic_term": "اسْمُ الْمَفْعُولِ",
            "french_name": "Participe passif",
            "definition": "Nom dérivé du verbe trilitère sur le moule مَفْعُول, qui désigne le patient de l'action — ce sur quoi l'action est accomplie, ce qui est fait, écrit, créé, etc.",
            "signals": [
                "Moule visuel : مَفْعُول → préfixe مَ + les trois consonnes de la racine + wāw longue avant la dernière consonne",
                "Sens patient : réponds à la question 'sur quoi/qui tombe l'action ?' → ce qui est écrit = مَكْتُوب, ce qui est su = مَعْلُوم"
            ],
            "color": "#A0522D",
            "examples": [
                {
                    "arabic": "مَكْتُوبٌ",
                    "french": "écrit / ce qui est écrit",
                    "note": "Racine ك-ت-ب → moule مَفْعُول → مَكْتُوب ; ce qui a reçu l'action d'écrire"
                },
                {
                    "arabic": "مَقْدُورٌ",
                    "french": "décrété / ce qui est dans le pouvoir d'Allāh",
                    "note": "Racine ق-د-ر → مَفْعُول → مَقْدُور ; désigne ce qu'Allāh a prédéterminé"
                },
                {
                    "arabic": "مَعْلُومٌ",
                    "french": "connu / ce qui est su",
                    "note": "Racine ع-ل-م → مَعْلُوم ; fréquent dans les contextes coraniques de la connaissance divine"
                },
                {
                    "arabic": "مَغْفُورٌ",
                    "french": "pardonné / ce dont le péché est effacé",
                    "note": "Racine غ-ف-ر → مَفْعُول → مَغْفُور ; le croyant dont les fautes sont pardonnées"
                }
            ]
        }
    ],
    "quran_example": {
        "surah": "Ghāfir (سُورَةُ غَافِر)",
        "verse_number": 3,
        "arabic": "غَافِرِ الذَّنْبِ وَقَابِلِ التَّوْبِ شَدِيدِ الْعِقَابِ ذِي الطَّوْلِ ۖ لَا إِلَٰهَ إِلَّا هُوَ ۖ إِلَيْهِ الْمَصِيرُ",
        "french": "Celui qui pardonne le péché, qui accepte le repentir, au châtiment sévère, au vaste bienfait — il n'y a de dieu que Lui ; c'est vers Lui que sera le retour.",
        "word_analysis": [
            {
                "word": "غَافِرِ",
                "type": "noun",
                "role": "اسم الفاعل — صفة مجرورة",
                "french": "Celui qui pardonne",
                "note": "Moule فَاعِل de la racine غ-ف-ر ; attribut divin au génitif car en construction annexive (إضافة) avec الذَّنْبِ"
            },
            {
                "word": "الذَّنْبِ",
                "type": "noun",
                "role": "مضاف إليه — complément de nom",
                "french": "le péché",
                "note": "اسم الفاعل ici fonctionne comme un nom et régit un complément à la manière du verbe dont il est dérivé"
            },
            {
                "word": "قَابِلِ",
                "type": "noun",
                "role": "اسم الفاعل — صفة مجرورة معطوفة",
                "french": "Celui qui accepte",
                "note": "Deuxième اسم الفاعل de la série — moule فَاعِل de ق-ب-ل ; coordonné à غَافِرِ par la lettre وَ"
            },
            {
                "word": "التَّوْبِ",
                "type": "noun",
                "role": "مضاف إليه",
                "french": "le repentir",
                "note": "Complément nominal de قَابِلِ, confirmant la valeur transitive de اسم الفاعل"
            },
            {
                "word": "الْمَصِيرُ",
                "type": "noun",
                "role": "اسم مكان / خبر المبتدأ",
                "french": "le retour / la destination finale",
                "note": "Nom de lieu dérivé de ص-ي-ر ; rappelle que tous les dérivés nominaux verbaux (أسماء مشتقة) suivent des moules réguliers"
            }
        ]
    },
    "exercises": [
        {
            "id": "ex22-1",
            "type": "classify",
            "instruction": "Classe chacun de ces mots coraniques : s'agit-il d'un اسم الفاعل (participe actif) ou d'un اسم المفعول (participe passif) ? Appuie-toi sur le moule (فَاعِل ou مَفْعُول).",
            "words": [
                {
                    "arabic": "مَكْتُوبٌ",
                    "correct": "اسم المفعول",
                    "options": [
                        "اسم الفاعل",
                        "اسم المفعول",
                        "مصدر"
                    ]
                },
                {
                    "arabic": "عَالِمٌ",
                    "correct": "اسم الفاعل",
                    "options": [
                        "اسم الفاعل",
                        "اسم المفعول",
                        "صفة مشبهة"
                    ]
                },
                {
                    "arabic": "مَقْدُورٌ",
                    "correct": "اسم المفعول",
                    "options": [
                        "اسم الفاعل",
                        "اسم المفعول",
                        "مصدر"
                    ]
                },
                {
                    "arabic": "غَافِرٌ",
                    "correct": "اسم الفاعل",
                    "options": [
                        "اسم الفاعل",
                        "اسم المفعول",
                        "اسم مكان"
                    ]
                },
                {
                    "arabic": "مَغْفُورٌ",
                    "correct": "اسم المفعول",
                    "options": [
                        "اسم الفاعل",
                        "اسم المفعول",
                        "مصدر"
                    ]
                },
                {
                    "arabic": "قَادِرٌ",
                    "correct": "اسم الفاعل",
                    "options": [
                        "اسم الفاعل",
                        "اسم المفعول",
                        "صفة مشبهة"
                    ]
                }
            ]
        },
        {
            "id": "ex22-2",
            "type": "highlight",
            "instruction": "Dans ce verset coranique (Al-Baqara 2:286), identifie et sélectionne les deux mots qui sont des اسم الفاعل ou اسم المفعول parmi les mots proposés.",
            "arabic": "لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا ۚ لَهَا مَا كَسَبَتْ وَعَلَيْهَا مَا اكْتَسَبَتْ ۗ رَبَّنَا لَا تُؤَاخِذْنَا إِن نَّسِينَا أَوْ أَخْطَأْنَا",
            "highlight_words": [
                "نَفْسًا",
                "وُسْعَهَا",
                "كَسَبَتْ",
                "مُكَلَّفٌ",
                "مَكْسُوبٌ"
            ],
            "correct_words": [
                "مُكَلَّفٌ",
                "مَكْسُوبٌ"
            ],
            "feedback_correct": "✓ Bravo ! مُكَلَّفٌ (celui à qui il est imposé une charge) est اسم المفعول de la racine ك-ل-ف sur le moule مُفَعَّل, et مَكْسُوبٌ (ce qui est acquis) est اسم المفعول de ك-س-ب sur le moule مَفْعُول — les deux désignent bien le patient de l'action.",
            "feedback_wrong": "Cherche les moules : مَفْعُول (préfixe مَ + racine + wāw) ou مُفَعَّل (préfixe مُ + racine avec redoublement). Les verbes conjugués comme كَسَبَتْ ne sont pas des participes."
        }
    ],
    "summary": {
        "table": [
            {
                "type": "اسم الفاعل — Participe actif",
                "signal": "Moule فَاعِل : alif après la 1ʳᵉ consonne + kasra sous la 2ᵉ → désigne l'AGENT",
                "example": "غَافِرٌ / كَاتِبٌ / قَادِرٌ"
            },
            {
                "type": "اسم المفعول — Participe passif",
                "signal": "Moule مَفْعُول : préfixe مَ + racine + wāw longue → désigne le PATIENT",
                "example": "مَكْتُوبٌ / مَقْدُورٌ / مَغْفُورٌ"
            }
        ],
        "rule": "Pour tout verbe trilitère : l'agent porte le moule فَاعِل (qui fait ?), le patient porte le moule مَفْعُول (sur quoi tombe l'action ?) — deux empreintes opposées, deux réalités complémentaires que le Coran tisse constamment pour révéler à la fois la Toute-Puissance d'Allāh et la condition de Sa création."
    },
    "unlocks_lesson_id": 23
}
  , {
    "id": 23,
    "level": 3,
    "title": "Le nom verbal",
    "arabic_title": "المصدر",
    "duration_minutes": 8,
    "prerequisite_lesson_id": 22,
    "hook": {
        "question": "Comment l'arabe transforme un verbe en 'chose' dont on peut parler, compter ou qualifier ?",
        "insight": "Le مصدر (masdar) est le nom qui exprime l'action elle-même : non pas 'il prie', mais 'la prière' — l'action devenue objet de la phrase."
    },
    "concepts": [
        {
            "id": "masdar-trilitere",
            "arabic_term": "المصدر الثلاثي",
            "french_name": "Le nom verbal trilitère",
            "definition": "Nom dérivé d'une racine à trois lettres exprimant l'action ou l'état de façon abstraite. Il suit des patterns fixes selon le type de verbe.",
            "signals": [
                "Pattern فَعْلٌ (coup, frappe)",
                "Pattern فُعُولٌ (montée, descente)",
                "Pattern فِعَالَةٌ (métier, activité)",
                "Pattern تَفْعِيلٌ (pour les verbes de forme II)",
                "Peut porter tanwîn"
            ],
            "color": "#4A90D9",
            "examples": [
                {
                    "arabic": "ذَهَبَ — ذَهَابٌ",
                    "french": "il est parti — le départ",
                    "note": "Pattern فَعَالٌ très courant pour les verbes de mouvement"
                },
                {
                    "arabic": "صَلَّى — صَلَاةٌ",
                    "french": "il a prié — la prière",
                    "note": "Masdar de la forme II avec ta marbuta ; l'une des formes les plus connues du Coran"
                },
                {
                    "arabic": "عَلِمَ — عِلْمٌ",
                    "french": "il a su — le savoir / la science",
                    "note": "Pattern فِعْلٌ pour les verbes d'état mental"
                }
            ]
        },
        {
            "id": "masdar-fonction",
            "arabic_term": "وظيفة المصدر",
            "french_name": "Fonctions du masdar dans la phrase",
            "definition": "Le masdar peut occuper toutes les fonctions nominales : sujet (مبتدأ/فاعل), complément d'objet (مفعول به), ou complément circonstanciel. Il remplace parfois une proposition entière.",
            "signals": [
                "En position de sujet : porte la marque -u (ضمة)",
                "En position d'objet : porte la marque -a (فتحة)",
                "Peut être précédé de la préposition لِ pour exprimer le but",
                "Peut former une annexion (إضافة) avec son complément"
            ],
            "color": "#E67E22",
            "examples": [
                {
                    "arabic": "إِقَامَةُ الصَّلَاةِ وَاجِبَةٌ",
                    "french": "Accomplir la prière est obligatoire",
                    "note": "Masdar إقامة en position de sujet (مبتدأ), portant la ḍamma"
                },
                {
                    "arabic": "أُحِبُّ تِلَاوَةَ الْقُرْآنِ",
                    "french": "J'aime la récitation du Coran",
                    "note": "Masdar تلاوة en position d'objet direct, portant la fatḥa"
                },
                {
                    "arabic": "جِئْتُ لِلتَّعَلُّمِ",
                    "french": "Je suis venu pour apprendre",
                    "note": "Masdar précédé de لِ exprimant le but ; équivaut à une proposition finale"
                }
            ]
        }
    ],
    "quran_example": {
        "surah": "Al-Baqara",
        "verse_number": 43,
        "arabic": "وَأَقِيمُوا الصَّلَاةَ وَآتُوا الزَّكَاةَ وَارْكَعُوا مَعَ الرَّاكِعِينَ",
        "french": "Accomplissez la prière, acquittez la zakat et inclinez-vous avec ceux qui s'inclinent.",
        "word_analysis": [
            {
                "word": "وَأَقِيمُوا",
                "type": "فعل أمر",
                "role": "verbe impératif (forme IV)",
                "french": "accomplissez / établissez",
                "note": "Racine ق-و-م ; forme IV تُقِيمُ → impératif أَقِيمُوا"
            },
            {
                "word": "الصَّلَاةَ",
                "type": "مصدر / مفعول به",
                "role": "objet direct du verbe أقيموا",
                "french": "la prière",
                "note": "Masdar de صَلَّى, porte la fatḥa car complément d'objet ; article défini ال"
            },
            {
                "word": "الزَّكَاةَ",
                "type": "مصدر / مفعول به",
                "role": "objet direct du verbe آتوا",
                "french": "la zakat (l'aumône légale)",
                "note": "Masdar de زَكَا (purifier), même construction que الصلاة"
            },
            {
                "word": "الرَّاكِعِينَ",
                "type": "اسم فاعل (جمع)",
                "role": "complément de مع (préposition)",
                "french": "ceux qui s'inclinent",
                "note": "Participe actif pluriel, non masdar — contraste utile avec الصلاة et الزكاة"
            }
        ]
    },
    "exercises": [
        {
            "id": "ex23-1",
            "type": "classify",
            "instruction": "Classifiez chaque mot : est-ce un مصدر (nom verbal), un فعل (verbe) ou un اسم فاعل (participe actif) ?",
            "words": [
                {
                    "arabic": "كِتَابَةٌ",
                    "correct": "مصدر",
                    "options": [
                        "مصدر",
                        "فعل",
                        "اسم فاعل"
                    ]
                },
                {
                    "arabic": "يَكْتُبُ",
                    "correct": "فعل",
                    "options": [
                        "مصدر",
                        "فعل",
                        "اسم فاعل"
                    ]
                },
                {
                    "arabic": "كَاتِبٌ",
                    "correct": "اسم فاعل",
                    "options": [
                        "مصدر",
                        "فعل",
                        "اسم فاعل"
                    ]
                },
                {
                    "arabic": "إِقَامَةٌ",
                    "correct": "مصدر",
                    "options": [
                        "مصدر",
                        "فعل",
                        "اسم فاعل"
                    ]
                }
            ]
        },
        {
            "id": "ex23-2",
            "type": "highlight",
            "instruction": "Dans la phrase suivante, cliquez sur le(s) mot(s) qui sont des مصادر (noms verbaux).",
            "arabic": "إِنَّ إِقَامَةَ الصَّلَاةِ وَتِلَاوَةَ الْقُرْآنِ مِنْ أَفْضَلِ الْأَعْمَالِ",
            "highlight_words": [
                "إِقَامَةَ",
                "تِلَاوَةَ",
                "الصَّلَاةِ",
                "الْقُرْآنِ",
                "أَفْضَلِ",
                "الْأَعْمَالِ"
            ],
            "correct_words": [
                "إِقَامَةَ",
                "تِلَاوَةَ"
            ],
            "feedback_correct": "Excellent ! إقامة (accomplissement) et تلاوة (récitation) sont bien les deux masdar de la phrase, tous deux en position d'objet après إنّ.",
            "feedback_wrong": "Attention : الصلاة et القرآن sont des noms ordinaires (compléments du masdar en إضافة), pas des masdar. Cherchez les noms qui expriment une action."
        }
    ],
    "summary": {
        "table": [
            {
                "type": "Masdar (nom verbal)",
                "signal": "Exprime l'action comme un nom ; porte tanwîn ou ال ; déclinable",
                "example": "صَلَاةٌ — الصَّلَاةُ"
            },
            {
                "type": "Masdar sujet (مبتدأ / فاعل)",
                "signal": "Porte la ḍamma (-u) ; souvent en début de phrase",
                "example": "إِقَامَةُ الصَّلَاةِ وَاجِبَةٌ"
            },
            {
                "type": "Masdar objet (مفعول به)",
                "signal": "Porte la fatḥa (-a) ; suit le verbe transitif",
                "example": "أَقِيمُوا الصَّلَاةَ"
            }
        ],
        "rule": "Le مصدر est l'action substantivée : il hérite la racine du verbe mais se comporte comme un nom ordinaire, occupant toutes les fonctions syntaxiques (sujet, objet, complément prépositionnel). Reconnaître ses patterns (فَعْلٌ، فُعُولٌ، فِعَالَةٌ، إِفْعَالٌ…) est clé pour comprendre le Coran, car des termes fondamentaux comme الصَّلَاة، الزَّكَاة، الإِيمَان et الإِسْلَام sont tous des مصادر."
    },
    "unlocks_lesson_id": 24
}
  , {
    "id": 24,
    "level": 3,
    "title": "Les formes verbales augmentees",
    "arabic_title": "أبنية الأفعال الزائدة",
    "duration_minutes": 8,
    "prerequisite_lesson_id": 23,
    "hook": {
        "question": "Pourquoi un même verbe peut-il exprimer des sens si différents selon sa forme ?",
        "insight": "En arabe coranique, ajouter des lettres à une racine trilittère transforme radicalement son sens : la forme II intensifie, la III implique une réciprocité, la IV rend transitif, la V réfléchit la II, la X demande ou s'approprie. Maîtriser ces formes, c'est décupler sa compréhension du Coran."
    },
    "concepts": [
        {
            "id": "forme-II-taf-il",
            "arabic_term": "فَعَّلَ",
            "french_name": "Forme II – Taf'īl (intensification / causatif)",
            "definition": "Obtenue en doublant la deuxième radicale (تشديد). Elle exprime soit l'intensification de l'action de base, soit un sens causatif (faire faire quelque chose à quelqu'un). C'est l'une des formes les plus fréquentes dans le Coran.",
            "signals": [
                "shadda sur la 2e radicale",
                "préfixe مُ- au participe : مُفَعِّل",
                "masdar : تَفْعِيل"
            ],
            "color": "#4A90D9",
            "examples": [
                {
                    "arabic": "كَذَّبَ",
                    "french": "traiter de menteur (intensif de كَذَبَ : mentir)",
                    "note": "Forme II – l'intensité du déni est marquée par la shadda"
                },
                {
                    "arabic": "نَزَّلَ",
                    "french": "faire descendre progressivement (causatif de نَزَلَ : descendre)",
                    "note": "Implique une révélation graduelle, très employé pour le Coran"
                },
                {
                    "arabic": "عَلَّمَ",
                    "french": "enseigner (causatif de عَلِمَ : savoir)",
                    "note": "عَلَّمَ الْإِنسَانَ مَا لَمْ يَعْلَمْ – Al-'Alaq 96:5"
                }
            ]
        },
        {
            "id": "forme-X-istif-al",
            "arabic_term": "اسْتَفْعَلَ",
            "french_name": "Forme X – Istif'āl (demande / appropriation)",
            "definition": "Formée avec le préfixe اسْتَ- ajouté à la racine. Elle exprime principalement la demande ou la recherche d'une qualité (demander à quelqu'un de faire), ou l'appropriation/considération d'un état. Elle est reconnaissable immédiatement à son préfixe caractéristique.",
            "signals": [
                "préfixe اسْتَ- au passé",
                "préfixe يَسْتَ- au présent",
                "masdar : اسْتِفْعَال"
            ],
            "color": "#E8A838",
            "examples": [
                {
                    "arabic": "اسْتَغْفَرَ",
                    "french": "demander le pardon (de غَفَرَ : pardonner)",
                    "note": "رَبَّنَا اغْفِرْ لَنَا → اسْتَغْفَرَ : solliciter l'effacement des fautes"
                },
                {
                    "arabic": "اسْتَعَانَ",
                    "french": "implorer l'aide / chercher le secours (de عَانَ : aider)",
                    "note": "إِيَّاكَ نَسْتَعِينُ – Al-Fātiḥa 1:5, verbe à la 1re personne du pluriel"
                },
                {
                    "arabic": "اسْتَكْبَرَ",
                    "french": "s'estimer grand / être arrogant (de كَبُرَ : être grand)",
                    "note": "Sens d'appropriation : se considérer soi-même comme grand"
                }
            ]
        }
    ],
    "quran_example": {
        "surah": "Al-Fātiḥa (الفاتحة)",
        "verse_number": 5,
        "arabic": "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ",
        "french": "C'est Toi seul que nous adorons et c'est Toi seul dont nous implorons le secours.",
        "word_analysis": [
            {
                "word": "إِيَّاكَ",
                "type": "pronom séparé objet",
                "role": "objet d'insistance antéposé (restriction)",
                "french": "Toi seul",
                "note": "Antéposition pour exprimer l'exclusivité totale de l'adoration"
            },
            {
                "word": "نَعْبُدُ",
                "type": "verbe forme I – مضارع",
                "role": "prédicat principal",
                "french": "nous adorons",
                "note": "Racine ع-ب-د, forme de base, 1re personne du pluriel"
            },
            {
                "word": "نَسْتَعِينُ",
                "type": "verbe forme X – مضارع",
                "role": "second prédicat",
                "french": "nous implorons le secours",
                "note": "Forme X : نَسْتَ + عِين – demande active du secours divin, racine ع-و-ن"
            }
        ]
    },
    "exercises": [
        {
            "id": "ex24-1",
            "type": "classify",
            "instruction": "Identifiez la forme verbale augmentée (II ou X) de chacun des verbes suivants en observant leurs indices morphologiques.",
            "words": [
                {
                    "arabic": "اسْتَغْفَرَ",
                    "correct": "Forme X",
                    "options": [
                        "Forme I",
                        "Forme II",
                        "Forme X"
                    ]
                },
                {
                    "arabic": "كَذَّبَ",
                    "correct": "Forme II",
                    "options": [
                        "Forme I",
                        "Forme II",
                        "Forme X"
                    ]
                },
                {
                    "arabic": "يَسْتَكْبِرُونَ",
                    "correct": "Forme X",
                    "options": [
                        "Forme II",
                        "Forme IV",
                        "Forme X"
                    ]
                },
                {
                    "arabic": "عَلَّمَ",
                    "correct": "Forme II",
                    "options": [
                        "Forme I",
                        "Forme II",
                        "Forme X"
                    ]
                }
            ]
        },
        {
            "id": "ex24-2",
            "type": "highlight",
            "instruction": "Dans le verset suivant, identifiez et cliquez sur le(s) verbe(s) de forme X.",
            "arabic": "رَبَّنَا اغْفِرْ لَنَا وَلِإِخْوَانِنَا وَلَا تَجْعَلْ فِي قُلُوبِنَا غِلًّا — وَقَالُوا اسْتَغْفِرُوا رَبَّكُمْ",
            "highlight_words": [
                "اغْفِرْ",
                "تَجْعَلْ",
                "اسْتَغْفِرُوا"
            ],
            "correct_words": [
                "اسْتَغْفِرُوا"
            ],
            "feedback_correct": "Excellent ! اسْتَغْفِرُوا est bien la forme X (imperatif pluriel) : le préfixe اسْتَ- est la signature de cette forme.",
            "feedback_wrong": "Attention : اغْفِرْ est la forme I à l'impératif (pardonner), et تَجْعَلْ est la forme I au présent négatif. Seul اسْتَغْفِرُوا porte le préfixe اسْتَ- caractéristique de la forme X."
        }
    ],
    "summary": {
        "table": [
            {
                "type": "Forme II – فَعَّلَ",
                "signal": "Shadda sur la 2e radicale",
                "example": "عَلَّمَ (enseigner) / نَزَّلَ (faire descendre)"
            },
            {
                "type": "Forme III – فَاعَلَ",
                "signal": "Alif long après la 1re radicale",
                "example": "قَاتَلَ (combattre mutuellement)"
            },
            {
                "type": "Forme IV – أَفْعَلَ",
                "signal": "Hamza أَ- initial au passé",
                "example": "أَسْلَمَ (se soumettre / embrasser l'islam)"
            },
            {
                "type": "Forme V – تَفَعَّلَ",
                "signal": "Préfixe تَ- + shadda sur la 2e radicale",
                "example": "تَكَبَّرَ (s'enorgueillir)"
            },
            {
                "type": "Forme X – اسْتَفْعَلَ",
                "signal": "Préfixe اسْتَ- au passé / يَسْتَ- au présent",
                "example": "اسْتَعَانَ (implorer le secours)"
            }
        ],
        "rule": "Les formes verbales augmentées ajoutent des lettres à la racine trilittère pour moduler le sens : la Forme II intensifie ou rend causatif (shadda), la Forme III exprime la réciprocité (alif), la Forme IV rend transitif (hamza initiale), la Forme V réfléchit la II (préfixe تَ-), et la Forme X exprime la demande ou l'appropriation (préfixe اسْتَ-). Reconnaître ces préfixes et infixes morphologiques permet de déduire le sens d'un verbe même inconnu."
    },
    "unlocks_lesson_id": 25
}
  , {
    "id": 25,
    "level": 3,
    "title": "الحال — La circonstancielle",
    "arabic_title": "الحال",
    "duration_minutes": 8,
    "prerequisite_lesson_id": 24,
    "hook": {
        "question": "Quelle différence y a-t-il entre 'L'homme est arrivé' et 'L'homme est arrivé en courant' ? En arabe, comment exprime-t-on cet état qui accompagne l'action ?",
        "insight": "Le الحال (circonstancielle d'état) est le mot ou la proposition qui décrit COMMENT ou DANS QUEL ÉTAT se trouve le sujet ou l'objet au moment de l'action. C'est la réponse à la question 'كَيْفَ ؟' (comment ?), et il est toujours indéfini et au cas accusatif (مَنْصُوب)."
    },
    "concepts": [
        {
            "id": "hal_mufrad",
            "arabic_term": "الحَالُ الْمُفْرَدُ",
            "french_name": "La circonstancielle nominale (mot unique)",
            "definition": "Un nom dérivé (souvent un participe actif) indéfini et au cas accusatif, qui décrit l'état du sujet (صَاحِبُ الحَال) au moment de l'action. Il s'accorde en genre avec son référent.",
            "signals": [
                "Nom indéfini منصوب (tanwîn fatḥa : ـًا) après un verbe ou une proposition complète",
                "Répond à la question كَيْفَ جَاءَ ؟ (Comment est-il venu ?) ou كَيْفَ كَانَ ؟"
            ],
            "color": "#8B1A1A",
            "examples": [
                {
                    "arabic": "جَاءَ الرَّجُلُ مُسْرِعًا",
                    "french": "L'homme est venu en se hâtant",
                    "note": "مُسْرِعًا = حال منصوب، يصف حالة الرجل أثناء المجيء"
                },
                {
                    "arabic": "جَلَسَتِ الطَّالِبَةُ صَامِتَةً",
                    "french": "L'étudiante s'est assise en silence",
                    "note": "صَامِتَةً = حال مؤنث لأن صاحب الحال مؤنث (الطالبة)"
                },
                {
                    "arabic": "دَخَلَ الأَوْلَادُ فَرِحِينَ",
                    "french": "Les garçons sont entrés joyeusement",
                    "note": "فَرِحِينَ = حال جمع مذكر سالم منصوب بالياء"
                }
            ]
        },
        {
            "id": "hal_jumla",
            "arabic_term": "الحَالُ الْجُمْلَةُ",
            "french_name": "La circonstancielle propositionnelle",
            "definition": "Une proposition entière (verbale ou nominale) qui décrit l'état du référent au moment de l'action. La proposition nominale est obligatoirement introduite par un pronom de liaison (وَاو الحَال ou ضَمِير رَابِط).",
            "signals": [
                "Proposition nominale précédée du وَاو الحَال (wāw de l'état) — la virgule de l'état",
                "Proposition verbale dont le verbe s'accorde avec le référent (صَاحِب الحَال)"
            ],
            "color": "#B22222",
            "examples": [
                {
                    "arabic": "جَاءَ الرَّجُلُ وَهُوَ يَبْكِي",
                    "french": "L'homme est venu alors qu'il pleurait",
                    "note": "وَهُوَ يَبْكِي = جملة اسمية في محل نصب حال، الواو للحال، والضمير هو رابط"
                },
                {
                    "arabic": "دَخَلْتُ الْمَسْجِدَ وَالنَّاسُ يُصَلُّونَ",
                    "french": "Je suis entré dans la mosquée pendant que les gens priaient",
                    "note": "الجملة الاسمية بعد واو الحال تصف الحال العامة لحظة الدخول"
                },
                {
                    "arabic": "خَرَجَ زَيْدٌ يَرْكُضُ",
                    "french": "Zayd est sorti en courant",
                    "note": "يَرْكُضُ = جملة فعلية في محل نصب حال، بلا واو لأنها فعلية"
                }
            ]
        }
    ],
    "quran_example": {
        "surah": "Al-Baqara",
        "verse_number": 286,
        "arabic": "وَجَاءُوا أَبَاهُمْ عِشَاءً يَبْكُونَ",
        "french": "Et ils vinrent trouver leur père le soir, en pleurant.",
        "word_analysis": [
            {
                "word": "وَجَاءُوا",
                "type": "verb",
                "role": "فِعْلٌ مَاضٍ + وَاو الجَمَاعَة",
                "french": "et ils vinrent",
                "note": "الفعل الرئيسي في الجملة، والواو فاعل"
            },
            {
                "word": "أَبَاهُمْ",
                "type": "noun",
                "role": "مَفْعُولٌ بِهِ مَنْصُوب",
                "french": "leur père",
                "note": "منصوب بالألف لأنه من الأسماء الستة"
            },
            {
                "word": "عِشَاءً",
                "type": "noun",
                "role": "ظَرْفُ زَمَانٍ مَنْصُوب",
                "french": "le soir",
                "note": "ظرف زمان يحدد وقت المجيء، وليس حالاً"
            },
            {
                "word": "يَبْكُونَ",
                "type": "verb",
                "role": "جُمْلَةٌ فِعْلِيَّةٌ فِي مَحَلِّ نَصْبٍ حَال",
                "french": "en pleurant",
                "note": "هذه هي الحَال الجملة — تصف حال الفاعلين (واو الجماعة) أثناء مجيئهم، فعلية بلا واو"
            }
        ]
    },
    "exercises": [
        {
            "id": "ex25-1",
            "type": "classify",
            "instruction": "Identifie le rôle grammatical de chaque mot en gras. Est-ce un الحَالُ الْمُفْرَدُ, un الحَالُ الْجُمْلَةُ, ou autre chose (ظَرْف / مَفْعُول بِهِ) ?",
            "words": [
                {
                    "arabic": "جَاءَ الرَّسُولُ **مُبَشِّرًا**",
                    "correct": "الحَالُ الْمُفْرَد",
                    "options": [
                        "الحَالُ الْمُفْرَد",
                        "الحَالُ الْجُمْلَة",
                        "مَفْعُول بِهِ",
                        "ظَرْف"
                    ]
                },
                {
                    "arabic": "دَخَلَ الْمُؤْمِنُونَ **وَهُمْ خَاشِعُونَ**",
                    "correct": "الحَالُ الْجُمْلَة",
                    "options": [
                        "الحَالُ الْمُفْرَد",
                        "الحَالُ الْجُمْلَة",
                        "خَبَر",
                        "نَعْت"
                    ]
                },
                {
                    "arabic": "سَمِعْتُ الْقُرْآنَ **مَسْرُورًا**",
                    "correct": "الحَالُ الْمُفْرَد",
                    "options": [
                        "الحَالُ الْمُفْرَد",
                        "الحَالُ الْجُمْلَة",
                        "نَعْت",
                        "مَفْعُول بِهِ"
                    ]
                },
                {
                    "arabic": "خَرَجَ النَّبِيُّ **يَتْلُو الْقُرْآنَ**",
                    "correct": "الحَالُ الْجُمْلَة",
                    "options": [
                        "الحَالُ الْمُفْرَد",
                        "الحَالُ الْجُمْلَة",
                        "صِفَة",
                        "ظَرْف"
                    ]
                },
                {
                    "arabic": "رَأَيْتُ الْهِلَالَ **لَيْلَةً**",
                    "correct": "ظَرْف",
                    "options": [
                        "الحَالُ الْمُفْرَد",
                        "الحَالُ الْجُمْلَة",
                        "ظَرْف",
                        "مَفْعُول بِهِ"
                    ]
                }
            ]
        },
        {
            "id": "ex25-2",
            "type": "highlight",
            "instruction": "Dans ce verset coranique (Al-Fajr 89:23), identifie le الحَالُ — clique sur le mot ou groupe de mots qui décrit l'état du sujet au moment de l'action :",
            "arabic": "وَجِيءَ يَوْمَئِذٍ بِجَهَنَّمَ يَوْمَئِذٍ يَتَذَكَّرُ الإِنسَانُ وَأَنَّى لَهُ الذِّكْرَى",
            "highlight_words": [
                "يَتَذَكَّرُ الإِنسَانُ",
                "وَأَنَّى لَهُ الذِّكْرَى",
                "يَوْمَئِذٍ",
                "بِجَهَنَّمَ"
            ],
            "correct_words": [
                "يَتَذَكَّرُ الإِنسَانُ"
            ],
            "feedback_correct": "✓ Exact ! يَتَذَكَّرُ الإِنسَانُ est une جملة فعلية في محل نصب حال — elle décrit l'état de l'être humain au moment où la Géhenne est amenée : il se souvient, mais trop tard.",
            "feedback_wrong": "Indice : cherche la proposition qui répond à كَيْفَ كَانَ الإِنْسَانُ حِينَ جِيءَ بِجَهَنَّمَ ؟ — c'est une proposition verbale sans وَاو الحَال."
        }
    ],
    "summary": {
        "table": [
            {
                "type": "الحَالُ الْمُفْرَدُ",
                "signal": "Nom dérivé indéfini, منصوب (ـًا / ـِينَ / ـَةً), après verbe ou phrase complète",
                "example": "جَاءَ مُسْرِعًا"
            },
            {
                "type": "الحَالُ الْجُمْلَةُ (اسمية)",
                "signal": "Proposition nominale après وَاو الحَال + ضَمِير رَابِط obligatoire",
                "example": "جَاءَ وَهُوَ يَبْكِي"
            },
            {
                "type": "الحَالُ الْجُمْلَةُ (فعلية)",
                "signal": "Proposition verbale directement après le verbe, sans واو, le verbe s'accorde avec صَاحِب الحَال",
                "example": "خَرَجَ يَرْكُضُ"
            }
        ],
        "rule": "الحَال répond toujours à كَيْفَ ؟, est toujours مَنْصُوب et indéfini (نَكِرَة) — s'il est un mot, il porte le tanwîn fatḥa ; s'il est une proposition, la proposition entière est 'en position de nasb' (فِي مَحَلِّ نَصْبٍ حَال)."
    },
    "unlocks_lesson_id": 26
}
  , {
    "id": 26,
    "level": 3,
    "title": "Les conditions",
    "arabic_title": "أسلوب الشرط",
    "duration_minutes": 8,
    "prerequisite_lesson_id": 25,
    "hook": {
        "question": "Comment dit-on en arabe 'Qui fait le bien, il le verra' ?",
        "insight": "L'arabe coranique possède une structure conditionnelle élégante : une particule de condition + un verbe au jussif dans la proposition 'si', et un autre verbe au jussif dans la réponse. Cette symétrie grammaticale est au cœur de nombreux versets coraniques."
    },
    "concepts": [
        {
            "id": "particules-condition",
            "arabic_term": "أَدَوَاتُ الشَّرْطِ",
            "french_name": "Les particules de condition",
            "definition": "Ce sont les mots qui introduisent une phrase conditionnelle (si / quiconque / ce que). Les principales sont : إِنْ (si – condition générale), مَنْ (quiconque – pour les personnes), مَا (ce que / quoi que – pour les choses).",
            "signals": [
                "إِنْ",
                "مَنْ",
                "مَا"
            ],
            "color": "#4A90D9",
            "examples": [
                {
                    "arabic": "إِنْ تَعْمَلْ خَيْرًا تُجْزَ",
                    "french": "Si tu fais le bien, tu seras récompensé",
                    "note": "إِنْ introduit une condition générale, les deux verbes sont au jussif"
                },
                {
                    "arabic": "مَنْ يَعْمَلْ خَيْرًا يَرَهُ",
                    "french": "Quiconque fait le bien, il le verra",
                    "note": "مَنْ désigne une personne ; c'est l'exemple coranique de la leçon"
                },
                {
                    "arabic": "مَا تَفْعَلْ يُعْلَمْ",
                    "french": "Ce que tu fais sera su",
                    "note": "مَا s'utilise pour les choses et les actions non personnifiées"
                }
            ]
        },
        {
            "id": "verbe-jussif-condition",
            "arabic_term": "الْفِعْلُ الْمَجْزُومُ فِي الشَّرْطِ",
            "french_name": "Le verbe au jussif dans la condition",
            "definition": "Après une particule de condition, les deux verbes (la proposition conditionnelle فِعْلُ الشَّرْطِ et la réponse جَوَابُ الشَّرْطِ) sont mis au mode jussif (مَجْزُوم). Le jussif se forme en supprimant la voyelle finale (سكون) ou en supprimant le نْ des formes longues.",
            "signals": [
                "سكون على آخر الفعل",
                "حذف حرف العلة",
                "حذف النون"
            ],
            "color": "#E8A838",
            "examples": [
                {
                    "arabic": "مَنْ يَعْمَلْ ← يَعْمَلُ (مرفوع) → يَعْمَلْ (مجزوم)",
                    "french": "يَعْمَلُ (indicatif) devient يَعْمَلْ (jussif)",
                    "note": "La damma finale disparaît, remplacée par un سكون"
                },
                {
                    "arabic": "مَنْ يَعْمَلْ مِثْقَالَ ذَرَّةٍ خَيْرًا يَرَهُ",
                    "french": "Quiconque fait le poids d'un atome de bien, il le verra",
                    "note": "يَرَهُ est aussi au jussif : يَرَى → يَرَ (suppression du ى final)"
                },
                {
                    "arabic": "إِنْ تَتَّقُوا اللهَ يَجْعَلْ لَكُمْ فُرْقَانًا",
                    "french": "Si vous craignez Allah, Il vous accordera un discernement",
                    "note": "Forme plurielle : تَتَّقُونَ → تَتَّقُوا (suppression du نْ = jussif)"
                }
            ]
        }
    ],
    "quran_example": {
        "surah": "Az-Zalzala",
        "verse_number": 7,
        "arabic": "فَمَنْ يَعْمَلْ مِثْقَالَ ذَرَّةٍ خَيْرًا يَرَهُ",
        "french": "Quiconque fait le poids d'un atome de bien, il le verra",
        "word_analysis": [
            {
                "word": "فَمَنْ",
                "type": "particule de condition",
                "role": "أداة الشرط",
                "french": "quiconque (donc)",
                "note": "فَ est une conjonction ; مَنْ est la particule de condition pour les personnes"
            },
            {
                "word": "يَعْمَلْ",
                "type": "verbe jussif",
                "role": "فعل الشرط",
                "french": "fait / accomplisse",
                "note": "Verbe au jussif : يَعْمَلُ → يَعْمَلْ (signe : سكون)"
            },
            {
                "word": "مِثْقَالَ ذَرَّةٍ خَيْرًا",
                "type": "complément d'objet",
                "role": "مفعول به",
                "french": "le poids d'un atome de bien",
                "note": "Complément de يَعْمَلْ, avec إضافة (مثقال ذرة)"
            },
            {
                "word": "يَرَهُ",
                "type": "verbe jussif",
                "role": "جواب الشرط",
                "french": "il le verra",
                "note": "Réponse de la condition, au jussif : يَرَى → يَرَ (suppression du ى) + هُ pronom suffixe"
            }
        ]
    },
    "exercises": [
        {
            "id": "ex26-1",
            "type": "classify",
            "instruction": "Classifiez chaque mot souligné : est-ce une particule de condition (أداة شرط), le verbe de la condition (فعل الشرط) ou la réponse de la condition (جواب الشرط) ?",
            "words": [
                {
                    "arabic": "مَنْ",
                    "correct": "أداة شرط",
                    "options": [
                        "أداة شرط",
                        "فعل الشرط",
                        "جواب الشرط"
                    ]
                },
                {
                    "arabic": "يَعْمَلْ (dans مَنْ يَعْمَلْ خَيْرًا يَرَهُ)",
                    "correct": "فعل الشرط",
                    "options": [
                        "أداة شرط",
                        "فعل الشرط",
                        "جواب الشرط"
                    ]
                },
                {
                    "arabic": "يَرَهُ (dans مَنْ يَعْمَلْ خَيْرًا يَرَهُ)",
                    "correct": "جواب الشرط",
                    "options": [
                        "أداة شرط",
                        "فعل الشرط",
                        "جواب الشرط"
                    ]
                },
                {
                    "arabic": "إِنْ",
                    "correct": "أداة شرط",
                    "options": [
                        "أداة شرط",
                        "فعل الشرط",
                        "جواب الشرط"
                    ]
                }
            ]
        },
        {
            "id": "ex26-2",
            "type": "highlight",
            "instruction": "Dans le verset suivant, cliquez sur les deux verbes qui sont au mode jussif (مجزوم) à cause de la particule de condition.",
            "arabic": "إِنْ تَنْصُرُوا اللهَ يَنْصُرْكُمْ وَيُثَبِّتْ أَقْدَامَكُمْ",
            "highlight_words": [
                "تَنْصُرُوا",
                "يَنْصُرْكُمْ",
                "وَيُثَبِّتْ",
                "اللهَ",
                "أَقْدَامَكُمْ"
            ],
            "correct_words": [
                "تَنْصُرُوا",
                "يَنْصُرْكُمْ"
            ],
            "feedback_correct": "Excellent ! تَنْصُرُوا est le فعل الشرط (jussif par suppression du نْ) et يَنْصُرْكُمْ est le جواب الشرط (jussif par سكون). Sens : 'Si vous soutenez Allah, Il vous soutiendra.' (Muhammad : 7)",
            "feedback_wrong": "Réessayez ! Cherchez les verbes dont la voyelle finale a disparu ou dont le نْ a été supprimé suite à إِنْ."
        }
    ],
    "summary": {
        "table": [
            {
                "type": "Condition générale",
                "signal": "إِنْ",
                "example": "إِنْ تَشْكُرُوا يَزِدْكُمْ – Si vous êtes reconnaissants, Il vous accordera plus"
            },
            {
                "type": "Condition personnelle",
                "signal": "مَنْ",
                "example": "مَنْ يَعْمَلْ خَيْرًا يَرَهُ – Quiconque fait le bien, il le verra"
            },
            {
                "type": "Condition sur les choses",
                "signal": "مَا",
                "example": "مَا تُنْفِقُوا مِنْ خَيْرٍ يُوَفَّ إِلَيْكُمْ – Ce que vous dépensez de bien vous sera rendu"
            }
        ],
        "rule": "L'أسلوب الشرط (style conditionnel) se construit en trois éléments : (1) une particule de condition (إِنْ / مَنْ / مَا), (2) le فعل الشرط au jussif, (3) le جواب الشرط au jussif. Les deux verbes perdent leur voyelle finale (سكون) ou leur نْ pour indiquer le mode jussif. Cette structure est omniprésente dans le Coran pour énoncer lois divines et promesses."
    },
    "unlocks_lesson_id": 27
}
  , {
    "id": 27,
    "level": 3,
    "title": "L'analyse syntaxique complete",
    "arabic_title": "الإعراب الكامل",
    "duration_minutes": 8,
    "prerequisite_lesson_id": 26,
    "hook": {
        "question": "Comment analyser chaque mot d'un verset coranique comme le faisaient les grands grammairiens arabes ?",
        "insight": "L'إعراب complet suit toujours la même formule magique : TYPE du mot → FONCTION syntaxique → MARQUE visible ou estimée. Maîtriser cette méthode, c'est lire le Coran avec la précision d'un savant."
    },
    "concepts": [
        {
            "id": "iraab-methode",
            "arabic_term": "الإعراب",
            "french_name": "Méthode d'analyse syntaxique",
            "definition": "L'إعراب est l'art de décrire chaque mot selon trois axes : sa nature grammaticale (nom/verbe/particule), sa fonction dans la phrase (sujet, complément, etc.) et la marque qui l'exprime (ḍamma, fatḥa, kasra ou sukūn).",
            "signals": [
                "Identifier d'abord la nature : اسم / فعل / حرف",
                "Déterminer ensuite la fonction : مبتدأ، خبر، فاعل، مفعول...",
                "Préciser enfin la marque : مرفوع بالضمة، منصوب بالفتحة، مجرور بالكسرة"
            ],
            "color": "#2E86AB",
            "examples": [
                {
                    "arabic": "اللهُ",
                    "french": "Allah",
                    "note": "اسم → مبتدأ → مرفوع بالضمة الظاهرة"
                },
                {
                    "arabic": "الكتابَ",
                    "french": "le Livre",
                    "note": "اسم → مفعول به → منصوب بالفتحة الظاهرة"
                },
                {
                    "arabic": "يَعْلَمُ",
                    "french": "Il sait",
                    "note": "فعل مضارع → خبر (في جملة فعلية) → مرفوع بالضمة الظاهرة"
                }
            ]
        },
        {
            "id": "iraab-taqdir",
            "arabic_term": "الإعراب التقديري",
            "french_name": "Marque estimée (non visible)",
            "definition": "Parfois la marque d'إعراب ne peut pas s'écrire sur le mot : soit à cause d'un alif (تعذر), soit à cause d'un yā' ou wāw (ثقل). On dit alors que la marque est مقدرة (estimée, sous-entendue) et non ظاهرة (apparente).",
            "signals": [
                "Mot terminant par alif (ى / ا) → marque تعذراً (impossible à écrire)",
                "Mot terminant par yā' (ي) → marque مقدرة ثقلاً (lourde à prononcer)",
                "Mot terminant par wāw (و) → idem cas du yā'"
            ],
            "color": "#E84855",
            "examples": [
                {
                    "arabic": "الهُدى",
                    "french": "la guidance",
                    "note": "مرفوع بضمة مقدرة على الألف منع من ظهورها التعذر"
                },
                {
                    "arabic": "القاضي",
                    "french": "le juge",
                    "note": "مرفوع بضمة مقدرة على الياء منع من ظهورها الثقل"
                },
                {
                    "arabic": "فتىً",
                    "french": "un jeune homme",
                    "note": "منصوب بفتحة مقدرة على الألف منع من ظهورها التعذر"
                }
            ]
        }
    ],
    "quran_example": {
        "surah": "Al-Fātiḥa",
        "verse_number": 2,
        "arabic": "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
        "french": "La louange appartient à Allah, Seigneur des mondes.",
        "word_analysis": [
            {
                "word": "الْحَمْدُ",
                "type": "اسم (nom défini)",
                "role": "مبتدأ — sujet",
                "french": "La louange",
                "note": "مرفوع بالضمة الظاهرة على آخره"
            },
            {
                "word": "لِلَّهِ",
                "type": "حرف جر + اسم مجرور",
                "role": "شبه جملة — خبر (prédicat nominal)",
                "french": "appartient à Allah",
                "note": "اسم الجلالة مجرور بالكسرة الظاهرة، والجار والمجرور خبر المبتدأ"
            },
            {
                "word": "رَبِّ",
                "type": "اسم (nom)",
                "role": "نعت أو بدل — épithète/apposition",
                "french": "Seigneur",
                "note": "مجرور بالكسرة الظاهرة تبعاً للفظ الجلالة"
            },
            {
                "word": "الْعَالَمِينَ",
                "type": "اسم جمع مذكر سالم",
                "role": "مضاف إليه — complément de nom",
                "french": "des mondes",
                "note": "مجرور بالياء لأنه جمع مذكر سالم، وعلامة جره الياء نيابةً عن الكسرة"
            }
        ]
    },
    "exercises": [
        {
            "id": "ex27-1",
            "type": "classify",
            "instruction": "Pour chaque mot souligné, choisissez la description d'إعراب correcte (type → fonction → marque).",
            "words": [
                {
                    "arabic": "مُحَمَّدٌ",
                    "correct": "اسم → مبتدأ → مرفوع بالضمة الظاهرة",
                    "options": [
                        "اسم → مبتدأ → مرفوع بالضمة الظاهرة",
                        "اسم → مفعول به → منصوب بالفتحة الظاهرة",
                        "فعل → فاعل → مرفوع بالضمة"
                    ]
                },
                {
                    "arabic": "الهُدى",
                    "correct": "اسم → خبر → مرفوع بضمة مقدرة على الألف",
                    "options": [
                        "اسم → مفعول به → منصوب بالفتحة الظاهرة",
                        "اسم → خبر → مرفوع بضمة مقدرة على الألف",
                        "حرف → لا محل له → —"
                    ]
                },
                {
                    "arabic": "كَتَبَ",
                    "correct": "فعل ماضٍ → لا محل له من الإعراب → مبني على الفتح",
                    "options": [
                        "اسم → فاعل → مرفوع بالضمة",
                        "فعل ماضٍ → لا محل له من الإعراب → مبني على الفتح",
                        "فعل مضارع → خبر → مرفوع بالضمة"
                    ]
                }
            ]
        },
        {
            "id": "ex27-2",
            "type": "highlight",
            "instruction": "Dans ce verset, cliquez sur le(s) mot(s) dont la marque d'إعراب est مقدرة (estimée, non visible).",
            "arabic": "إِنَّ الْمُتَّقِينَ فِي جَنَّاتٍ وَنَهَرٍ",
            "highlight_words": [
                "الْمُتَّقِينَ",
                "جَنَّاتٍ",
                "نَهَرٍ"
            ],
            "correct_words": [],
            "feedback_correct": "Excellent ! Dans ce verset, toutes les marques sont apparentes (ظاهرة) : aucun mot ne se termine par alif, yā' ou wāw nu. Il n'y a donc aucune marque مقدرة ici.",
            "feedback_wrong": "Attention : cherchez les mots terminant par alif (ى/ا) ou par yā' (ي) non suivi de voyelle — ce sont eux qui portent des marques estimées مقدرة. Ici toutes les marques sont visibles."
        }
    ],
    "summary": {
        "table": [
            {
                "type": "اسم مرفوع",
                "signal": "ضمة ظاهرة أو مقدرة",
                "example": "الحَمْدُ — الهُدى"
            },
            {
                "type": "اسم منصوب",
                "signal": "فتحة ظاهرة أو مقدرة",
                "example": "الكتابَ — فتىً"
            },
            {
                "type": "اسم مجرور",
                "signal": "كسرة / ياء (جمع مذكر سالم & مثنى)",
                "example": "لِلَّهِ — الْعَالَمِينَ"
            },
            {
                "type": "فعل مضارع",
                "signal": "مرفوع بالضمة / منصوب بالفتحة / مجزوم بالسكون",
                "example": "يَعْلَمُ — لَمْ يَعْلَمْ"
            }
        ],
        "rule": "La formule d'إعراب complet est invariable : (1) نوع الكلمة : nom / verbe / particule → (2) وظيفتها النحوية : sujet, prédicat, complément… → (3) علامة إعرابها : marque apparente ظاهرة ou estimée مقدرة avec sa cause (تعذر / ثقل). Appliquer cette triple grille sur chaque mot garantit une analyse rigoureuse de tout texte coranique."
    },
    "unlocks_lesson_id": 28
}
  , {
    "id": 28,
    "level": 3,
    "title": "Revision Al-Fatiha",
    "arabic_title": "إعراب الفاتحة",
    "duration_minutes": 8,
    "prerequisite_lesson_id": 27,
    "hook": {
        "question": "Savez-vous analyser chaque mot de la Fatiha grammaticalement ?",
        "insight": "Al-Fatiha contient 29 mots qui illustrent à eux seuls les principaux cas grammaticaux de l'arabe coranique : nominatif, génitif et accusatif."
    },
    "concepts": [
        {
            "id": "marfou",
            "arabic_term": "مَرْفُوع",
            "french_name": "Nominatif (Marfou')",
            "definition": "Cas du sujet et de l'attribut. Marqué par la damma (ـُ) ou le waw (و) pour les pluriels sains masculins.",
            "signals": [
                "ضمة ـُ",
                "واو في الجمع",
                "ألف ونون في المثنى"
            ],
            "color": "#2E86AB",
            "examples": [
                {
                    "arabic": "الْحَمْدُ",
                    "french": "La louange (sujet)",
                    "note": "Damma sur le daal → sujet du nom mubtada'"
                },
                {
                    "arabic": "الرَّحِيمُ",
                    "french": "Le Très Miséricordieux (attribut)",
                    "note": "Damma finale → attribut (khabar) ou epithète marfou'e"
                },
                {
                    "arabic": "رَبُّ",
                    "french": "Seigneur (en apposition sujet)",
                    "note": "Damma sur ba' → badal ou na't marfou'"
                }
            ]
        },
        {
            "id": "majrour",
            "arabic_term": "مَجْرُور",
            "french_name": "Génitif (Majrour)",
            "definition": "Cas du complément du nom (idafa) et du complément de préposition. Marqué par la kasra (ـِ) ou le ya' (ي).",
            "signals": [
                "كسرة ـِ",
                "ياء في الجمع",
                "حرف الجر"
            ],
            "color": "#A23B72",
            "examples": [
                {
                    "arabic": "الْعَالَمِينَ",
                    "french": "Des mondes (après préposition)",
                    "note": "Kasra remplacée par ya' → majrour pluriel masculin sain"
                },
                {
                    "arabic": "الدِّينِ",
                    "french": "Du Jugement (complément du nom)",
                    "note": "Kasra sur noun → majrour dans l'idafa يَوْمِ الدِّينِ"
                },
                {
                    "arabic": "اللهِ",
                    "french": "D'Allah (après lettre de préposition)",
                    "note": "Kasra sur ha' → majrour après بِسْمِ"
                }
            ]
        }
    ],
    "quran_example": {
        "surah": "Al-Fatiha",
        "verse_number": 2,
        "arabic": "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
        "french": "Toute louange appartient à Allah, Seigneur des mondes.",
        "word_analysis": [
            {
                "word": "الْحَمْدُ",
                "type": "اسم مرفوع",
                "role": "مبتدأ",
                "french": "La louange – sujet",
                "note": "Damma visible → nominatif, mubtada'"
            },
            {
                "word": "لِلَّهِ",
                "type": "جار ومجرور",
                "role": "خبر",
                "french": "À Allah – prédicat (préposition + nom)",
                "note": "لِ préposition → اللهِ majrour avec kasra"
            },
            {
                "word": "رَبِّ",
                "type": "اسم مجرور",
                "role": "نعت / بدل",
                "french": "Seigneur – épithète en génitif",
                "note": "Kasra → majrour car suit اللهِ en idafa"
            },
            {
                "word": "الْعَالَمِينَ",
                "type": "اسم مجرور",
                "role": "مضاف إليه",
                "french": "Des mondes – complément du nom",
                "note": "Ya' + noun → pluriel masculin sain majrour"
            }
        ]
    },
    "exercises": [
        {
            "id": "ex28-1",
            "type": "classify",
            "instruction": "Identifiez le cas grammatical (إعراب) de chaque mot souligné dans la Fatiha.",
            "words": [
                {
                    "arabic": "الرَّحْمَنُ",
                    "correct": "مرفوع",
                    "options": [
                        "مرفوع",
                        "مجرور",
                        "منصوب"
                    ]
                },
                {
                    "arabic": "الدِّينِ",
                    "correct": "مجرور",
                    "options": [
                        "مرفوع",
                        "مجرور",
                        "منصوب"
                    ]
                },
                {
                    "arabic": "الْمُسْتَقِيمَ",
                    "correct": "منصوب",
                    "options": [
                        "مرفوع",
                        "مجرور",
                        "منصوب"
                    ]
                }
            ]
        },
        {
            "id": "ex28-2",
            "type": "highlight",
            "instruction": "Dans ce verset, touchez tous les mots au cas génitif (مجرور).",
            "arabic": "اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ",
            "highlight_words": [
                "الَّذِينَ",
                "عَلَيْهِمْ"
            ],
            "correct_words": [
                "الَّذِينَ",
                "عَلَيْهِمْ"
            ],
            "feedback_correct": "Excellent ! الَّذِينَ est majrour après صِرَاطَ (idafa), et هِمْ est majrour après عَلَى (préposition).",
            "feedback_wrong": "Attention : cherchez les mots après une préposition (حرف جر) ou en complément du nom (مضاف إليه)."
        }
    ],
    "summary": {
        "table": [
            {
                "type": "مرفوع (Nominatif)",
                "signal": "ضمة ـُ / واو",
                "example": "الْحَمْدُ، الرَّحِيمُ"
            },
            {
                "type": "مجرور (Génitif)",
                "signal": "كسرة ـِ / ياء",
                "example": "اللهِ، الْعَالَمِينَ"
            },
            {
                "type": "منصوب (Accusatif)",
                "signal": "فتحة ـَ / ألف",
                "example": "الصِّرَاطَ، الْمُسْتَقِيمَ"
            }
        ],
        "rule": "En arabe coranique, chaque mot porte un cas (إعراب) visible sur sa dernière lettre. Maîtriser les trois cas — nominatif (مرفوع), génitif (مجرور) et accusatif (منصوب) — permet de lire et comprendre la Fatiha avec précision grammaticale."
    },
    "unlocks_lesson_id": 29
}
  , {
    "id": 29,
    "level": 3,
    "title": "Revision sourates courtes",
    "arabic_title": "إعراب السور القصيرة",
    "duration_minutes": 8,
    "prerequisite_lesson_id": 28,
    "hook": {
        "question": "Savez-vous analyser grammaticalement chaque mot de Al-Ikhlas, Al-Falaq et Al-Nas ?",
        "insight": "Ces trois sourates courtes concentrent tous les concepts grammaticaux fondamentaux : marques du nominatif, du génitif, du cas direct, et structures de l'إضافة. Les maîtriser en إعراب, c'est confirmer sa maîtrise du niveau 3."
    },
    "concepts": [
        {
            "id": "marques-cas",
            "arabic_term": "علامات الإعراب",
            "french_name": "Marques des cas grammaticaux",
            "definition": "Chaque nom ou adjectif porte une voyelle finale (أو نون) indiquant sa fonction : ضمة pour le nominatif (مرفوع), فتحة pour l'accusatif (منصوب), كسرة pour le génitif (مجرور). Dans les sourates courtes, le génitif après حرف جر ou dans une إضافة est très fréquent.",
            "signals": [
                "ضمة ou تنوين ضم → مرفوع",
                "كسرة ou تنوين كسر → مجرور",
                "فتحة ou تنوين فتح → منصوب"
            ],
            "color": "#4A90D9",
            "examples": [
                {
                    "arabic": "اللَّهُ أَحَدٌ",
                    "french": "Allah est Un",
                    "note": "اللَّهُ : sujet مرفوع (ضمة) ; أَحَدٌ : attribut مرفوع (تنوين ضم)"
                },
                {
                    "arabic": "مِن شَرِّ مَا خَلَقَ",
                    "french": "contre le mal de ce qu'Il a créé",
                    "note": "شَرِّ : مجرور après مِن (كسرة) et premier terme d'une إضافة"
                },
                {
                    "arabic": "رَبِّ الْفَلَقِ",
                    "french": "Seigneur de l'aube",
                    "note": "رَبِّ : مجرور (كسرة) après مِن sous-entendu via البدل ; الْفَلَقِ : مجرور en إضافة"
                }
            ]
        },
        {
            "id": "idafa-sourates",
            "arabic_term": "الإضافة في السور القصيرة",
            "french_name": "La construction d'annexion dans les sourates courtes",
            "definition": "L'إضافة (annexion) relie deux noms : le premier (مضاف) perd son article et son تنوين, le second (مضاف إليه) est toujours مجرور. Ces sourates en regorgent : رَبِّ النَّاسِ, مَلِكِ النَّاسِ, إِلَٰهِ النَّاسِ forment trois إضافة consécutives dans Al-Nas.",
            "signals": [
                "Premier nom sans ال et sans تنوين → مضاف",
                "Deuxième nom avec كسرة ou تنوين كسر → مضاف إليه مجرور",
                "Chaîne possible de plusieurs إضافة successives"
            ],
            "color": "#E8A838",
            "examples": [
                {
                    "arabic": "رَبِّ النَّاسِ",
                    "french": "Seigneur des hommes",
                    "note": "رَبِّ : مضاف (مجرور ici car précédé de بِـ) ; النَّاسِ : مضاف إليه مجرور"
                },
                {
                    "arabic": "مَلِكِ النَّاسِ",
                    "french": "Roi des hommes",
                    "note": "مَلِكِ : مضاف مجرور (كسرة) ; النَّاسِ : مضاف إليه مجرور"
                },
                {
                    "arabic": "إِلَٰهِ النَّاسِ",
                    "french": "Dieu des hommes",
                    "note": "Triple إضافة avec رَبِّ et مَلِكِ : trois attributs en apposition à بِرَبِّ النَّاسِ"
                }
            ]
        }
    ],
    "quran_example": {
        "surah": "Al-Ikhlas (112)",
        "verse_number": 1,
        "arabic": "قُلْ هُوَ اللَّهُ أَحَدٌ",
        "french": "Dis : Il est Allah, [l']Un",
        "word_analysis": [
            {
                "word": "قُلْ",
                "type": "فعل أمر",
                "role": "verbe à l'impératif",
                "french": "Dis",
                "note": "Verbe مبني sur السكون, sujet implicite أنتَ"
            },
            {
                "word": "هُوَ",
                "type": "ضمير منفصل",
                "role": "مبتدأ أول",
                "french": "Il",
                "note": "Pronom de 3ème personne masculin singulier, مرفوع محلاً"
            },
            {
                "word": "اللَّهُ",
                "type": "اسم علم",
                "role": "مبتدأ ثانٍ أو خبر هُوَ",
                "french": "Allah",
                "note": "مرفوع بالضمة, l'ensemble اللَّهُ أَحَدٌ constitue la phrase nominale خبر de هُوَ"
            },
            {
                "word": "أَحَدٌ",
                "type": "اسم نكرة",
                "role": "خبر المبتدأ اللَّهُ",
                "french": "Un / Unique",
                "note": "مرفوع بالتنوين (تنوين الضم), indiquant l'unicité absolue"
            }
        ]
    },
    "exercises": [
        {
            "id": "ex29-1",
            "type": "classify",
            "instruction": "Classifiez chaque mot souligné selon son cas grammatical : مرفوع, مجرور ou منصوب. Identifiez aussi si le mot est مضاف أو مضاف إليه quand c'est applicable.",
            "words": [
                {
                    "arabic": "رَبِّ (dans بِرَبِّ الْفَلَقِ)",
                    "correct": "مجرور - مضاف",
                    "options": [
                        "مرفوع - مضاف",
                        "مجرور - مضاف",
                        "مجرور - مضاف إليه"
                    ]
                },
                {
                    "arabic": "الْفَلَقِ",
                    "correct": "مجرور - مضاف إليه",
                    "options": [
                        "مرفوع - خبر",
                        "مجرور - مضاف",
                        "مجرور - مضاف إليه"
                    ]
                },
                {
                    "arabic": "أَحَدٌ",
                    "correct": "مرفوع - خبر",
                    "options": [
                        "مرفوع - خبر",
                        "مجرور - مضاف إليه",
                        "منصوب - مفعول به"
                    ]
                },
                {
                    "arabic": "النَّاسِ (dans إِلَٰهِ النَّاسِ)",
                    "correct": "مجرور - مضاف إليه",
                    "options": [
                        "مرفوع - مبتدأ",
                        "مجرور - مضاف إليه",
                        "منصوب - حال"
                    ]
                }
            ]
        },
        {
            "id": "ex29-2",
            "type": "highlight",
            "instruction": "Dans ce verset de Al-Nas, sélectionnez TOUS les mots qui sont مضاف إليه (second terme d'une annexion, donc مجرور par إضافة).",
            "arabic": "قُلْ أَعُوذُ بِرَبِّ النَّاسِ مَلِكِ النَّاسِ إِلَٰهِ النَّاسِ",
            "highlight_words": [
                "النَّاسِ",
                "النَّاسِ",
                "النَّاسِ"
            ],
            "correct_words": [
                "النَّاسِ"
            ],
            "feedback_correct": "Excellent ! Les trois occurrences de النَّاسِ sont مضاف إليه مجرور : elles complètent respectivement رَبِّ, مَلِكِ et إِلَٰهِ dans trois إضافة consécutives.",
            "feedback_wrong": "Attention : بِرَبِّ est مجرور par حرف الجر بِ, et رَبِّ / مَلِكِ / إِلَٰهِ sont مضاف. Seul النَّاسِ (répété 3 fois) est مضاف إليه مجرور par الإضافة."
        }
    ],
    "summary": {
        "table": [
            {
                "type": "مرفوع (nominatif)",
                "signal": "ضمة ou تنوين ضم",
                "example": "اللَّهُ أَحَدٌ — sujet et attribut"
            },
            {
                "type": "مجرور بحرف الجر (génitif par préposition)",
                "signal": "كسرة après مِن / بِ / فِي",
                "example": "بِرَبِّ الْفَلَقِ — رَبِّ مجرور par بِ"
            },
            {
                "type": "مجرور بالإضافة (génitif par annexion)",
                "signal": "Second nom après مضاف sans ال sans تنوين",
                "example": "النَّاسِ dans رَبِّ النَّاسِ / مَلِكِ النَّاسِ / إِلَٰهِ النَّاسِ"
            }
        ],
        "rule": "Dans Al-Ikhlas, Al-Falaq et Al-Nas, la quasi-totalité des noms sont soit مرفوع (sujets et attributs de phrases nominales) soit مجرور (après prépositions ou en إضافة). Pour identifier le cas : 1) repérer la voyelle finale, 2) chercher une préposition ou un مضاف précédant le mot, 3) vérifier si le mot est premier terme (مضاف, sans تنوين) ou second terme (مضاف إليه, مجرور) d'une annexion."
    },
    "unlocks_lesson_id": 30
}
  , {
    "id": 30,
    "level": 3,
    "title": "Methode d'autonomie",
    "arabic_title": "منهج الاستقلالية",
    "duration_minutes": 8,
    "prerequisite_lesson_id": 29,
    "hook": {
        "question": "Comment lire le Coran seul sans professeur après avoir appris les bases ?",
        "insight": "L'autonomie en arabe coranique repose sur une méthode simple : identifier le type de mot, chercher sa racine, déterminer sa fonction grammaticale (i'rāb), puis confirmer dans un dictionnaire. Cette démarche, répétée sur chaque verset, transforme l'apprenant en lecteur indépendant."
    },
    "concepts": [
        {
            "id": "irab-demarche",
            "arabic_term": "الإعراب",
            "french_name": "L'i'rāb — Analyse grammaticale",
            "definition": "L'i'rāb est la démarche qui consiste à identifier la fonction syntaxique de chaque mot dans la phrase arabe, révélée par sa voyelle finale (ضمة pour le nominatif, فتحة pour l'accusatif, كسرة pour le génitif). Maîtriser cette démarche permet de lire n'importe quel verset de façon autonome.",
            "signals": [
                "ضمة (ـُ) → sujet ou prédicat nominal (رفع)",
                "فتحة (ـَ) → complément d'objet, circonstanciel (نصب)",
                "كسرة (ـِ) → après préposition ou en annexion (جر)",
                "سكون → verbe à l'impératif ou état apocopé (جزم)"
            ],
            "color": "#2E86AB",
            "examples": [
                {
                    "arabic": "اللهُ رَبُّنَا",
                    "french": "Allah est notre Seigneur",
                    "note": "اللهُ : sujet (مبتدأ) → ضمة | رَبُّنَا : prédicat (خبر) → ضمة"
                },
                {
                    "arabic": "نَعْبُدُ اللهَ",
                    "french": "Nous adorons Allah",
                    "note": "اللهَ : complément d'objet direct (مفعول به) → فتحة"
                },
                {
                    "arabic": "بِسْمِ اللهِ",
                    "french": "Au nom d'Allah",
                    "note": "اللهِ : après préposition بِ → كسرة (مجرور)"
                }
            ]
        },
        {
            "id": "racine-dictionnaire",
            "arabic_term": "الجذر والمعجم",
            "french_name": "Racine et dictionnaire — Clé de l'autonomie",
            "definition": "Tout mot arabe dérive d'une racine de 2 à 4 lettres consonantiques (الجذر). Pour chercher un mot dans un dictionnaire arabe, il faut d'abord extraire sa racine en supprimant les préfixes (و، ف، ب، ل، ال) et les suffixes (ة، ون، ين، ات), puis trouver la forme verbale de base (المصدر أو الفعل الماضي). Les dictionnaires recommandés : Hans Wehr (anglais/arabe), Kazimirski (français/arabe), ou l'application Ejtaal.",
            "signals": [
                "Supprimer ال, و, ف, ب, ل en début de mot",
                "Supprimer ة, ون, ين, ات, ان en fin de mot",
                "Identifier les 3 lettres consonantiques restantes",
                "Chercher la racine au passé 3e personne masculin singulier (فَعَلَ)"
            ],
            "color": "#E07B39",
            "examples": [
                {
                    "arabic": "الْمُؤْمِنُونَ → أَمَنَ",
                    "french": "Les croyants → racine : croire, être en sécurité",
                    "note": "Supprimer ال et ون → مؤمن → racine أ م ن → أَمَنَ"
                },
                {
                    "arabic": "وَالصَّابِرِينَ → صَبَرَ",
                    "french": "Et les patients → racine : être patient",
                    "note": "Supprimer و et ين → صابر → racine ص ب ر → صَبَرَ"
                },
                {
                    "arabic": "بِالْحَقِّ → حَقَّ",
                    "french": "Avec la vérité → racine : être vrai, droit",
                    "note": "Supprimer ب et ال → حق → racine ح ق ق → حَقَّ"
                }
            ]
        }
    ],
    "quran_example": {
        "surah": "Al-'Asr (103)",
        "verse_number": 3,
        "arabic": "إِلَّا الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ وَتَوَاصَوْا بِالْحَقِّ وَتَوَاصَوْا بِالصَّبْرِ",
        "french": "Sauf ceux qui ont cru, accompli les bonnes œuvres, s'exhortaient mutuellement à la vérité et s'exhortaient mutuellement à la patience.",
        "word_analysis": [
            {
                "word": "الَّذِينَ",
                "type": "اسم موصول",
                "role": "مبتدأ مؤخر",
                "french": "ceux qui",
                "note": "Pronom relatif pluriel masculin, sujet différé — exercez l'i'rāb : position de رفع"
            },
            {
                "word": "آمَنُوا",
                "type": "فعل ماضٍ",
                "role": "فعل الجملة الصلة",
                "french": "ils ont cru",
                "note": "Racine أ م ن — verbe passé, 3e pers. pl. masc. — la voyelle finale و est la marque du pluriel"
            },
            {
                "word": "الصَّالِحَاتِ",
                "type": "اسم مفعول جمع",
                "role": "مفعول به",
                "french": "les bonnes œuvres",
                "note": "Racine ص ل ح — كسرة finale car précédé par verbe عَمِلُوا qui demande مفعول به (نصب → ici pluriel féminin régulier prend كسرة)"
            },
            {
                "word": "بِالْحَقِّ",
                "type": "جار ومجرور",
                "role": "متعلق بالفعل تَوَاصَوْا",
                "french": "à la vérité",
                "note": "ب préposition → الحق prend كسرة (مجرور) — racine ح ق ق"
            },
            {
                "word": "بِالصَّبْرِ",
                "type": "جار ومجرور",
                "role": "متعلق بالفعل تَوَاصَوْا",
                "french": "à la patience",
                "note": "Même structure que بِالْحَقِّ — racine ص ب ر — appliquer la même démarche d'i'rāb"
            }
        ]
    },
    "exercises": [
        {
            "id": "ex30-1",
            "type": "classify",
            "instruction": "Identifiez la voyelle finale (حركة الإعراب) de chaque mot souligné et classez-le dans sa fonction grammaticale correcte.",
            "words": [
                {
                    "arabic": "الرَّحْمَنُ",
                    "correct": "رفع — sujet (مبتدأ)",
                    "options": [
                        "رفع — sujet (مبتدأ)",
                        "نصب — complément d'objet (مفعول به)",
                        "جر — après préposition (مجرور)"
                    ]
                },
                {
                    "arabic": "اللهَ",
                    "correct": "نصب — complément d'objet (مفعول به)",
                    "options": [
                        "رفع — sujet (مبتدأ)",
                        "نصب — complément d'objet (مفعول به)",
                        "جر — après préposition (مجرور)"
                    ]
                },
                {
                    "arabic": "بِالْمُؤْمِنِينَ",
                    "correct": "جر — après préposition (مجرور)",
                    "options": [
                        "رفع — sujet (مبتدأ)",
                        "نصب — complément d'objet (مفعول به)",
                        "جر — après préposition (مجرور)"
                    ]
                }
            ]
        },
        {
            "id": "ex30-2",
            "type": "highlight",
            "instruction": "Dans ce verset, identifiez et cliquez sur le mot dont la racine est ك ت ب (écrire). Appliquez la méthode : supprimez les affixes, puis isolez les 3 consonnes radicales.",
            "arabic": "ذَلِكَ الْكِتَابُ لَا رَيْبَ فِيهِ هُدًى لِلْمُتَّقِينَ",
            "highlight_words": [
                "الْكِتَابُ",
                "لَا",
                "رَيْبَ",
                "هُدًى",
                "لِلْمُتَّقِينَ"
            ],
            "correct_words": [
                "الْكِتَابُ"
            ],
            "feedback_correct": "Excellent ! الْكِتَابُ vient de la racine ك ت ب. Supprimez ال → كتاب → consonnes ك ت ب → كَتَبَ (il a écrit). Fonction : مبتدأ مؤخر → ضمة (رفع).",
            "feedback_wrong": "Essayez encore. Cherchez le mot qui contient les consonnes ك، ت، ب après suppression de ال. Indice : c'est un nom en position de sujet avec ضمة finale."
        }
    ],
    "summary": {
        "table": [
            {
                "type": "ضمة (ـُ) — رفع",
                "signal": "Sujet (مبتدأ), prédicat (خبر), verbe actif (فعل مرفوع)",
                "example": "اللهُ رَبُّنَا"
            },
            {
                "type": "فتحة (ـَ) — نصب",
                "signal": "Complément d'objet (مفعول به), circonstanciel, après إنَّ et sœurs",
                "example": "نَعْبُدُ اللهَ"
            },
            {
                "type": "كسرة (ـِ) — جر",
                "signal": "Après préposition (حرف جر), deuxième terme d'annexion (مضاف إليه)",
                "example": "بِسْمِ اللهِ"
            },
            {
                "type": "Racine (جذر)",
                "signal": "Supprimer préfixes (ال و ف ب ل) et suffixes (ة ون ين ات) → 3 consonnes",
                "example": "الْمُؤْمِنُونَ → أ م ن → أَمَنَ"
            }
        ],
        "rule": "La méthode d'autonomie en 4 étapes : (1) Identifier le type de mot (اسم / فعل / حرف). (2) Lire la voyelle finale pour déterminer la fonction i'rāb (رفع / نصب / جر / جزم). (3) Extraire la racine consonantique en supprimant les affixes. (4) Chercher la racine dans un dictionnaire (Kazimirski, Hans Wehr, Ejtaal) pour confirmer le sens. En répétant cette démarche mot par mot, verset par verset, l'apprenant devient progressivement lecteur indépendant du Coran."
    },
    "unlocks_lesson_id": null
}
];
