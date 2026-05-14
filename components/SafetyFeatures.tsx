import { GlowCard } from "./GlowCard";
import { SAFETY_FEATURES } from "@/lib/safety";

function Icon({ name }: { name: "shield" | "spark" | "soft" | "scale" | "eye" }) {
  const paths: Record<string, React.ReactNode> = {
    shield: (
      <path
        d="M12 3l8 3v6c0 4.6-3.4 8.4-8 9-4.6-.6-8-4.4-8-9V6l8-3z"
        stroke="currentColor"
        strokeWidth="1.4"
        fill="none"
        strokeLinejoin="round"
      />
    ),
    spark: (
      <path
        d="M12 3l1.6 4.8L18 9.4l-4.4 1.7L12 16l-1.6-4.9L6 9.4l4.4-1.6L12 3z"
        stroke="currentColor"
        strokeWidth="1.4"
        fill="none"
        strokeLinejoin="round"
      />
    ),
    soft: (
      <path
        d="M4 6.5A2.5 2.5 0 016.5 4h11A2.5 2.5 0 0120 6.5v8A2.5 2.5 0 0117.5 17H10l-5 4v-4.2A2.5 2.5 0 014 14.5v-8z"
        stroke="currentColor"
        strokeWidth="1.4"
        fill="none"
        strokeLinejoin="round"
      />
    ),
    scale: (
      <>
        <path
          d="M12 4v16M4 8h16M6 10l-2 4 2 4M18 10l2 4-2 4"
          stroke="currentColor"
          strokeWidth="1.4"
          fill="none"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </>
    ),
    eye: (
      <>
        <path
          d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12z"
          stroke="currentColor"
          strokeWidth="1.4"
          fill="none"
        />
        <circle cx="12" cy="12" r="2.6" fill="currentColor" />
      </>
    ),
  };
  return (
    <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-sky2-200 via-lilac-200 to-mauve-200 text-burgundy-700">
      <svg viewBox="0 0 24 24" className="h-4.5 w-4.5">
        {paths[name]}
      </svg>
    </span>
  );
}

export function SafetyFeaturesCard() {
  return (
    <GlowCard className="p-6 md:p-9">
      <div className="flex items-center gap-2">
        <span className="rounded-full bg-gradient-to-br from-sky2-200 to-lilac-200 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-burgundy-700">
          AI-assisted emotional safety
        </span>
      </div>
      <h2 className="mt-4 font-display text-2xl tracking-tight text-burgundy-700 md:text-3xl">
        A supportive moderation layer, by design.
      </h2>
      <p className="mt-3 max-w-2xl text-sm text-plum-600 md:text-base">
        Afterglow's safety layer is here to protect the emotional environment.
        It is supportive, not a replacement for human review. In this
        prototype, the logic runs locally on your device with simple
        heuristics. The production version will route signals to a human
        review team.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {SAFETY_FEATURES.map((f) => (
          <div
            key={f.title}
            className="flex items-start gap-3 rounded-2xl border border-white bg-white/75 p-4"
          >
            <Icon name={f.icon} />
            <div>
              <p className="text-sm font-medium text-burgundy-700">{f.title}</p>
              <p className="mt-1 text-xs leading-relaxed text-plum-600">
                {f.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </GlowCard>
  );
}
