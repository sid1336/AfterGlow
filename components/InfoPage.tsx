import type { ReactNode } from "react";
import Link from "next/link";
import { AppHeader } from "@/components/AppHeader";
import { Footer } from "@/components/Footer";
import { GlowCard } from "@/components/GlowCard";

interface InfoPageProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  comingSoon?: boolean;
  children?: ReactNode;
}

export function InfoPage({
  eyebrow,
  title,
  subtitle,
  comingSoon = false,
  children,
}: InfoPageProps) {
  return (
    <main className="min-h-dvh pb-24">
      <AppHeader variant="marketing" />

      <div className="mx-auto max-w-4xl px-4 pt-12 sm:px-5">
        <div className="mb-10 max-w-2xl">
          <p className="text-xs uppercase tracking-[0.22em] text-plum-500">
            {eyebrow}
          </p>
          <h1 className="mt-3 font-display text-4xl tracking-tight text-burgundy-700 md:text-5xl">
            <span className="text-gradient">{title}</span>
          </h1>
          {subtitle ? (
            <p className="mt-4 text-base leading-relaxed text-plum-600 md:text-lg">
              {subtitle}
            </p>
          ) : null}
          {comingSoon ? (
            <p className="mt-3 text-sm text-plum-500">Coming soon.</p>
          ) : null}
        </div>

        <div className="space-y-6">{children}</div>

        <div className="mt-12 flex flex-col items-center gap-3 text-center sm:flex-row sm:justify-center">
          <Link
            href="/"
            className="text-sm text-plum-500 underline-offset-4 transition hover:text-burgundy-700 hover:underline"
          >
            Back to home
          </Link>
          <Link
            href="/standards"
            className="text-sm text-plum-500 underline-offset-4 transition hover:text-burgundy-700 hover:underline"
          >
            Community Standards
          </Link>
          <Link
            href="/safety"
            className="text-sm text-plum-500 underline-offset-4 transition hover:text-burgundy-700 hover:underline"
          >
            Safety
          </Link>
        </div>
      </div>

      <Footer />
    </main>
  );
}

interface InfoCardProps {
  title: string;
  children: ReactNode;
  eyebrow?: string;
}

export function InfoCard({ title, children, eyebrow }: InfoCardProps) {
  return (
    <GlowCard className="p-6 md:p-9">
      {eyebrow ? (
        <p className="text-[11px] uppercase tracking-[0.22em] text-plum-500">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-2 font-display text-2xl tracking-tight text-burgundy-700 md:text-3xl">
        {title}
      </h2>
      <div className="mt-4 space-y-3 text-[15px] leading-relaxed text-plum-700">
        {children}
      </div>
    </GlowCard>
  );
}
