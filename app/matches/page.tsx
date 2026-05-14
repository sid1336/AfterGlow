"use client";

import { useState } from "react";
import { AppHeader } from "@/components/AppHeader";
import { Footer } from "@/components/Footer";
import { GlowCard } from "@/components/GlowCard";
import { MatchCard } from "@/components/MatchCard";
import { mockProfiles } from "@/data/mockProfiles";

export default function MatchesPage() {
  const [passed, setPassed] = useState<string[]>([]);

  const visible = mockProfiles.filter((p) => !passed.includes(p.id));

  return (
    <main className="min-h-dvh pb-20">
      <AppHeader />

      <div className="mx-auto max-w-3xl px-5 pt-10">
        <header className="mb-8">
          <p className="text-xs uppercase tracking-[0.22em] text-ink-300">
            Tuesday · Today's five
          </p>
          <h1 className="mt-2 font-display text-3xl tracking-tight text-ink-50 md:text-4xl">
            Today's matches were chosen for compatibility, not proximity.
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-ink-200 md:text-base">
            Five people who feel like they could fit. Take your time with each
            one. New matches arrive tomorrow morning.
          </p>
        </header>

        {visible.length > 0 ? (
          <div className="space-y-5">
            {visible.map((profile, i) => (
              <div
                key={profile.id}
                className="animate-rise-in"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <MatchCard profile={profile} />
              </div>
            ))}
          </div>
        ) : (
          <GlowCard className="px-6 py-12 text-center">
            <p className="font-display text-2xl text-ink-50">
              That's all for today.
            </p>
            <p className="mt-2 text-sm text-ink-200">
              We'd rather send you five thoughtful matches than fifty rushed
              ones. Come back tomorrow morning.
            </p>
            <button
              type="button"
              onClick={() => setPassed([])}
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-ink-100 transition hover:bg-white/10"
            >
              Reset today's batch
            </button>
          </GlowCard>
        )}

        <GlowCard className="mt-10 px-6 py-6 md:px-8">
          <div className="flex flex-col items-start gap-2 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="font-display text-lg text-ink-50">
                Why only five?
              </p>
              <p className="mt-1 max-w-xl text-sm text-ink-200">
                Endless options aren't a feature, they're a tax on attention.
                Five matches gives every person a real chance to be seen.
              </p>
            </div>
            <span className="rounded-full border border-white/12 bg-white/5 px-3 py-1 text-xs text-ink-100">
              Curated daily
            </span>
          </div>
        </GlowCard>
      </div>

      <Footer />
    </main>
  );
}
