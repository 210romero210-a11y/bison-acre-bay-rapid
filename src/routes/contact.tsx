import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { BookingForm } from "@/components/booking-form";
import { HoursList } from "@/components/hours-list";
import { Section, Eyebrow } from "@/components/section";
import { crumbsFor, pageHead } from "@/lib/seo";
import { AREAS, BUSINESS } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () =>
    pageHead(
      "Contact Southern Auto Detailers | San Antonio, TX 78233",
      "Schedule in-shop auto detailing at Southern Auto Detailers in San Antonio, Texas.",
      "/contact",
      [],
      "Book auto detailing in San Antonio",
    ),
  component: ContactPage,
});

function ContactPage() {
  return (
    <main>
      <Section>
        <Breadcrumbs items={crumbsFor("/contact")} className="mb-6" />
        <Eyebrow>Calls and appointment requests</Eyebrow>
        <h1 className="max-w-3xl font-display text-4xl md:text-5xl">
          Book auto detailing in San Antonio
        </h1>
        <p className="mt-4 max-w-2xl text-muted">
          San Antonio based studio at {BUSINESS.addressLine}. Private, appointment-based
          work. Call, email, or send a request — we will confirm timing for your vehicle.
        </p>
        <div className="mt-4 max-w-2xl space-y-4 text-muted">
          <p>
            Tell us the year, make, model, and the complaint: cabin soil, pet hair, swirls,
            water spots, or a coating you are considering. Photos in daylight help. We quote
            after that description. If we need to see the vehicle, we say so before a deposit
            is collected. There is no published package price and no travel-to-you option.
          </p>
          <p>
            The appointment is at 11692 Bricken Circle, San Antonio, TX 78233. Hours are
            Tuesday through Sunday, 7:00 AM to 11:00 PM. Monday is closed. Once you accept a
            quote, 20% of that total is the non-refundable deposit that holds the slot. The
            balance is due when the work is finished. Remove valuables before drop-off. We do
            not unbolt or reinstall a child restraint. If the paint and the cabin are both
            the complaint, say that in the request so the quote is a full detail rather than
            a guess.
          </p>
        </div>
        <div className="mt-10 grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-3xl border border-border bg-surface p-6 md:p-8">
            <h2 className="font-display text-2xl">Studio</h2>
            <a
              href={BUSINESS.phoneTel}
              className="mt-6 flex items-center gap-3 text-lg font-semibold text-primary"
            >
              <Phone className="size-5" />
              {BUSINESS.phoneDisplay}
            </a>
            <a
              href={BUSINESS.emailMailto}
              className="mt-4 flex items-center gap-3 text-sm font-semibold text-primary"
            >
              <Mail className="size-4" />
              {BUSINESS.email}
            </a>
            <a
              href={BUSINESS.mapsUrl}
              className="mt-4 flex items-start gap-3 text-sm text-muted hover:text-fg"
              target="_blank"
              rel="noreferrer"
            >
              <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
              <span>
                {BUSINESS.addressLine}
                <br />
                San Antonio based · Northeast San Antonio, 78233
              </span>
            </a>
            <p className="mt-4 flex items-center gap-3 text-sm text-muted">
              <Clock className="size-4 text-primary" />
              {BUSINESS.hoursSummary}
            </p>
            <HoursList className="mt-8 border-t border-border pt-6" />
            <ul className="mt-8 grid gap-1.5 text-sm text-muted">
              {AREAS.map((area) => (
                <li key={area.name}>· {area.name}</li>
              ))}
            </ul>
            <p className="mt-8 text-xs text-muted">
              {BUSINESS.name} · {BUSINESS.addressLine} · {BUSINESS.phoneDisplay} ·{" "}
              {BUSINESS.email} · {BUSINESS.websiteDisplay}
            </p>
          </div>
          <BookingForm />
        </div>
        <div className="mt-10 overflow-hidden rounded-3xl border border-border">
          <iframe
            title="Map of Southern Auto Detailers at 11692 Bricken Circle, San Antonio, TX"
            src={BUSINESS.mapsEmbed}
            className="h-72 w-full border-0 md:h-96"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </Section>
    </main>
  );
}
