import { p as SERVICES, s as IMAGES } from "./site-BioFshwK.mjs";
import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as CtaBand } from "./cta-band-B8a1aIxG.mjs";
import { t as PageHero } from "./page-hero-CbruryHH.mjs";
import { t as Photo } from "./photo-BWmu363X.mjs";
import { n as Section, t as Eyebrow } from "./section-HcuhiqsJ.mjs";
import { t as ServiceCard } from "./service-card-RNggybdw.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services-BxqTDKEC.js
var import_jsx_runtime = require_jsx_runtime();
function ServicesPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			compact: true,
			eyebrow: "Detailing, paint correction, ceramic coatings",
			title: "Auto Detailing Services in San Antonio, TX",
			description: "Choose the level of care your vehicle needs — a deep interior, a careful exterior, a full reset, paint correction, or ceramic protection. We recommend from condition, not a one-size ticket.",
			imageSrc: IMAGES.truck.src,
			imageAlt: IMAGES.truck.alt
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Menu" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-3xl",
				children: "Core services"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
				children: SERVICES.filter((s) => s.slug !== "full-detail" && s.slug !== "maintenance").map((service) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServiceCard, { ...service }, service.slug))
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
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, {})
	] });
}
//#endregion
export { ServicesPage as component };
