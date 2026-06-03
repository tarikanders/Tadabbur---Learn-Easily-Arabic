import fs from 'fs';

const scraped = JSON.parse(fs.readFileSync('scraped.json', 'utf8'));

// Common translations manual map
const translations: Record<string, string> = {
  "min": "De, depuis",
  "{ll~ah": "Allah, Dieu",
  "fiY": "Dans, au sujet de",
  "<in~": "Certes, en vérité",
  "EalaY`": "Sur, contre",
  "{l~a*iY": "Celui qui",
  "laA": "Non, ne pas",
  "maA": "Ce que, ne pas",
  "rab~": "Seigneur, Maître",
  "<ilaY`": "Vers, à",
  "man": "Celui qui, qui",
  "<in": "Si",
  ">an": "Que",
  "<il~aA": "Sauf",
  "*a`lik": "Cela",
  "Ean": "De, à propos",
  ">aroD": "Terre",
  "qad": "Certes, déjà",
  "<i*aA": "Quand, lorsque",
  "qawom": "Peuple",
  "'aAyap": "Signe, verset",
  ">an~": "Que",
  "kul~": "Chaque, tout",
  "lam": "Ne pas (passé)",
  "vum~": "Puis, ensuite",
  "rasuwl": "Messager",
  "yawom": "Jour",
  "Ea*aAb": "Châtiment",
  "ha`*aA": "Ceci",
  "samaA^'": "Ciel",
  "nafos": "Âme",
  "$aYo'": "Chose",
  ">aw": "Ou",
  "kita`b": "Livre",
  "bayon": "Entre",
  "Haq~": "Vérité",
  "n~aAs": "Hommes, gens",
  "<i*": "Quand (passé)",
  ">uwla`^}ik": "Ceux-là",
  "qabol": "Avant",
  "mu&omin": "Croyant",
  "law": "Si",
  "sabiyl": "Chemin, voie",
  ">amor": "Ordre, affaire",
  "Eind": "Auprès de",
  "maE": "Avec",
  "baEoD": "Une partie, certains",
  "lam~aA": "Lorsque, pas encore",
  ">ay~uhaA": "Ô vous",
  "xayor": "Bien, meilleur",
  "<ila`h": "Divinité",
  "naAr": "Feu",
  "gayor": "Autre que, sans",
  ">am": "Ou bien",
  "muwsaY`": "Moïse",
  "duwn": "En dehors de",
  "A^xir": "Dernier",
  "baEod": "Après",
  "qalob": "Cœur",
  "Eabod": "Serviteur",
  ">ahol": "Gens, famille",
  "laEal~": "Peut-être, afin que",
  "bal": "Mais, au contraire",
  "yad": "Main",
  "ka`firuwn": "Mécréant",
  "raHomap": "Miséricorde",
  "r~aHiym": "Très Miséricordieux",
  ">ajor": "Récompense",
  "ZaAlim": "Injuste",
  "Eilom": "Science",
  "EaZiym": "Immense",
  "lan": "Ne jamais",
  "Ealiym": "Omniscient",
  "jan~ap": "Jardin, paradis",
  "Hat~aY`": "Jusqu'à ce que",
  "hal": "Est-ce que",
  "diyn": "Religion, jugement",
  "qawol": "Parole",
  "*uw": "Possesseur de",
  "malak": "Ange",
  "maval": "Exemple",
  "maAl": "Biens, richesse",
  "waliY~": "Allié, protecteur",
  "hudFY": "Guidée",
  "Hakiym": "Sage",
  "faDol": "Faveur, grâce",
  "Salaw`p": "Prière",
  "layol": "Nuit",
  "bunaY~": "Fils",
  "$ayoTa`n": "Diable, Satan",
  "kayof": "Comment",
  ">aSoHa`b": "Compagnons",
  ">akovar": "La plupart",
  "jahan~am": "Enfer",
  "Hayaw`p": "Vie",
  "*ikor": "Rappel, évocation",
  "zawoj": "Époux(se)",
  ">ax": "Frère",
  "mivol": "Semblable",
  "n~abiY~": "Prophète",
  ">aHad": "Un seul",
  "xa`lid": "Éternel",
  "d~unoyaA": "Vie d'ici-bas",
  "firoEawon": "Pharaon",
  "Ea`lamiyn": "Mondes",
  ">aliym": "Douloureux",
  "m~ubiyn": "Évident",
  "<insa`n": "Homme, humain",
  "Eamal": "Œuvre",
  "wajoh": "Visage",
  "qiya`map": "Résurrection",
  "yawoma}i*": "Ce jour-là",
  "<iboraAhiym": "Abraham",
  "quro'aAn": "Coran",
  "A^baA'": "Pères, ancêtres",
  ">um~ap": "Communauté",
  "{bon": "Fils",
  "Eaziyz": "Puissant",
  "maA^'": "Eau"
};

const processed = scraped.map(w => {
  return {
    id: w.id,
    arabic: w.arabic,
    transliteration: w.transliteration,
    translation: translations[w.transliteration] || `${w.type} (Traduction à venir)`,
    root: "-",
    frequency: w.frequency,
    type: w.type === "Noun" ? "Nom" :
          w.type === "Preposition" ? "Préposition" :
          w.type === "Relative pronoun" ? "Pronom relatif" :
          w.type === "Negative particle" ? "Particule de négation" :
          w.type === "Accusative particle" ? "Particule accusative" :
          w.type === "Proper noun" ? "Nom propre" :
          w.type === "Demonstrative pronoun" ? "Pronom démonstratif" :
          w.type === "Time adverb" ? "Adverbe de temps" :
          w.type === "Location adverb" ? "Adverbe de lieu" :
          w.type === "Adjective" ? "Adjectif" :
          w.type === "Coordinating conjunction" ? "Conjonction" :
          w.type === "Conditional particle" ? "Particule conditionnelle" :
          w.type === "Subordinating conjunction" ? "Conjonction" :
          w.type,
    verse: "",
    verseTranslation: ""
  };
});

const tsCode = `export interface WordData {
  id: string;
  arabic: string;
  transliteration: string;
  translation: string;
  root: string;
  frequency: number;
  verse: string;
  verseTranslation: string;
  type: string;
}

export const VOCABULARY_LIST: WordData[] = ${JSON.stringify(processed, null, 2)};
`;

fs.writeFileSync('src/data/vocabulary.ts', tsCode);
console.log("Vocabulary file overwritten!");
