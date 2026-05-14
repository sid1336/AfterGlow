"use client";

import { useMemo, useState } from "react";
import { AppHeader } from "@/components/AppHeader";
import { Footer } from "@/components/Footer";
import { GlowCard } from "@/components/GlowCard";
import { LinkButton } from "@/components/Button";
import { PromptChip } from "@/components/PromptChip";
import { ProfileSection } from "@/components/ProfileSection";
import type {
  CoreValue,
  Dealbreaker,
  RelationshipIntention,
} from "@/types";

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

const INTENTIONS: RelationshipIntention[] = [
  "Life partner",
  "Serious relationship",
  "Slow dating",
  "Friendship first",
  "Still figuring it out, but open to real connection",
];

const DEALBREAKERS: Dealbreaker[] = [
  "Not emotionally available",
  "Not looking for commitment",
  "Poor communication",
  "Dishonesty",
  "Disrespectful behavior",
  "Incompatible relationship goals",
];

interface ProfileForm {
  name: string;
  age: string;
  city: string;
  bio: string;
  lifeFeel: string;
  loveMeans: string;
  handleConflict: string;
  greenFlag: string;
  idealSunday: string;
  intention?: RelationshipIntention;
  values: CoreValue[];
  dealbreakers: Dealbreaker[];
  photos: (null | "filled")[];
}

const initial: ProfileForm = {
  name: "",
  age: "",
  city: "",
  bio: "",
  lifeFeel: "",
  loveMeans: "",
  handleConflict: "",
  greenFlag: "",
  idealSunday: "",
  intention: undefined,
  values: [],
  dealbreakers: [],
  photos: [null, null, null, null, null, null],
};

export default function ProfileCreationPage() {
  const [form, setForm] = useState<ProfileForm>(initial);

  const completeness = useMemo(() => {
    let filled = 0;
    const totalFields = 13;
    if (form.name) filled++;
    if (form.age) filled++;
    if (form.city) filled++;
    if (form.bio.length > 20) filled++;
    if (form.lifeFeel.length > 10) filled++;
    if (form.loveMeans.length > 10) filled++;
    if (form.handleConflict.length > 10) filled++;
    if (form.greenFlag.length > 10) filled++;
    if (form.idealSunday.length > 10) filled++;
    if (form.intention) filled++;
    if (form.values.length >= 3) filled++;
    if (form.dealbreakers.length >= 1) filled++;
    if (form.photos.some((p) => p === "filled")) filled++;
    return Math.round((filled / totalFields) * 100);
  }, [form]);

  const togglePhoto = (i: number) => {
    setForm((f) => {
      const next = [...f.photos];
      next[i] = next[i] === "filled" ? null : "filled";
      return { ...f, photos: next };
    });
  };

  return (
    <main className="min-h-dvh pb-20">
      <AppHeader />

      <div className="mx-auto max-w-3xl px-5 pt-10">
        <header className="mb-8">
          <p className="text-xs uppercase tracking-[0.22em] text-ink-300">
            Your profile
          </p>
          <h1 className="mt-2 font-display text-3xl tracking-tight text-ink-50 md:text-4xl">
            Let's introduce you, honestly.
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-ink-200 md:text-base">
            Take your time. The more truthful your profile, the more meaningful
            your matches. There's no character limit on care.
          </p>

          <div className="mt-6">
            <div className="flex items-center justify-between text-xs text-ink-300">
              <span>Profile completeness</span>
              <span className="tabular-nums">{completeness}%</span>
            </div>
            <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/8">
              <div
                className="h-full rounded-full bg-gradient-to-r from-glow-pink via-glow-mauve to-glow-sky transition-[width] duration-500"
                style={{ width: `${completeness}%` }}
              />
            </div>
          </div>
        </header>

        <div className="space-y-6">
          {/* Basics */}
          <ProfileSection
            title="The basics"
            description="A few simple details to ground your profile."
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <TextField
                label="Name"
                placeholder="What you'd like to be called"
                value={form.name}
                onChange={(v) => setForm((f) => ({ ...f, name: v }))}
              />
              <TextField
                label="Age"
                placeholder="29"
                value={form.age}
                onChange={(v) =>
                  setForm((f) => ({ ...f, age: v.replace(/[^0-9]/g, "") }))
                }
                inputMode="numeric"
                maxLength={3}
              />
              <TextField
                label="City"
                placeholder="Where you live now"
                value={form.city}
                onChange={(v) => setForm((f) => ({ ...f, city: v }))}
                className="sm:col-span-2"
              />
              <TextAreaField
                label="Short bio"
                placeholder="A paragraph that sounds like you on a good day."
                value={form.bio}
                onChange={(v) => setForm((f) => ({ ...f, bio: v }))}
                className="sm:col-span-2"
                rows={3}
                max={240}
              />
            </div>
          </ProfileSection>

          {/* Photos */}
          <ProfileSection
            title="Photos"
            description="Six slots. Pick photos where you look like yourself — not someone trying to be liked."
          >
            <div className="grid grid-cols-3 gap-3">
              {form.photos.map((p, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => togglePhoto(i)}
                  className={[
                    "group relative aspect-[3/4] overflow-hidden rounded-2xl border transition-all",
                    p === "filled"
                      ? "border-transparent shadow-glow-sm"
                      : "border-dashed border-white/20 bg-white/3 hover:border-white/40 hover:bg-white/5",
                  ].join(" ")}
                >
                  {p === "filled" ? (
                    <div className="absolute inset-0 bg-gradient-to-br from-glow-pink/40 via-glow-mauve/30 to-glow-sky/40">
                      <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_30%,rgba(255,255,255,0.45),transparent_60%)]" />
                      <div className="absolute inset-0 flex items-end p-3">
                        <span className="rounded-full bg-black/30 px-2 py-0.5 text-[10px] text-white/90 backdrop-blur">
                          Photo {i + 1}
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div className="flex h-full flex-col items-center justify-center text-ink-300">
                      <svg
                        viewBox="0 0 24 24"
                        className="h-6 w-6 opacity-70"
                        aria-hidden
                      >
                        <path
                          d="M12 5v14M5 12h14"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </svg>
                      <span className="mt-1.5 text-[11px] uppercase tracking-[0.18em]">
                        Add photo
                      </span>
                    </div>
                  )}
                </button>
              ))}
            </div>
            <p className="mt-3 text-xs text-ink-300">
              Photo uploads are a preview in this prototype — tap a slot to
              simulate.
            </p>
          </ProfileSection>

          {/* Prompts */}
          <ProfileSection
            title="In your words"
            description="The prompts that help someone feel you, not just see you."
          >
            <div className="grid gap-4">
              <TextAreaField
                label="What I want my life to feel like"
                placeholder="Quiet, full, warm, a little brave..."
                value={form.lifeFeel}
                onChange={(v) => setForm((f) => ({ ...f, lifeFeel: v }))}
                max={200}
                rows={2}
              />
              <TextAreaField
                label="What love means to me"
                placeholder="Try to write the version you'd whisper, not the one you'd post."
                value={form.loveMeans}
                onChange={(v) => setForm((f) => ({ ...f, loveMeans: v }))}
                max={200}
                rows={2}
              />
              <TextAreaField
                label="How I handle conflict"
                placeholder="Honestly. The version of you that shows up when things are hard."
                value={form.handleConflict}
                onChange={(v) =>
                  setForm((f) => ({ ...f, handleConflict: v }))
                }
                max={200}
                rows={2}
              />
              <TextAreaField
                label="A green flag I bring to relationships"
                placeholder="The thing your last partner thanked you for."
                value={form.greenFlag}
                onChange={(v) => setForm((f) => ({ ...f, greenFlag: v }))}
                max={200}
                rows={2}
              />
              <TextAreaField
                label="My ideal Sunday"
                placeholder="Walk us through it, from morning coffee to last light."
                value={form.idealSunday}
                onChange={(v) => setForm((f) => ({ ...f, idealSunday: v }))}
                max={220}
                rows={2}
              />
            </div>
          </ProfileSection>

          {/* Intention */}
          <ProfileSection
            title="Relationship intention"
            description="Tell the people we send your way what you're really here for."
          >
            <div className="flex flex-wrap gap-2.5">
              {INTENTIONS.map((opt) => (
                <PromptChip
                  key={opt}
                  selected={form.intention === opt}
                  onClick={() =>
                    setForm((f) => ({
                      ...f,
                      intention: f.intention === opt ? undefined : opt,
                    }))
                  }
                >
                  {opt}
                </PromptChip>
              ))}
            </div>
          </ProfileSection>

          {/* Values */}
          <ProfileSection
            title="Values"
            description="Pick the ones that feel non-negotiable for who you are."
          >
            <div className="flex flex-wrap gap-2.5">
              {VALUES.map((v) => (
                <PromptChip
                  key={v}
                  selected={form.values.includes(v)}
                  onClick={() =>
                    setForm((f) => ({
                      ...f,
                      values: f.values.includes(v)
                        ? f.values.filter((x) => x !== v)
                        : [...f.values, v],
                    }))
                  }
                >
                  {v}
                </PromptChip>
              ))}
            </div>
          </ProfileSection>

          {/* Dealbreakers */}
          <ProfileSection
            title="Dealbreakers"
            description="What you'd rather not be sent. Selecting these is a kindness to yourself."
          >
            <div className="grid gap-2.5 sm:grid-cols-2">
              {DEALBREAKERS.map((d) => {
                const checked = form.dealbreakers.includes(d);
                return (
                  <label
                    key={d}
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
                      onChange={() =>
                        setForm((f) => ({
                          ...f,
                          dealbreakers: f.dealbreakers.includes(d)
                            ? f.dealbreakers.filter((x) => x !== d)
                            : [...f.dealbreakers, d],
                        }))
                      }
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
                      {checked ? (
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
                      ) : null}
                    </span>
                    <span className="text-sm text-ink-100">{d}</span>
                  </label>
                );
              })}
            </div>
          </ProfileSection>

          <div className="flex flex-col items-center gap-3 pt-4 sm:flex-row sm:justify-between">
            <p className="text-xs text-ink-300">
              Saved automatically as you go.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <LinkButton href="/matches" variant="secondary">
                See today's matches
              </LinkButton>
              <LinkButton href="/settings">Save and continue</LinkButton>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}

interface TextFieldProps {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  className?: string;
  inputMode?: "text" | "numeric" | "email";
  maxLength?: number;
}

function TextField({
  label,
  value,
  onChange,
  placeholder,
  className = "",
  inputMode = "text",
  maxLength,
}: TextFieldProps) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-1.5 block text-[11px] uppercase tracking-[0.18em] text-ink-300">
        {label}
      </span>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        inputMode={inputMode}
        maxLength={maxLength}
        className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-[15px] text-ink-50 placeholder:text-ink-300/70 transition focus:border-white/25 focus:bg-white/8"
      />
    </label>
  );
}

interface TextAreaFieldProps {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  className?: string;
  rows?: number;
  max?: number;
}

function TextAreaField({
  label,
  value,
  onChange,
  placeholder,
  className = "",
  rows = 3,
  max,
}: TextAreaFieldProps) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-1.5 flex items-center justify-between text-[11px] uppercase tracking-[0.18em] text-ink-300">
        <span>{label}</span>
        {max ? (
          <span className="tabular-nums text-ink-300/70">
            {value.length}/{max}
          </span>
        ) : null}
      </span>
      <textarea
        value={value}
        onChange={(e) =>
          onChange(max ? e.target.value.slice(0, max) : e.target.value)
        }
        placeholder={placeholder}
        rows={rows}
        className="w-full resize-none rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-[15px] leading-relaxed text-ink-50 placeholder:text-ink-300/70 transition focus:border-white/25 focus:bg-white/8"
      />
    </label>
  );
}
