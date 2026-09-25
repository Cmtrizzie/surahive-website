import Link from "next/link";
import { ArrowRight, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { HeroNetwork } from "@/components/visuals/HeroNetwork";
import { siteConfig } from "@/lib/site";

/**
 * Homepage hero — brand eyebrow, tagline, primary headline,
 * supporting text and the two specified calls to action.
 */
export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <Container className="relative grid gap-12 py-16 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-8 lg:py-24">
        <div>
          <Reveal>
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
              <span
                aria-hidden="true"
                className="inline-block size-1.5 rotate-45 bg-brand-cyan"
              />
              {siteConfig.name.toUpperCase()}
            </p>
            <p className="mt-3 text-sm font-medium text-brand-violet">
              {siteConfig.tagline}
            </p>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-5 text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-navy-900 sm:text-5xl lg:text-[3.4rem]">
              Build with intelligence.{" "}
              <span className="bg-gradient-to-r from-brand-cyan-strong to-brand-violet bg-clip-text text-transparent">
                Create what comes next.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={140}>
            <p className="mt-6 max-w-xl text-pretty text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              {siteConfig.description}
            </p>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button asChild size="lg" className="h-11 px-6">
                <Link href="/products">
                  Explore SuraHive
                  <ArrowRight aria-hidden="true" className="size-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-11 border-slate-300 bg-white px-6 hover:border-navy-900"
              >
                <Link href="/developers">
                  <Code2 aria-hidden="true" className="size-4 text-brand-violet" />
                  For Developers
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>

        <Reveal delay={220} className="lg:pl-6">
          <HeroNetwork />
        </Reveal>
      </Container>
    </section>
  );
}
