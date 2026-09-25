"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

/**
 * Accessible mobile navigation panel.
 * • Touch-friendly targets (min 44px)
 * • Closes on link click, backdrop click and Escape
 * • Locks body scroll while open, restores focus to the trigger on close
 */
export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const close = () => setOpen(false);

  // Escape to close + body scroll lock
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen(true)}
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label="Open navigation menu"
        className="inline-flex size-11 items-center justify-center rounded-md text-navy-900 transition-colors hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
      >
        <Menu className="size-5" aria-hidden="true" />
      </button>

      <div
        id="mobile-menu"
        aria-hidden={!open}
        className={cn(
          "fixed inset-0 z-[60] transition-[visibility] duration-300 md:hidden",
          open ? "visible" : "invisible"
        )}
      >
        {/* Backdrop */}
        <div
          className={cn(
            "absolute inset-0 bg-navy-950/50 transition-opacity duration-300",
            open ? "opacity-100" : "opacity-0"
          )}
          onClick={close}
          aria-hidden="true"
        />

        {/* Panel */}
        <div
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          className={cn(
            "absolute right-0 top-0 flex h-dvh w-80 max-w-[86vw] flex-col overflow-y-auto bg-white shadow-2xl transition-transform duration-300 [transition-property:transform,visibility] motion-reduce:transition-none",
            open ? "visible translate-x-0" : "invisible translate-x-full"
          )}
        >
          <div className="flex h-16 items-center justify-between border-b border-slate-200 px-5">
            <Logo />
            <button
              type="button"
              onClick={close}
              aria-label="Close navigation menu"
              className="inline-flex size-11 items-center justify-center rounded-md text-navy-900 transition-colors hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
            >
              <X className="size-5" aria-hidden="true" />
            </button>
          </div>

          <nav aria-label="Mobile" className="flex flex-1 flex-col gap-1 p-5">
            {siteConfig.nav.primary.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={close}
                aria-current={pathname === item.href ? "page" : undefined}
                className={cn(
                  "rounded-lg px-3 py-3 text-base font-medium transition-colors",
                  pathname === item.href
                    ? "bg-slate-100 text-navy-900"
                    : "text-slate-600 hover:bg-slate-50 hover:text-navy-900"
                )}
              >
                {item.label}
              </Link>
            ))}

            <p className="px-3 pb-1 pt-4 text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
              Company
            </p>
            {siteConfig.nav.company.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={close}
                aria-current={pathname === item.href ? "page" : undefined}
                className={cn(
                  "rounded-lg px-3 py-3 text-base font-medium transition-colors",
                  pathname === item.href
                    ? "bg-slate-100 text-navy-900"
                    : "text-slate-600 hover:bg-slate-50 hover:text-navy-900"
                )}
              >
                {item.label}
              </Link>
            ))}

            <Link
              href={siteConfig.nav.contact.href}
              onClick={close}
              aria-current={pathname === siteConfig.nav.contact.href ? "page" : undefined}
              className={cn(
                "rounded-lg px-3 py-3 text-base font-medium transition-colors",
                pathname === siteConfig.nav.contact.href
                  ? "bg-slate-100 text-navy-900"
                  : "text-slate-600 hover:bg-slate-50 hover:text-navy-900"
              )}
            >
              {siteConfig.nav.contact.label}
            </Link>

            <div className="mt-5 border-t border-slate-200 pt-5">
              <Link
                href={siteConfig.nav.cta.href}
                onClick={close}
                className="inline-flex h-11 w-full items-center justify-center rounded-md bg-navy-900 px-4 text-sm font-medium text-white shadow-xs transition-colors hover:bg-navy-800 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
              >
                {siteConfig.nav.cta.label}
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
