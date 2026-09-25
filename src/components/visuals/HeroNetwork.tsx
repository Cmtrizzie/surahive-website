import { cn } from "@/lib/utils";

/**
 * Abstract technical visualization for the homepage hero:
 * interconnected nodes around a central core, with subtle
 * cyan illumination and restrained, motion-reduce-aware animation.
 * Pure SVG + CSS — no JavaScript, no stock imagery.
 */
export function HeroNetwork({ className }: { className?: string }) {
  return (
    <div className={cn("relative mx-auto w-full max-w-[540px]", className)}>
      <div
        aria-hidden="true"
        className="bg-grid absolute -inset-10 -z-10 opacity-70 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_45%,black,transparent)]"
      />
      <div
        aria-hidden="true"
        className="absolute -right-8 top-10 -z-10 size-72 rounded-full bg-brand-cyan/10 blur-3xl"
      />
      <svg
        viewBox="0 0 560 520"
        fill="none"
        role="img"
        aria-label="Abstract visualization of interconnected technology nodes around a central core"
        className="h-auto w-full"
      >
        <defs>
          <linearGradient
            id="hn-flow-gradient"
            x1="0"
            y1="0"
            x2="560"
            y2="520"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="var(--color-brand-cyan)" />
            <stop offset="1" stopColor="var(--color-brand-violet)" />
          </linearGradient>
          <linearGradient
            id="hn-core-gradient"
            x1="254"
            y1="225"
            x2="306"
            y2="285"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="var(--color-brand-cyan)" />
            <stop offset="1" stopColor="var(--color-brand-violet)" />
          </linearGradient>
        </defs>

        {/* Orbit rings */}
        <g stroke="var(--color-navy-900)" strokeOpacity="0.08" strokeDasharray="2 7">
          <circle cx="280" cy="255" r="140" />
          <circle cx="280" cy="255" r="212" />
        </g>

        {/* Base edges */}
        <g stroke="var(--color-navy-900)" strokeOpacity="0.12">
          <path d="M280 255 130 118" />
          <path d="M280 255 452 140" />
          <path d="M280 255 448 372" />
          <path d="M280 255 118 372" />
          <path d="M280 255 300 66" />
          <path d="M280 255 70 262" />
          <path d="M280 255 492 262" />
          <path d="M280 255 296 446" />
          <path d="M300 66 452 140" />
          <path d="M70 262 118 372" />
          <path d="M448 372 492 262" />
        </g>

        {/* Animated flow edges */}
        <g
          className="hn-flow"
          stroke="url(#hn-flow-gradient)"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeDasharray="5 11"
        >
          <path d="M280 255 130 118" />
          <path d="M280 255 452 140" />
          <path d="M280 255 448 372" />
          <path d="M280 255 118 372" />
        </g>

        {/* Satellite nodes */}
        <g>
          <circle cx="130" cy="118" r="9" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1.5" />
          <circle cx="452" cy="140" r="7" fill="var(--color-navy-900)" />
          <rect
            x="443"
            y="367"
            width="10"
            height="10"
            rx="2"
            transform="rotate(45 448 372)"
            fill="#FFFFFF"
            stroke="#CBD5E1"
            strokeWidth="1.5"
          />
          <circle cx="118" cy="372" r="7" fill="var(--color-brand-violet)" fillOpacity="0.85" />
          <circle cx="300" cy="66" r="6" fill="var(--color-brand-cyan)" />
          <circle cx="70" cy="262" r="8" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1.5" />
          <rect x="486" y="256" width="12" height="12" rx="3" fill="var(--color-navy-900)" fillOpacity="0.9" />
          <circle cx="296" cy="446" r="8" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1.5" />
        </g>

        {/* Core */}
        <g>
          <circle
            className="hn-pulse"
            cx="280"
            cy="255"
            r="46"
            stroke="var(--color-brand-cyan)"
            strokeWidth="1.5"
          />
          <circle cx="280" cy="255" r="40" fill="var(--color-navy-900)" />
          <path
            d="M280 225 306 240v30l-26 15-26-15v-30l26-15Z"
            stroke="url(#hn-core-gradient)"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path d="M280 243 293 250.5v15L280 273l-13-7.5v-15l13-7.5Z" fill="var(--color-brand-cyan)" fillOpacity="0.9" />
        </g>
      </svg>
    </div>
  );
}
