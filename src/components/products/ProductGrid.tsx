import type { LucideIcon } from "lucide-react";
import { ProductCard } from "@/components/products/ProductCard";
import { cn } from "@/lib/utils";

export type ProductGridItem = {
  icon: LucideIcon;
  title: string;
  description: string;
  href?: string;
  linkLabel?: string;
  badge?: string;
};

type ProductGridProps = {
  items: ProductGridItem[];
  columns?: 3 | 4;
  className?: string;
};

/**
 * Responsive grid of product/capability cards.
 */
export function ProductGrid({ items, columns = 4, className }: ProductGridProps) {
  return (
    <div
      className={cn(
        "grid gap-4 sm:grid-cols-2",
        columns === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3",
        className
      )}
    >
      {items.map((item, i) => (
        <ProductCard
          key={item.title}
          index={i}
          icon={item.icon}
          title={item.title}
          description={item.description}
          href={item.href}
          linkLabel={item.linkLabel}
          badge={item.badge}
        />
      ))}
    </div>
  );
}
