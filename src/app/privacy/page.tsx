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
      `${siteConfig.legalName} ("SuraHive AI", "we", "us") is committed to protecting your privacy. This Privacy Statement outlines how we handle data on ${siteConfig.domain.replace("https://", "")} in accordance with applicable regulations, including the Uganda Data Protection and Privacy Act, 2019.`,
      "This statement is intentionally general at the company's current stage. It will be replaced with detailed, counsel-approved privacy language as SuraHive AI products and services are introduced.",
    ],
  },
  {
    heading: "2. Information we collect",
    paragraphs: [
      "We do not collect personal information unless you voluntarily provide it (e.g., via email). However, standard server logs (such as IP addresses and browser details) are processed automatically for security and network performance.",
      "When you contact us by email, we collect your name, email address, and any content included in your message.",
    ],
  },
  {
    heading: "3. How we use information",
    paragraphs: [
      "Information you send us by email is used to read and respond to your enquiry. We do not sell personal information, and we do not use enquiry emails for marketing without your consent.",
      "The legal basis for processing email inquiries is legitimate interest in responding to your communications.",
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
      "We retain inquiry emails only for as long as necessary to address your request or fulfill legal obligations. Typically, this is up to 12 months unless a business relationship is established.",
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
      "Depending on your jurisdiction, you have the right to access, correct, or request deletion of your personal data, and to withdraw consent for processing at any time.",
      `To exercise these rights, contact us at ${email}.`,
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
