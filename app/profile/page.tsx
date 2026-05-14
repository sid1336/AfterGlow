"use client";

import { useMemo, useState } from "react";
import { AppHeader } from "@/components/AppHeader";
import { Footer } from "@/components/Footer";
import { LinkButton } from "@/components/Button";
import { PromptChip } from "@/components/PromptChip";
import { ProfileSection } from "@/components/ProfileSection";
import { CONTINENTS, COUNTRIES_BY_CONTINENT } from "@/lib/location";
import type {
  Continent,
  CoreValue,
  Dealbreaker,
  GenderIdentity,
  InterestedIn,
  LoveLanguage,
  Orientation,
  PartnershipShape,
  Pronouns,
  RelationshipIntention,
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

const MIN_LONG_FORM = 250;

interface ProfileForm {
  name: string;
  age: string;
  bio: string;
  genderIdentity?: GenderIdentity;
  pronouns?: Pronouns;
  orientation?: Orientation;
  interestedIn: InterestedIn[];
  intention?: RelationshipIntention;
  partnershipShape?: PartnershipShape;
  continent?: Continent;
  country?: string;
  region: string;
  city: string;
  lifeFeel: string;
  loveMeans: string;
  feelSafe: string;
  greenFlag: string;
  partnership: string;
  conflictRepair: string;
  emotionalEnergy: string;
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
  region: "",
  city: "",
  lifeFeel: "",
  loveMeans: "",
  feelSafe: "",
  greenFlag: "",
  partnership: "",
  conflictRepair: "",
  emotionalEnergy: "",
  values: [],
  loveLanguages: [],
  dealbreakers: [],
  photos: [null, null, null, null, null, null],
};

export default function ProfileCreationPage() {
  const [form, setForm] = useState<ProfileForm>(initial);

  const completeness = useMemo(() => {
    let filled = 0;
    const total = 22;
    if (form.name) filled++;
    if (form.age) filled++;
    if (form.continent) filled++;
    if (form.country) filled++;
    if (form.region.trim().length >= 2) filled++;
    if (form.city.trim().length >= 2) filled++;
    if (form.bio.length > 20) filled++;
    if (form.genderIdentity) filled++;
    if (form.pronouns) filled++;
    if (form.orientation) filled++;
    if (form.interestedIn.length >= 1) filled++;
    if (form.intention) filled++;
    if (form.partnershipShape) filled++;
    if (form.lifeFeel.length >= MIN_LONG_FORM) filled++;
    if (form.loveMeans.length >= MIN_LONG_FORM) filled++;
    if (form.feelSafe.length >= MIN_LONG_FORM) filled++;
    if (form.greenFlag.length >= 100) filled++;
    if (form.partnership.length >= 100) filled++;
    if (form.conflictRepair.length >= 100) filled++;
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

  const toggle = <K extends keyof ProfileForm>(
    key: K,
    v: ProfileForm[K] extends (infer U)[] ? U : never
  ) => {
    setForm((f) => {
      const arr = f[key] as unknown as Array<typeof v>;
      const next = arr.includes(v) ? arr.filter((x) => x !== v) : [...arr, v];
      return { ...f, [key]: next as unknown as ProfileForm[K] };
    });
  };

  const countriesForContinent = form.continent
    ? COUNTRIES_BY_CONTINENT[form.continent]
    : [];

  return (
    <main className="min-h-dvh pb-20">
      <AppHeader />

      <div className="mx-auto max-w-3xl px-4 pt-10 sm:px-5">
        <header className="mb-8">
          <p className="text-xs uppercase tracking-[0.22em] text-plum-500">
            Your profile
          </p>
          <h1 className="mt-2 font-display text-3xl tracking-tight text-burgundy-700 md:text-4xl">
            Let's introduce you, honestly.
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-plum-600 md:text-base">
            Take your time. The more truthful your profile, the more
            meaningful your matches. There is no character limit on care.
          </p>

          <div className="mt-6">
            <div className="flex items-center justify-between text-xs text-plum-500">
              <span>Profile completeness</span>
              <span className="tabular-nums">{completeness}%</span>
            </div>
            <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/80 ring-1 ring-inset ring-mauve-200/40">
              <div
                className="h-full rounded-full bg-gradient-to-r from-sky2-300 via-lilac-300 to-mauve-300 transition-[width] duration-500"
                style={{ width: `${completeness}%` }}
              />
            </div>
          </div>
        </header>

        <div className="space-y-6">
          <ProfileSection
            title="The basics"
            description="A few simple details to ground your profile."
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <TextField
                label="Name"
                placeholder="What you would like to be called"
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

          <ProfileSection
            title="Location"
            description="Your city helps us place you in a private compatibility region. We never show exact distance, maps, or live location."
          >
            <div className="grid gap-5">
              <div>
                <p className="mb-2 text-[11px] uppercase tracking-[0.18em] text-plum-500">
                  Continent
                </p>
                <div className="flex flex-wrap gap-2.5">
                  {CONTINENTS.map((c) => (
                    <PromptChip
                      key={c}
                      selected={form.continent === c}
                      onClick={() =>
                        setForm((f) => ({
                          ...f,
                          continent: f.continent === c ? undefined : c,
                          country:
                            f.continent === c ? f.country : undefined,
                        }))
                      }
                    >
                      {c}
                    </PromptChip>
                  ))}
                </div>
              </div>

              {form.continent ? (
                <div>
                  <p className="mb-2 text-[11px] uppercase tracking-[0.18em] text-plum-500">
                    Country
                  </p>
                  <div className="flex flex-wrap gap-2.5">
                    {countriesForContinent.map((c) => (
                      <PromptChip
                        key={c}
                        selected={form.country === c}
                        onClick={() =>
                          setForm((f) => ({
                            ...f,
                            country: f.country === c ? undefined : c,
                          }))
                        }
                      >
                        {c}
                      </PromptChip>
                    ))}
                  </div>
                </div>
              ) : null}

              <div className="grid gap-4 sm:grid-cols-2">
                <TextField
                  label="State, province, or region"
                  placeholder="e.g. Ontario, England, New South Wales"
                  value={form.region}
                  onChange={(v) => setForm((f) => ({ ...f, region: v }))}
                />
                <TextField
                  label="City or metro area (private)"
                  placeholder="e.g. Toronto, London, Tokyo"
                  value={form.city}
                  onChange={(v) => setForm((f) => ({ ...f, city: v }))}
                />
              </div>
            </div>
          </ProfileSection>

          <ProfileSection
            title="Identity"
            description="Who you are. Pick what feels true. You can always update this later."
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
                          orientation:
                            f.orientation === o ? undefined : o,
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
                  Who you would like to meet
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

          <ProfileSection
            title="Relationship"
            description="What you are here for, and what you are hoping to build."
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
                  What you are hoping to build
                </p>
                <div className="flex flex-wrap gap-2.5">
                  {PARTNERSHIP_SHAPES.map((s) => (
                    <PromptChip
                      key={s}
                      selected={form.partnershipShape === s}
                      onClick={() =>
                        setForm((f) => ({
                          ...f,
                          partnershipShape:
                            f.partnershipShape === s ? undefined : s,
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

          <ProfileSection
            title="Photos"
            description="Six slots. Pick photos where you look like yourself, not someone trying to be liked."
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
                      : "border-dashed border-mauve-300/60 bg-white/40 hover:border-mauve-400 hover:bg-white/70",
                  ].join(" ")}
                >
                  {p === "filled" ? (
                    <div className="absolute inset-0 bg-gradient-to-br from-sky2-200 via-lilac-200 to-mauve-200">
                      <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_30%,rgba(255,255,255,0.65),transparent_60%)]" />
                      <div className="absolute inset-0 flex items-end p-3">
                        <span className="rounded-full bg-white/75 px-2 py-0.5 text-[10px] text-burgundy-700 backdrop-blur">
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
              Photo uploads are a preview in this prototype. Tap a slot to
              simulate.
            </p>
          </ProfileSection>

          <ProfileSection
            title="In your words"
            description={`Long-form prompts. Aim for ${MIN_LONG_FORM} characters or more on the first three. Long-form answers help Afterglow understand emotional compatibility beyond photos.`}
          >
            <div className="grid gap-4">
              <TextAreaField
                label="What I want my life to feel like"
                placeholder="Be specific. The texture of a morning, the sound of a kitchen, the kind of evenings you would hate to skip."
                value={form.lifeFeel}
                onChange={(v) => setForm((f) => ({ ...f, lifeFeel: v }))}
                max={600}
                rows={4}
                minChars={MIN_LONG_FORM}
              />
              <TextAreaField
                label="What love means to me"
                placeholder="The version you would whisper, not the one you would post."
                value={form.loveMeans}
                onChange={(v) => setForm((f) => ({ ...f, loveMeans: v }))}
                max={600}
                rows={4}
                minChars={MIN_LONG_FORM}
              />
              <TextAreaField
                label="What makes me feel emotionally safe with someone"
                placeholder="Steadiness, reassurance, pace, room for hard feelings. Name the things that actually help you exhale."
                value={form.feelSafe}
                onChange={(v) => setForm((f) => ({ ...f, feelSafe: v }))}
                max={600}
                rows={4}
                minChars={MIN_LONG_FORM}
              />
              <TextAreaField
                label="A green flag I bring into relationships"
                placeholder="Something a past partner or close friend has thanked you for."
                value={form.greenFlag}
                onChange={(v) => setForm((f) => ({ ...f, greenFlag: v }))}
                max={500}
                rows={3}
              />
              <TextAreaField
                label="The partnership I hope to build"
                placeholder="Describe a real shape of life with another person."
                value={form.partnership}
                onChange={(v) =>
                  setForm((f) => ({ ...f, partnership: v }))
                }
                max={500}
                rows={3}
              />
              <TextAreaField
                label="How I repair after conflict"
                placeholder="The version of you that shows up after a hard conversation."
                value={form.conflictRepair}
                onChange={(v) =>
                  setForm((f) => ({ ...f, conflictRepair: v }))
                }
                max={500}
                rows={3}
              />
              <TextAreaField
                label="The kind of emotional energy I value most"
                placeholder="Calm warmth? Quiet attentiveness? Tell us how you want a relationship to feel."
                value={form.emotionalEnergy}
                onChange={(v) =>
                  setForm((f) => ({ ...f, emotionalEnergy: v }))
                }
                max={400}
                rows={3}
              />
            </div>
          </ProfileSection>

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

          <ProfileSection
            title="Dealbreakers"
            description="What you would rather not be sent. Selecting these is a kindness to yourself."
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
                        ? "border-transparent bg-gradient-to-r from-sky2-100 via-lilac-100 to-mauve-100 ring-1 ring-inset ring-mauve-300/40"
                        : "border-white bg-white/65 hover:border-mauve-300/50 hover:bg-white",
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
                          ? "border-transparent bg-gradient-to-br from-sky2-300 to-mauve-300"
                          : "border-mauve-300/40 bg-white/80",
                      ].join(" ")}
                    >
                      {checked ? (
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
        className="w-full rounded-2xl border border-white bg-white/80 px-4 py-3 text-[15px] text-plum-800 transition focus:border-mauve-300 focus:bg-white"
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
            <span className="rounded-full bg-gradient-to-r from-sky2-300/80 to-mauve-300/80 px-2 py-0.5 text-[9px] text-burgundy-800">
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
        className="w-full resize-none rounded-2xl border border-white bg-white/80 px-4 py-3 text-[15px] leading-relaxed text-plum-800 transition focus:border-mauve-300 focus:bg-white"
      />
    </label>
  );
}
