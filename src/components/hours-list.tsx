import { BUSINESS, HOURS } from "@/lib/site";
import { cn } from "@/lib/utils";

export function HoursList({ className }: { className?: string }) {
  return (
    <div className={cn("text-sm", className)}>
      <p className="mb-3 text-xs font-semibold tracking-[0.18em] text-muted uppercase">Hours</p>
      <ul className="grid gap-1.5">
        {HOURS.map((row) => (
          <li key={row.day} className="flex items-baseline justify-between gap-4">
            <span className="text-fg">{row.day}</span>
            <span className={row.time === "Closed" ? "text-muted" : "text-primary"}>
              {row.time}
            </span>
          </li>
        ))}
      </ul>
      <p className="mt-3 text-xs text-muted">{BUSINESS.hoursSummary}. Appointments recommended.</p>
    </div>
  );
}
