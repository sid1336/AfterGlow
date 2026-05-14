interface ProfileAvatarProps {
  name: string;
  accent?: "blush" | "peach" | "lilac" | "sky" | "mauve" | "plum";
  size?: number;
  className?: string;
}

const accentGradients: Record<NonNullable<ProfileAvatarProps["accent"]>, string[]> = {
  blush: ["#f5a6bd", "#fac5d4"],
  peach: ["#fcc9a8", "#f9b285"],
  lilac: ["#b89ae0", "#d1bdec"],
  sky: ["#9fc1e7", "#bfd6f0"],
  mauve: ["#cda5c3", "#b07ea7"],
  plum: ["#b894bd", "#8e6995"],
};

export function ProfileAvatar({
  name,
  accent = "lilac",
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
  const id = `${accent}-${initials}-${size}`;

  return (
    <div
      aria-hidden
      className={`relative shrink-0 overflow-hidden rounded-2xl shadow-glow-sm ring-1 ring-inset ring-white/80 ${className}`}
      style={{ width: size, height: size }}
    >
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full">
        <defs>
          <linearGradient id={`avatar-${id}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={from} />
            <stop offset="100%" stopColor={to} />
          </linearGradient>
          <radialGradient id={`avatar-glow-${id}`} cx="30%" cy="22%" r="60%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.85)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </radialGradient>
        </defs>
        <rect width="100" height="100" fill={`url(#avatar-${id})`} />
        <rect width="100" height="100" fill={`url(#avatar-glow-${id})`} />
        <circle cx="50" cy="40" r="14" fill="rgba(255,255,255,0.45)" />
        <path
          d="M20 95 C 22 70, 42 62, 50 62 C 58 62, 78 70, 80 95 Z"
          fill="rgba(255,255,255,0.4)"
        />
      </svg>
      <div className="absolute inset-0 flex items-end justify-end p-2">
        <span className="rounded-md bg-white/75 px-1.5 py-0.5 text-[10px] font-medium tracking-wide text-burgundy-700 backdrop-blur">
          {initials}
        </span>
      </div>
    </div>
  );
}
