import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Section({
  children,
  className,
  id,
  tone = "bg",
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  tone?: "bg" | "surface";
}) {
  return (
    <section
      id={id}
      className={cn(
        "px-4 py-16 md:px-6 md:py-24",
        tone === "surface" ? "bg-surface" : "bg-bg",
        className,
      )}
    >
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="mb-3 text-xs font-semibold tracking-[0.22em] text-primary uppercase">
      {children}
    </p>
  );
}
