import { GlowCard } from "./GlowCard";

export const COMMUNITY_STANDARDS = {
  principles: [
    {
      title: "Intentional dating",
      body: "Afterglow is built around real, considered connection. We design every screen to slow you down a little.",
    },
    {
      title: "Respectful communication",
      body: "Speak the way you'd want to be spoken to. We treat tone as part of the experience, not an afterthought.",
    },
    {
      title: "Emotional safety",
      body: "Your softness shouldn't be a risk. We hold the line so you can show up honestly.",
    },
    {
      title: "Meaningful connection",
      body: "No spam-like or objectifying behavior. The point is people, not performance.",
    },
  ],
  discouraged: [
    "Harassment of any kind, including identity-based remarks.",
    "Explicit solicitation as an opening message.",
    "Copy-paste, spam-like messages sent at scale.",
    "Coercive or manipulative language and pressure tactics.",
    "Disrespectful communication after someone has set a boundary.",
    "Repeated low-effort, objectifying messages.",
  ],
  review:
    "Accounts that repeatedly violate community standards may be reviewed, limited, or removed. Reviews are quiet, considered, and never used as public callouts.",
};

export function CommunityStandardsCard() {
  return (
    <GlowCard className="p-6 md:p-8">
      <div className="flex items-center gap-2">
        <span className="rounded-full bg-gradient-to-br from-blush-200 to-sky2-200 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-plum-700">
          Community Intent Standards
        </span>
      </div>
      <h2 className="mt-4 font-display text-2xl tracking-tight text-plum-800 md:text-3xl">
        How we hold this space.
      </h2>
      <p className="mt-2 max-w-2xl text-sm text-plum-600 md:text-base">
        Afterglow is a relationship-focused app designed for thoughtful
        connection. These standards aren't rules to game — they're the floor
        we agree to stand on together.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {COMMUNITY_STANDARDS.principles.map((p) => (
          <div
            key={p.title}
            className="rounded-2xl border border-white/80 bg-white/65 p-4"
          >
            <p className="text-sm font-medium text-plum-800">{p.title}</p>
            <p className="mt-1.5 text-xs leading-relaxed text-plum-600">
              {p.body}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-2xl border border-blush-200/70 bg-blush-50/60 p-4">
        <p className="text-[11px] uppercase tracking-[0.18em] text-plum-600">
          Discouraged behavior
        </p>
        <ul className="mt-2 space-y-1.5 text-sm text-plum-700">
          {COMMUNITY_STANDARDS.discouraged.map((d) => (
            <li key={d} className="flex items-start gap-2">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-plum-500" />
              <span>{d}</span>
            </li>
          ))}
        </ul>
      </div>

      <p className="mt-5 text-xs leading-relaxed text-plum-500">
        {COMMUNITY_STANDARDS.review}
      </p>
    </GlowCard>
  );
}
