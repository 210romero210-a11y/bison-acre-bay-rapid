import { h as SERVICES, l as IMAGES } from "./site-C-sVfkRh.mjs";
import { i as crumbsFor } from "./utils-C_uf36nf.mjs";
import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { it as FAQS } from "./router-DH4iJJ57.mjs";
import { t as CtaBand } from "./cta-band-BlkDcNU0.mjs";
import { t as FaqList } from "./faq-list-ClZr8W3a.mjs";
import { t as PageHero } from "./page-hero-D1nRbXjn.mjs";
import { t as Photo } from "./photo-BWmu363X.mjs";
import { n as Section, t as Eyebrow } from "./section-HcuhiqsJ.mjs";
import { t as ServiceCard } from "./service-card-RNggybdw.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services-DoO_LKc_.js
var import_jsx_runtime = require_jsx_runtime();
function ServicesPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			compact: true,
			eyebrow: "Detailing, paint correction, ceramic coatings",
			title: "Auto Detailing Services in San Antonio, TX",
			description: "Choose the level of care your vehicle needs — a deep interior, a careful exterior, a full reset, paint correction, or ceramic protection. We recommend from condition, not a one-size ticket.",
			imageSrc: IMAGES.truck.src,
			imageAlt: IMAGES.truck.alt,
			crumbs: crumbsFor("/services")
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Menu" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-3xl",
				children: "Core services"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
				children: SERVICES.filter((s) => s.slug !== "maintenance").map((service) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServiceCard, { ...service }, service.slug))
			})
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			tone: "surface",
			id: "full-detail",
			className: "scroll-mt-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid items-center gap-10 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Packages" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl md:text-4xl",
						children: "Full auto detailing in San Antonio"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-muted",
						children: "A full auto detailing package — a complete car detail — is for vehicles that need attention inside and out: dusty paint, a tired cabin, wheels that have been ignored, and glass that never quite cleared. We combine interior deep cleaning with a safe exterior process so the whole vehicle feels reset."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-muted",
						children: "Work trucks, family SUVs, and daily drivers often land here. Tell us about pet hair, stains, or how long it has been. We will be direct about time and what a single appointment can accomplish."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/full-detailing",
						className: "mt-6 inline-block text-sm font-semibold text-primary",
						children: "Full auto detailing in San Antonio"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/blog/what-a-full-detail-includes",
						className: "mt-3 block text-sm font-semibold text-primary",
						children: "What a full detail includes"
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Photo, {
					src: IMAGES.hero.src,
					alt: IMAGES.hero.alt,
					className: "aspect-3/2 rounded-3xl"
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			id: "maintenance",
			className: "scroll-mt-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid items-center gap-10 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Photo, {
					src: IMAGES.wheels.src,
					alt: IMAGES.wheels.alt,
					className: "aspect-3/2 rounded-3xl lg:order-2"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Keep it" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl md:text-4xl",
						children: "Maintenance details"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-muted",
						children: "Once a vehicle is clean — or newly coated — a lighter, recurring detail keeps pollen, dust, and commute film from baking in. Maintenance is not a shortcut first visit. It is the cadence that protects the work you already paid for."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-muted",
						children: "Many San Antonio drivers do well every three to six months. Parking outside, kids, pets, and highway miles pull that interval shorter. We will help you pick a realistic schedule."
					})
				] })]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "From the studio" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-3xl",
				children: "Notes that match each service"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-8 grid gap-3 sm:grid-cols-2",
				children: [
					["/blog/floor-mats-and-carpets", "Interior: mats and carpets"],
					["/blog/pet-hair-interior-detailing", "Interior: pet hair"],
					["/blog/leather-conditioning-san-antonio", "Interior: leather care"],
					["/blog/sun-damaged-dashboard", "Interior: sun-damaged dashboards"],
					["/blog/car-seat-interior-detailing", "Interior: carpet under a child seat"],
					["/blog/wheel-detailing-san-antonio", "Exterior: wheels"],
					["/blog/bird-droppings-on-car-paint", "Exterior: bird droppings"],
					["/blog/what-a-full-detail-includes", "Full detail: what is included"],
					["/blog/detailing-trucks-and-suvs-san-antonio", "Full detail: trucks and SUVs"],
					["/blog/swirl-marks-from-car-washes", "Paint correction: swirl marks"],
					["/blog/ceramic-coating-vs-wax", "Compare ceramic coating and wax"],
					["/blog/how-to-wash-ceramic-coated-car", "How to wash a ceramic-coated car"],
					["/blog/new-car-paint-correction-before-ceramic-coating", "Preparing a new vehicle for coating"],
					["/blog/water-spots-on-car-paint", "Water spots and paint etching"],
					["/blog/what-is-paint-correction", "Understand how paint correction works"],
					["/blog/what-changes-a-paint-correction-quote", "What changes a paint correction quote"],
					["/blog/polishing-vs-waxing", "Polishing versus waxing"],
					["/blog/how-long-does-paint-correction-take", "How long paint correction takes"],
					["/blog/how-to-choose-a-paint-correction-detailer", "How to choose a paint correction detailer"],
					["/blog/paint-correction-aftercare", "Caring for paint after correction"],
					["/blog/ceramic-coating-does-not-hide-swirls", "A coating does not hide swirls"],
					["/blog/when-a-scratch-is-too-deep-to-polish", "When a scratch is too deep to polish"],
					["/blog/iron-fallout-on-car-paint", "Iron fallout on paint"],
					["/blog/car-screens-buttons-and-glossy-trim", "Screens and glossy trim"],
					["/blog/what-to-tell-a-detailer-before-you-book", "What to tell the studio before you book"]
				].map(([to, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to,
					className: "font-semibold text-primary",
					children: label
				}) }, to))
			})
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			tone: "surface",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Questions" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl",
					children: "Service FAQs"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 max-w-3xl",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaqList, { items: FAQS })
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, {})
	] });
}
//#endregion
export { ServicesPage as component };
