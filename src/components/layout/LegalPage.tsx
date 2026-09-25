import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export type LegalSection = {
  heading: string;
  paragraphs: string[];
};

type LegalPageProps = {
  eyebrow: string;
  title: string;
  updated: string;
  notice: string;
  sections: LegalSection[];
  contactLine: string;
};

/**
 * Clean legal-document structure shared by /privacy and /terms.
 * Content is intentionally general and easy to replace with
 * counsel-approved language.
 */
export function LegalPage({
  eyebrow,
  title,
  updated,
  notice,
  sections,
  contactLine,
}: LegalPageProps) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} lede={notice}>
        <p className="mt-4 font-mono text-xs uppercase tracking-[0.16em] text-slate-500">
          Last updated: {updated}
        </p>
      </PageHero>

      <Section aria-label={`${title} content`}>
        <Container className="max-w-3xl">
          {sections.map((section, i) => (
            <Reveal key={section.heading} delay={Math.min(i, 3) * 40}>
              <section className="border-b border-slate-200/70 py-8 first:pt-0 last:border-b-0">
                <h2 className="text-xl font-semibold tracking-tight text-navy-900">
                  {section.heading}
                </h2>
                <div className="mt-3 space-y-3">
                  {section.paragraphs.map((paragraph, j) => (
                    <p
                      key={j}
                      className="leading-7 text-slate-600"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            </Reveal>
          ))}

          <Reveal className="mt-10 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm leading-6 text-slate-600">{contactLine}</p>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
