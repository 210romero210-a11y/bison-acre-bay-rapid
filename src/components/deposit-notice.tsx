import { Link } from "@tanstack/react-router";
import { DEPOSIT } from "@/lib/site";

export function DepositNotice() {
  return (
    <aside className="rounded-3xl border border-primary/35 bg-surface p-6 md:p-8">
      <p className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">
        Secure your slot
      </p>
      <h2 className="mt-2 font-display text-2xl">{DEPOSIT.title}</h2>
      <p className="mt-3 text-sm leading-relaxed text-muted">{DEPOSIT.blurb}</p>
      <p className="mt-3 text-sm leading-relaxed text-muted">
        The deposit is calculated from the quoted total for your vehicle — not a flat fee.
        It holds the appointment on the calendar. It is non-refundable if you cancel or do
        not show. If we cancel and cannot reschedule, the deposit is returned. Read the{" "}
        <Link to="/refund-policy" className="font-semibold text-primary">
          Refund Policy
        </Link>{" "}
        and{" "}
        <Link to="/terms" className="font-semibold text-primary">
          Terms & Conditions
        </Link>
        .
      </p>
    </aside>
  );
}
