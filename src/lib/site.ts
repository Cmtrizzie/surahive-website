/**
 * SuraHive AI — Central site configuration.
 *
 * This is the single source of truth for brand identity, domains,
 * navigation and brand asset paths. Update values here to change
 * them everywhere on the website — no component edits required.
 */
export const siteConfig = {
  /** Public brand name */
  name: "SuraHive AI",
  /** Registered legal entity name */
  legalName: "SuraHive AI LTD",
  /** Primary canonical domain of the company website */
  domain: "https://surahive.com",
  /** Future home of the SuraHive software applications (do not link yet) */
  appUrl: "https://app.surahive.com",
  /** Primary brand tagline */
  tagline: "Open innovation. Built to scale.",
  /** Default meta description */
  description:
    "SuraHive AI builds intelligent software, AI systems, and technology platforms for people, developers, and businesses.",
  /**
   * Configurable company contact email.
   * TODO: replace with the live company mailbox when confirmed.
   * If left empty ("") the contact page falls back to a neutral state.
   */
  contactEmail: "hello@surahive.com",
  /** Brand asset paths — official SuraHive AI artwork. Swap files here to rebrand without touching components */
  brandAssetPaths: {
    /** Official stacked lockup (navy wordmark) — JSON-LD, print-like contexts */
    logo: "/brand/logo.svg",
    /** Official stacked lockup (soft-white wordmark) for dark backgrounds */
    logoDark: "/brand/logo-dark.svg",
    /** Horizontal mark + wordmark lockup for light backgrounds (header) */
    horizontal: "/brand/logo-horizontal.svg",
    /** Horizontal mark + wordmark lockup for dark backgrounds (footer) */
    horizontalDark: "/brand/logo-horizontal-dark.svg",
    /** Mark only (navy + cyan), theme-independent */
    mark: "/brand/logo-mark.svg",
    /** Raster mark with transparency (OG images, embeds) */
    markPng: "/brand/logo-mark.png",
  },
  nav: {
    primary: [
      { label: "Products", href: "/products" },
      { label: "Platform", href: "/platform" },
      { label: "Developers", href: "/developers" },
    ],
    company: [
      { label: "About", href: "/about" },
      { label: "Responsible AI", href: "/responsible-ai" },
    ],
    contact: { label: "Contact", href: "/contact" },
    /** Initially routes to /contact. Later it can point to siteConfig.appUrl. */
    cta: { label: "Get Started", href: "/contact" },
  },
} as const;

export type SiteConfig = typeof siteConfig;

/** Footer link groups */
export const footerNav = [
  {
    heading: "Explore",
    links: [
      { label: "Products", href: "/products" },
      { label: "Platform", href: "/platform" },
      { label: "Developers", href: "/developers" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Responsible AI", href: "/responsible-ai" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
  },
] as const;

/** Contact enquiry categories used on /contact */
export const contactCategories = [
  {
    id: "general",
    title: "General enquiries",
    description: "Questions about SuraHive AI and what we are building.",
    subject: "General enquiry",
  },
  {
    id: "business",
    title: "Business enquiries",
    description: "Exploring how SuraHive AI could work with your business.",
    subject: "Business enquiry",
  },
  {
    id: "developer",
    title: "Developer enquiries",
    description: "Questions about SuraHive technology, tools and developer plans.",
    subject: "Developer enquiry",
  },
  {
    id: "partnership",
    title: "Partnership enquiries",
    description: "Partnership and collaboration conversations.",
    subject: "Partnership enquiry",
  },
] as const;
