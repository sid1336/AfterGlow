"use client";

import { useState } from "react";
import Link from "next/link";
import { AppHeader } from "@/components/AppHeader";
import { Footer } from "@/components/Footer";
import { GlowCard } from "@/components/GlowCard";
import { CompatibilityBar } from "@/components/CompatibilityBar";
import { ProfileSection } from "@/components/ProfileSection";
import { ProfileAvatar } from "@/components/ProfileAvatar";
import { LinkButton } from "@/components/Button";

const READINESS = [
  {
    key: "clearIntentions",
    label: "Clear intentions",
    value: 92,
    hint: "Your profile clearly says what you're looking for. That's a gift to the people we send your way.",
  },
  {
    key: "emotionalOpenness",
    label: "Emotional openness",
    value: 80,
    hint: "Your prompts show real interiority. Consider adding one more honest line about how you grow.",
  },
  {
    key: "communicationClarity",
    label: "Communication clarity",
    value: 74,
    hint: "Your style is set, but a sentence on what reassurance looks like for you would help.",
  },
  {
    key: "compatibilityDepth",
    label: "Compatibility depth",
    value: 86,
    hint: "You've shared enough for us to make thoughtful matches. The more you reflect, the better we listen.",
  },
];

export default function SettingsPage() {
  const [notifications, setNotifications] = useState({
    dailyMatches: true,
    newMessages: true,
    weeklyReflection: false,
  });

  const [visibility, setVisibility] = useState({
    incognito: false,
    showAge: true,
    showCity: true,
  });

  const readinessOverall = Math.round(
    READINESS.reduce((sum, r) => sum + r.value, 0) / READINESS.length
  );

  return (
    <main className="min-h-dvh pb-20">
      <AppHeader />

      <div className="mx-auto max-w-3xl px-5 pt-10">
        <header className="mb-8">
          <p className="text-xs uppercase tracking-[0.22em] text-ink-300">
            Settings
          </p>
          <h1 className="mt-2 font-display text-3xl tracking-tight text-ink-50 md:text-4xl">
            Your space, your pace.
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-ink-200 md:text-base">
            A quiet place to keep your profile honest, your matches relevant,
            and your boundaries respected.
          </p>
        </header>

        {/* Profile snapshot */}
        <GlowCard className="p-6 md:p-8">
          <div className="flex flex-col items-start gap-5 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-4">
              <ProfileAvatar name="You" accent="violet" size={72} />
              <div>
                <p className="font-display text-2xl leading-tight text-ink-50">
                  You
                </p>
                <p className="text-sm text-ink-300">
                  Looking for a serious relationship · Monogamous
                </p>
              </div>
            </div>
            <div className="w-full md:w-auto">
              <div className="flex items-center justify-between text-xs text-ink-300 md:gap-3">
                <span>Profile completeness</span>
                <span className="tabular-nums">82%</span>
              </div>
              <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/8 md:w-64">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-glow-pink via-glow-mauve to-glow-sky"
                  style={{ width: "82%" }}
                />
              </div>
              <div className="mt-3 flex justify-end">
                <LinkButton href="/profile" size="sm" variant="secondary">
                  Edit profile
                </LinkButton>
              </div>
            </div>
          </div>
        </GlowCard>

        {/* Relationship readiness */}
        <div className="mt-6">
          <ProfileSection
            title="Relationship readiness"
            description="A gentle guide, not a grade. These reflect how clearly you've shared yourself — they're not a verdict on who you are."
            action={
              <div className="hidden rounded-full border border-white/12 bg-white/5 px-3 py-1 text-xs text-ink-100 sm:inline-flex">
                Overall · {readinessOverall}%
              </div>
            }
          >
            <div className="grid gap-5 md:grid-cols-2">
              {READINESS.map((r) => (
                <div
                  key={r.key}
                  className="rounded-2xl border border-white/8 bg-white/3 p-4"
                >
                  <CompatibilityBar label={r.label} value={r.value} />
                  <p className="mt-3 text-xs leading-relaxed text-ink-300">
                    {r.hint}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-5 rounded-2xl border border-white/8 bg-white/3 p-4">
              <p className="font-display text-base text-ink-50">
                One small step for today
              </p>
              <p className="mt-1.5 text-sm text-ink-200">
                Add a sentence on how you ask for reassurance. It will help us
                find people who already speak your language.
              </p>
              <Link
                href="/profile"
                className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-glow-pink/90 transition hover:text-glow-pink"
              >
                Update my profile →
              </Link>
            </div>
          </ProfileSection>
        </div>

        {/* Notifications */}
        <div className="mt-6">
          <ProfileSection
            title="Notifications"
            description="Calm by default. You're in control of when we reach out."
          >
            <div className="space-y-2.5">
              <ToggleRow
                label="Daily matches"
                description="A quiet morning nudge when your five are ready."
                checked={notifications.dailyMatches}
                onChange={(v) =>
                  setNotifications((s) => ({ ...s, dailyMatches: v }))
                }
              />
              <ToggleRow
                label="New messages"
                description="When someone you matched with writes to you."
                checked={notifications.newMessages}
                onChange={(v) =>
                  setNotifications((s) => ({ ...s, newMessages: v }))
                }
              />
              <ToggleRow
                label="Weekly reflection"
                description="A short Sunday note to revisit who you are, gently."
                checked={notifications.weeklyReflection}
                onChange={(v) =>
                  setNotifications((s) => ({ ...s, weeklyReflection: v }))
                }
              />
            </div>
          </ProfileSection>
        </div>

        {/* Privacy */}
        <div className="mt-6">
          <ProfileSection
            title="Privacy and visibility"
            description="Decide who sees what. Nothing is shared by default that you haven't chosen."
          >
            <div className="space-y-2.5">
              <ToggleRow
                label="Incognito profile"
                description="Only people we match you with can see your profile."
                checked={visibility.incognito}
                onChange={(v) =>
                  setVisibility((s) => ({ ...s, incognito: v }))
                }
              />
              <ToggleRow
                label="Show my age"
                description="Hide if you'd rather share it in conversation."
                checked={visibility.showAge}
                onChange={(v) =>
                  setVisibility((s) => ({ ...s, showAge: v }))
                }
              />
              <ToggleRow
                label="Show my city"
                description="We never show exact distance or maps."
                checked={visibility.showCity}
                onChange={(v) =>
                  setVisibility((s) => ({ ...s, showCity: v }))
                }
              />
            </div>
          </ProfileSection>
        </div>

        {/* Safety */}
        <div className="mt-6">
          <ProfileSection
            title="Safety and respect"
            description="We hold the line so you don't have to."
          >
            <ul className="grid gap-3 text-sm text-ink-200 md:grid-cols-2">
              {[
                "Block and report from any profile or chat.",
                "Dealbreakers are honored quietly — you'll never see those profiles.",
                "Photos are reviewed before they reach the people we match you with.",
                "Pause your account anytime. We'll keep your matches gentle on return.",
              ].map((line) => (
                <li
                  key={line}
                  className="flex items-start gap-3 rounded-2xl border border-white/8 bg-white/3 p-4"
                >
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gradient-to-br from-glow-pink to-glow-sky" />
                  <span className="leading-relaxed">{line}</span>
                </li>
              ))}
            </ul>
          </ProfileSection>
        </div>

        {/* Account actions */}
        <div className="mt-6">
          <GlowCard className="px-6 py-6 md:px-8">
            <div className="flex flex-col items-stretch justify-between gap-3 sm:flex-row sm:items-center">
              <div>
                <p className="font-display text-lg text-ink-50">
                  Need a quiet week?
                </p>
                <p className="text-sm text-ink-300">
                  Pause Afterglow anytime. We'll be here when you're ready to
                  come back.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  className="rounded-full border border-white/12 bg-white/5 px-4 py-2 text-sm text-ink-100 transition hover:bg-white/10"
                >
                  Pause matches
                </button>
                <button
                  type="button"
                  className="rounded-full border border-white/10 bg-transparent px-4 py-2 text-sm text-ink-300 transition hover:bg-white/5"
                >
                  Sign out
                </button>
              </div>
            </div>
          </GlowCard>
        </div>
      </div>

      <Footer />
    </main>
  );
}

interface ToggleRowProps {
  label: string;
  description?: string;
  checked: boolean;
  onChange: (v: boolean) => void;
}

function ToggleRow({ label, description, checked, onChange }: ToggleRowProps) {
  return (
    <div className="flex items-start justify-between gap-4 rounded-2xl border border-white/8 bg-white/3 p-4">
      <div>
        <p className="text-sm font-medium text-ink-50">{label}</p>
        {description ? (
          <p className="mt-1 text-xs text-ink-300">{description}</p>
        ) : null}
      </div>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        onClick={() => onChange(!checked)}
        className={[
          "relative h-6 w-11 shrink-0 rounded-full transition",
          checked
            ? "bg-gradient-to-r from-glow-pink via-glow-mauve to-glow-sky"
            : "bg-white/12",
        ].join(" ")}
      >
        <span
          className={[
            "absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-all",
            checked ? "left-[22px]" : "left-0.5",
          ].join(" ")}
        />
      </button>
    </div>
  );
}
