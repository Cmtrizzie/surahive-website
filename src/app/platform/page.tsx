import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { CTASection } from "@/components/CTASection";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  Code2,
  Layers,
  Workflow,
  Sparkles,
  AppWindow,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Platform",
  description:
    "The SuraHive technology foundation — AI, software, automation and digital infrastructure for building intelligent products.",
  alternates: {
    canonical: "/platform",
  },
};

const layers = [
  {
    icon: Sparkles,
    title: "AI",
    text: "SuraHive treats AI as a practical layer of its technology — systems designed to understand, reason and help, developed with responsible-use principles and human oversight in mind.",
  },
  {
    icon: Code2,
    title: "Software",
    text: "Well-crafted applications and services turn intelligence into products people can actually use. The software layer is where SuraHive technology becomes tangible.",
  },
  {
    icon: Workflow,
    title: "Automation",
    text: "Automation connects steps, systems and decisions into dependable workflows — reducing manual effort while keeping meaningful human control where it matters.",
  },
  {
    icon: Layers,
    title: "Digital Infrastructure",
    text: "The data and core technology beneath it all — designed with care so that what SuraHive builds can grow reliably over time.",
  },
];

/**
 * Conceptual layer diagram shown under the hero.
 */
function LayerDiagram() {
  return (
    <div
      className="mx-auto mt-14 max-w-3xl space-y-3"
      role="img"
      aria-label="Layer diagram: the application layer sits on top of AI, software and automation, which sit on digital infrastructure"
    >
      <div className="rounded-xl border-2 border-dashed border-brand-cyan/40 bg-white/60 p-5 text-center">
        <p className="flex items-center justify-center gap-2 text-sm font-semibold text-navy-900">
          <AppWindow aria-hidden="true" className="size-4 text-brand-cyan-strong" />
          Application Layer
        </p>
        <p className="mt-1 text-xs text-slate-500">
          Where SuraHive products and interfaces live
        </p>
      </div>

      <div className="grid gap-3 sm:grid-cols-3">
        {[
          { title: "AI", caption: "Intelligence that powers what we build" },
          { title: "Software", caption: "Applications and services" },
          { title: "Automation", caption: "Workflows that act and adapt" },
        ].map((item) => (
          <div
            key={item.title}
            className="rounded-xl border border-slate-200 bg-white p-5 text-center shadow-sm"
          >
            <p className="text-sm font-semibold text-navy-900">{item.title}</p>
            <p className="mt-1 text-xs leading-5 text-slate-500">{item.caption}</p>
          </div>
        ))}
      </div>

      <div className="rounded-xl bg-navy-900 p-5 text-center shadow-lg shadow-navy-900/20">
        <p className="text-sm font-semibold text-white">Digital Infrastructure</p>
        <p className="mt-1 text-xs leading-5 text-slate-400">
          Data and core technology underneath it all
        </p>
      </div>
    </div>
  );
}

export default function PlatformPage() {
  return (
    <>
      <PageHero
        eyebrow="Platform"
        title="One foundation for intelligent software."
        lede="The SuraHive platform is the technology foundation behind what we build — bringing AI, software, automation and digital technology together in one coherent concept."
      />

      <Section className="bg-white" aria-label="Platform layers diagram">
        <Container>
          <Reveal>
            <LayerDiagram />
          </Reveal>
        </Container>
      </Section>

      <Section aria-labelledby="layers-heading">
        <Container>
          <SectionHeading
            eyebrow="Technology layers"
            title="How the foundation fits together."
            lede="A conceptual view of the SuraHive technology direction. Specific technical specifications are not published at this stage."
          />

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {layers.map((layer, i) => (
              <Reveal key={layer.title} delay={i * 70} className="h-full">
                <article className="flex h-full gap-4 rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-brand-violet/30 hover:shadow-md">
                  <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-lg bg-navy-900 text-brand-cyan">
                    <layer.icon aria-hidden="true" className="size-5" />
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-navy-900">
                      {layer.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {layer.text}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section
        className="border-t border-slate-200/70 bg-white"
        aria-labelledby="application-layer-heading"
      >
        <Container className="max-w-3xl">
          <Reveal>
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              <span
                aria-hidden="true"
                className="inline-block size-1.5 rotate-45 bg-brand-cyan"
              />
              Application layer
            </p>
            <h2
              id="application-layer-heading"
              className="mt-3 text-balance text-3xl font-semibold tracking-tight text-navy-900"
            >
              Where the platform becomes tangible.
            </h2>
            <p className="mt-4 text-pretty leading-7 text-slate-600 sm:text-lg sm:leading-8">
              The application layer is where SuraHive technology meets the
              people who use it: products and interfaces, delivered as
              software. As SuraHive products launch, they will be introduced
              on the Products page.
            </p>
            <Link
              href="/products"
              className="mt-6 inline-flex h-11 items-center justify-center rounded-md bg-navy-900 px-6 text-sm font-medium text-white shadow-xs transition-colors hover:bg-navy-800 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
            >
              Explore Products
            </Link>
          </Reveal>
        </Container>
      </Section>

      <CTASection
        eyebrow="Platform"
        title="A foundation, built to scale."
        text="Explore how SuraHive thinks about technology, products and responsible building."
        primary={{ label: "Explore Products", href: "/products" }}
        secondary={{ label: "Contact SuraHive", href: "/contact" }}
      />
    </>
  );
}
