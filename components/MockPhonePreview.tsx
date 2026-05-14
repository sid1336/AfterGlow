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
      <div className="absolute -inset-6 -z-10 rounded-[48px] bg-gradient-to-br from-blush-200/60 via-lilac-200/45 to-sky2-200/60 blur-3xl" />
      <div
        className="relative mx-auto w-[300px] rounded-[42px] border border-white/80 bg-white/60 p-3 shadow-glow"
        aria-hidden
      >
        <div className="absolute left-1/2 top-3 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-plum-700/60" />
        <div className="overflow-hidden rounded-[34px] border border-white/85 bg-gradient-to-br from-cream-50 via-blush-50 to-lilac-50">
          <div className="relative h-[560px] w-full">
            <div className="absolute inset-0 bg-sunrise-sky opacity-70" />
            <div className="relative h-full w-full overflow-hidden p-5">
              {children}
            </div>
          </div>
        </div>
      </div>
      {caption ? (
        <p className="mt-4 text-center text-xs uppercase tracking-[0.22em] text-plum-500">
          {caption}
        </p>
      ) : null}
    </div>
  );
}
