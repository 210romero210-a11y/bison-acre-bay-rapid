import { Link } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BUSINESS } from "@/lib/site";
import { cn } from "@/lib/utils";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  compact?: boolean;
};

export function PageHero({
  eyebrow,
  title,
  description,
  imageSrc,
  imageAlt,
  compact = false,
}: PageHeroProps) {
  return (
    <section className={cn("relative isolate overflow-hidden", compact ? "min-h-[28rem]" : "min-h-svh")}>
      <img
        src={imageSrc}
        alt={imageAlt}
        className="absolute inset-0 size-full object-cover"
        width={1600}
        height={900}
        loading="eager"
        decoding="async"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/80 to-bg/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-bg/40" />
      <div
        className={cn(
          "relative mx-auto flex w-full max-w-6xl flex-col justify-end px-4 md:px-6",
          compact ? "min-h-[28rem] py-16" : "min-h-svh py-24",
        )}
      >
        <p className="mb-4 text-xs font-semibold tracking-[0.22em] text-primary uppercase">
          {eyebrow}
        </p>
        <h1 className="max-w-3xl font-display text-4xl font-semibold tracking-tight text-fg md:text-6xl">
          {title}
        </h1>
        <p className="mt-5 max-w-xl text-base text-muted md:text-lg">{description}</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button asChild size="lg">
            <a href={BUSINESS.phoneTel}>
              <Phone />
              Call {BUSINESS.phoneDisplay}
            </a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link to="/contact">Request a Detail</Link>
          </Button>
          <Badge variant="accent" className="w-fit sm:ml-2">
            Limited Availability
          </Badge>
        </div>
      </div>
    </section>
  );
}
