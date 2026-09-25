import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

const focusChips = ["Intelligent software", "AI systems", "Digital platforms"];

/**
 * "About SuraHive" preview — factual, no invented history,
 * founders, funding, offices or customers.
 */
export function AboutPreview() {
  return (
    <Section aria-labelledby="about-heading">
      <Container className="max-w-3xl text-center">
        <Reveal>
          <p className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            <span
              aria-hidden="true"
              className="inline-block size-1.5 rotate-45 bg-brand-cyan"
            />
            About SuraHive AI
          </p>
          <h2
            id="about-heading"
            className="mt-3 text-balance text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl"
          >
            Building from Uganda for a connected world.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            SuraHive AI LTD is a technology company building intelligent
            software, AI systems and digital platforms.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            {focusChips.map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-xs font-medium text-slate-600"
              >
                {chip}
              </span>
            ))}
          </div>
          <Button asChild size="lg" className="mt-8 h-11 px-6">
            <Link href="/about">
              About SuraHive
              <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
          </Button>
        </Reveal>
      </Container>
    </Section>
  );
}
