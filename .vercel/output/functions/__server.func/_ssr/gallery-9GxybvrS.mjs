import { i as __toESM } from "../_runtime.mjs";
import { h as cn, i as GALLERY } from "./utils-Bk8QoY_x.mjs";
import { _ as require_jsx_runtime, v as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as X } from "../_libs/lucide-react.mjs";
import { a as DialogPortal, i as DialogOverlay, n as DialogClose, o as DialogTitle, r as DialogContent, s as DialogTrigger, t as Dialog } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { s as Button } from "./router-CY2P-pXA.mjs";
import { t as CtaBand } from "./cta-band-B6X3jrlH.mjs";
import { t as Photo } from "./photo-4JDohNY3.mjs";
import { n as Section, t as Eyebrow } from "./section-DgUaj6ob.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/gallery-9GxybvrS.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var filters = [
	"All",
	"Interior",
	"Exterior",
	"Paint"
];
function GalleryPage() {
	const [filter, setFilter] = (0, import_react.useState)("All");
	const items = GALLERY.filter((item) => filter === "All" || item.tag === filter);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			className: "pb-8 pt-16 md:pt-20",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Before-and-after proof" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "max-w-3xl font-display text-4xl md:text-5xl",
					children: "Detailing gallery — San Antonio, TX"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-2xl text-muted",
					children: "Photography showing the level of interior, exterior, and paint finish we work toward. These are service images, not billed as a specific customer’s vehicle. For a look at your car, truck, or SUV, book a visit."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 flex flex-wrap gap-2",
					children: filters.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setFilter(item),
						className: cn("h-10 rounded-full px-4 text-sm font-semibold", filter === item ? "bg-primary text-primary-fg" : "border border-border bg-surface text-muted hover:text-fg"),
						children: item
					}, item))
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			className: "pt-0",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3",
				children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dialog, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTrigger, {
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: "text-left",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Photo, {
								src: item.src,
								alt: item.alt,
								className: "aspect-3/2 rounded-3xl"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-3 block font-display text-lg",
								children: item.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs tracking-wide text-muted uppercase",
								children: item.tag
							})
						]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, { className: "fixed inset-0 z-50 bg-bg/80" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
					className: "fixed inset-4 z-50 m-auto flex max-h-[90svh] max-w-5xl flex-col overflow-auto rounded-3xl border border-border bg-surface p-4 md:p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-4 flex items-center justify-between gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
							className: "font-display text-xl",
							children: item.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogClose, {
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "ghost",
								size: "icon",
								"aria-label": "Close image",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {})
							})
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: item.src,
						alt: item.alt,
						className: "w-full rounded-2xl object-contain"
					})]
				})] })] }, item.src))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, {})
	] });
}
//#endregion
export { GalleryPage as component };
