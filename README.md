<div align="center">

# Tadabbur — Learn Quranic Arabic

**Structured Arabic learning through Quranic study, with spaced repetition and AI-guided exercises**

[![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=flat-square&logo=firebase&logoColor=black)](https://firebase.google.com)
[![Gemini](https://img.shields.io/badge/Gemini_API-4285F4?style=flat-square&logo=google&logoColor=white)](https://ai.google.dev)
[![Tailwind](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)

</div>

---

## What it does

Tadabbur (تدبُّر — *to reflect deeply* in Arabic) is a **full Arabic learning platform** built around Quranic text. Instead of generic vocabulary lists, every lesson is anchored in real Quranic verses — so you learn the language in its most important context.

The app covers grammar progressively, tracks your progress with **spaced repetition (SRS)**, and offers on-demand AI tips (via the Claude API) when you're stuck.

## Features

- **Dashboard** — daily practice streak, progress overview, SRS queue
- **Grammar lessons** — structured courses on nominal sentences, verbal sentences, gender, number, possessive constructs (*idafa*), apposition (*badal*), specification (*tamyiz*), adjectives
- **5 exercise types** with real Quranic verses:
  - **Verb Analyzer** — identify root, form, person, number, tense
  - **Root Finder** — extract the trilateral root from conjugated forms
  - **Case Identifier** — recognize إعراب (i'rab) cases: مرفوع / منصوب / مجرور
  - **Classify** — sort words by grammatical category
  - **Highlight** — identify specific grammatical patterns in context
- **Vocabulary** — word list with search, SRS scheduling, pronunciation
- **Library** — reference sheets and grammar tables
- **Statistics** — retention rate, exercise history, SRS performance
- **AI tips** — ask Claude for a contextual mnemonic on any vocabulary word

## Stack

| Layer | Tech |
|-------|------|
| Frontend | React 19 + TypeScript |
| Routing | React Router v7 |
| Build | Vite |
| Styling | Tailwind CSS v4 |
| AI tips | Claude API (Anthropic) |
| Backend | Express (serves the SPA + `/api/explain`) |
| Auth & sync | Firebase Auth + Firestore |
| Spaced repetition | Custom SRS implementation |

## Run locally

```bash
npm install
# Set ANTHROPIC_API_KEY in .env.local
# Configure Firebase in src/lib/firebase.ts
npm run dev     # http://localhost:3000
```

## Structure

```
src/
├── pages/
│   ├── Dashboard.tsx       # Home with streak + SRS queue
│   ├── Practice.tsx        # Exercise selection
│   ├── ExercisePlayer.tsx  # Plays any exercise type
│   ├── Vocabulary.tsx      # Word bank with SRS
│   ├── Statistics.tsx      # Progress analytics
│   └── grammar/            # Lesson pages per grammar topic
├── components/
│   ├── exercises/          # 5 exercise type components
│   └── lessons/            # Lesson reader components
├── data/
│   ├── quranExercises.ts   # Exercise bank (Quranic verses)
│   ├── lessons.ts          # Grammar lesson content
│   └── vocabulary.ts       # Word bank
└── hooks/
    ├── useSRS.ts           # Spaced repetition logic
    └── useAiTip.ts         # Gemini integration
```
