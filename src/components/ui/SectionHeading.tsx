import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/Reveal";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  lede?: string;
  align?: "left" | "center";
  /** Use light text on dark sections */
  dark?: boolean;
  className?: string;
};

/**
 * Consistent section header: eyebrow label, title and optional lede.
 */
export function SectionHeading({
  eyebrow,
  title,
  lede,
  align = "center",
  dark = false,
  className,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em]",
            align === "center" && "justify-center",
            dark ? "text-slate-400" : "text-slate-500"
          )}
        >
          <span
            aria-hidden="true"
            className="inline-block size-1.5 rotate-45 bg-brand-cyan"
          />
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          "mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl",
          dark ? "text-white" : "text-navy-900"
        )}
      >
        {title}
      </h2>
      {lede ? (
        <p
          className={cn(
            "mt-4 text-pretty text-base leading-7 sm:text-lg sm:leading-8",
            dark ? "text-slate-300" : "text-slate-600"
          )}
        >
          {lede}
        </p>
      ) : null}
    </Reveal>
  );
}
