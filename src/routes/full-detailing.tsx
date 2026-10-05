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
    q: "What is a full auto detailing package in San Antonio?",
    a: "Full auto detailing — also called a complete car detail or full service detailing — combines interior deep cleaning with a careful exterior process in one appointment. Scope still depends on vehicle size and how neglected the cabin and paint are.",
  },
  {
    q: "Is a full detail the same as paint correction or ceramic coating?",
    a: "No. A full detail resets a dirty vehicle inside and out. Paint correction and ceramic coating are additional paint-care services when clarity or longer protection is the goal. We will recommend those only if the vehicle actually needs them.",
  },
] as const;

export const Route = createFileRoute("/full-detailing")({
  head: () =>
    pageHead(
      "Full Auto Detailing San Antonio | Complete Car Detail",
      "Full auto detailing in San Antonio, TX — complete car detail and full service detailing inside and out. Call Southern Auto Detailers at (210) 201-4847.",
      [
        serviceJsonLd(
          "Full Auto Detailing in San Antonio, TX",
          "Complete car detail and full service detailing for San Antonio vehicles that need attention inside and out.",
          "/full-detailing",
        ),
        faqJsonLd(FAQS),
      ],
    ),
  component: FullDetailPage,
});

function FullDetailPage() {
  return (
    <main>
      <PageHero
        compact
        eyebrow="Complete car detail / full service detailing"
        title="Full Auto Detailing in San Antonio, TX"
        description="A full detail is the reset for vehicles that need attention inside and out — not a half-finished wash with a vacuumed floor mat."
        imageSrc={IMAGES.hero.src}
        imageAlt={IMAGES.hero.alt}
      />
      <Section>
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <Eyebrow>The whole vehicle</Eyebrow>
            <h2 className="font-display text-3xl">Interior plus exterior in one appointment</h2>
            <p className="mt-4 text-muted">
              Full auto detailing in San Antonio is for dusty paint, a tired cabin, wheels
              that have been ignored, and glass that never quite cleared. We combine{" "}
              <Link to="/interior-detailing" className="font-semibold text-primary">
                interior auto detailing
              </Link>{" "}
              with a safe{" "}
              <Link to="/exterior-detailing" className="font-semibold text-primary">
                exterior auto detailing
              </Link>{" "}
              process so the whole vehicle feels finished.
            </p>
            <p className="mt-4 text-muted">
              Work trucks, family SUVs, and daily drivers often land here. Tell us about pet
              hair, stains, or how long it has been. We will be direct about time and what a
              single complete car detail can accomplish versus a second visit for{" "}
              <Link to="/paint-correction" className="font-semibold text-primary">
                paint correction
              </Link>{" "}
              or{" "}
              <Link to="/ceramic-coatings" className="font-semibold text-primary">
                ceramic coating
              </Link>
              .
            </p>
          </div>
          <Photo src={IMAGES.truck.src} alt={IMAGES.truck.alt} className="aspect-3/2 rounded-3xl" />
        </div>
        <ul className="mt-12 grid gap-4 md:grid-cols-2">
          {[
            ["Cabin reset", "Carpets, seats, consoles, and touch points cleaned so the interior matches the paint work."],
            ["Exterior process", "Hand wash, wheels, decontamination, and gloss — not a tunnel wash on top of a dirty cabin."],
            ["Trucks and SUVs", "Full service detailing is scheduled around size and soil, especially work trucks that live outside."],
            ["Honest scope", "If the paint needs correction, we say so instead of calling a wash a “complete detail.”"],
          ].map(([title, body]) => (
            <li key={title} className="rounded-3xl border border-border bg-surface p-6">
              <h3 className="font-display text-xl">{title}</h3>
              <p className="mt-2 text-sm text-muted">{body}</p>
            </li>
          ))}
        </ul>
        <div className="mt-12 max-w-3xl">
          <h2 className="font-display text-2xl">Full auto detailing questions</h2>
          <div className="mt-4">
            <FaqList items={FAQS} />
          </div>
        </div>
      </Section>
      <CtaBand title="Request a full auto detailing appointment" />
    </main>
  );
}
