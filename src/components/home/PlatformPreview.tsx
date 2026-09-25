import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PlatformWindow } from "@/components/visuals/PlatformWindow";

/**
 * "Platform Preview" — one conceptual SuraHive platform interface.
 * Clearly labeled as a concept; contains no fabricated metrics,
 * users, revenue, uptime or customer data.
 */
export function PlatformPreview() {
  return (
    <Section className="bg-white" aria-labelledby="platform-preview-heading">
      <Container>
        <SectionHeading
          eyebrow="Platform"
          title="Built for intelligent software."
          lede="A conceptual look at the SuraHive platform — the layer where projects, AI activity, automation and developer tools come together."
        />

        <Reveal delay={140} className="mt-14">
          <PlatformWindow className="mx-auto max-w-4xl" />
          <p className="mt-5 text-center text-xs text-slate-500">
            Conceptual preview — the SuraHive platform has not launched yet.
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
