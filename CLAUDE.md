# Tadabbur — Learn Easily Arabic

App d'apprentissage de l'arabe coranique (vocabulaire + grammaire + leçons + SRS) pour francophones.

## Stack
- **Front** : React 19 + TypeScript + Vite + Tailwind v4 + react-router v7
- **Serveur** : Express (`server.ts`) — proxy vers l'IA, sert le SPA via Vite middleware
- **IA** : **Anthropic Claude** (`@anthropic-ai/sdk`) — génère les "astuces" mnémotechniques de vocabulaire (`useAiTip`, `AiTipModal`). System prompt FR dans `server.ts`. Clé : `ANTHROPIC_API_KEY`.
- **Cloud** : Firebase Firestore — **uniquement la progression utilisateur** (SRS, tips). Le contenu (vocab/leçons) est en dur dans le code.

## Commandes
```bash
npm run dev      # tsx server.ts
npm run build    # vite build && esbuild server.ts -> dist/server.cjs
npm start        # node dist/server.cjs
npm run lint     # tsc --noEmit  (PAS de test script — playwright installé mais inutilisé)
```

## Architecture
- `src/data/` : **contenu**. `vocabulary.ts` (366 KB), `lessons.ts` (276 KB), `quranExercises.ts`, types.
- `src/hooks/` : `useSRS.ts` (répétition espacée, Firestore), `useAiTip.ts`, `useLessons.ts`, `useAuth.ts`.
- `src/pages/` : Courses, LessonReader, ExercisePlayer, Vocabulary, Library, Dashboard, grammar/nominal/*.
- `src/components/exercises/` : composants d'exercices (Highlight, Classify, RootFinder, VerbAnalyzer...).
- Scripts data à la racine : `generate_lessons.ts`, `enrich.ts`, `create_exercises.ts`, `clean_vocabulary.ts`, `scrape.ts` (génération/maintenance du contenu).

## Pièges (vérifiés)
- ⚠️ **`vocabulary.ts` + `lessons.ts` = 11.7k lignes (~642 KB) importées en STATIQUE** → bundlées dans le JS, dont le chunk de Dashboard. Gonfle le 1er chargement + les diffs. Si migration : **JSON + `import()` dynamique** (lazy chunk). **NE PAS** mettre dans Firestore (contenu statique → latence + coût + casse l'offline inutilement). Priorité basse tant que pas de problème perf mesuré.
- ⚠️ **`package.json` name = "react-example"** et scripts identiques à Ilm → projet cloné depuis Ilm. Vérifier que le `build`/serveur correspond bien à l'usage réel.
- ⚠️ **`npm run clean` = `rm -rf`** → cassé sous Windows/PowerShell.
- ⚠️ Provider IA = Anthropic → voir skill `claude-api`.

## Conventions
- Sous-module git (`Tadabbur---Learn-Easily-Arabic`). `git fetch` avant toute op git.
- Pas de tests : `/code-review` avant push.
