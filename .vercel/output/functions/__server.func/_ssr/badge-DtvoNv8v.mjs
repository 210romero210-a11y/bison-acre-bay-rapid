import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { h as cn } from "./utils-Bk8QoY_x.mjs";
import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/badge-DtvoNv8v.js
var import_jsx_runtime = require_jsx_runtime();
var badgeVariants = cva("inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold tracking-wide", {
	variants: { variant: {
		default: "bg-primary/15 text-primary",
		accent: "bg-accent/15 text-accent",
		muted: "bg-surface-2 text-muted"
	} },
	defaultVariants: { variant: "default" }
});
function Badge({ className, variant, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn(badgeVariants({ variant }), className),
		...props
	});
}
//#endregion
export { Badge as t };
