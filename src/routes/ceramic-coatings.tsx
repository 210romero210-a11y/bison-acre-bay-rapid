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
    q: "How much does ceramic coating cost in San Antonio?",
    a: "Ceramic coating cost in San Antonio depends on vehicle size, paint condition, and how much correction the surface needs before coating. A daily driver with light marring is a different job from a neglected dark SUV or truck. Call (210) 201-4847 for a quote — we do not publish a fake starting price that ignores prep.",
  },
  {
    q: "Do you install ceramic coating on trucks as well as cars?",
    a: "Yes. Ceramic coating for cars and trucks in San Antonio is scheduled by the vehicle, not a one-size kit. Trucks that live outside in Northeast San Antonio often need more decontamination and correction before the coating goes on.",
  },
  {
    q: "Is nano ceramic coating different from ceramic coating?",
    a: "People searching nano ceramic coating in San Antonio are usually looking for a professionally installed ceramic coating — a thin, durable layer of protection after proper prep. We will explain what we apply and what it will and will not do before you book.",
  },
] as const;

export const Route = createFileRoute("/ceramic-coatings")({
  head: () =>
    pageHead(
      "Ceramic Coating San Antonio TX | Installer & Cost Guide",
      "Ceramic coating in San Antonio, TX — professional installation, prep, and honest cost guidance for cars and trucks. Call Southern Auto Detailers at (210) 201-4847.",
      [
        serviceJsonLd(
          "Ceramic Coating in San Antonio, TX",
          "Ceramic coating installer in San Antonio, TX for durable paint protection after proper prep.",
          "/ceramic-coatings",
        ),
        faqJsonLd(FAQS),
      ],
    ),
  component: CeramicPage,
});

function CeramicPage() {
  return (
    <main>
      <PageHero
        compact
        eyebrow="Ceramic coating installer San Antonio"
        title="Ceramic Coating in San Antonio, TX"
        description="A coating is not a magic shield against rocks. It is durable protection and easier washing — after the paint is actually prepared by a ceramic coating installer who will not skip correction."
        imageSrc={IMAGES.ceramic.src}
        imageAlt={IMAGES.ceramic.alt}
      />
      <Section>
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <Eyebrow>Protection</Eyebrow>
            <h2 className="font-display text-3xl">Ceramic coating for cars and trucks in Texas sun</h2>
            <p className="mt-4 text-muted">
              Ceramic coating in San Antonio TX earns its keep in UV, heat, and hard water.
              A well-applied coating helps water release, slows oxidation, and makes
              maintenance details faster. It does not stop door dings, and it does not
              replace washing.
            </p>
            <p className="mt-4 text-muted">
              We will not coat over swirled, contaminated paint. Preparation — wash,
              decontamination, and{" "}
              <Link to="/paint-correction" className="font-semibold text-primary">
                paint correction
              </Link>{" "}
              as needed — is the job. The coating is the last step. If your vehicle is a
              daily driver that parks outside in{" "}
              <Link to="/san-antonio-78233" className="font-semibold text-primary">
                Northeast San Antonio / 78233
              </Link>
              , that sequence is what keeps gloss from fading by August. Drivers searching
              ceramic coating near me in San Antonio can start with a phone call, not a
              brochure warranty.
            </p>
          </div>
          <Photo src={IMAGES.ceramic.src} alt={IMAGES.ceramic.alt} className="aspect-3/2 rounded-3xl" />
        </div>
        <ul className="mt-12 grid gap-4 md:grid-cols-3">
          {[
            ["Easier washing", "Dirt releases with less scrubbing, which means fewer new swirls."],
            ["UV and chemical help", "A sacrificial layer between the clear coat and the environment."],
            ["Maintenance plan", "Coatings still need gentle washing. We will tell you how to not undo the work."],
          ].map(([title, body]) => (
            <li key={title} className="rounded-3xl border border-border bg-surface p-6">
              <h3 className="font-display text-xl">{title}</h3>
              <p className="mt-2 text-sm text-muted">{body}</p>
            </li>
          ))}
        </ul>
        <div className="mt-12 max-w-3xl">
          <h2 className="font-display text-2xl">Ceramic coating San Antonio cost</h2>
          <p className="mt-3 text-muted">
            Searching ceramic coating San Antonio price or cost? Prep is most of the work.
            A coated truck that skipped correction is just expensive product on dull paint.
            Call (210) 201-4847 and we will talk through the vehicle before quoting.
          </p>
          <div className="mt-4">
            <FaqList items={FAQS} />
          </div>
        </div>
      </Section>
      <CtaBand title="Talk through ceramic coating in San Antonio" />
    </main>
  );
}
