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
          ? "border-transparent bg-gradient-to-r from-blush-300 via-lilac-300 to-sky2-300 text-plum-900 shadow-glow-sm"
          : "border-plum-200/50 bg-white/70 text-plum-700 hover:border-plum-300/80 hover:bg-white",
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
      <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gradient-to-br from-blush-300 to-sky2-300" />
      <div className="flex-1">
        <p className="text-sm leading-relaxed text-plum-800">{text}</p>
        {onUse ? (
          <button
            type="button"
            onClick={onUse}
            className="mt-2 text-xs font-medium text-plum-700 transition hover:text-plum-900"
          >
            Use this prompt →
          </button>
        ) : null}
      </div>
    </div>
  );
}
