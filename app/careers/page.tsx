import { InfoCard, InfoPage } from "@/components/InfoPage";

export const metadata = {
  title: "Careers. Afterglow.",
};

export default function CareersPage() {
  return (
    <InfoPage
      eyebrow="Careers"
      title="Build something quietly meaningful."
      subtitle="We are a small team designing for emotional depth, calm UI, and a healthier kind of dating culture. We hire kind, thoughtful people who care about craft."
      comingSoon
    >
      <InfoCard title="The kind of people we hire">
        <p>
          We look for engineers, designers, and trust and safety
          practitioners who care about the experience of dating, not just the
          metrics of dating apps. Many of us came from work in product design,
          mental health, public service, and queer community spaces.
        </p>
        <p>
          Open roles will be listed here when we begin hiring. Until then,
          you can reach out through the contact page if Afterglow sounds like
          the kind of company you would want to help build.
        </p>
      </InfoCard>
      <InfoCard title="How we work" eyebrow="Culture">
        <ul className="space-y-2.5">
          <li>
            <strong className="text-burgundy-700">
              Care is the work.
            </strong>{" "}
            We treat product design and trust and safety as parts of the same
            craft.
          </li>
          <li>
            <strong className="text-burgundy-700">
              Calm by default.
            </strong>{" "}
            Quiet hours, async work, clear writing.
          </li>
          <li>
            <strong className="text-burgundy-700">
              Built for everyone.
            </strong>{" "}
            We are intentional about who we welcome into the product and the
            team.
          </li>
        </ul>
      </InfoCard>
    </InfoPage>
  );
}
