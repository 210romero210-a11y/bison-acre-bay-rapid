import { createFileRoute, Link } from "@tanstack/react-router";
import { CtaBand } from "@/components/cta-band";
import { Photo } from "@/components/photo";
import { Section, Eyebrow } from "@/components/section";
import { pageHead } from "@/lib/seo";
import { AREAS, BUSINESS, IMAGES } from "@/lib/site";

export const Route = createFileRoute("/service-areas")({
  head: () =>
    pageHead(
      "Auto Detailing Near San Antonio TX | 78233, Live Oak, Schertz",
      "Auto detailing near San Antonio, TX — Northeast San Antonio, 78233, Live Oak, Universal City, Converse, Schertz, Cibolo, and Windcrest. Call (210) 201-4847.",
    ),
  component: AreasPage,
});

function AreasPage() {
  return (
    <main>
      <Section>
        <Eyebrow>San Antonio-area geographic keywords</Eyebrow>
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
        <Link
          to="/san-antonio-78233"
          className="mb-8 block rounded-3xl border border-primary/40 bg-bg p-6 md:p-8"
        >
          <p className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">
            Featured ZIP
          </p>
          <h2 className="mt-2 font-display text-2xl md:text-3xl">
            Auto detailing 78233 San Antonio TX
          </h2>
          <p className="mt-3 max-w-3xl text-sm text-muted">
            Car detailing and ceramic coating for Northeast San Antonio, Rolling Oaks Mall
            area, Windcrest, Live Oak, and Universal City. Open the 78233 page for local
            details.
          </p>
        </Link>
        <div className="grid gap-5 md:grid-cols-2">
          {AREAS.map((area) => (
            <article key={area.name} className="rounded-3xl border border-border bg-bg p-6 md:p-8">
              <h2 className="font-display text-2xl">{area.name}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">{area.blurb}</p>
            </article>
          ))}
        </div>
        <p className="mt-10 max-w-3xl text-muted">
          Searching auto detailing near Live Oak TX, Universal City, Schertz, Converse, or
          Windcrest? Start with a call. We will ask about vehicle size, interior soil, and
          paint condition, then recommend interior, exterior, full, correction, or coating
          work.
        </p>
      </Section>
      <CtaBand title="See if we can take your vehicle" />
    </main>
  );
}
