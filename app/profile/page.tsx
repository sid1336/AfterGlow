"use client";

import { useMemo, useState } from "react";
import { AppHeader } from "@/components/AppHeader";
import { Footer } from "@/components/Footer";
import { LinkButton } from "@/components/Button";
import { PromptChip } from "@/components/PromptChip";
import { ProfileSection } from "@/components/ProfileSection";
import type {
  BroadRegion,
  CoreValue,
  Dealbreaker,
  GenderIdentity,
  InterestedIn,
  LoveLanguage,
  Orientation,
  Pronouns,
  RelationshipIntention,
  RelationshipStructure,
} from "@/types";

const GENDERS: GenderIdentity[] = [
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
  "Greater Toronto Area",
  "Greater Golden Horseshoe",
  "Southern Ontario",
  "Northern Ontario",
  "Ottawa Region",
  "Montreal Region",
  "Vancouver Region",
  "Northeast USA",
  "Pacific Northwest",
  "Bay Area",
  "Greater New York",
  "Greater Los Angeles",
  "Texas Triangle",
  "Mountain West",
  "Greater London",
  "Île-de-France",
  "Berlin Metro Region",
  "Amsterdam Metro Region",
  "Stockholm Region",
  "Tokyo Metro Region",
  "Greater Sydney",
  "Greater Melbourne",
  "Auckland Region",
  "Singapore Region",
  "Seoul Capital Area",
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

interface ProfileForm {
  name: string;
  age: string;
  broadRegion?: BroadRegion;
  bio: string;
  genderIdentity?: GenderIdentity;
  pronouns?: Pronouns;
  orientation?: Orientation;
  interestedIn: InterestedIn[];
  intention?: RelationshipIntention;
  structure?: RelationshipStructure;
  lifeFeel: string;
  loveMeans: string;
  feelSafe: string;
  partnership: string;
  emotionalEnergy: string;
  handleConflict: string;
  greenFlag: string;
  idealSunday: string;
  values: CoreValue[];
  loveLanguages: LoveLanguage[];
  dealbreakers: Dealbreaker[];
  photos: (null | "filled")[];
}

const initial: ProfileForm = {
  name: "",
  age: "",
  bio: "",
  interestedIn: [],
  lifeFeel: "",
  loveMeans: "",
  feelSafe: "",
  partnership: "",
  emotionalEnergy: "",
  handleConflict: "",
  greenFlag: "",
  idealSunday: "",
  values: [],
  loveLanguages: [],
  dealbreakers: [],
  photos: [null, null, null, null, null, null],
};

export default function ProfileCreationPage() {
  const [form, setForm] = useState<ProfileForm>(initial);

  const completeness = useMemo(() => {
    let filled = 0;
    const total = 20;
    if (form.name) filled++;
    if (form.age) filled++;
    if (form.broadRegion) filled++;
    if (form.bio.length > 20) filled++;
    if (form.genderIdentity) filled++;
    if (form.pronouns) filled++;
    if (form.orientation) filled++;
    if (form.interestedIn.length >= 1) filled++;
    if (form.intention) filled++;
    if (form.structure) filled++;
    if (form.lifeFeel.length >= 150) filled++;
    if (form.loveMeans.length >= 150) filled++;
    if (form.feelSafe.length >= 150) filled++;
    if (form.partnership.length >= 150) filled++;
    if (form.emotionalEnergy.length >= 150) filled++;
    if (form.greenFlag.length >= 100) filled++;
    if (form.idealSunday.length > 10) filled++;
    if (form.values.length >= 3) filled++;
    if (form.loveLanguages.length >= 1) filled++;
    if (form.photos.some((p) => p === "filled")) filled++;
    return Math.round((filled / total) * 100);
  }, [form]);

  const togglePhoto = (i: number) => {
    setForm((f) => {
      const next = [...f.photos];
      next[i] = next[i] === "filled" ? null : "filled";
      return { ...f, photos: next };
    });
  };

  const toggle = <K extends keyof ProfileForm>(key: K, v: ProfileForm[K] extends (infer U)[] ? U : never) => {
    setForm((f) => {
      const arr = f[key] as unknown as Array<typeof v>;
      const next = arr.includes(v) ? arr.filter((x) => x !== v) : [...arr, v];
      return { ...f, [key]: next as unknown as ProfileForm[K] };
    });
  };

  return (
    <main className="min-h-dvh pb-20">
      <AppHeader />

      <div className="mx-auto max-w-3xl px-5 pt-10">
        <header className="mb-8">
          <p className="text-xs uppercase tracking-[0.22em] text-plum-500">
            Your profile
          </p>
          <h1 className="mt-2 font-display text-3xl tracking-tight text-plum-800 md:text-4xl">
            Let's introduce you, honestly.
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-plum-600 md:text-base">
            Take your time. The more truthful your profile, the more meaningful
            your matches. There's no character limit on care.
          </p>

          <div className="mt-6">
            <div className="flex items-center justify-between text-xs text-plum-500">
              <span>Profile completeness</span>
              <span className="tabular-nums">{completeness}%</span>
            </div>
            <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/70 ring-1 ring-inset ring-plum-200/40">
              <div
                className="h-full rounded-full bg-gradient-to-r from-blush-300 via-lilac-300 to-sky2-300 transition-[width] duration-500"
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
              <div className="sm:col-span-2">
                <p className="mb-1.5 text-[11px] uppercase tracking-[0.18em] text-plum-500">
                  Home region (we never show your city)
                </p>
                <div className="flex flex-wrap gap-2.5">
                  {REGIONS.map((r) => (
                    <PromptChip
                      key={r}
                      selected={form.broadRegion === r}
                      onClick={() =>
                        setForm((f) => ({
                          ...f,
                          broadRegion: f.broadRegion === r ? undefined : r,
                        }))
                      }
                    >
                      {r}
                    </PromptChip>
                  ))}
                </div>
              </div>
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

          {/* Identity */}
          <ProfileSection
            title="Identity"
            description="Who you are. Pick what feels true — you can always update this later."
          >
            <div className="grid gap-5">
              <div>
                <p className="mb-2 text-[11px] uppercase tracking-[0.18em] text-plum-500">
                  Gender identity
                </p>
                <div className="flex flex-wrap gap-2.5">
                  {GENDERS.map((g) => (
                    <PromptChip
                      key={g}
                      selected={form.genderIdentity === g}
                      onClick={() =>
                        setForm((f) => ({
                          ...f,
                          genderIdentity:
                            f.genderIdentity === g ? undefined : g,
                        }))
                      }
                    >
                      {g}
                    </PromptChip>
                  ))}
                </div>
              </div>
              <div>
                <p className="mb-2 text-[11px] uppercase tracking-[0.18em] text-plum-500">
                  Pronouns
                </p>
                <div className="flex flex-wrap gap-2.5">
                  {PRONOUNS.map((p) => (
                    <PromptChip
                      key={p}
                      selected={form.pronouns === p}
                      onClick={() =>
                        setForm((f) => ({
                          ...f,
                          pronouns: f.pronouns === p ? undefined : p,
                        }))
                      }
                    >
                      {p}
                    </PromptChip>
                  ))}
                </div>
              </div>
              <div>
                <p className="mb-2 text-[11px] uppercase tracking-[0.18em] text-plum-500">
                  Orientation
                </p>
                <div className="flex flex-wrap gap-2.5">
                  {ORIENTATION.map((o) => (
                    <PromptChip
                      key={o}
                      selected={form.orientation === o}
                      onClick={() =>
                        setForm((f) => ({
                          ...f,
                          orientation: f.orientation === o ? undefined : o,
                        }))
                      }
                    >
                      {o}
                    </PromptChip>
                  ))}
                </div>
              </div>
              <div>
                <p className="mb-2 text-[11px] uppercase tracking-[0.18em] text-plum-500">
                  Who you'd like to meet
                </p>
                <div className="flex flex-wrap gap-2.5">
                  {INTERESTED_IN.map((i) => (
                    <PromptChip
                      key={i}
                      selected={form.interestedIn.includes(i)}
                      onClick={() => toggle("interestedIn", i)}
                    >
                      {i}
                    </PromptChip>
                  ))}
                </div>
              </div>
            </div>
          </ProfileSection>

          {/* Relationship */}
          <ProfileSection
            title="Relationship"
            description="What you're here for, and how you want it to look."
          >
            <div className="grid gap-5">
              <div>
                <p className="mb-2 text-[11px] uppercase tracking-[0.18em] text-plum-500">
                  Intention
                </p>
                <div className="flex flex-wrap gap-2.5">
                  {INTENTIONS.map((i) => (
                    <PromptChip
                      key={i}
                      selected={form.intention === i}
                      onClick={() =>
                        setForm((f) => ({
                          ...f,
                          intention: f.intention === i ? undefined : i,
                        }))
                      }
                    >
                      {i}
                    </PromptChip>
                  ))}
                </div>
              </div>
              <div>
                <p className="mb-2 text-[11px] uppercase tracking-[0.18em] text-plum-500">
                  Structure
                </p>
                <div className="flex flex-wrap gap-2.5">
                  {STRUCTURES.map((s) => (
                    <PromptChip
                      key={s}
                      selected={form.structure === s}
                      onClick={() =>
                        setForm((f) => ({
                          ...f,
                          structure: f.structure === s ? undefined : s,
                        }))
                      }
                    >
                      {s}
                    </PromptChip>
                  ))}
                </div>
              </div>
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
                      : "border-dashed border-plum-300/60 bg-white/40 hover:border-plum-400 hover:bg-white/70",
                  ].join(" ")}
                >
                  {p === "filled" ? (
                    <div className="absolute inset-0 bg-gradient-to-br from-blush-200 via-lilac-200 to-sky2-200">
                      <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_30%,rgba(255,255,255,0.65),transparent_60%)]" />
                      <div className="absolute inset-0 flex items-end p-3">
                        <span className="rounded-full bg-white/70 px-2 py-0.5 text-[10px] text-plum-700 backdrop-blur">
                          Photo {i + 1}
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div className="flex h-full flex-col items-center justify-center text-plum-500">
                      <svg
                        viewBox="0 0 24 24"
                        className="h-6 w-6 opacity-80"
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
            <p className="mt-3 text-xs text-plum-500">
              Photo uploads are a preview in this prototype — tap a slot to
              simulate.
            </p>
          </ProfileSection>

          {/* Prompts */}
          <ProfileSection
            title="In your words"
            description="Long-form prompts. Aim for 150–250 characters each — sincere is better than clever. This isn't social media posting."
          >
            <div className="grid gap-4">
              <TextAreaField
                label="What I want my life to feel like"
                placeholder="Be specific — the texture of a morning, the sound of a kitchen, the kind of evenings you'd hate to skip."
                value={form.lifeFeel}
                onChange={(v) => setForm((f) => ({ ...f, lifeFeel: v }))}
                max={400}
                rows={3}
                minChars={150}
              />
              <TextAreaField
                label="What love means to me"
                placeholder="The version you'd whisper, not the one you'd post. What does love look like on a Tuesday?"
                value={form.loveMeans}
                onChange={(v) => setForm((f) => ({ ...f, loveMeans: v }))}
                max={400}
                rows={3}
                minChars={150}
              />
              <TextAreaField
                label="What makes me feel emotionally safe"
                placeholder="Steadiness, reassurance, pace, room for hard feelings — name the things that actually help you exhale."
                value={form.feelSafe}
                onChange={(v) => setForm((f) => ({ ...f, feelSafe: v }))}
                max={400}
                rows={3}
                minChars={150}
              />
              <TextAreaField
                label="A green flag I bring into relationships"
                placeholder="Something a past partner or close friend has thanked you for. Stay concrete — what do you do, not just what you believe."
                value={form.greenFlag}
                onChange={(v) => setForm((f) => ({ ...f, greenFlag: v }))}
                max={400}
                rows={3}
                minChars={150}
              />
              <TextAreaField
                label="The partnership I hope to build"
                placeholder="Describe a real shape of life — careers, rhythms, friends, future. Not the romantic-comedy version. The real one."
                value={form.partnership}
                onChange={(v) =>
                  setForm((f) => ({ ...f, partnership: v }))
                }
                max={400}
                rows={3}
                minChars={150}
              />
              <TextAreaField
                label="The kind of emotional energy I value most"
                placeholder="Calm warmth? Playful intensity? Quiet attentiveness? Tell us how you want a relationship to feel in the room."
                value={form.emotionalEnergy}
                onChange={(v) =>
                  setForm((f) => ({ ...f, emotionalEnergy: v }))
                }
                max={400}
                rows={3}
                minChars={150}
              />
              <TextAreaField
                label="How I handle conflict"
                placeholder="The version of you that shows up when things are hard."
                value={form.handleConflict}
                onChange={(v) =>
                  setForm((f) => ({ ...f, handleConflict: v }))
                }
                max={220}
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
                  onClick={() => toggle("values", v)}
                >
                  {v}
                </PromptChip>
              ))}
            </div>
          </ProfileSection>

          {/* Love languages */}
          <ProfileSection
            title="Love languages"
            description="How you give and receive love best."
          >
            <div className="flex flex-wrap gap-2.5">
              {LOVE_LANGUAGES.map((l) => (
                <PromptChip
                  key={l}
                  selected={form.loveLanguages.includes(l)}
                  onClick={() => toggle("loveLanguages", l)}
                >
                  {l}
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
                        ? "border-transparent bg-gradient-to-r from-blush-100 via-lilac-100 to-sky2-100 ring-1 ring-inset ring-plum-300/40"
                        : "border-white/80 bg-white/65 hover:border-plum-300 hover:bg-white",
                    ].join(" ")}
                  >
                    <input
                      type="checkbox"
                      className="sr-only"
                      checked={checked}
                      onChange={() => toggle("dealbreakers", d)}
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
                      {checked ? (
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
                      ) : null}
                    </span>
                    <span className="text-sm text-plum-800">{d}</span>
                  </label>
                );
              })}
            </div>
          </ProfileSection>

          <div className="flex flex-col items-center gap-3 pt-4 sm:flex-row sm:justify-between">
            <p className="text-xs text-plum-500">
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
      <span className="mb-1.5 block text-[11px] uppercase tracking-[0.18em] text-plum-500">
        {label}
      </span>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        inputMode={inputMode}
        maxLength={maxLength}
        className="w-full rounded-2xl border border-white/85 bg-white/70 px-4 py-3 text-[15px] text-plum-800 transition focus:border-plum-300 focus:bg-white"
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
  minChars?: number;
}

function TextAreaField({
  label,
  value,
  onChange,
  placeholder,
  className = "",
  rows = 3,
  max,
  minChars,
}: TextAreaFieldProps) {
  const ready = minChars ? value.trim().length >= minChars : false;
  return (
    <label className={`block ${className}`}>
      <span className="mb-1.5 flex items-center justify-between text-[11px] uppercase tracking-[0.18em] text-plum-500">
        <span className="flex items-center gap-2">
          {label}
          {ready ? (
            <span className="rounded-full bg-gradient-to-r from-blush-300/80 to-sky2-300/80 px-2 py-0.5 text-[9px] text-plum-900">
              Ready
            </span>
          ) : null}
        </span>
        {minChars ? (
          <span className="tabular-nums text-plum-400">
            {value.length} / min {minChars}
          </span>
        ) : max ? (
          <span className="tabular-nums text-plum-400">
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
        className="w-full resize-none rounded-2xl border border-white bg-white/75 px-4 py-3 text-[15px] leading-relaxed text-plum-800 transition focus:border-plum-300 focus:bg-white"
      />
    </label>
  );
}
