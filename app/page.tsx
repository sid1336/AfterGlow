import Link from "next/link";
import { AppHeader } from "@/components/AppHeader";
import { Footer } from "@/components/Footer";
import { GlowCard } from "@/components/GlowCard";
import { LinkButton } from "@/components/Button";
import { MockPhonePreview } from "@/components/MockPhonePreview";
import { CompatibilityRing } from "@/components/CompatibilityBar";
import { ProfileAvatar } from "@/components/ProfileAvatar";
import { MembershipCard } from "@/components/MembershipCard";
import { CommunityStandardsCard } from "@/components/CommunityStandards";
import { SafetyFeaturesCard } from "@/components/SafetyFeatures";

const FEATURES = [
  {
    title: "Emotional compatibility over proximity",
    body: "We match on values, communication rhythm, attachment, emotional safety, and shared life direction — not on who's a block away.",
    icon: (
      <path
        d="M12 3l2.5 5 5.5.8-4 3.9 1 5.5L12 16.7 7 18.2l1-5.5-4-3.9 5.5-.8L12 3z"
        fill="currentColor"
      />
    ),
  },
  {
    title: "AI-assisted emotional safety",
    body: "A gentle moderation layer surfaces spam-like, abrupt, or unsafe patterns and offers warmer rewrites. It protects the environment without policing tone.",
    icon: (
      <path
        d="M12 3l8 3v6c0 4.6-3.4 8.4-8 9-4.6-.6-8-4.4-8-9V6l8-3z"
        stroke="currentColor"
        strokeWidth="1.4"
        fill="none"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Curated daily matches",
    body: "Five thoughtful compatibility matches and five playful astro matches each morning. The point is depth, not volume.",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <circle cx="12" cy="12" r="3.2" fill="currentColor" />
      </>
    ),
  },
  {
    title: "A relationship-focused ecosystem",
    body: "Onboarding, prompts, safety, and matching are designed to support long-term partnerships — not to keep you swiping.",
    icon: (
      <>
        <path
          d="M3 12c4-5 14-5 18 0"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
        />
        <circle cx="6" cy="14" r="2.2" fill="currentColor" />
        <circle cx="18" cy="14" r="2.2" fill="currentColor" />
      </>
    ),
  },
  {
    title: "Designed for thoughtful people",
    body: "Long-form prompts, attachment-aware matching, and quiet UI for the kind of dating that asks more questions than it answers.",
    icon: (
      <path
        d="M4 6.5A2.5 2.5 0 016.5 4h11A2.5 2.5 0 0120 6.5v8A2.5 2.5 0 0117.5 17H10l-5 4v-4.2A2.5 2.5 0 014 14.5v-8z"
        stroke="currentColor"
        strokeWidth="1.4"
        fill="none"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Broad-region matching for healthier relationships",
    body: "We organize the community into broad dating regions and compatible time zones. We never show exact distance, your city, a map, or live location.",
    icon: (
      <>
        <path
          d="M12 21s-7-6.1-7-11a7 7 0 0114 0c0 4.9-7 11-7 11z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <circle cx="12" cy="10" r="2.4" fill="currentColor" />
      </>
    ),
  },
  {
    title: "Slow dating and emotional depth",
    body: "A small daily list, long-form prompts, and intentional first messages. The kind of pacing that lets something real take root.",
    icon: (
      <>
        <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path
          d="M12 7v5l3 2"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          fill="none"
        />
      </>
    ),
  },
];

function FeatureIcon({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-blush-200 via-lilac-200 to-sky2-200 text-plum-800 ring-1 ring-inset ring-white/90">
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
        {children}
      </svg>
    </span>
  );
}

export default function LandingPage() {
  return (
    <main>
      <AppHeader variant="marketing" />

      {/* Hero */}
      <section className="relative">
        <div className="mx-auto max-w-6xl px-5 pt-20 pb-16 md:pt-28">
          <div className="grid items-center gap-14 md:grid-cols-[1.05fr_0.95fr]">
            <div className="animate-rise-in">
              <span className="inline-flex items-center gap-2 rounded-full border border-white bg-white/80 px-3 py-1.5 text-xs uppercase tracking-[0.22em] text-plum-700">
                <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-br from-blush-300 to-sky2-300" />
                An intentional relationship ecosystem
              </span>
              <h1 className="mt-7 font-display text-5xl leading-[1.02] tracking-tight text-plum-800 md:text-7xl">
                <span className="text-gradient">Afterglow</span>
              </h1>
              <p className="mt-6 max-w-xl font-display text-2xl leading-snug text-plum-800 md:text-3xl">
                Because dating should feel human again.
              </p>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-plum-600 md:text-lg">
                A curated emotional ecosystem for LGBTQIA+ people looking for
                real connection. Built around compatibility, communication, and
                the slow art of letting something become serious on purpose.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-3">
                <LinkButton href="/onboarding" size="lg">
                  Start your profile
                </LinkButton>
                <LinkButton href="#how-it-works" size="lg" variant="secondary">
                  See how it works
                </LinkButton>
              </div>

              <div className="mt-11 flex flex-wrap items-center gap-x-7 gap-y-3 text-sm text-plum-500">
                <span className="flex items-center gap-2">
                  <Dot /> 5 + 5 curated matches daily
                </span>
                <span className="flex items-center gap-2">
                  <Dot /> Long-form prompts
                </span>
                <span className="flex items-center gap-2">
                  <Dot /> No exact distance or maps
                </span>
                <span className="flex items-center gap-2">
                  <Dot /> No infinite scroll
                </span>
              </div>
            </div>

            <div className="relative mx-auto md:ml-auto">
              <MockPhonePreview caption="A glance at your day">
                <HeroPhoneContent />
              </MockPhonePreview>
            </div>
          </div>
        </div>
      </section>

      {/* Secondary banner */}
      <section className="px-5">
        <div className="mx-auto max-w-6xl">
          <GlowCard className="px-6 py-8 md:px-12" tone="tint">
            <div className="flex flex-col items-start justify-between gap-3 md:flex-row md:items-center">
              <p className="font-display text-xl text-plum-800 md:text-2xl">
                Real people. Real feelings.
              </p>
              <p className="max-w-xl text-sm text-plum-600 md:text-base">
                Afterglow is a quieter way to date — designed for queer,
                trans, nonbinary, and questioning folks ready to be met, not
                just scrolled past.
              </p>
            </div>
          </GlowCard>
        </div>
      </section>

      {/* Features (7) */}
      <section id="how-it-works" className="px-5 pt-28">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs uppercase tracking-[0.22em] text-plum-500">
              How Afterglow works
            </p>
            <h2 className="mt-3 font-display text-3xl tracking-tight text-plum-800 md:text-5xl">
              A small, considered ecosystem for the long, slow kind of love.
            </h2>
            <p className="mt-5 text-base text-plum-600 md:text-lg">
              Afterglow trades the dopamine of endless swiping for something
              steadier — a daily list of thoughtful matches, deep prompts,
              and quiet UI that helps you show up like yourself.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f) => (
              <GlowCard key={f.title} interactive className="p-6 md:p-7">
                <FeatureIcon>{f.icon}</FeatureIcon>
                <h3 className="mt-5 font-display text-xl text-plum-800">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-plum-600">
                  {f.body}
                </p>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>

      {/* How a day looks */}
      <section className="px-5 pt-28">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Tell us who you are",
                body: "Twenty-four reflective steps cover identity, attachment, communication, values, region, and the prompts that introduce you in your own voice.",
              },
              {
                step: "02",
                title: "Meet a curated few",
                body: "Each morning, five compatibility matches and five optional astro matches — chosen for alignment, not proximity.",
              },
              {
                step: "03",
                title: "Start a real conversation",
                body: "Open with a thoughtful prompt that means something. An AI-assisted safety layer keeps the space respectful, gently.",
              },
            ].map((s) => (
              <div key={s.step} className="relative">
                <span className="font-display text-5xl text-gradient md:text-6xl">
                  {s.step}
                </span>
                <h3 className="mt-4 font-display text-xl text-plum-800">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-plum-600">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership */}
      <section className="px-5 pt-28">
        <div className="mx-auto max-w-6xl">
          <MembershipCard />
        </div>
      </section>

      {/* Community standards */}
      <section className="px-5 pt-14">
        <div className="mx-auto max-w-6xl">
          <CommunityStandardsCard />
        </div>
      </section>

      {/* AI safety */}
      <section className="px-5 pt-14">
        <div className="mx-auto max-w-6xl">
          <SafetyFeaturesCard />
        </div>
      </section>

      {/* Quiet promise */}
      <section className="px-5 pt-28">
        <div className="mx-auto max-w-4xl text-center">
          <GlowCard className="px-6 py-12 md:px-14 md:py-16" tone="tint">
            <p className="text-xs uppercase tracking-[0.24em] text-plum-500">
              Our quiet promise
            </p>
            <p className="mt-5 font-display text-2xl leading-snug text-plum-800 md:text-3xl">
              No map. No exact distance. No 'online now' grid. No infinite
              scroll. Just a small, considered ecosystem designed for
              LGBTQIA+ people who came here to be seen, not measured.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <LinkButton href="/onboarding" size="lg">
                Start your profile
              </LinkButton>
              <Link
                href="/matches"
                className="text-sm text-plum-500 underline-offset-4 transition hover:text-plum-800 hover:underline"
              >
                Or peek at today's matches →
              </Link>
            </div>
          </GlowCard>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function Dot() {
  return (
    <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-br from-blush-300 to-sky2-300" />
  );
}

function HeroPhoneContent() {
  return (
    <div className="flex h-full w-full flex-col">
      <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.22em] text-plum-500">
        <span>Tuesday</span>
        <span>Afterglow</span>
      </div>
      <div className="mt-3">
        <p className="font-display text-[22px] leading-tight text-plum-800">
          Today's compatibility list.
        </p>
        <p className="mt-1 text-[11px] leading-relaxed text-plum-500">
          Chosen for alignment, not proximity.
        </p>
      </div>

      <div className="mt-4 flex-1 space-y-3 overflow-hidden">
        {[
          { name: "Amara", accent: "blush" as const, pct: 92, label: "she/her" },
          { name: "Léandra", accent: "lilac" as const, pct: 89, label: "she/her" },
          { name: "Yui", accent: "sky" as const, pct: 86, label: "she/her" },
          { name: "Sam", accent: "blush" as const, pct: 86, label: "they/them" },
        ].map((p) => (
          <div
            key={p.name}
            className="flex items-center gap-3 rounded-2xl border border-white bg-white/75 p-3"
          >
            <ProfileAvatar name={p.name} accent={p.accent} size={40} />
            <div className="min-w-0 flex-1">
              <p className="truncate text-[13px] font-medium text-plum-800">
                {p.name}
                <span className="text-plum-500"> · {p.label}</span>
              </p>
              <p className="truncate text-[11px] text-plum-500">
                Looking for a serious relationship
              </p>
            </div>
            <div className="rounded-full bg-white/85 px-2 py-0.5 text-[10px] font-medium tabular-nums text-plum-800 ring-1 ring-inset ring-plum-200/30">
              {p.pct}%
            </div>
          </div>
        ))}
      </div>

      <div className="mt-3 flex items-center justify-center">
        <CompatibilityRing value={92} size={70} label="today" />
      </div>
    </div>
  );
}
