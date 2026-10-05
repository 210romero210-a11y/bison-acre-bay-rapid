import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Photo } from "@/components/photo";
import { cn } from "@/lib/utils";

type ServiceCardProps = {
  href: string;
  title: string;
  short: string;
  image: { src: string; alt: string };
  highlight?: string;
  className?: string;
};

export function ServiceCard({ href, title, short, image, highlight, className }: ServiceCardProps) {
  const [path, hash] = href.split("#");

  return (
    <Link
      to={path}
      hash={hash}
      className={cn(
        "group flex flex-col overflow-hidden rounded-3xl border border-border bg-surface shadow-card transition-colors duration-200 hover:border-primary/50",
        className,
      )}
    >
      <Photo
        src={image.src}
        alt={image.alt}
        className="aspect-3/2"
        imgClassName="transition-transform duration-500 group-hover:scale-[1.03]"
      />
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-xl">{title}</h3>
          <ArrowUpRight className="mt-1 size-4 shrink-0 text-primary opacity-0 transition-opacity group-hover:opacity-100" />
        </div>
        {highlight ? (
          <Badge variant="accent" className="mt-2 w-fit">
            {highlight}
          </Badge>
        ) : null}
        <p className="mt-3 text-sm leading-relaxed text-muted">{short}</p>
      </div>
    </Link>
  );
}
