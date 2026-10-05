import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      to="/"
      className={cn("group flex min-w-0 items-center gap-3 text-fg", className)}
      aria-label="Southern Auto Detailers home"
    >
      <img
        src="/logo.png"
        alt="Southern Auto Detailers logo — dual-action polisher over the state of Texas"
        width={44}
        height={44}
        className="size-10 shrink-0 rounded-md object-cover ring-1 ring-primary/40 md:size-11"
      />
      <span className="flex min-w-0 flex-col leading-none">
        <span className="font-display text-[0.68rem] font-semibold tracking-[0.22em] text-primary">
          SOUTHERN
        </span>
        <span className="font-display text-sm font-semibold tracking-tight">
          Auto Detailers
        </span>
      </span>
    </Link>
  );
}
