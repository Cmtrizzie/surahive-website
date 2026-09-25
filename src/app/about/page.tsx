import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProductGrid } from "@/components/products/ProductGrid";
import { capabilities } from "@/lib/content";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "About SuraHive AI LTD — a technology company building intelligent software, AI systems and digital platforms.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="SuraHive AI LTD"
        lede={`${siteConfig.name} is a technology company building intelligent software, AI systems and digital platforms.`}
      />

      {/* What we build */}
      <Section className="bg-white" aria-labelledby="about-build-heading">
        <Container>
          <SectionHeading
            eyebrow="What we build"
            title="Four connected areas of focus."
            lede="SuraHive concentrates its technology work in four connected areas — each one an active build, shaped by practical problems worth solving."
          />
          <Reveal delay={120} className="mt-12">
            <ProductGrid
              items={capabilities.map((cap) => ({
                icon: cap.icon,
                title: cap.title,
                description: cap.short,
              }))}
            />
          </Reveal>
        </Container>
      </Section>

      {/* Mission */}
      <Section aria-labelledby="mission-heading">
        <Container className="max-w-3xl">
          <Reveal>
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              <span
                aria-hidden="true"
                className="inline-block size-1.5 rotate-45 bg-brand-cyan"
              />
              Mission
            </p>
            <h2
              id="mission-heading"
              className="mt-3 text-balance text-3xl font-semibold tracking-tight text-navy-900"
            >
              Help people and businesses move ideas forward.
            </h2>
            <p className="mt-4 text-pretty leading-7 text-slate-600 sm:text-lg sm:leading-8">
              SuraHive exists to build intelligent technology that solves
              practical problems — software that is useful, dependable and
              worth trusting. The brand says it plainly: open innovation,
              built to scale.
            </p>
          </Reveal>
        </Container>
      </Section>

      {/* Technology direction */}
      <Section
        className="border-t border-slate-200/70 bg-white"
        aria-labelledby="direction-heading"
      >
        <Container className="max-w-3xl">
          <Reveal>
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              <span
                aria-hidden="true"
                className="inline-block size-1.5 rotate-45 bg-brand-cyan"
              />
              Technology direction
            </p>
            <h2
              id="direction-heading"
              className="mt-3 text-balance text-3xl font-semibold tracking-tight text-navy-900"
            >
              Where the technology is heading.
            </h2>
            <p className="mt-4 text-pretty leading-7 text-slate-600 sm:text-lg sm:leading-8">
              SuraHive is focused on AI products, developer technology,
              intelligent platforms and automation — connected by one
              technology foundation. As the company grows, its direction will
              keep being shaped by practical problems worth solving, not by
              trends.
            </p>
            <p className="mt-4 text-pretty leading-7 text-slate-600">
              Responsibility is part of that direction: privacy, security and
              human oversight are treated as inputs to how technology is
              designed, not as afterthoughts.
            </p>
            <Link
              href="/responsible-ai"
              className="mt-6 inline-flex h-11 items-center justify-center rounded-md border border-slate-300 bg-white px-6 text-sm font-medium text-navy-900 shadow-xs transition-colors hover:border-navy-900 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
            >
              Our approach to responsible technology
            </Link>
          </Reveal>
        </Container>
      </Section>

      {/* Uganda */}
      <Section aria-labelledby="uganda-heading">
        <Container className="max-w-3xl">
          <Reveal>
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              <span
                aria-hidden="true"
                className="inline-block size-1.5 rotate-45 bg-brand-cyan"
              />
              Uganda
            </p>
            <h2
              id="uganda-heading"
              className="mt-3 flex flex-wrap items-center gap-3 text-balance text-3xl font-semibold tracking-tight text-navy-900"
            >
              <MapPin
                aria-hidden="true"
                className="size-7 shrink-0 text-brand-violet"
              />
              Building from Uganda for a connected world.
            </h2>
            <p className="mt-4 text-pretty leading-7 text-slate-600 sm:text-lg sm:leading-8">
              SuraHive AI LTD is a Uganda-based technology company. Uganda is
              where the company is from; the ambition is global — technology
              that serves people, developers and businesses anywhere.
            </p>
          </Reveal>
        </Container>
      </Section>

      {/* Contact */}
      <Section
        className="border-t border-slate-200/70 bg-white"
        aria-labelledby="about-contact-heading"
      >
        <Container className="max-w-3xl">
          <Reveal>
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              <span
                aria-hidden="true"
                className="inline-block size-1.5 rotate-45 bg-brand-cyan"
              />
              Contact
            </p>
            <h2
              id="about-contact-heading"
              className="mt-3 text-balance text-3xl font-semibold tracking-tight text-navy-900"
            >
              Talk to SuraHive AI.
            </h2>
            <div className="mt-6 flex flex-col gap-4 rounded-xl border border-slate-200 bg-soft p-6 shadow-sm sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-3">
                <Mail
                  aria-hidden="true"
                  className="mt-0.5 size-5 shrink-0 text-brand-cyan-strong"
                />
                <div>
                  <p className="text-sm font-semibold text-navy-900">Email</p>
                  <p className="mt-0.5 break-all text-sm text-slate-600">
                    {siteConfig.contactEmail || "Contact email available soon"}
                  </p>
                </div>
              </div>
              <Link
                href="/contact"
                className="inline-flex h-10 shrink-0 items-center justify-center rounded-md bg-navy-900 px-5 text-sm font-medium text-white shadow-xs transition-colors hover:bg-navy-800 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
              >
                Contact page
              </Link>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
