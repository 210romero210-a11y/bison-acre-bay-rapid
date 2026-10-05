import { h as cn, n as BUSINESS } from "./utils-Bk8QoY_x.mjs";
import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Phone } from "../_libs/lucide-react.mjs";
import { s as Button } from "./router-CY2P-pXA.mjs";
import { t as Badge } from "./badge-DtvoNv8v.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/page-hero-BhxD3gZV.js
var import_jsx_runtime = require_jsx_runtime();
function PageHero({ eyebrow, title, description, imageSrc, imageAlt, compact = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: cn("relative isolate overflow-hidden", compact ? "min-h-[28rem]" : "min-h-svh"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: imageSrc,
				alt: imageAlt,
				className: "absolute inset-0 size-full object-cover",
				width: 1600,
				height: 900,
				loading: "eager",
				decoding: "async",
				fetchPriority: "high"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-bg via-bg/80 to-bg/25" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-bg via-transparent to-bg/40" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: cn("relative mx-auto flex w-full max-w-6xl flex-col justify-end px-4 md:px-6", compact ? "min-h-[28rem] py-16" : "min-h-svh py-24"),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-4 text-xs font-semibold tracking-[0.22em] text-primary uppercase",
						children: eyebrow
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "max-w-3xl font-display text-4xl font-semibold tracking-tight text-fg md:text-6xl",
						children: title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 max-w-xl text-base text-muted md:text-lg",
						children: description
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-col gap-3 sm:flex-row sm:items-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								size: "lg",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: BUSINESS.phoneTel,
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {}),
										"Call ",
										BUSINESS.phoneDisplay
									]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								size: "lg",
								variant: "outline",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/contact",
									children: "Request a Detail"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								variant: "accent",
								className: "w-fit sm:ml-2",
								children: "Limited Availability"
							})
						]
					})
				]
			})
		]
	});
}
//#endregion
export { PageHero as t };
