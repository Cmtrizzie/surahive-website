"use client";

import { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Logo } from "@/components/brand/Logo";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

const baseLink =
  "rounded-md px-3 py-2 text-sm font-medium transition-colors focus-visible:outline-none";

function linkStyles(active: boolean) {
  return cn(
    baseLink,
    active
      ? "text-navy-900"
      : "text-slate-600 hover:bg-slate-100/70 hover:text-navy-900"
  );
}

/**
 * Sticky site header: full navigation on desktop, menu button on mobile.
 */
export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-soft/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          aria-label="SuraHive AI — home"
          className="rounded-md focus-visible:outline-none"
        >
          <Logo />
        </Link>

        {/* Desktop navigation */}
        <nav aria-label="Main" className="hidden items-center gap-0.5 md:flex">
          {siteConfig.nav.primary.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
              className={linkStyles(pathname === item.href)}
            >
              {item.label}
            </Link>
          ))}

          <DropdownMenu>
            <DropdownMenuTrigger
              aria-current={
                pathname === "/about" || pathname === "/responsible-ai"
                  ? "true"
                  : undefined
              }
              className={cn(
                "group",
                linkStyles(pathname === "/about" || pathname === "/responsible-ai"),
                "inline-flex items-center gap-1 outline-none data-[state=open]:text-navy-900"
              )}
            >
              Company
              <ChevronDown
                aria-hidden="true"
                className="size-3.5 transition-transform duration-200 group-data-[state=open]:rotate-180"
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-44">
              {siteConfig.nav.company.map((item) => (
                <DropdownMenuItem key={item.href} asChild>
                  <Link href={item.href} className="cursor-pointer">
                    {item.label}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Link
            href={siteConfig.nav.contact.href}
            aria-current={pathname === siteConfig.nav.contact.href ? "page" : undefined}
            className={linkStyles(pathname === siteConfig.nav.contact.href)}
          >
            {siteConfig.nav.contact.label}
          </Link>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href={siteConfig.nav.cta.href}
            className="inline-flex h-9 items-center justify-center rounded-md bg-navy-900 px-4 text-sm font-medium text-white shadow-xs transition-colors hover:bg-navy-800 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
          >
            {siteConfig.nav.cta.label}
          </Link>
        </div>

        {/* Mobile menu button */}
        <MobileMenu />
      </div>
    </header>
  );
}
