import { createFileRoute, Link } from "@tanstack/react-router";
import { CalendarClock, Car, Lock, MapPin, Phone, ShieldCheck, Sparkles } from "lucide-react";
import { BookingForm } from "@/components/booking-form";
import { CommunityPledge } from "@/components/community-pledge";
import { FaqList } from "@/components/faq-list";
import { Photo } from "@/components/photo";
import { Section, Eyebrow } from "@/components/section";
import { ServiceCard } from "@/components/service-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { faqJsonLd, pageHead, websiteJsonLd } from "@/lib/seo";
import { BUSINESS, FAQS, GALLERY, IMAGES, REASONS, SERVICES, STEPS } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () =>
    pageHead(
      "Auto Detailing San Antonio TX | Southern Auto Detailers",
      "Southern Auto Detailers provides professional in-shop auto detailing in San Antonio, Texas.",
      "/",
      [websiteJsonLd(), faqJsonLd("/", FAQS)],
      "Auto Detailing San Antonio TX | Southern Auto Detailers",
      IMAGES.hero,
    ),
  component: Home,
});

const reasonIcons = [Sparkles, Phone, ShieldCheck, Car, CalendarClock, Lock];

function Home() {
  return (
    <main>
      <section className="relative isolate min-h-svh overflow-hidden">
        <img
          src={IMAGES.hero.src}
          alt={IMAGES.hero.alt}
          className="absolute inset-0 size-full object-cover"
          width={1600}
          height={900}
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/82 to-bg/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-bg/50" />
        <div className="relative mx-auto flex min-h-svh w-full max-w-6xl flex-col justify-end px-4 py-24 md:px-6">
          <p className="mb-4 text-xs font-semibold tracking-[0.22em] text-primary uppercase">
            San Antonio based auto detailing
          </p>
          <h1 className="max-w-3xl font-display text-4xl font-semibold tracking-tight md:text-6xl">
            Auto Detailing in San Antonio, TX
          </h1>
          <p className="mt-5 max-w-xl text-base text-muted md:text-lg">
            Southern Auto Detailers is a San Antonio based studio owned by Robert Romero
            Jr., an Alamo Heights graduate and IDA-certified detailer. Private interior
            and exterior car detailing, paint correction, and ceramic coating — by
            appointment.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button asChild size="lg">
              <a href={BUSINESS.phoneTel}>
                <Phone />
                Call {BUSINESS.phoneDisplay}
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/contact">Request a Detail</Link>
            </Button>
            <Badge variant="accent" className="w-fit sm:ml-1">
              Limited Availability
            </Badge>
          </div>
          <p className="mt-6 inline-flex items-start gap-2 text-sm text-muted">
            <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
            {BUSINESS.addressLine} · {BUSINESS.hoursSummary}
          </p>
        </div>
      </section>

      <div className="border-y border-border bg-surface">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-6 text-sm md:grid-cols-2 lg:grid-cols-4 md:px-6">
          <p className="text-muted">
            <span className="font-semibold text-fg">Hours</span> — {BUSINESS.hoursSummary}
          </p>
          <p className="text-muted">
            <span className="font-semibold text-fg">Studio</span> — {BUSINESS.street}, {BUSINESS.postalCode}
          </p>
          <p className="text-muted">
            <span className="font-semibold text-fg">Private appointments</span> — one vehicle at a time.
          </p>
          <p className="text-muted">
            <span className="font-semibold text-fg">Direct line</span> —{" "}
            <a className="font-semibold text-primary" href={BUSINESS.phoneTel}>
              {BUSINESS.phoneDisplay}
            </a>
          </p>
        </div>
      </div>

      <CommunityPledge />

      <Section>
        <Eyebrow>Services</Eyebrow>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <h2 className="max-w-xl font-display text-3xl md:text-4xl">
            Auto detailing services in San Antonio, TX
          </h2>
          <Link to="/services" className="text-sm font-semibold text-primary">
            View all services
          </Link>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <ServiceCard key={service.slug} {...service} />
          ))}
        </div>
      </Section>

      <Section tone="surface">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Photo
            src={IMAGES.suvInterior.src}
            alt={IMAGES.suvInterior.alt}
            className="aspect-3/2 rounded-3xl"
          />
          <div>
            <Eyebrow>Local detailing</Eyebrow>
            <h2 className="font-display text-3xl md:text-4xl">Your San Antonio based detailing studio</h2>
            <p className="mt-5 text-muted">
              Southern Auto Detailers is San Antonio based, owned by Robert Romero Jr. —
              an Alamo Heights graduate and IDA-certified detailer. Looking for professional
              auto detailing in San Antonio, TX, or car detailing near 78233? We provide
              private, appointment-based care for daily commuters, work trucks, family SUVs,
              and enthusiast cars.
            </p>
            <p className="mt-4 text-muted">
              Visit the studio at {BUSINESS.addressLine}. Hours: {BUSINESS.hoursSummary}.
              Drivers in{" "}
              <Link to="/san-antonio-78233" className="font-semibold text-primary">
                78233 and Northeast San Antonio
              </Link>{" "}
              can start with a call to {BUSINESS.phoneDisplay}.
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <Eyebrow>Why us</Eyebrow>
        <h2 className="max-w-2xl font-display text-3xl md:text-4xl">
          Why San Antonio Drivers Choose Southern Auto Detailers
        </h2>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {REASONS.map((reason, index) => {
            const Icon = reasonIcons[index] ?? Sparkles;
            return (
              <li
                key={reason.title}
                className="rounded-3xl border border-border bg-surface p-6"
              >
                <Icon className="size-5 text-primary" />
                <h3 className="mt-4 font-display text-xl">{reason.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{reason.body}</p>
              </li>
            );
          })}
        </ul>
      </Section>

      <Section tone="surface">
        <Eyebrow>Process</Eyebrow>
        <h2 className="font-display text-3xl md:text-4xl">How a detail gets booked</h2>
        <ol className="mt-10 grid gap-4 md:grid-cols-4">
          {STEPS.map((step) => (
            <li key={step.n} className="rounded-3xl border border-border bg-bg p-5">
              <p className="font-display text-sm text-primary">{step.n}</p>
              <h3 className="mt-3 font-display text-lg">{step.title}</h3>
              <p className="mt-2 text-sm text-muted">{step.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section>
        <div>
          <Eyebrow>Finish</Eyebrow>
          <h2 className="font-display text-3xl md:text-4xl">The finish we aim for</h2>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">
          {GALLERY.slice(0, 4).map((item) => (
            <Photo
              key={item.src}
              src={item.src}
              alt={item.alt}
              className="aspect-3/2 rounded-2xl"
            />
          ))}
        </div>
      </Section>

      <Section tone="surface">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <Eyebrow>Questions</Eyebrow>
            <h2 className="font-display text-3xl md:text-4xl">Auto detailing FAQs</h2>
            <p className="mt-4 text-muted">
              Timing, pets, stains, and how to prepare — then call {BUSINESS.phoneDisplay} if
              you want a recommendation for your specific vehicle.
            </p>
            <div className="mt-6">
              <FaqList />
            </div>
          </div>
          <div>
            <h2 className="font-display text-3xl">Book Auto Detailing in San Antonio</h2>
            <p className="mt-3 text-muted">
              Call Southern Auto Detailers at {BUSINESS.phoneDisplay} to discuss your
              vehicle, request a quote, or schedule your next detail.
            </p>
            <p className="mt-4 text-sm text-muted">
              A 20% non-refundable deposit of the quoted total secures the slot. Phone:{" "}
              <a className="font-semibold text-primary" href={BUSINESS.phoneTel}>
                {BUSINESS.phoneDisplay}
              </a>
              <br />
              {BUSINESS.addressLine}
            </p>
            <BookingForm className="mt-8" />
          </div>
        </div>
      </Section>
    </main>
  );
}
