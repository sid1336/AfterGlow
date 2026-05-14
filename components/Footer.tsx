import Link from "next/link";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-plum-200/40">
      <div className="mx-auto max-w-6xl px-5 py-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <Logo className="h-7 w-7" />
            <div>
              <p className="font-display text-base text-plum-800">Afterglow</p>
              <p className="text-xs text-plum-500">Real people. Real feelings.</p>
            </div>
          </div>
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-plum-500">
            <Link href="/onboarding" className="hover:text-plum-800">
              Start your profile
            </Link>
            <Link href="/matches" className="hover:text-plum-800">
              Today's matches
            </Link>
            <Link href="/standards" className="hover:text-plum-800">
              Community Standards
            </Link>
            <Link href="/settings" className="hover:text-plum-800">
              Settings
            </Link>
            <span className="text-plum-400">© {new Date().getFullYear()} Afterglow</span>
          </nav>
        </div>
      </div>
    </footer>
  );
}
