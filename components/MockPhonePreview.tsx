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
      <div className="absolute -inset-8 -z-10 rounded-[52px] bg-gradient-to-br from-sky2-200/55 via-lilac-200/45 to-mauve-200/45 blur-3xl" />
      <div
        className="relative mx-auto w-[300px] rounded-[44px] border border-white bg-white/80 p-3 shadow-glow"
        aria-hidden
      >
        <div className="absolute left-1/2 top-3 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-burgundy-300/30" />
        <div className="overflow-hidden rounded-[34px] border border-white bg-gradient-to-br from-cream-50 via-sky2-50 to-lilac-50">
          <div className="relative h-[560px] w-full">
            <div className="absolute inset-0 bg-sunrise-sky opacity-60" />
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
