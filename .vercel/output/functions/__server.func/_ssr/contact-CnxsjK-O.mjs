import { n as BUSINESS, o as HOURS, t as AREAS } from "./site-DZY_i1CI.mjs";
import { i as crumbsFor, t as cn } from "./utils-C_uf36nf.mjs";
import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { a as Phone, c as Mail, d as Clock, s as MapPin } from "../_libs/lucide-react.mjs";
import { t as Breadcrumbs } from "./breadcrumbs-DEjB3EM2.mjs";
import { n as Section, t as Eyebrow } from "./section-HcuhiqsJ.mjs";
import { t as BookingForm } from "./booking-form-R2MnFVue.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-CnxsjK-O.js
var import_jsx_runtime = require_jsx_runtime();
function HoursList({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("text-sm", className),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-3 text-xs font-semibold tracking-[0.18em] text-muted uppercase",
				children: "Hours"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "grid gap-1.5",
				children: HOURS.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex items-baseline justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-fg",
						children: row.day
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: row.time === "Closed" ? "text-muted" : "text-primary",
						children: row.time
					})]
				}, row.day))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3 text-xs text-muted",
				children: [BUSINESS.hoursSummary, ". Appointments recommended."]
			})
		]
	});
}
function ContactPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Breadcrumbs, {
			items: crumbsFor("/contact"),
			className: "mb-6"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Calls and appointment requests" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "max-w-3xl font-display text-4xl md:text-5xl",
			children: "Book auto detailing in San Antonio"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-4 max-w-2xl text-muted",
			children: [
				"San Antonio based studio at ",
				BUSINESS.addressLine,
				". Private, appointment-based work. Call, email, or send a request — we will confirm timing for your vehicle."
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-10 grid gap-10 lg:grid-cols-[0.95fr_1.05fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-3xl border border-border bg-surface p-6 md:p-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl",
						children: "Studio"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: BUSINESS.phoneTel,
						className: "mt-6 flex items-center gap-3 text-lg font-semibold text-primary",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-5" }), BUSINESS.phoneDisplay]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: BUSINESS.emailMailto,
						className: "mt-4 flex items-center gap-3 text-sm font-semibold text-primary",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "size-4" }), BUSINESS.email]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: BUSINESS.mapsUrl,
						className: "mt-4 flex items-start gap-3 text-sm text-muted hover:text-fg",
						target: "_blank",
						rel: "noreferrer",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "mt-0.5 size-4 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
							BUSINESS.addressLine,
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"San Antonio based · Northeast San Antonio, 78233"
						] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 flex items-center gap-3 text-sm text-muted",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "size-4 text-primary" }), BUSINESS.hoursSummary]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HoursList, { className: "mt-8 border-t border-border pt-6" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-8 grid gap-1.5 text-sm text-muted",
						children: AREAS.map((area) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: ["· ", area.name] }, area.name))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-8 text-xs text-muted",
						children: [
							BUSINESS.name,
							" · ",
							BUSINESS.addressLine,
							" · ",
							BUSINESS.phoneDisplay,
							" ·",
							" ",
							BUSINESS.email,
							" · ",
							BUSINESS.websiteDisplay
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookingForm, {})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-10 overflow-hidden rounded-3xl border border-border",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
				title: "Map of Southern Auto Detailers at 11692 Bricken Circle, San Antonio, TX",
				src: BUSINESS.mapsEmbed,
				className: "h-72 w-full border-0 md:h-96",
				loading: "lazy",
				referrerPolicy: "no-referrer-when-downgrade"
			})
		})
	] }) });
}
//#endregion
export { ContactPage as component };
