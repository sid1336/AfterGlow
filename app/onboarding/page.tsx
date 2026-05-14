"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AppHeader } from "@/components/AppHeader";
import { GlowCard } from "@/components/GlowCard";
import { ProgressSteps } from "@/components/ProgressSteps";
import { PromptChip } from "@/components/PromptChip";
import { Button } from "@/components/Button";
import { MembershipCard } from "@/components/MembershipCard";
import { useMembership } from "@/lib/membership";
import { CONTINENTS, COUNTRIES_BY_CONTINENT } from "@/lib/location";
import type {
  AstrologySign,
  AttachmentStyle,
  BirthChartStyle,
  CommunicationStyle,
  ConflictStyle,
  Continent,
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
  PartnershipShape,
  Pronouns,
  RelationshipIntention,
  SocialEnergy,
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
  "Genderqueer or genderfluid people",
  "Anyone who shares my values",
  "Still figuring it out",
];

const INTENTIONS: RelationshipIntention[] = [
  "Life partner",
  "Serious relationship",
  "Slow dating",
  "Friendship first",
  "Still figuring it out, but open to real connection",
];

const PARTNERSHIP_SHAPES: PartnershipShape[] = [
  "A serious relationship",
  "A long-term partnership",
  "A life companion",
  "Slow intentional dating",
  "Marriage someday",
  "A future we can grow into",
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

const SOCIAL_ENERGY: SocialEnergy[] = [
  "Quietly introverted, recharge alone",
  "Mostly introverted, small groups",
  "Ambivert, depends on the day",
  "Outgoing, energized by people",
  "Deeply social, big chosen family",
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

const MIN_LONG_FORM = 250;

const REQUIRED_PROMPTS = [
  {
    key: "lifeFeel" as const,
    label: "What I want my life to feel like",
    placeholder:
      "Be specific. The texture of a morning, the sound of a kitchen, the kind of evenings you would hate to skip. Long-form answers help Afterglow understand emotional compatibility beyond photos.",
  },
  {
    key: "loveMeans" as const,
    label: "What love means to me",
    placeholder:
      "Write the version you would whisper, not the one you would post. What does love look like on a Tuesday, not just on an anniversary?",
  },
  {
    key: "feelSafe" as const,
    label: "What makes me feel emotionally safe with someone",
    placeholder:
      "Be honest about what helps you exhale around someone. Steadiness, reassurance, pace, room for hard feelings. Name the things that actually matter.",
  },
];

const OPTIONAL_PROMPTS = [
  {
    key: "greenFlag" as const,
    label: "A green flag I bring",
    placeholder:
      "Something a past partner or close friend has thanked you for. Stay concrete.",
  },
  {
    key: "partnership" as const,
    label: "The partnership I hope to build",
    placeholder:
      "Describe a real shape of life with another person. Careers, rhythms, friends, future.",
  },
  {
    key: "conflictRepair" as const,
    label: "How I repair after conflict",
    placeholder:
      "The version of you that shows up after a hard conversation.",
  },
];

// =============================================================================
// Steps (24 reflective + 1 mock payment)
// =============================================================================

const STEPS = [
  { key: "welcome", title: "Welcome" },
  { key: "intro", title: "Emotional intro" },
  { key: "membershipIntro", title: "Membership" },
  { key: "gender", title: "Gender" },
  { key: "pronouns", title: "Pronouns" },
  { key: "orientation", title: "Orientation" },
  { key: "interestedIn", title: "Who I want to meet" },
  { key: "intention", title: "Intention" },
  { key: "partnershipShape", title: "What you are hoping to build" },
  { key: "continent", title: "Continent" },
  { key: "country", title: "Country" },
  { key: "region", title: "State, province, or region" },
  { key: "city", title: "City (private)" },
  { key: "communication", title: "Communication" },
  { key: "conflict", title: "Conflict" },
  { key: "emotionalNeeds", title: "Emotional needs" },
  { key: "attachment", title: "Attachment" },
  { key: "loveLanguages", title: "Love languages" },
  { key: "lifestyle", title: "Lifestyle" },
  { key: "future", title: "Future" },
  { key: "family", title: "Family" },
  { key: "social", title: "Social energy" },
  { key: "values", title: "Core values" },
  { key: "dealbreakers", title: "Dealbreakers" },
  { key: "astrology", title: "Astrology (optional)" },
  { key: "prompts", title: "In your words" },
  { key: "preview", title: "Ready" },
  { key: "payment", title: "Activate membership" },
] as const;

interface OnboardingState {
  gender?: GenderIdentity;
  pronouns?: Pronouns;
  orientation?: Orientation;
  interestedIn: InterestedIn[];
  intention?: RelationshipIntention;
  partnershipShape?: PartnershipShape;
  continent?: Continent;
  country?: string;
  region: string;
  city: string;
  communication?: CommunicationStyle;
  conflict?: ConflictStyle;
  emotionalNeeds: EmotionalNeed[];
  attachment?: AttachmentStyle;
  loveLanguages: LoveLanguage[];
  lifestyle: LifestyleRhythm[];
  futureGoals: FutureGoal[];
  familyViews?: FamilyView;
  socialEnergy?: SocialEnergy;
  values: CoreValue[];
  dealbreakers: Dealbreaker[];
  astrologySign?: AstrologySign;
  birthChartStyle?: BirthChartStyle;
  skipAstrology?: boolean;
  prompts: {
    lifeFeel: string;
    loveMeans: string;
    feelSafe: string;
    greenFlag: string;
    partnership: string;
    conflictRepair: string;
  };
}

const initialState: OnboardingState = {
  interestedIn: [],
  region: "",
  city: "",
  emotionalNeeds: [],
  loveLanguages: [],
  lifestyle: [],
  futureGoals: [],
  values: [],
  dealbreakers: [],
  prompts: {
    lifeFeel: "",
    loveMeans: "",
    feelSafe: "",
    greenFlag: "",
    partnership: "",
    conflictRepair: "",
  },
};

// =============================================================================
// Page
// =============================================================================

export default function OnboardingPage() {
  const router = useRouter();
  const { isMember, completeMembership } = useMembership();
  const [step, setStep] = useState(1);
  const [state, setState] = useState<OnboardingState>(initialState);
  const [submitting, setSubmitting] = useState(false);

  const total = STEPS.length;
  const current = STEPS[step - 1];

  const requiredPromptCount = REQUIRED_PROMPTS.filter(
    (p) => state.prompts[p.key].trim().length >= MIN_LONG_FORM
  ).length;

  const canContinue = useMemo(() => {
    switch (current.key) {
      case "welcome":
      case "intro":
      case "membershipIntro":
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
      case "partnershipShape":
        return !!state.partnershipShape;
      case "continent":
        return !!state.continent;
      case "country":
        return !!state.country;
      case "region":
        return state.region.trim().length >= 2;
      case "city":
        return state.city.trim().length >= 2;
      case "communication":
        return !!state.communication;
      case "conflict":
        return !!state.conflict;
      case "emotionalNeeds":
        return state.emotionalNeeds.length >= 1;
      case "attachment":
        return !!state.attachment;
      case "loveLanguages":
        return state.loveLanguages.length >= 1;
      case "lifestyle":
        return state.lifestyle.length >= 1;
      case "future":
        return state.futureGoals.length >= 1;
      case "family":
        return !!state.familyViews;
      case "social":
        return !!state.socialEnergy;
      case "values":
        return state.values.length >= 3;
      case "dealbreakers":
        return true;
      case "astrology":
        return true;
      case "prompts":
        return requiredPromptCount === REQUIRED_PROMPTS.length;
      case "preview":
        return true;
      case "payment":
        return true;
      default:
        return true;
    }
  }, [current.key, state, requiredPromptCount]);

  const next = () => setStep((s) => Math.min(total, s + 1));
  const back = () => setStep((s) => Math.max(1, s - 1));

  const handlePayment = () => {
    setSubmitting(true);
    // Mock processing window so the flow feels real.
    setTimeout(() => {
      completeMembership();
      router.push("/matches");
    }, 900);
  };

  return (
    <main className="min-h-dvh pb-24">
      <AppHeader variant="marketing" />

      <div className="mx-auto max-w-3xl px-4 pt-10 sm:px-5">
        <div className="mb-8">
          <ProgressSteps current={step} total={total} label={current.title} />
        </div>

        <GlowCard className="p-5 md:p-10" key={step}>
          <div className="animate-rise-in">
            {renderStep({
              key: current.key,
              state,
              setState,
              requiredPromptCount,
              submitting,
              isMember,
              onPay: handlePayment,
            })}
          </div>

          <div className="mt-10 flex flex-col-reverse items-stretch gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              {step > 1 && current.key !== "payment" ? (
                <Button variant="ghost" onClick={back}>
                  ← Back
                </Button>
              ) : null}
              {step === 1 ? (
                <Link
                  href="/"
                  className="text-sm text-plum-500 underline-offset-4 transition hover:text-burgundy-700 hover:underline"
                >
                  Not now
                </Link>
              ) : null}
              {current.key === "values" && state.values.length < 3 ? (
                <span className="text-xs text-plum-500">
                  Choose at least 3 values
                </span>
              ) : null}
              {current.key === "interestedIn" && state.interestedIn.length < 1 ? (
                <span className="text-xs text-plum-500">Pick at least one</span>
              ) : null}
              {current.key === "prompts" &&
              requiredPromptCount < REQUIRED_PROMPTS.length ? (
                <span className="text-xs text-plum-500">
                  {requiredPromptCount} of {REQUIRED_PROMPTS.length} ready
                </span>
              ) : null}
            </div>
            {current.key === "payment" ? null : (
              <Button
                onClick={next}
                disabled={!canContinue}
                size="lg"
                className="sm:min-w-44"
              >
                Continue
              </Button>
            )}
          </div>
        </GlowCard>

        <p className="mt-7 text-center text-xs text-plum-500">
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

interface RenderArgs {
  key: (typeof STEPS)[number]["key"];
  state: OnboardingState;
  setState: React.Dispatch<React.SetStateAction<OnboardingState>>;
  requiredPromptCount: number;
  submitting: boolean;
  isMember: boolean;
  onPay: () => void;
}

function renderStep({
  key,
  state,
  setState,
  requiredPromptCount,
  submitting,
  isMember,
  onPay,
}: RenderArgs) {
  switch (key) {
    case "welcome":
      return <WelcomeStep />;
    case "intro":
      return <EmotionalIntroStep />;
    case "membershipIntro":
      return <MembershipIntroStep />;
    case "gender":
      return (
        <SingleSelectStep
          eyebrow="Step 4"
          title="Gender identity"
          subtitle="Tell us how you would like to be seen. You can self-describe if none of the options fit."
          options={GENDER}
          value={state.gender}
          onChange={(v) => setState((s) => ({ ...s, gender: v }))}
        />
      );
    case "pronouns":
      return (
        <SingleSelectStep
          eyebrow="Step 5"
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
          eyebrow="Step 6"
          title="Sexual or romantic orientation"
          subtitle="Pick what feels closest right now. There is no wrong answer."
          options={ORIENTATION}
          value={state.orientation}
          onChange={(v) => setState((s) => ({ ...s, orientation: v }))}
        />
      );
    case "interestedIn":
      return (
        <MultiSelectStep
          eyebrow="Step 7"
          title="Who you would like to meet"
          subtitle="Pick anyone you are open to. We respect every choice you make here, and we respect everyone you don't."
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
          eyebrow="Step 8"
          title="What are you looking for?"
          subtitle="Be honest. We won't show you to people whose intentions don't fit yours."
          options={INTENTIONS}
          value={state.intention}
          onChange={(v) => setState((s) => ({ ...s, intention: v }))}
        />
      );
    case "partnershipShape":
      return (
        <SingleSelectStep
          eyebrow="Step 9"
          title="What are you hoping to build?"
          subtitle="Afterglow is designed around one-to-one long-term partnership. Pick the shape that feels most true."
          options={PARTNERSHIP_SHAPES}
          value={state.partnershipShape}
          onChange={(v) =>
            setState((s) => ({ ...s, partnershipShape: v }))
          }
        />
      );
    case "continent":
      return (
        <SingleSelectStep
          eyebrow="Step 10"
          title="Which continent do you live in?"
          subtitle="We use broad geography to place you in a private compatibility region. Same-country matching only, for now."
          options={CONTINENTS}
          value={state.continent}
          onChange={(v) =>
            setState((s) => ({ ...s, continent: v, country: undefined }))
          }
        />
      );
    case "country":
      return (
        <SingleSelectStep
          eyebrow="Step 11"
          title="Country"
          subtitle="We will match you with people inside the same country, within a private 200 km compatibility region."
          options={
            state.continent
              ? COUNTRIES_BY_CONTINENT[state.continent]
              : []
          }
          value={state.country}
          onChange={(v) => setState((s) => ({ ...s, country: v }))}
        />
      );
    case "region":
      return (
        <FreeTextStep
          eyebrow="Step 12"
          title="State, province, or region"
          subtitle="Whatever describes your area. We use this to refine the compatibility region. We never display it publicly."
          value={state.region}
          onChange={(v) => setState((s) => ({ ...s, region: v }))}
          placeholder="e.g. Ontario, England, New South Wales"
        />
      );
    case "city":
      return (
        <FreeTextStep
          eyebrow="Step 13"
          title="City or metro area (private)"
          subtitle="Your city helps us place you in a private compatibility region. We never show exact distance, maps, or live location."
          value={state.city}
          onChange={(v) => setState((s) => ({ ...s, city: v }))}
          placeholder="e.g. Toronto, London, Tokyo"
          maxLength={80}
        />
      );
    case "communication":
      return (
        <SingleSelectStep
          eyebrow="Step 14"
          title="How do you like to communicate?"
          subtitle="Pick the one that feels closest. We will match you with people who fit your rhythm."
          options={COMMUNICATION}
          value={state.communication}
          onChange={(v) => setState((s) => ({ ...s, communication: v }))}
        />
      );
    case "conflict":
      return (
        <SingleSelectStep
          eyebrow="Step 15"
          title="How do you handle conflict?"
          subtitle="The version of you that shows up when something is hard."
          options={CONFLICT}
          value={state.conflict}
          onChange={(v) => setState((s) => ({ ...s, conflict: v }))}
        />
      );
    case "emotionalNeeds":
      return (
        <MultiSelectStep
          eyebrow="Step 16"
          title="What helps you feel emotionally cared for?"
          subtitle="Pick anything that feels true. We will quietly use this when we choose who to send your way."
          options={EMOTIONAL_NEEDS}
          values={state.emotionalNeeds}
          onToggle={(v) =>
            setState((s) => ({
              ...s,
              emotionalNeeds: toggle(s.emotionalNeeds, v),
            }))
          }
        />
      );
    case "attachment":
      return (
        <SingleSelectStep
          eyebrow="Step 17"
          title="Attachment tendency"
          subtitle="Just a snapshot. We use this to find partners whose pace matches yours."
          options={ATTACHMENT}
          value={state.attachment}
          onChange={(v) => setState((s) => ({ ...s, attachment: v }))}
        />
      );
    case "loveLanguages":
      return (
        <MultiSelectStep
          eyebrow="Step 18"
          title="Love languages"
          subtitle="How you give and receive care most naturally. Pick all that apply."
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
          eyebrow="Step 19"
          title="Lifestyle rhythm"
          subtitle="How does your week actually feel, on average, on a good week?"
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
          eyebrow="Step 20"
          title="Future you are open to"
          subtitle="There is no right shape for this. Pick anything that sounds true."
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
          eyebrow="Step 21"
          title="Family and kids"
          subtitle="Honesty here makes everyone's life easier."
          options={FAMILY}
          value={state.familyViews}
          onChange={(v) => setState((s) => ({ ...s, familyViews: v }))}
        />
      );
    case "social":
      return (
        <SingleSelectStep
          eyebrow="Step 22"
          title="Social energy"
          subtitle="How do people most often experience you? Pick the one closest to how you usually feel."
          options={SOCIAL_ENERGY}
          value={state.socialEnergy}
          onChange={(v) => setState((s) => ({ ...s, socialEnergy: v }))}
        />
      );
    case "values":
      return (
        <MultiSelectStep
          eyebrow="Step 23"
          title="What do you value most in a relationship?"
          subtitle="Choose at least three. These shape who we lift into your matches."
          options={VALUES}
          values={state.values}
          onToggle={(v) =>
            setState((s) => ({ ...s, values: toggle(s.values, v) }))
          }
          minNote={`Selected ${state.values.length} of ${VALUES.length}`}
        />
      );
    case "dealbreakers":
      return (
        <CheckboxStep
          eyebrow="Step 24"
          title="Anything that is a no for you?"
          subtitle="We will quietly filter these out. You don't owe anyone access to your time."
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
    case "astrology":
      return <AstrologyStep state={state} setState={setState} />;
    case "prompts":
      return (
        <PromptsStep
          state={state}
          setState={setState}
          requiredPromptCount={requiredPromptCount}
        />
      );
    case "preview":
      return <PreviewStep state={state} />;
    case "payment":
      return (
        <PaymentStep
          submitting={submitting}
          alreadyMember={isMember}
          onPay={onPay}
        />
      );
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
      <h1 className="mt-4 font-display text-3xl tracking-tight text-burgundy-700 md:text-5xl">
        Let's slow down for a second.
      </h1>
      <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-plum-600 md:text-lg">
        These next pages help us understand who you are, what you are hoping
        to build, and who might be a real fit. No personality tests. No
        tricks. Just honest answers.
      </p>
      <div className="mx-auto mt-10 grid max-w-xl gap-3 sm:grid-cols-3">
        {[
          "About 7 minutes",
          "Edit anything later",
          "Private by default",
        ].map((p) => (
          <div
            key={p}
            className="rounded-2xl border border-white bg-white/70 px-3 py-3 text-xs text-plum-700"
          >
            {p}
          </div>
        ))}
      </div>
    </div>
  );
}

function EmotionalIntroStep() {
  return (
    <div>
      <p className="text-xs uppercase tracking-[0.22em] text-plum-500">
        Step 2. Before we begin
      </p>
      <h2 className="mt-3 font-display text-3xl tracking-tight text-burgundy-700 md:text-4xl">
        We would rather ask better questions than faster ones.
      </h2>
      <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-plum-600 md:text-base">
        Afterglow isn't built to keep you swiping. It is built to help you
        meet a small number of people who could actually fit the life you are
        building. The questions ahead are a little more thoughtful than you
        are used to, and that is the point.
      </p>
      <div className="mt-7 grid gap-3 sm:grid-cols-2">
        {[
          {
            title: "We get to know you, not just your photos",
            body: "Identity, intention, attachment, communication, values, lifestyle. The texture, not the highlights.",
          },
          {
            title: "There are no wrong answers",
            body: "You can choose 'Prefer not to say' or 'Still figuring it out' anywhere it feels right.",
          },
          {
            title: "We take pace seriously",
            body: "Long-form prompts. A small daily list. Calm UI. No infinite scroll, ever.",
          },
          {
            title: "We never reveal your exact location",
            body: "We use broad regions for matching. No map, no live distance, no city shown publicly.",
          },
        ].map((b) => (
          <div
            key={b.title}
            className="rounded-2xl border border-white bg-white/70 p-4"
          >
            <p className="text-sm font-medium text-burgundy-700">{b.title}</p>
            <p className="mt-1 text-xs leading-relaxed text-plum-600">
              {b.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function MembershipIntroStep() {
  return (
    <div>
      <StepHeader
        eyebrow="Step 3"
        title="A small membership, by design."
        subtitle="Afterglow is a small membership community. A one-time fee keeps it considered, not crowded. You will activate your membership at the end of onboarding."
      />
      <MembershipCard />
      <p className="mt-5 text-xs text-plum-500">
        Prototype only. No payment is collected in this demo.
      </p>
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
        eyebrow="Step 25"
        title="Astrology, optional and playful."
        subtitle="If you enjoy a little cosmic timing, share a sign. If not, just skip. It never affects compatibility matches."
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
              ? "bg-gradient-to-r from-sky2-200 to-mauve-200 text-burgundy-800"
              : "border border-mauve-200/40 bg-white/70 text-plum-600 hover:bg-white"
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
          Astrology is a playful, optional layer on Afterglow. It is not used
          in serious compatibility scoring.
        </p>
      </div>
    </div>
  );
}

function PromptsStep({
  state,
  setState,
  requiredPromptCount,
}: {
  state: OnboardingState;
  setState: React.Dispatch<React.SetStateAction<OnboardingState>>;
  requiredPromptCount: number;
}) {
  return (
    <div>
      <StepHeader
        eyebrow="Step 26"
        title="A few prompts, in your own voice."
        subtitle={`Three required answers at ${MIN_LONG_FORM} characters or more. Long-form answers help Afterglow understand emotional compatibility beyond photos.`}
      />
      <div className="mb-6 rounded-2xl border border-mauve-200/40 bg-mauve-50/55 p-4 text-xs leading-relaxed text-plum-700">
        Write the way you would talk to a close friend on a slow walk. Be
        specific. Trade adjectives for moments. Sincere is better than clever.
      </div>

      <p className="mb-3 text-[11px] uppercase tracking-[0.22em] text-plum-500">
        Required
      </p>
      <div className="grid gap-5">
        {REQUIRED_PROMPTS.map((p) => {
          const value = state.prompts[p.key];
          const ready = value.trim().length >= MIN_LONG_FORM;
          return (
            <label key={p.key} className="block">
              <span className="mb-1.5 flex items-center justify-between text-[11px] uppercase tracking-[0.18em] text-plum-500">
                <span className="flex items-center gap-2">
                  {p.label}
                  {ready ? (
                    <span className="rounded-full bg-gradient-to-r from-sky2-300/80 to-mauve-300/80 px-2 py-0.5 text-[9px] text-burgundy-800">
                      Ready
                    </span>
                  ) : null}
                </span>
                <span className="tabular-nums text-plum-400">
                  {value.length} / min {MIN_LONG_FORM}
                </span>
              </span>
              <textarea
                value={value}
                onChange={(e) =>
                  setState((s) => ({
                    ...s,
                    prompts: {
                      ...s.prompts,
                      [p.key]: e.target.value.slice(0, 600),
                    },
                  }))
                }
                rows={5}
                placeholder={p.placeholder}
                className="w-full resize-none rounded-2xl border border-white bg-white/75 px-4 py-3 text-[15px] leading-relaxed text-plum-800 transition focus:border-mauve-300 focus:bg-white"
              />
            </label>
          );
        })}
      </div>

      <p className="mt-8 mb-3 text-[11px] uppercase tracking-[0.22em] text-plum-500">
        Optional
      </p>
      <div className="grid gap-5">
        {OPTIONAL_PROMPTS.map((p) => {
          const value = state.prompts[p.key];
          return (
            <label key={p.key} className="block">
              <span className="mb-1.5 flex items-center justify-between text-[11px] uppercase tracking-[0.18em] text-plum-500">
                <span>{p.label}</span>
                <span className="tabular-nums text-plum-400">
                  {value.length}
                </span>
              </span>
              <textarea
                value={value}
                onChange={(e) =>
                  setState((s) => ({
                    ...s,
                    prompts: {
                      ...s.prompts,
                      [p.key]: e.target.value.slice(0, 600),
                    },
                  }))
                }
                rows={3}
                placeholder={p.placeholder}
                className="w-full resize-none rounded-2xl border border-white bg-white/75 px-4 py-3 text-[15px] leading-relaxed text-plum-800 transition focus:border-mauve-300 focus:bg-white"
              />
            </label>
          );
        })}
      </div>

      <p className="mt-5 text-xs text-plum-500">
        {requiredPromptCount} of {REQUIRED_PROMPTS.length} required prompts
        ready. Take your time. Your matches will read these carefully.
      </p>
    </div>
  );
}

function PreviewStep({ state }: { state: OnboardingState }) {
  return (
    <div>
      <StepHeader
        eyebrow="Almost there"
        title="Here is what we heard."
        subtitle="If anything feels off, you can edit it in your profile after activating your membership."
      />
      <div className="grid gap-3 sm:grid-cols-2">
        <SummaryRow label="Gender" value={state.gender} />
        <SummaryRow label="Pronouns" value={state.pronouns} />
        <SummaryRow label="Orientation" value={state.orientation} />
        <SummaryRow
          label="Interested in"
          value={state.interestedIn.join(", ") || "Not set"}
          full
        />
        <SummaryRow label="Intention" value={state.intention} />
        <SummaryRow
          label="Hoping to build"
          value={state.partnershipShape}
        />
        <SummaryRow label="Continent" value={state.continent} />
        <SummaryRow label="Country" value={state.country} />
        <SummaryRow label="State or region" value={state.region} />
        <SummaryRow label="City (private)" value={state.city || "Not set"} />
        <SummaryRow label="Communication" value={state.communication} />
        <SummaryRow label="Conflict" value={state.conflict} />
        <SummaryRow
          label="Emotional needs"
          value={state.emotionalNeeds.join(", ") || "Not set"}
          full
        />
        <SummaryRow label="Attachment" value={state.attachment} />
        <SummaryRow
          label="Love languages"
          value={state.loveLanguages.join(", ") || "Not set"}
        />
        <SummaryRow
          label="Lifestyle"
          value={state.lifestyle.join(", ") || "Not set"}
        />
        <SummaryRow
          label="Future you are open to"
          value={state.futureGoals.join(", ") || "Not set"}
          full
        />
        <SummaryRow label="Family" value={state.familyViews} />
        <SummaryRow label="Social energy" value={state.socialEnergy} />
        <SummaryRow
          label="Core values"
          value={state.values.join(", ") || "Not set"}
          full
        />
        <SummaryRow
          label="Dealbreakers"
          value={state.dealbreakers.join(", ") || "None set"}
          full
        />
        <SummaryRow
          label="Astrology"
          value={
            state.skipAstrology
              ? "Skipped"
              : [state.astrologySign, state.birthChartStyle]
                  .filter(Boolean)
                  .join(" · ") || "Not set"
          }
        />
      </div>
      <div className="mt-7 rounded-2xl border border-white bg-white/75 p-5">
        <p className="font-display text-lg text-burgundy-700">
          One last step before matches.
        </p>
        <p className="mt-1 text-sm text-plum-500">
          A small one-time membership keeps Afterglow thoughtful and bot-free.
          Tap Continue to activate.
        </p>
      </div>
    </div>
  );
}

function PaymentStep({
  submitting,
  alreadyMember,
  onPay,
}: {
  submitting: boolean;
  alreadyMember: boolean;
  onPay: () => void;
}) {
  return (
    <div>
      <StepHeader
        eyebrow="Final step"
        title="Activate your Afterglow membership."
        subtitle="A small one-time fee helps reduce bots, support moderation, and protect a more intentional dating environment."
      />

      <GlowCard className="p-5 md:p-7" tone="tint">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-[11px] uppercase tracking-[0.22em] text-burgundy-700">
              Afterglow membership
            </p>
            <p className="mt-1 font-display text-xl text-burgundy-700">
              One-time, lifetime access
            </p>
          </div>
          <div className="text-right">
            <p className="font-display text-3xl text-burgundy-700">$2.99</p>
            <p className="text-[11px] uppercase tracking-[0.18em] text-plum-500">
              USD, one time
            </p>
          </div>
        </div>

        <ul className="mt-5 space-y-2 text-sm text-plum-700">
          {[
            "Verified member badge across the app",
            "AI-assisted emotional safety on every chat",
            "Curated daily matches and astro list",
            "Long-form profiles and depth-aware matching",
            "Quiet review for community standards",
          ].map((line) => (
            <li key={line} className="flex items-start gap-2.5">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br from-sky2-300 to-mauve-300" />
              <span>{line}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <MockField label="Card number" value="4242 4242 4242 4242" />
          <MockField label="Name on card" value="Your full name" />
          <MockField label="Expiry" value="12 / 28" />
          <MockField label="CVC" value="123" />
        </div>

        <button
          type="button"
          onClick={onPay}
          disabled={submitting || alreadyMember}
          className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-sky2-300 via-lilac-300 to-mauve-300 px-6 py-3.5 text-base font-medium text-burgundy-800 shadow-glow transition hover:-translate-y-0.5 hover:shadow-glow-blush disabled:cursor-not-allowed disabled:opacity-60"
        >
          {submitting
            ? "Activating membership..."
            : alreadyMember
            ? "Membership already active"
            : "Continue with $2.99 membership"}
        </button>
        <p className="mt-3 text-center text-xs text-plum-500">
          Prototype only. No payment is collected in this demo. Paid
          membership does not guarantee safety or authenticity.
        </p>
      </GlowCard>
    </div>
  );
}

function MockField({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white bg-white/85 p-3">
      <p className="text-[10px] uppercase tracking-[0.18em] text-plum-500">
        {label}
      </p>
      <p className="mt-1 text-sm text-plum-700">{value}</p>
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
                  ? "border-transparent bg-gradient-to-r from-sky2-100 via-lilac-100 to-mauve-100 ring-1 ring-inset ring-mauve-300/40"
                  : "border-white bg-white/65 hover:border-mauve-300/40 hover:bg-white",
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
                    ? "border-transparent bg-gradient-to-br from-sky2-300 to-mauve-300"
                    : "border-mauve-300/40 bg-white/80",
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

function FreeTextStep({
  eyebrow,
  title,
  subtitle,
  value,
  onChange,
  placeholder,
  maxLength = 80,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  maxLength?: number;
}) {
  return (
    <div>
      <StepHeader eyebrow={eyebrow} title={title} subtitle={subtitle} />
      <label className="block">
        <span className="sr-only">{title}</span>
        <input
          value={value}
          onChange={(e) => onChange(e.target.value.slice(0, maxLength))}
          placeholder={placeholder}
          className="w-full rounded-2xl border border-white bg-white/80 px-4 py-3.5 text-[15px] text-plum-800 transition focus:border-mauve-300 focus:bg-white"
        />
      </label>
    </div>
  );
}

function SelectableRow({
  label,
  selected,
  onClick,
}: {
  label: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "group flex items-center justify-between rounded-2xl border px-5 py-4 text-left transition-all",
        selected
          ? "border-transparent bg-gradient-to-r from-sky2-100 via-lilac-100 to-mauve-100 shadow-glow-sm ring-1 ring-inset ring-mauve-300/40"
          : "border-white bg-white/65 hover:border-mauve-300/40 hover:bg-white",
      ].join(" ")}
    >
      <span className="text-[15px] text-plum-800">{label}</span>
      <span
        aria-hidden
        className={[
          "ml-4 inline-flex h-5 w-5 items-center justify-center rounded-full border transition",
          selected
            ? "border-transparent bg-gradient-to-br from-sky2-300 to-mauve-300"
            : "border-mauve-300/40 bg-white/80",
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
      className={`rounded-2xl border border-white bg-white/70 p-4 ${
        full ? "sm:col-span-2" : ""
      }`}
    >
      <p className="text-[10px] uppercase tracking-[0.18em] text-plum-500">
        {label}
      </p>
      <p className="mt-1.5 text-sm text-plum-800">{value || "Not set"}</p>
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
    <div className="mb-8">
      <p className="text-[11px] uppercase tracking-[0.22em] text-plum-500">
        {eyebrow}
      </p>
      <h2 className="mt-2 font-display text-2xl tracking-tight text-burgundy-700 md:text-3xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-3 max-w-xl text-sm text-plum-600 md:text-[15px]">
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
        stroke="#4a1c32"
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
