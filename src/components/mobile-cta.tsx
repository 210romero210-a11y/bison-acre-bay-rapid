import { Link } from "@tanstack/react-router";
import { CalendarCheck, Phone } from "lucide-react";
import { BUSINESS } from "@/lib/site";

export function MobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-bg/95 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-md lg:hidden">
      <div className="mx-auto grid max-w-lg grid-cols-2 gap-2">
        <a
          href={BUSINESS.phoneTel}
          className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-primary text-sm font-semibold text-primary-fg"
        >
          <Phone className="size-4" />
          Call Now
        </a>
        <Link
          to="/contact"
          className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-border bg-surface text-sm font-semibold text-fg"
        >
          <CalendarCheck className="size-4" />
          Book a Detail
        </Link>
      </div>
    </div>
  );
}
