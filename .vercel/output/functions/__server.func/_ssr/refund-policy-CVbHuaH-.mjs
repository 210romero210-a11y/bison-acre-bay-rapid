import { n as BUSINESS, r as DEPOSIT } from "./site-DZY_i1CI.mjs";
import { i as crumbsFor } from "./utils-C_uf36nf.mjs";
import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Breadcrumbs } from "./breadcrumbs-DEjB3EM2.mjs";
import { n as Section, t as Eyebrow } from "./section-HcuhiqsJ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/refund-policy-CVbHuaH-.js
var import_jsx_runtime = require_jsx_runtime();
function RefundPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Breadcrumbs, {
			items: crumbsFor("/refund-policy"),
			className: "mb-6"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Legal" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "max-w-3xl font-display text-4xl md:text-5xl",
			children: "Refund Policy"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-4 max-w-2xl text-muted",
			children: [
				"How deposits and balances work at ",
				BUSINESS.name,
				", ",
				BUSINESS.addressLine,
				"."
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-12 grid max-w-3xl gap-10 text-sm leading-relaxed text-muted",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl text-fg",
						children: "20% non-refundable deposit"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3",
						children: DEPOSIT.blurb
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3",
						children: "The deposit is always 20% of the quoted total for that vehicle. It is not a published package price. Your quote depends on size, condition, and the service you book. The remaining 80% is due when the work is finished. If you cancel, reschedule in a way that leaves the slot empty, or do not show, the deposit is not refunded."
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl text-fg",
					children: "If we cancel"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3",
					children: "If Southern Auto Detailers cancels and we cannot book a replacement time you accept, the deposit is refunded in full. If we have started work and cannot finish because of a problem on our side, we will either complete it at a new time or refund the unfinished portion of the balance. The deposit still covers the time we held for you unless the cancellation is ours."
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl text-fg",
					children: "What is not refundable"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3",
					children: "Results we warned you about before starting are not a refund reason. That includes stains that may not fully release, odors that need more than one visit, thin clear coat that cannot take heavy correction, and coating that cannot prevent chips or etching from neglect. Change-of-mind after the deposit is paid does not refund the deposit. Work already performed is not refunded because the finish is “different than a photo online.”"
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl text-fg",
					children: "How to ask"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-3",
					children: [
						"Email",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							className: "font-semibold text-primary",
							href: BUSINESS.emailMailto,
							children: BUSINESS.email
						}),
						" ",
						"or call ",
						BUSINESS.phoneDisplay,
						" with your name, vehicle, and appointment date. See also the",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/terms",
							className: "font-semibold text-primary",
							children: "Terms & Conditions"
						}),
						"."
					]
				})] })
			]
		})
	] }) });
}
//#endregion
export { RefundPage as component };
