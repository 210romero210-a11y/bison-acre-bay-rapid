import { o as IMAGES } from "./utils-Bk8QoY_x.mjs";
import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as FAQS$2 } from "./router-CY2P-pXA.mjs";
import { t as CtaBand } from "./cta-band-B6X3jrlH.mjs";
import { t as PageHero } from "./page-hero-BhxD3gZV.mjs";
import { t as Photo } from "./photo-4JDohNY3.mjs";
import { n as Section, t as Eyebrow } from "./section-DgUaj6ob.mjs";
import { t as FaqList } from "./faq-list-_hoYqqR2.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/interior-detailing-CIFIrW32.js
var import_jsx_runtime = require_jsx_runtime();
var included = [
	"Vacuum and extraction on carpets and mats",
	"Seats — cloth, leather, or vinyl — cleaned and treated as the material allows",
	"Leather conditioning when the interior can take it",
	"Console, vents, switches, and high-touch plastics",
	"Door panels, pockets, and jambs",
	"Interior glass",
	"Optional attention for pet hair and common stains when disclosed at booking"
];
function InteriorPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			compact: true,
			eyebrow: "Interior car cleaning San Antonio",
			title: "Interior Auto Detailing in San Antonio, TX",
			description: "Heat, kids, pets, and commute miles leave a cabin that a vacuum at the car wash never touches. Interior auto detailing deep-cleans the surfaces you actually live with.",
			imageSrc: IMAGES.suvInterior.src,
			imageAlt: IMAGES.suvInterior.alt
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-10 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "The cabin" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl",
					children: "Interior car cleaning — not a wipe-down"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-muted",
					children: "Interior auto detailing in San Antonio has to deal with more than dust. UV cooks dashboards. Oak pollen works into carpets every spring. Work trucks collect grit in the seat tracks. Family SUVs hide crumbs, spills, and the smell of last week’s practices."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-muted",
					children: "Southern Auto Detailers plans interior time around the vehicle you actually drive. A lightly used sedan is a different job from a crew-cab that hauls dogs. Tell us what is going on — stains, pet hair, smoke, food — so the appointment is honest about scope. Leather conditioning is part of the cabin reset when the material can take it."
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Photo, {
				src: IMAGES.interior.src,
				alt: IMAGES.interior.alt,
				className: "aspect-3/2 rounded-3xl"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-12 rounded-3xl border border-border bg-surface p-6 md:p-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-2xl",
				children: "What interior auto detailing covers"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-5 grid gap-3 text-sm text-muted md:grid-cols-2",
				children: included.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "border-l-2 border-primary pl-3",
					children: item
				}, item))
			})]
		})] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			tone: "surface",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Who it’s for" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl",
					children: "Daily drivers, family SUVs, and work trucks"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-3xl text-muted",
					children: "If you park outside in Northeast San Antonio, Live Oak, or along I-35, the cabin films over faster than you think. Leather dries. Cloth holds odors. Hard plastics haze. Interior work is the fastest way to make the vehicle feel new again without waiting on paint correction."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-4 max-w-3xl text-muted",
					children: [
						"Pair it with",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/exterior-detailing",
							className: "font-semibold text-primary",
							children: "exterior auto detailing"
						}),
						" ",
						"or a",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/full-detailing",
							className: "font-semibold text-primary",
							children: "full auto detailing"
						}),
						" ",
						"package when the paint needs the same attention. We will not upsell a coating on a cabin-only visit unless you ask."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 max-w-3xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl",
						children: "Interior detailing questions"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaqList, { items: FAQS$2 })
					})]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, { title: "Book interior auto detailing in San Antonio" })
	] });
}
//#endregion
export { InteriorPage as component };
