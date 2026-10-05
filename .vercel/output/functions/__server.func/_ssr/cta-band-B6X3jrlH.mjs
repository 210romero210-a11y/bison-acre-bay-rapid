import { n as BUSINESS } from "./utils-Bk8QoY_x.mjs";
import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Phone } from "../_libs/lucide-react.mjs";
import { s as Button } from "./router-CY2P-pXA.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/cta-band-B6X3jrlH.js
var import_jsx_runtime = require_jsx_runtime();
function CtaBand({ title = "Book auto detailing in San Antonio", body = `Call ${BUSINESS.phoneDisplay} or email ${BUSINESS.email}. San Antonio studio at ${BUSINESS.street}. ${BUSINESS.hoursSummary}.` }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "px-4 py-16 md:px-6 md:py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 rounded-3xl border border-border bg-surface p-8 md:flex-row md:items-center md:p-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl md:text-4xl",
					children: title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-muted",
					children: body
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex w-full flex-col gap-3 sm:w-auto sm:flex-row",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
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
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					size: "lg",
					variant: "outline",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/contact",
						children: "Request a Detail"
					})
				})]
			})]
		})
	});
}
//#endregion
export { CtaBand as t };
