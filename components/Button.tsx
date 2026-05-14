import Link from "next/link";
import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "soft" | "outline";
type Size = "sm" | "md" | "lg";

interface CommonProps {
  variant?: Variant;
  size?: Size;
  fullWidth?: boolean;
  leadingIcon?: ReactNode;
  trailingIcon?: ReactNode;
  children: ReactNode;
  className?: string;
}

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 ease-out focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50";

const variants: Record<Variant, string> = {
  // Baby blue, lilac and mauve lead; blush appears only as a quiet tail.
  primary:
    "bg-gradient-to-r from-sky2-300 via-lilac-300 to-mauve-300 text-burgundy-800 shadow-glow hover:shadow-glow-blush hover:-translate-y-0.5",
  secondary:
    "glass-strong text-burgundy-800 hover:bg-white hover:-translate-y-0.5",
  ghost: "text-plum-600 hover:bg-white/70 hover:text-burgundy-700",
  soft: "bg-white/85 text-burgundy-800 border border-white hover:bg-white",
  outline:
    "border border-mauve-300/50 bg-white/55 text-burgundy-700 hover:bg-white/85 hover:text-burgundy-800",
};

const sizes: Record<Size, string> = {
  // Thumb-friendly tap targets, all >= 40px tall.
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3.5 text-base",
};

export const Button = forwardRef<
  HTMLButtonElement,
  CommonProps & ButtonHTMLAttributes<HTMLButtonElement>
>(function Button(
  {
    variant = "primary",
    size = "md",
    fullWidth,
    leadingIcon,
    trailingIcon,
    children,
    className = "",
    ...props
  },
  ref
) {
  return (
    <button
      ref={ref}
      {...props}
      className={[
        base,
        variants[variant],
        sizes[size],
        fullWidth ? "w-full" : "",
        className,
      ].join(" ")}
    >
      {leadingIcon}
      <span>{children}</span>
      {trailingIcon}
    </button>
  );
});

interface LinkButtonProps extends CommonProps {
  href: string;
  prefetch?: boolean;
}

export function LinkButton({
  variant = "primary",
  size = "md",
  fullWidth,
  leadingIcon,
  trailingIcon,
  children,
  className = "",
  href,
  prefetch,
}: LinkButtonProps) {
  return (
    <Link
      href={href}
      prefetch={prefetch}
      className={[
        base,
        variants[variant],
        sizes[size],
        fullWidth ? "w-full" : "",
        className,
      ].join(" ")}
    >
      {leadingIcon}
      <span>{children}</span>
      {trailingIcon}
    </Link>
  );
}
