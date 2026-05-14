"use client";

import { useState } from "react";
import Link from "next/link";
import { AppHeader } from "@/components/AppHeader";
import { GlowCard } from "@/components/GlowCard";
import { ProgressSteps } from "@/components/ProgressSteps";
import { PromptChip } from "@/components/PromptChip";
import { Button, LinkButton } from "@/components/Button";
import type {
  CommunicationStyle,
  CoreValue,
  Dealbreaker,
  RelationshipIntention,
  RelationshipStyle,
} from "@/types";

const INTENTIONS: RelationshipIntention[] = [
  "Life partner",
  "Serious relationship",
  "Slow dating",
  "Friendship first",
  "Still figuring it out, but open to real connection",
];

const STYLES: RelationshipStyle[] = [
  "Monogamous",
  "Open to discussing",
  "Ethically non-monogamous",
  "Not sure yet",
];

const COMMUNICATION: CommunicationStyle[] = [
  "I like frequent communication",
  "I prefer slower thoughtful replies",
  "I value direct honesty",
  "I need emotional reassurance",
  "I like independence and space",
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
];

const DEALBREAKERS: Dealbreaker[] = [
  "Not emotionally available",
  "Not looking for commitment",
  "Poor communication",
  "Dishonesty",
  "Disrespectful behavior",
  "Incompatible relationship goals",
];

const STEPS = [
  { key: "welcome", title: "Welcome" },
  { key: "intention", title: "What you're looking for" },
  { key: "style", title: "Relationship style" },
  { key: "communication", title: "Communication" },
  { key: "values", title: "Core values" },
  { key: "dealbreakers", title: "Dealbreakers" },
  { key: "preview", title: "Ready" },
];

interface OnboardingState {
  intention?: RelationshipIntention;
  style?: RelationshipStyle;
  communication?: CommunicationStyle;
  values: CoreValue[];
  dealbreakers: Dealbreaker[];
}

export default function OnboardingPage() {
  const [step, setStep] = useState(1);
  const [state, setState] = useState<OnboardingState>({
    values: [],
    dealbreakers: [],
  });

  const total = STEPS.length;
  const current = STEPS[step - 1];

  const canContinue = (() => {
    switch (current.key) {
      case "welcome":
        return true;
      case "intention":
        return !!state.intention;
      case "style":
        return !!state.style;
      case "communication":
        return !!state.communication;
      case "values":
        return state.values.length >= 3;
      case "dealbreakers":
        return true; // optional, can be empty
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
            {current.key === "welcome" && <WelcomeStep />}

            {current.key === "intention" && (
              <SingleSelectStep
                eyebrow="Step 2"
                title="What are you looking for?"
                subtitle="Be honest. We won't show you to people whose intentions don't fit yours."
                options={INTENTIONS}
                value={state.intention}
                onChange={(v) => setState((s) => ({ ...s, intention: v }))}
              />
            )}

            {current.key === "style" && (
              <SingleSelectStep
                eyebrow="Step 3"
                title="Relationship style"
                subtitle="You can revisit this anytime — your honesty matters more than your certainty."
                options={STYLES}
                value={state.style}
                onChange={(v) => setState((s) => ({ ...s, style: v }))}
              />
            )}

            {current.key === "communication" && (
              <SingleSelectStep
                eyebrow="Step 4"
                title="How do you like to communicate?"
                subtitle="Pick the one that feels closest. We'll use this to match you with people who fit your rhythm."
                options={COMMUNICATION}
                value={state.communication}
                onChange={(v) => setState((s) => ({ ...s, communication: v }))}
              />
            )}

            {current.key === "values" && (
              <MultiSelectStep
                eyebrow="Step 5"
                title="What do you value in a relationship?"
                subtitle="Choose at least three. These shape who we lift into your matches."
                options={VALUES}
                values={state.values}
                onToggle={(v) =>
                  setState((s) => ({
                    ...s,
                    values: s.values.includes(v)
                      ? s.values.filter((x) => x !== v)
                      : [...s.values, v],
                  }))
                }
                minNote={`Selected ${state.values.length} of ${VALUES.length}`}
              />
            )}

            {current.key === "dealbreakers" && (
              <CheckboxStep
                eyebrow="Step 6"
                title="Anything that's a no for you?"
                subtitle="We'll quietly filter these out. You don't owe anyone access to your time."
                options={DEALBREAKERS}
                values={state.dealbreakers}
                onToggle={(v) =>
                  setState((s) => ({
                    ...s,
                    dealbreakers: s.dealbreakers.includes(v)
                      ? s.dealbreakers.filter((x) => x !== v)
                      : [...s.dealbreakers, v],
                  }))
                }
              />
            )}

            {current.key === "preview" && <PreviewStep state={state} />}
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
                  className="text-sm text-ink-300 underline-offset-4 transition hover:text-ink-100 hover:underline"
                >
                  Not now
                </Link>
              )}
              {current.key === "values" && state.values.length < 3 ? (
                <span className="text-xs text-ink-300">
                  Choose at least 3 values
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

        <p className="mt-6 text-center text-xs text-ink-300">
          You can edit any of these later in Settings. Nothing here is set in
          stone.
        </p>
      </div>
    </main>
  );
}

function WelcomeStep() {
  return (
    <div className="text-center">
      <p className="text-xs uppercase tracking-[0.22em] text-ink-300">
        Welcome to Afterglow
      </p>
      <h1 className="mt-4 font-display text-3xl tracking-tight text-ink-50 md:text-5xl">
        Let's slow down for a second.
      </h1>
      <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-ink-200 md:text-lg">
        These next few questions help us understand what kind of relationship
        you're hoping to build — and who might be a real fit. No personality
        tests. No tricks. Just honest answers.
      </p>
      <div className="mx-auto mt-8 grid max-w-xl gap-3 sm:grid-cols-3">
        {[
          "Takes about 2 minutes",
          "Edit anything later",
          "Private by default",
        ].map((p) => (
          <div
            key={p}
            className="rounded-2xl border border-white/10 bg-white/3 px-3 py-3 text-xs text-ink-200"
          >
            {p}
          </div>
        ))}
      </div>
    </div>
  );
}

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
        {options.map((opt) => {
          const selected = value === opt;
          return (
            <button
              key={opt}
              type="button"
              onClick={() => onChange(opt)}
              className={[
                "group flex items-center justify-between rounded-2xl border px-5 py-4 text-left transition-all",
                selected
                  ? "border-transparent bg-gradient-to-r from-glow-pink/20 via-glow-mauve/15 to-glow-sky/20 shadow-glow-sm ring-1 ring-inset ring-white/25"
                  : "border-white/10 bg-white/3 hover:border-white/25 hover:bg-white/5",
              ].join(" ")}
            >
              <span className="text-[15px] text-ink-50">{opt}</span>
              <span
                aria-hidden
                className={[
                  "ml-4 inline-flex h-5 w-5 items-center justify-center rounded-full border transition",
                  selected
                    ? "border-transparent bg-gradient-to-br from-glow-pink to-glow-sky"
                    : "border-white/25 bg-transparent",
                ].join(" ")}
              >
                {selected ? <Check /> : null}
              </span>
            </button>
          );
        })}
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
        <p className="mt-4 text-xs text-ink-300">{minNote}</p>
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
                  ? "border-transparent bg-gradient-to-r from-glow-pink/15 via-glow-mauve/10 to-glow-sky/15 ring-1 ring-inset ring-white/25"
                  : "border-white/10 bg-white/3 hover:border-white/20 hover:bg-white/5",
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
                    ? "border-transparent bg-gradient-to-br from-glow-pink to-glow-sky"
                    : "border-white/25 bg-transparent",
                ].join(" ")}
              >
                {checked ? <Check /> : null}
              </span>
              <span className="text-sm text-ink-100">{opt}</span>
            </label>
          );
        })}
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
        <SummaryRow label="Looking for" value={state.intention} />
        <SummaryRow label="Relationship style" value={state.style} />
        <SummaryRow label="Communication" value={state.communication} />
        <SummaryRow
          label="Core values"
          value={state.values.length ? state.values.join(", ") : "—"}
        />
        <SummaryRow
          label="Dealbreakers"
          value={
            state.dealbreakers.length ? state.dealbreakers.join(", ") : "None set"
          }
          full
        />
      </div>
      <div className="mt-6 rounded-2xl border border-white/10 bg-white/3 p-5">
        <p className="font-display text-lg text-ink-50">
          You're ready to build your profile.
        </p>
        <p className="mt-1 text-sm text-ink-300">
          Next we'll write the words and pick the photos that introduce you.
        </p>
      </div>
    </div>
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
      className={`rounded-2xl border border-white/8 bg-white/3 p-4 ${
        full ? "sm:col-span-2" : ""
      }`}
    >
      <p className="text-[10px] uppercase tracking-[0.18em] text-ink-300">
        {label}
      </p>
      <p className="mt-1.5 text-sm text-ink-100">{value || "—"}</p>
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
      <p className="text-[11px] uppercase tracking-[0.22em] text-ink-300">
        {eyebrow}
      </p>
      <h2 className="mt-2 font-display text-2xl tracking-tight text-ink-50 md:text-3xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-2 max-w-xl text-sm text-ink-200 md:text-[15px]">
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
        stroke="#1f1a3a"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
