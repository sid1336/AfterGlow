import Link from "next/link";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-white/8">
      <div className="mx-auto max-w-6xl px-5 py-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <Logo className="h-7 w-7" />
            <div>
              <p className="font-display text-base text-ink-50">Afterglow</p>
              <p className="text-xs text-ink-300">Real people, real feelings.</p>
            </div>
          </div>
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-ink-300">
            <Link href="/onboarding" className="hover:text-ink-100">
              Start your profile
            </Link>
            <Link href="/matches" className="hover:text-ink-100">
              Today's matches
            </Link>
            <Link href="/settings" className="hover:text-ink-100">
              Settings
            </Link>
            <span className="text-ink-400">© {new Date().getFullYear()} Afterglow</span>
          </nav>
        </div>
      </div>
    </footer>
  );
}
