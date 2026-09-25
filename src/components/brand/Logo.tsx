import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

type LogoProps = {
  /**
   * Background context for the colorway:
   * - "dark" (default) = component sits on a light background (navy wordmark).
   * - "light" = component sits on a dark background (soft-white wordmark).
   */
  variant?: "dark" | "light";
  /** Render the mark only, without the wordmark lockup. */
  withWordmark?: boolean;
  className?: string;
  markClassName?: string;
};

/**
 * The single SuraHive AI logo component used across the whole website.
 *
 * Renders the official brand artwork (traced vector lockups) from
 * `siteConfig.brandAssetPaths`, so rebranding means swapping the SVG files
 * (or updating the paths in one place) — no redesign required.
 *
 * Official artwork reference:
 * - `SURAHIVE AI LOGO.svg/png`  → stacked lockup, navy wordmark (light bg)
 * - `SURAHIVE AI LOGO 2.svg/png` → dark colorway (soft-white wordmark, dark bg)
 */
export function Logo({
  variant = "dark",
  withWordmark = true,
  className,
  markClassName,
}: LogoProps) {
  const paths = siteConfig.brandAssetPaths;

  if (!withWordmark) {
    // Mark only — official artwork is navy + cyan on transparency, legible on both light and dark surfaces.
    return (
      <img
        src={paths.mark}
        alt="SuraHive AI"
        width={32}
        height={32}
        className={cn("size-8 shrink-0", markClassName)}
      />
    );
  }

  const src =
    variant === "light" ? paths.horizontalDark : paths.horizontal;

  return (
    <img
      src={src}
      alt="SuraHive AI"
      width={142}
      height={32}
      className={cn("h-8 w-auto shrink-0", markClassName, className)}
    />
  );
}
