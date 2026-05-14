interface ProfileAvatarProps {
  name: string;
  accent?: "rose" | "violet" | "indigo" | "mauve" | "sky";
  size?: number;
  className?: string;
}

const accentGradients: Record<NonNullable<ProfileAvatarProps["accent"]>, string[]> = {
  rose: ["#f5b4d4", "#c79bd8"],
  violet: ["#c79bd8", "#9b8bd9"],
  indigo: ["#9b8bd9", "#6f7bd0"],
  mauve: ["#e89bbf", "#9b8bd9"],
  sky: ["#9b8bd9", "#7cb1e0"],
};

export function ProfileAvatar({
  name,
  accent = "rose",
  size = 80,
  className = "",
}: ProfileAvatarProps) {
  const initials = name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
  const [from, to] = accentGradients[accent];

  return (
    <div
      aria-hidden
      className={`relative shrink-0 overflow-hidden rounded-2xl shadow-glow-sm ${className}`}
      style={{ width: size, height: size }}
    >
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full">
        <defs>
          <linearGradient id={`avatar-${name}-${accent}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={from} />
            <stop offset="100%" stopColor={to} />
          </linearGradient>
          <radialGradient id={`avatar-glow-${name}-${accent}`} cx="30%" cy="20%" r="60%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.6)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </radialGradient>
        </defs>
        <rect width="100" height="100" fill={`url(#avatar-${name}-${accent})`} />
        <rect
          width="100"
          height="100"
          fill={`url(#avatar-glow-${name}-${accent})`}
        />
        {/* Silhouette: shoulders + head */}
        <circle cx="50" cy="40" r="14" fill="rgba(255,255,255,0.22)" />
        <path
          d="M20 95 C 22 70, 42 62, 50 62 C 58 62, 78 70, 80 95 Z"
          fill="rgba(255,255,255,0.18)"
        />
      </svg>
      <div className="absolute inset-0 flex items-end justify-end p-2">
        <span className="rounded-md bg-black/25 px-1.5 py-0.5 text-[10px] font-medium tracking-wide text-white/90 backdrop-blur">
          {initials}
        </span>
      </div>
    </div>
  );
}
