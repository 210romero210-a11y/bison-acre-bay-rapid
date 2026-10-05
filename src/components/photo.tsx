import { cn } from "@/lib/utils";

type PhotoProps = {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
  width?: number;
  height?: number;
};

export function Photo({
  src,
  alt,
  className,
  imgClassName,
  priority = false,
  width,
  height,
}: PhotoProps) {
  return (
    <div className={cn("overflow-hidden bg-surface-2", className)}>
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={cn("size-full object-cover", imgClassName)}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={priority ? "high" : "auto"}
      />
    </div>
  );
}
