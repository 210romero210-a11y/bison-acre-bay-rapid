import { o as IMAGES } from "./utils-Bk8QoY_x.mjs";
import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as FAQS$3 } from "./router-CY2P-pXA.mjs";
import { t as CtaBand } from "./cta-band-B6X3jrlH.mjs";
import { t as PageHero } from "./page-hero-BhxD3gZV.mjs";
import { t as Photo } from "./photo-4JDohNY3.mjs";
import { n as Section, t as Eyebrow } from "./section-DgUaj6ob.mjs";
import { t as FaqList } from "./faq-list-_hoYqqR2.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/full-detailing-CTaJGY-f.js
var import_jsx_runtime = require_jsx_runtime();
function FullDetailPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			compact: true,
			eyebrow: "Complete car detail / full service detailing",
			title: "Full Auto Detailing in San Antonio, TX",
			description: "A full detail is the reset for vehicles that need attention inside and out — not a half-finished wash with a vacuumed floor mat.",
			imageSrc: IMAGES.hero.src,
			imageAlt: IMAGES.hero.alt
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-10 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "The whole vehicle" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl",
						children: "Interior plus exterior in one appointment"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 text-muted",
						children: [
							"Full auto detailing in San Antonio is for dusty paint, a tired cabin, wheels that have been ignored, and glass that never quite cleared. We combine",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/interior-detailing",
								className: "font-semibold text-primary",
								children: "interior auto detailing"
							}),
							" ",
							"with a safe",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/exterior-detailing",
								className: "font-semibold text-primary",
								children: "exterior auto detailing"
							}),
							" ",
							"process so the whole vehicle feels finished."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 text-muted",
						children: [
							"Work trucks, family SUVs, and daily drivers often land here. Tell us about pet hair, stains, or how long it has been. We will be direct about time and what a single complete car detail can accomplish versus a second visit for",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/paint-correction",
								className: "font-semibold text-primary",
								children: "paint correction"
							}),
							" ",
							"or",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/ceramic-coatings",
								className: "font-semibold text-primary",
								children: "ceramic coating"
							}),
							"."
						]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Photo, {
					src: IMAGES.truck.src,
					alt: IMAGES.truck.alt,
					className: "aspect-3/2 rounded-3xl"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-12 grid gap-4 md:grid-cols-2",
				children: [
					["Cabin reset", "Carpets, seats, consoles, and touch points cleaned so the interior matches the paint work."],
					["Exterior process", "Hand wash, wheels, decontamination, and gloss — not a tunnel wash on top of a dirty cabin."],
					["Trucks and SUVs", "Full service detailing is scheduled around size and soil, especially work trucks that live outside."],
					["Honest scope", "If the paint needs correction, we say so instead of calling a wash a “complete detail.”"]
				].map(([title, body]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
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
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl",
					children: "Full auto detailing questions"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaqList, { items: FAQS$3 })
				})]
			})
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, { title: "Request a full auto detailing appointment" })
	] });
}
//#endregion
export { FullDetailPage as component };
