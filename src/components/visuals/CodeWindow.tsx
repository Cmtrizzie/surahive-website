import { cn } from "@/lib/utils";

type Segment = { w: string; c: string };

type Row = { indent?: number; segments: Segment[] };

/**
 * Abstract code-editor rows — deliberately token bars instead of real
 * syntax so that no fictional SDK/API surface is published.
 */
const rows: Row[] = [
  { segments: [{ w: "10%", c: "bg-white/25" }, { w: "16%", c: "bg-brand-cyan/70" }] },
  { indent: 1, segments: [{ w: "14%", c: "bg-brand-violet/70" }, { w: "26%", c: "bg-white/15" }] },
  { indent: 1, segments: [{ w: "8%", c: "bg-white/25" }, { w: "20%", c: "bg-brand-cyan/70" }, { w: "12%", c: "bg-white/15" }] },
  { indent: 2, segments: [{ w: "18%", c: "bg-white/15" }, { w: "14%", c: "bg-brand-violet/70" }] },
  { indent: 2, segments: [{ w: "24%", c: "bg-white/10" }] },
  { indent: 1, segments: [{ w: "12%", c: "bg-brand-cyan/70" }, { w: "22%", c: "bg-white/15" }, { w: "10%", c: "bg-white/25" }] },
  { indent: 1, segments: [{ w: "30%", c: "bg-white/10" }] },
  { segments: [{ w: "9%", c: "bg-white/25" }, { w: "18%", c: "bg-brand-violet/70" }] },
  { segments: [{ w: "14%", c: "bg-white/10" }] },
];

/**
 * Conceptual developer/code visual: editor chrome with abstract
 * syntax-colored token bars and a blinking caret.
 */
export function CodeWindow({
  className,
  title = "index.ts",
}: {
  className?: string;
  title?: string;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-navy-900/40 bg-navy-950 shadow-xl shadow-navy-950/20",
        className
      )}
      role="img"
      aria-label="Conceptual code editor illustration"
    >
      {/* Title bar */}
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
        <span className="size-2.5 rounded-full bg-white/15" aria-hidden="true" />
        <span className="size-2.5 rounded-full bg-white/15" aria-hidden="true" />
        <span className="size-2.5 rounded-full bg-white/15" aria-hidden="true" />
        <span className="ml-3 rounded-md bg-white/5 px-2 py-0.5 font-mono text-[11px] text-slate-400">
          {title}
        </span>
        <span className="ml-auto font-mono text-[10px] uppercase tracking-[0.18em] text-slate-500">
          SuraHive
        </span>
      </div>

      {/* Abstract code rows */}
      <div className="grid grid-cols-[2.25rem_1fr] gap-y-[7px] p-4 pb-5 font-mono text-xs leading-5 sm:p-5">
        {rows.map((row, i) => (
          <div key={i} className="contents">
            <span className="select-none pr-3 text-right text-slate-600">
              {i + 1}
            </span>
            <span
              className="flex h-5 items-center gap-1.5"
              style={row.indent ? { paddingLeft: `${row.indent * 14}px` } : undefined}
            >
              {row.segments.map((seg, j) => (
                <span
                  key={j}
                  aria-hidden="true"
                  className={cn("h-2 rounded-full", seg.c)}
                  style={{ width: seg.w }}
                />
              ))}
              {i === rows.length - 1 ? (
                <span
                  aria-hidden="true"
                  className="caret-blink ml-1 inline-block h-4 w-[7px] rounded-[2px] bg-brand-cyan"
                />
              ) : null}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
