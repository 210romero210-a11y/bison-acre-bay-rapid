import { h as cn } from "./utils-Bk8QoY_x.mjs";
import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/photo-4JDohNY3.js
var import_jsx_runtime = require_jsx_runtime();
function Photo({ src, alt, className, imgClassName, priority = false, width, height }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("overflow-hidden bg-surface-2", className),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src,
			alt,
			width,
			height,
			className: cn("size-full object-cover", imgClassName),
			loading: priority ? "eager" : "lazy",
			decoding: "async",
			fetchPriority: priority ? "high" : "auto"
		})
	});
}
//#endregion
export { Photo as t };
