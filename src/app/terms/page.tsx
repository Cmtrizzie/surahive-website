import type { Metadata } from "next";
import { LegalPage, type LegalSection } from "@/components/layout/LegalPage";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms governing use of the surahive.com website.",
  alternates: {
    canonical: "/terms",
  },
};

const email = siteConfig.contactEmail || "the contact email published on our Contact page";
const domainName = siteConfig.domain.replace("https://", "");

const sections: LegalSection[] = [
  {
    heading: "1. Overview",
    paragraphs: [
      `These Terms govern your use of the ${domainName} website, operated by ${siteConfig.legalName} ("SuraHive AI", "we", "us").`,
      "These Terms are a general framework at the company's current stage. They do not include commercial terms, subscription conditions or service guarantees, and they will be replaced with final legal language as SuraHive AI products and services are introduced.",
    ],
  },
  {
    heading: "2. About the website",
    paragraphs: [
      "The website presents information about SuraHive AI, its focus areas and its technology direction. It is informational and does not currently provide accounts, transactions, application functionality or paid services.",
    ],
  },
  {
    heading: "3. Intellectual property",
    paragraphs: [
      `The website — including its design, text and branding — is the property of ${siteConfig.legalName} or its licensors. SuraHive, SuraHive AI and associated branding may not be used without permission.`,
      "You may view, download and share pages of this website for personal, non-commercial reference, provided that ownership notices are respected.",
    ],
  },
  {
    heading: "4. Acceptable use",
    paragraphs: [
      "When using this website, you agree not to misuse it — including interfering with its operation, attempting unauthorized access, or using it in a way that violates applicable law or the rights of others.",
    ],
  },
  {
    heading: "5. No warranties",
    paragraphs: [
      "The website is provided on an \"as is\" and \"as available\" basis. While we aim to keep its content accurate and current, we do not guarantee that it is complete, accurate or uninterrupted.",
    ],
  },
  {
    heading: "6. Limitation of liability",
    paragraphs: [
      "To the extent permitted by applicable law, SuraHive AI is not liable for indirect or consequential losses arising from your use of, or inability to use, this website.",
    ],
  },
  {
    heading: "7. Third-party links",
    paragraphs: [
      "The website may reference third-party resources. We do not control third-party websites and are not responsible for their content or practices.",
    ],
  },
  {
    heading: "8. Changes to these terms",
    paragraphs: [
      "These Terms may be updated from time to time. The latest version will always be published on this page, and continued use of the website after an update constitutes acceptance of the updated Terms.",
    ],
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms of Use"
      updated="September 2026"
      notice="These Terms set out a general framework for using the SuraHive AI website."
      sections={sections}
      contactLine={`Questions about these Terms can be sent to ${email}.`}
    />
  );
}
