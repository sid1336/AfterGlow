"use client";

import { useState } from "react";
import Link from "next/link";
import { AppHeader } from "@/components/AppHeader";
import { GlowCard } from "@/components/GlowCard";
import { ProgressSteps } from "@/components/ProgressSteps";
import { PromptChip } from "@/components/PromptChip";
import { Button, LinkButton } from "@/components/Button";
import { MembershipCard } from "@/components/MembershipCard";
import type {
  AstrologySign,
  AttachmentStyle,
  BirthChartStyle,
  BroadRegion,
  CommunicationStyle,
  ConflictStyle,
  CoreValue,
  Dealbreaker,
  EmotionalNeed,
  FamilyView,
  FutureGoal,
  GenderIdentity,
  InterestedIn,
  LifestyleRhythm,
  LoveLanguage,
  Orientation,
  Pronouns,
  RelationshipIntention,
  RelationshipStructure,
} from "@/types";

// =============================================================================
// Option lists
// =============================================================================

const GENDER: GenderIdentity[] = [
  "Woman",
  "Man",
  "Trans woman",
  "Trans man",
  "Nonbinary",
  "Genderqueer",
  "Agender",
  "Genderfluid",
  "Two-Spirit",
  "Questioning",
  "Prefer to self-describe",
  "Prefer not to say",
];

const PRONOUNS: Pronouns[] = [
  "she/her",
  "he/him",
  "they/them",
  "she/they",
  "he/they",
  "ze/zir",
  "xe/xem",
  "any pronouns",
  "ask me",
  "Prefer not to say",
];

const ORIENTATION: Orientation[] = [
  "Lesbian",
  "Gay",
  "Bisexual",
  "Pansexual",
  "Queer",
  "Asexual",
  "Demisexual",
  "Sapphic",
  "Achillean",
  "Questioning",
  "Prefer to self-describe",
  "Prefer not to say",
];

const INTERESTED_IN: InterestedIn[] = [
  "Women",
  "Men",
  "Nonbinary people",
  "Trans women",
  "Trans men",
  "Genderqueer / genderfluid people",
  "Everyone across the LGBTQIA+ spectrum",
  "Still figuring it out",
];

const INTENTIONS: RelationshipIntention[] = [
  "Life partner",
  "Serious relationship",
  "Slow dating",
  "Friendship first",
  "Still figuring it out, but open to real connection",
];

const STRUCTURES: RelationshipStructure[] = [
  "Monogamous",
  "Monogamish",
  "Ethically non-monogamous",
  "Polyamorous",
  "Relationship anarchy",
  "Open to discussing",
  "Still figuring it out",
];

const REGIONS: BroadRegion[] = [
  "GTA",
  "Greater Golden Horseshoe",
  "Southern Ontario",
  "Northern Ontario",
  "Ottawa Region",
  "Montreal Region",
  "Vancouver Region",
  "Northern USA",
];

const COMMUNICATION: CommunicationStyle[] = [
  "I like frequent communication",
  "I prefer slower thoughtful replies",
  "I value direct honesty",
  "I need emotional reassurance",
  "I like independence and space",
];

const CONFLICT: ConflictStyle[] = [
  "I name what I feel early",
  "I need a pause, then return calmly",
  "I work through it through writing",
  "I want to repair the same day",
  "I take space and come back gently",
];

const ATTACHMENT: AttachmentStyle[] = [
  "Secure",
  "Anxious-leaning, working on it",
  "Avoidant-leaning, working on it",
  "In therapy and learning",
  "Still figuring it out",
];

const EMOTIONAL_NEEDS: EmotionalNeed[] = [
  "Consistent communication",
  "Quality time",
  "Verbal reassurance",
  "Shared rituals",
  "Space to recharge",
  "Acts of care",
  "Being understood without explaining",
];

const VALUES: CoreValue[] = [
  "Kindness",
  "Emotional maturity",
  "Ambition",
  "Family",
  "Creativity",
  "Stability",
  "Adventure",
  "Community",
  "Loyalty",
  "Growth",
  "Justice",
  "Honesty",
  "Curiosity",
  "Spirituality",
];

const LOVE_LANGUAGES: LoveLanguage[] = [
  "Words of affirmation",
  "Quality time",
  "Acts of service",
  "Physical touch",
  "Thoughtful gifts",
];

const LIFESTYLE: LifestyleRhythm[] = [
  "Early riser, slow morning",
  "Night owl, late conversations",
  "Balanced and routined",
  "Spontaneous and flexible",
  "Quiet weekdays, social weekends",
  "Always a little adventurous",
];

const FUTURE_GOALS: FutureGoal[] = [
  "Build a long-term partnership",
  "Open to marriage",
  "Open to kids",
  "Open to fostering or adopting",
  "Open to chosen family without kids",
  "Move cities together one day",
  "Co-create a calm, creative life",
  "Travel often together",
];

const FAMILY: FamilyView[] = [
  "I want kids",
  "Open to kids",
  "I don't want kids",
  "Open to fostering or adopting",
  "Already a parent",
  "Still figuring it out",
];

const SIGNS: AstrologySign[] = [
  "Aries",
  "Taurus",
  "Gemini",
  "Cancer",
  "Leo",
  "Virgo",
  "Libra",
  "Scorpio",
  "Sagittarius",
  "Capricorn",
  "Aquarius",
  "Pisces",
];

const BIRTH_CHART: BirthChartStyle[] = [
  "Sun-led",
  "Moon-led",
  "Rising-led",
  "Balanced chart",
  "Just here for fun",
];

const DEALBREAKERS: Dealbreaker[] = [
  "Not emotionally available",
  "Not looking for commitment",
  "Poor communication",
  "Dishonesty",
  "Disrespectful behavior",
  "Incompatible relationship goals",
  "Pushes physical pace too fast",
  "Won't respect boundaries",
];

const PROMPT_FIELDS = [
  {
    key: "lifeFeel" as const,
    label: "What I want my life to feel like",
    placeholder: "Quiet, full, warm, a little brave...",
  },
  {
    key: "loveMeans" as const,
    label: "What love means to me",
    placeholder: "Try the version you'd whisper, not the one you'd post.",
  },
  {
    key: "feelSafe" as const,
    label: "What makes me feel safe with someone",
    placeholder: "Honesty without sharpness. Slow questions. Soft eyes.",
  },
  {
    key: "greenFlag" as const,
    label: "A green flag I bring",
    placeholder: "The thing your last partner thanked you for.",
  },
];

// =============================================================================
// Steps
// =============================================================================

const STEPS = [
  { key: "welcome", title: "Welcome" },
  { key: "membership", title: "Membership" },
  { key: "gender", title: "Gender" },
  { key: "pronouns", title: "Pronouns" },
  { key: "orientation", title: "Orientation" },
  { key: "interestedIn", title: "Who I want to meet" },
  { key: "intention", title: "Intention" },
  { key: "structure", title: "Structure" },
  { key: "region", title: "Region" },
  { key: "ageRange", title: "Age range" },
  { key: "communication", title: "Communication" },
  { key: "conflict", title: "Conflict" },
  { key: "attachment", title: "Attachment" },
  { key: "values", title: "Core values" },
  { key: "loveLanguages", title: "Love languages" },
  { key: "lifestyle", title: "Lifestyle" },
  { key: "future", title: "Future" },
  { key: "family", title: "Family" },
  { key: "astrology", title: "Astrology (optional)" },
  { key: "dealbreakers", title: "Dealbreakers" },
  { key: "prompts", title: "In your words" },
  { key: "preview", title: "Ready" },
] as const;

interface OnboardingState {
  gender?: GenderIdentity;
  pronouns?: Pronouns;
  orientation?: Orientation;
  interestedIn: InterestedIn[];
  intention?: RelationshipIntention;
  structure?: RelationshipStructure;
  broadRegion?: BroadRegion;
  datingRegion: BroadRegion[];
  ageRange: [number, number];
  communication?: CommunicationStyle;
  conflict?: ConflictStyle;
  attachment?: AttachmentStyle;
  emotionalNeeds: EmotionalNeed[];
  values: CoreValue[];
  loveLanguages: LoveLanguage[];
  lifestyle: LifestyleRhythm[];
  futureGoals: FutureGoal[];
  familyViews?: FamilyView;
  astrologySign?: AstrologySign;
  birthChartStyle?: BirthChartStyle;
  skipAstrology?: boolean;
  dealbreakers: Dealbreaker[];
  prompts: Record<(typeof PROMPT_FIELDS)[number]["key"], string>;
}

const initialState: OnboardingState = {
  interestedIn: [],
  datingRegion: [],
  ageRange: [26, 40],
  emotionalNeeds: [],
  values: [],
  loveLanguages: [],
  lifestyle: [],
  futureGoals: [],
  dealbreakers: [],
  prompts: { lifeFeel: "", loveMeans: "", feelSafe: "", greenFlag: "" },
};

export default function OnboardingPage() {
  const [step, setStep] = useState(1);
  const [state, setState] = useState<OnboardingState>(initialState);

  const total = STEPS.length;
  const current = STEPS[step - 1];

  const canContinue = (() => {
    switch (current.key) {
      case "welcome":
      case "membership":
        return true;
      case "gender":
        return !!state.gender;
      case "pronouns":
        return !!state.pronouns;
      case "orientation":
        return !!state.orientation;
      case "interestedIn":
        return state.interestedIn.length >= 1;
      case "intention":
        return !!state.intention;
      case "structure":
        return !!state.structure;
      case "region":
        return !!state.broadRegion && state.datingRegion.length >= 1;
      case "ageRange":
        return state.ageRange[0] <= state.ageRange[1];
      case "communication":
        return !!state.communication;
      case "conflict":
        return !!state.conflict;
      case "attachment":
        return !!state.attachment && state.emotionalNeeds.length >= 1;
      case "values":
        return state.values.length >= 3;
      case "loveLanguages":
        return state.loveLanguages.length >= 1;
      case "lifestyle":
        return state.lifestyle.length >= 1;
      case "future":
        return state.futureGoals.length >= 1;
      case "family":
        return !!state.familyViews;
      case "astrology":
        return true; // optional
      case "dealbreakers":
        return true; // optional
      case "prompts":
        return Object.values(state.prompts).some((v) => v.trim().length >= 10);
      case "preview":
        return true;
      default:
        return true;
    }
  })();

  const next = () => setStep((s) => Math.min(total, s + 1));
  const back = () => setStep((s) => Math.max(1, s - 1));

  return (
    <main className="min-h-dvh pb-16">
      <AppHeader variant="marketing" />

      <div className="mx-auto max-w-3xl px-5 pt-10">
        <div className="mb-8">
          <ProgressSteps current={step} total={total} label={current.title} />
        </div>

        <GlowCard className="p-6 md:p-10" key={step}>
          <div className="animate-rise-in">
            {renderStep({ key: current.key, state, setState })}
          </div>

          <div className="mt-10 flex flex-col-reverse items-stretch gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              {step > 1 ? (
                <Button variant="ghost" onClick={back}>
                  ← Back
                </Button>
              ) : (
                <Link
                  href="/"
                  className="text-sm text-plum-500 underline-offset-4 transition hover:text-plum-800 hover:underline"
                >
                  Not now
                </Link>
              )}
              {current.key === "values" && state.values.length < 3 ? (
                <span className="text-xs text-plum-500">
                  Choose at least 3 values
                </span>
              ) : null}
              {current.key === "interestedIn" && state.interestedIn.length < 1 ? (
                <span className="text-xs text-plum-500">
                  Pick at least one
                </span>
              ) : null}
            </div>
            {step < total ? (
              <Button
                onClick={next}
                disabled={!canContinue}
                size="lg"
                className="sm:min-w-44"
              >
                Continue
              </Button>
            ) : (
              <LinkButton href="/profile" size="lg" className="sm:min-w-44">
                Build my profile
              </LinkButton>
            )}
          </div>
        </GlowCard>

        <p className="mt-6 text-center text-xs text-plum-500">
          You can edit any of these later in Settings. Nothing here is set in
          stone.
        </p>
      </div>
    </main>
  );
}

// =============================================================================
// Step rendering
// =============================================================================

function renderStep({
  key,
  state,
  setState,
}: {
  key: (typeof STEPS)[number]["key"];
  state: OnboardingState;
  setState: React.Dispatch<React.SetStateAction<OnboardingState>>;
}) {
  switch (key) {
    case "welcome":
      return <WelcomeStep />;
    case "membership":
      return <MembershipStep />;
    case "gender":
      return (
        <SingleSelectStep
          eyebrow="Step 3"
          title="Gender identity"
          subtitle="Tell us how you'd like to be seen. You can self-describe or skip — we don't make assumptions."
          options={GENDER}
          value={state.gender}
          onChange={(v) => setState((s) => ({ ...s, gender: v }))}
        />
      );
    case "pronouns":
      return (
        <SingleSelectStep
          eyebrow="Step 4"
          title="Pronouns"
          subtitle="How would you like to be referred to? You can update these any time."
          options={PRONOUNS}
          value={state.pronouns}
          onChange={(v) => setState((s) => ({ ...s, pronouns: v }))}
        />
      );
    case "orientation":
      return (
        <SingleSelectStep
          eyebrow="Step 5"
          title="Sexual / romantic orientation"
          subtitle="Pick what feels closest right now. There's no wrong answer."
          options={ORIENTATION}
          value={state.orientation}
          onChange={(v) => setState((s) => ({ ...s, orientation: v }))}
        />
      );
    case "interestedIn":
      return (
        <MultiSelectStep
          eyebrow="Step 6"
          title="Who you'd like to meet"
          subtitle="Pick anyone you're open to. We respect every choice you make here — and we respect everyone you don't."
          options={INTERESTED_IN}
          values={state.interestedIn}
          onToggle={(v) =>
            setState((s) => ({
              ...s,
              interestedIn: toggle(s.interestedIn, v),
            }))
          }
        />
      );
    case "intention":
      return (
        <SingleSelectStep
          eyebrow="Step 7"
          title="What are you looking for?"
          subtitle="Be honest. We won't show you to people whose intentions don't fit yours."
          options={INTENTIONS}
          value={state.intention}
          onChange={(v) => setState((s) => ({ ...s, intention: v }))}
        />
      );
    case "structure":
      return (
        <SingleSelectStep
          eyebrow="Step 8"
          title="Relationship structure"
          subtitle="You can revisit this anytime — your honesty matters more than your certainty."
          options={STRUCTURES}
          value={state.structure}
          onChange={(v) => setState((s) => ({ ...s, structure: v }))}
        />
      );
    case "region":
      return <RegionStep state={state} setState={setState} />;
    case "ageRange":
      return <AgeRangeStep state={state} setState={setState} />;
    case "communication":
      return (
        <SingleSelectStep
          eyebrow="Step 11"
          title="How do you like to communicate?"
          subtitle="Pick the one that feels closest. We'll match you with people who fit your rhythm."
          options={COMMUNICATION}
          value={state.communication}
          onChange={(v) => setState((s) => ({ ...s, communication: v }))}
        />
      );
    case "conflict":
      return (
        <SingleSelectStep
          eyebrow="Step 12"
          title="How do you handle conflict?"
          subtitle="The version of you that shows up when something is hard."
          options={CONFLICT}
          value={state.conflict}
          onChange={(v) => setState((s) => ({ ...s, conflict: v }))}
        />
      );
    case "attachment":
      return <AttachmentStep state={state} setState={setState} />;
    case "values":
      return (
        <MultiSelectStep
          eyebrow="Step 14"
          title="What do you value in a relationship?"
          subtitle="Choose at least three. These shape who we lift into your matches."
          options={VALUES}
          values={state.values}
          onToggle={(v) =>
            setState((s) => ({ ...s, values: toggle(s.values, v) }))
          }
          minNote={`Selected ${state.values.length} of ${VALUES.length}`}
        />
      );
    case "loveLanguages":
      return (
        <MultiSelectStep
          eyebrow="Step 15"
          title="Love languages"
          subtitle="Pick the ones you speak fluently. You can pick more than one."
          options={LOVE_LANGUAGES}
          values={state.loveLanguages}
          onToggle={(v) =>
            setState((s) => ({
              ...s,
              loveLanguages: toggle(s.loveLanguages, v),
            }))
          }
        />
      );
    case "lifestyle":
      return (
        <MultiSelectStep
          eyebrow="Step 16"
          title="Lifestyle rhythm"
          subtitle="How does your week actually feel — on average, on a good week?"
          options={LIFESTYLE}
          values={state.lifestyle}
          onToggle={(v) =>
            setState((s) => ({ ...s, lifestyle: toggle(s.lifestyle, v) }))
          }
        />
      );
    case "future":
      return (
        <MultiSelectStep
          eyebrow="Step 17"
          title="Future you're open to"
          subtitle="There's no right shape for this. Pick anything that sounds true."
          options={FUTURE_GOALS}
          values={state.futureGoals}
          onToggle={(v) =>
            setState((s) => ({
              ...s,
              futureGoals: toggle(s.futureGoals, v),
            }))
          }
        />
      );
    case "family":
      return (
        <SingleSelectStep
          eyebrow="Step 18"
          title="Family and kids"
          subtitle="Honesty here makes everyone's life easier."
          options={FAMILY}
          value={state.familyViews}
          onChange={(v) => setState((s) => ({ ...s, familyViews: v }))}
        />
      );
    case "astrology":
      return <AstrologyStep state={state} setState={setState} />;
    case "dealbreakers":
      return (
        <CheckboxStep
          eyebrow="Step 20"
          title="Anything that's a no for you?"
          subtitle="We'll quietly filter these out. You don't owe anyone access to your time."
          options={DEALBREAKERS}
          values={state.dealbreakers}
          onToggle={(v) =>
            setState((s) => ({
              ...s,
              dealbreakers: toggle(s.dealbreakers, v),
            }))
          }
        />
      );
    case "prompts":
      return <PromptsStep state={state} setState={setState} />;
    case "preview":
      return <PreviewStep state={state} />;
  }
}

// =============================================================================
// Step components
// =============================================================================

function WelcomeStep() {
  return (
    <div className="text-center">
      <p className="text-xs uppercase tracking-[0.22em] text-plum-500">
        Welcome to Afterglow
      </p>
      <h1 className="mt-4 font-display text-3xl tracking-tight text-plum-800 md:text-5xl">
        Let's slow down for a second.
      </h1>
      <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-plum-600 md:text-lg">
        These next questions help us understand who you are, what you're
        hoping to build, and who might be a real fit. No personality tests.
        No tricks. Just honest answers.
      </p>
      <div className="mx-auto mt-8 grid max-w-xl gap-3 sm:grid-cols-3">
        {[
          "Takes about 4 minutes",
          "Edit anything later",
          "Private by default",
        ].map((p) => (
          <div
            key={p}
            className="rounded-2xl border border-white/80 bg-white/65 px-3 py-3 text-xs text-plum-700"
          >
            {p}
          </div>
        ))}
      </div>
    </div>
  );
}

function MembershipStep() {
  return (
    <div>
      <StepHeader
        eyebrow="Step 2"
        title="A quiet, premium space — by design."
        subtitle="Afterglow is a membership community. A small one-time fee keeps it considered, not crowded."
      />
      <MembershipCard />
      <p className="mt-4 text-xs text-plum-500">
        You'll only see the fee at checkout in the production version. In this
        prototype, no payment is collected.
      </p>
    </div>
  );
}

function RegionStep({
  state,
  setState,
}: {
  state: OnboardingState;
  setState: React.Dispatch<React.SetStateAction<OnboardingState>>;
}) {
  return (
    <div>
      <StepHeader
        eyebrow="Step 9"
        title="Where you live, broadly."
        subtitle="We never show exact distance, maps, or your city. We only use broad regions so compatibility leads."
      />
      <div>
        <p className="mb-3 text-[11px] uppercase tracking-[0.18em] text-plum-500">
          Your home region
        </p>
        <div className="flex flex-wrap gap-2.5">
          {REGIONS.map((r) => (
            <PromptChip
              key={r}
              selected={state.broadRegion === r}
              onClick={() =>
                setState((s) => ({
                  ...s,
                  broadRegion: s.broadRegion === r ? undefined : r,
                  datingRegion: s.datingRegion.includes(r)
                    ? s.datingRegion
                    : [...s.datingRegion, r],
                }))
              }
            >
              {r}
            </PromptChip>
          ))}
        </div>
      </div>
      <div className="mt-6">
        <p className="mb-3 text-[11px] uppercase tracking-[0.18em] text-plum-500">
          Regions you're open to dating across
        </p>
        <div className="flex flex-wrap gap-2.5">
          {REGIONS.map((r) => (
            <PromptChip
              key={r}
              selected={state.datingRegion.includes(r)}
              onClick={() =>
                setState((s) => ({
                  ...s,
                  datingRegion: toggle(s.datingRegion, r),
                }))
              }
            >
              {r}
            </PromptChip>
          ))}
        </div>
        <p className="mt-3 text-xs text-plum-500">
          Selected {state.datingRegion.length}. You can pick more than one.
        </p>
      </div>
    </div>
  );
}

function AgeRangeStep({
  state,
  setState,
}: {
  state: OnboardingState;
  setState: React.Dispatch<React.SetStateAction<OnboardingState>>;
}) {
  const [low, high] = state.ageRange;

  const update = (which: "low" | "high", value: number) => {
    setState((s) => {
      const [l, h] = s.ageRange;
      if (which === "low") {
        return { ...s, ageRange: [Math.min(value, h), h] };
      }
      return { ...s, ageRange: [l, Math.max(value, l)] };
    });
  };

  return (
    <div>
      <StepHeader
        eyebrow="Step 10"
        title="Age range preference"
        subtitle="Set a thoughtful range. You can widen or narrow this anytime."
      />
      <div className="rounded-2xl border border-white/80 bg-white/70 p-5">
        <div className="flex items-baseline justify-between">
          <div>
            <p className="text-[11px] uppercase tracking-[0.18em] text-plum-500">
              From
            </p>
            <p className="font-display text-3xl text-plum-800">{low}</p>
          </div>
          <div className="text-plum-400">to</div>
          <div className="text-right">
            <p className="text-[11px] uppercase tracking-[0.18em] text-plum-500">
              Up to
            </p>
            <p className="font-display text-3xl text-plum-800">{high}</p>
          </div>
        </div>
        <div className="mt-4 grid gap-4">
          <div>
            <label className="text-xs text-plum-600">Minimum age</label>
            <input
              type="range"
              min={18}
              max={75}
              value={low}
              onChange={(e) => update("low", Number(e.target.value))}
              className="w-full accent-plum-500"
            />
          </div>
          <div>
            <label className="text-xs text-plum-600">Maximum age</label>
            <input
              type="range"
              min={18}
              max={75}
              value={high}
              onChange={(e) => update("high", Number(e.target.value))}
              className="w-full accent-plum-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function AttachmentStep({
  state,
  setState,
}: {
  state: OnboardingState;
  setState: React.Dispatch<React.SetStateAction<OnboardingState>>;
}) {
  return (
    <div>
      <StepHeader
        eyebrow="Step 13"
        title="Attachment + emotional needs"
        subtitle="Just a snapshot. We use this to find partners whose pace matches yours."
      />
      <div className="mb-7">
        <p className="mb-3 text-[11px] uppercase tracking-[0.18em] text-plum-500">
          Attachment style
        </p>
        <div className="grid gap-3">
          {ATTACHMENT.map((opt) => {
            const selected = state.attachment === opt;
            return (
              <SelectableRow
                key={opt}
                selected={selected}
                onClick={() => setState((s) => ({ ...s, attachment: opt }))}
                label={opt}
              />
            );
          })}
        </div>
      </div>
      <div>
        <p className="mb-3 text-[11px] uppercase tracking-[0.18em] text-plum-500">
          Emotional needs (pick all that apply)
        </p>
        <div className="flex flex-wrap gap-2.5">
          {EMOTIONAL_NEEDS.map((n) => (
            <PromptChip
              key={n}
              selected={state.emotionalNeeds.includes(n)}
              onClick={() =>
                setState((s) => ({
                  ...s,
                  emotionalNeeds: toggle(s.emotionalNeeds, n),
                }))
              }
            >
              {n}
            </PromptChip>
          ))}
        </div>
      </div>
    </div>
  );
}

function AstrologyStep({
  state,
  setState,
}: {
  state: OnboardingState;
  setState: React.Dispatch<React.SetStateAction<OnboardingState>>;
}) {
  return (
    <div>
      <StepHeader
        eyebrow="Step 19"
        title="Astrology — optional, playful."
        subtitle="If you enjoy a little cosmic timing, share a sign. If not, just skip — it never affects compatibility matches."
      />
      <div className="mb-5 flex items-center gap-3">
        <button
          type="button"
          onClick={() =>
            setState((s) => ({
              ...s,
              skipAstrology: !s.skipAstrology,
              astrologySign: s.skipAstrology ? s.astrologySign : undefined,
              birthChartStyle: s.skipAstrology ? s.birthChartStyle : undefined,
            }))
          }
          className={`rounded-full px-4 py-1.5 text-xs transition ${
            state.skipAstrology
              ? "bg-gradient-to-r from-blush-200 to-sky2-200 text-plum-800"
              : "border border-plum-200/60 bg-white/60 text-plum-600 hover:bg-white"
          }`}
        >
          {state.skipAstrology ? "Skipped (tap to undo)" : "Skip this step"}
        </button>
      </div>

      <div className={state.skipAstrology ? "opacity-50 pointer-events-none" : ""}>
        <p className="mb-3 text-[11px] uppercase tracking-[0.18em] text-plum-500">
          Sun sign
        </p>
        <div className="flex flex-wrap gap-2.5">
          {SIGNS.map((sign) => (
            <PromptChip
              key={sign}
              selected={state.astrologySign === sign}
              onClick={() =>
                setState((s) => ({
                  ...s,
                  astrologySign: s.astrologySign === sign ? undefined : sign,
                }))
              }
            >
              {sign}
            </PromptChip>
          ))}
        </div>
        <p className="mt-6 mb-3 text-[11px] uppercase tracking-[0.18em] text-plum-500">
          Birth chart style
        </p>
        <div className="flex flex-wrap gap-2.5">
          {BIRTH_CHART.map((b) => (
            <PromptChip
              key={b}
              selected={state.birthChartStyle === b}
              onClick={() =>
                setState((s) => ({
                  ...s,
                  birthChartStyle:
                    s.birthChartStyle === b ? undefined : b,
                }))
              }
            >
              {b}
            </PromptChip>
          ))}
        </div>
        <p className="mt-4 text-xs text-plum-500">
          Astrology is a playful, optional layer on Afterglow — not used in
          serious compatibility scoring.
        </p>
      </div>
    </div>
  );
}

function PromptsStep({
  state,
  setState,
}: {
  state: OnboardingState;
  setState: React.Dispatch<React.SetStateAction<OnboardingState>>;
}) {
  return (
    <div>
      <StepHeader
        eyebrow="Step 21"
        title="A few prompts, in your own voice."
        subtitle="Try at least one. You can finish the rest from your profile later."
      />
      <div className="grid gap-4">
        {PROMPT_FIELDS.map((p) => (
          <label key={p.key} className="block">
            <span className="mb-1.5 flex items-center justify-between text-[11px] uppercase tracking-[0.18em] text-plum-500">
              <span>{p.label}</span>
              <span className="tabular-nums text-plum-400">
                {state.prompts[p.key].length}/220
              </span>
            </span>
            <textarea
              value={state.prompts[p.key]}
              onChange={(e) =>
                setState((s) => ({
                  ...s,
                  prompts: {
                    ...s.prompts,
                    [p.key]: e.target.value.slice(0, 220),
                  },
                }))
              }
              rows={2}
              placeholder={p.placeholder}
              className="w-full resize-none rounded-2xl border border-white/85 bg-white/70 px-4 py-3 text-[15px] leading-relaxed text-plum-800 transition focus:border-plum-300 focus:bg-white"
            />
          </label>
        ))}
      </div>
    </div>
  );
}

function PreviewStep({ state }: { state: OnboardingState }) {
  return (
    <div>
      <StepHeader
        eyebrow="Almost there"
        title="Here's what we heard."
        subtitle="If anything feels off, you can edit it in your profile next."
      />
      <div className="grid gap-3 sm:grid-cols-2">
        <SummaryRow label="Gender" value={state.gender} />
        <SummaryRow label="Pronouns" value={state.pronouns} />
        <SummaryRow label="Orientation" value={state.orientation} />
        <SummaryRow
          label="Interested in"
          value={state.interestedIn.join(", ") || "—"}
        />
        <SummaryRow label="Intention" value={state.intention} />
        <SummaryRow label="Structure" value={state.structure} />
        <SummaryRow label="Home region" value={state.broadRegion} />
        <SummaryRow
          label="Dating regions"
          value={state.datingRegion.join(", ") || "—"}
        />
        <SummaryRow
          label="Age range"
          value={`${state.ageRange[0]} to ${state.ageRange[1]}`}
        />
        <SummaryRow label="Communication" value={state.communication} />
        <SummaryRow label="Conflict" value={state.conflict} />
        <SummaryRow label="Attachment" value={state.attachment} />
        <SummaryRow
          label="Emotional needs"
          value={state.emotionalNeeds.join(", ") || "—"}
          full
        />
        <SummaryRow
          label="Core values"
          value={state.values.join(", ") || "—"}
          full
        />
        <SummaryRow
          label="Love languages"
          value={state.loveLanguages.join(", ") || "—"}
        />
        <SummaryRow
          label="Lifestyle"
          value={state.lifestyle.join(", ") || "—"}
        />
        <SummaryRow
          label="Future you're open to"
          value={state.futureGoals.join(", ") || "—"}
          full
        />
        <SummaryRow label="Family" value={state.familyViews} />
        <SummaryRow
          label="Astrology"
          value={
            state.skipAstrology
              ? "Skipped"
              : [state.astrologySign, state.birthChartStyle]
                  .filter(Boolean)
                  .join(" · ") || "—"
          }
        />
        <SummaryRow
          label="Dealbreakers"
          value={state.dealbreakers.join(", ") || "None set"}
          full
        />
      </div>
      <div className="mt-6 rounded-2xl border border-white/85 bg-white/70 p-5">
        <p className="font-display text-lg text-plum-800">
          You're ready to build your profile.
        </p>
        <p className="mt-1 text-sm text-plum-500">
          Next we'll write the words and pick the photos that introduce you.
        </p>
      </div>
    </div>
  );
}

// =============================================================================
// Shared step pieces
// =============================================================================

interface SingleSelectStepProps<T extends string> {
  eyebrow: string;
  title: string;
  subtitle?: string;
  options: T[];
  value?: T;
  onChange: (v: T) => void;
}

function SingleSelectStep<T extends string>({
  eyebrow,
  title,
  subtitle,
  options,
  value,
  onChange,
}: SingleSelectStepProps<T>) {
  return (
    <div>
      <StepHeader eyebrow={eyebrow} title={title} subtitle={subtitle} />
      <div className="grid gap-3">
        {options.map((opt) => (
          <SelectableRow
            key={opt}
            label={opt}
            selected={value === opt}
            onClick={() => onChange(opt)}
          />
        ))}
      </div>
    </div>
  );
}

interface MultiSelectStepProps<T extends string> {
  eyebrow: string;
  title: string;
  subtitle?: string;
  options: T[];
  values: T[];
  onToggle: (v: T) => void;
  minNote?: string;
}

function MultiSelectStep<T extends string>({
  eyebrow,
  title,
  subtitle,
  options,
  values,
  onToggle,
  minNote,
}: MultiSelectStepProps<T>) {
  return (
    <div>
      <StepHeader eyebrow={eyebrow} title={title} subtitle={subtitle} />
      <div className="flex flex-wrap gap-2.5">
        {options.map((opt) => (
          <PromptChip
            key={opt}
            selected={values.includes(opt)}
            onClick={() => onToggle(opt)}
          >
            {opt}
          </PromptChip>
        ))}
      </div>
      {minNote ? (
        <p className="mt-4 text-xs text-plum-500">{minNote}</p>
      ) : null}
    </div>
  );
}

interface CheckboxStepProps<T extends string> {
  eyebrow: string;
  title: string;
  subtitle?: string;
  options: T[];
  values: T[];
  onToggle: (v: T) => void;
}

function CheckboxStep<T extends string>({
  eyebrow,
  title,
  subtitle,
  options,
  values,
  onToggle,
}: CheckboxStepProps<T>) {
  return (
    <div>
      <StepHeader eyebrow={eyebrow} title={title} subtitle={subtitle} />
      <div className="grid gap-2.5 sm:grid-cols-2">
        {options.map((opt) => {
          const checked = values.includes(opt);
          return (
            <label
              key={opt}
              className={[
                "flex cursor-pointer items-center gap-3 rounded-2xl border px-4 py-3.5 transition",
                checked
                  ? "border-transparent bg-gradient-to-r from-blush-100 via-lilac-100 to-sky2-100 ring-1 ring-inset ring-plum-300/40"
                  : "border-white/80 bg-white/65 hover:border-plum-300/60 hover:bg-white",
              ].join(" ")}
            >
              <input
                type="checkbox"
                className="sr-only"
                checked={checked}
                onChange={() => onToggle(opt)}
              />
              <span
                aria-hidden
                className={[
                  "inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border transition",
                  checked
                    ? "border-transparent bg-gradient-to-br from-blush-300 to-sky2-300"
                    : "border-plum-300/60 bg-white/80",
                ].join(" ")}
              >
                {checked ? <Check /> : null}
              </span>
              <span className="text-sm text-plum-800">{opt}</span>
            </label>
          );
        })}
      </div>
    </div>
  );
}

interface SelectableRowProps {
  label: string;
  selected: boolean;
  onClick: () => void;
}

function SelectableRow({ label, selected, onClick }: SelectableRowProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "group flex items-center justify-between rounded-2xl border px-5 py-4 text-left transition-all",
        selected
          ? "border-transparent bg-gradient-to-r from-blush-100 via-lilac-100 to-sky2-100 shadow-glow-sm ring-1 ring-inset ring-plum-300/40"
          : "border-white/80 bg-white/65 hover:border-plum-300/60 hover:bg-white",
      ].join(" ")}
    >
      <span className="text-[15px] text-plum-800">{label}</span>
      <span
        aria-hidden
        className={[
          "ml-4 inline-flex h-5 w-5 items-center justify-center rounded-full border transition",
          selected
            ? "border-transparent bg-gradient-to-br from-blush-300 to-sky2-300"
            : "border-plum-300/60 bg-white/80",
        ].join(" ")}
      >
        {selected ? <Check /> : null}
      </span>
    </button>
  );
}

function SummaryRow({
  label,
  value,
  full,
}: {
  label: string;
  value?: string;
  full?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl border border-white/80 bg-white/65 p-4 ${
        full ? "sm:col-span-2" : ""
      }`}
    >
      <p className="text-[10px] uppercase tracking-[0.18em] text-plum-500">
        {label}
      </p>
      <p className="mt-1.5 text-sm text-plum-800">{value || "—"}</p>
    </div>
  );
}

function StepHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-7">
      <p className="text-[11px] uppercase tracking-[0.22em] text-plum-500">
        {eyebrow}
      </p>
      <h2 className="mt-2 font-display text-2xl tracking-tight text-plum-800 md:text-3xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-2 max-w-xl text-sm text-plum-600 md:text-[15px]">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

function Check() {
  return (
    <svg viewBox="0 0 16 16" className="h-3 w-3" aria-hidden>
      <path
        d="M3.5 8.5l3 3 6-7"
        fill="none"
        stroke="#3f2c47"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function toggle<T>(arr: T[], v: T): T[] {
  return arr.includes(v) ? arr.filter((x) => x !== v) : [...arr, v];
}
