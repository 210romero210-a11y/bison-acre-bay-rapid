import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { HoursList } from "@/components/hours-list";
import { Logo } from "@/components/logo";
import { AREAS, BUSINESS, JUNIOR_ACHIEVEMENT, NAV, SERVICE_NAV } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-2 lg:grid-cols-5 md:px-6">
        <div className="lg:col-span-2">
          <Logo />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
            San Antonio based auto detailing. Owner {BUSINESS.founder} is from Alamo Heights
            and is an Alamo Heights graduate. Private, appointment-based studio care.
          </p>
          <a
            href={BUSINESS.phoneTel}
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary"
          >
            <Phone className="size-4" />
            {BUSINESS.phoneDisplay}
          </a>
          <a
            href={BUSINESS.emailMailto}
            className="mt-2 flex items-center gap-2 text-sm text-muted hover:text-primary"
          >
            <Mail className="size-4 text-primary" />
            {BUSINESS.email}
          </a>
          <a
            href={BUSINESS.mapsUrl}
            className="mt-2 flex items-start gap-2 text-sm text-muted hover:text-primary"
            target="_blank"
            rel="noreferrer"
          >
            <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
            {BUSINESS.addressLine}
          </a>
          <p className="mt-4 text-sm text-muted">
            10% of every sale goes to{" "}
            <a
              href={JUNIOR_ACHIEVEMENT.url}
              className="font-semibold text-primary underline-offset-4 hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              {JUNIOR_ACHIEVEMENT.name}
            </a>
            .
          </p>
        </div>
        <HoursList />
        <div>
          <p className="text-xs font-semibold tracking-[0.18em] text-muted uppercase">Explore</p>
          <ul className="mt-4 grid gap-2 text-sm">
            {NAV.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="text-fg/90 hover:text-primary">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/privacy" className="text-fg/90 hover:text-primary">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold tracking-[0.18em] text-muted uppercase">Services</p>
          <ul className="mt-4 grid gap-2 text-sm">
            {SERVICE_NAV.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="text-fg/90 hover:text-primary">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/san-antonio-78233" className="text-fg/90 hover:text-primary">
                Auto detailing 78233
              </Link>
            </li>
            {AREAS.slice(0, 4).map((area) => (
              <li key={area.name}>
                <Link to="/service-areas" className="text-fg/90 hover:text-primary">
                  {area.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-xs text-muted md:flex-row md:items-center md:justify-between md:px-6">
          <p>
            © {new Date().getFullYear()} {BUSINESS.name}. San Antonio based auto detailing.
          </p>
          <p>
            {BUSINESS.addressLine} · {BUSINESS.phoneDisplay} · {BUSINESS.websiteDisplay}
          </p>
        </div>
      </div>
    </footer>
  );
}
