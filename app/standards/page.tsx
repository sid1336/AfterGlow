import Link from "next/link";
import { AppHeader } from "@/components/AppHeader";
import { Footer } from "@/components/Footer";
import { CommunityStandardsCard } from "@/components/CommunityStandards";
import { SafetyFeaturesCard } from "@/components/SafetyFeatures";
import { MembershipCard } from "@/components/MembershipCard";
import { LinkButton } from "@/components/Button";

export const metadata = {
  title: "Community Standards — Afterglow",
  description:
    "How Afterglow holds space for intentional, respectful, emotionally safe dating across the LGBTQIA+ community.",
};

export const dynamic = "force-static";

export default function StandardsPage() {
  return (
    <main className="min-h-dvh pb-20">
      <AppHeader variant="marketing" />

      <div className="mx-auto max-w-4xl px-5 pt-12">
        <div className="mb-10 max-w-2xl">
          <p className="text-xs uppercase tracking-[0.22em] text-plum-500">
            Community Intent Standards
          </p>
          <h1 className="mt-3 font-display text-4xl tracking-tight text-plum-800 md:text-5xl">
            <span className="text-gradient">A space held with care.</span>
          </h1>
          <p className="mt-4 text-base leading-relaxed text-plum-600 md:text-lg">
            Afterglow is a relationship-focused ecosystem for LGBTQIA+ people
            seeking serious, emotionally meaningful connection. These
            standards keep the space soft for those who came here to be seen
            — and firm with anyone who came here for something else.
          </p>
        </div>

        <div className="space-y-6">
          <CommunityStandardsCard />
          <SafetyFeaturesCard />
          <MembershipCard />
        </div>

        <div className="mt-10 flex flex-col items-center gap-3 text-center sm:flex-row sm:justify-center">
          <LinkButton href="/onboarding" size="lg">
            Start your profile
          </LinkButton>
          <Link
            href="/"
            className="text-sm text-plum-500 underline-offset-4 transition hover:text-plum-800 hover:underline"
          >
            Back to home
          </Link>
        </div>
      </div>

      <Footer />
    </main>
  );
}
