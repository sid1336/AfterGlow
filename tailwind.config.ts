import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Plum text — warm, premium, never pure black
        plum: {
          50: "#f7f1f7",
          100: "#ede1ee",
          200: "#dac2dc",
          300: "#b894bd",
          400: "#8e6995",
          500: "#6b4d75",
          600: "#523a5b",
          700: "#3f2c47",
          800: "#2d1f34",
          900: "#1e1424",
        },
        // Cream / ivory — soft warm base
        cream: {
          50: "#fffaf6",
          100: "#fdf3ec",
          200: "#fae8db",
          300: "#f4d8c4",
        },
        // Blush pink
        blush: {
          50: "#fef2f5",
          100: "#fde0e8",
          200: "#fac5d4",
          300: "#f5a6bd",
          400: "#ec85a3",
        },
        // Soft peach
        peach: {
          50: "#fff3eb",
          100: "#ffe3d1",
          200: "#fcc9a8",
          300: "#f9b285",
        },
        // Lilac purple
        lilac: {
          50: "#f5f0fb",
          100: "#e8dcf6",
          200: "#d4c0ee",
          300: "#bda1e2",
          400: "#a181d3",
        },
        // Baby blue
        sky2: {
          50: "#eff7fd",
          100: "#daeafa",
          200: "#bfd8f3",
          300: "#9ec3ea",
          400: "#7fb0e0",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 24px 60px -22px rgba(189, 161, 226, 0.45)",
        "glow-sm": "0 12px 30px -14px rgba(189, 161, 226, 0.35)",
        "glow-blush": "0 24px 70px -22px rgba(245, 166, 189, 0.5)",
        ring: "inset 0 1px 0 0 rgba(255,255,255,0.7)",
        card: "0 10px 30px -16px rgba(82, 58, 91, 0.18)",
      },
      backgroundImage: {
        "sunrise-sky":
          "radial-gradient(circle at 18% 12%, rgba(253, 224, 232, 0.85), transparent 55%), radial-gradient(circle at 82% 18%, rgba(218, 234, 250, 0.85), transparent 55%), radial-gradient(circle at 50% 100%, rgba(232, 220, 246, 0.85), transparent 60%), linear-gradient(180deg, #fff7f1 0%, #fef0f5 45%, #f1ecfb 100%)",
        "soft-aurora":
          "linear-gradient(120deg, rgba(253, 224, 232, 0.45) 0%, rgba(232, 220, 246, 0.45) 50%, rgba(218, 234, 250, 0.45) 100%)",
      },
      animation: {
        "float-slow": "float 9s ease-in-out infinite",
        "float-slower": "float 13s ease-in-out infinite",
        "fade-in": "fadeIn 0.6s ease-out both",
        "rise-in": "riseIn 0.7s ease-out both",
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-22px)" },
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
