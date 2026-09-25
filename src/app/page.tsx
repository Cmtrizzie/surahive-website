import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { WhatWeBuild } from "@/components/home/WhatWeBuild";
import { TechnologyFoundation } from "@/components/home/TechnologyFoundation";
import { PlatformPreview } from "@/components/home/PlatformPreview";
import { Developers } from "@/components/home/Developers";
import { ResponsibleTechnology } from "@/components/home/ResponsibleTechnology";
import { AboutPreview } from "@/components/home/AboutPreview";
import { FinalCTA } from "@/components/home/FinalCTA";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: `${siteConfig.name} — Build with intelligence. Create what comes next.`,
  },
  description: siteConfig.description,
  alternates: {
    canonical: "/",
  },
};

/** Organization structured data — only verified, non-invented facts. */
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  legalName: siteConfig.legalName,
  url: siteConfig.domain,
  logo: `${siteConfig.domain}/brand/logo.svg`,
  description: siteConfig.description,
  slogan: siteConfig.tagline,
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <Hero />
      <WhatWeBuild />
      <TechnologyFoundation />
      <PlatformPreview />
      <Developers />
      <ResponsibleTechnology />
      <AboutPreview />
      <FinalCTA />
    </>
  );
}
