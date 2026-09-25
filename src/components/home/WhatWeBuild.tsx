import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { capabilities } from "@/lib/content";

/**
 * "What SuraHive Builds" — exactly four capability cards.
 * No product names, pricing, statistics or customer logos.
 */
export function WhatWeBuild() {
  return (
    <Section className="bg-white">
      <Container>
        <SectionHeading
          eyebrow="Capabilities"
          title="Technology built to move ideas forward."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((cap, i) => (
            <Reveal key={cap.id} delay={i * 70} className="h-full">
              <article className="group relative flex h-full flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-brand-violet/30 hover:shadow-md">
                <span
                  aria-hidden="true"
                  className="absolute right-5 top-5 font-mono text-xs text-slate-300"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="mb-5 inline-flex size-11 items-center justify-center rounded-lg bg-navy-900 text-brand-cyan">
                  <cap.icon aria-hidden="true" className="size-5" />
                </div>
                <h3 className="text-base font-semibold text-navy-900">
                  {cap.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {cap.short}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
