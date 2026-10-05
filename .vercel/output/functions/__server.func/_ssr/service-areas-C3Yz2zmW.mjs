import { n as BUSINESS, o as IMAGES, t as AREAS } from "./utils-Bk8QoY_x.mjs";
import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as CtaBand } from "./cta-band-B6X3jrlH.mjs";
import { t as Photo } from "./photo-4JDohNY3.mjs";
import { n as Section, t as Eyebrow } from "./section-DgUaj6ob.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/service-areas-C3Yz2zmW.js
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
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/san-antonio-78233",
					className: "mb-8 block rounded-3xl border border-primary/40 bg-bg p-6 md:p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-semibold tracking-[0.18em] text-primary uppercase",
							children: "Featured ZIP"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-2 font-display text-2xl md:text-3xl",
							children: "Auto detailing 78233 San Antonio TX"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 max-w-3xl text-sm text-muted",
							children: "Car detailing and ceramic coating for Northeast San Antonio, Rolling Oaks Mall area, Windcrest, Live Oak, and Universal City. Open the 78233 page for local details."
						})
					]
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
