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
    q: "How much does paint correction cost in San Antonio?",
    a: "Paint correction cost in San Antonio depends on paint condition, color, vehicle size, and how many polishing stages the clear coat can safely support. Light swirl mark removal is a different job from heavier paint restoration. Call (210) 201-4847 for a quote after we understand the vehicle — we will not invent a one-price ticket.",
  },
  {
    q: "Is swirl mark removal the same as scratch removal?",
    a: "Swirl marks and wash marring are usually in the clear coat and often improve with professional paint polishing. Deeper scratches that catch a fingernail may not fully disappear. We inspect first and tell you what correction can actually do.",
  },
] as const;

export const Route = createFileRoute("/paint-correction")({
  head: () =>
    pageHead(
      "Paint Correction San Antonio TX | Swirl Mark Removal",
      "Paint correction in San Antonio, TX — swirl mark removal, paint polishing, and light scratch removal. Call Southern Auto Detailers at (210) 201-4847.",
      [
        serviceJsonLd(
          "Paint Correction in San Antonio, TX",
          "Professional paint correction, swirl mark removal, and paint polishing in San Antonio, TX.",
          "/paint-correction",
        ),
        faqJsonLd(FAQS),
      ],
    ),
  component: PaintPage,
});

function PaintPage() {
  return (
    <main>
      <PageHero
        compact
        eyebrow="Swirl mark removal & paint polishing"
        title="Paint Correction in San Antonio, TX"
        description="Sun and automatic washes leave holograms, haze, and wash marring. Paint correction and swirl mark removal improve clarity so the color you bought is the color you see."
        imageSrc={IMAGES.paint.src}
        imageAlt={IMAGES.paint.alt}
      />
      <Section>
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <Eyebrow>Clarity</Eyebrow>
            <h2 className="font-display text-3xl">Swirl mark removal, polishing, and light scratch work</h2>
            <p className="mt-4 text-muted">
              Paint correction in San Antonio TX is for vehicles that still look dull after a
              proper wash. Light swirls, buffer trails, and oxidation scatter light. We
              evaluate the clear coat, then polish to the level the paint can safely
              support — not a one-pad “showroom” promise on every car.
            </p>
            <p className="mt-4 text-muted">
              Dark colors show it first. So do vehicles that lived in tunnel washes. If
              the damage is deep, we will say so. Correction is not dent repair, and it is
              not a wrap. It is controlled paint polishing to restore clarity, then
              protection — often{" "}
              <Link to="/ceramic-coatings" className="font-semibold text-primary">
                ceramic coating
              </Link>{" "}
              — so the work lasts in Texas UV. Drivers in{" "}
              <Link to="/san-antonio-78233" className="font-semibold text-primary">
                78233
              </Link>{" "}
              and Northeast San Antonio can ask about the same process.
            </p>
          </div>
          <Photo src={IMAGES.coupe.src} alt={IMAGES.coupe.alt} className="aspect-3/2 rounded-3xl" />
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {[
            ["Inspection", "We look at paint thickness, existing marring, and whether correction is the right spend."],
            ["Paint polishing", "Machine polishing in stages matched to the defect — light enhancement through heavier paint restoration."],
            ["Scratch removal", "Light clear-coat scratches and swirl marks often improve. Deep scratches are called out before we start."],
          ].map(([title, body]) => (
            <div key={title} className="rounded-3xl border border-border bg-surface p-6">
              <h3 className="font-display text-xl">{title}</h3>
              <p className="mt-2 text-sm text-muted">{body}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 max-w-3xl">
          <h2 className="font-display text-2xl">Paint correction cost and questions</h2>
          <p className="mt-3 text-muted">
            Searching paint correction San Antonio cost? The honest answer is that prep and
            defect level drive the price more than a menu name. Call (210) 201-4847 and describe
            the vehicle.
          </p>
          <div className="mt-4">
            <FaqList items={FAQS} />
          </div>
        </div>
      </Section>
      <CtaBand title="Ask about paint correction in San Antonio" />
    </main>
  );
}
