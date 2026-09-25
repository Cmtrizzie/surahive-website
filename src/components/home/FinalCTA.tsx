import Link from "next/link";
import { CTASection } from "@/components/CTASection";

/**
 * Homepage Final CTA — Deep Navy / Near Black section.
 * The only CTA in this position; no additional CTAs added.
 */
export function FinalCTA() {
  return (
    <CTASection
      title="Build what comes next."
      text="Explore what SuraHive AI is building."
      primary={{ label: "Explore Products", href: "/products" }}
      secondary={{ label: "Contact SuraHive", href: "/contact" }}
      className="mt-0"
    />
  );
}
