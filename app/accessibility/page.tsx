import { InfoCard, InfoPage } from "@/components/InfoPage";

export const metadata = {
  title: "Accessibility. Afterglow.",
};

export default function AccessibilityPage() {
  return (
    <InfoPage
      eyebrow="Accessibility"
      title="Designed to be quietly usable."
      subtitle="Afterglow is built with accessible defaults. We are committed to improving over time and welcome feedback."
    >
      <InfoCard title="What we do today">
        <ul className="space-y-2.5">
          <li>
            <strong className="text-burgundy-700">Color contrast.</strong> Body
            text uses a warm plum color on light backgrounds, with burgundy
            for headings. Contrast targets aim for WCAG AA at minimum.
          </li>
          <li>
            <strong className="text-burgundy-700">Keyboard.</strong> All
            interactive controls are reachable by keyboard, with visible focus
            rings.
          </li>
          <li>
            <strong className="text-burgundy-700">Motion.</strong> Background
            orbs and transitions respect prefers-reduced-motion.
          </li>
          <li>
            <strong className="text-burgundy-700">Touch targets.</strong>{" "}
            Buttons aim for a minimum of 40 pixels tall to stay
            thumb-friendly on mobile.
          </li>
        </ul>
      </InfoCard>

      <InfoCard title="What we are still working on">
        <p>
          Screen reader audits, dynamic type support, and additional
          accessibility testing are part of our roadmap.
        </p>
        <p>
          If you encounter an accessibility issue, please write to{" "}
          <strong className="text-burgundy-700">access@afterglow.app</strong>.
          We treat accessibility as part of safety.
        </p>
      </InfoCard>
    </InfoPage>
  );
}
