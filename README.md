# Afterglow

> Because dating should feel human again.
> Real people. Real feelings.

Afterglow is a working prototype of a **premium LGBTQIA+ relationship app** for people seeking serious, emotionally meaningful connection. It is built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**.

There is no backend — everything is local state and mock data, by design.

## Get started

```bash
npm install
npm run dev
```

Open http://localhost:3000 and click through.

## Routes

| Route | Page |
| --- | --- |
| `/` | Landing |
| `/onboarding` | 22-step inclusive onboarding flow |
| `/profile` | Profile creation (identity, prompts, values, dealbreakers) |
| `/matches` | Daily matches: Compatibility + Astro tabs (5 each) |
| `/matches/[id]` | Match detail and compatibility breakdown |
| `/chat/[id]` | Chat with mock messages and AI-assisted safety prototype |
| `/settings` | Profile, membership, community standing, AI safety, privacy |
| `/standards` | Community Intent Standards + AI safety + membership |

## What's in the prototype

- **Premium LGBTQIA+ repositioning** — open to queer, trans, nonbinary, asexual, questioning folks and beyond.
- **Soft sunrise / sunset palette** — blush, peach, lilac, baby blue, cream, plum text. No dark navy, no rainbow.
- **22-step onboarding** including gender identity, pronouns, orientation, who you want to meet, relationship intention + structure, broad region (no exact city), age range, communication + conflict + attachment style, values, love languages, lifestyle, future goals, family views, optional astrology, dealbreakers, and prompts.
- **Two daily lists** — five Compatibility matches and five Astro matches, with clear copy that astrology is playful and optional.
- **Regional matching** — broad regions only (GTA, Greater Golden Horseshoe, Southern/Northern Ontario, Ottawa, Montreal, Vancouver, Northern USA). The UI never shows exact city or distance.
- **AI-assisted safety prototype** — local-only heuristics that flag spam, harassment, objectifying openers, and abrupt copy-paste messages. Suggests soft rewrites. No API calls.
- **Community Intent Standards** — calm, premium copy about intentional dating, respectful communication, emotional safety, and meaningful connection.
- **Membership messaging** — a small one-time $2.99 verification fee is described in copy as a way to reduce bots, support moderation, and keep Afterglow focused on real connection. No payment is processed.

## Structure

```
app/
  page.tsx                   Landing
  onboarding/page.tsx        22-step onboarding
  profile/page.tsx           Profile creation
  matches/page.tsx           Compatibility + Astro daily lists
  matches/[id]/page.tsx      Match detail
  chat/[id]/page.tsx         Chat + AI safety prototype
  settings/page.tsx          Settings (membership, safety, privacy)
  standards/page.tsx         Community Intent Standards
components/                  Reusable building blocks
data/mockProfiles.ts         Ten inclusive mock profiles + chat threads
lib/safety.ts                Local mock AI-assisted safety logic
types/index.ts               Shared types
```

## Components

`AppHeader`, `GradientBackground`, `GlowCard`, `Button` / `LinkButton`,
`ProgressSteps`, `MatchCard`, `CompatibilityBar` / `CompatibilityRing`,
`PromptChip` / `PromptCard`, `ProfileSection` / `PromptField`,
`ProfileAvatar`, `MockPhonePreview`, `Logo`, `Footer`,
`CommunityStandardsCard`, `SafetyFeaturesCard`, `MembershipCard`.

## Prototype notes

- No backend dependencies. No payment processing. No AI APIs.
- The $2.99 membership fee is shown in copy/UI only — no payment is collected.
- AI-assisted safety runs as small, conservative local heuristics (see `lib/safety.ts`).
- All identity, region, and attraction fields use inclusive terminology.
- The app never shows exact city, distance, maps, or live location.
