import { InfoCard, InfoPage } from "@/components/InfoPage";

export const metadata = {
  title: "About. Afterglow.",
  description:
    "Afterglow is a relationship-focused app for people seeking real connection.",
};

export default function AboutPage() {
  return (
    <InfoPage
      eyebrow="About Afterglow"
      title="A calmer way to meet."
      subtitle="Afterglow was built for people who would rather build something than perform something. We are a small team designing for emotional depth, slow dating, and real connection."
    >
      <InfoCard title="Our why">
        <p>
          Most dating apps optimize for time inside the feed. We optimize for
          time outside of it. We want you to spend less time scrolling and
          more time meeting people who could actually fit the life you are
          building.
        </p>
        <p>
          Afterglow is designed around one-to-one long-term partnership. The
          onboarding asks more thoughtful questions. The matches are small in
          number and rich in context. The chat is calm by design.
        </p>
      </InfoCard>

      <InfoCard title="What we believe" eyebrow="Principles">
        <ul className="space-y-2.5">
          <li>
            <strong className="text-burgundy-700">Depth over volume.</strong>{" "}
            Five thoughtful matches a day, not five hundred.
          </li>
          <li>
            <strong className="text-burgundy-700">Emotional safety.</strong>{" "}
            Tone is part of the experience.
          </li>
          <li>
            <strong className="text-burgundy-700">Private by default.</strong>{" "}
            Broad regions only. No map, no live distance.
          </li>
          <li>
            <strong className="text-burgundy-700">Real reflection.</strong>{" "}
            Long-form prompts that introduce you in your own voice.
          </li>
        </ul>
      </InfoCard>

      <InfoCard title="Press, blog, investors" eyebrow="More from Afterglow">
        <p id="press">
          Press inquiries can reach us through the{" "}
          <a className="underline" href="/contact">
            contact page
          </a>
          . A media kit will be available here as we approach a public
          release.
        </p>
        <p id="blog">
          Our editorial blog will live here, with short essays on intentional
          dating, emotional safety, and queer-friendly relationship design.
          Coming soon.
        </p>
        <p id="investors">
          Investor inquiries are welcome through the contact page. We will
          publish information about our company, fundraising history, and
          product roadmap here as it becomes appropriate.
        </p>
      </InfoCard>
    </InfoPage>
  );
}
