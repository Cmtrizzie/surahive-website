import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type ProductCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  href?: string;
  linkLabel?: string;
  badge?: string;
  index?: number;
  className?: string;
};

/**
 * Reusable product/capability card. The /products page evolves from
 * capability cards into real product cards simply by passing real
 * product data — no component changes required.
 */
export function ProductCard({
  icon: Icon,
  title,
  description,
  href,
  linkLabel = "Learn more",
  badge,
  index,
  className,
}: ProductCardProps) {
  return (
    <Card
      className={cn(
        "group relative gap-0 p-6 transition-all duration-200 hover:-translate-y-1 hover:border-brand-violet/30 hover:shadow-md",
        className
      )}
    >
      {typeof index === "number" ? (
        <span
          aria-hidden="true"
          className="absolute right-5 top-5 font-mono text-xs text-slate-300"
        >
          {String(index + 1).padStart(2, "0")}
        </span>
      ) : null}
      <div className="mb-5 inline-flex size-11 items-center justify-center rounded-lg bg-navy-900 text-brand-cyan">
        <Icon aria-hidden="true" className="size-5" />
      </div>
      <h3 className="text-base font-semibold text-navy-900">{title}</h3>
      {badge ? (
        <span className="mt-2 inline-flex w-fit rounded-full border border-slate-200 bg-soft px-2.5 py-0.5 text-[11px] font-medium text-slate-500">
          {badge}
        </span>
      ) : null}
      <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
      {href ? (
        <Link
          href={href}
          className="mt-4 inline-flex items-center gap-1.5 rounded-sm text-sm font-medium text-navy-900 transition-colors hover:text-brand-cyan-strong"
          aria-label={`${linkLabel}: ${title}`}
        >
          {linkLabel}
          <ArrowRight
            aria-hidden="true"
            className="size-4 transition-transform duration-200 group-hover:translate-x-0.5"
          />
        </Link>
      ) : null}
    </Card>
  );
}
