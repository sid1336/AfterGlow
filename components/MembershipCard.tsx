import { GlowCard } from "./GlowCard";

interface MembershipCardProps {
  compact?: boolean;
}

export function MembershipCard({ compact = false }: MembershipCardProps) {
  if (compact) {
    return (
      <div className="rounded-2xl border border-white bg-white/80 p-4">
        <div className="flex items-center gap-2">
          <span className="rounded-full bg-gradient-to-br from-sky2-200 to-mauve-200 px-2.5 py-0.5 text-[10px] uppercase tracking-[0.2em] text-burgundy-700">
            One-time · $2.99
          </span>
          <span className="text-[11px] uppercase tracking-[0.18em] text-plum-500">
            Verified membership
          </span>
        </div>
        <p className="mt-2 text-sm text-plum-700">
          A small one-time $2.99 membership helps reduce bots, support
          moderation, and protect a more intentional dating environment.
        </p>
      </div>
    );
  }
  return (
    <GlowCard className="p-6 md:p-10">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="rounded-full bg-gradient-to-br from-sky2-200 via-lilac-200 to-mauve-200 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-burgundy-700">
            Verified membership
          </span>
          <span className="rounded-full border border-mauve-200/40 bg-white/85 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-plum-600">
            One-time · $2.99
          </span>
        </div>
        <p className="font-display text-2xl text-burgundy-700">
          A small fee. A calmer community.
        </p>
      </div>
      <p className="mt-5 max-w-3xl text-[15px] leading-relaxed text-plum-600 md:text-base">
        A small one-time{" "}
        <span className="font-medium text-burgundy-700">$2.99</span> membership
        helps keep Afterglow thoughtful, respectful, and focused on real
        connection. It supports moderation, reduces bots and disposable
        behavior, and quietly protects the emotional environment everyone
        shows up to.
      </p>
      <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {[
          {
            title: "Reduces bots",
            body: "Even a small fee deters automated and disposable accounts.",
          },
          {
            title: "Discourages disposable behavior",
            body: "A small commitment up front sets the tone for how people show up.",
          },
          {
            title: "Supports moderation",
            body: "Helps fund a human review team that protects emotional safety.",
          },
          {
            title: "Keeps the space intentional",
            body: "Members tend to bring more care, more curiosity, and more follow-through.",
          },
        ].map((b) => (
          <li
            key={b.title}
            className="rounded-2xl border border-white bg-white/75 p-4"
          >
            <p className="text-sm font-medium text-burgundy-700">{b.title}</p>
            <p className="mt-1 text-xs leading-relaxed text-plum-600">
              {b.body}
            </p>
          </li>
        ))}
      </ul>
      <p className="mt-5 text-xs text-plum-500">
        Prototype only. No payment is collected in this demo. Paid membership
        does not guarantee safety or authenticity.
      </p>
    </GlowCard>
  );
}
