import { i as crumbsFor } from "./utils-C_uf36nf.mjs";
import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { tt as Route$53 } from "./router-DH4iJJ57.mjs";
import { t as Breadcrumbs } from "./breadcrumbs-DEjB3EM2.mjs";
import { n as Section, t as Eyebrow } from "./section-HcuhiqsJ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/blog.index-BxG6qoC3.js
var import_jsx_runtime = require_jsx_runtime();
var CORRECTION = [
	"/blog/what-is-paint-correction",
	"/blog/swirl-marks-from-car-washes",
	"/blog/when-a-scratch-is-too-deep-to-polish",
	"/blog/water-spots-on-car-paint",
	"/blog/new-car-paint-correction-before-ceramic-coating",
	"/blog/paint-correction-before-ceramic-coating"
];
var DECISIONS = [
	"/blog/what-changes-a-paint-correction-quote",
	"/blog/polishing-vs-waxing",
	"/blog/how-long-does-paint-correction-take",
	"/blog/how-to-choose-a-paint-correction-detailer",
	"/blog/paint-correction-aftercare"
];
var INTERIOR = [
	"/blog/floor-mats-and-carpets",
	"/blog/interior-stain-limits",
	"/blog/pet-hair-interior-detailing",
	"/blog/leather-conditioning-san-antonio",
	"/blog/car-screens-buttons-and-glossy-trim",
	"/blog/sun-damaged-dashboard",
	"/blog/car-seat-interior-detailing"
];
var CLUSTER = [
	"/blog/ceramic-coating-vs-wax",
	"/blog/ceramic-coating-does-not-hide-swirls",
	"/blog/how-to-wash-ceramic-coated-car"
];
var BATCH = ["/blog/iron-fallout-on-car-paint", "/blog/what-to-tell-a-detailer-before-you-book"];
function PostList({ posts }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "mt-8 grid gap-4",
		children: posts.map((post) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: post.path,
			className: "grid gap-5 rounded-3xl border border-border bg-surface p-4 hover:border-primary/50 sm:grid-cols-[12rem_1fr] sm:p-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: post.image.src,
				alt: post.image.alt,
				width: 1600,
				height: 900,
				className: "aspect-video w-full rounded-2xl object-cover"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-2xl",
				children: post.h1
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted",
				children: post.description
			})] })]
		}) }, post.path))
	});
}
function BlogIndex() {
	const blogPosts = Route$53.useLoaderData();
	const correction = CORRECTION.map((path) => blogPosts.find((post) => post.path === path)).filter((post) => Boolean(post));
	const decisions = DECISIONS.map((path) => blogPosts.find((post) => post.path === path)).filter((post) => Boolean(post));
	const interior = INTERIOR.map((path) => blogPosts.find((post) => post.path === path)).filter((post) => Boolean(post));
	const cluster = CLUSTER.map((path) => blogPosts.find((post) => post.path === path)).filter((post) => Boolean(post));
	const batch = BATCH.map((path) => blogPosts.find((post) => post.path === path)).filter((post) => Boolean(post));
	const featured = /* @__PURE__ */ new Set([
		...CORRECTION,
		...DECISIONS,
		...INTERIOR,
		...CLUSTER,
		...BATCH
	]);
	const rest = blogPosts.filter((post) => !featured.has(post.path));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Breadcrumbs, {
			items: crumbsFor("/blog"),
			className: "mb-6"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Studio notes" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "max-w-3xl font-display text-4xl md:text-5xl",
			children: "Detailing notes for San Antonio"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-4 max-w-2xl text-muted",
			children: "Practical writing on cabin care, coating, correction, and how to choose a northeast-side studio. No coupon roundups."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "mt-12 font-display text-3xl",
			children: "Paint correction guides"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-3 max-w-2xl text-muted",
			children: [
				"These notes explain defects, limits, prep, and whether correction belongs before protection. The service itself is",
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/paint-correction",
					className: "font-semibold text-primary",
					children: "paint correction in San Antonio"
				}),
				". The vehicle comes to the studio."
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PostList, { posts: correction }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "mt-14 font-display text-3xl",
			children: "Quote, time, and care"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-3 max-w-2xl text-muted",
			children: "What changes a correction quote, how polish differs from wax, why there is no published hour, how to question a detailer, and how to keep the finish. Still no package price."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PostList, { posts: decisions }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "mt-14 font-display text-3xl",
			children: "Interior detailing and cabin care"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-3 max-w-2xl text-muted",
			children: [
				"Carpets, which stains may remain, pet hair, leather, screens, a sun-baked dash, and the carpet under a child seat. The appointment is",
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/interior-detailing",
					className: "font-semibold text-primary",
					children: "interior detailing in San Antonio"
				}),
				". These notes are not separate packages, and they do not cover a child restraint itself."
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PostList, { posts: interior }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "mt-14 font-display text-3xl",
			children: "Paint protection cluster"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-3 max-w-2xl text-muted",
			children: "Coating versus wax, why a coating does not hide swirls, and how to wash a coated car. Protection is a separate appointment from polishing."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PostList, { posts: cluster }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "mt-14 font-display text-3xl",
			children: "More studio notes"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-3 max-w-2xl text-muted",
			children: "Iron on the paint, and what to send before you book. Neither of these is a cabin package."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PostList, { posts: batch }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "mt-14 font-display text-3xl",
			children: "More from the studio"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PostList, { posts: rest })
	] }) });
}
//#endregion
export { BlogIndex as component };
