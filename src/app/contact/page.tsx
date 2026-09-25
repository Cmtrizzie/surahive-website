import type { Metadata } from "next";
import {
  Briefcase,
  Handshake,
  Mail,
  Terminal,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { contactCategories, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact SuraHive AI — general, business, developer and partnership enquiries.",
  alternates: {
    canonical: "/contact",
  },
};

const categoryIcons: Record<string, LucideIcon> = {
  general: Mail,
  business: Briefcase,
  developer: Terminal,
  partnership: Handshake,
};

/**
 * Contact page — a simple, honest email mechanism driven entirely by
 * `siteConfig.contactEmail`. No CRM, chatbot or backend contact system.
 */
export default function ContactPage() {
  const email = siteConfig.contactEmail;

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Contact SuraHive AI"
        lede="Choose the category that best fits your enquiry — it helps the team respond well."
      />

      <Section aria-label="Contact categories">
        <Container>
          <div className="grid gap-4 sm:grid-cols-2">
            {contactCategories.map((category, i) => {
              const Icon = categoryIcons[category.id] ?? Mail;
              const mailto = email
                ? `mailto:${email}?subject=${encodeURIComponent(category.subject)}`
                : null;

              return (
                <Reveal key={category.id} delay={i * 70} className="h-full">
                  <article className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-brand-cyan/40 hover:shadow-md">
                    <span className="inline-flex size-11 items-center justify-center rounded-lg bg-navy-900 text-brand-cyan">
                      <Icon aria-hidden="true" className="size-5" />
                    </span>
                    <h2 className="mt-5 text-base font-semibold text-navy-900">
                      {category.title}
                    </h2>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {category.description}
                    </p>
                    <div className="mt-auto pt-5 space-y-3">
                      {mailto ? (
                        <>
                          <a
                            href={mailto}
                            className="inline-flex h-10 items-center justify-center rounded-md border border-slate-300 bg-white px-5 text-sm font-medium text-navy-900 shadow-xs transition-colors hover:border-navy-900 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
                          >
                            Email SuraHive
                          </a>
                          <p className="text-xs text-slate-500">
                            Or email directly: <a href={`mailto:${email}`} className="font-mono text-brand-cyan-strong hover:underline">{email}</a>
                          </p>
                        </>
                      ) : (
                        <p className="text-sm text-slate-500">
                          Contact email will be published here.
                        </p>
                      )}
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={140} className="mt-12">
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-sm font-semibold text-navy-900">
                Prefer plain email?
              </h2>
              {email ? (
                <>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    All enquiries reach the same inbox:
                  </p>
                  <a
                    href={`mailto:${email}`}
                    className="mt-1 inline-block break-all rounded-sm font-mono text-sm font-medium text-brand-cyan-strong underline-offset-4 hover:underline"
                  >
                    {email}
                  </a>
                </>
              ) : (
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  The SuraHive AI contact email will be published here.
                </p>
              )}
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
