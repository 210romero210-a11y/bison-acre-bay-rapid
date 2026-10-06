import { createFileRoute } from "@tanstack/react-router";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Section, Eyebrow } from "@/components/section";
import { crumbsFor, pageHead } from "@/lib/seo";
import { BUSINESS } from "@/lib/site";

export const Route = createFileRoute("/privacy")({
  head: () =>
    pageHead(
      "Privacy Policy | Southern Auto Detailers",
      "Privacy policy for Southern Auto Detailers in San Antonio, TX. How we handle appointment requests, contact details, and studio privacy.",
      "/privacy",
      [],
      "Privacy Policy",
    ),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <main>
      <Section>
        <Breadcrumbs items={crumbsFor("/privacy")} className="mb-6" />
        <Eyebrow>Legal</Eyebrow>
        <h1 className="max-w-3xl font-display text-4xl md:text-5xl">Privacy Policy</h1>
        <p className="mt-4 max-w-2xl text-muted">
          Southern Auto Detailers is a private, appointment-based auto detailing studio in
          San Antonio, TX. This page explains what we collect when you request a detail
          and how that information is used.
        </p>

        <div className="mt-12 grid max-w-3xl gap-10 text-sm leading-relaxed text-muted">
          <section>
            <h2 className="font-display text-2xl text-fg">Who we are</h2>
            <p className="mt-3">
              {BUSINESS.name}, {BUSINESS.addressLine}. Phone{" "}
              <a className="font-semibold text-primary" href={BUSINESS.phoneTel}>
                {BUSINESS.phoneDisplay}
              </a>
              . Email{" "}
              <a className="font-semibold text-primary" href={BUSINESS.emailMailto}>
                {BUSINESS.email}
              </a>
              . Website {BUSINESS.websiteDisplay}.
            </p>
          </section>
          <section>
            <h2 className="font-display text-2xl text-fg">What we collect</h2>
            <p className="mt-3">
              If you use the appointment request form, you may provide your name, phone
              number, email, vehicle details, preferred service, preferred date, and notes.
              If you call or email us, we receive whatever you choose to share in that
              conversation.
            </p>
          </section>
          <section>
            <h2 className="font-display text-2xl text-fg">How it is used</h2>
            <p className="mt-3">
              We use contact details only to respond to your request, schedule work, and
              follow up about your vehicle. We do not sell personal information. We do not
              publish customer names, vehicle details, or photos without permission.
            </p>
          </section>
          <section>
            <h2 className="font-display text-2xl text-fg">Studio privacy</h2>
            <p className="mt-3">
              Work is appointment-based and handled as a private studio visit — not a
              public wash bay. Vehicles are treated as unique projects. Please remove
              valuables before drop-off.
            </p>
          </section>
          <section>
            <h2 className="font-display text-2xl text-fg">Where requests go</h2>
            <p className="mt-3">
              An appointment request is sent to the studio email and saved in a private
              Google Sheet so we can reply. It is not stored in your browser. The form
              does not hold a slot and does not collect card numbers. We use the details
              only to quote and schedule your vehicle.
            </p>
          </section>
          <section>
            <h2 className="font-display text-2xl text-fg">Deposits</h2>
            <p className="mt-3">
              A booking slot is secured with a 20% non-refundable deposit of the quoted
              total. Do not send card numbers through the website form. We will tell you
              how to pay the deposit when the appointment is confirmed. Deposit records are
              used only to hold and document the booking. See the Refund Policy for how
              cancellations work.
            </p>
          </section>
          <section>
            <h2 className="font-display text-2xl text-fg">Requests</h2>
            <p className="mt-3">
              To ask us to update or delete information you sent, email{" "}
              <a className="font-semibold text-primary" href={BUSINESS.emailMailto}>
                {BUSINESS.email}
              </a>{" "}
              or call {BUSINESS.phoneDisplay}.
            </p>
          </section>
        </div>
      </Section>
    </main>
  );
}
