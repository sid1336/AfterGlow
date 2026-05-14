export function GradientBackground() {
  return (
    <div
      aria-hidden
      className="fixed inset-0 -z-0 overflow-hidden bg-sunrise-sky"
    >
      {/* Soft, blurred orbs in baby-blue / blush / lilac / peach */}
      <div className="absolute -top-32 -left-24 h-[480px] w-[480px] rounded-full bg-blush-200/60 blur-[140px] animate-float-slower" />
      <div className="absolute top-40 -right-32 h-[520px] w-[520px] rounded-full bg-lilac-200/60 blur-[160px] animate-float-slow" />
      <div className="absolute bottom-[-160px] left-1/4 h-[560px] w-[560px] rounded-full bg-sky2-200/60 blur-[180px] animate-float-slower" />
      <div className="absolute top-1/3 right-1/4 h-[320px] w-[320px] rounded-full bg-peach-200/55 blur-[140px]" />

      {/* Faint star/grain layer */}
      <div
        className="absolute inset-0 opacity-[0.05] mix-blend-multiply"
        style={{
          backgroundImage:
            "radial-gradient(rgba(82,58,91,0.5) 1px, transparent 1px)",
          backgroundSize: "3px 3px",
        }}
      />

      {/* Top + bottom subtle vignettes to keep depth */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/40 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-blush-50/40 to-transparent" />
    </div>
  );
}
