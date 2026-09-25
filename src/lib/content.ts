import type { LucideIcon } from "lucide-react";
import {
  Braces,
  Database,
  Eye,
  Layers,
  Lock,
  Scale,
  ShieldCheck,
  Sparkles,
  Users,
  Workflow,
} from "lucide-react";

/**
 * Shared marketing content — the four SuraHive capability areas.
 * Language stays at the positioning level: no invented products,
 * statistics, customers or dates.
 */
export type Capability = {
  id: string;
  icon: LucideIcon;
  title: string;
  short: string;
  detail: string;
  points: string[];
};

export const capabilities: Capability[] = [
  {
    id: "ai-products",
    icon: Sparkles,
    title: "AI Products",
    short: "Intelligent software designed to solve practical problems.",
    detail:
      "SuraHive is building AI-powered software focused on practical, everyday problems — intelligence that is useful, dependable and designed around the people who rely on it.",
    points: [
      "Practical AI, built into real software",
      "Designed around the people who use it",
      "Developed with responsibility and human oversight in mind",
    ],
  },
  {
    id: "developer-technology",
    icon: Braces,
    title: "Developer Technology",
    short: "Tools and technology for building intelligent applications.",
    detail:
      "SuraHive is developing technology that helps developers move from idea to intelligent application with less friction — tools built for the way modern software is actually made.",
    points: [
      "Built for developers creating intelligent applications",
      "A developer experience that stays out of the way",
      "A foundation that grows as developer products become public",
    ],
  },
  {
    id: "intelligent-platforms",
    icon: Layers,
    title: "Intelligent Platforms",
    short: "Platforms that connect AI, software and automation.",
    detail:
      "Platforms that bring AI, software and automation together as one coherent foundation — so intelligent products can be built, connected and scaled without starting from zero every time.",
    points: [
      "Connects AI, software and automation",
      "Designed as a foundation, not a single feature",
      "Built to grow from first prototype to production",
    ],
  },
  {
    id: "automation",
    icon: Workflow,
    title: "Automation",
    short: "Systems that help people and businesses automate complex workflows.",
    detail:
      "Systems that help people and businesses automate complex workflows — reducing manual effort while keeping meaningful human control where it matters.",
    points: [
      "Automates complex, repetitive workflows",
      "Keeps people in control of important decisions",
      "Designed to extend human judgment, not replace it",
    ],
  },
];

/** The four responsible-technology principles shown on the homepage. */
export const principles: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: ShieldCheck,
    title: "Privacy",
    text: "Build technology with respect for data privacy and user control.",
  },
  {
    icon: Lock,
    title: "Security",
    text: "Design systems with security as an important part of the technology lifecycle.",
  },
  {
    icon: Scale,
    title: "Responsible AI",
    text: "Develop AI systems thoughtfully, with attention to responsible use.",
  },
  {
    icon: Users,
    title: "Human Oversight",
    text: "Keep meaningful human judgment involved where it matters.",
  },
];

/** Expanded responsible-technology principles for the /responsible-ai page. */
export const responsiblePrinciples: {
  icon: LucideIcon;
  title: string;
  text: string;
}[] = [
  {
    icon: ShieldCheck,
    title: "Privacy",
    text: "We build technology with respect for data privacy and user control. People should have clarity about their information and meaningful choices over how it is used.",
  },
  {
    icon: Lock,
    title: "Security",
    text: "Security is treated as part of the technology lifecycle — considered in how systems are designed, built and operated, and strengthened as the technology matures.",
  },
  {
    icon: Scale,
    title: "Responsible AI",
    text: "AI systems are developed thoughtfully, with attention to responsible use. Intelligence should assist people and never mislead them.",
  },
  {
    icon: Users,
    title: "Human Oversight",
    text: "Meaningful human judgment stays involved where it matters. Automation supports decisions; important decisions remain with people.",
  },
  {
    icon: Database,
    title: "Data Responsibility",
    text: "Data is handled carefully and purposefully — collected with care, used for its intended purpose, and never treated as an afterthought.",
  },
  {
    icon: Eye,
    title: "Transparency",
    text: "We aim to be clear about what our technology does and how it behaves, and to communicate openly as products and services are introduced.",
  },
];
