import { useState } from "react";
import { Link } from "@tanstack/react-router";
import * as Dialog from "@radix-ui/react-dialog";
import { Clock, Mail, MapPin, Menu, Phone, X } from "lucide-react";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { BUSINESS, NAV, SERVICE_NAV } from "@/lib/site";
import { cn } from "@/lib/utils";

const linkClass =
  "text-sm font-medium text-muted transition-colors hover:text-fg";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-bg/92 backdrop-blur-md">
      <div className="hidden border-b border-border bg-surface md:block">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-6 gap-y-1 px-4 py-2 text-xs text-muted md:px-6">
          <p className="inline-flex items-center gap-1.5">
            <Clock className="size-3.5 text-primary" />
            {BUSINESS.hoursSummary}
          </p>
          <a
            href={BUSINESS.mapsUrl}
            className="inline-flex items-center gap-1.5 hover:text-fg"
            target="_blank"
            rel="noreferrer"
          >
            <MapPin className="size-3.5 text-primary" />
            {BUSINESS.addressLine}
          </a>
          <a href={BUSINESS.emailMailto} className="inline-flex items-center gap-1.5 hover:text-fg">
            <Mail className="size-3.5 text-primary" />
            {BUSINESS.email}
          </a>
        </div>
      </div>
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 md:h-[4.5rem] md:px-6">
        <Logo />
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {NAV.map((item) => (
            <Link key={item.to} to={item.to} className={linkClass} activeProps={{ className: "text-primary" }}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <a href={BUSINESS.phoneTel}>
              <Phone />
              {BUSINESS.phoneDisplay}
            </a>
          </Button>
          <Button asChild size="sm" variant="outline" className="hidden md:inline-flex">
            <Link to="/contact">Book Now</Link>
          </Button>
          <Button asChild size="icon" className="sm:hidden" aria-label={`Call ${BUSINESS.phoneDisplay}`}>
            <a href={BUSINESS.phoneTel}>
              <Phone />
            </a>
          </Button>
          <Dialog.Root open={open} onOpenChange={setOpen}>
            <Dialog.Trigger asChild>
              <Button variant="surface" size="icon" className="lg:hidden" aria-label="Open menu">
                <Menu />
              </Button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 z-50 bg-bg/80" />
              <Dialog.Content
                className="fixed inset-y-0 right-0 z-50 flex w-[min(100%,22rem)] flex-col bg-surface p-6 shadow-card"
                aria-describedby={undefined}
              >
                <div className="mb-8 flex items-center justify-between">
                  <Dialog.Title className="font-display text-lg">Menu</Dialog.Title>
                  <Dialog.Close asChild>
                    <Button variant="ghost" size="icon" aria-label="Close menu">
                      <X />
                    </Button>
                  </Dialog.Close>
                </div>
                <nav className="flex flex-col gap-1" aria-label="Mobile">
                  <Link to="/" className={cn(linkClass, "py-3 text-base")} onClick={() => setOpen(false)}>
                    Home
                  </Link>
                  {NAV.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      className={cn(linkClass, "py-3 text-base")}
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                  <p className="mt-4 text-xs font-semibold tracking-[0.18em] text-muted uppercase">
                    Services
                  </p>
                  {SERVICE_NAV.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      className={cn(linkClass, "py-3 text-base")}
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
                <div className="mt-auto grid gap-2 pt-8">
                  <p className="text-xs text-muted">{BUSINESS.addressLine}</p>
                  <p className="text-xs text-muted">{BUSINESS.hoursSummary}</p>
                  <Button asChild>
                    <a href={BUSINESS.phoneTel} onClick={() => setOpen(false)}>
                      <Phone /> Call {BUSINESS.phoneDisplay}
                    </a>
                  </Button>
                  <Button asChild variant="outline">
                    <Link to="/contact" onClick={() => setOpen(false)}>
                      Book a Detail
                    </Link>
                  </Button>
                </div>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      </div>
    </header>
  );
}
