import Link from "next/link";
import type { Profile } from "@/types";
import { GlowCard } from "./GlowCard";
import { ProfileAvatar } from "./ProfileAvatar";

interface MatchCardProps {
  profile: Profile;
  onPass?: () => void;
}

export function MatchCard({ profile }: MatchCardProps) {
  const promptText = profile.prompts[profile.highlightPromptKey];
  const promptLabel: Record<keyof Profile["prompts"], string> = {
    lifeFeel: "What I want my life to feel like",
    loveMeans: "What love means to me",
    handleConflict: "How I handle conflict",
    greenFlag: "A green flag I bring",
    idealSunday: "My ideal Sunday",
  };

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
              <h3 className="font-display text-2xl leading-tight text-ink-50">
                {profile.name}
              </h3>
              <span className="text-ink-200">·</span>
              <span className="text-ink-200">{profile.age}</span>
            </div>
            <p className="text-sm text-ink-300">{profile.city}</p>
          </div>
        </div>

        <div className="flex-1">
          <div className="flex items-start justify-between gap-4">
            <div className="hidden md:block">
              <div className="flex items-baseline gap-2">
                <h3 className="font-display text-2xl leading-tight text-ink-50">
                  {profile.name}
                </h3>
                <span className="text-ink-200">·</span>
                <span className="text-ink-200">{profile.age}</span>
              </div>
              <p className="text-sm text-ink-300">{profile.city}</p>
            </div>

            <div className="flex items-center gap-2 rounded-full bg-white/8 px-3 py-1.5 text-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-br from-glow-pink to-glow-sky" />
              <span className="font-medium tabular-nums text-ink-50">
                {profile.compatibility}% compatible
              </span>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-white/12 bg-white/5 px-3 py-1 text-xs text-ink-100">
              {profile.intention}
            </span>
            {profile.sharedValues.map((v) => (
              <span
                key={v}
                className="rounded-full border border-white/10 bg-white/3 px-3 py-1 text-xs text-ink-200"
              >
                {v}
              </span>
            ))}
          </div>

          <div className="mt-5 rounded-2xl border border-white/8 bg-white/3 p-4">
            <p className="text-[10px] uppercase tracking-[0.18em] text-ink-300">
              {promptLabel[profile.highlightPromptKey]}
            </p>
            <p className="mt-1.5 text-[15px] leading-relaxed text-ink-100">
              “{promptText}”
            </p>
          </div>

          <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <Link
              href={`/matches/${profile.id}`}
              className="text-sm font-medium text-ink-100 underline-offset-4 transition hover:text-ink-50 hover:underline"
            >
              View profile
            </Link>
            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                className="rounded-full border border-white/12 bg-white/5 px-4 py-2 text-sm text-ink-200 transition hover:bg-white/10 hover:text-ink-50"
              >
                Not for me
              </button>
              <Link
                href={`/chat/${profile.id}`}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-glow-pink via-glow-mauve to-glow-violet px-4 py-2 text-sm font-medium text-ink-950 shadow-glow-sm transition hover:-translate-y-0.5 hover:shadow-glow"
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
