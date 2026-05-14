import Link from "next/link";
import { InfoCard, InfoPage } from "@/components/InfoPage";
import { MembershipCard } from "@/components/MembershipCard";

export const metadata = {
  title: "Membership. Afterglow.",
};

export default function MembershipPage() {
  return (
    <InfoPage
      eyebrow="Membership"
      title="A small fee. A calmer community."
      subtitle="Afterglow is a small membership community. A one-time fee keeps the space considered and helps us protect the emotional environment everyone shows up to."
    >
      <MembershipCard />

      <InfoCard title="What you get">
        <ul className="space-y-2.5">
          <li>Verified member badge across the app.</li>
          <li>AI-assisted emotional safety on every chat.</li>
          <li>Curated daily matches and a playful astro list.</li>
          <li>Long-form profiles and depth-aware matching.</li>
          <li>Quiet review for community standards.</li>
        </ul>
      </InfoCard>

      <InfoCard title="What it does not do">
        <p>
          Paid membership does not guarantee safety or authenticity. It is
          one part of how we keep the space intentional, alongside community
          standards, AI-assisted safety, and a human review team.
        </p>
      </InfoCard>

      <InfoCard title="Activate your membership">
        <p>
          You will be invited to activate your membership at the end of
          onboarding. You can also start from the{" "}
          <Link className="underline" href="/onboarding">
            onboarding flow
          </Link>{" "}
          any time.
        </p>
        <p className="text-xs text-plum-500">
          Prototype only. No payment is collected in this demo.
        </p>
      </InfoCard>
    </InfoPage>
  );
}
