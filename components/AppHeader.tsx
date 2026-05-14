"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./Logo";

const NAV = [
  { href: "/matches", label: "Matches" },
  { href: "/chat/elias", label: "Messages" },
  { href: "/profile", label: "Profile" },
  { href: "/settings", label: "Settings" },
];

interface AppHeaderProps {
  variant?: "marketing" | "app";
}

export function AppHeader({ variant = "app" }: AppHeaderProps) {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-30">
      <div className="mx-auto max-w-6xl px-5 pt-5">
        <div className="glass flex items-center justify-between rounded-2xl px-4 py-3">
          <Link
            href="/"
            className="flex items-center gap-2.5 transition hover:opacity-90"
            aria-label="Afterglow home"
          >
            <Logo className="h-7 w-7" />
            <span className="font-display text-lg tracking-tight text-plum-800">
              Afterglow
            </span>
          </Link>

          {variant === "app" ? (
            <nav className="hidden items-center gap-1 md:flex">
              {NAV.map((item) => {
                const active =
                  pathname === item.href ||
                  (item.href !== "/" && pathname?.startsWith(item.href));
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`rounded-full px-3.5 py-1.5 text-sm transition ${
                      active
                        ? "bg-white/85 text-plum-900 shadow-ring"
                        : "text-plum-600 hover:bg-white/60 hover:text-plum-800"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          ) : (
            <nav className="hidden items-center gap-1 md:flex">
              <Link
                href="/standards"
                className="rounded-full px-3.5 py-1.5 text-sm text-plum-600 transition hover:bg-white/60 hover:text-plum-800"
              >
                Community Standards
              </Link>
              <Link
                href="/onboarding"
                className="rounded-full px-3.5 py-1.5 text-sm text-plum-600 transition hover:bg-white/60 hover:text-plum-800"
              >
                Onboarding
              </Link>
              <Link
                href="/matches"
                className="rounded-full px-3.5 py-1.5 text-sm text-plum-600 transition hover:bg-white/60 hover:text-plum-800"
              >
                Today's matches
              </Link>
            </nav>
          )}

          <div className="flex items-center gap-2">
            {variant === "marketing" ? (
              <Link
                href="/onboarding"
                className="rounded-full bg-gradient-to-r from-blush-300 via-lilac-300 to-sky2-300 px-4 py-1.5 text-sm font-medium text-plum-900 shadow-glow-sm transition hover:-translate-y-0.5 hover:shadow-glow"
              >
                Start
              </Link>
            ) : (
              <Link
                href="/matches"
                className="rounded-full bg-white/80 px-4 py-1.5 text-sm font-medium text-plum-800 shadow-ring transition hover:bg-white md:hidden"
              >
                Matches
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
