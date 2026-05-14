import { InfoCard, InfoPage } from "@/components/InfoPage";

export const metadata = {
  title: "Cookie Policy. Afterglow.",
};

export default function CookiesPage() {
  return (
    <InfoPage
      eyebrow="Cookies"
      title="The very small set of cookies we use."
      subtitle="We aim to use the fewest cookies that let the product work. This is a plain-language summary."
    >
      <InfoCard title="What cookies do here">
        <p>
          Cookies are small files saved by your browser. We use them to keep
          you signed in, to remember preferences like your safety toggles,
          and to keep this prototype's membership state in your browser so
          the demo flow feels real.
        </p>
      </InfoCard>

      <InfoCard title="What we do not do">
        <p>
          We do not use cookies for cross-site tracking, advertising, or
          profile sharing with third parties. We do not have advertising
          partners.
        </p>
      </InfoCard>

      <InfoCard title="Your control">
        <p>
          You can clear cookies and site data at any time through your
          browser settings. Clearing site data will reset prototype state,
          including the demo membership flag.
        </p>
        <p className="text-xs text-plum-500">
          This page is illustrative. Final cookie policy language will be
          reviewed by legal counsel before public launch.
        </p>
      </InfoCard>
    </InfoPage>
  );
}
