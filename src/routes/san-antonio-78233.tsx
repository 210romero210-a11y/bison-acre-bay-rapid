import { createFileRoute, Link } from "@tanstack/react-router";
import { CtaBand } from "@/components/cta-band";
import { FaqList } from "@/components/faq-list";
import { PageHero } from "@/components/page-hero";
import { Photo } from "@/components/photo";
import { Section, Eyebrow } from "@/components/section";
import { ServiceCard } from "@/components/service-card";
import { faqJsonLd, pageHead, serviceJsonLd } from "@/lib/seo";
import { IMAGES, SERVICES } from "@/lib/site";

const FAQS = [
  {
    q: "Do you offer auto detailing in 78233 San Antonio TX?",
    a: "Yes. Southern Auto Detailers serves the 78233 ZIP and Northeast San Antonio, including drivers near Rolling Oaks Mall, Windcrest, Live Oak, and Universal City. Call (210) 201-4847 to confirm appointment timing.",
  },
  {
    q: "Can I book ceramic coating or paint correction in 78233?",
    a: "Yes. Ceramic coating 78233 and paint correction 78233 are scheduled the same way as the rest of San Antonio — by the vehicle’s condition, not a zip-code gimmick. Call for a recommendation.",
  },
] as const;

export const Route = createFileRoute("/san-antonio-78233")({
  head: () =>
    pageHead(
      "Auto Detailing 78233 San Antonio TX | Southern Auto Detailers",
      "Auto detailing and car detailing in 78233 San Antonio, TX — interiors, exteriors, paint correction, and ceramic coating for Northeast San Antonio. Call (210) 201-4847.",
      [
        serviceJsonLd(
          "Auto Detailing in 78233 San Antonio, TX",
          "Auto detailing, car detailing, and ceramic coating for the 78233 ZIP and Northeast San Antonio.",
          "/san-antonio-78233",
        ),
        faqJsonLd(FAQS),
      ],
    ),
  component: ZipPage,
});

function ZipPage() {
  return (
    <main>
      <PageHero
        compact
        eyebrow="78233 · Northeast San Antonio"
        title="Auto Detailing in 78233, San Antonio, TX"
        description="Car detailing for the 78233 ZIP and nearby Northeast San Antonio — interiors, exteriors, full packages, paint correction, and ceramic coating by appointment."
        imageSrc={IMAGES.truck.src}
        imageAlt={IMAGES.truck.alt}
      />
      <Section>
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <Eyebrow>Local ZIP</Eyebrow>
            <h2 className="font-display text-3xl">Northeast San Antonio vehicles take a beating</h2>
            <p className="mt-4 text-muted">
              Auto detailing 78233 is not a separate menu. It is San Antonio heat, I-35 and
              Loop 1604 film, oak pollen, and hard-water spots on vehicles that park outside
              near Rolling Oaks Mall, Windcrest, Live Oak, and Universal City. Southern Auto
              Detailers details eligible cars, trucks, and SUVs by appointment —{" "}
              <Link to="/interior-detailing" className="font-semibold text-primary">
                interior
              </Link>
              ,{" "}
              <Link to="/exterior-detailing" className="font-semibold text-primary">
                exterior
              </Link>
              ,{" "}
              <Link to="/full-detailing" className="font-semibold text-primary">
                full auto detailing
              </Link>
              ,{" "}
              <Link to="/paint-correction" className="font-semibold text-primary">
                paint correction
              </Link>
              , and{" "}
              <Link to="/ceramic-coatings" className="font-semibold text-primary">
                ceramic coating 78233
              </Link>
              .
            </p>
            <p className="mt-4 text-muted">
              Searching car detailing 78233 or auto detailing near Rolling Oaks Mall? Call{" "}
              (210) 201-4847. We will confirm timing for your vehicle instead of publishing a
              street address we cannot verify as ours.
            </p>
          </div>
          <Photo src={IMAGES.neglected.src} alt={IMAGES.neglected.alt} className="aspect-3/2 rounded-3xl" />
        </div>
      </Section>
      <Section tone="surface">
        <Eyebrow>Nearby</Eyebrow>
        <h2 className="font-display text-3xl">Communities we regularly hear from</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {[
            ["Northeast San Antonio", "Commute film, construction dust, and summer storms along the I-35 / 1604 corridor."],
            ["Windcrest", "Car detailing near Windcrest TX — next door to 78233 and Rolling Oaks."],
            ["Live Oak", "Auto detailing near Live Oak TX for neighborhood pollen and highway miles."],
            ["Universal City", "Auto detailing near Universal City TX and the Randolph area."],
          ].map(([title, body]) => (
            <article key={title} className="rounded-3xl border border-border bg-bg p-6">
              <h3 className="font-display text-xl">{title}</h3>
              <p className="mt-2 text-sm text-muted">{body}</p>
            </article>
          ))}
        </div>
        <p className="mt-8 text-sm text-muted">
          Also nearby: Converse, Schertz, and Cibolo. See all{" "}
          <Link to="/service-areas" className="font-semibold text-primary">
            San Antonio service areas
          </Link>
          .
        </p>
      </Section>
      <Section>
        <Eyebrow>Services in 78233</Eyebrow>
        <h2 className="font-display text-3xl">What to book</h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.filter((s) => s.slug !== "maintenance").map((service) => (
            <ServiceCard key={service.slug} {...service} />
          ))}
        </div>
        <div className="mt-12 max-w-3xl">
          <h2 className="font-display text-2xl">78233 detailing questions</h2>
          <div className="mt-4">
            <FaqList items={FAQS} />
          </div>
        </div>
      </Section>
      <CtaBand title="Book auto detailing in 78233" />
    </main>
  );
}
