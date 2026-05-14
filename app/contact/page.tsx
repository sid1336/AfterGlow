import { InfoCard, InfoPage } from "@/components/InfoPage";

export const metadata = {
  title: "Contact. Afterglow.",
};

export default function ContactPage() {
  return (
    <InfoPage
      eyebrow="Contact"
      title="Reach the people who make this."
      subtitle="Have a question, a concern, or a press inquiry? Use the right path below. Anything safety-related is reviewed quickly."
    >
      <InfoCard title="General questions">
        <p>
          For general questions about Afterglow, write to{" "}
          <strong className="text-burgundy-700">hello@afterglow.app</strong>.
          We try to respond within two business days.
        </p>
      </InfoCard>
      <InfoCard title="Safety and trust">
        <p>
          If something concerning happens in the app, please report it using
          the safety controls inside the relevant profile or chat. You can
          also reach our trust and safety team at{" "}
          <strong className="text-burgundy-700">safety@afterglow.app</strong>.
        </p>
        <p>
          For urgent or time-sensitive concerns about your physical safety,
          please contact local emergency services. Afterglow is not a
          replacement for professional support.
        </p>
      </InfoCard>
      <InfoCard title="Press, partnerships, investors">
        <p>
          Press: <strong className="text-burgundy-700">press@afterglow.app</strong>
        </p>
        <p>
          Partnerships and community programs:{" "}
          <strong className="text-burgundy-700">partners@afterglow.app</strong>
        </p>
        <p>
          Investor relations:{" "}
          <strong className="text-burgundy-700">investors@afterglow.app</strong>
        </p>
        <p className="text-xs text-plum-500">
          The contact addresses on this prototype page are illustrative and
          may not be active yet.
        </p>
      </InfoCard>
    </InfoPage>
  );
}
