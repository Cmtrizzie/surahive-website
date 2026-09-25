import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { Container } from "@/components/ui/Container";
import { footerNav, siteConfig } from "@/lib/site";

/**
 * Site footer — sticks to the bottom of the viewport on short pages
 * and is pushed down naturally on long pages (flex column layout).
 */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-white/10 bg-navy-950 pb-[env(safe-area-inset-bottom)] text-slate-300">
      <Container className="py-14 lg:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div className="max-w-sm">
            <Link href="/" aria-label="SuraHive AI — home" className="inline-block rounded-md">
              <Logo variant="light" />
            </Link>
            <p className="mt-4 text-sm font-medium text-slate-200">
              {siteConfig.tagline}
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              {siteConfig.name} is a technology company building intelligent
              software, AI systems and digital platforms.
            </p>
          </div>

          {/* Link groups */}
          {footerNav.map((group) => (
            <nav key={group.heading} aria-label={group.heading}>
              <h2 className="text-sm font-semibold text-white">
                {group.heading}
              </h2>
              <ul className="mt-4 space-y-3">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="rounded-sm text-sm text-slate-400 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-slate-500">
            © {year} {siteConfig.legalName}. All rights reserved.
          </p>
          <p className="font-mono text-xs text-slate-500">surahive.com</p>
        </div>
      </Container>
    </footer>
  );
}
