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
import { MembershipCard } from "@/components/MembershipCard";

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
    showPronouns: true,
  });

  const [safety, setSafety] = useState({
    respectfulChecks: true,
    spamDetection: true,
    harassmentDetection: true,
    softRewrites: true,
    standardReview: true,
  });

  const readinessOverall = Math.round(
    READINESS.reduce((sum, r) => sum + r.value, 0) / READINESS.length
  );

  return (
    <main className="min-h-dvh pb-20">
      <AppHeader />

      <div className="mx-auto max-w-3xl px-5 pt-10">
        <header className="mb-8">
          <p className="text-xs uppercase tracking-[0.22em] text-plum-500">
            Settings
          </p>
          <h1 className="mt-2 font-display text-3xl tracking-tight text-plum-800 md:text-4xl">
            Your space, your pace.
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-plum-600 md:text-base">
            A quiet place to keep your profile honest, your matches relevant,
            and your boundaries respected.
          </p>
        </header>

        {/* Profile snapshot */}
        <GlowCard className="p-6 md:p-9">
          <div className="flex flex-col items-start gap-5 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-4">
              <ProfileAvatar name="You" accent="lilac" size={76} />
              <div>
                <p className="font-display text-2xl leading-tight text-plum-800">
                  You
                </p>
                <p className="text-sm text-plum-500">
                  Looking for a serious relationship · Monogamous
                </p>
                <div className="mt-2 flex flex-wrap items-center gap-1.5">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-br from-blush-200 to-sky2-200 px-2.5 py-0.5 text-[10px] uppercase tracking-[0.2em] text-plum-700">
                    Verified member
                  </span>
                  <span className="rounded-full border border-plum-200/50 bg-white/75 px-2.5 py-0.5 text-[10px] uppercase tracking-[0.2em] text-plum-700">
                    Standing · good
                  </span>
                </div>
              </div>
            </div>
            <div className="flex shrink-0 items-center">
              <LinkButton href="/profile" size="sm" variant="secondary">
                Edit profile
              </LinkButton>
            </div>
          </div>

          {/* Three depth tiles */}
          <div className="mt-7 grid gap-4 sm:grid-cols-3">
            <DepthTile
              label="Profile completeness"
              value={82}
              hint="The fields you've filled."
            />
            <DepthTile
              label="Profile depth score"
              value={78}
              hint="How richly your prompts and answers describe you."
            />
            <DepthTile
              label="Emotional compatibility depth"
              value={84}
              hint="How much we can read from what you've shared so far."
            />
          </div>
        </GlowCard>

        {/* Membership */}
        <div className="mt-6">
          <MembershipCard />
        </div>

        {/* Relationship readiness */}
        <div className="mt-6">
          <ProfileSection
            title="Relationship readiness"
            description="A gentle guide, not a grade. These reflect how clearly you've shared yourself — they're not a verdict on who you are."
            action={
              <div className="hidden rounded-full border border-plum-200/50 bg-white/70 px-3 py-1 text-xs text-plum-700 sm:inline-flex">
                Overall · {readinessOverall}%
              </div>
            }
          >
            <div className="grid gap-5 md:grid-cols-2">
              {READINESS.map((r) => (
                <div
                  key={r.key}
                  className="rounded-2xl border border-white/80 bg-white/65 p-4"
                >
                  <CompatibilityBar label={r.label} value={r.value} />
                  <p className="mt-3 text-xs leading-relaxed text-plum-500">
                    {r.hint}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-5 rounded-2xl border border-white/80 bg-white/65 p-4">
              <p className="font-display text-base text-plum-800">
                One small step for today
              </p>
              <p className="mt-1.5 text-sm text-plum-600">
                Add a sentence on how you ask for reassurance. It will help us
                find people who already speak your language.
              </p>
              <Link
                href="/profile"
                className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-plum-700 transition hover:text-plum-900"
              >
                Update my profile →
              </Link>
            </div>
          </ProfileSection>
        </div>

        {/* Community standing */}
        <div className="mt-6">
          <ProfileSection
            title="Community standing"
            description="A quiet signal of how your profile and conversations land within Afterglow's community standards."
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/80 bg-white/65 p-4">
                <p className="text-[11px] uppercase tracking-[0.18em] text-plum-500">
                  Status
                </p>
                <p className="mt-1.5 font-display text-xl text-plum-800">
                  Member in good standing
                </p>
                <p className="mt-1 text-xs text-plum-500">
                  No reviews on your account. Thank you for keeping it kind.
                </p>
              </div>
              <div className="rounded-2xl border border-white/80 bg-white/65 p-4">
                <p className="text-[11px] uppercase tracking-[0.18em] text-plum-500">
                  Recent signals
                </p>
                <ul className="mt-1.5 space-y-1.5 text-sm text-plum-700">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-plum-500" />
                    <span>Messages read as warm and considered.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-plum-500" />
                    <span>No reports filed in the last 90 days.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-plum-500" />
                    <span>You've used a thoughtful opener prompt 4 of 5 times.</span>
                  </li>
                </ul>
              </div>
            </div>
            <p className="mt-4 text-xs text-plum-500">
              Read our{" "}
              <Link href="/standards" className="underline">
                Community Intent Standards
              </Link>{" "}
              to see what we hold the space to.
            </p>
          </ProfileSection>
        </div>

        {/* AI-assisted safety preferences */}
        <div className="mt-6">
          <ProfileSection
            title="AI-assisted emotional safety"
            description="A gentle moderation layer that helps protect the emotional environment. You can turn pieces of it off — though we recommend keeping it on."
          >
            <div className="space-y-2.5">
              <ToggleRow
                label="Respectful conversation checks"
                description="Local prototype scans your outgoing messages for abrupt or objectifying patterns."
                checked={safety.respectfulChecks}
                onChange={(v) =>
                  setSafety((s) => ({ ...s, respectfulChecks: v }))
                }
              />
              <ToggleRow
                label="Spam pattern detection"
                description="Quietly flags copy-paste openers, links, and promotional language."
                checked={safety.spamDetection}
                onChange={(v) => setSafety((s) => ({ ...s, spamDetection: v }))}
              />
              <ToggleRow
                label="Harassment detection"
                description="Routes messages that read as cruel or coercive to a human review team."
                checked={safety.harassmentDetection}
                onChange={(v) =>
                  setSafety((s) => ({ ...s, harassmentDetection: v }))
                }
              />
              <ToggleRow
                label="Soft message rewrite suggestions"
                description="Offers a warmer version of an abrupt or objectifying message — you always choose to send."
                checked={safety.softRewrites}
                onChange={(v) =>
                  setSafety((s) => ({ ...s, softRewrites: v }))
                }
              />
              <ToggleRow
                label="Community standard review"
                description="Quietly reviews repeated patterns of disrespect across your account."
                checked={safety.standardReview}
                onChange={(v) =>
                  setSafety((s) => ({ ...s, standardReview: v }))
                }
              />
            </div>
            <p className="mt-4 text-xs text-plum-500">
              Prototype only — checks run locally on this device and don't call
              an external AI service.
            </p>
          </ProfileSection>
        </div>

        {/* Privacy & location */}
        <div className="mt-6">
          <ProfileSection
            title="Privacy and location"
            description="What we show, what we don't, and what we never collect."
          >
            <div className="rounded-2xl border border-sky2-300/60 bg-sky2-50/70 p-4">
              <p className="text-sm font-medium text-plum-800">
                Broad regions only — never exact location.
              </p>
              <p className="mt-1 text-xs leading-relaxed text-plum-600">
                Afterglow uses broad regions for compatibility. We never show
                exact distance, your city, your live location, or a map.
              </p>
            </div>
            <div className="mt-4 space-y-2.5">
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
                label="Show my pronouns publicly"
                description="Recommended. Helps your matches meet you accurately."
                checked={visibility.showPronouns}
                onChange={(v) =>
                  setVisibility((s) => ({ ...s, showPronouns: v }))
                }
              />
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
                description="A quiet morning nudge when your compatibility and astro lists are ready."
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

        {/* Account actions */}
        <div className="mt-6">
          <GlowCard className="px-6 py-6 md:px-8">
            <div className="flex flex-col items-stretch justify-between gap-3 sm:flex-row sm:items-center">
              <div>
                <p className="font-display text-lg text-plum-800">
                  Need a quiet week?
                </p>
                <p className="text-sm text-plum-500">
                  Pause Afterglow anytime. We'll be here when you're ready to
                  come back.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  className="rounded-full border border-plum-200/60 bg-white/70 px-4 py-2 text-sm text-plum-700 transition hover:bg-white"
                >
                  Pause matches
                </button>
                <button
                  type="button"
                  className="rounded-full border border-plum-200/40 bg-transparent px-4 py-2 text-sm text-plum-500 transition hover:bg-white/50"
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

interface DepthTileProps {
  label: string;
  value: number;
  hint: string;
}

function DepthTile({ label, value, hint }: DepthTileProps) {
  return (
    <div className="rounded-2xl border border-white bg-white/75 p-4">
      <p className="text-[11px] uppercase tracking-[0.18em] text-plum-500">
        {label}
      </p>
      <div className="mt-2 flex items-baseline justify-between gap-3">
        <span className="font-display text-2xl text-plum-800">
          {value}
          <span className="text-base text-plum-500">%</span>
        </span>
      </div>
      <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/85 ring-1 ring-inset ring-plum-200/30">
        <div
          className="h-full rounded-full bg-gradient-to-r from-blush-300 via-lilac-300 to-sky2-300"
          style={{ width: `${value}%` }}
        />
      </div>
      <p className="mt-2 text-xs text-plum-500">{hint}</p>
    </div>
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
    <div className="flex items-start justify-between gap-4 rounded-2xl border border-white/80 bg-white/65 p-4">
      <div>
        <p className="text-sm font-medium text-plum-800">{label}</p>
        {description ? (
          <p className="mt-1 text-xs text-plum-500">{description}</p>
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
            ? "bg-gradient-to-r from-blush-300 via-lilac-300 to-sky2-300"
            : "bg-plum-200/50",
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
