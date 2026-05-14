# Afterglow

> Because dating should feel human again.

Afterglow is a working prototype of a relationship-focused dating app for queer men seeking real connection, emotional depth, and something that lasts.

This repo is a clickable demo built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**. There is no backend — everything is local state and mock data, by design.

## Get started

```bash
npm install
npm run dev
```

Open http://localhost:3000 and click through the flow.

## Routes

| Route | Page |
| --- | --- |
| `/` | Landing page |
| `/onboarding` | Multi-step onboarding |
| `/profile` | Profile creation |
| `/matches` | Today's five curated matches |
| `/matches/[id]` | Match detail and compatibility breakdown |
| `/chat/[id]` | Mock conversation with prompt starters |
| `/settings` | Settings, privacy, and Relationship Readiness |

## Design principles baked in

- No map. No exact distance. No "online now" grid.
- No infinite scrolling. Five curated matches a day, on purpose.
- No rainbow branding. No hookup-style layout. No sexualization.
- Soft pink, purple, and blue evening-sky gradients. Glassmorphism. Calm typography.
- Mature, safe, intentional copy throughout.

## Structure

```
app/
  page.tsx              Landing
  onboarding/page.tsx   Onboarding flow
  profile/page.tsx      Profile creation
  matches/page.tsx      Daily matches
  matches/[id]/page.tsx Match detail
  chat/[id]/page.tsx    Chat
  settings/page.tsx     Settings + Relationship Readiness
components/             Reusable building blocks
data/mockProfiles.ts    Five hand-written profiles + mock messages
types/index.ts          Shared types
```

## Components

`AppHeader`, `GradientBackground`, `GlowCard`, `Button` / `LinkButton`, `ProgressSteps`,
`MatchCard`, `CompatibilityBar` / `CompatibilityRing`, `PromptChip` / `PromptCard`,
`ProfileSection` / `PromptField`, `ProfileAvatar`, `MockPhonePreview`, `Logo`, `Footer`.
