import { createFileRoute } from "@tanstack/react-router";
import { CtaBand } from "@/components/cta-band";
import { CommunityPledge } from "@/components/community-pledge";
import { FaqList } from "@/components/faq-list";
import { PageHero } from "@/components/page-hero";
import { Photo } from "@/components/photo";
import { Section, Eyebrow } from "@/components/section";
import { crumbsFor, faqJsonLd, pageHead } from "@/lib/seo";
import { BUSINESS, IMAGES, JUNIOR_ACHIEVEMENT } from "@/lib/site";

const FAQS = [
  {
    q: "Who does the work?",
    a: "Robert Romero Jr., an IDA-certified detailer from Alamo Heights with auto body and paint experience. One vehicle at a time.",
  },
  {
    q: "Where is the studio?",
    a: "11692 Bricken Circle, San Antonio, TX 78233. Tuesday through Sunday, 7:00 AM to 11:00 PM. Monday closed.",
  },
  {
    q: "What happens to 10% of the sale?",
    a: "It goes to Junior Achievement of South Texas. That is not a discount off your quote.",
  },
] as const;

export const Route = createFileRoute("/about")({
  head: () =>
    pageHead(
      "About Southern Auto Detailers | Robert Romero Jr. | San Antonio, TX",
      "Learn about Southern Auto Detailers, an in-shop auto detailing business in San Antonio, Texas.",
      "/about",
      [faqJsonLd("/about", FAQS)],
      "A private detailing studio with a community mission",
    ),
  component: AboutPage,
});

function AboutPage() {
  return (
    <main>
      <PageHero
        compact
        eyebrow="San Antonio based · Alamo Heights owner"
        title="A private detailing studio with a community mission"
        description="Southern Auto Detailers is San Antonio based. Owner Robert Romero Jr. is from Alamo Heights, where he graduated, and still serves the city he calls home."
        imageSrc={IMAGES.coupe.src}
        imageAlt={IMAGES.coupe.alt}
        crumbs={crumbsFor("/about")}
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <Eyebrow>The founder</Eyebrow>
            <h2 className="font-display text-3xl">
              {BUSINESS.founder}, IDA-certified detailer
            </h2>
            <p className="mt-4 text-muted">
              We are more than just a car detailing service — we are a community-centered,
              quality-driven, and customer-focused business dedicated to excellence and
              generosity. Southern Auto Detailers is San Antonio based, located at{" "}
              {BUSINESS.addressLine}, and rooted in Alamo Heights.
            </p>
            <p className="mt-4 text-muted">
              Our founder, {BUSINESS.founder}, is from Alamo Heights and is an Alamo Heights
              graduate. He is an IDA-certified detailer with over a decade of high-end
              detailing experience, 8 years in auto body and paint, and more than 20 years
              in customer service. As a dedicated one-man powerhouse, Robert approaches
              every vehicle as a unique project — meticulous skill, privacy, and personal
              care in a private, appointment-based studio.
            </p>
            <p className="mt-4 text-muted">
              Call{" "}
              <a className="font-semibold text-primary" href={BUSINESS.phoneTel}>
                {BUSINESS.phoneDisplay}
              </a>{" "}
              or email{" "}
              <a className="font-semibold text-primary" href={BUSINESS.emailMailto}>
                {BUSINESS.email}
              </a>
              . Hours: {BUSINESS.hoursSummary}.
            </p>
          </div>
          <Photo src={IMAGES.hero.src} alt={IMAGES.hero.alt} className="aspect-3/2 rounded-3xl" />
        </div>
      </Section>

      <CommunityPledge />

      <Section>
        <Eyebrow>The mission</Eyebrow>
        <h2 className="font-display text-3xl">Immaculate vehicles — and a brighter city</h2>
        <p className="mt-4 max-w-3xl text-muted">
          For us, immaculate vehicles are only part of the mission. We believe in driving
          real change in our community. That is why we donate 10% of every sale to{" "}
          <a
            href={JUNIOR_ACHIEVEMENT.url}
            className="font-semibold text-primary underline-offset-4 hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            {JUNIOR_ACHIEVEMENT.name}
          </a>
          , supporting local youth and fueling the dreams of the next generation.
        </p>
        <p className="mt-4 max-w-3xl text-muted">
          When you choose Southern Auto Detailers, you aren’t just getting an elite shine —
          you’re investing in a brighter future for San Antonio.
        </p>
        <p className="mt-4 max-w-3xl text-muted">
          This climate is hard on vehicles. Summer UV fades and oxidizes. Sprinklers spot
          paint. Oak pollen and caliche dust grind into clear coat if they are dry-wiped.
          Interiors bake. We choose products and dwell times with that in mind, and we
          would rather decline a same-day squeeze than hurry a job.
        </p>
      </Section>

      <Section tone="surface">
        <Eyebrow>Expect</Eyebrow>
        <h2 className="font-display text-3xl">What working with us feels like</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            [
              "Straight answers",
              "If a stain may not fully release, or paint is too thin for heavy correction, we say so before the work starts.",
            ],
            [
              "Private studio",
              "One vehicle at a time at 11692 Bricken Circle. Not a crowded bay. Appointments keep the work unhurried.",
            ],
            [
              "Direct line",
              `${BUSINESS.phoneDisplay} · ${BUSINESS.email}. Quotes, timing, and follow-up — no maze of forms required.`,
            ],
          ].map(([title, body]) => (
            <div key={title} className="rounded-3xl border border-border bg-bg p-6">
              <h3 className="font-display text-xl">{title}</h3>
              <p className="mt-2 text-sm text-muted">{body}</p>
            </div>
          ))}
        </div>
      </Section>
      <Section>
        <Eyebrow>Questions</Eyebrow>
        <h2 className="font-display text-3xl">About the studio</h2>
        <div className="mt-8 max-w-3xl">
          <FaqList items={FAQS} />
        </div>
      </Section>
      <CtaBand />
    </main>
  );
}
