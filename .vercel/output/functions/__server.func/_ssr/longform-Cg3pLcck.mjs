import { r as DEPOSIT } from "./site-DZY_i1CI.mjs";
import { i as crumbsFor } from "./utils-C_uf36nf.mjs";
import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as CtaBand } from "./cta-band-CNFBuu1u.mjs";
import { t as FaqList } from "./faq-list-CEGhfg3p.mjs";
import { t as PageHero } from "./page-hero-CcLBiEVK.mjs";
import { n as Section, t as Eyebrow } from "./section-HcuhiqsJ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/longform-Cg3pLcck.js
var import_jsx_runtime = require_jsx_runtime();
function DepositNotice() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
		className: "rounded-3xl border border-primary/35 bg-surface p-6 md:p-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-semibold tracking-[0.18em] text-primary uppercase",
				children: "Secure your slot"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-2 font-display text-2xl",
				children: DEPOSIT.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm leading-relaxed text-muted",
				children: DEPOSIT.blurb
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3 text-sm leading-relaxed text-muted",
				children: [
					"The deposit is calculated from the quoted total for your vehicle — not a flat fee. It holds the appointment on the calendar. It is non-refundable if you cancel or do not show. If we cancel and cannot reschedule, the deposit is returned. Read the",
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
						to: "/terms",
						className: "font-semibold text-primary",
						children: "Terms & Conditions"
					}),
					"."
				]
			})
		]
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
function Longform({ page }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			compact: true,
			eyebrow: page.eyebrow,
			title: page.h1,
			description: page.lede,
			imageSrc: page.image.src,
			imageAlt: page.image.alt,
			crumbs: crumbsFor(page.path, page.h1)
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-12 lg:grid-cols-[minmax(0,1fr)_18rem]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "max-w-3xl",
				children: [
					page.published ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mb-8 text-sm text-muted",
						children: [
							"Published",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("time", {
								dateTime: page.published,
								children: (/* @__PURE__ */ new Date(`${page.published}T12:00:00`)).toLocaleDateString("en-US", {
									month: "long",
									day: "numeric",
									year: "numeric"
								})
							})
						]
					}) : null,
					page.compare ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "overflow-x-auto rounded-3xl border border-border",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
							className: "w-full min-w-[36rem] text-left text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("caption", {
									className: "border-b border-border px-4 py-3 text-left text-xs font-semibold tracking-[0.16em] text-primary uppercase",
									children: page.compare.caption
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
									className: "bg-surface text-fg",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: page.compare.headers.map((header) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-4 py-3 font-semibold",
										children: header
									}, header)) })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: page.compare.rows.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", {
									className: "border-t border-border",
									children: row.map((cell) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-4 py-3 align-top text-muted",
										children: cell
									}, cell))
								}, row[0])) })
							]
						})
					}) : null,
					page.sections.map((section) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: page.compare ? "mt-12" : "mt-12 first:mt-0",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-2xl md:text-3xl",
								children: section.heading
							}),
							section.paragraphs.map((paragraph) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-muted leading-relaxed",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RichText, { text: paragraph })
							}, paragraph.slice(0, 48))),
							section.bullets ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-4 grid gap-2 text-sm text-muted",
								children: section.bullets.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
									className: "rounded-2xl border border-border bg-surface px-4 py-3",
									children: item
								}, item))
							}) : null
						]
					}, section.heading)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-12",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DepositNotice, {})
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "lg:pt-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-semibold tracking-[0.18em] text-muted uppercase",
					children: "Related"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 grid gap-2 text-sm",
					children: page.related.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: link.to,
						className: "font-semibold text-primary",
						children: link.label
					}) }, link.to))
				})]
			})]
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			tone: "surface",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Questions" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl",
					children: "Frequently asked questions"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 max-w-3xl",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaqList, { items: page.faqs })
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, {})
	] });
}
//#endregion
export { Longform as t };
