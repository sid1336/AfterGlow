import type { ReactNode } from "react";

interface ProfileSectionProps {
  title: string;
  description?: string;
  children: ReactNode;
  action?: ReactNode;
}

export function ProfileSection({
  title,
  description,
  children,
  action,
}: ProfileSectionProps) {
  return (
    <section className="glass rounded-3xl p-6 shadow-glow-sm md:p-8">
      <header className="mb-5 flex items-start justify-between gap-4">
        <div>
          <h2 className="font-display text-xl tracking-tight text-ink-50 md:text-2xl">
            {title}
          </h2>
          {description ? (
            <p className="mt-1 text-sm text-ink-300">{description}</p>
          ) : null}
        </div>
        {action}
      </header>
      <div>{children}</div>
    </section>
  );
}

interface PromptFieldProps {
  label: string;
  value: string;
}

export function PromptField({ label, value }: PromptFieldProps) {
  return (
    <div className="rounded-2xl border border-white/8 bg-white/3 p-4">
      <p className="text-[10px] uppercase tracking-[0.18em] text-ink-300">
        {label}
      </p>
      <p className="mt-1.5 text-[15px] leading-relaxed text-ink-100">
        “{value}”
      </p>
    </div>
  );
}
