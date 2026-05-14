import type { Metadata, Viewport } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import { GradientBackground } from "@/components/GradientBackground";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  axes: ["opsz", "SOFT"],
});

export const metadata: Metadata = {
  title: "Afterglow. Because dating should feel human again.",
  description:
    "A relationship-focused app for people seeking real connection, emotional depth, and something that lasts. Curated daily matches, long-form profiles, AI-assisted emotional safety.",
  applicationName: "Afterglow",
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  themeColor: "#fbfaff",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${fraunces.variable}`}
    >
      <body
        suppressHydrationWarning
        className="min-h-dvh font-sans antialiased text-plum-800"
      >
        <GradientBackground />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
