import { cn } from "@/lib/utils";

/**
 * Decorative hex-cluster motif for interior page heroes — echoes the
 * brand mark and the homepage network visual. Purely presentational,
 * hidden on small screens and ignored by assistive tech.
 */
export function HeroGlyphs({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 340 280"
      fill="none"
      className={cn(
        "pointer-events-none absolute bottom-0 right-0 hidden h-auto w-[360px] select-none lg:block",
        "[mask-image:radial-gradient(ellipse_70%_70%_at_55%_55%,black,transparent_78%)]",
        className
      )}
    >
      {/* Orbit ring */}
      <circle
        cx="210"
        cy="140"
        r="100"
        stroke="var(--color-navy-900)"
        strokeOpacity="0.09"
        strokeDasharray="2 6"
      />

      {/* Base edges */}
      <g stroke="var(--color-navy-900)" strokeOpacity="0.14">
        <path d="M210 140 100 68" />
        <path d="M210 140 272 48" />
        <path d="M210 140 276 224" />
        <path d="M210 140 124 220" />
        <path d="M100 68 272 48" />
      </g>

      {/* Animated flow edge */}
      <g
        className="hn-flow"
        stroke="var(--color-brand-cyan)"
        strokeOpacity="0.55"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeDasharray="4 8"
      >
        <path d="M210 140 100 68" />
        <path d="M210 140 276 224" />
      </g>

      {/* Nodes */}
      <g transform="translate(100 68)">
        <path
          d="M0 -15 13 -7.5v15L0 15l-13 -7.5v-15Z"
          fill="#FFFFFF"
          stroke="#CBD5E1"
          strokeWidth="1.5"
        />
      </g>
      <g transform="translate(272 48)">
        <path
          d="M0 -15 13 -7.5v15L0 15l-13 -7.5v-15Z"
          fill="#FFFFFF"
          stroke="#CBD5E1"
          strokeWidth="1.5"
        />
      </g>
      <circle cx="276" cy="224" r="6" fill="var(--color-brand-violet)" fillOpacity="0.7" />
      <circle cx="124" cy="220" r="5" fill="var(--color-brand-cyan)" />

      {/* Core hexagon */}
      <g transform="translate(210 140)">
        <path
          d="M0 -26 22.5 -13v26L0 26l-22.5 -13v-26Z"
          fill="var(--color-navy-900)"
        />
        <path
          d="M0 -26 22.5 -13v26L0 26l-22.5 -13v-26Z"
          stroke="var(--color-brand-cyan)"
          strokeOpacity="0.55"
          strokeWidth="1.5"
        />
        <path d="M0 -9 7.8 -4.5v9L0 9l-7.8 -4.5v-9Z" fill="var(--color-brand-cyan)" fillOpacity="0.9" />
      </g>
    </svg>
  );
}
