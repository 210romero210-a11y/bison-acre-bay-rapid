import { t as cn } from "./utils-C_uf36nf.mjs";
import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as ArrowUpRight } from "../_libs/lucide-react.mjs";
import { t as Badge } from "./badge-BF8l50QL.mjs";
import { t as Photo } from "./photo-BWmu363X.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/service-card-RNggybdw.js
var import_jsx_runtime = require_jsx_runtime();
function ServiceCard({ href, title, short, image, highlight, className }) {
	const [path, hash] = href.split("#");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: path,
		hash,
		className: cn("group flex flex-col overflow-hidden rounded-3xl border border-border bg-surface shadow-card transition-colors duration-200 hover:border-primary/50", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Photo, {
			src: image.src,
			alt: image.alt,
			className: "aspect-3/2",
			imgClassName: "transition-transform duration-500 group-hover:scale-[1.03]"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-1 flex-col p-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-xl",
						children: title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "mt-1 size-4 shrink-0 text-primary opacity-0 transition-opacity group-hover:opacity-100" })]
				}),
				highlight ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
					variant: "accent",
					className: "mt-2 w-fit",
					children: highlight
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm leading-relaxed text-muted",
					children: short
				})
			]
		})]
	});
}
//#endregion
export { ServiceCard as t };
