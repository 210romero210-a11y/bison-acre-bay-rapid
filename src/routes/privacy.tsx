import { createFileRoute } from "@tanstack/react-router";
import { Section, Eyebrow } from "@/components/section";
import { pageHead } from "@/lib/seo";
import { BUSINESS } from "@/lib/site";

export const Route = createFileRoute("/privacy")({
  head: () =>
    pageHead(
      "Privacy Policy | Southern Auto Detailers",
      "Privacy policy for Southern Auto Detailers in San Antonio, TX. How we handle appointment requests, contact details, and studio privacy.",
    ),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <main>
      <Section>
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
            <h2 className="font-display text-2xl text-fg">Browser storage</h2>
            <p className="mt-3">
              The website may store a copy of a submitted request in your own browser
              (local storage) so you can see a confirmation on this device. That copy
              stays on your device unless you clear site data.
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
