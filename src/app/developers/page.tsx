import type { Metadata } from "next";
import { Braces, FileText, Terminal, Wrench } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { CTASection } from "@/components/CTASection";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { CodeWindow } from "@/components/visuals/CodeWindow";

export const metadata: Metadata = {
  title: "Developers",
  description:
    "Developer resources and technology from SuraHive AI — tools, APIs and documentation as they become publicly available.",
  alternates: {
    canonical: "/developers",
  },
};

const resources = [
  {
    icon: Terminal,
    title: "APIs",
    badge: "Not yet available",
    text: "SuraHive does not currently offer public APIs. When developer APIs become available, documentation and access details will be published on this page.",
  },
  {
    icon: Wrench,
    title: "Tools",
    badge: "In development",
    text: "Developer tools and technology for building intelligent applications are being developed. Public tools will be announced here first.",
  },
  {
    icon: FileText,
    title: "Documentation",
    badge: "Planned",
    text: "Guides and reference documentation will be published alongside SuraHive developer products, so developers have what they need from day one.",
  },
];

/**
 * Developers page — honest about the current stage:
 * no fake API documentation, keys, signups or SDK syntax.
 */
export default function DevelopersPage() {
  return (
    <>
      <PageHero
        eyebrow="Developers"
        title="Build with SuraHive."
        lede="Developer resources and technology from SuraHive AI. This page will grow as SuraHive developer products become publicly available."
      />

      <Section className="bg-white" aria-labelledby="dev-tech-heading">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                <span
                  aria-hidden="true"
                  className="inline-block size-1.5 rotate-45 bg-brand-cyan"
                />
                Developer technology
              </p>
              <h2
                id="dev-tech-heading"
                className="mt-3 text-balance text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl"
              >
                Technology for building intelligent applications.
              </h2>
              <p className="mt-4 text-pretty leading-7 text-slate-600 sm:text-lg sm:leading-8">
                SuraHive is developing tools and technology that help
                developers move from idea to intelligent application with less
                friction — designed to stay out of the way and let good
                engineering speak for itself.
              </p>
              <p className="mt-4 text-pretty leading-7 text-slate-600">
                The illustration above is conceptual. As real developer
                products mature, this page will document them properly — with
                genuine syntax, genuine references and nothing invented.
              </p>
            </Reveal>

            <Reveal delay={140}>
              <CodeWindow className="mx-auto w-full max-w-lg" />
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section aria-labelledby="resources-heading">
        <Container>
          <Reveal className="max-w-2xl">
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              <span
                aria-hidden="true"
                className="inline-block size-1.5 rotate-45 bg-brand-cyan"
              />
              Resources
            </p>
            <h2
              id="resources-heading"
              className="mt-3 text-balance text-3xl font-semibold tracking-tight text-navy-900"
            >
              What is coming, and when.
            </h2>
            <p className="mt-4 text-pretty leading-7 text-slate-600">
              SuraHive keeps this page accurate to the current stage. When a
              resource becomes publicly available, its status changes here.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {resources.map((resource, i) => (
              <Reveal key={resource.title} delay={i * 70} className="h-full">
                <article className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-brand-cyan/40 hover:shadow-md">
                  <div className="flex items-center justify-between gap-3">
                    <span className="inline-flex size-11 items-center justify-center rounded-lg bg-navy-900 text-brand-cyan">
                      <resource.icon aria-hidden="true" className="size-5" />
                    </span>
                    <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-brand-violet/30 bg-brand-violet/5 px-2.5 py-1 text-[11px] font-medium text-brand-violet">
                      <span
                        aria-hidden="true"
                        className="size-1.5 rounded-full bg-brand-violet"
                      />
                      {resource.badge}
                    </span>
                  </div>
                  <h3 className="mt-5 text-base font-semibold text-navy-900">
                    {resource.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {resource.text}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120} className="mt-10">
            <p className="flex max-w-2xl items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 text-sm leading-6 text-slate-600 shadow-sm">
              <Braces
                aria-hidden="true"
                className="mt-0.5 size-4 shrink-0 text-brand-cyan-strong"
              />
              <span>
                SuraHive does not publish API keys, developer accounts or
                signup flows before real developer products exist.
              </span>
            </p>
          </Reveal>
        </Container>
      </Section>

      <CTASection
        eyebrow="Developers"
        title="Start a conversation."
        text="Questions about building with SuraHive technology? Reach out — developer enquiries go straight to the team."
        primary={{ label: "Contact SuraHive", href: "/contact" }}
        secondary={{ label: "Explore the Platform", href: "/platform" }}
      />
    </>
  );
}
