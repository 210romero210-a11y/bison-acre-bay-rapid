import { i as __toESM } from "../_runtime.mjs";
import { h as SERVICE_OPTIONS, n as BUSINESS, r as DEPOSIT } from "./site-DZY_i1CI.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { _ as require_jsx_runtime, v as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { f as CircleCheck } from "../_libs/lucide-react.mjs";
import { et as Button } from "./router-BSqutAy7.mjs";
import { n as TSS_SERVER_FUNCTION, r as getServerFnById, t as createServerFn } from "./ssr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/booking-form-R2MnFVue.js
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
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var submitBookingRequest = createServerFn({ method: "POST" }).validator((data) => data).handler(createSsrRpc("b0c76d3eb78b5a7e661f9d890da43be3806417ffb1241a914c6fa315568754cd"));
var empty = {
	name: "",
	phone: "",
	email: "",
	vehicle: "",
	service: "",
	date: "",
	notes: "",
	deposit: false
};
function digits(value) {
	return value.replace(/\D/g, "");
}
function BookingForm({ className }) {
	const [form, setForm] = (0, import_react.useState)(empty);
	const [errors, setErrors] = (0, import_react.useState)({});
	const [formError, setFormError] = (0, import_react.useState)(null);
	const [pending, setPending] = (0, import_react.useState)(false);
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
		else if ((/* @__PURE__ */ new Date(`${next.date}T12:00:00`)).getDay() === 1) nextErrors.date = "The studio is closed Monday. Pick Tuesday through Sunday.";
		if (!next.deposit) nextErrors.deposit = "Confirm the 20% deposit to request a slot.";
		return nextErrors;
	}
	async function onSubmit(event) {
		event.preventDefault();
		const nextErrors = validate(form);
		if (Object.keys(nextErrors).length) {
			setErrors(nextErrors);
			return;
		}
		setPending(true);
		setFormError(null);
		try {
			const result = await submitBookingRequest({ data: form });
			if (!result.ok) {
				setFormError(result.error);
				return;
			}
			setSubmitted(form);
		} catch {
			setFormError("We could not send this request. Call (210) 201-4847.");
		} finally {
			setPending(false);
		}
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
					". Your slot is not held until the 20% non-refundable deposit of the quoted total is received."
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
		toolname: "request_appointment",
		tooldescription: "Request an in-shop detailing appointment at Southern Auto Detailers, 11692 Bricken Circle, San Antonio, TX 78233. This sends a request only. The time is not held until a 20% non-refundable deposit of the quoted total is received. The studio is closed Monday and does not offer mobile detailing.",
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
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 text-sm text-muted",
						children: [
							"Short form. We confirm by phone. A ",
							DEPOSIT.title.toLowerCase(),
							" — 20% of the quoted total — is required to secure the slot."
						]
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
								name: "name",
								autoComplete: "name",
								required: true,
								toolparamdescription: "Customer full name.",
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
								name: "phone",
								type: "tel",
								autoComplete: "tel",
								inputMode: "tel",
								required: true,
								toolparamdescription: "10-digit phone number Southern Auto Detailers should call to confirm the request.",
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
								name: "email",
								type: "email",
								autoComplete: "email",
								required: true,
								toolparamdescription: "Email address for the appointment request.",
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
								name: "vehicle",
								required: true,
								toolparamdescription: "Vehicle year, make, and model. Example: 2019 Toyota Tundra.",
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
								name: "service",
								required: true,
								toolparamdescription: "In-shop service to request: interior, exterior, full detail, paint correction, ceramic coating, maintenance, or a recommendation.",
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
								name: "date",
								type: "date",
								required: true,
								toolparamdescription: "Preferred appointment date. Tuesday through Sunday only. The studio is closed Monday.",
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
							name: "notes",
							toolparamdescription: "Optional notes about condition, such as pet hair, stains, a work truck, or ceramic coating interest.",
							placeholder: "Pet hair, stains, work truck, ceramic interest…",
							value: form.notes,
							onChange: (e) => update("notes", e.target.value)
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "mt-4 flex items-start gap-3 text-sm text-muted sm:col-span-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "checkbox",
							name: "deposit",
							value: "acknowledged",
							required: true,
							toolparamdescription: "Must be acknowledged. A 20% non-refundable deposit of the quoted total is required to hold the appointment. The form request alone does not hold the slot.",
							className: "mt-1 size-4 accent-primary",
							checked: form.deposit,
							onChange: (e) => update("deposit", e.target.checked)
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
							"I understand a 20% non-refundable deposit (20% of the quoted total) is required to secure my booking slot. See the",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/refund-policy",
								className: "font-semibold text-primary",
								children: "Refund Policy"
							}),
							" ",
							"and",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/terms",
								className: "font-semibold text-primary",
								children: "Terms"
							}),
							"."
						] })]
					}),
					errors.deposit ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-xs text-danger",
						children: errors.deposit
					}) : null
				]
			}),
			formError ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-sm text-danger",
				children: formError
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				type: "submit",
				size: "lg",
				className: "mt-6 w-full",
				disabled: pending,
				children: pending ? "Sending…" : "Request a Detail"
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
