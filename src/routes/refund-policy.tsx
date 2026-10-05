import { createFileRoute, Link } from "@tanstack/react-router";
import { Section, Eyebrow } from "@/components/section";
import { pageHead } from "@/lib/seo";
import { BUSINESS, DEPOSIT } from "@/lib/site";

export const Route = createFileRoute("/refund-policy")({
  head: () =>
    pageHead(
      "Refund Policy | Southern Auto Detailers",
      "Refund policy for Southern Auto Detailers. A 20% non-refundable deposit of the quoted total is required to secure a booking slot in San Antonio, TX.",
    ),
  component: RefundPage,
});

function RefundPage() {
  return (
    <main>
      <Section>
        <Eyebrow>Legal</Eyebrow>
        <h1 className="max-w-3xl font-display text-4xl md:text-5xl">Refund Policy</h1>
        <p className="mt-4 max-w-2xl text-muted">
          How deposits and balances work at {BUSINESS.name}, {BUSINESS.addressLine}.
        </p>
        <div className="mt-12 grid max-w-3xl gap-10 text-sm leading-relaxed text-muted">
          <section>
            <h2 className="font-display text-2xl text-fg">20% non-refundable deposit</h2>
            <p className="mt-3">{DEPOSIT.blurb}</p>
            <p className="mt-3">
              The deposit is always 20% of the quoted total for that vehicle. If the quoted
              total is $200, the deposit is $40. If the quoted total is $500, the deposit
              is $100. Those figures are only the math — they are not a menu. Your quote
              depends on size, condition, and the service you book. The remaining 80% is
              due when the work is finished. If you cancel, reschedule in a way that leaves
              the slot empty, or do not show, the deposit is not refunded.
            </p>
          </section>
          <section>
            <h2 className="font-display text-2xl text-fg">If we cancel</h2>
            <p className="mt-3">
              If Southern Auto Detailers cancels and we cannot book a replacement time you
              accept, the deposit is refunded in full. If we have started work and cannot
              finish because of a problem on our side, we will either complete it at a new
              time or refund the unfinished portion of the balance. The deposit still
              covers the time we held for you unless the cancellation is ours.
            </p>
          </section>
          <section>
            <h2 className="font-display text-2xl text-fg">What is not refundable</h2>
            <p className="mt-3">
              Results we warned you about before starting are not a refund reason. That
              includes stains that may not fully release, odors that need more than one
              visit, thin clear coat that cannot take heavy correction, and coating that
              cannot prevent chips or etching from neglect. Change-of-mind after the
              deposit is paid does not refund the deposit. Work already performed is not
              refunded because the finish is “different than a photo online.”
            </p>
          </section>
          <section>
            <h2 className="font-display text-2xl text-fg">How to ask</h2>
            <p className="mt-3">
              Email{" "}
              <a className="font-semibold text-primary" href={BUSINESS.emailMailto}>
                {BUSINESS.email}
              </a>{" "}
              or call {BUSINESS.phoneDisplay} with your name, vehicle, and appointment
              date. See also the{" "}
              <Link to="/terms" className="font-semibold text-primary">
                Terms & Conditions
              </Link>
              .
            </p>
          </section>
        </div>
      </Section>
    </main>
  );
}
