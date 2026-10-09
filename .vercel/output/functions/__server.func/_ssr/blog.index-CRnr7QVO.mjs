import { i as crumbsFor } from "./utils-C_uf36nf.mjs";
import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { Y as Route$47 } from "./router-C5YChcJ5.mjs";
import { t as Breadcrumbs } from "./breadcrumbs-DEjB3EM2.mjs";
import { n as Section, t as Eyebrow } from "./section-HcuhiqsJ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/blog.index-CRnr7QVO.js
var import_jsx_runtime = require_jsx_runtime();
var CLUSTER = [
	"/blog/what-is-paint-correction",
	"/blog/ceramic-coating-vs-wax",
	"/blog/new-car-paint-correction-before-ceramic-coating",
	"/blog/water-spots-on-car-paint",
	"/blog/how-to-wash-ceramic-coated-car"
];
var BATCH = [
	"/blog/ceramic-coating-does-not-hide-swirls",
	"/blog/when-a-scratch-is-too-deep-to-polish",
	"/blog/iron-fallout-on-car-paint",
	"/blog/car-screens-buttons-and-glossy-trim",
	"/blog/what-to-tell-a-detailer-before-you-book"
];
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
	const blogPosts = Route$47.useLoaderData();
	const cluster = CLUSTER.map((path) => blogPosts.find((post) => post.path === path)).filter((post) => Boolean(post));
	const batch = BATCH.map((path) => blogPosts.find((post) => post.path === path)).filter((post) => Boolean(post));
	const featured = /* @__PURE__ */ new Set([...CLUSTER, ...BATCH]);
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
			children: "Practical writing on coating, correction, and how to choose a northeast-side studio. No coupon roundups."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "mt-12 font-display text-3xl",
			children: "Paint protection cluster"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-3 max-w-2xl text-muted",
			children: "Start with what correction is, then coating versus wax, new-car prep, water spots, and how to wash a coated car. Each guide links to the matching in-shop service."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PostList, { posts: cluster }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "mt-14 font-display text-3xl",
			children: "Five notes, published together"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-3 max-w-2xl text-muted",
			children: "A coating does not hide swirls. A deep scratch is not a polish job. Orange specks are often iron. Glossy trim is not the same as a seat. And a full detail is not those other jobs unless you say so."
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
