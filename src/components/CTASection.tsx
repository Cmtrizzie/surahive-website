import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

type CTAButton = { label: string; href: string };

type CTASectionProps = {
  eyebrow?: string;
  title: string;
  text: string;
  primary: CTAButton;
  secondary?: CTAButton;
  className?: string;
};

/**
 * Shared dark closing call-to-action band (Deep Navy / Near Black).
 */
export function CTASection({
  eyebrow,
  title,
  text,
  primary,
  secondary,
  className,
}: CTASectionProps) {
  return (
    <section
      className={cn("relative overflow-hidden bg-navy-950", className)}
      aria-labelledby="cta-heading"
    >
      <div
        aria-hidden="true"
        className="bg-grid-dark absolute inset-0 [mask-image:radial-gradient(ellipse_65%_80%_at_50%_0%,black,transparent)]"
      />
      <div
        aria-hidden="true"
        className="absolute -top-24 left-1/2 h-72 w-[720px] -translate-x-1/2 rounded-full bg-brand-cyan/15 blur-3xl"
      />
      <Container className="relative py-20 text-center sm:py-24">
        <Reveal>
          {eyebrow ? (
            <p className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              <span
                aria-hidden="true"
                className="inline-block size-1.5 rotate-45 bg-brand-cyan"
              />
              {eyebrow}
            </p>
          ) : null}
          <h2
            id="cta-heading"
            className="mt-3 text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
            {text}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button
              asChild
              size="lg"
              className="bg-white text-navy-900 hover:bg-slate-200"
            >
              <Link href={primary.href}>{primary.label}</Link>
            </Button>
            {secondary ? (
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/25 bg-transparent text-white hover:bg-white/10 hover:text-white"
              >
                <Link href={secondary.href}>{secondary.label}</Link>
              </Button>
            ) : null}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
