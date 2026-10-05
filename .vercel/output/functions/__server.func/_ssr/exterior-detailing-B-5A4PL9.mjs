import { o as IMAGES } from "./utils-Bk8QoY_x.mjs";
import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as CtaBand } from "./cta-band-B6X3jrlH.mjs";
import { t as PageHero } from "./page-hero-BhxD3gZV.mjs";
import { t as Photo } from "./photo-4JDohNY3.mjs";
import { n as Section, t as Eyebrow } from "./section-DgUaj6ob.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/exterior-detailing-B-5A4PL9.js
var import_jsx_runtime = require_jsx_runtime();
function ExteriorPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			compact: true,
			eyebrow: "Exterior car wash / hand wash",
			title: "Exterior Auto Detailing in San Antonio, TX",
			description: "Texas sun, hard water, and caliche dust dull paint fast. A careful exterior detail and hand wash restore gloss without grinding swirls into the clear coat.",
			imageSrc: IMAGES.exterior.src,
			imageAlt: IMAGES.exterior.alt
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-10 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "The paint" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl",
					children: "Hand wash, clay bar, then protection"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-muted",
					children: "Exterior auto detailing in San Antonio is not a tunnel wash. Automatic brushes and dirty mitts leave the haze you see in parking-lot sun. We wash by hand, clean wheels and barrels, and decontaminate — including clay bar treatment when bonded film is on the paint — so the surface can actually take gloss."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-4 text-muted",
					children: [
						"Hard-water spots from sprinklers and wash bays are common here. So is film from I-35 and Loop 1604. If the clear coat is already swirled, we will tell you when a wash will only go so far and",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/paint-correction",
							className: "font-semibold text-primary",
							children: "paint correction"
						}),
						" ",
						"is the honest next step, or",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/ceramic-coatings",
							className: "font-semibold text-primary",
							children: "ceramic coating"
						}),
						" ",
						"after the paint is ready."
					]
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Photo, {
				src: IMAGES.wheels.src,
				alt: IMAGES.wheels.alt,
				className: "aspect-3/2 rounded-3xl"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-12 grid gap-4 md:grid-cols-2",
			children: [
				["Hand wash", "Two-bucket technique and clean tools — no abrasive shortcuts on your clear coat."],
				["Wheels and tires", "Face, barrel, and tire dressing after the dirt is actually gone."],
				["Clay bar treatment", "Bonded fallout, tree film, and industrial dust that soap alone will not move."],
				["Gloss and protection", "Enhancement and a protective layer matched to how you park and drive."]
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
		})] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, { title: "Book exterior auto detailing in San Antonio" })
	] });
}
//#endregion
export { ExteriorPage as component };
