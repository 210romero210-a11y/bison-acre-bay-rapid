import { i as FAQS } from "./site-DvUmtfM3.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { _ as require_jsx_runtime, a as Trigger2, i as Root2, n as Header, r as Item, t as Content2 } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { p as ChevronDown } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/faq-list-BIeu-prR.js
var import_jsx_runtime = require_jsx_runtime();
var Accordion = Root2;
function AccordionItem({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
		className: cn("border-b border-border", className),
		...props
	});
}
function AccordionTrigger({ className, children, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {
		className: "flex",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Trigger2, {
			className: cn("flex flex-1 items-center justify-between gap-4 py-5 text-left text-base font-medium text-fg transition-colors hover:text-primary [&[data-state=open]>svg]:rotate-180", className),
			...props,
			children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "size-5 shrink-0 text-muted transition-transform duration-200" })]
		})
	});
}
function AccordionContent({ className, children, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
		className: "overflow-hidden text-sm text-muted data-[state=closed]:animate-[accordion-up_150ms_ease-out] data-[state=open]:animate-[accordion-down_200ms_ease-out]",
		...props,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: cn("pb-5 leading-relaxed", className),
			children
		})
	});
}
function RichText({ text }) {
	const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: parts.map((part, index) => {
		const match = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
		if (!match) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: part }, index);
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: match[2],
			className: "font-semibold text-primary",
			children: match[1]
		}, index);
	}) });
}
function FaqList({ items = FAQS }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Accordion, {
		type: "single",
		collapsible: true,
		className: "w-full",
		children: items.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
			value: `item-${index}`,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, { children: item.q }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RichText, { text: item.a }) })]
		}, item.q))
	});
}
//#endregion
export { RichText as n, FaqList as t };
