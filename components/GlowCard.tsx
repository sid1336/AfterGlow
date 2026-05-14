import type { HTMLAttributes, ReactNode } from "react";

interface GlowCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  intensity?: "subtle" | "soft" | "vivid";
  as?: "div" | "section" | "article";
  interactive?: boolean;
}

const intensityMap = {
  subtle: "",
  soft: "before:opacity-60",
  vivid: "before:opacity-100",
} as const;

export function GlowCard({
  children,
  intensity = "soft",
  as: Tag = "div",
  interactive = false,
  className = "",
  ...rest
}: GlowCardProps) {
  return (
    <Tag
      {...rest}
      className={[
        "group relative rounded-3xl",
        "before:pointer-events-none before:absolute before:inset-0 before:rounded-3xl before:bg-[radial-gradient(120%_60%_at_50%_-10%,rgba(245,180,212,0.18),transparent_60%),radial-gradient(120%_60%_at_50%_110%,rgba(124,177,224,0.14),transparent_60%)] before:content-['']",
        intensityMap[intensity],
        "glass shadow-glow-sm",
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
