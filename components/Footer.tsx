import Link from "next/link";
import { Logo } from "./Logo";

const COLUMNS = [
  {
    heading: "Afterglow",
    links: [
      { href: "/about", label: "About" },
      { href: "/#how-it-works", label: "How it works" },
      { href: "/standards", label: "Community Standards" },
      { href: "/safety", label: "Safety" },
      { href: "/membership", label: "Membership" },
    ],
  },
  {
    heading: "Company",
    links: [
      { href: "/careers", label: "Careers" },
      { href: "/about#press", label: "Press" },
      { href: "/about#blog", label: "Blog" },
      { href: "/contact", label: "Contact" },
      { href: "/about#investors", label: "Investors" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { href: "/privacy", label: "Privacy Policy" },
      { href: "/terms", label: "Terms of Service" },
      { href: "/cookies", label: "Cookie Policy" },
      { href: "/accessibility", label: "Accessibility" },
      { href: "/privacy#notice", label: "Notice at Collection" },
    ],
  },
  {
    heading: "Social",
    links: [
      { href: "https://instagram.com", label: "Instagram", external: true },
      { href: "https://tiktok.com", label: "TikTok", external: true },
      { href: "https://linkedin.com", label: "LinkedIn", external: true },
      { href: "https://youtube.com", label: "YouTube", external: true },
    ],
  },
];

export function Footer() {
  return (
    <footer className="mt-24 border-t border-mauve-200/40">
      <div className="mx-auto max-w-6xl px-5 py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-[1.1fr_1fr_1fr_1fr_1fr]">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3">
              <Logo className="h-8 w-8" />
              <div>
                <p className="font-display text-lg text-burgundy-700">
                  Afterglow
                </p>
                <p className="text-xs text-plum-500">Real people. Real feelings.</p>
              </div>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-plum-600">
              A relationship-focused app for people seeking real connection,
              emotional depth, and something that lasts.
            </p>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.heading}>
              <p className="text-[11px] uppercase tracking-[0.2em] text-plum-500">
                {col.heading}
              </p>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    {"external" in link && link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-plum-600 transition hover:text-burgundy-700"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-plum-600 transition hover:text-burgundy-700"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-3 rounded-3xl border border-white bg-white/65 p-5 text-xs leading-relaxed text-plum-600 md:grid-cols-2">
          <p>
            Afterglow is for people 18 and older. The app does not guarantee
            matches, dates, relationships, or outcomes. Members are
            responsible for their own choices, including offline meetings.
          </p>
          <p>
            Keep personal details private until trust is established. Try to
            stay within the app while you get to know someone. Exact distance
            and live location are never shown. Broad location is used only to
            improve match relevance. AI-assisted safety is supportive, not a
            replacement for human review. Paid membership does not guarantee
            safety or authenticity.
          </p>
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-3 text-xs text-plum-500 md:flex-row md:items-center">
          <span>
            &copy; {new Date().getFullYear()} Afterglow. Built with care.
          </span>
          <span>
            Report concerns at{" "}
            <Link href="/safety" className="underline-offset-4 hover:underline">
              /safety
            </Link>
            . Community standards may lead to account review, limitation, or
            removal.
          </span>
        </div>
      </div>
    </footer>
  );
}
