import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          50: "#f6f4ff",
          100: "#ece8ff",
          200: "#d8d2f5",
          300: "#bbb2e0",
          400: "#8e84b8",
          500: "#6a608f",
          600: "#4a4170",
          700: "#322b54",
          800: "#1f1a3a",
          900: "#100c24",
          950: "#0a0719",
        },
        glow: {
          pink: "#f5b4d4",
          rose: "#e89bbf",
          mauve: "#c79bd8",
          violet: "#9b8bd9",
          indigo: "#6f7bd0",
          sky: "#7cb1e0",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 20px 60px -20px rgba(157, 122, 200, 0.55)",
        "glow-sm": "0 10px 30px -12px rgba(157, 122, 200, 0.45)",
        ring: "inset 0 1px 0 0 rgba(255,255,255,0.12)",
      },
      backgroundImage: {
        "evening-sky":
          "radial-gradient(circle at 20% 10%, rgba(245,180,212,0.55), transparent 55%), radial-gradient(circle at 80% 20%, rgba(155,139,217,0.5), transparent 55%), radial-gradient(circle at 50% 80%, rgba(124,177,224,0.45), transparent 60%), linear-gradient(180deg, #16102e 0%, #0c0820 100%)",
      },
      animation: {
        "float-slow": "float 8s ease-in-out infinite",
        "float-slower": "float 12s ease-in-out infinite",
        "fade-in": "fadeIn 0.6s ease-out both",
        "rise-in": "riseIn 0.7s ease-out both",
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-18px)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        riseIn: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
