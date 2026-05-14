import type { HTMLAttributes, ReactNode } from "react";

interface GlowCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  intensity?: "subtle" | "soft" | "vivid";
  as?: "div" | "section" | "article";
  interactive?: boolean;
  tone?: "glass" | "tint" | "quiet";
}

const intensityMap = {
  subtle: "before:opacity-20",
  soft: "before:opacity-50",
  vivid: "before:opacity-90",
} as const;

const toneMap = {
  glass: "glass",
  tint: "glass-tint",
  quiet: "glass-quiet",
} as const;

export function GlowCard({
  children,
  intensity = "soft",
  as: Tag = "div",
  interactive = false,
  tone = "glass",
  className = "",
  ...rest
}: GlowCardProps) {
  return (
    <Tag
      {...rest}
      className={[
        "group relative rounded-3xl",
        // soft top + bottom sunrise glow halo behind the card body
        "before:pointer-events-none before:absolute before:inset-0 before:rounded-3xl before:bg-[radial-gradient(120%_60%_at_50%_-10%,rgba(245,166,189,0.16),transparent_60%),radial-gradient(120%_60%_at_50%_110%,rgba(159,195,234,0.14),transparent_60%)] before:content-['']",
        intensityMap[intensity],
        toneMap[tone],
        interactive
          ? "transition duration-300 ease-out hover:-translate-y-0.5 hover:shadow-glow"
          : "",
        className,
      ].join(" ")}
    >
      <div className="relative">{children}</div>
    </Tag>
  );
}
