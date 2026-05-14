# Afterglow

> Because dating should feel human again.
> Real people. Real feelings.

Afterglow is a working prototype of an **intentional LGBTQIA+ relationship ecosystem** for people seeking serious, emotionally meaningful connection. It is built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**.

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
| `/` | Landing — seven ecosystem sections, membership, standards, AI-assisted safety |
| `/onboarding` | 24-step reflective onboarding flow |
| `/profile` | Profile creation (identity, long-form prompts, values, dealbreakers) |
| `/matches` | Daily matches: Compatibility + Astro tabs (5 each) |
| `/matches/[id]` | Match detail with full compatibility interpretation |
| `/chat/[id]` | Chat with mock messages and AI-assisted emotional safety prototype |
| `/settings` | Profile depth, membership, community standing, AI safety, privacy |
| `/standards` | Community Intent Standards + AI safety + membership |

## What's in the prototype

- An intentional relationship ecosystem positioned for the LGBTQIA+ community — designed for real connection rather than disposable swiping.
- A soft sunrise / sunset palette in blush, peach, lilac, baby blue, cream, and plum text. Light glassmorphism cards, generous whitespace, gentle floating gradient orbs.
- **24-step onboarding** covering an emotional intro, membership, identity, pronouns, orientation, who you want to meet, intention, structure, broad home + dating regions, communication and conflict style, emotional needs, attachment tendency, love languages, lifestyle rhythm, future goals, family vision, social energy, core values, dealbreakers, optional astrology, and long-form prompts (minimum 150 chars).
- Two daily lists — **five Compatibility matches** and **five Astro matches** — with explicit copy that astrology is playful and optional.
- **Worldwide broad-region matching**. Regions include Greater Toronto Area, Greater Golden Horseshoe, Southern/Northern Ontario, Ottawa, Montreal, Vancouver, Northeast USA, Pacific Northwest, Bay Area, Greater New York, Greater Los Angeles, Texas Triangle, Mountain West, Greater London, Île-de-France, Berlin, Amsterdam, Stockholm, Tokyo, Greater Sydney, Greater Melbourne, Auckland, Singapore, and Seoul Capital Area. The UI never shows exact city or distance.
- **AI-assisted emotional safety prototype** — local-only heuristics that flag spam, harassment, objectifying openers, coercion, and abrupt copy-paste messages. Suggests soft rewrites. No external API calls.
- **Community Intent Standards** — calm copy about intentional dating, respectful communication, emotional safety, and meaningful connection.
- **Membership messaging** — a small one-time **$2.99** verification fee is described as a way to reduce bots, discourage disposable behavior, support moderation, and keep the ecosystem focused on real connection. No payment is processed.

## Mock data

Fifteen emotionally rich profiles in `data/mockProfiles.ts` spanning diverse identities and worldwide regions, each with a long-form prompt set, full compatibility breakdown, a one-line `matchRationale`, and a one-line soft emotional `matchExplanation` used on match cards.

## Structure

```
app/
  page.tsx                   Landing
  onboarding/page.tsx        24-step onboarding
  profile/page.tsx           Profile creation
  matches/page.tsx           Compatibility + Astro daily lists
  matches/[id]/page.tsx      Match detail with compatibility interpretation
  chat/[id]/page.tsx         Chat + AI safety prototype
  settings/page.tsx          Settings (membership, safety, privacy, depth)
  standards/page.tsx         Community Intent Standards
components/                  Reusable building blocks
data/mockProfiles.ts         Fifteen mock profiles + chat threads
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
- AI-assisted emotional safety runs as small, conservative local heuristics in `lib/safety.ts`.
- All identity, region, and attraction fields use inclusive terminology.
- The app never shows exact city, distance, maps, or live location.
