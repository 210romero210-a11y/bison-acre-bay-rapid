import { o as IMAGES } from "./utils-Bk8QoY_x.mjs";
import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as FAQS$1 } from "./router-CY2P-pXA.mjs";
import { t as CtaBand } from "./cta-band-B6X3jrlH.mjs";
import { t as PageHero } from "./page-hero-BhxD3gZV.mjs";
import { t as Photo } from "./photo-4JDohNY3.mjs";
import { n as Section, t as Eyebrow } from "./section-DgUaj6ob.mjs";
import { t as FaqList } from "./faq-list-_hoYqqR2.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/paint-correction-Bvtjkazz.js
var import_jsx_runtime = require_jsx_runtime();
function PaintPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			compact: true,
			eyebrow: "Swirl mark removal & paint polishing",
			title: "Paint Correction in San Antonio, TX",
			description: "Sun and automatic washes leave holograms, haze, and wash marring. Paint correction and swirl mark removal improve clarity so the color you bought is the color you see.",
			imageSrc: IMAGES.paint.src,
			imageAlt: IMAGES.paint.alt
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-10 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Clarity" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl",
						children: "Swirl mark removal, polishing, and light scratch work"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-muted",
						children: "Paint correction in San Antonio TX is for vehicles that still look dull after a proper wash. Light swirls, buffer trails, and oxidation scatter light. We evaluate the clear coat, then polish to the level the paint can safely support — not a one-pad “showroom” promise on every car."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 text-muted",
						children: [
							"Dark colors show it first. So do vehicles that lived in tunnel washes. If the damage is deep, we will say so. Correction is not dent repair, and it is not a wrap. It is controlled paint polishing to restore clarity, then protection — often",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/ceramic-coatings",
								className: "font-semibold text-primary",
								children: "ceramic coating"
							}),
							" ",
							"— so the work lasts in Texas UV. Drivers in",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/san-antonio-78233",
								className: "font-semibold text-primary",
								children: "78233"
							}),
							" ",
							"and Northeast San Antonio can ask about the same process."
						]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Photo, {
					src: IMAGES.coupe.src,
					alt: IMAGES.coupe.alt,
					className: "aspect-3/2 rounded-3xl"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-4 md:grid-cols-3",
				children: [
					["Inspection", "We look at paint thickness, existing marring, and whether correction is the right spend."],
					["Paint polishing", "Machine polishing in stages matched to the defect — light enhancement through heavier paint restoration."],
					["Scratch removal", "Light clear-coat scratches and swirl marks often improve. Deep scratches are called out before we start."]
				].map(([title, body]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-3xl border border-border bg-surface p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-xl",
						children: title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted",
						children: body
					})]
				}, title))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12 max-w-3xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl",
						children: "Paint correction cost and questions"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-muted",
						children: "Searching paint correction San Antonio cost? The honest answer is that prep and defect level drive the price more than a menu name. Call (210) 201-4847 and describe the vehicle."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaqList, { items: FAQS$1 })
					})
				]
			})
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, { title: "Ask about paint correction in San Antonio" })
	] });
}
//#endregion
export { PaintPage as component };
