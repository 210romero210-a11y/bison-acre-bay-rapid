import { c as JUNIOR_ACHIEVEMENT } from "./site-BioFshwK.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { u as HandHeart } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/community-pledge-BE3uEXM5.js
var import_jsx_runtime = require_jsx_runtime();
function CommunityPledge({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: cn("border-y border-primary/25 bg-surface", className),
		"aria-labelledby": "community-pledge-heading",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-12 md:flex-row md:items-center md:justify-between md:px-6 md:py-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-2xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mb-3 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.22em] text-primary uppercase",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HandHeart, { className: "size-4" }), "Community impact"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						id: "community-pledge-heading",
						className: "font-display text-3xl md:text-4xl",
						children: JUNIOR_ACHIEVEMENT.headline
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 text-base text-muted md:text-lg",
						children: [
							"10% of every sale goes to",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: JUNIOR_ACHIEVEMENT.url,
								className: "font-semibold text-primary underline-offset-4 hover:underline",
								target: "_blank",
								rel: "noreferrer",
								children: JUNIOR_ACHIEVEMENT.name
							}),
							", supporting and shaping the future of San Antonio, TX."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 text-sm text-muted",
						children: [
							"When you book auto detailing in San Antonio with Southern Auto Detailers, you are also investing in local youth.",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/about",
								className: "font-semibold text-primary",
								children: "Meet the founder"
							}),
							"."
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "shrink-0 rounded-3xl border border-primary/40 bg-bg px-8 py-7 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-5xl font-semibold text-primary",
						children: "10%"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm font-semibold tracking-wide text-fg uppercase",
						children: "of every sale"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 max-w-[14rem] text-xs leading-relaxed text-muted",
						children: "Donated to Junior Achievement of South Texas"
					})
				]
			})]
		})
	});
}
//#endregion
export { CommunityPledge as t };
