"use client";

import type { ButtonHTMLAttributes, ReactNode } from "react";

interface PromptChipProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  selected?: boolean;
  size?: "sm" | "md";
}

export function PromptChip({
  children,
  selected = false,
  size = "md",
  className = "",
  ...rest
}: PromptChipProps) {
  const sizing = size === "sm" ? "px-3 py-1.5 text-xs" : "px-4 py-2 text-sm";
  return (
    <button
      type="button"
      {...rest}
      className={[
        "inline-flex items-center gap-2 rounded-full border transition-all",
        sizing,
        selected
          ? "border-transparent bg-gradient-to-r from-glow-pink/90 via-glow-mauve/90 to-glow-violet/90 text-ink-950 shadow-glow-sm"
          : "border-white/12 bg-white/5 text-ink-100 hover:border-white/25 hover:bg-white/10",
        className,
      ].join(" ")}
    >
      {children}
    </button>
  );
}

interface PromptCardProps {
  text: string;
  onUse?: () => void;
}

export function PromptCard({ text, onUse }: PromptCardProps) {
  return (
    <div className="glass flex items-start gap-3 rounded-2xl p-4">
      <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gradient-to-br from-glow-pink to-glow-sky" />
      <div className="flex-1">
        <p className="text-sm leading-relaxed text-ink-100">{text}</p>
        {onUse ? (
          <button
            type="button"
            onClick={onUse}
            className="mt-2 text-xs font-medium text-glow-pink/90 transition hover:text-glow-pink"
          >
            Use this prompt →
          </button>
        ) : null}
      </div>
    </div>
  );
}
