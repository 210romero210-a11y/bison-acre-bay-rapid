import { createFileRoute, Link } from "@tanstack/react-router";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CtaBand } from "@/components/cta-band";
import { FaqList } from "@/components/faq-list";
import { Photo } from "@/components/photo";
import { Section, Eyebrow } from "@/components/section";
import { crumbsFor, faqJsonLd, pageHead } from "@/lib/seo";
import { AREAS, BUSINESS, IMAGES, PLACE_LINKS } from "@/lib/site";

const FAQS = [
  {
    q: "Which northeast places do you actually name?",
    a: "78233 is home. Royal Ridge is in 78233 and 78239. Rolling Oaks Mall is at Loop 1604 and Nacogdoches in 78247. Fort Sam Houston is 78234, and we are not on base. Live Oak, Universal City, Converse, Windcrest, and Schertz bring the vehicle to the studio.",
  },
  {
    q: "Is Oak Meadow part of 78233?",
    a: "No. Oak Meadow is north-central San Antonio. You can still book the northeast studio if the drive works. We do not pretend the shop is in that neighborhood.",
  },
  {
    q: "Do you come to these neighborhoods?",
    a: "No. Every appointment is at 11692 Bricken Circle, San Antonio, TX 78233.",
  },
] as const;

export const Route = createFileRoute("/service-areas")({
  head: () =>
    pageHead(
      "Auto Detailing Near San Antonio TX | 78233, Royal Ridge, Fort Sam",
      "Customers from northeast San Antonio and nearby cities visit the in-shop studio at 11692 Bricken Circle.",
      "/service-areas",
      [faqJsonLd("/service-areas", FAQS)],
      "Auto detailing near San Antonio, TX",
    ),
  component: AreasPage,
});

function AreasPage() {
  return (
    <main>
      <Section>
        <Breadcrumbs items={crumbsFor("/service-areas")} className="mb-6" />
        <Eyebrow>Northeast San Antonio</Eyebrow>
        <h1 className="max-w-3xl font-display text-4xl md:text-5xl">
          Auto detailing near San Antonio, TX
        </h1>
        <p className="mt-4 max-w-2xl text-muted">
          Looking for an auto detailing shop near you in San Antonio? Southern Auto
          Detailers works with drivers across the city and the northeast metro. If you are
          nearby and the vehicle is eligible, call {BUSINESS.phoneDisplay} and we will
          confirm.
        </p>
        <Photo
          src={IMAGES.truck.src}
          alt={IMAGES.truck.alt}
          className="mt-10 aspect-21/9 max-h-80 rounded-3xl"
        />
      </Section>
      <Section tone="surface" className="pt-8">
        <div className="mb-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {PLACE_LINKS.map((place) => (
            <Link
              key={place.to}
              to={place.to}
              className="rounded-2xl border border-border bg-bg px-4 py-3 text-sm font-semibold text-primary"
            >
              {place.label}
            </Link>
          ))}
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {AREAS.map((area) => (
            <article key={area.name} className="rounded-3xl border border-border bg-bg p-6 md:p-8">
              <h2 className="font-display text-2xl">{area.name}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">{area.blurb}</p>
              {area.to ? (
                <Link to={area.to} className="mt-4 inline-block text-sm font-semibold text-primary">
                  {area.linkLabel}
                </Link>
              ) : null}
            </article>
          ))}
        </div>
        <p className="mt-10 max-w-3xl text-muted">
          Royal Ridge, the Rolling Oaks Mall area, and Fort Sam Houston are the northeast
          names competitors skip. Oak Meadow is north-central, not this ZIP. Start with a
          call to {BUSINESS.phoneDisplay}. We will ask about vehicle size, interior soil,
          and paint condition, then recommend interior, exterior, full, correction, or
          coating work at the studio.
        </p>
        <div className="mt-10 max-w-3xl">
          <FaqList items={FAQS} />
        </div>
      </Section>
      <CtaBand title="See if we can take your vehicle" />
    </main>
  );
}
