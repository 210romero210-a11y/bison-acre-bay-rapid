import { i as crumbsFor } from "./utils-C_uf36nf.mjs";
import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { F as Route$33 } from "./router-BSqutAy7.mjs";
import { t as Breadcrumbs } from "./breadcrumbs-DEjB3EM2.mjs";
import { n as Section, t as Eyebrow } from "./section-HcuhiqsJ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/blog.index-I7rPEFKh.js
var import_jsx_runtime = require_jsx_runtime();
function BlogIndex() {
	const blogPosts = Route$33.useLoaderData();
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
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-10 grid gap-4",
			children: blogPosts.map((post) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
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
		})
	] }) });
}
//#endregion
export { BlogIndex as component };
