export function GradientBackground() {
  return (
    <div
      aria-hidden
      className="fixed inset-0 -z-0 overflow-hidden bg-sunrise-sky"
    >
      {/* Floating orbs: baby blue and lilac lead, mauve grounds, peach as
          sunrise glow, blush appears only as a quiet accent. */}
      <div className="absolute -top-44 -left-32 h-[520px] w-[520px] rounded-full bg-sky2-200/55 blur-[160px] float-slower" />
      <div className="absolute top-24 -right-32 h-[560px] w-[560px] rounded-full bg-lilac-200/55 blur-[170px] float-slow" />
      <div className="absolute bottom-[-220px] left-1/4 h-[600px] w-[600px] rounded-full bg-mauve-200/45 blur-[200px] float-slower" />
      <div className="absolute top-1/3 right-1/4 h-[360px] w-[360px] rounded-full bg-peach-200/50 blur-[160px]" />
      <div className="absolute bottom-1/4 left-[10%] h-[260px] w-[260px] rounded-full bg-blush-100/45 blur-[140px]" />

      {/* Subtle warm grain */}
      <div
        className="absolute inset-0 opacity-[0.035] mix-blend-multiply"
        style={{
          backgroundImage:
            "radial-gradient(rgba(74,28,50,0.5) 1px, transparent 1px)",
          backgroundSize: "3px 3px",
        }}
      />

      {/* Cream veils at top and bottom for soft contrast */}
      <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-cream-50/85 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-cream-100/70 to-transparent" />
    </div>
  );
}
