import { createFileRoute, Link } from "@tanstack/react-router";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { Photo } from "@/components/photo";
import { Section, Eyebrow } from "@/components/section";
import { pageHead, serviceJsonLd } from "@/lib/seo";
import { IMAGES } from "@/lib/site";

export const Route = createFileRoute("/exterior-detailing")({
  head: () =>
    pageHead(
      "Exterior Auto Detailing San Antonio | Hand Wash & Clay Bar",
      "Exterior auto detailing in San Antonio, TX — hand wash, decontamination, clay bar treatment, wheels, and gloss. Call (210) 201-4847.",
      serviceJsonLd(
        "Exterior Auto Detailing in San Antonio, TX",
        "Exterior auto detailing, hand wash, and clay bar decontamination for San Antonio vehicles.",
        "/exterior-detailing",
      ),
    ),
  component: ExteriorPage,
});

function ExteriorPage() {
  return (
    <main>
      <PageHero
        compact
        eyebrow="Exterior car wash / hand wash"
        title="Exterior Auto Detailing in San Antonio, TX"
        description="Texas sun, hard water, and caliche dust dull paint fast. A careful exterior detail and hand wash restore gloss without grinding swirls into the clear coat."
        imageSrc={IMAGES.exterior.src}
        imageAlt={IMAGES.exterior.alt}
      />
      <Section>
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <Eyebrow>The paint</Eyebrow>
            <h2 className="font-display text-3xl">Hand wash, clay bar, then protection</h2>
            <p className="mt-4 text-muted">
              Exterior auto detailing in San Antonio is not a tunnel wash. Automatic brushes
              and dirty mitts leave the haze you see in parking-lot sun. We wash by hand,
              clean wheels and barrels, and decontaminate — including clay bar treatment
              when bonded film is on the paint — so the surface can actually take gloss.
            </p>
            <p className="mt-4 text-muted">
              Hard-water spots from sprinklers and wash bays are common here. So is film
              from I-35 and Loop 1604. If the clear coat is already swirled, we will tell
              you when a wash will only go so far and{" "}
              <Link to="/paint-correction" className="font-semibold text-primary">
                paint correction
              </Link>{" "}
              is the honest next step, or{" "}
              <Link to="/ceramic-coatings" className="font-semibold text-primary">
                ceramic coating
              </Link>{" "}
              after the paint is ready.
            </p>
          </div>
          <Photo src={IMAGES.wheels.src} alt={IMAGES.wheels.alt} className="aspect-3/2 rounded-3xl" />
        </div>
        <ul className="mt-12 grid gap-4 md:grid-cols-2">
          {[
            ["Hand wash", "Two-bucket technique and clean tools — no abrasive shortcuts on your clear coat."],
            ["Wheels and tires", "Face, barrel, and tire dressing after the dirt is actually gone."],
            ["Clay bar treatment", "Bonded fallout, tree film, and industrial dust that soap alone will not move."],
            ["Gloss and protection", "Enhancement and a protective layer matched to how you park and drive."],
          ].map(([title, body]) => (
            <li key={title} className="rounded-3xl border border-border bg-surface p-6">
              <h3 className="font-display text-xl">{title}</h3>
              <p className="mt-2 text-sm text-muted">{body}</p>
            </li>
          ))}
        </ul>
      </Section>
      <CtaBand title="Book exterior auto detailing in San Antonio" />
    </main>
  );
}
