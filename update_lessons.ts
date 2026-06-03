import fs from 'fs';

const titles = [
  { id: 6, level: 1, title: 'Les 3 cas grammaticaux', arabic: 'الإعراب' },
  { id: 7, level: 1, title: 'La phrase nominale', arabic: 'الجملة الاسمية' },
  { id: 8, level: 1, title: 'Les prépositions + cas مجرور', arabic: 'حروف الجر' },
  { id: 9, level: 1, title: 'Les pronoms personnels détachés', arabic: 'الضمائر المنفصلة' },
  { id: 10, level: 1, title: 'Les pronoms suffixes', arabic: 'الضمائر المتصلة' },
  { id: 11, level: 2, title: "L'annexion", arabic: 'الإضافة' },
  { id: 12, level: 2, title: "L'adjectif", arabic: 'النعت' },
  { id: 13, level: 2, title: 'لا النافية للجنس', arabic: 'لا النافية للجنس' },
  { id: 14, level: 2, title: 'إنّ et ses sœurs', arabic: 'إنّ وأخواتها' },
  { id: 15, level: 2, title: 'Le verbe passé', arabic: 'الفعل الماضي' },
  { id: 16, level: 2, title: 'Le verbe présent/futur', arabic: 'الفعل المضارع' },
  { id: 17, level: 2, title: 'Le verbe impératif', arabic: 'فعل الأمر' },
  { id: 18, level: 2, title: 'La phrase verbale', arabic: 'الجملة الفعلية' },
  { id: 19, level: 2, title: 'Les pronoms relatifs', arabic: 'الأسماء الموصولة' },
  { id: 20, level: 2, title: 'Les compléments de temps et lieu', arabic: 'الظرف' },
  { id: 21, level: 3, title: 'Les patterns de noms', arabic: 'أوزان الأسماء' },
  { id: 22, level: 3, title: 'Le participe actif et passif', arabic: 'اسم الفاعل واسم المفعول' },
  { id: 23, level: 3, title: 'Le nom verbal', arabic: 'المصدر' },
  { id: 24, level: 3, title: 'Les formes verbales augmentées', arabic: 'أبنية الأفعال الزائدة' },
  { id: 25, level: 3, title: 'الحال — La circonstancielle', arabic: 'الحال' },
  { id: 26, level: 3, title: 'Les conditions', arabic: 'أسلوب الشرط' },
  { id: 27, level: 3, title: "L'analyse syntaxique complète", arabic: 'الإعراب الكامل' },
  { id: 28, level: 3, title: 'Révision — Al-Fatiha', arabic: 'إعراب الفاتحة' },
  { id: 29, level: 3, title: 'Révision — Sourates courtes', arabic: 'إعراب السور القصيرة' },
  { id: 30, level: 3, title: "Méthode d'autonomie", arabic: 'منهج الاستقلالية' }
];

let existing = fs.readFileSync('src/data/lessons.ts', 'utf-8');
const closingBracketIndex = existing.lastIndexOf('];');

if (closingBracketIndex !== -1) {
  let toAdd = '';
  for (const t of titles) {
    toAdd += `  , {
    id: ${t.id},
    level: ${t.level},
    title: "${t.title}",
    arabic_title: "${t.arabic}",
    duration_minutes: 8,
    prerequisite_lesson_id: null,
    hook: {
      question: "Explorez cette nouvelle leçon : ${t.title}.",
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
  }\n`;
  }
  
  const newContent = existing.substring(0, closingBracketIndex) + toAdd + existing.substring(closingBracketIndex);
  fs.writeFileSync('src/data/lessons.ts', newContent);
  console.log('Appended 25 lessons');
} else {
  console.error('Could not find closing bracket in lessons.ts');
}
