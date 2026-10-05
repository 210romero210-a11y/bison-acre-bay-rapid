import { t as cn } from "./utils-C_uf36nf.mjs";
import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/section-HcuhiqsJ.js
var import_jsx_runtime = require_jsx_runtime();
function Section({ children, className, id, tone = "bg" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id,
		className: cn("px-4 py-16 md:px-6 md:py-24", tone === "surface" ? "bg-surface" : "bg-bg", className),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto w-full max-w-6xl",
			children
		})
	});
}
function Eyebrow({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "mb-3 text-xs font-semibold tracking-[0.22em] text-primary uppercase",
		children
	});
}
//#endregion
export { Section as n, Eyebrow as t };
