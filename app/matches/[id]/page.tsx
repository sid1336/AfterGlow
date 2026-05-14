import Link from "next/link";
import { notFound } from "next/navigation";
import { AppHeader } from "@/components/AppHeader";
import { Footer } from "@/components/Footer";
import { GlowCard } from "@/components/GlowCard";
import { LinkButton } from "@/components/Button";
import {
  CompatibilityBar,
  CompatibilityRing,
} from "@/components/CompatibilityBar";
import { PromptField, ProfileSection } from "@/components/ProfileSection";
import { ProfileAvatar } from "@/components/ProfileAvatar";
import { PromptCard } from "@/components/PromptChip";
import { getProfileById, mockProfiles } from "@/data/mockProfiles";

export function generateStaticParams() {
  return mockProfiles.map((p) => ({ id: p.id }));
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
    <main className="min-h-dvh pb-28">
      <AppHeader />

      <div className="mx-auto max-w-4xl px-4 pt-10 sm:px-5">
        <div className="mb-6">
          <Link
            href="/matches"
            className="text-xs uppercase tracking-[0.22em] text-plum-500 transition hover:text-burgundy-700"
          >
            ← Back to today's matches
          </Link>
        </div>

        {/* Hero */}
        <GlowCard className="overflow-hidden p-6 md:p-10">
          <div className="grid items-center gap-8 md:grid-cols-[auto_1fr_auto]">
            <ProfileAvatar
              name={profile.name}
              accent={profile.accent}
              size={140}
            />
            <div>
              <div className="flex flex-wrap items-baseline gap-2">
                <h1 className="font-display text-4xl tracking-tight text-burgundy-700 md:text-5xl">
                  {profile.name}
                </h1>
                <span className="text-plum-400">·</span>
                <span className="text-lg text-plum-500">{profile.age}</span>
              </div>
              <p className="mt-1 text-plum-500">
                {profile.pronouns} · {profile.orientation}
                {profile.genderIdentity ? ` · ${profile.genderIdentity}` : ""}
              </p>
              <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-plum-700">
                {profile.bio}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="rounded-full border border-mauve-200/40 bg-white/75 px-3 py-1 text-xs text-plum-700">
                  {profile.relationshipIntention}
                </span>
                <span className="rounded-full border border-mauve-200/40 bg-white/75 px-3 py-1 text-xs text-plum-700">
                  {profile.partnershipShape}
                </span>
                <span className="rounded-full border border-mauve-200/40 bg-white/75 px-3 py-1 text-xs text-plum-700">
                  {profile.communicationStyle}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-sky2-300/50 bg-sky2-50/85 px-3 py-1 text-xs text-plum-700">
                  Within your compatibility region
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

        {/* Why this match */}
        <div className="mt-7">
          <GlowCard className="p-6 md:p-9" tone="tint">
            <p className="text-[11px] uppercase tracking-[0.22em] text-burgundy-700">
              Why we thought of you for each other
            </p>
            <p className="mt-3 font-display text-xl text-burgundy-700 md:text-2xl">
              {profile.matchRationale}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-plum-600">
              {profile.matchExplanation}
            </p>
          </GlowCard>
        </div>

        {/* Compatibility interpretation */}
        <div className="mt-7 grid gap-7 md:grid-cols-2">
          <ProfileSection
            title="Emotional compatibility"
            description="The quieter dimensions. How safely you would land in each other's company."
          >
            <div className="space-y-5">
              <CompatibilityBar
                label="Emotional availability"
                value={profile.breakdown.emotionalAvailability}
                hint="Both ready to be honest and present."
              />
              <CompatibilityBar
                label="Emotional safety"
                value={profile.breakdown.emotionalSafety}
                hint={`You describe safety similarly: "${profile.prompts.feelSafe.slice(0, 90)}..."`}
              />
              <CompatibilityBar
                label="Attachment compatibility"
                value={profile.breakdown.attachmentCompatibility}
                hint="Your attachment tendencies pair well."
              />
            </div>
          </ProfileSection>

          <ProfileSection
            title="Communication rhythm"
            description="How you would actually talk to each other on a normal Tuesday."
          >
            <div className="space-y-5">
              <CompatibilityBar
                label="Communication rhythm"
                value={profile.breakdown.communicationRhythm}
                hint="Your messaging cadence fits each other's pace."
              />
              <CompatibilityBar
                label="Conflict style"
                value={profile.breakdown.conflictStyle}
                hint="You repair in compatible ways."
              />
              <CompatibilityBar
                label="Identity and preference fit"
                value={profile.breakdown.identityFit}
                hint="You both opt in to each other's identity preferences."
              />
            </div>
          </ProfileSection>

          <ProfileSection
            title="Shared values and lifestyle"
            description="The everyday texture of life you are building."
          >
            <div className="space-y-5">
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
              <CompatibilityBar
                label="Regional compatibility"
                value={profile.breakdown.regionalCompatibility}
                hint="Within compatible regions. Exact location is never shown."
              />
            </div>
          </ProfileSection>

          <ProfileSection
            title="Relationship goals and future"
            description="Whether your trajectories actually meet."
          >
            <div className="space-y-5">
              <CompatibilityBar
                label="Relationship intention"
                value={profile.breakdown.relationshipIntention}
                hint="You are both here for something real."
              />
              <CompatibilityBar
                label="Future compatibility"
                value={profile.breakdown.futureCompatibility}
                hint="Shared trajectories on partnership, family, and pace."
              />
              {profile.breakdown.astrologyAlignment ? (
                <CompatibilityBar
                  label="Astrology alignment (optional)"
                  value={profile.breakdown.astrologyAlignment}
                  hint="A playful layer. Never used in serious compatibility."
                />
              ) : null}
            </div>
          </ProfileSection>
        </div>

        {/* What they bring */}
        <div className="mt-7">
          <ProfileSection
            title="What you would have in common"
            description="The values, languages, and softer signals you both placed at the center."
          >
            <div className="flex flex-wrap gap-2.5">
              {profile.sharedValues.map((v) => (
                <span
                  key={v}
                  className="rounded-full border border-mauve-200/40 bg-gradient-to-r from-sky2-100 via-lilac-100 to-mauve-100 px-3.5 py-1.5 text-sm text-burgundy-700"
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
                    className="rounded-full border border-mauve-200/40 bg-white/75 px-3.5 py-1.5 text-sm text-plum-600"
                  >
                    {v}
                  </span>
                ))}
            </div>

            <div className="mt-6 grid gap-3 md:grid-cols-3">
              <SoftDetail
                label="Love languages"
                value={profile.loveLanguages.join(" · ")}
              />
              <SoftDetail
                label="Social energy"
                value={profile.socialEnergy}
              />
              <SoftDetail
                label="Family vision"
                value={profile.familyViews}
              />
            </div>

            <div className="mt-3 rounded-2xl border border-white bg-white/75 p-4">
              <p className="text-[11px] uppercase tracking-[0.18em] text-plum-500">
                Their dealbreakers
              </p>
              <p className="mt-2 text-sm text-plum-800">
                {profile.dealbreakers.join(" · ")}
              </p>
            </div>

            {profile.astrologySign ? (
              <div className="mt-3 rounded-2xl border border-white bg-white/75 p-4">
                <p className="text-[11px] uppercase tracking-[0.18em] text-plum-500">
                  Optional astro
                </p>
                <p className="mt-1.5 text-sm text-plum-800">
                  {profile.astrologySign}
                  {profile.birthChartStyle
                    ? ` · ${profile.birthChartStyle}`
                    : ""}
                </p>
              </div>
            ) : null}
          </ProfileSection>
        </div>

        {/* In their words */}
        <div className="mt-7">
          <ProfileSection
            title={`In ${profile.name}'s words`}
            description="The prompts that introduce them most honestly."
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
                label="What makes me feel emotionally safe"
                value={profile.prompts.feelSafe}
              />
              <PromptField
                label="A green flag I bring"
                value={profile.prompts.greenFlag}
              />
              <PromptField
                label="The partnership I hope to build"
                value={profile.prompts.partnership}
              />
              <PromptField
                label="How I repair after conflict"
                value={profile.prompts.conflictRepair}
              />
              <PromptField
                label="Emotional energy I value most"
                value={profile.prompts.emotionalEnergy}
              />
              <PromptField
                label="My ideal Sunday"
                value={profile.prompts.idealSunday}
              />
            </div>
          </ProfileSection>
        </div>

        {/* Thoughtful prompts */}
        <div className="mt-7">
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

        <div className="sticky bottom-4 z-20 mt-12">
          <GlowCard className="px-5 py-4 md:px-7">
            <div className="flex flex-col items-stretch justify-between gap-3 sm:flex-row sm:items-center">
              <div>
                <p className="font-display text-lg text-burgundy-700">
                  Ready to say hello?
                </p>
                <p className="text-xs text-plum-500">
                  Start with a thoughtful prompt, not an empty 'hey'.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Link
                  href="/matches"
                  className="rounded-full border border-mauve-200/40 bg-white/75 px-4 py-2 text-sm text-plum-600 transition hover:bg-white hover:text-burgundy-700"
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

function SoftDetail({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white bg-white/75 p-4">
      <p className="text-[11px] uppercase tracking-[0.18em] text-plum-500">
        {label}
      </p>
      <p className="mt-1.5 text-sm text-plum-800">{value}</p>
    </div>
  );
}
