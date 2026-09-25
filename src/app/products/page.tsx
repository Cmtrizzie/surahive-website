import type { Metadata } from "next";
import { Info } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { CTASection } from "@/components/CTASection";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ProductGrid } from "@/components/products/ProductGrid";
import { capabilities } from "@/lib/content";

export const metadata: Metadata = {
  title: "Products",
  description:
    "What SuraHive AI builds — AI products, developer technology, intelligent platforms and automation.",
  alternates: {
    canonical: "/products",
  },
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title="What we build."
        lede="SuraHive AI builds intelligent software, AI systems, and technology platforms for people, developers, and businesses."
      >
        <Reveal delay={120}>
          <p className="mt-6 flex max-w-2xl items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 text-sm leading-6 text-slate-600 shadow-sm">
            <Info
              aria-hidden="true"
              className="mt-0.5 size-4 shrink-0 text-brand-cyan-strong"
            />
            <span>
              SuraHive AI is actively building across its four focus areas.
              This page is where public product announcements will appear
              first.
            </span>
          </p>
        </Reveal>
      </PageHero>

      <Section className="bg-white" aria-label="Focus areas overview">
        <Container>
          <ProductGrid
            items={capabilities.map((cap) => ({
              icon: cap.icon,
              title: cap.title,
              description: cap.short,
              href: `#${cap.id}`,
              linkLabel: "Learn more",
            }))}
          />
        </Container>
      </Section>

      {capabilities.map((cap, i) => (
        <Section
          key={cap.id}
          id={cap.id}
          aria-labelledby={`${cap.id}-heading`}
          className={
            i % 2 === 1
              ? "border-t border-slate-200/70 bg-white"
              : "border-t border-slate-200/70"
          }
        >
          <Container>
            <div className="grid gap-8 lg:grid-cols-[9rem_1fr] lg:gap-12">
              <div
                aria-hidden="true"
                className="font-mono text-sm text-slate-400"
              >
                {String(i + 1).padStart(2, "0")}
              </div>
              <Reveal className="max-w-2xl">
                <div className="flex items-center gap-4">
                  <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-lg bg-navy-900 text-brand-cyan">
                    <cap.icon aria-hidden="true" className="size-5" />
                  </span>
                  <h2
                    id={`${cap.id}-heading`}
                    className="text-2xl font-semibold tracking-tight text-navy-900 sm:text-3xl"
                  >
                    {cap.title}
                  </h2>
                </div>
                <p className="mt-5 text-pretty leading-7 text-slate-600">
                  {cap.detail}
                </p>
                <ul className="mt-6 space-y-3">
                  {cap.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-3 text-sm leading-6 text-slate-600"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-2 size-1.5 shrink-0 rotate-45 bg-brand-cyan-strong"
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </Container>
        </Section>
      ))}

      <CTASection
        eyebrow="Products"
        title="Follow what we are building."
        text="The team is actively building — this page is where new SuraHive products will appear first. In the meantime, we would like to hear from you."
        primary={{ label: "Contact SuraHive", href: "/contact" }}
        secondary={{ label: "Explore the Platform", href: "/platform" }}
      />
    </>
  );
}
