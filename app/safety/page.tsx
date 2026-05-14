import Link from "next/link";
import { InfoCard, InfoPage } from "@/components/InfoPage";
import { SafetyFeaturesCard } from "@/components/SafetyFeatures";

export const metadata = {
  title: "Safety. Afterglow.",
};

export default function SafetyPage() {
  return (
    <InfoPage
      eyebrow="Safety"
      title="A space held with care, on purpose."
      subtitle="Safety on Afterglow is part of the product, not an afterthought. Here is what we do, and what we ask of you."
    >
      <InfoCard title="What Afterglow does">
        <ul className="space-y-2.5">
          <li>
            <strong className="text-burgundy-700">
              Broad-region matching only.
            </strong>{" "}
            We never show exact distance, your city, a map, or live location.
          </li>
          <li>
            <strong className="text-burgundy-700">
              AI-assisted emotional safety.
            </strong>{" "}
            A supportive moderation layer notices spam-like, abrupt, or
            unsafe patterns and offers warmer rewrites. It is supportive, not
            a replacement for human review.
          </li>
          <li>
            <strong className="text-burgundy-700">
              Human review for serious signals.
            </strong>{" "}
            Messages that read as cruel, coercive, or unsafe are routed to a
            human review team in the production version.
          </li>
          <li>
            <strong className="text-burgundy-700">
              Community standard review.
            </strong>{" "}
            Repeated patterns of disrespect can trigger a quiet review,
            account limit, or removal. Reviews are never public callouts.
          </li>
        </ul>
      </InfoCard>

      <SafetyFeaturesCard />

      <InfoCard title="What we ask of you" eyebrow="Member safety">
        <ul className="space-y-2.5">
          <li>Be 18 or older to use Afterglow.</li>
          <li>
            Keep personal details private until trust is established. Try to
            stay within the app while you get to know someone.
          </li>
          <li>
            Report suspicious, unsafe, harassing, or spam-like behavior so
            our review team can take a look.
          </li>
          <li>
            Choose when, where, and how you meet offline. Afterglow does not
            arrange or supervise in-person meetings.
          </li>
        </ul>
      </InfoCard>

      <InfoCard title="If something happens">
        <p>
          For concerns inside the app, use the report controls on a profile
          or chat, or write to{" "}
          <strong className="text-burgundy-700">safety@afterglow.app</strong>.
        </p>
        <p>
          For emergencies or immediate physical safety concerns, contact
          your local emergency services. Afterglow is not a substitute for
          professional support.
        </p>
        <p>
          Read our{" "}
          <Link className="underline" href="/standards">
            Community Intent Standards
          </Link>{" "}
          to see the line we hold for each other.
        </p>
      </InfoCard>

      <InfoCard title="What membership does and does not do">
        <p>
          A one-time $2.99 membership helps us reduce bots, support
          moderation, and discourage disposable behavior. It is part of how
          we keep the space intentional.
        </p>
        <p>
          Paid membership does not guarantee safety or authenticity. We do
          our best, and so should you.
        </p>
      </InfoCard>
    </InfoPage>
  );
}
