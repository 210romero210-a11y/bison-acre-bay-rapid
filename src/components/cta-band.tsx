import { Link } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BUSINESS } from "@/lib/site";

export function CtaBand({
  title = "Book auto detailing in San Antonio",
  body = `Call ${BUSINESS.phoneDisplay} or email ${BUSINESS.email}. San Antonio studio at ${BUSINESS.street}. ${BUSINESS.hoursSummary}.`,
  contactLabel = "Request a detailing appointment",
}: {
  title?: string;
  body?: string;
  contactLabel?: string;
}) {
  return (
    <section className="px-4 py-16 md:px-6 md:py-20">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 rounded-3xl border border-border bg-surface p-8 md:flex-row md:items-center md:p-12">
        <div className="max-w-xl">
          <h2 className="font-display text-3xl md:text-4xl">{title}</h2>
          <p className="mt-3 text-muted">{body}</p>
        </div>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <Button asChild size="lg">
            <a href={BUSINESS.phoneTel}>
              <Phone />
              Call {BUSINESS.phoneDisplay}
            </a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link to="/contact">{contactLabel}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
