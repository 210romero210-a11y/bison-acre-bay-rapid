import { d as PLACE_LINKS, n as BUSINESS, s as IMAGES, t as AREAS } from "./site-BioFshwK.mjs";
import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as CtaBand } from "./cta-band-B8a1aIxG.mjs";
import { t as Photo } from "./photo-BWmu363X.mjs";
import { n as Section, t as Eyebrow } from "./section-HcuhiqsJ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/service-areas-SENbQA7i.js
var import_jsx_runtime = require_jsx_runtime();
function AreasPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "San Antonio-area geographic keywords" }),
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
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-2xl",
							children: area.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm leading-relaxed text-muted",
							children: area.blurb
						})]
					}, area.name))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-10 max-w-3xl text-muted",
					children: "Searching auto detailing near Live Oak TX, Universal City, Schertz, Converse, or Windcrest? Start with a call. We will ask about vehicle size, interior soil, and paint condition, then recommend interior, exterior, full, correction, or coating work."
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, { title: "See if we can take your vehicle" })
	] });
}
//#endregion
export { AreasPage as component };
