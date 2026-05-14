"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { AppHeader } from "@/components/AppHeader";
import { Footer } from "@/components/Footer";
import { GlowCard } from "@/components/GlowCard";
import { LinkButton } from "@/components/Button";
import { MatchCard } from "@/components/MatchCard";
import {
  getAstroMatches,
  getCompatibilityMatches,
} from "@/data/mockProfiles";
import { useMembership } from "@/lib/membership";

type Tab = "compatibility" | "astro";

export default function MatchesPage() {
  const { isMember, hydrated } = useMembership();
  const [tab, setTab] = useState<Tab>("compatibility");
  const [passed, setPassed] = useState<string[]>([]);

  const compatibility = useMemo(() => getCompatibilityMatches(), []);
  const astro = useMemo(() => getAstroMatches(), []);

  const visible = (tab === "compatibility" ? compatibility : astro).filter(
    (p) => !passed.includes(p.id)
  );

  return (
    <main className="min-h-dvh pb-20">
      <AppHeader />

      <div className="mx-auto max-w-3xl px-4 pt-10 sm:px-5">
        <header className="mb-8">
          <p className="text-xs uppercase tracking-[0.22em] text-plum-500">
            Today's lists
          </p>
          <h1 className="mt-2 font-display text-3xl tracking-tight text-burgundy-700 md:text-4xl">
            Five for compatibility. Five for cosmic timing.
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-plum-600 md:text-base">
            We never show exact distance, maps, or live location. Every match
            here sits within your private compatibility region and respects
            identity preferences.
          </p>
        </header>

        {hydrated && !isMember ? <MembershipGate /> : null}

        <div className="mb-6 inline-flex gap-1 rounded-full border border-white bg-white/65 p-1">
          <button
            type="button"
            onClick={() => setTab("compatibility")}
            className={`rounded-full px-4 py-1.5 text-sm transition ${
              tab === "compatibility"
                ? "bg-gradient-to-r from-sky2-300 via-lilac-300 to-mauve-300 text-burgundy-800 shadow-glow-sm"
                : "text-plum-600 hover:text-burgundy-700"
            }`}
          >
            Compatibility
          </button>
          <button
            type="button"
            onClick={() => setTab("astro")}
            className={`rounded-full px-4 py-1.5 text-sm transition ${
              tab === "astro"
                ? "bg-gradient-to-r from-sky2-300 via-lilac-300 to-mauve-300 text-burgundy-800 shadow-glow-sm"
                : "text-plum-600 hover:text-burgundy-700"
            }`}
          >
            Astro
          </button>
        </div>

        {tab === "compatibility" ? (
          <SectionIntro
            eyebrow="Today's compatibility matches"
            headline="Chosen for alignment, not proximity."
            body="Based on values, relationship goals, communication style, identity and attraction settings, and your private compatibility region."
          />
        ) : (
          <SectionIntro
            eyebrow="Today's astro matches"
            headline="A playful layer for cosmic timing."
            body="Astro matches are based on optional astrology and birth-chart style. Playful, never scientific. They never replace your compatibility list."
          />
        )}

        {visible.length > 0 ? (
          <div className="space-y-5">
            {visible.map((profile, i) => (
              <div
                key={profile.id}
                className="animate-rise-in"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <MatchCard profile={profile} category={tab} />
              </div>
            ))}
          </div>
        ) : (
          <GlowCard className="px-6 py-12 text-center">
            <p className="font-display text-2xl text-burgundy-700">
              That is all for today.
            </p>
            <p className="mt-2 text-sm text-plum-600">
              Five thoughtful matches is better than fifty rushed ones. Come
              back tomorrow morning.
            </p>
            <button
              type="button"
              onClick={() => setPassed([])}
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-mauve-200/50 bg-white/75 px-4 py-2 text-sm text-plum-700 transition hover:bg-white"
            >
              Reset today's batch
            </button>
          </GlowCard>
        )}

        <GlowCard className="mt-10 px-6 py-6 md:px-8" tone="tint">
          <div className="flex flex-col items-start gap-2 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="font-display text-lg text-burgundy-700">
                Why only five each?
              </p>
              <p className="mt-1 max-w-xl text-sm text-plum-600">
                Endless options aren't a feature, they are a tax on
                attention. Five gives every person a real chance to be seen.
              </p>
            </div>
            <span className="rounded-full border border-mauve-200/40 bg-white/75 px-3 py-1 text-xs text-plum-700">
              Curated daily
            </span>
          </div>
        </GlowCard>
      </div>

      <Footer />
    </main>
  );
}

function MembershipGate() {
  return (
    <GlowCard className="mb-8 p-6 md:p-8" tone="tint">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="text-[11px] uppercase tracking-[0.22em] text-burgundy-700">
            Activate your membership
          </p>
          <p className="mt-2 font-display text-xl text-burgundy-700 md:text-2xl">
            One small step before your first list.
          </p>
          <p className="mt-2 max-w-xl text-sm text-plum-600">
            Your matches are ready. Activate your one-time $2.99 membership to
            see them. It supports moderation, reduces bots, and keeps the
            space intentional.
          </p>
        </div>
        <div className="w-full sm:w-auto">
          <LinkButton href="/onboarding">
            Continue with $2.99 membership
          </LinkButton>
        </div>
      </div>
      <p className="mt-4 text-xs text-plum-500">
        Prototype only. No payment is collected in this demo.{" "}
        <Link href="/safety" className="underline-offset-4 hover:underline">
          Read about safety
        </Link>
        .
      </p>
    </GlowCard>
  );
}

function SectionIntro({
  eyebrow,
  headline,
  body,
}: {
  eyebrow: string;
  headline: string;
  body: string;
}) {
  return (
    <div className="mb-6">
      <p className="text-[11px] uppercase tracking-[0.22em] text-plum-500">
        {eyebrow}
      </p>
      <p className="mt-1.5 font-display text-xl text-burgundy-700 md:text-2xl">
        {headline}
      </p>
      <p className="mt-1 max-w-2xl text-sm text-plum-600">{body}</p>
    </div>
  );
}
