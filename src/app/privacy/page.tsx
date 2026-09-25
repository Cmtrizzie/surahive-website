import type { Metadata } from "next";
import { LegalPage, type LegalSection } from "@/components/layout/LegalPage";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How SuraHive AI approaches privacy for the surahive.com website.",
  alternates: {
    canonical: "/privacy",
  },
};

const email = siteConfig.contactEmail || "the contact email published on our Contact page";

const sections: LegalSection[] = [
  {
    heading: "1. Overview",
    paragraphs: [
      `This Privacy Statement describes how ${siteConfig.legalName} ("SuraHive AI", "we", "us") approaches privacy for the ${siteConfig.domain.replace("https://", "")} website.`,
      "This statement is intentionally general at the company's current stage. It will be replaced with detailed, counsel-approved privacy language as SuraHive AI products and services are introduced.",
    ],
  },
  {
    heading: "2. Information we collect",
    paragraphs: [
      "At this stage, the website is informational. It does not offer accounts and does not knowingly collect personal information beyond what you choose to send us — for example, when you contact us by email.",
      "Like most websites, basic technical information (such as browser type and pages visited) may be processed by hosting and infrastructure providers in order to deliver the website.",
    ],
  },
  {
    heading: "3. How we use information",
    paragraphs: [
      "Information you send us by email is used to read and respond to your enquiry. We do not sell personal information, and we do not use enquiry emails for marketing without your consent.",
    ],
  },
  {
    heading: "4. Cookies and tracking",
    paragraphs: [
      "The website does not use advertising cookies or third-party tracking at this stage. If this changes, this statement will be updated before any such use begins.",
    ],
  },
  {
    heading: "5. Data responsibility",
    paragraphs: [
      "Where we hold information — for example, emails you have sent us — we keep it only for as long as needed to handle your enquiry and to meet any applicable obligations.",
      "We treat data with care and purpose: collected with care, used for its intended purpose, and never treated as an afterthought.",
    ],
  },
  {
    heading: "6. Third-party services",
    paragraphs: [
      "The website may be delivered through hosting and infrastructure providers. Where third-party services are used, they process information only as needed to deliver the service in question.",
    ],
  },
  {
    heading: "7. Your choices",
    paragraphs: [
      `You can ask us about information you have sent us — including requests to correct or delete it — by contacting us at ${email}.`,
    ],
  },
  {
    heading: "8. Changes to this statement",
    paragraphs: [
      "This statement may be updated as the website and SuraHive AI's services evolve. The latest version will always be published on this page with an updated revision date.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      updated="September 2026"
      notice="This statement describes, in general terms, how SuraHive AI handles privacy for this website."
      sections={sections}
      contactLine={`Questions about privacy can be sent to ${email}.`}
    />
  );
}
