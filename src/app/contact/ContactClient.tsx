"use client";

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
import { useState } from "react";

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
export function ContactClient() {
  const email = siteConfig.contactEmail;
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copyToClipboard = async (text: string, id: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

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
                          <button
                            onClick={() => copyToClipboard(email, category.id)}
                            className="inline-flex h-10 items-center justify-center rounded-md border border-slate-300 bg-white px-5 text-sm font-medium text-navy-900 shadow-xs transition-colors hover:border-navy-900 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
                          >
                            {copiedId === category.id ? "Copied!" : "Copy Email Address"}
                          </button>
                          <p className="text-xs text-slate-500">
                            Email: <span className="font-mono text-brand-cyan-strong">{email}</span>
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
                Contact email
              </h2>
              {email ? (
                <>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    All enquiries reach this inbox:
                  </p>
                  <div className="mt-3 flex items-center gap-3">
                    <code className="flex-1 rounded-sm bg-slate-100 px-3 py-2 text-sm font-mono text-brand-cyan-strong">
                      {email}
                    </code>
                    <button
                      onClick={() => copyToClipboard(email, "main")}
                      className="inline-flex h-8 items-center justify-center rounded-md border border-slate-300 bg-white px-3 text-sm font-medium text-navy-900 shadow-xs transition-colors hover:border-navy-900 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
                    >
                      {copiedId === "main" ? "Copied!" : "Copy"}
                    </button>
                  </div>
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
