import { t as cn } from "./utils-C_uf36nf.mjs";
import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/breadcrumbs-DEjB3EM2.js
var import_jsx_runtime = require_jsx_runtime();
function Breadcrumbs({ items, className }) {
	if (items.length < 2) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
		"aria-label": "Breadcrumb",
		className: cn(className),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
			className: "flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-muted",
			children: items.map((item, index) => {
				const last = index === items.length - 1;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex items-center gap-2",
					children: [index > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						"aria-hidden": "true",
						children: "/"
					}) : null, last ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-fg",
						"aria-current": "page",
						children: item.name
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: item.to,
						className: "hover:text-primary",
						children: item.name
					})]
				}, item.to);
			})
		})
	});
}
//#endregion
export { Breadcrumbs as t };
