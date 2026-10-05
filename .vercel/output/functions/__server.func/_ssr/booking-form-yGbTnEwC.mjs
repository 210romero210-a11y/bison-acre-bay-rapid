import { i as __toESM } from "../_runtime.mjs";
import { f as SERVICE_OPTIONS, h as cn, n as BUSINESS } from "./utils-Bk8QoY_x.mjs";
import { _ as require_jsx_runtime, v as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { f as CircleCheck } from "../_libs/lucide-react.mjs";
import { s as Button } from "./router-CY2P-pXA.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/booking-form-yGbTnEwC.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Input({ className, type, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		className: cn("flex h-11 w-full rounded-md border border-border bg-surface px-3 text-sm text-fg shadow-none placeholder:text-muted/70 transition-colors duration-150", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring", "disabled:cursor-not-allowed disabled:opacity-50", className),
		...props
	});
}
function Label({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
		className: cn("text-sm font-medium text-fg", className),
		...props
	});
}
function Textarea({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("flex min-h-28 w-full rounded-md border border-border bg-surface px-3 py-3 text-sm text-fg placeholder:text-muted/70 transition-colors duration-150", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring", "disabled:cursor-not-allowed disabled:opacity-50", className),
		...props
	});
}
var STORAGE_KEY = "southern-auto-detailers-requests";
var empty = {
	name: "",
	phone: "",
	email: "",
	vehicle: "",
	service: "",
	date: "",
	notes: ""
};
function digits(value) {
	return value.replace(/\D/g, "");
}
function BookingForm({ className }) {
	const [form, setForm] = (0, import_react.useState)(empty);
	const [errors, setErrors] = (0, import_react.useState)({});
	const [submitted, setSubmitted] = (0, import_react.useState)(null);
	const minDate = (0, import_react.useMemo)(() => (/* @__PURE__ */ new Date()).toISOString().slice(0, 10), []);
	function update(key, value) {
		setForm((prev) => ({
			...prev,
			[key]: value
		}));
		setErrors((prev) => ({
			...prev,
			[key]: void 0
		}));
	}
	function validate(next) {
		const nextErrors = {};
		if (next.name.trim().length < 2) nextErrors.name = "Enter your name.";
		if (digits(next.phone).length < 10) nextErrors.phone = "Enter a 10-digit phone number.";
		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(next.email.trim())) nextErrors.email = "Enter a valid email.";
		if (next.vehicle.trim().length < 3) nextErrors.vehicle = "Enter year, make, and model.";
		if (!next.service) nextErrors.service = "Choose a service.";
		if (!next.date) nextErrors.date = "Choose a preferred date.";
		return nextErrors;
	}
	function onSubmit(event) {
		event.preventDefault();
		const nextErrors = validate(form);
		if (Object.keys(nextErrors).length) {
			setErrors(nextErrors);
			return;
		}
		const payload = {
			...form,
			createdAt: (/* @__PURE__ */ new Date()).toISOString()
		};
		try {
			const existing = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "[]");
			localStorage.setItem(STORAGE_KEY, JSON.stringify([payload, ...existing].slice(0, 25)));
		} catch {}
		setSubmitted(form);
	}
	if (submitted) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("rounded-3xl border border-border bg-surface p-6 md:p-8", className),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-8 text-primary" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-4 font-display text-2xl",
				children: "Request received"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3 text-sm leading-relaxed text-muted",
				children: [
					"Thanks, ",
					submitted.name,
					". We will call ",
					submitted.phone,
					" to confirm your",
					" ",
					submitted.service.toLowerCase(),
					" for the ",
					submitted.vehicle,
					". For the fastest response, call",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						className: "font-semibold text-primary",
						href: BUSINESS.phoneTel,
						children: BUSINESS.phoneDisplay
					}),
					"."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				className: "mt-6",
				variant: "outline",
				onClick: () => {
					setSubmitted(null);
					setForm(empty);
				},
				children: "Send another request"
			})
		]
	});
	const field = "grid gap-2";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit,
		className: cn("rounded-3xl border border-border bg-surface p-5 shadow-card md:p-7", className),
		noValidate: true,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold tracking-[0.2em] text-primary uppercase",
						children: "Book a detail"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-2 font-display text-2xl",
						children: "Request an appointment"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted",
						children: "Short form. We confirm by phone — typically the same business day."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 sm:grid-cols-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: field,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "name",
								children: "Name"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "name",
								autoComplete: "name",
								value: form.name,
								onChange: (e) => update("name", e.target.value)
							}),
							errors.name ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-danger",
								children: errors.name
							}) : null
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: field,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "phone",
								children: "Phone"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "phone",
								type: "tel",
								autoComplete: "tel",
								inputMode: "tel",
								value: form.phone,
								onChange: (e) => update("phone", e.target.value)
							}),
							errors.phone ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-danger",
								children: errors.phone
							}) : null
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: cn(field, "sm:col-span-2"),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "email",
								children: "Email"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "email",
								type: "email",
								autoComplete: "email",
								value: form.email,
								onChange: (e) => update("email", e.target.value)
							}),
							errors.email ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-danger",
								children: errors.email
							}) : null
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: cn(field, "sm:col-span-2"),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "vehicle",
								children: "Vehicle year / make / model"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "vehicle",
								placeholder: "2019 Toyota Tundra",
								value: form.vehicle,
								onChange: (e) => update("vehicle", e.target.value)
							}),
							errors.vehicle ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-danger",
								children: errors.vehicle
							}) : null
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: field,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "service",
								children: "Requested service"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								id: "service",
								className: "flex h-11 w-full rounded-md border border-border bg-surface px-3 text-sm text-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
								value: form.service,
								onChange: (e) => update("service", e.target.value),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "",
									children: "Select a service"
								}), SERVICE_OPTIONS.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: option,
									children: option
								}, option))]
							}),
							errors.service ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-danger",
								children: errors.service
							}) : null
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: field,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "date",
								children: "Preferred date"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "date",
								type: "date",
								min: minDate,
								value: form.date,
								onChange: (e) => update("date", e.target.value)
							}),
							errors.date ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-danger",
								children: errors.date
							}) : null
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: cn(field, "sm:col-span-2"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "notes",
							children: "Anything we should know? (optional)"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
							id: "notes",
							placeholder: "Pet hair, stains, work truck, ceramic interest…",
							value: form.notes,
							onChange: (e) => update("notes", e.target.value)
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				type: "submit",
				size: "lg",
				className: "mt-6 w-full",
				children: "Request a Detail"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3 text-center text-xs text-muted",
				children: [
					"Prefer to talk now?",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						className: "font-semibold text-primary",
						href: BUSINESS.phoneTel,
						children: ["Call ", BUSINESS.phoneDisplay]
					}),
					" · ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						className: "font-semibold text-primary",
						href: BUSINESS.emailMailto,
						children: BUSINESS.email
					}),
					". Requests stay private.",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/privacy",
						className: "font-semibold text-primary",
						children: "Privacy Policy"
					})
				]
			})
		]
	});
}
//#endregion
export { BookingForm as t };
