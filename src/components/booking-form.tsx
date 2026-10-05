import { useMemo, useState, type FormEvent } from "react";
import { Link } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { BUSINESS, SERVICE_OPTIONS } from "@/lib/site";
import { cn } from "@/lib/utils";

const STORAGE_KEY = "southern-auto-detailers-requests";

type FormState = {
  name: string;
  phone: string;
  email: string;
  vehicle: string;
  service: string;
  date: string;
  notes: string;
};

const empty: FormState = {
  name: "",
  phone: "",
  email: "",
  vehicle: "",
  service: "",
  date: "",
  notes: "",
};

function digits(value: string) {
  return value.replace(/\D/g, "");
}

export function BookingForm({ className }: { className?: string }) {
  const [form, setForm] = useState<FormState>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitted, setSubmitted] = useState<FormState | null>(null);

  const minDate = useMemo(() => new Date().toISOString().slice(0, 10), []);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  }

  function validate(next: FormState) {
    const nextErrors: Partial<Record<keyof FormState, string>> = {};
    if (next.name.trim().length < 2) nextErrors.name = "Enter your name.";
    if (digits(next.phone).length < 10) nextErrors.phone = "Enter a 10-digit phone number.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(next.email.trim())) {
      nextErrors.email = "Enter a valid email.";
    }
    if (next.vehicle.trim().length < 3) nextErrors.vehicle = "Enter year, make, and model.";
    if (!next.service) nextErrors.service = "Choose a service.";
    if (!next.date) nextErrors.date = "Choose a preferred date.";
    return nextErrors;
  }

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    const nextErrors = validate(form);
    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors);
      return;
    }

    const payload = { ...form, createdAt: new Date().toISOString() };
    try {
      const existing = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "[]") as unknown[];
      localStorage.setItem(STORAGE_KEY, JSON.stringify([payload, ...existing].slice(0, 25)));
    } catch {
      /* ignore quota / private mode */
    }
    setSubmitted(form);
  }

  if (submitted) {
    return (
      <div className={cn("rounded-3xl border border-border bg-surface p-6 md:p-8", className)}>
        <CheckCircle2 className="size-8 text-primary" />
        <h3 className="mt-4 font-display text-2xl">Request received</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          Thanks, {submitted.name}. We will call {submitted.phone} to confirm your{" "}
          {submitted.service.toLowerCase()} for the {submitted.vehicle}. For the fastest
          response, call{" "}
          <a className="font-semibold text-primary" href={BUSINESS.phoneTel}>
            {BUSINESS.phoneDisplay}
          </a>
          .
        </p>
        <Button className="mt-6" variant="outline" onClick={() => { setSubmitted(null); setForm(empty); }}>
          Send another request
        </Button>
      </div>
    );
  }

  const field = "grid gap-2";
  const selectClass =
    "flex h-11 w-full rounded-md border border-border bg-surface px-3 text-sm text-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";

  return (
    <form
      onSubmit={onSubmit}
      className={cn("rounded-3xl border border-border bg-surface p-5 shadow-card md:p-7", className)}
      noValidate
    >
      <div className="mb-6">
        <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">Book a detail</p>
        <h3 className="mt-2 font-display text-2xl">Request an appointment</h3>
        <p className="mt-2 text-sm text-muted">
          Short form. We confirm by phone — typically the same business day.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className={field}>
          <Label htmlFor="name">Name</Label>
          <Input id="name" autoComplete="name" value={form.name} onChange={(e) => update("name", e.target.value)} />
          {errors.name ? <p className="text-xs text-danger">{errors.name}</p> : null}
        </div>
        <div className={field}>
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" type="tel" autoComplete="tel" inputMode="tel" value={form.phone} onChange={(e) => update("phone", e.target.value)} />
          {errors.phone ? <p className="text-xs text-danger">{errors.phone}</p> : null}
        </div>
        <div className={cn(field, "sm:col-span-2")}>
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" autoComplete="email" value={form.email} onChange={(e) => update("email", e.target.value)} />
          {errors.email ? <p className="text-xs text-danger">{errors.email}</p> : null}
        </div>
        <div className={cn(field, "sm:col-span-2")}>
          <Label htmlFor="vehicle">Vehicle year / make / model</Label>
          <Input
            id="vehicle"
            placeholder="2019 Toyota Tundra"
            value={form.vehicle}
            onChange={(e) => update("vehicle", e.target.value)}
          />
          {errors.vehicle ? <p className="text-xs text-danger">{errors.vehicle}</p> : null}
        </div>
        <div className={field}>
          <Label htmlFor="service">Requested service</Label>
          <select
            id="service"
            className={selectClass}
            value={form.service}
            onChange={(e) => update("service", e.target.value)}
          >
            <option value="">Select a service</option>
            {SERVICE_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.service ? <p className="text-xs text-danger">{errors.service}</p> : null}
        </div>
        <div className={field}>
          <Label htmlFor="date">Preferred date</Label>
          <Input
            id="date"
            type="date"
            min={minDate}
            value={form.date}
            onChange={(e) => update("date", e.target.value)}
          />
          {errors.date ? <p className="text-xs text-danger">{errors.date}</p> : null}
        </div>
        <div className={cn(field, "sm:col-span-2")}>
          <Label htmlFor="notes">Anything we should know? (optional)</Label>
          <Textarea
            id="notes"
            placeholder="Pet hair, stains, work truck, ceramic interest…"
            value={form.notes}
            onChange={(e) => update("notes", e.target.value)}
          />
        </div>
      </div>
      <Button type="submit" size="lg" className="mt-6 w-full">
        Request a Detail
      </Button>
      <p className="mt-3 text-center text-xs text-muted">
        Prefer to talk now?{" "}
        <a className="font-semibold text-primary" href={BUSINESS.phoneTel}>
          Call {BUSINESS.phoneDisplay}
        </a>
        {" · "}
        <a className="font-semibold text-primary" href={BUSINESS.emailMailto}>
          {BUSINESS.email}
        </a>
        . Requests stay private.{" "}
        <Link to="/privacy" className="font-semibold text-primary">
          Privacy Policy
        </Link>
      </p>
    </form>
  );
}
