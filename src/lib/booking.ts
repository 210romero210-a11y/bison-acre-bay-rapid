import { createServerFn } from "@tanstack/react-start";
import { SERVICE_OPTIONS } from "@/lib/site";

type BookingInput = {
  name: string;
  phone: string;
  email: string;
  vehicle: string;
  service: string;
  date: string;
  notes: string;
  deposit: boolean;
};

const FAIL = "We could not send this request. Call (210) 201-4847.";

function chicagoToday() {
  return new Intl.DateTimeFormat("en-CA", { timeZone: "America/Chicago" }).format(new Date());
}

function isMonday(date: string) {
  const weekday = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Chicago",
    weekday: "short",
  }).format(new Date(`${date}T18:00:00Z`));
  return weekday === "Mon";
}

function clean(data: BookingInput): { ok: true; value: BookingInput } | { ok: false; error: string } {
  const name = data.name.trim().slice(0, 80);
  const phone = data.phone.trim().slice(0, 30);
  const email = data.email.trim().slice(0, 120);
  const vehicle = data.vehicle.trim().slice(0, 80);
  const service = data.service.trim();
  const date = data.date.trim();
  const notes = data.notes.trim().slice(0, 2000);

  if (name.length < 2) return { ok: false, error: "Enter your name." };
  if (phone.replace(/\D/g, "").length < 10) return { ok: false, error: "Enter a 10-digit phone number." };
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return { ok: false, error: "Enter a valid email." };
  if (vehicle.length < 3) return { ok: false, error: "Enter year, make, and model." };
  if (!SERVICE_OPTIONS.includes(service as (typeof SERVICE_OPTIONS)[number])) {
    return { ok: false, error: "Choose a service." };
  }
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) return { ok: false, error: "Choose a preferred date." };
  if (date < chicagoToday()) return { ok: false, error: "Choose a date that has not already passed." };
  if (isMonday(date)) return { ok: false, error: "The studio is closed Monday. Pick Tuesday through Sunday." };
  if (data.deposit !== true) return { ok: false, error: "Confirm the 20% deposit to request a slot." };

  return { ok: true, value: { name, phone, email, vehicle, service, date, notes, deposit: true } };
}

export const submitBookingRequest = createServerFn({ method: "POST" })
  .validator((data: BookingInput) => data)
  .handler(async ({ data }) => {
    const checked = clean(data);
    if (!checked.ok) return checked;

    const url = process.env.GOOGLE_SCRIPT_URL?.trim();
    const secret = process.env.GOOGLE_SCRIPT_SECRET?.trim();
    if (!url || !secret) return { ok: false as const, error: FAIL };

    try {
      const response = await fetch(url, {
        method: "POST",
        redirect: "follow",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({ ...checked.value, secret }),
        signal: AbortSignal.timeout(15000),
      });
      const text = await response.text();
      if (!text.includes('"ok":true') && !text.includes('"ok": true')) {
        return { ok: false as const, error: FAIL };
      }
      return { ok: true as const };
    } catch {
      return { ok: false as const, error: FAIL };
    }
  });
