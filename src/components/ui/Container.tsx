import { cn } from "@/lib/utils";

type ContainerProps = React.HTMLAttributes<HTMLDivElement> & {
  /** Wider container for hero/visual layouts */
  width?: "default" | "wide" | "narrow";
};

/**
 * Consistent horizontal layout wrapper used across every page.
 */
export function Container({
  className,
  width = "default",
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-4 sm:px-6 lg:px-8",
        width === "default" && "max-w-6xl",
        width === "wide" && "max-w-7xl",
        width === "narrow" && "max-w-3xl",
        className
      )}
      {...props}
    />
  );
}
