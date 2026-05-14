import Link from "next/link";
import { notFound } from "next/navigation";
import { AppHeader } from "@/components/AppHeader";
import { Footer } from "@/components/Footer";
import { GlowCard } from "@/components/GlowCard";
import { LinkButton } from "@/components/Button";
import { CompatibilityBar, CompatibilityRing } from "@/components/CompatibilityBar";
import { PromptField, ProfileSection } from "@/components/ProfileSection";
import { ProfileAvatar } from "@/components/ProfileAvatar";
import { PromptCard } from "@/components/PromptChip";
import { getProfileById } from "@/data/mockProfiles";

export function generateStaticParams() {
  return [
    { id: "elias" },
    { id: "noah" },
    { id: "sam" },
    { id: "julian" },
    { id: "marco" },
  ];
}

const THOUGHTFUL_PROMPTS = [
  "What kind of relationship are you hoping to build?",
  "What makes you feel safe with someone?",
  "What does commitment mean to you?",
];

export default function MatchDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const profile = getProfileById(params.id);
  if (!profile) return notFound();

  return (
    <main className="min-h-dvh pb-24">
      <AppHeader />

      <div className="mx-auto max-w-4xl px-5 pt-10">
        <div className="mb-6">
          <Link
            href="/matches"
            className="text-xs uppercase tracking-[0.22em] text-ink-300 transition hover:text-ink-100"
          >
            ← Back to today's matches
          </Link>
        </div>

        {/* Hero card */}
        <GlowCard className="overflow-hidden p-6 md:p-10">
          <div className="grid items-center gap-8 md:grid-cols-[auto_1fr_auto]">
            <ProfileAvatar
              name={profile.name}
              accent={profile.accent}
              size={140}
            />
            <div>
              <div className="flex flex-wrap items-baseline gap-2">
                <h1 className="font-display text-4xl tracking-tight text-ink-50 md:text-5xl">
                  {profile.name}
                </h1>
                <span className="text-ink-200">·</span>
                <span className="text-lg text-ink-200">{profile.age}</span>
              </div>
              <p className="mt-1 text-ink-300">
                {profile.city}
                {profile.pronouns ? ` · ${profile.pronouns}` : ""}
              </p>
              <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-ink-100">
                {profile.bio}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                <span className="rounded-full border border-white/12 bg-white/5 px-3 py-1 text-xs text-ink-100">
                  {profile.intention}
                </span>
                <span className="rounded-full border border-white/12 bg-white/5 px-3 py-1 text-xs text-ink-100">
                  {profile.style}
                </span>
                <span className="rounded-full border border-white/12 bg-white/5 px-3 py-1 text-xs text-ink-100">
                  {profile.communication}
                </span>
              </div>
            </div>
            <div className="mx-auto md:mx-0">
              <CompatibilityRing
                value={profile.compatibility}
                size={130}
                label="compatible"
              />
            </div>
          </div>
        </GlowCard>

        {/* Compatibility breakdown */}
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <ProfileSection
            title="Compatibility breakdown"
            description="A few signals on why we thought of you for each other."
          >
            <div className="space-y-5">
              <CompatibilityBar
                label="Relationship intention"
                value={profile.breakdown.relationshipIntention}
                hint="You're both here for something real."
              />
              <CompatibilityBar
                label="Communication style"
                value={profile.breakdown.communicationStyle}
                hint="Your rhythms feel compatible."
              />
              <CompatibilityBar
                label="Emotional availability"
                value={profile.breakdown.emotionalAvailability}
                hint="Both ready to be honest and present."
              />
              <CompatibilityBar
                label="Shared values"
                value={profile.breakdown.sharedValues}
                hint={`You share: ${profile.sharedValues.join(", ")}.`}
              />
              <CompatibilityBar
                label="Lifestyle fit"
                value={profile.breakdown.lifestyleFit}
                hint="Energy, pace, and weekend rhythms align."
              />
            </div>
          </ProfileSection>

          <ProfileSection
            title="What you'd have in common"
            description="The values you both placed at the center of your profile."
          >
            <div className="flex flex-wrap gap-2.5">
              {profile.sharedValues.map((v) => (
                <span
                  key={v}
                  className="rounded-full border border-white/15 bg-gradient-to-r from-glow-pink/15 via-glow-mauve/10 to-glow-sky/15 px-3.5 py-1.5 text-sm text-ink-50"
                >
                  {v}
                </span>
              ))}
              {profile.values
                .filter((v) => !profile.sharedValues.includes(v))
                .slice(0, 3)
                .map((v) => (
                  <span
                    key={v}
                    className="rounded-full border border-white/10 bg-white/3 px-3.5 py-1.5 text-sm text-ink-200"
                  >
                    {v}
                  </span>
                ))}
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-white/3 p-4">
              <p className="text-[11px] uppercase tracking-[0.18em] text-ink-300">
                Their dealbreakers
              </p>
              <p className="mt-2 text-sm text-ink-100">
                {profile.dealbreakers.join(" · ")}
              </p>
            </div>
          </ProfileSection>
        </div>

        {/* In their words */}
        <div className="mt-8">
          <ProfileSection
            title={`In ${profile.name}'s words`}
            description="Their answers to the prompts that matter most."
          >
            <div className="grid gap-3 md:grid-cols-2">
              <PromptField
                label="What I want my life to feel like"
                value={profile.prompts.lifeFeel}
              />
              <PromptField
                label="What love means to me"
                value={profile.prompts.loveMeans}
              />
              <PromptField
                label="How I handle conflict"
                value={profile.prompts.handleConflict}
              />
              <PromptField
                label="A green flag I bring"
                value={profile.prompts.greenFlag}
              />
              <PromptField
                label="My ideal Sunday"
                value={profile.prompts.idealSunday}
              />
            </div>
          </ProfileSection>
        </div>

        {/* Thoughtful prompts to open with */}
        <div className="mt-8">
          <ProfileSection
            title="Open with something meaningful"
            description="Pick a prompt to start with. Real conversations begin with real questions."
          >
            <div className="grid gap-3 md:grid-cols-3">
              {THOUGHTFUL_PROMPTS.map((p) => (
                <PromptCard key={p} text={p} />
              ))}
            </div>
          </ProfileSection>
        </div>

        {/* Sticky CTA bar */}
        <div className="sticky bottom-4 z-20 mt-10">
          <GlowCard className="px-5 py-4 md:px-7">
            <div className="flex flex-col items-stretch justify-between gap-3 sm:flex-row sm:items-center">
              <div>
                <p className="font-display text-lg text-ink-50">
                  Ready to say hello?
                </p>
                <p className="text-xs text-ink-300">
                  Start with a thoughtful prompt — not an empty 'hey'.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Link
                  href="/matches"
                  className="rounded-full border border-white/12 bg-white/5 px-4 py-2 text-sm text-ink-200 transition hover:bg-white/10 hover:text-ink-50"
                >
                  Not for me
                </Link>
                <LinkButton href={`/chat/${profile.id}`}>
                  Send a thoughtful message
                </LinkButton>
              </div>
            </div>
          </GlowCard>
        </div>
      </div>

      <Footer />
    </main>
  );
}
