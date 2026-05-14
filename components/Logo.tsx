interface LogoProps {
  className?: string;
}

export function Logo({ className = "h-8 w-8" }: LogoProps) {
  return (
    <span
      className={`relative inline-flex shrink-0 items-center justify-center ${className}`}
      aria-hidden
    >
      <svg viewBox="0 0 40 40" className="h-full w-full">
        <defs>
          <linearGradient id="afterglow-logo" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#f5b4d4" />
            <stop offset="55%" stopColor="#c79bd8" />
            <stop offset="100%" stopColor="#7cb1e0" />
          </linearGradient>
          <radialGradient id="afterglow-core" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fff" stopOpacity="0.95" />
            <stop offset="60%" stopColor="#f5b4d4" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#7cb1e0" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="20" cy="22" r="14" fill="url(#afterglow-logo)" opacity="0.95" />
        <circle cx="20" cy="22" r="20" fill="url(#afterglow-core)" />
        <path
          d="M6 26 C 12 18, 28 18, 34 26"
          stroke="rgba(255,255,255,0.85)"
          strokeWidth="1.4"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    </span>
  );
}
