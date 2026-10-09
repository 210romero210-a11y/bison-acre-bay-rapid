import { h as SERVICE_OPTIONS } from "./site-DZY_i1CI.mjs";
import { n as TSS_SERVER_FUNCTION, t as createServerFn } from "./ssr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/booking-Bd9JGOE7.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var FAIL = "We could not send this request. Call (210) 201-4847.";
function chicagoToday() {
	return new Intl.DateTimeFormat("en-CA", { timeZone: "America/Chicago" }).format(/* @__PURE__ */ new Date());
}
function isMonday(date) {
	return new Intl.DateTimeFormat("en-US", {
		timeZone: "America/Chicago",
		weekday: "short"
	}).format(/* @__PURE__ */ new Date(`${date}T18:00:00Z`)) === "Mon";
}
function clean(data) {
	const name = data.name.trim().slice(0, 80);
	const phone = data.phone.trim().slice(0, 30);
	const email = data.email.trim().slice(0, 120);
	const vehicle = data.vehicle.trim().slice(0, 80);
	const service = data.service.trim();
	const date = data.date.trim();
	const notes = data.notes.trim().slice(0, 2e3);
	if (name.length < 2) return {
		ok: false,
		error: "Enter your name."
	};
	if (phone.replace(/\D/g, "").length < 10) return {
		ok: false,
		error: "Enter a 10-digit phone number."
	};
	if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return {
		ok: false,
		error: "Enter a valid email."
	};
	if (vehicle.length < 3) return {
		ok: false,
		error: "Enter year, make, and model."
	};
	if (!SERVICE_OPTIONS.includes(service)) return {
		ok: false,
		error: "Choose a service."
	};
	if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) return {
		ok: false,
		error: "Choose a preferred date."
	};
	if (date < chicagoToday()) return {
		ok: false,
		error: "Choose a date that has not already passed."
	};
	if (isMonday(date)) return {
		ok: false,
		error: "The studio is closed Monday. Pick Tuesday through Sunday."
	};
	if (data.deposit !== true) return {
		ok: false,
		error: "Confirm the 20% deposit to request a slot."
	};
	return {
		ok: true,
		value: {
			name,
			phone,
			email,
			vehicle,
			service,
			date,
			notes,
			deposit: true
		}
	};
}
var submitBookingRequest_createServerFn_handler = createServerRpc({
	id: "b0c76d3eb78b5a7e661f9d890da43be3806417ffb1241a914c6fa315568754cd",
	name: "submitBookingRequest",
	filename: "src/lib/booking.ts"
}, (opts) => submitBookingRequest.__executeServer(opts));
var submitBookingRequest = createServerFn({ method: "POST" }).validator((data) => data).handler(submitBookingRequest_createServerFn_handler, async ({ data }) => {
	const checked = clean(data);
	if (!checked.ok) return checked;
	const url = process.env.GOOGLE_SCRIPT_URL?.trim();
	const secret = process.env.GOOGLE_SCRIPT_SECRET?.trim();
	if (!url || !secret) return {
		ok: false,
		error: FAIL
	};
	try {
		const text = await (await fetch(url, {
			method: "POST",
			redirect: "follow",
			headers: { "Content-Type": "text/plain;charset=utf-8" },
			body: JSON.stringify({
				...checked.value,
				secret
			}),
			signal: AbortSignal.timeout(15e3)
		})).text();
		if (!text.includes("\"ok\":true") && !text.includes("\"ok\": true")) return {
			ok: false,
			error: FAIL
		};
		return { ok: true };
	} catch {
		return {
			ok: false,
			error: FAIL
		};
	}
});
//#endregion
export { submitBookingRequest_createServerFn_handler };
