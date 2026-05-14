# Afterglow

> Because dating should feel human again.
> Real people. Real feelings.

Afterglow is a mobile-first prototype of an intentional relationship app for people seeking real connection, emotional depth, and something that lasts. It is designed for queer, trans, nonbinary, and questioning people, and anyone looking for something intentional.

This repository is a frontend-only Next.js prototype. There is no backend, no payment processor, and no AI API. All state is local and all data is mocked, by design.

## Stack

- Next.js (App Router) 14
- TypeScript
- Tailwind CSS
- Mock data and local React state

## Get started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) and click through the flow.

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the local development server on port 3000. |
| `npm run build` | Create a production build. Includes TypeScript and lint checks. |
| `npm run start` | Run the production build locally. |
| `npm run lint` | Run ESLint against the project. |

## Routes

| Route | Page |
| --- | --- |
| `/` | Landing. Hero, seven product features, six differentiators, membership, standards, AI safety. |
| `/onboarding` | A 28-step reflective onboarding flow that ends with a mock $2.99 membership activation. |
| `/profile` | Long-form profile creation with location, identity, prompts, values, and dealbreakers. |
| `/matches` | Compatibility tab (5) and astro tab (5). Soft membership activation card if you haven't activated yet. |
| `/matches/[id]` | Detailed compatibility interpretation for each match. |
| `/chat/[id]` | Mock chat with AI-assisted emotional safety prototype and soft rewrite suggestions. |
| `/settings` | Membership status, depth tiles, relationship readiness, AI safety toggles, privacy, notifications. |
| `/standards` | Community Intent Standards, AI safety, membership. |
| `/about` `/careers` `/contact` | Company pages. |
| `/privacy` `/terms` `/cookies` `/accessibility` | Legal and accessibility pages. |
| `/safety` `/membership` | Product information pages. |

## Deploying to Vercel

Afterglow is configured to deploy cleanly to Vercel with zero setup beyond connecting the repository.

1. Push this branch to GitHub.
2. In Vercel, click **Add New Project** and import the repository.
3. Leave the default settings. Vercel detects Next.js automatically.
4. Click **Deploy**. The first deploy takes about one minute.

There are no required environment variables. The included `.env.example` lists the keys we plan to wire up when the backend, payment, and AI integrations are added. Leaving them unset is safe in the prototype.

## Project structure

```
app/
  layout.tsx             Root layout with global background and viewport
  page.tsx               Landing page
  onboarding/page.tsx    28-step onboarding flow with mock payment
  profile/page.tsx       Long-form profile creation
  matches/page.tsx       Compatibility and astro lists
  matches/[id]/page.tsx  Match detail
  chat/[id]/page.tsx     Chat with AI safety prototype
  settings/page.tsx      Settings, depth, membership status
  standards/page.tsx     Community Intent Standards
  safety/page.tsx        Member safety page
  membership/page.tsx    Membership concept page
  about/   careers/   contact/   privacy/   terms/   cookies/   accessibility/
                         Footer and legal pages
  globals.css            Tailwind layers and palette tokens

components/              Reusable building blocks (header, cards, buttons, etc.)
data/mockProfiles.ts     Fifteen rich mock profiles
lib/safety.ts            Local AI-assisted emotional safety heuristics
lib/membership.ts        Local membership state with localStorage
lib/location.ts          Continent and country lists for onboarding
types/index.ts           Shared TypeScript types
docs/KNOWLEDGE_ARTICLE.md
                         Detailed walkthrough of what is done and what is next
```

## Brand quick reference

- Tagline: Because dating should feel human again.
- Secondary: Real people. Real feelings.
- Palette: baby blue sky, lilac purple, mauve purple, blush pink as accent, soft peach sunrise glow, cream-white glass cards, plum body text, burgundy headings.
- Tone: calm, warm, emotionally intelligent, non-corporate.

## Prototype constraints

- No backend dependencies.
- No payment processing. The $2.99 membership is mocked and stored locally in your browser.
- No external AI calls. The emotional safety layer in `lib/safety.ts` uses conservative local heuristics only.
- No map, no exact distance, no live location, no infinite scroll.

For a complete walkthrough of how Afterglow works, see [`docs/KNOWLEDGE_ARTICLE.md`](docs/KNOWLEDGE_ARTICLE.md).
