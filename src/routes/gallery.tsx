import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { CtaBand } from "@/components/cta-band";
import { Photo } from "@/components/photo";
import { Section, Eyebrow } from "@/components/section";
import { Button } from "@/components/ui/button";
import { pageHead } from "@/lib/seo";
import { GALLERY } from "@/lib/site";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/gallery")({
  head: () =>
    pageHead(
      "Auto Detailing Gallery San Antonio TX | Southern Auto Detailers",
      "Auto detailing gallery in San Antonio, TX — interiors, exteriors, paint correction, and ceramic coating photography from Southern Auto Detailers.",
    ),
  component: GalleryPage,
});

const filters = ["All", "Interior", "Exterior", "Paint"] as const;

function GalleryPage() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const items = GALLERY.filter((item) => filter === "All" || item.tag === filter);

  return (
    <main>
      <Section className="pb-8 pt-16 md:pt-20">
        <Eyebrow>Before-and-after proof</Eyebrow>
        <h1 className="max-w-3xl font-display text-4xl md:text-5xl">
          Detailing gallery — San Antonio, TX
        </h1>
        <p className="mt-4 max-w-2xl text-muted">
          Photography showing the level of interior, exterior, and paint finish we work
          toward. These are service images, not billed as a specific customer’s vehicle.
          For a look at your car, truck, or SUV, book a visit.
        </p>
        <div className="mt-8 flex flex-wrap gap-2">
          {filters.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setFilter(item)}
              className={cn(
                "h-10 rounded-full px-4 text-sm font-semibold",
                filter === item
                  ? "bg-primary text-primary-fg"
                  : "border border-border bg-surface text-muted hover:text-fg",
              )}
            >
              {item}
            </button>
          ))}
        </div>
      </Section>
      <Section className="pt-0">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <Dialog.Root key={item.src}>
              <Dialog.Trigger asChild>
                <button type="button" className="text-left">
                  <Photo src={item.src} alt={item.alt} className="aspect-3/2 rounded-3xl" />
                  <span className="mt-3 block font-display text-lg">{item.title}</span>
                  <span className="text-xs tracking-wide text-muted uppercase">{item.tag}</span>
                </button>
              </Dialog.Trigger>
              <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 z-50 bg-bg/80" />
                <Dialog.Content className="fixed inset-4 z-50 m-auto flex max-h-[90svh] max-w-5xl flex-col overflow-auto rounded-3xl border border-border bg-surface p-4 md:p-6">
                  <div className="mb-4 flex items-center justify-between gap-4">
                    <Dialog.Title className="font-display text-xl">{item.title}</Dialog.Title>
                    <Dialog.Close asChild>
                      <Button variant="ghost" size="icon" aria-label="Close image">
                        <X />
                      </Button>
                    </Dialog.Close>
                  </div>
                  <img src={item.src} alt={item.alt} className="w-full rounded-2xl object-contain" />
                </Dialog.Content>
              </Dialog.Portal>
            </Dialog.Root>
          ))}
        </div>
      </Section>
      <CtaBand />
    </main>
  );
}
