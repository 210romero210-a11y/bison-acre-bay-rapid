import { createFileRoute, Link } from "@tanstack/react-router";
import { CtaBand } from "@/components/cta-band";
import { FaqList } from "@/components/faq-list";
import { PageHero } from "@/components/page-hero";
import { Photo } from "@/components/photo";
import { Section, Eyebrow } from "@/components/section";
import { faqJsonLd, pageHead, serviceJsonLd } from "@/lib/seo";
import { IMAGES } from "@/lib/site";

const FAQS = [
  {
    q: "What is included in interior auto detailing in San Antonio?",
    a: "Interior auto detailing typically covers vacuum and extraction on carpets, seats cleaned and treated as the material allows (including leather conditioning), consoles, vents, door panels, and interior glass. Tell us about pet hair, stains, or odors when you book.",
  },
  {
    q: "Do you condition leather during interior car cleaning?",
    a: "Yes, when the interior has leather or vinyl that can take treatment. We clean first, then condition as the material allows so Texas heat does not dry it out further.",
  },
] as const;

export const Route = createFileRoute("/interior-detailing")({
  head: () =>
    pageHead(
      "Interior Auto Detailing San Antonio | Leather & Cabin Cleaning",
      "Interior auto detailing in San Antonio, TX — interior car cleaning, carpets, leather conditioning, and consoles. Call Southern Auto Detailers at (210) 201-4847.",
      [
        serviceJsonLd(
          "Interior Auto Detailing in San Antonio, TX",
          "Interior auto detailing and interior car cleaning for seats, carpets, leather, consoles, and door panels in San Antonio, TX.",
          "/interior-detailing",
        ),
        faqJsonLd(FAQS),
      ],
    ),
  component: InteriorPage,
});

const included = [
  "Vacuum and extraction on carpets and mats",
  "Seats — cloth, leather, or vinyl — cleaned and treated as the material allows",
  "Leather conditioning when the interior can take it",
  "Console, vents, switches, and high-touch plastics",
  "Door panels, pockets, and jambs",
  "Interior glass",
  "Optional attention for pet hair and common stains when disclosed at booking",
];

function InteriorPage() {
  return (
    <main>
      <PageHero
        compact
        eyebrow="Interior car cleaning San Antonio"
        title="Interior Auto Detailing in San Antonio, TX"
        description="Heat, kids, pets, and commute miles leave a cabin that a vacuum at the car wash never touches. Interior auto detailing deep-cleans the surfaces you actually live with."
        imageSrc={IMAGES.suvInterior.src}
        imageAlt={IMAGES.suvInterior.alt}
      />
      <Section>
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <Eyebrow>The cabin</Eyebrow>
            <h2 className="font-display text-3xl">Interior car cleaning — not a wipe-down</h2>
            <p className="mt-4 text-muted">
              Interior auto detailing in San Antonio has to deal with more than dust. UV cooks
              dashboards. Oak pollen works into carpets every spring. Work trucks collect
              grit in the seat tracks. Family SUVs hide crumbs, spills, and the smell of
              last week’s practices.
            </p>
            <p className="mt-4 text-muted">
              Southern Auto Detailers plans interior time around the vehicle you actually
              drive. A lightly used sedan is a different job from a crew-cab that hauls
              dogs. Tell us what is going on — stains, pet hair, smoke, food — so the
              appointment is honest about scope. Leather conditioning is part of the cabin
              reset when the material can take it.
            </p>
          </div>
          <Photo
            src={IMAGES.interior.src}
            alt={IMAGES.interior.alt}
            className="aspect-3/2 rounded-3xl"
          />
        </div>
        <div className="mt-12 rounded-3xl border border-border bg-surface p-6 md:p-8">
          <h2 className="font-display text-2xl">What interior auto detailing covers</h2>
          <ul className="mt-5 grid gap-3 text-sm text-muted md:grid-cols-2">
            {included.map((item) => (
              <li key={item} className="border-l-2 border-primary pl-3">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Section>
      <Section tone="surface">
        <Eyebrow>Who it’s for</Eyebrow>
        <h2 className="font-display text-3xl">Daily drivers, family SUVs, and work trucks</h2>
        <p className="mt-4 max-w-3xl text-muted">
          If you park outside in Northeast San Antonio, Live Oak, or along I-35, the cabin
          films over faster than you think. Leather dries. Cloth holds odors. Hard plastics
          haze. Interior work is the fastest way to make the vehicle feel new again without
          waiting on paint correction.
        </p>
        <p className="mt-4 max-w-3xl text-muted">
          Pair it with{" "}
          <Link to="/exterior-detailing" className="font-semibold text-primary">
            exterior auto detailing
          </Link>{" "}
          or a{" "}
          <Link to="/full-detailing" className="font-semibold text-primary">
            full auto detailing
          </Link>{" "}
          package when the paint needs the same attention. We will not upsell a coating on a
          cabin-only visit unless you ask.
        </p>
        <div className="mt-10 max-w-3xl">
          <h2 className="font-display text-2xl">Interior detailing questions</h2>
          <div className="mt-4">
            <FaqList items={FAQS} />
          </div>
        </div>
      </Section>
      <CtaBand title="Book interior auto detailing in San Antonio" />
    </main>
  );
}
