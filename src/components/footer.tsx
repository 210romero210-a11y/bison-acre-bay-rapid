import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";
import { BUSINESS, FOOTER_AREAS, JUNIOR_ACHIEVEMENT, LEGAL_NAV, NAV, SERVICE_NAV } from "@/lib/site";

function FooterLabel({ children }: { children: string }) {
  return <p className="text-[0.68rem] font-semibold tracking-[0.2em] text-primary uppercase">{children}</p>;
}

function FooterLink({ to, children }: { to: string; children: string }) {
  return (
    <Link to={to as never} className="text-sm text-fg/85 transition-colors hover:text-primary">
      {children}
    </Link>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-14 md:px-6">
        <div className="flex flex-col gap-8 border-b border-border pb-10 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <Logo />
            <p className="mt-5 text-sm leading-relaxed text-muted">
              Private, appointment-only detailing studio in northeast San Antonio. Owner{" "}
              {BUSINESS.founder}, an Alamo Heights graduate, works one vehicle at a time.
            </p>
            <p className="mt-3 text-sm text-muted">
              10% of every sale supports{" "}
              <a
                href={JUNIOR_ACHIEVEMENT.url}
                className="font-medium text-fg underline-offset-4 hover:text-primary hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                {JUNIOR_ACHIEVEMENT.name}
              </a>
              .
            </p>
          </div>
          <Button asChild size="lg" className="w-full shrink-0 md:w-auto">
            <a href={BUSINESS.phoneTel}>Call {BUSINESS.phoneDisplay}</a>
          </Button>
        </div>

        <div className="grid gap-10 pt-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <FooterLabel>Studio</FooterLabel>
            <address className="mt-4 space-y-2 text-sm not-italic text-fg/85">
              <a href={BUSINESS.mapsUrl} className="block leading-relaxed hover:text-primary" target="_blank" rel="noreferrer">
                {BUSINESS.street}
                <br />
                {BUSINESS.city}, {BUSINESS.region} {BUSINESS.postalCode}
              </a>
              <a href={BUSINESS.emailMailto} className="block hover:text-primary">
                {BUSINESS.email}
              </a>
              <a href={BUSINESS.phoneTel} className="block hover:text-primary">
                {BUSINESS.phoneDisplay}
              </a>
            </address>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Tuesday–Sunday
              <br />
              7:00 AM – 11:00 PM
              <br />
              Monday closed
            </p>
          </div>

          <nav aria-label="Services">
            <FooterLabel>Services</FooterLabel>
            <ul className="mt-4 grid gap-2.5">
              {SERVICE_NAV.map((item) => (
                <li key={item.to}>
                  <FooterLink to={item.to}>{item.label}</FooterLink>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Service areas" className="sm:col-span-2 lg:col-span-1">
            <FooterLabel>Service areas</FooterLabel>
            <ul className="mt-4 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-1">
              {FOOTER_AREAS.map((area) => (
                <li key={area.to}>
                  <FooterLink to={area.to}>{area.label}</FooterLink>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Company">
            <FooterLabel>Company</FooterLabel>
            <ul className="mt-4 grid gap-2.5">
              {NAV.map((item) => (
                <li key={item.to}>
                  <FooterLink to={item.to}>{item.label}</FooterLink>
                </li>
              ))}
            </ul>
            <a
              href={BUSINESS.googleBusinessUrl}
              className="mt-4 inline-block text-sm text-muted hover:text-primary"
              rel="noopener noreferrer"
            >
              Southern Auto Detailers on Google
            </a>
          </nav>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-5 text-xs text-muted md:flex-row md:items-center md:justify-between md:px-6">
          <p>
            © {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.
          </p>
          <nav aria-label="Legal" className="flex flex-wrap gap-x-4 gap-y-2">
            {LEGAL_NAV.map((item) => (
              <Link key={item.to} to={item.to} className="hover:text-primary">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
