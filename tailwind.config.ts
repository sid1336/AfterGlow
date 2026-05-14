import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Burgundy: deeper warm red-brown for headings and important text
        burgundy: {
          50: "#fbeef1",
          100: "#f3d4dd",
          200: "#e1a5b8",
          300: "#cc758f",
          400: "#aa4f70",
          500: "#853756",
          600: "#642542",
          700: "#4a1c32",
          800: "#321423",
          900: "#1f0b16",
        },
        // Plum: warm grounded body text, slightly cooler than burgundy
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
        // Cream and ivory base
        cream: {
          50: "#fffaf6",
          100: "#fef3eb",
          200: "#fbe8d9",
          300: "#f5d8c4",
        },
        // Blush pink, used only as an accent
        blush: {
          50: "#fef2f5",
          100: "#fde0e8",
          200: "#fac5d4",
          300: "#f5a6bd",
          400: "#ec85a3",
        },
        // Soft peach sunrise glow
        peach: {
          50: "#fff3eb",
          100: "#ffe3d1",
          200: "#fcc9a8",
          300: "#f9b285",
        },
        // Mauve, the warm purple between blush and lilac
        mauve: {
          50: "#f5edf3",
          100: "#e7d1e0",
          200: "#cda5c3",
          300: "#b07ea7",
          400: "#92608b",
          500: "#75476e",
          600: "#5b3654",
          700: "#452840",
          800: "#2f1b2b",
          900: "#1e1118",
        },
        // Lilac purple
        lilac: {
          50: "#f4eefa",
          100: "#e6daf3",
          200: "#d1bdec",
          300: "#b89ae0",
          400: "#9c7bd2",
        },
        // Baby blue sky
        sky2: {
          50: "#eef6fc",
          100: "#dae9f8",
          200: "#bfd6f0",
          300: "#9fc1e7",
          400: "#7eaadb",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 24px 60px -22px rgba(176, 126, 167, 0.4)",
        "glow-sm": "0 12px 30px -14px rgba(176, 126, 167, 0.32)",
        "glow-blush": "0 24px 70px -22px rgba(245, 166, 189, 0.45)",
        ring: "inset 0 1px 0 0 rgba(255,255,255,0.7)",
        card: "0 10px 30px -16px rgba(74, 28, 50, 0.16)",
      },
      backgroundImage: {
        // Sunrise sky leaning into baby blue, lilac, mauve, with peach
        // sunrise glow and blush only as a quiet accent at the bottom.
        "sunrise-sky":
          "radial-gradient(circle at 14% 6%, rgba(218, 233, 248, 0.85), transparent 55%), radial-gradient(circle at 84% 10%, rgba(231, 209, 224, 0.78), transparent 55%), radial-gradient(circle at 50% 100%, rgba(255, 227, 209, 0.55), transparent 60%), linear-gradient(180deg, #fbfaff 0%, #f3f0fb 45%, #efe7f3 100%)",
        "soft-aurora":
          "linear-gradient(120deg, rgba(218, 233, 248, 0.4) 0%, rgba(231, 209, 224, 0.4) 50%, rgba(255, 227, 209, 0.35) 100%)",
        "cream-veil":
          "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.55) 100%)",
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
