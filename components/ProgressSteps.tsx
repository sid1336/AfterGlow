interface ProgressStepsProps {
  current: number;
  total: number;
  label?: string;
}

export function ProgressSteps({ current, total, label }: ProgressStepsProps) {
  const pct = Math.max(0, Math.min(100, (current / total) * 100));
  return (
    <div className="w-full">
      <div className="mb-2.5 flex items-center justify-between text-xs uppercase tracking-[0.18em] text-plum-500">
        <span>
          Step {current} of {total}
        </span>
        {label ? <span className="text-plum-500/80">{label}</span> : null}
      </div>
      <div className="relative h-1.5 w-full overflow-hidden rounded-full bg-white/80 ring-1 ring-inset ring-mauve-200/40">
        <div
          className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-sky2-300 via-lilac-300 to-mauve-300 transition-[width] duration-500 ease-out"
          style={{ width: `${pct}%` }}
        />
      </div>
      <div className="mt-2 flex w-full gap-1.5">
        {Array.from({ length: total }).map((_, i) => (
          <div
            key={i}
            className={`h-0.5 flex-1 rounded-full transition-colors ${
              i < current ? "bg-mauve-400/60" : "bg-mauve-200/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
