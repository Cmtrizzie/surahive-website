import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { HeroGlyphs } from "@/components/visuals/HeroGlyphs";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  lede?: string;
  children?: React.ReactNode;
  className?: string;
};

/**
 * Shared hero band for interior pages.
 */
export function PageHero({ eyebrow, title, lede, children, className }: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden border-b border-slate-200/70",
        className
      )}
    >
      <div
        aria-hidden="true"
        className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_75%_90%_at_50%_0%,black,transparent)]"
      />
      <div
        aria-hidden="true"
        className="absolute -top-32 right-0 size-[480px] rounded-full bg-brand-cyan/10 blur-3xl"
      />
      <HeroGlyphs className="-mr-8" />
      <Container className="relative py-16 sm:py-20 lg:py-24">
        <Reveal className="max-w-3xl">
          <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            <span
              aria-hidden="true"
              className="inline-block size-1.5 rotate-45 bg-brand-cyan"
            />
            {eyebrow}
          </p>
          <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-navy-900 sm:text-5xl">
            {title}
          </h1>
          {lede ? (
            <p className="mt-5 max-w-2xl text-pretty text-lg leading-8 text-slate-600">
              {lede}
            </p>
          ) : null}
          {children}
        </Reveal>
      </Container>
    </section>
  );
}
