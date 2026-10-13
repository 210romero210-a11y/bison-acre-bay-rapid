import { l as IMAGES, n as BUSINESS, p as PLACE_LINKS, t as AREAS } from "./site-C-sVfkRh.mjs";
import { i as crumbsFor } from "./utils-C_uf36nf.mjs";
import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { at as FAQS$1 } from "./router-DL4dFBtz.mjs";
import { t as CtaBand } from "./cta-band-BtEloSvg.mjs";
import { t as FaqList } from "./faq-list-ClZr8W3a.mjs";
import { t as Breadcrumbs } from "./breadcrumbs-DEjB3EM2.mjs";
import { t as Photo } from "./photo-BWmu363X.mjs";
import { n as Section, t as Eyebrow } from "./section-HcuhiqsJ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/service-areas-Bl9ebJeU.js
var import_jsx_runtime = require_jsx_runtime();
function AreasPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Breadcrumbs, {
				items: crumbsFor("/service-areas"),
				className: "mb-6"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Northeast San Antonio" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "max-w-3xl font-display text-4xl md:text-5xl",
				children: "Auto detailing near San Antonio, TX"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-4 max-w-2xl text-muted",
				children: [
					"Looking for an auto detailing shop near you in San Antonio? Southern Auto Detailers works with drivers across the city and the northeast metro. If you are nearby and the vehicle is eligible, call ",
					BUSINESS.phoneDisplay,
					" and we will confirm."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Photo, {
				src: IMAGES.truck.src,
				alt: IMAGES.truck.alt,
				className: "mt-10 aspect-21/9 max-h-80 rounded-3xl"
			})
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			tone: "surface",
			className: "pt-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3",
					children: PLACE_LINKS.map((place) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: place.to,
						className: "rounded-2xl border border-border bg-bg px-4 py-3 text-sm font-semibold text-primary",
						children: place.label
					}, place.to))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-5 md:grid-cols-2",
					children: AREAS.map((area) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "rounded-3xl border border-border bg-bg p-6 md:p-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-2xl",
								children: area.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm leading-relaxed text-muted",
								children: area.blurb
							}),
							area.to ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: area.to,
								className: "mt-4 inline-block text-sm font-semibold text-primary",
								children: area.linkLabel
							}) : null
						]
					}, area.name))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-10 max-w-3xl text-muted",
					children: [
						"Royal Ridge, the Rolling Oaks Mall area, and Fort Sam Houston are the northeast names competitors skip. Oak Meadow is north-central, not this ZIP. Start with a call to ",
						BUSINESS.phoneDisplay,
						". We will ask about vehicle size, interior soil, and paint condition, then recommend interior, exterior, full, correction, or coating work at the studio."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 max-w-3xl",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaqList, { items: FAQS$1 })
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, { title: "See if we can take your vehicle" })
	] });
}
//#endregion
export { AreasPage as component };
