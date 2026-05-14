interface CompatibilityBarProps {
  label: string;
  value: number; // 0-100
  hint?: string;
}

export function CompatibilityBar({ label, value, hint }: CompatibilityBarProps) {
  const v = Math.max(0, Math.min(100, value));
  return (
    <div className="w-full">
      <div className="mb-1.5 flex items-baseline justify-between gap-3">
        <span className="text-sm font-medium text-plum-800">{label}</span>
        <span className="text-xs tabular-nums text-plum-500">{v}%</span>
      </div>
      <div className="relative h-2 w-full overflow-hidden rounded-full bg-white/70 ring-1 ring-inset ring-plum-200/40">
        <div
          className="h-full rounded-full bg-gradient-to-r from-blush-300 via-lilac-300 to-sky2-300 transition-[width] duration-700 ease-out"
          style={{ width: `${v}%` }}
        />
      </div>
      {hint ? <p className="mt-1.5 text-xs text-plum-500">{hint}</p> : null}
    </div>
  );
}

interface CompatibilityRingProps {
  value: number;
  size?: number;
  label?: string;
}

export function CompatibilityRing({
  value,
  size = 96,
  label,
}: CompatibilityRingProps) {
  const v = Math.max(0, Math.min(100, value));
  const stroke = 8;
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const offset = c - (v / 100) * c;

  return (
    <div
      className="relative inline-flex items-center justify-center"
      style={{ width: size, height: size }}
      aria-label={`Compatibility ${v} percent`}
    >
      <svg
        width={size}
        height={size}
        className="rotate-[-90deg]"
        aria-hidden
      >
        <defs>
          <linearGradient id={`ring-${size}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#f5a6bd" />
            <stop offset="55%" stopColor="#bda1e2" />
            <stop offset="100%" stopColor="#9ec3ea" />
          </linearGradient>
        </defs>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          stroke="rgba(189,161,226,0.22)"
          strokeWidth={stroke}
          fill="none"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          stroke={`url(#ring-${size})`}
          strokeWidth={stroke}
          strokeLinecap="round"
          fill="none"
          strokeDasharray={c}
          strokeDashoffset={offset}
          className="transition-[stroke-dashoffset] duration-700 ease-out"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="font-display text-2xl leading-none text-plum-800">
          {v}
          <span className="text-base text-plum-500">%</span>
        </span>
        {label ? (
          <span className="mt-1 text-[10px] uppercase tracking-[0.18em] text-plum-500">
            {label}
          </span>
        ) : null}
      </div>
    </div>
  );
}
