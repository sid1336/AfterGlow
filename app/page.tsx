import Link from "next/link";
import { AppHeader } from "@/components/AppHeader";
import { Footer } from "@/components/Footer";
import { GlowCard } from "@/components/GlowCard";
import { LinkButton } from "@/components/Button";
import { MockPhonePreview } from "@/components/MockPhonePreview";
import { CompatibilityRing } from "@/components/CompatibilityBar";
import { ProfileAvatar } from "@/components/ProfileAvatar";

const FEATURES = [
  {
    title: "Compatibility over proximity",
    body: "We match on intention, communication, values, and emotional readiness — not on who happens to be down the block.",
    icon: (
      <path
        d="M12 3l2.5 5 5.5.8-4 3.9 1 5.5L12 16.7 7 18.2l1-5.5-4-3.9 5.5-.8L12 3z"
        fill="currentColor"
      />
    ),
  },
  {
    title: "Intentions first",
    body: "You'll know what someone is here for before you swap a single message. No second-guessing, no decoding.",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <circle cx="12" cy="12" r="3.2" fill="currentColor" />
      </>
    ),
  },
  {
    title: "Conversation that matters",
    body: "Open with a thoughtful prompt instead of an empty 'hey'. Start where it gets interesting.",
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
    title: "Safety and respect",
    body: "A calm, considered space built for queer men who want to be met — not measured. Dealbreakers honored. Boundaries built in.",
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
];

function FeatureIcon({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-glow-pink/30 via-glow-mauve/25 to-glow-sky/30 text-ink-50 ring-1 ring-inset ring-white/15">
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
        <div className="mx-auto max-w-6xl px-5 pt-16 pb-12 md:pt-24">
          <div className="grid items-center gap-12 md:grid-cols-[1.05fr_0.95fr]">
            <div className="animate-rise-in">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-3 py-1.5 text-xs uppercase tracking-[0.22em] text-ink-200">
                <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-br from-glow-pink to-glow-sky" />
                For queer men who want something real
              </span>
              <h1 className="mt-6 font-display text-5xl leading-[1.05] tracking-tight text-ink-50 md:text-7xl">
                <span className="text-gradient">Afterglow</span>
              </h1>
              <p className="mt-5 max-w-xl font-display text-2xl leading-snug text-ink-100 md:text-3xl">
                Because dating should feel human again.
              </p>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-200 md:text-lg">
                A relationship-focused dating app for queer men seeking real
                connection, emotional depth, and something that lasts.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <LinkButton href="/onboarding" size="lg">
                  Start your profile
                </LinkButton>
                <LinkButton href="#how-it-works" size="lg" variant="secondary">
                  See how it works
                </LinkButton>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-ink-300">
                <span className="flex items-center gap-2">
                  <Dot /> No hookup culture
                </span>
                <span className="flex items-center gap-2">
                  <Dot /> No infinite scroll
                </span>
                <span className="flex items-center gap-2">
                  <Dot /> 5 curated matches a day
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
          <GlowCard className="px-6 py-7 md:px-10">
            <div className="flex flex-col items-start justify-between gap-3 md:flex-row md:items-center">
              <p className="font-display text-xl text-ink-50 md:text-2xl">
                Real people. Real feelings.
              </p>
              <p className="max-w-xl text-sm text-ink-200 md:text-base">
                Afterglow is a quieter way to date — designed for queer men who
                are ready to be seen, not just scrolled past.
              </p>
            </div>
          </GlowCard>
        </div>
      </section>

      {/* Features */}
      <section id="how-it-works" className="px-5 pt-20">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs uppercase tracking-[0.22em] text-ink-300">
              How it works
            </p>
            <h2 className="mt-3 font-display text-3xl tracking-tight text-ink-50 md:text-5xl">
              Built for the long, slow kind of love.
            </h2>
            <p className="mt-4 text-base text-ink-200 md:text-lg">
              Afterglow trades the dopamine of endless swiping for something
              steadier — a small, thoughtful list of people who actually fit.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {FEATURES.map((f) => (
              <GlowCard key={f.title} interactive className="p-6 md:p-7">
                <FeatureIcon>{f.icon}</FeatureIcon>
                <h3 className="mt-5 font-display text-xl text-ink-50">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-200">
                  {f.body}
                </p>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>

      {/* How a day looks */}
      <section className="px-5 pt-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Tell us what you want",
                body: "Share your intentions, your communication style, your values, and your dealbreakers. We listen carefully.",
              },
              {
                step: "02",
                title: "Meet five, not five hundred",
                body: "Each morning, five carefully chosen people. Compatibility — not proximity — leads the way.",
              },
              {
                step: "03",
                title: "Start with a real conversation",
                body: "Open with a thoughtful prompt that means something. Let the relationship begin honestly.",
              },
            ].map((s) => (
              <div key={s.step} className="relative">
                <span className="font-display text-5xl text-gradient md:text-6xl">
                  {s.step}
                </span>
                <h3 className="mt-3 font-display text-xl text-ink-50">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-200">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quiet promise */}
      <section className="px-5 pt-24">
        <div className="mx-auto max-w-4xl text-center">
          <GlowCard className="px-6 py-10 md:px-12 md:py-14">
            <p className="text-xs uppercase tracking-[0.24em] text-ink-300">
              Our quiet promise
            </p>
            <p className="mt-4 font-display text-2xl leading-snug text-ink-50 md:text-3xl">
              No map. No exact distance. No 'online now' grid. No infinite scroll.
              Just five people a day who could actually fit the life you're building.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <LinkButton href="/onboarding" size="lg">
                Start your profile
              </LinkButton>
              <Link
                href="/matches"
                className="text-sm text-ink-200 underline-offset-4 transition hover:text-ink-50 hover:underline"
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
    <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-br from-glow-pink to-glow-sky" />
  );
}

function HeroPhoneContent() {
  return (
    <div className="flex h-full w-full flex-col">
      <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.22em] text-ink-300">
        <span>Tuesday</span>
        <span>Afterglow</span>
      </div>
      <div className="mt-3">
        <p className="font-display text-[22px] leading-tight text-ink-50">
          Today's five.
        </p>
        <p className="mt-1 text-[11px] leading-relaxed text-ink-300">
          Chosen for compatibility, not proximity.
        </p>
      </div>

      <div className="mt-4 flex-1 space-y-3 overflow-hidden">
        {[
          { name: "Elias", accent: "rose" as const, pct: 94, city: "Brooklyn" },
          { name: "Noah", accent: "violet" as const, pct: 89, city: "Portland" },
          { name: "Sam", accent: "mauve" as const, pct: 86, city: "Austin" },
        ].map((p) => (
          <div
            key={p.name}
            className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-3"
          >
            <ProfileAvatar name={p.name} accent={p.accent} size={42} />
            <div className="min-w-0 flex-1">
              <p className="truncate text-[13px] font-medium text-ink-50">
                {p.name}
                <span className="text-ink-300"> · {p.city}</span>
              </p>
              <p className="truncate text-[11px] text-ink-300">
                Looking for a serious relationship
              </p>
            </div>
            <div className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] font-medium tabular-nums text-ink-50">
              {p.pct}%
            </div>
          </div>
        ))}
      </div>

      <div className="mt-3 flex items-center justify-center">
        <CompatibilityRing value={94} size={70} label="today" />
      </div>
    </div>
  );
}
