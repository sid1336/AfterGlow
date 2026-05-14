import type { ReactNode } from "react";

interface MockPhonePreviewProps {
  children: ReactNode;
  caption?: string;
  className?: string;
}

export function MockPhonePreview({
  children,
  caption,
  className = "",
}: MockPhonePreviewProps) {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute -inset-6 -z-10 rounded-[48px] bg-gradient-to-br from-glow-pink/30 via-glow-mauve/20 to-glow-sky/30 blur-3xl" />
      <div
        className="relative mx-auto w-[300px] rounded-[42px] border border-white/15 bg-ink-950/60 p-3 shadow-glow"
        aria-hidden
      >
        <div className="absolute left-1/2 top-3 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-black/70" />
        <div className="overflow-hidden rounded-[34px] border border-white/10 bg-gradient-to-br from-ink-800 via-ink-900 to-ink-950">
          <div className="relative h-[560px] w-full">
            <div className="absolute inset-0 bg-evening-sky opacity-70" />
            <div className="relative h-full w-full overflow-hidden p-5">
              {children}
            </div>
          </div>
        </div>
      </div>
      {caption ? (
        <p className="mt-4 text-center text-xs uppercase tracking-[0.22em] text-ink-300">
          {caption}
        </p>
      ) : null}
    </div>
  );
}
