import { GlowCard } from "./GlowCard";

interface MembershipCardProps {
  compact?: boolean;
}

export function MembershipCard({ compact = false }: MembershipCardProps) {
  if (compact) {
    return (
      <div className="rounded-2xl border border-white/80 bg-white/70 p-4">
        <div className="flex items-center gap-2">
          <span className="rounded-full bg-gradient-to-br from-blush-200 to-sky2-200 px-2.5 py-0.5 text-[10px] uppercase tracking-[0.2em] text-plum-700">
            One-time · $2.99
          </span>
          <span className="text-[11px] uppercase tracking-[0.18em] text-plum-500">
            Verified membership
          </span>
        </div>
        <p className="mt-2 text-sm text-plum-700">
          A small one-time $2.99 membership fee helps reduce bots, support
          moderation, and keep Afterglow focused on real connection.
        </p>
      </div>
    );
  }
  return (
    <GlowCard className="p-6 md:p-8">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="rounded-full bg-gradient-to-br from-blush-200 via-lilac-200 to-sky2-200 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-plum-700">
            Verified membership
          </span>
          <span className="rounded-full border border-plum-200/40 bg-white/70 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-plum-600">
            One-time · $2.99
          </span>
        </div>
        <p className="font-display text-2xl text-plum-800">
          A small fee. A calmer community.
        </p>
      </div>
      <p className="mt-4 max-w-3xl text-sm leading-relaxed text-plum-600 md:text-base">
        A small one-time <span className="font-medium text-plum-800">$2.99</span>{" "}
        membership fee helps reduce bots, support moderation, and keep
        Afterglow focused on real connection. It's a quiet way to keep this
        space considered — not greedy, not gated.
      </p>
      <ul className="mt-5 grid gap-3 sm:grid-cols-3">
        {[
          {
            title: "Reduces bots",
            body: "Even a small fee deters automated and disposable accounts.",
          },
          {
            title: "Supports moderation",
            body: "Helps fund a human review team that protects emotional safety.",
          },
          {
            title: "Encourages intention",
            body: "People who join tend to show up with more care, not less.",
          },
        ].map((b) => (
          <li
            key={b.title}
            className="rounded-2xl border border-white/80 bg-white/65 p-4"
          >
            <p className="text-sm font-medium text-plum-800">{b.title}</p>
            <p className="mt-1 text-xs leading-relaxed text-plum-600">
              {b.body}
            </p>
          </li>
        ))}
      </ul>
      <p className="mt-5 text-xs text-plum-500">
        Prototype only — no payment is processed. The fee is shown here to
        illustrate the membership model.
      </p>
    </GlowCard>
  );
}
