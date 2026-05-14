import { InfoCard, InfoPage } from "@/components/InfoPage";

export const metadata = {
  title: "Terms of Service. Afterglow.",
};

export default function TermsPage() {
  return (
    <InfoPage
      eyebrow="Terms of Service"
      title="The agreement we share."
      subtitle="This is a plain-language summary of the terms that apply to anyone using Afterglow. A complete legal Terms of Service will appear here before launch."
    >
      <InfoCard title="Who can use Afterglow">
        <p>
          You must be 18 or older to use Afterglow. By creating an account
          you confirm that you meet this requirement and that the information
          you provide about yourself is honest.
        </p>
      </InfoCard>

      <InfoCard title="What we offer, and what we do not">
        <p>
          Afterglow helps you meet other people who could be a real fit. We
          do not guarantee matches, dates, relationships, or outcomes of any
          kind. Members are responsible for their own choices, including
          offline meetings.
        </p>
        <p>
          Paid membership supports our work and helps keep the space
          intentional. It does not guarantee safety, authenticity, or
          successful outcomes.
        </p>
      </InfoCard>

      <InfoCard title="Community standards and account actions">
        <p>
          By using Afterglow you agree to our{" "}
          <a className="underline" href="/standards">
            Community Intent Standards
          </a>
          . Accounts that repeatedly violate these standards may be reviewed,
          limited, or removed. Reviews are quiet, considered, and never used
          as public callouts.
        </p>
      </InfoCard>

      <InfoCard title="Limitation of liability">
        <p>
          Afterglow is provided as a service, and your use of it is at your
          own risk. To the maximum extent permitted by law, Afterglow is not
          responsible for the conduct of other members, for offline meetings,
          or for outcomes that follow your decisions inside or outside the
          app.
        </p>
        <p className="text-xs text-plum-500">
          This page is illustrative. Final terms language will be reviewed by
          legal counsel before public launch.
        </p>
      </InfoCard>
    </InfoPage>
  );
}
