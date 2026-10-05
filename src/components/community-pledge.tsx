import { HandHeart } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { JUNIOR_ACHIEVEMENT } from "@/lib/site";
import { cn } from "@/lib/utils";

export function CommunityPledge({ className }: { className?: string }) {
  return (
    <section
      className={cn("border-y border-primary/25 bg-surface", className)}
      aria-labelledby="community-pledge-heading"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-12 md:flex-row md:items-center md:justify-between md:px-6 md:py-16">
        <div className="max-w-2xl">
          <p className="mb-3 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.22em] text-primary uppercase">
            <HandHeart className="size-4" />
            Community impact
          </p>
          <h2 id="community-pledge-heading" className="font-display text-3xl md:text-4xl">
            {JUNIOR_ACHIEVEMENT.headline}
          </h2>
          <p className="mt-4 text-base text-muted md:text-lg">
            10% of every sale goes to{" "}
            <a
              href={JUNIOR_ACHIEVEMENT.url}
              className="font-semibold text-primary underline-offset-4 hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              {JUNIOR_ACHIEVEMENT.name}
            </a>
            , supporting and shaping the future of San Antonio, TX.
          </p>
          <p className="mt-3 text-sm text-muted">
            When you book auto detailing in San Antonio with Southern Auto Detailers, you
            are also investing in local youth.{" "}
            <Link to="/about" className="font-semibold text-primary">
              Meet the founder
            </Link>
            .
          </p>
        </div>
        <div className="shrink-0 rounded-3xl border border-primary/40 bg-bg px-8 py-7 text-center">
          <p className="font-display text-5xl font-semibold text-primary">10%</p>
          <p className="mt-2 text-sm font-semibold tracking-wide text-fg uppercase">
            of every sale
          </p>
          <p className="mt-2 max-w-[14rem] text-xs leading-relaxed text-muted">
            Donated to Junior Achievement of South Texas
          </p>
        </div>
      </div>
    </section>
  );
}
