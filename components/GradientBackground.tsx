export function GradientBackground() {
  return (
    <div
      aria-hidden
      className="fixed inset-0 -z-0 overflow-hidden bg-evening-sky"
    >
      {/* Blurred orbs */}
      <div className="absolute -top-32 -left-24 h-[420px] w-[420px] rounded-full bg-glow-pink/40 blur-[120px] animate-float-slower" />
      <div className="absolute top-40 -right-32 h-[460px] w-[460px] rounded-full bg-glow-violet/40 blur-[140px] animate-float-slow" />
      <div className="absolute bottom-[-160px] left-1/4 h-[520px] w-[520px] rounded-full bg-glow-sky/30 blur-[160px] animate-float-slower" />
      <div className="absolute top-1/3 left-1/2 h-[280px] w-[280px] -translate-x-1/2 rounded-full bg-glow-mauve/25 blur-[120px]" />

      {/* Soft star/grain layer */}
      <div
        className="absolute inset-0 opacity-[0.07] mix-blend-screen"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "3px 3px",
        }}
      />

      {/* Bottom vignette to keep contrast */}
      <div className="absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-ink-950/80 to-transparent" />
    </div>
  );
}
