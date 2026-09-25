import {
  Activity,
  FolderOpen,
  Gauge,
  Terminal,
  Workflow,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { icon: FolderOpen, label: "Projects", active: true },
  { icon: Activity, label: "AI Activity", active: false },
  { icon: Gauge, label: "Usage", active: false },
  { icon: Workflow, label: "Automation", active: false },
  { icon: Terminal, label: "Developer Tools", active: false },
];

/**
 * Conceptual SuraHive platform interface preview.
 * All panels are abstract skeletons — deliberately no numbers,
 * metrics or data that could be mistaken for a live product.
 */
export function PlatformWindow({ className }: { className?: string }) {
  return (
    <div className={cn("relative", className)}>
      <div
        aria-hidden="true"
        className="absolute -inset-x-8 -top-8 bottom-0 -z-10 rounded-3xl bg-gradient-to-b from-brand-cyan/10 to-brand-violet/5 blur-2xl"
      />
      <div
        className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xl shadow-navy-900/10"
        role="img"
        aria-label="Conceptual SuraHive platform interface preview with abstract placeholder panels"
      >
        {/* Window title bar */}
        <div className="grid grid-cols-[1fr_auto_1fr] items-center border-b border-slate-200 bg-soft px-4 py-3">
          <div className="flex items-center gap-1.5" aria-hidden="true">
            <span className="size-2.5 rounded-full bg-slate-300" />
            <span className="size-2.5 rounded-full bg-slate-300" />
            <span className="size-2.5 rounded-full bg-slate-300" />
          </div>
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-slate-500">
            SuraHive Platform
          </span>
          <span className="justify-self-end rounded-full border border-brand-violet/30 bg-brand-violet/5 px-2 py-0.5 text-[10px] font-medium text-brand-violet">
            Concept preview
          </span>
        </div>

        {/* Body */}
        <div className="grid sm:grid-cols-[190px_1fr]">
          {/* Sidebar */}
          <div className="hidden border-r border-slate-200 bg-soft p-3 sm:block">
            <ul className="space-y-1">
              {navItems.map((item) => (
                <li
                  key={item.label}
                  className={cn(
                    "flex items-center gap-2.5 rounded-md border px-3 py-2 text-[13px]",
                    item.active
                      ? "border-slate-200 bg-white font-medium text-navy-900 shadow-sm"
                      : "border-transparent text-slate-500"
                  )}
                >
                  <item.icon
                    aria-hidden="true"
                    className={cn("size-4", item.active ? "text-brand-violet" : "text-slate-400")}
                  />
                  {item.label}
                </li>
              ))}
            </ul>
          </div>

          {/* Panels */}
          <div className="grid gap-4 p-4 sm:grid-cols-2 sm:p-5">
            {/* AI Activity — abstract line chart */}
            <div className="rounded-lg border border-slate-200 p-4 sm:col-span-2">
              <div className="flex items-center justify-between">
                <span className="text-[13px] font-medium text-navy-900">AI Activity</span>
                <span className="size-1.5 rounded-full bg-brand-cyan" aria-hidden="true" />
              </div>
              <svg viewBox="0 0 320 72" className="mt-3 h-20 w-full" aria-hidden="true">
                <defs>
                  <linearGradient id="pw-area" x1="0" y1="0" x2="0" y2="1">
                    <stop stopColor="var(--color-brand-cyan)" stopOpacity="0.18" />
                    <stop offset="1" stopColor="var(--color-brand-cyan)" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d="M0 58C22 54 34 38 54 40s32 18 52 8 30-28 52-22 34 18 54 12 38-14 60-8 32 10 48 6"
                  fill="none"
                  stroke="var(--color-brand-cyan)"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M0 58C22 54 34 38 54 40s32 18 52 8 30-28 52-22 34 18 54 12 38-14 60-8 32 10 48 6V72H0Z"
                  fill="url(#pw-area)"
                />
              </svg>
            </div>

            {/* Usage — abstract bars, no numbers */}
            <div className="rounded-lg border border-slate-200 p-4">
              <span className="text-[13px] font-medium text-navy-900">Usage</span>
              <div className="mt-3 space-y-2.5">
                {["72%", "46%", "84%", "34%"].map((w) => (
                  <div key={w} className="flex items-center gap-2">
                    <span className="size-2 rounded-full bg-slate-200" aria-hidden="true" />
                    <span
                      className="h-2 rounded-full bg-gradient-to-r from-brand-cyan/70 to-brand-violet/60"
                      style={{ width: w }}
                      aria-hidden="true"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Automation — abstract toggles */}
            <div className="rounded-lg border border-slate-200 p-4">
              <span className="text-[13px] font-medium text-navy-900">Automation</span>
              <div className="mt-3 space-y-3">
                {[0, 1, 2].map((i) => (
                  <div key={i} className="flex items-center justify-between gap-3">
                    <span className="h-2 w-24 rounded-full bg-slate-100" aria-hidden="true" />
                    <span
                      className={cn(
                        "relative inline-flex h-4 w-8 shrink-0 items-center rounded-full",
                        i < 2 ? "bg-brand-cyan/80" : "bg-slate-200"
                      )}
                      aria-hidden="true"
                    >
                      <span
                        className={cn(
                          "absolute size-3 rounded-full bg-white shadow-sm",
                          i < 2 ? "left-[18px]" : "left-[2px]"
                        )}
                      />
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Projects — abstract list */}
            <div className="rounded-lg border border-slate-200 p-4 sm:col-span-2">
              <span className="text-[13px] font-medium text-navy-900">Projects</span>
              <div className="mt-3 space-y-2.5">
                {[0, 1, 2].map((i) => (
                  <div key={i} className="flex items-center gap-2.5">
                    <span className="size-5 rounded bg-brand-violet/10" aria-hidden="true" />
                    <span
                      className="h-2 rounded-full bg-slate-100"
                      style={{ width: ["38%", "26%", "44%"][i] }}
                      aria-hidden="true"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
