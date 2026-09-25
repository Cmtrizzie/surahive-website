import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { principles } from "@/lib/content";

/**
 * "Responsible Technology" — exactly four principles.
 * No claims of certifications, audits or regulatory compliance.
 */
export function ResponsibleTechnology() {
  return (
    <Section className="bg-white" aria-labelledby="responsible-heading">
      <Container>
        <SectionHeading
          eyebrow="Responsible technology"
          title="Technology with responsibility built in."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((principle, i) => (
            <Reveal key={principle.title} delay={i * 70} className="h-full">
              <article className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-brand-cyan/40 hover:shadow-md">
                <div className="mb-4 inline-flex size-10 items-center justify-center rounded-full bg-brand-violet/10 text-brand-violet">
                  <principle.icon aria-hidden="true" className="size-5" />
                </div>
                <h3 className="text-base font-semibold text-navy-900">
                  {principle.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {principle.text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={140} className="mt-10 text-center">
          <Button asChild variant="outline" size="lg" className="h-11 border-slate-300 bg-white px-6 hover:border-navy-900">
            <Link href="/responsible-ai">
              Our approach
              <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
          </Button>
        </Reveal>
      </Container>
    </Section>
  );
}
