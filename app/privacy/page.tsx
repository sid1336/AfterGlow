import { InfoCard, InfoPage } from "@/components/InfoPage";

export const metadata = {
  title: "Privacy Policy. Afterglow.",
};

export default function PrivacyPage() {
  return (
    <InfoPage
      eyebrow="Privacy"
      title="What we collect, why, and what we never show."
      subtitle="This is a plain-language summary of our privacy approach. A complete legal Privacy Policy will appear here before launch."
    >
      <InfoCard title="What we collect">
        <p>
          We collect the information you share with us during onboarding and
          on your profile. That includes identity, attraction settings,
          long-form prompts, lifestyle and values choices, and a broad
          location (continent, country, state or region, and city).
        </p>
        <p>
          We may collect basic device and usage information needed to keep
          the service running. We do not collect your live location, your
          device location stream, or your full address.
        </p>
      </InfoCard>

      <InfoCard title="What we never show">
        <p>
          Afterglow never displays your exact city to other members. We never
          show exact distance, maps, or live location. Your city is used only
          to place you in a private 200 km compatibility region inside your
          country.
        </p>
      </InfoCard>

      <InfoCard title="Notice at Collection" eyebrow="California residents">
        <p id="notice">
          If you live in California, this section serves as your Notice at
          Collection. We collect categories of personal information including
          identifiers, profile information, demographic information you
          choose to share, and usage data. We do not sell personal
          information. We use the information we collect to operate
          Afterglow, match you with people, support moderation, and improve
          the product. You can request access, correction, or deletion of
          your information by writing to{" "}
          <strong className="text-burgundy-700">privacy@afterglow.app</strong>.
        </p>
      </InfoCard>

      <InfoCard title="Your rights">
        <p>
          You can review, edit, and delete information in your profile at any
          time. You can pause matches from your Settings. Contact us at{" "}
          <strong className="text-burgundy-700">privacy@afterglow.app</strong>{" "}
          for requests related to your data.
        </p>
        <p className="text-xs text-plum-500">
          This page is illustrative. Final policy language will be reviewed
          by legal counsel before public launch.
        </p>
      </InfoCard>
    </InfoPage>
  );
}
