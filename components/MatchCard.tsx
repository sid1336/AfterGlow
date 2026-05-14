import Link from "next/link";
import type { Profile } from "@/types";
import { GlowCard } from "./GlowCard";
import { ProfileAvatar } from "./ProfileAvatar";

interface MatchCardProps {
  profile: Profile;
  category?: "compatibility" | "astro";
}

export function MatchCard({ profile, category = "compatibility" }: MatchCardProps) {
  const promptText = profile.prompts[profile.highlightPromptKey];
  const promptLabel: Record<keyof Profile["prompts"], string> = {
    lifeFeel: "What I want my life to feel like",
    loveMeans: "What love means to me",
    handleConflict: "How I handle conflict",
    greenFlag: "A green flag I bring",
    idealSunday: "My ideal Sunday",
    feelSafe: "What makes me feel safe",
  };

  const score =
    category === "astro" ? profile.astroCompatibility : profile.compatibility;
  const scoreLabel = category === "astro" ? "astro aligned" : "compatible";

  return (
    <GlowCard interactive className="overflow-hidden">
      <div className="flex flex-col gap-5 p-6 md:flex-row md:items-stretch md:gap-6">
        <div className="flex items-center gap-4 md:flex-col md:items-start md:gap-3">
          <ProfileAvatar
            name={profile.name}
            accent={profile.accent}
            size={84}
          />
          <div className="md:hidden">
            <div className="flex items-baseline gap-2">
              <h3 className="font-display text-2xl leading-tight text-plum-800">
                {profile.name}
              </h3>
              <span className="text-plum-400">·</span>
              <span className="text-plum-500">{profile.age}</span>
            </div>
            <p className="text-sm text-plum-500">
              {profile.pronouns} · {profile.orientation}
            </p>
          </div>
        </div>

        <div className="flex-1">
          <div className="flex items-start justify-between gap-4">
            <div className="hidden md:block">
              <div className="flex items-baseline gap-2">
                <h3 className="font-display text-2xl leading-tight text-plum-800">
                  {profile.name}
                </h3>
                <span className="text-plum-400">·</span>
                <span className="text-plum-500">{profile.age}</span>
              </div>
              <p className="text-sm text-plum-500">
                {profile.pronouns} · {profile.orientation}
              </p>
            </div>

            <div className="flex items-center gap-2 rounded-full bg-white/80 px-3 py-1.5 text-xs ring-1 ring-inset ring-plum-200/40">
              <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-br from-blush-300 to-sky2-300" />
              <span className="font-medium tabular-nums text-plum-800">
                {score}% {scoreLabel}
              </span>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-plum-200/50 bg-white/70 px-3 py-1 text-xs text-plum-700">
              {profile.relationshipIntention}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-sky2-300/60 bg-sky2-50/80 px-3 py-1 text-xs text-plum-700">
              <svg viewBox="0 0 24 24" className="h-3 w-3" aria-hidden>
                <path
                  d="M12 21s-7-6.1-7-11a7 7 0 0114 0c0 4.9-7 11-7 11z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />
                <circle cx="12" cy="10" r="2.2" fill="currentColor" />
              </svg>
              Regionally aligned
            </span>
            {profile.sharedValues.map((v) => (
              <span
                key={v}
                className="rounded-full border border-plum-200/40 bg-white/50 px-3 py-1 text-xs text-plum-600"
              >
                {v}
              </span>
            ))}
          </div>

          <div className="mt-5 rounded-2xl border border-white/80 bg-white/65 p-4">
            <p className="text-[10px] uppercase tracking-[0.18em] text-plum-500">
              {promptLabel[profile.highlightPromptKey]}
            </p>
            <p className="mt-1.5 text-[15px] leading-relaxed text-plum-800">
              “{promptText}”
            </p>
          </div>

          <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <Link
              href={`/matches/${profile.id}`}
              className="text-sm font-medium text-plum-700 underline-offset-4 transition hover:text-plum-900 hover:underline"
            >
              View profile
            </Link>
            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                className="rounded-full border border-plum-200/60 bg-white/60 px-4 py-2 text-sm text-plum-600 transition hover:bg-white hover:text-plum-800"
              >
                Not for me
              </button>
              <Link
                href={`/chat/${profile.id}`}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blush-300 via-lilac-300 to-sky2-300 px-4 py-2 text-sm font-medium text-plum-900 shadow-glow-sm transition hover:-translate-y-0.5 hover:shadow-glow"
              >
                Start with a prompt
              </Link>
            </div>
          </div>
        </div>
      </div>
    </GlowCard>
  );
}
