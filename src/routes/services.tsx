import { createFileRoute, Link } from "@tanstack/react-router";
import { CtaBand } from "@/components/cta-band";
import { FaqList } from "@/components/faq-list";
import { PageHero } from "@/components/page-hero";
import { Photo } from "@/components/photo";
import { Section, Eyebrow } from "@/components/section";
import { ServiceCard } from "@/components/service-card";
import { crumbsFor, faqJsonLd, pageHead } from "@/lib/seo";
import { IMAGES, SERVICES } from "@/lib/site";

const FAQS = [
  {
    q: "Which service page should I open?",
    a: "Interior detailing for the cabin, exterior detailing for the paint and wheels, full detailing for both, paint correction for swirls, and ceramic coating only after the paint is ready. Pricing explains what changes the quote.",
  },
  {
    q: "Do you publish package prices?",
    a: "No. Condition changes the job. Call (210) 201-4847 with the vehicle and you get a quote. A 20% non-refundable deposit of that total holds the slot.",
  },
  {
    q: "Where is the work done?",
    a: "At the studio, 11692 Bricken Circle, San Antonio, TX 78233.",
  },
] as const;

export const Route = createFileRoute("/services")({
  head: () =>
    pageHead(
      "Auto Detailing Services San Antonio TX | Interior, Exterior, Full Detail",
      "Browse in-shop auto detailing, ceramic coating, paint correction, interior detailing, exterior detailing, and full detailing services.",
      "/services",
      [faqJsonLd("/services", FAQS)],
      "Auto Detailing Services in San Antonio, TX",
      IMAGES.truck,
    ),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <main>
      <PageHero
        compact
        eyebrow="Detailing, paint correction, ceramic coatings"
        title="Auto Detailing Services in San Antonio, TX"
        description="Choose the level of care your vehicle needs — a deep interior, a careful exterior, a full reset, paint correction, or ceramic protection. We recommend from condition, not a one-size ticket."
        imageSrc={IMAGES.truck.src}
        imageAlt={IMAGES.truck.alt}
        crumbs={crumbsFor("/services")}
      />

      <Section>
        <Eyebrow>Menu</Eyebrow>
        <h2 className="font-display text-3xl">Core services</h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.filter((s) => s.slug !== "maintenance").map((service) => (
              <ServiceCard key={service.slug} {...service} />
            ))}
        </div>
      </Section>

      <Section tone="surface" id="full-detail" className="scroll-mt-24">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <Eyebrow>Packages</Eyebrow>
            <h2 className="font-display text-3xl md:text-4xl">Full auto detailing in San Antonio</h2>
            <p className="mt-4 text-muted">
              A full auto detailing package — a complete car detail — is for vehicles that
              need attention inside and out: dusty paint, a tired cabin, wheels that have
              been ignored, and glass that never quite cleared. We combine interior deep
              cleaning with a safe exterior process so the whole vehicle feels reset.
            </p>
            <p className="mt-4 text-muted">
              Work trucks, family SUVs, and daily drivers often land here. Tell us about pet
              hair, stains, or how long it has been. We will be direct about time and what a
              single appointment can accomplish.
            </p>
            <Link to="/full-detailing" className="mt-6 inline-block text-sm font-semibold text-primary">
              Full auto detailing in San Antonio
            </Link>
            <Link
              to="/blog/what-a-full-detail-includes"
              className="mt-3 block text-sm font-semibold text-primary"
            >
              What a full detail includes
            </Link>
          </div>
          <Photo src={IMAGES.hero.src} alt={IMAGES.hero.alt} className="aspect-3/2 rounded-3xl" />
        </div>
      </Section>

      <Section id="maintenance" className="scroll-mt-24">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Photo src={IMAGES.wheels.src} alt={IMAGES.wheels.alt} className="aspect-3/2 rounded-3xl lg:order-2" />
          <div>
            <Eyebrow>Keep it</Eyebrow>
            <h2 className="font-display text-3xl md:text-4xl">Maintenance details</h2>
            <p className="mt-4 text-muted">
              Once a vehicle is clean — or newly coated — a lighter, recurring detail keeps
              pollen, dust, and commute film from baking in. Maintenance is not a shortcut
              first visit. It is the cadence that protects the work you already paid for.
            </p>
            <p className="mt-4 text-muted">
              Many San Antonio drivers do well every three to six months. Parking outside,
              kids, pets, and highway miles pull that interval shorter. We will help you pick
              a realistic schedule.
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <Eyebrow>From the studio</Eyebrow>
        <h2 className="font-display text-3xl">Notes that match each service</h2>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {[
            ["/blog/floor-mats-and-carpets", "Interior: mats and carpets"],
            ["/blog/pet-hair-interior-detailing", "Interior: pet hair"],
            ["/blog/wheel-detailing-san-antonio", "Exterior: wheels"],
            ["/blog/bird-droppings-on-car-paint", "Exterior: bird droppings"],
            ["/blog/what-a-full-detail-includes", "Full detail: what is included"],
            ["/blog/detailing-trucks-and-suvs-san-antonio", "Full detail: trucks and SUVs"],
            ["/blog/swirl-marks-from-car-washes", "Paint correction: swirl marks"],
            ["/blog/ceramic-coating-vs-wax", "Compare ceramic coating and wax"],
            ["/blog/how-to-wash-ceramic-coated-car", "How to wash a ceramic-coated car"],
            ["/blog/new-car-paint-correction-before-ceramic-coating", "Preparing a new vehicle for coating"],
            ["/blog/water-spots-on-car-paint", "Water spots and paint etching"],
            ["/blog/what-is-paint-correction", "Understand how paint correction works"],
          ].map(([to, label]) => (
            <li key={to}>
              <Link to={to as never} className="font-semibold text-primary">
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="surface">
        <Eyebrow>Questions</Eyebrow>
        <h2 className="font-display text-3xl">Service FAQs</h2>
        <div className="mt-8 max-w-3xl">
          <FaqList items={FAQS} />
        </div>
      </Section>

      <CtaBand />
    </main>
  );
}
