# Afterglow Knowledge Article

This document is a complete walkthrough of how the Afterglow prototype is structured today, the product decisions behind it, and the work a new developer would need to do to take it to production. A new contributor should be able to read this once and ship the next change without needing prior chat context.

## 1. Product vision

Afterglow is a relationship-focused app for people seeking real connection, emotional depth, and something that lasts. It is designed for queer, trans, nonbinary, and questioning people, and for anyone looking for something intentional. It is built for one-to-one long-term partnership.

The product behaves differently from most dating apps:

- No swiping.
- No infinite scroll.
- No exact distance, no map, no live location.
- No "online now" grid.
- No low-effort profiles. Long-form prompts are required.
- Five curated compatibility matches and five optional astro matches per day.
- A small one-time membership fee gates entry to keep the space intentional.
- AI-assisted emotional safety in chat as a supportive layer.
- A clear set of Community Intent Standards.

The emotional position is calm, warm, and intentional. It is not a hookup app, it is not gamified, and it is not optimized for time-in-feed.

## 2. Brand identity

- Name: **Afterglow**
- Tagline: **Because dating should feel human again.**
- Secondary phrase: **Real people. Real feelings.**
- Audience: queer, trans, nonbinary, and questioning people, plus anyone looking for something intentional. Inclusive without constantly labeling people.

Tone:

- calm
- warm
- emotionally intelligent
- non-corporate
- not preachy, not legalistic, not flashy

Two style rules to maintain when writing copy:

1. **No em dashes.** Use commas, periods, or simple words like "and" or "to" instead.
2. **Do not overuse the phrase "LGBTQIA+"** on the homepage. Use human wording like "for people seeking real connection" or "for queer, trans, nonbinary, and questioning people" instead.

## 3. Design system

The visual system is built around a sunrise / sunset sky palette.

Palette tokens live in [`tailwind.config.ts`](../tailwind.config.ts) and [`app/globals.css`](../app/globals.css):

- **Burgundy** for headings and important text.
- **Plum** for body text and secondary text.
- **Sky2** baby blue.
- **Lilac** purple.
- **Mauve** between blush and lilac, used in gradients.
- **Blush** pink. Accent only.
- **Peach** soft sunrise glow.
- **Cream** background base.

Glassmorphism surfaces:

- `.glass` light translucent card with subtle blur.
- `.glass-strong` brighter surface for sticky elements.
- `.glass-tint` softly tinted halo card.
- `.glass-quiet` minimal glass for low-emphasis containers.

Gradient direction:

- Buttons, badges, chips, bars, and rings lead with `sky2` and `lilac`, then `mauve`. Blush appears only as a quiet accent.
- The `.text-gradient` utility runs sky to mauve to blush so headings have a warm trailing note without becoming pink-heavy.

Typography:

- Display: **Fraunces** with tight tracking. Used for headings, hero text, and section titles.
- Sans: **Inter**. Used for body text and UI.

Animation:

- Background orbs use a slow vertical float with `prefers-reduced-motion` respected.
- Card entries use a quiet `riseIn` keyframe.

Mobile-first defaults:

- All buttons aim for 40 px minimum height.
- Cards stack at small widths and become side-by-side at `md:`.
- The header collapses to a hamburger menu under `md`.
- Footer columns stack to a single column on small screens.

## 4. Current routes / pages

| Route | Description |
| --- | --- |
| `/` | Landing. Hero, seven product features, six differentiators ("Why Afterglow feels different"), membership card, community standards card, safety features card, quiet promise. |
| `/onboarding` | 28-step reflective flow ending in a mock $2.99 membership activation. |
| `/profile` | Long-form profile creation with location, identity, intention, prompts, values, dealbreakers, and photos. |
| `/matches` | Two tabs: compatibility (5) and astro (5). Soft membership activation card appears if the user has not activated yet. |
| `/matches/[id]` | Match detail with full compatibility interpretation including emotional safety, attachment compatibility, future compatibility, regional compatibility. |
| `/chat/[id]` | Mock chat with starter prompts and the AI-assisted emotional safety advisor. |
| `/settings` | Membership status, depth tiles, relationship readiness, community standing, AI safety preferences, privacy and location explanation, notifications, prototype reset. |
| `/standards` | Community Intent Standards, AI-assisted safety details, membership concept. |
| `/safety` | Member safety page with what we do and what we ask of you. |
| `/membership` | Membership concept page with the one-time fee explanation. |
| `/about` | Company about page with press, blog, investors anchors. |
| `/careers` | Hiring intent and culture. |
| `/contact` | Contact paths for general, safety, press, partnerships, investors. |
| `/privacy` | Plain-language privacy summary, with a California Notice at Collection anchor. |
| `/terms` | Plain-language Terms of Service summary. |
| `/cookies` | Cookie policy summary. |
| `/accessibility` | Accessibility statement. |

All routes use the shared `AppHeader` and `Footer` components. Marketing and legal pages use the `marketing` variant of the header. App pages use the `app` variant with primary nav for Matches, Messages, Profile, and Settings.

## 5. Component system

Reusable components live in [`components/`](../components):

- `AppHeader` Responsive header with mobile drawer.
- `GradientBackground` Fixed sunrise sky with floating orbs and cream veils.
- `GlowCard` Glass card with sunrise halo, supports `glass`, `tint`, and `quiet` tones.
- `Button` and `LinkButton` Sunrise gradient primary button plus secondary, ghost, soft, and outline variants. All variants meet a 40 px minimum height.
- `Logo` SVG logo using sky to lilac to mauve gradient.
- `MatchCard` Card that shows name, age, pronouns, intention, compatibility percentage, shared values, regionally-aligned badge, prompt excerpt, and a soft emotional compatibility explanation line.
- `CompatibilityBar` and `CompatibilityRing` Bars and ring visualization.
- `ProgressSteps` Multi-step progress indicator used in onboarding.
- `PromptChip` and `PromptCard` Selectable chips and prompt cards.
- `ProfileSection` and `PromptField` Glass section wrapper for forms and a quoted prompt display.
- `ProfileAvatar` Initialed gradient avatar.
- `MockPhonePreview` Stylized phone frame for the landing page hero.
- `MembershipCard` Compact and full membership pitch.
- `CommunityStandardsCard` Reusable card with principles and discouraged behavior.
- `SafetyFeaturesCard` Reusable card listing the five safety features.
- `InfoPage` and `InfoCard` Shared scaffold used by all legal and company pages.
- `Footer` Four-column footer with disclaimer band.

## 6. Mock data structure

All mock data is in [`data/mockProfiles.ts`](../data/mockProfiles.ts). The full type set is in [`types/index.ts`](../types/index.ts).

Key types:

- `Profile` Includes identity, attraction, intention, partnership shape, communication and conflict style, attachment, values, love languages, lifestyle, social energy, future goals, family views, optional astrology, location, dealbreakers, prompts, compatibility numbers, breakdown, shared values, rationale and explanation, accent, and community standing.
- `Prompts` Long-form prompts. Three required: `lifeFeel`, `loveMeans`, `feelSafe`. Four optional: `greenFlag`, `partnership`, `conflictRepair`, `emotionalEnergy`, plus the lighter `idealSunday`.
- `CompatibilityBreakdown` Eleven axes plus optional astrology.
- `Location` Continent, country, region, and city. City is private and never shown publicly.
- `PartnershipShape` Replaces the older "relationship structure" question. Afterglow is designed around one-to-one long-term partnership, so the options describe what shape someone is hoping to build.
- `Continent` Six continents.

There are fifteen profiles spanning Canada, the United States, the United Kingdom, France, Japan, and Australia. They cover a wide range of identities, orientations, attachment styles, and partnership shapes.

## 7. Matching philosophy

Matching is intentionally opinionated and emotionally informed. The prototype precomputes a `CompatibilityBreakdown` for each profile against the current viewer with the following axes:

- Identity and preference compatibility
- Relationship intention
- Emotional availability
- Emotional safety
- Communication rhythm
- Conflict style
- Attachment compatibility
- Shared values
- Lifestyle fit
- Future compatibility
- Regional compatibility
- Optional astrology alignment

The matches page surfaces five compatibility profiles and five astro profiles every day. Astro is explicitly described as playful and optional, never scientific, and never replaces the compatibility list.

Each match card carries a one-line `matchExplanation` describing why the match feels emotionally aligned in plain language ("You both describe stability and affection in the same language" or "You both treat patience as a love language"). The detail page includes a longer rationale plus the full axis breakdown with warm hints.

## 8. Regional privacy model

Location is collected privately in onboarding through four steps:

1. Continent
2. Country
3. State, province, or region (free text)
4. City or metro area (free text, private)

Production behavior:

- City is used only internally to derive a 200 km compatibility region inside the same country.
- Cross-country matching is not enabled for now.
- The UI surfaces only soft badges: "Regionally aligned", "Same broad area", or "Within your compatibility region".
- We never display exact city, exact distance, maps, or live location.
- The prototype does not request browser geolocation.

The continent and country lists are stored in [`lib/location.ts`](../lib/location.ts) and are intentionally short for the prototype. They will be expanded in production.

## 9. Membership fee concept

Afterglow is a small membership community with a one-time $2.99 fee. The fee is framed as a way to:

- Reduce bots.
- Discourage disposable behavior.
- Support moderation.
- Protect the emotional environment.
- Keep the space focused on real connection.

In the prototype, membership state lives in [`lib/membership.ts`](../lib/membership.ts) and persists in `localStorage`. The mock payment screen is the final step of onboarding. After the user clicks "Continue with $2.99 membership", the state is set to `isMember: true` with a timestamp, and the user is routed to `/matches`.

Settings shows the verified member badge and a "One-time membership completed" pill once the flag is set, with the date of activation. There is also a "Reset prototype membership" button for demo flow.

The matches page shows a soft activation card to non-members. The card never blocks navigation in the prototype, since the user might want to preview matches before activating. Production should still apply a stronger gate.

Disclaimers we repeat across the app:

- Prototype only. No payment is collected in this demo.
- Paid membership does not guarantee safety or authenticity.

## 10. AI-assisted safety concept

Local heuristics live in [`lib/safety.ts`](../lib/safety.ts). They run on the user's device only. No external API is called.

Categories the prototype detects:

- Objectifying openers
- Harassment patterns
- Coercive language
- Spam-like patterns (links, money apps, promotional language)
- Abrupt or copy-paste openers under 24 characters

Each detection returns a `SafetySignal` with a severity (`info`, `soft`, `review`) and a soft, encouraging description. For objectifying, abrupt, harassing, and coercive messages we also produce a suggested rewrite the user can accept or ignore.

The chat page renders these as a non-blocking advisor under the composer. The user can always send their original message. Sent messages that were flagged carry the signal beneath the bubble so the conversation is honest.

The safety features card surfaces five capabilities at a higher level:

- Respectful conversation checks
- Spam pattern detection
- Harassment detection
- Soft message rewrite
- Community standard review

We repeat the principle "AI-assisted safety is supportive, not a replacement for human review" across pages.

## 11. Community standards concept

The Community Intent Standards card lives in [`components/CommunityStandards.tsx`](../components/CommunityStandards.tsx). It is reused on the homepage, the standards page, and the safety page.

Four principles are surfaced:

- Intentional dating
- Respectful communication
- Emotional safety
- Meaningful connection

Discouraged behavior is listed explicitly:

- Harassment of any kind, including identity-based remarks
- Explicit solicitation as an opening message
- Copy-paste, spam-like messages sent at scale
- Coercive or manipulative language and pressure tactics
- Disrespectful communication after someone has set a boundary
- Repeated low-effort, objectifying messages

Accounts that repeatedly violate community standards may be reviewed, limited, or removed. Reviews are quiet, considered, and never used as public callouts.

## 12. Current limitations

- All data is mocked. There is no real account creation, no real persistence beyond `localStorage`, and no real matching.
- The mock payment flow does not call a payment provider.
- The AI-assisted safety layer runs simple local heuristics. It does not call a moderation API or route to human review.
- The location flow does not derive a real compatibility region from coordinates. The 200 km rule is a product description, not enforcement.
- Photo upload is simulated by tapping a slot to toggle a placeholder.
- There is no notification delivery, no email, no analytics.
- Browser geolocation is not requested.

## 13. Future backend requirements

To take Afterglow to production we will need:

- **Authentication.** Email magic links or a hosted auth provider, with age gate at 18 plus.
- **Profile persistence.** A backend that stores `Profile` records and the location object securely.
- **Membership and payment.** A Stripe-backed flow for the one-time $2.99 verification fee with webhooks to update the verified member flag and a server-side check before issuing match lists. Receipt emails through Resend or similar.
- **Location service.** A geocoding service that converts continent, country, region, and city into a private internal point. A matching service that selects candidates within a 200 km radius inside the same country and only emits public badges, never coordinates.
- **Matching service.** A daily curated list (compatibility and astro) computed server-side from the user's profile and preferences, with deduplication and decay.
- **AI-assisted moderation.** Move `lib/safety.ts` heuristics behind an API that wraps a moderation model and applies thresholds. Route high-severity signals to a human review queue. Keep the soft rewrite suggestion as an explicit, opt-in feature.
- **Real-time chat.** A websocket or push-based chat layer with read receipts, delivery state, and serverside abuse detection.
- **Notifications.** Push and email channels with quiet defaults.
- **Trust and safety tooling.** Internal admin tools for review, limitation, and removal. An audit log for every action.
- **Photo storage.** A media pipeline with face-presence and policy review before photos can appear on a profile.
- **Analytics.** Privacy-preserving analytics, ideally first-party.

## 14. Deployment steps

The prototype deploys to Vercel without configuration:

1. Push the branch to GitHub.
2. In Vercel, click **Add New Project** and import the repository.
3. Accept the detected Next.js defaults. No environment variables are required for the prototype.
4. Click **Deploy**.
5. After the first deploy, you can promote the preview to production from the Vercel dashboard.

For self-hosted deploys:

```bash
npm install
npm run build
npm run start
```

The production server listens on port 3000 by default. Set `PORT` to override.

If a future backend or payment integration is added, copy `.env.example` to `.env.local` and fill in real values. Do not commit real secrets.

## 15. Next engineering steps

Roughly ordered. Each item is a discrete piece of work.

1. **Real account creation and 18 plus age gate.** Behind a hosted auth provider. Wire up email magic links and basic session management.
2. **Backend Profile storage.** Persist the onboarding state and profile edits. Move location collection through a real geocoder.
3. **Stripe-backed membership.** Replace the mock payment screen with a real checkout. Gate the matches API behind verified membership.
4. **Server-side matching.** Compute the daily compatibility and astro lists in the backend with a real candidate pool. Move match explanations to a content service.
5. **Moderation API wrapper.** Replace the local heuristics in `lib/safety.ts` with a server-mediated moderation call. Add a review queue tool for the trust and safety team.
6. **Real chat.** Move chat behind a websocket service. Persist conversations server-side. Add reporting controls.
7. **Photo pipeline.** Real upload with policy review.
8. **Notification delivery.** Push and email with quiet defaults.
9. **Internationalization.** Expand the country list, add localized copy, and support time zones.
10. **Accessibility audit.** Run a full keyboard, screen reader, dynamic type, and color contrast audit.

Anything we ship should preserve the product principles: no map, no exact distance, no live location, no infinite scroll, no swiping, long-form profiles, curated daily matches, AI-assisted safety as a supportive layer, and a small membership that keeps the space intentional.
