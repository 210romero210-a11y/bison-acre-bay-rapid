import { n as BUSINESS, r as DEPOSIT } from "./site-DZY_i1CI.mjs";
import { i as crumbsFor } from "./utils-C_uf36nf.mjs";
import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Breadcrumbs } from "./breadcrumbs-DEjB3EM2.mjs";
import { n as Section, t as Eyebrow } from "./section-HcuhiqsJ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/terms-CwRsa74h.js
var import_jsx_runtime = require_jsx_runtime();
var sections = [
	{
		h: "Agreement",
		p: `These terms cover appointment requests, quotes, and detailing work from ${BUSINESS.name} at ${BUSINESS.addressLine}. By requesting a slot, paying a deposit, or leaving a vehicle with us, you agree to these terms, the Refund Policy, and the Privacy Policy.`
	},
	{
		h: "Quotes",
		p: "A quote is based on the vehicle details you provide — year, make, model, condition, and the service you want. The final scope can change if the vehicle is dirtier, more stained, or more swirled than described. We will tell you before adding work. We do not publish a flat online price list because condition changes the job."
	},
	{
		h: "20% non-refundable deposit",
		p: `${DEPOSIT.blurb} The slot is not held until that deposit is received and we confirm the appointment. The remaining balance is due when the work is completed, before the vehicle is released, unless we agree otherwise in writing.`
	},
	{
		h: "Appointments and access",
		p: `Work is appointment-based at the studio, ${BUSINESS.addressLine}. Hours are ${BUSINESS.hoursSummary}. Please remove valuables, medications, and personal items before drop-off. We are not responsible for items left in the vehicle.`
	},
	{
		h: "Results",
		p: "Detailing improves appearance. It does not repaint a car, repair collision damage, or guarantee that every stain, odor, scratch, or swirl will disappear. Paint correction is limited by clear-coat thickness. Ceramic coating is protection after prep, not a shield against rock chips or neglect. We will say so before the work starts when a result is uncertain."
	},
	{
		h: "Cancellations",
		p: "If you cancel or miss the appointment, the 20% deposit is not refunded. If we must cancel and cannot offer a reasonable new time, we return the deposit. See the Refund Policy for how balances and unfinished work are handled."
	},
	{
		h: "Contact",
		p: `Questions about these terms: ${BUSINESS.email} or ${BUSINESS.phoneDisplay}. ${BUSINESS.websiteDisplay}.`
	}
];
function TermsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Breadcrumbs, {
			items: crumbsFor("/terms"),
			className: "mb-6"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Legal" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "max-w-3xl font-display text-4xl md:text-5xl",
			children: "Terms & Conditions"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-4 max-w-2xl text-muted",
			children: "Plain-language terms for booking with a San Antonio based detailing studio. This is not a substitute for advice from your own attorney."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-12 grid max-w-3xl gap-10 text-sm leading-relaxed text-muted",
			children: [sections.map((section) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-2xl text-fg",
				children: section.h
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3",
				children: section.p
			})] }, section.h)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
				"Also see the",
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/refund-policy",
					className: "font-semibold text-primary",
					children: "Refund Policy"
				}),
				" ",
				"and",
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/privacy",
					className: "font-semibold text-primary",
					children: "Privacy Policy"
				}),
				"."
			] })]
		})
	] }) });
}
//#endregion
export { TermsPage as component };
