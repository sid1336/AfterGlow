"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Logo } from "./Logo";

const APP_NAV = [
  { href: "/matches", label: "Matches" },
  { href: "/chat/elias", label: "Messages" },
  { href: "/profile", label: "Profile" },
  { href: "/settings", label: "Settings" },
];

const MARKETING_NAV = [
  { href: "/about", label: "About" },
  { href: "/standards", label: "Community Standards" },
  { href: "/safety", label: "Safety" },
  { href: "/membership", label: "Membership" },
];

interface AppHeaderProps {
  variant?: "marketing" | "app";
}

export function AppHeader({ variant = "app" }: AppHeaderProps) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const nav = variant === "app" ? APP_NAV : MARKETING_NAV;

  const close = () => setMobileOpen(false);

  return (
    <header className="sticky top-0 z-30">
      <div className="mx-auto max-w-6xl px-4 pt-4 sm:px-5 sm:pt-5">
        <div className="glass flex items-center justify-between rounded-full px-4 py-2.5">
          <Link
            href="/"
            className="flex items-center gap-2.5 transition hover:opacity-90"
            aria-label="Afterglow home"
            onClick={close}
          >
            <Logo className="h-7 w-7" />
            <span className="font-display text-lg tracking-tight text-burgundy-700">
              Afterglow
            </span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {nav.map((item) => {
              const active =
                pathname === item.href ||
                (item.href !== "/" && pathname?.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-full px-3.5 py-1.5 text-sm transition ${
                    active
                      ? "bg-white/85 text-burgundy-800 shadow-ring"
                      : "text-plum-600 hover:bg-white/60 hover:text-burgundy-700"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href={variant === "marketing" ? "/onboarding" : "/matches"}
              className="rounded-full bg-gradient-to-r from-sky2-300 via-lilac-300 to-mauve-300 px-4 py-1.5 text-sm font-medium text-burgundy-800 shadow-glow-sm transition hover:-translate-y-0.5 hover:shadow-glow"
              onClick={close}
            >
              {variant === "marketing" ? "Start" : "Today"}
            </Link>
            <button
              type="button"
              onClick={() => setMobileOpen((s) => !s)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white bg-white/70 text-burgundy-700 transition hover:bg-white md:hidden"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                aria-hidden
              >
                {mobileOpen ? (
                  <path
                    d="M6 6l12 12M6 18L18 6"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                ) : (
                  <path
                    d="M4 7h16M4 12h16M4 17h16"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {mobileOpen ? (
          <div className="glass mt-2 rounded-3xl p-3 md:hidden">
            <ul className="grid gap-1">
              {nav.map((item) => {
                const active =
                  pathname === item.href ||
                  (item.href !== "/" && pathname?.startsWith(item.href));
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={close}
                      className={`block rounded-2xl px-4 py-3 text-[15px] transition ${
                        active
                          ? "bg-white/85 text-burgundy-800"
                          : "text-plum-700 hover:bg-white/60 hover:text-burgundy-700"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ) : null}
      </div>
    </header>
  );
}
