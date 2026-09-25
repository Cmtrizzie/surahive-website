import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { responsiblePrinciples } from "@/lib/content";

export const metadata: Metadata = {
  title: "Responsible AI",
  description:
    "SuraHive AI's approach to responsible technology — privacy, security, human oversight, data responsibility and transparency.",
  alternates: {
    canonical: "/responsible-ai",
  },
};

export default function ResponsibleAIPage() {
  return (
    <>
      <PageHero
        eyebrow="Responsible AI"
        title="Technology with responsibility built in."
        lede="SuraHive AI develops technology thoughtfully. These principles describe how responsibility is approached across the company's work — kept general and factual at this stage."
      />

      <Section className="bg-white" aria-label="Principles">
        <Container>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {responsiblePrinciples.map((principle, i) => (
              <Reveal key={principle.title} delay={i * 60} className="h-full">
                <article className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-brand-violet/30 hover:shadow-md">
                  <div className="mb-4 inline-flex size-11 items-center justify-center rounded-full bg-brand-violet/10 text-brand-violet">
                    <principle.icon aria-hidden="true" className="size-5" />
                  </div>
                  <h2 className="text-base font-semibold text-navy-900">
                    {principle.title}
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {principle.text}
                  </p>
                </article>
              </Reveal>
            ))}

            {/* Commitment tile */}
            <Reveal delay={responsiblePrinciples.length * 60} className="h-full">
              <article className="flex h-full flex-col rounded-xl bg-navy-900 p-6 shadow-md">
                <h2 className="text-base font-semibold text-white">
                  In practice
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  As SuraHive AI products and services are introduced, this
                  page will be updated with more detail on how these
                  principles are applied.
                </p>
                <Link
                  href="/contact"
                  className="mt-auto inline-flex w-fit items-center pt-4 text-sm font-medium text-brand-cyan transition-colors hover:text-white"
                >
                  Questions? Contact SuraHive
                </Link>
              </article>
            </Reveal>
          </div>

          <Reveal delay={140} className="mt-10">
            <p className="mx-auto max-w-2xl text-center text-sm leading-6 text-slate-500">
              This page describes SuraHive AI's approach at a general level.
              Detailed policies will be published as the company's products
              and services are introduced.
            </p>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
