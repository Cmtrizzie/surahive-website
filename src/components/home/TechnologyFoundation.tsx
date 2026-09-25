import {
  ArrowDown,
  ArrowRight,
  Code2,
  Database,
  Sparkles,
  Workflow,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const inputs = [
  { icon: Sparkles, label: "AI" },
  { icon: Code2, label: "Software" },
  { icon: Workflow, label: "Automation" },
  { icon: Database, label: "Data" },
];

/**
 * "Technology Foundation" — conceptual diagram:
 * AI / Software / Automation / Data → SuraHive Technology Foundation
 * → Intelligent Applications.
 * A conceptual representation only; no deployed-infrastructure claims.
 */
export function TechnologyFoundation() {
  return (
    <Section aria-labelledby="foundation-heading">
      <Container>
        <SectionHeading
          eyebrow="Technology foundation"
          title="One technology foundation."
          lede="SuraHive brings together AI, software, automation and digital technology into a foundation for building intelligent products."
        />

        <Reveal delay={120}>
          <div
            className="mt-14 flex flex-col items-center gap-6 lg:flex-row lg:justify-center lg:gap-8"
            role="img"
            aria-label="Diagram: AI, software, automation and data flow into the SuraHive technology foundation, which powers intelligent applications"
          >
            {/* Inputs */}
            <div className="grid w-full max-w-xs grid-cols-2 gap-3 lg:w-auto lg:max-w-none">
              {inputs.map((input) => (
                <div
                  key={input.label}
                  className="flex flex-col items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-4 shadow-sm"
                >
                  <input.icon
                    aria-hidden="true"
                    className="size-5 text-brand-violet"
                  />
                  <span className="text-sm font-medium text-navy-900">
                    {input.label}
                  </span>
                </div>
              ))}
            </div>

            <ArrowDown
              aria-hidden="true"
              className="size-6 shrink-0 text-slate-400 lg:hidden"
            />
            <ArrowRight
              aria-hidden="true"
              className="hidden size-6 shrink-0 text-slate-400 lg:block"
            />

            {/* Foundation */}
            <div className="relative overflow-hidden rounded-xl bg-navy-900 px-10 py-7 text-center shadow-lg shadow-navy-900/25">
              <span
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-brand-cyan to-brand-violet"
              />
              <p className="text-base font-semibold text-white">
                SuraHive Technology Foundation
              </p>
            </div>

            <ArrowDown
              aria-hidden="true"
              className="size-6 shrink-0 text-slate-400 lg:hidden"
            />
            <ArrowRight
              aria-hidden="true"
              className="hidden size-6 shrink-0 text-slate-400 lg:block"
            />

            {/* Output */}
            <div className="rounded-xl border border-brand-cyan/40 bg-white px-10 py-7 text-center shadow-sm shadow-brand-cyan/10">
              <p className="text-base font-semibold text-navy-900">
                Intelligent Applications
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
