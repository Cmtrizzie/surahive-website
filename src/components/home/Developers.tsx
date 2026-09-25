import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CodeWindow } from "@/components/visuals/CodeWindow";

/**
 * Homepage "Developers" section — conceptual code editor visual.
 * No fake SDK syntax, API documentation or developer accounts.
 */
export function Developers() {
  return (
    <Section aria-labelledby="developers-heading">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Developers"
              title="Build with SuraHive."
              lede="Explore the technology and tools SuraHive is building for developers and intelligent applications."
            />
            <Reveal delay={120}>
              <Button asChild variant="outline" size="lg" className="mt-8 h-11 border-slate-300 bg-white px-6 hover:border-navy-900">
                <Link href="/developers">
                  Explore Developers
                  <ArrowRight aria-hidden="true" className="size-4" />
                </Link>
              </Button>
            </Reveal>
          </div>

          <Reveal delay={160}>
            <CodeWindow className="mx-auto w-full max-w-lg" />
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
