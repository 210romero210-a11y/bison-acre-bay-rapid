import { i as __toESM } from "../_runtime.mjs";
import { a as FOOTER_AREAS, d as LEGAL_NAV, f as NAV, g as SERVICE_NAV, i as FAQS$3, l as IMAGES, n as BUSINESS, s as HEADER_NAV, u as JUNIOR_ACHIEVEMENT } from "./site-C-sVfkRh.mjs";
import { a as faqJsonLd, c as websiteJsonLd, n as absoluteUrl, o as pageHead, r as contentHead, s as siteGraphJsonLd, t as cn } from "./utils-C_uf36nf.mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { _ as require_jsx_runtime, m as Slot, v as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { G as redirect, _ as createFileRoute, b as useRouter, d as Scripts, f as HeadContent, g as lazyRouteComponent, h as Outlet, m as createRouter, v as createRootRoute, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Phone, c as Mail, d as Clock, g as CalendarCheck, n as TriangleAlert, o as Menu, s as MapPin, t as X } from "../_libs/lucide-react.mjs";
import { a as union, i as string, n as number, r as object, t as literal } from "../_libs/zod.mjs";
import { a as DialogPortal, i as DialogOverlay, n as DialogClose, o as DialogTitle, r as DialogContent, s as DialogTrigger, t as Dialog } from "../_libs/@radix-ui/react-dialog+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-DH4iJJ57.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var FALLBACK_MESSAGE = "An unexpected error occurred. Try reloading the page.";
function errorMessage(error) {
	if (error instanceof Error && error.message) return error.message;
	if (typeof error === "string" && error) return error;
	return FALLBACK_MESSAGE;
}
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-3 px-6 text-center bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-red-500",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-10",
					strokeWidth: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-lg font-semibold",
				children: "Something went wrong"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm break-words text-zinc-500 dark:text-zinc-400",
				children: errorMessage(error)
			})
		]
	});
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
var CONNECTOR_TOKEN_READY_EVENT = "grok:connector-token-ready";
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
var ConnectorTokenReadySchema = EnvelopeSchema.extend({ type: literal("connector-token-ready") });
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Origin of the Grok embedder framing this page, or null when the page runs
* top-level (download/export, local `npm run dev`, deployed sites) or under a
* non-Grok parent. Client-only; null during SSR.
*/
function resolveCurrentEmbedderOrigin() {
	if (typeof window === "undefined") return null;
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	return resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	const parentOrigin = resolveCurrentEmbedderOrigin();
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onHello = (data) => {
		if (!HelloSchema.safeParse(data).success) return;
		announce();
	};
	const onNavigate = (data) => {
		const parsed = NavigateSchema.safeParse(data);
		if (!parsed.success) return;
		navigate(parsed.data.path);
		queueMicrotask(reportLocation);
	};
	const onHistory = (data) => {
		const parsed = HistorySchema.safeParse(data);
		if (!parsed.success) return;
		if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
		window.history.go(parsed.data.delta);
	};
	const onConnectorTokenReady = (data) => {
		if (!ConnectorTokenReadySchema.safeParse(data).success) return;
		window.dispatchEvent(new Event(CONNECTOR_TOKEN_READY_EVENT));
	};
	const hostMessageHandlers = /* @__PURE__ */ new Map([
		["hello", onHello],
		["navigate", onNavigate],
		["history", onHistory],
		["connector-token-ready", onConnectorTokenReady]
	]);
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		hostMessageHandlers.get(envelope.data.type)?.(event.data);
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-semibold tracking-tight transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-fg hover:bg-primary/90",
			outline: "border border-border bg-transparent text-fg hover:border-primary hover:text-primary",
			ghost: "text-fg hover:bg-surface-2",
			accent: "bg-accent text-accent-fg hover:bg-accent/90",
			surface: "bg-surface text-fg border border-border hover:bg-surface-2"
		},
		size: {
			default: "h-11 px-5",
			sm: "h-9 px-3 text-xs",
			lg: "h-12 px-6 text-base",
			xl: "h-14 px-7 text-base",
			icon: "size-11"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
function Button({ className, variant, size, asChild = false, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		...props
	});
}
function Logo({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/",
		className: cn("group flex min-w-0 items-center gap-3 text-fg", className),
		"aria-label": "Southern Auto Detailers home",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: "/logo.png",
			alt: "Southern Auto Detailers logo — dual-action polisher over the state of Texas",
			width: 44,
			height: 44,
			className: "size-10 shrink-0 rounded-md object-cover ring-1 ring-primary/40 md:size-11"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "flex min-w-0 flex-col leading-none",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-display text-[0.68rem] font-semibold tracking-[0.22em] text-primary",
				children: "SOUTHERN"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-display text-sm font-semibold tracking-tight",
				children: "Auto Detailers"
			})]
		})]
	});
}
function FooterLabel({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-[0.68rem] font-semibold tracking-[0.2em] text-primary uppercase",
		children
	});
}
function FooterLink({ to, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to,
		className: "text-sm text-fg/85 transition-colors hover:text-primary",
		children
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "border-t border-border bg-surface",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4 py-14 md:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-8 border-b border-border pb-10 md:flex-row md:items-end md:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-5 text-sm leading-relaxed text-muted",
							children: [
								"Private, appointment-only detailing studio in northeast San Antonio. Owner",
								" ",
								BUSINESS.founder,
								", an Alamo Heights graduate, works one vehicle at a time."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-3 text-sm text-muted",
							children: [
								"10% of every sale supports",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: JUNIOR_ACHIEVEMENT.url,
									className: "font-medium text-fg underline-offset-4 hover:text-primary hover:underline",
									target: "_blank",
									rel: "noreferrer",
									children: JUNIOR_ACHIEVEMENT.name
								}),
								"."
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					size: "lg",
					className: "w-full shrink-0 md:w-auto",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: BUSINESS.phoneTel,
						children: ["Call ", BUSINESS.phoneDisplay]
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-10 pt-10 sm:grid-cols-2 lg:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FooterLabel, { children: "Studio" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("address", {
							className: "mt-4 space-y-2 text-sm not-italic text-fg/85",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: BUSINESS.mapsUrl,
									className: "block leading-relaxed hover:text-primary",
									target: "_blank",
									rel: "noreferrer",
									children: [
										BUSINESS.street,
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										BUSINESS.city,
										", ",
										BUSINESS.region,
										" ",
										BUSINESS.postalCode
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: BUSINESS.emailMailto,
									className: "block hover:text-primary",
									children: BUSINESS.email
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: BUSINESS.phoneTel,
									className: "block hover:text-primary",
									children: BUSINESS.phoneDisplay
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-4 text-sm leading-relaxed text-muted",
							children: [
								"Tuesday–Sunday",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"7:00 AM – 11:00 PM",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"Monday closed"
							]
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						"aria-label": "Services",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FooterLabel, { children: "Services" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-4 grid gap-2.5",
							children: SERVICE_NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FooterLink, {
								to: item.to,
								children: item.label
							}) }, item.to))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						"aria-label": "Service areas",
						className: "sm:col-span-2 lg:col-span-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FooterLabel, { children: "Service areas" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-4 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-1",
							children: FOOTER_AREAS.map((area) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FooterLink, {
								to: area.to,
								children: area.label
							}) }, area.to))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						"aria-label": "Company",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FooterLabel, { children: "Company" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-4 grid gap-2.5",
								children: NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FooterLink, {
									to: item.to,
									children: item.label
								}) }, item.to))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: BUSINESS.googleBusinessUrl,
								className: "mt-4 inline-block text-sm text-muted hover:text-primary",
								rel: "noopener noreferrer",
								children: "Southern Auto Detailers on Google"
							})
						]
					})
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-border",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-6xl flex-col gap-3 px-4 py-5 text-xs text-muted md:flex-row md:items-center md:justify-between md:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" ",
					BUSINESS.name,
					". All rights reserved."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					"aria-label": "Legal",
					className: "flex flex-wrap gap-x-4 gap-y-2",
					children: LEGAL_NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: item.to,
						className: "hover:text-primary",
						children: item.label
					}, item.to))
				})]
			})
		})]
	});
}
var linkClass = "text-sm font-medium text-muted transition-colors hover:text-fg";
function Header() {
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-40 border-b border-border bg-bg/92 backdrop-blur-md",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "hidden border-b border-border bg-surface md:block",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-6 gap-y-1 px-4 py-2 text-xs text-muted md:px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "inline-flex items-center gap-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "size-3.5 text-primary" }), BUSINESS.hoursSummary]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: BUSINESS.mapsUrl,
						className: "inline-flex items-center gap-1.5 hover:text-fg",
						target: "_blank",
						rel: "noreferrer",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-3.5 text-primary" }), BUSINESS.addressLine]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: BUSINESS.emailMailto,
						className: "inline-flex items-center gap-1.5 hover:text-fg",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "size-3.5 text-primary" }), BUSINESS.email]
					})
				]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 md:h-[4.5rem] md:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-3 xl:gap-5 lg:flex",
					"aria-label": "Primary",
					children: HEADER_NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: item.to,
						className: linkClass,
						activeProps: { className: "text-primary" },
						children: item.label
					}, item.to))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "sm",
							className: "hidden sm:inline-flex",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: BUSINESS.phoneTel,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {}), BUSINESS.phoneDisplay]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "sm",
							variant: "outline",
							className: "hidden xl:inline-flex",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/contact",
								children: "Request a Detail"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "icon",
							className: "sm:hidden",
							"aria-label": `Call ${BUSINESS.phoneDisplay}`,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: BUSINESS.phoneTel,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {})
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dialog, {
							open,
							onOpenChange: setOpen,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTrigger, {
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "surface",
									size: "icon",
									className: "lg:hidden",
									"aria-label": "Open menu",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {})
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, { className: "fixed inset-0 z-50 bg-bg/80" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
								className: "fixed inset-y-0 right-0 z-50 flex w-[min(100%,22rem)] flex-col bg-surface p-6 shadow-card",
								"aria-describedby": void 0,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mb-8 flex items-center justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
											className: "font-display text-lg",
											children: "Menu"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogClose, {
											asChild: true,
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
												variant: "ghost",
												size: "icon",
												"aria-label": "Close menu",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {})
											})
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
										className: "flex flex-col gap-1",
										"aria-label": "Mobile",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
												to: "/",
												className: cn(linkClass, "py-3 text-base"),
												onClick: () => setOpen(false),
												children: "Home"
											}),
											HEADER_NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
												to: item.to,
												className: cn(linkClass, "py-3 text-base"),
												onClick: () => setOpen(false),
												children: item.label
											}, item.to)),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-4 text-xs font-semibold tracking-[0.18em] text-muted uppercase",
												children: "Services"
											}),
											SERVICE_NAV.filter((item) => item.to !== "/ceramic-coating" && item.to !== "/paint-correction").map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
												to: item.to,
												className: cn(linkClass, "py-3 text-base"),
												onClick: () => setOpen(false),
												children: item.label
											}, item.to))
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-auto grid gap-2 pt-8",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-xs text-muted",
												children: BUSINESS.addressLine
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-xs text-muted",
												children: BUSINESS.hoursSummary
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
												asChild: true,
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
													href: BUSINESS.phoneTel,
													onClick: () => setOpen(false),
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {}),
														" Call ",
														BUSINESS.phoneDisplay
													]
												})
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
												asChild: true,
												variant: "outline",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
													to: "/contact",
													onClick: () => setOpen(false),
													children: "Book a Detail"
												})
											})
										]
									})
								]
							})] })]
						})
					]
				})
			]
		})]
	});
}
function MobileCta() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-x-0 bottom-0 z-40 border-t border-border bg-bg/95 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-md lg:hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-lg grid-cols-2 gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: BUSINESS.phoneTel,
				className: "inline-flex h-12 items-center justify-center gap-2 rounded-md bg-primary text-sm font-semibold text-primary-fg",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4" }), "Call Now"]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/contact",
				className: "inline-flex h-12 items-center justify-center gap-2 rounded-md border border-border bg-surface text-sm font-semibold text-fg",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarCheck, { className: "size-4" }), "Book a Detail"]
			})]
		})
	});
}
var styles_default = "/assets/styles-BQaeDIW7.css";
var APP_NAME = "Southern Auto Detailers";
var Route$80 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: APP_NAME },
			{
				name: "theme-color",
				content: "#0B1214"
			},
			{
				name: "description",
				content: "Southern Auto Detailers provides professional interior and exterior auto detailing in San Antonio, TX. Call (210) 201-4847 to book your vehicle detail today."
			}
		],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify(siteGraphJsonLd())
		}],
		links: [
			{
				rel: "icon",
				type: "image/png",
				href: "/favicon.png"
			},
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "manifest",
				href: "/__grok/manifest.webmanifest"
			},
			{
				rel: "ard",
				href: "/.well-known/ard.json"
			},
			{
				rel: "ai-catalog",
				href: "/.well-known/ai-catalog.json"
			},
			{
				rel: "apple-touch-icon",
				href: "/__grok/icon-180.png"
			},
			{
				rel: "preload",
				href: "/fonts/manrope-latin.woff2",
				as: "font",
				type: "font/woff2",
				crossOrigin: "anonymous"
			},
			{
				rel: "preload",
				href: "/fonts/sora-latin.woff2",
				as: "font",
				type: "font/woff2",
				crossOrigin: "anonymous"
			}
		]
	}),
	component: RootDocument,
	notFoundComponent: NotFound
});
function RootDocument() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		className: "dark antialiased",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("head", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", { dangerouslySetInnerHTML: { __html: `if(window.trustedTypes&&!trustedTypes.defaultPolicy){trustedTypes.createPolicy("default",{createHTML:function(s){return s},createScript:function(s){return s},createScriptURL:function(s){return s}})}` } }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", { dangerouslySetInnerHTML: { __html: `window.addEventListener("load",function(){(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({"gtm.start":new Date().getTime(),event:"gtm.js"});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!="dataLayer"?"&l="+l:"";j.async=true;j.src="https://www.googletagmanager.com/gtm.js?id="+i+dl;f.parentNode.insertBefore(j,f);})(window,document,"script","dataLayer","GTM-W4KMWPJQ");var a=document.createElement("script");a.async=true;a.crossOrigin="anonymous";a.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8060663684743298";document.head.appendChild(a);});` } }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {})
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", {
			className: "min-h-svh bg-bg font-sans text-fg",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("noscript", { dangerouslySetInnerHTML: { __html: "<iframe src=\"https://www.googletagmanager.com/ns.html?id=GTM-W4KMWPJQ\" height=\"0\" width=\"0\" style=\"display:none;visibility:hidden\"></iframe>" } }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AuthProvider, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#main",
						className: "sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-fg",
						children: "Skip to content"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						id: "main",
						className: "pb-24 lg:pb-0",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileCta, {})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
			]
		})]
	});
}
function NotFound() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto flex min-h-[70svh] max-w-2xl flex-col items-center justify-center px-4 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-semibold tracking-[0.2em] text-primary uppercase",
				children: "404"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 font-display text-4xl",
				children: "Page not found"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-muted",
				children: "That page does not exist. Head home or call (210) 201-4847 to book a detail in San Antonio, TX."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/",
				className: "mt-8 text-sm font-semibold text-primary",
				children: "Back to home"
			})
		]
	});
}
var $$splitComponentImporter$79 = () => import("./routes-DIcNQV4Y.mjs");
var Route$79 = createFileRoute("/")({
	head: () => pageHead("Auto Detailing San Antonio TX | Southern Auto Detailers", "Southern Auto Detailers provides professional in-shop auto detailing in San Antonio, Texas.", "/", [websiteJsonLd(), faqJsonLd("/", FAQS$3)], "Auto Detailing San Antonio TX | Southern Auto Detailers", IMAGES.hero),
	component: lazyRouteComponent($$splitComponentImporter$79, "component")
});
var FAQS$2 = [
	{
		q: "Who does the work?",
		a: "Robert Romero Jr., an IDA-certified detailer from Alamo Heights with auto body and paint experience. One vehicle at a time."
	},
	{
		q: "Where is the studio?",
		a: "11692 Bricken Circle, San Antonio, TX 78233. Tuesday through Sunday, 7:00 AM to 11:00 PM. Monday closed."
	},
	{
		q: "What happens to 10% of the sale?",
		a: "It goes to Junior Achievement of South Texas. That is not a discount off your quote."
	}
];
var $$splitComponentImporter$78 = () => import("./about-E-jBqo-F.mjs");
var Route$78 = createFileRoute("/about")({
	head: () => pageHead("About Southern Auto Detailers | Robert Romero Jr. | San Antonio, TX", "Learn about Southern Auto Detailers, an in-shop auto detailing business in San Antonio, Texas.", "/about", [faqJsonLd("/about", FAQS$2)], "A private detailing studio with a community mission", IMAGES.coupe),
	component: lazyRouteComponent($$splitComponentImporter$78, "component")
});
var $$splitComponentImporter$77 = () => import("./blog-GHsbigBI.mjs");
var Route$77 = createFileRoute("/blog")({ component: lazyRouteComponent($$splitComponentImporter$77, "component") });
var $$splitComponentImporter$76 = () => import("./ceramic-coating-iNKFUIuv.mjs");
var Route$76 = createFileRoute("/ceramic-coating")({ component: lazyRouteComponent($$splitComponentImporter$76, "component") });
var $$splitComponentImporter$75 = () => import("./ceramic-coatings-BV2GzgzC.mjs");
var Route$75 = createFileRoute("/ceramic-coatings")({
	beforeLoad: () => {
		throw redirect({
			href: "/ceramic-coating",
			replace: true
		});
	},
	component: lazyRouteComponent($$splitComponentImporter$75, "component")
});
var $$splitComponentImporter$74 = () => import("./contact-BXdlfxHe.mjs");
var Route$74 = createFileRoute("/contact")({
	head: () => pageHead("Contact Southern Auto Detailers | San Antonio, TX 78233", "Schedule in-shop auto detailing at Southern Auto Detailers in San Antonio, Texas.", "/contact", [], "Book auto detailing in San Antonio"),
	component: lazyRouteComponent($$splitComponentImporter$74, "component")
});
var $$splitComponentImporter$73 = () => import("./converse-DnxXRjTP.mjs");
var Route$73 = createFileRoute("/converse")({
	loader: () => import("./pages-BgENyV9Z.mjs").then((mod) => mod.pageByPath("/converse")),
	head: ({ loaderData }) => contentHead(loaderData),
	component: lazyRouteComponent($$splitComponentImporter$73, "component")
});
var $$splitComponentImporter$72 = () => import("./exterior-detailing-LUDIzK_0.mjs");
var Route$72 = createFileRoute("/exterior-detailing")({
	loader: () => import("./pages-BgENyV9Z.mjs").then((mod) => mod.pageByPath("/exterior-detailing")),
	head: ({ loaderData }) => contentHead(loaderData),
	component: lazyRouteComponent($$splitComponentImporter$72, "component")
});
var $$splitComponentImporter$71 = () => import("./fort-sam-houston-Byvc7ncm.mjs");
var Route$71 = createFileRoute("/fort-sam-houston")({
	loader: () => import("./pages-BgENyV9Z.mjs").then((mod) => mod.pageByPath("/fort-sam-houston")),
	head: ({ loaderData }) => contentHead(loaderData),
	component: lazyRouteComponent($$splitComponentImporter$71, "component")
});
var $$splitComponentImporter$70 = () => import("./full-detailing-Dc295EIi.mjs");
var Route$70 = createFileRoute("/full-detailing")({
	loader: () => import("./pages-BgENyV9Z.mjs").then((mod) => mod.pageByPath("/full-detailing")),
	head: ({ loaderData }) => contentHead(loaderData),
	component: lazyRouteComponent($$splitComponentImporter$70, "component")
});
var $$splitComponentImporter$69 = () => import("./interior-detailing-DRP2cJrh.mjs");
var Route$69 = createFileRoute("/interior-detailing")({
	loader: () => import("./pages-BgENyV9Z.mjs").then((mod) => mod.pageByPath("/interior-detailing")),
	head: ({ loaderData }) => contentHead(loaderData),
	component: lazyRouteComponent($$splitComponentImporter$69, "component")
});
var $$splitComponentImporter$68 = () => import("./live-oak-BjBtudOA.mjs");
var Route$68 = createFileRoute("/live-oak")({
	loader: () => import("./pages-BgENyV9Z.mjs").then((mod) => mod.pageByPath("/live-oak")),
	head: ({ loaderData }) => contentHead(loaderData),
	component: lazyRouteComponent($$splitComponentImporter$68, "component")
});
var $$splitComponentImporter$67 = () => import("./oak-meadow-i9LZjJOO.mjs");
var Route$67 = createFileRoute("/oak-meadow")({
	loader: () => import("./pages-BgENyV9Z.mjs").then((mod) => mod.pageByPath("/oak-meadow")),
	head: ({ loaderData }) => contentHead(loaderData),
	component: lazyRouteComponent($$splitComponentImporter$67, "component")
});
var $$splitComponentImporter$66 = () => import("./paint-correction-DhrZTioD.mjs");
var Route$66 = createFileRoute("/paint-correction")({
	loader: () => import("./pages-BgENyV9Z.mjs").then((mod) => mod.pageByPath("/paint-correction")),
	head: ({ loaderData }) => contentHead(loaderData),
	component: lazyRouteComponent($$splitComponentImporter$66, "component")
});
var $$splitComponentImporter$65 = () => import("./pricing-CFW1YOhs.mjs");
var Route$65 = createFileRoute("/pricing")({
	loader: () => import("./pages-BgENyV9Z.mjs").then((mod) => mod.pageByPath("/pricing")),
	head: ({ loaderData }) => contentHead(loaderData),
	component: lazyRouteComponent($$splitComponentImporter$65, "component")
});
var $$splitComponentImporter$64 = () => import("./privacy-G5iVKGgn.mjs");
var Route$64 = createFileRoute("/privacy")({
	head: () => pageHead("Privacy Policy | Southern Auto Detailers", "Privacy policy for Southern Auto Detailers in San Antonio, TX. How we handle appointment requests, contact details, and studio privacy.", "/privacy", [], "Privacy Policy"),
	component: lazyRouteComponent($$splitComponentImporter$64, "component")
});
var $$splitComponentImporter$63 = () => import("./refund-policy-CtD2diaJ.mjs");
var Route$63 = createFileRoute("/refund-policy")({
	head: () => pageHead("Refund Policy | Southern Auto Detailers", "Refund policy for Southern Auto Detailers. A 20% non-refundable deposit of the quoted total is required to secure a booking slot in San Antonio, TX.", "/refund-policy", [], "Refund Policy"),
	component: lazyRouteComponent($$splitComponentImporter$63, "component")
});
var $$splitComponentImporter$62 = () => import("./rolling-oaks-BsikXdvW.mjs");
var Route$62 = createFileRoute("/rolling-oaks")({
	loader: () => import("./pages-BgENyV9Z.mjs").then((mod) => mod.pageByPath("/rolling-oaks")),
	head: ({ loaderData }) => contentHead(loaderData),
	component: lazyRouteComponent($$splitComponentImporter$62, "component")
});
var $$splitComponentImporter$61 = () => import("./royal-ridge-D9peo1lG.mjs");
var Route$61 = createFileRoute("/royal-ridge")({
	loader: () => import("./pages-BgENyV9Z.mjs").then((mod) => mod.pageByPath("/royal-ridge")),
	head: ({ loaderData }) => contentHead(loaderData),
	component: lazyRouteComponent($$splitComponentImporter$61, "component")
});
var $$splitComponentImporter$60 = () => import("./san-antonio-78233-BjnsI7BG.mjs");
var Route$60 = createFileRoute("/san-antonio-78233")({
	loader: () => import("./pages-BgENyV9Z.mjs").then((mod) => mod.pageByPath("/san-antonio-78233")),
	head: ({ loaderData }) => contentHead(loaderData),
	component: lazyRouteComponent($$splitComponentImporter$60, "component")
});
var $$splitComponentImporter$59 = () => import("./schertz-DivArBAh.mjs");
var Route$59 = createFileRoute("/schertz")({
	loader: () => import("./pages-BgENyV9Z.mjs").then((mod) => mod.pageByPath("/schertz")),
	head: ({ loaderData }) => contentHead(loaderData),
	component: lazyRouteComponent($$splitComponentImporter$59, "component")
});
var FAQS$1 = [
	{
		q: "Which northeast places do you actually name?",
		a: "78233 is home. Royal Ridge is in 78233 and 78239. Rolling Oaks Mall is at Loop 1604 and Nacogdoches in 78247. Fort Sam Houston is 78234, and we are not on base. Live Oak, Universal City, Converse, Windcrest, and Schertz bring the vehicle to the studio."
	},
	{
		q: "Is Oak Meadow part of 78233?",
		a: "No. Oak Meadow is north-central San Antonio. You can still book the northeast studio if the drive works. We do not pretend the shop is in that neighborhood."
	},
	{
		q: "Do you come to these neighborhoods?",
		a: "No. Every appointment is at 11692 Bricken Circle, San Antonio, TX 78233."
	}
];
var $$splitComponentImporter$58 = () => import("./service-areas-CLQMOS82.mjs");
var Route$58 = createFileRoute("/service-areas")({
	head: () => pageHead("Auto Detailing Near San Antonio TX | 78233, Royal Ridge, Fort Sam", "Customers from northeast San Antonio and nearby cities visit the in-shop studio at 11692 Bricken Circle.", "/service-areas", [faqJsonLd("/service-areas", FAQS$1)], "Auto detailing near San Antonio, TX"),
	component: lazyRouteComponent($$splitComponentImporter$58, "component")
});
var FAQS = [
	{
		q: "Which service page should I open?",
		a: "Interior detailing for the cabin, exterior detailing for the paint and wheels, full detailing for both, paint correction for swirls, and ceramic coating only after the paint is ready. Pricing explains what changes the quote."
	},
	{
		q: "Do you publish package prices?",
		a: "No. Condition changes the job. Call (210) 201-4847 with the vehicle and you get a quote. A 20% non-refundable deposit of that total holds the slot."
	},
	{
		q: "Where is the work done?",
		a: "At the studio, 11692 Bricken Circle, San Antonio, TX 78233."
	}
];
var $$splitComponentImporter$57 = () => import("./services-DoO_LKc_.mjs");
var Route$57 = createFileRoute("/services")({
	head: () => pageHead("Auto Detailing Services San Antonio TX | Interior, Exterior, Full Detail", "Browse in-shop auto detailing, ceramic coating, paint correction, interior detailing, exterior detailing, and full detailing services.", "/services", [faqJsonLd("/services", FAQS)], "Auto Detailing Services in San Antonio, TX", IMAGES.truck),
	component: lazyRouteComponent($$splitComponentImporter$57, "component")
});
var $$splitComponentImporter$56 = () => import("./terms-hM5zoRY1.mjs");
var Route$56 = createFileRoute("/terms")({
	head: () => pageHead("Terms & Conditions | Southern Auto Detailers", "Terms for booking auto detailing with Southern Auto Detailers in San Antonio, TX, including the 20% non-refundable deposit required to secure a slot.", "/terms", [], "Terms & Conditions"),
	component: lazyRouteComponent($$splitComponentImporter$56, "component")
});
var $$splitComponentImporter$55 = () => import("./universal-city-B1MP_t-g.mjs");
var Route$55 = createFileRoute("/universal-city")({
	loader: () => import("./pages-BgENyV9Z.mjs").then((mod) => mod.pageByPath("/universal-city")),
	head: ({ loaderData }) => contentHead(loaderData),
	component: lazyRouteComponent($$splitComponentImporter$55, "component")
});
var $$splitComponentImporter$54 = () => import("./windcrest-DoOTrdd5.mjs");
var Route$54 = createFileRoute("/windcrest")({
	loader: () => import("./pages-BgENyV9Z.mjs").then((mod) => mod.pageByPath("/windcrest")),
	head: ({ loaderData }) => contentHead(loaderData),
	component: lazyRouteComponent($$splitComponentImporter$54, "component")
});
var $$splitComponentImporter$53 = () => import("./blog.index-BxG6qoC3.mjs");
var Route$53 = createFileRoute("/blog/")({
	loader: () => import("./pages-BgENyV9Z.mjs").then((mod) => mod.blogPosts),
	head: ({ loaderData }) => pageHead("Auto Detailing Blog | San Antonio TX", "Guides from Southern Auto Detailers on ceramic coating, paint correction, and in-shop detailing in San Antonio.", "/blog", [{
		"@context": "https://schema.org",
		"@type": "ItemList",
		name: "Southern Auto Detailers articles",
		itemListElement: loaderData.map((post, index) => ({
			"@type": "ListItem",
			position: index + 1,
			name: post.h1,
			url: absoluteUrl(post.path)
		}))
	}], "Detailing notes for San Antonio"),
	component: lazyRouteComponent($$splitComponentImporter$53, "component")
});
var $$splitComponentImporter$52 = () => import("./blog.auto-detailing-san-antonio-tx-guide-B07nE5lu.mjs");
var Route$52 = createFileRoute("/blog/auto-detailing-san-antonio-tx-guide")({
	loader: () => import("./pages-BgENyV9Z.mjs").then((mod) => mod.pageByPath("/blog/auto-detailing-san-antonio-tx-guide")),
	head: ({ loaderData }) => contentHead(loaderData),
	component: lazyRouteComponent($$splitComponentImporter$52, "component")
});
var $$splitComponentImporter$51 = () => import("./blog.best-auto-detailer-northeast-san-antonio-DLVLgji4.mjs");
var Route$51 = createFileRoute("/blog/best-auto-detailer-northeast-san-antonio")({
	loader: () => import("./pages-BgENyV9Z.mjs").then((mod) => mod.pageByPath("/blog/best-auto-detailer-northeast-san-antonio")),
	head: ({ loaderData }) => contentHead(loaderData),
	component: lazyRouteComponent($$splitComponentImporter$51, "component")
});
var $$splitComponentImporter$50 = () => import("./blog.bird-droppings-on-car-paint-B2-Xj-z_.mjs");
var Route$50 = createFileRoute("/blog/bird-droppings-on-car-paint")({
	loader: () => import("./pages-BgENyV9Z.mjs").then((mod) => mod.pageByPath("/blog/bird-droppings-on-car-paint")),
	head: ({ loaderData }) => contentHead(loaderData),
	component: lazyRouteComponent($$splitComponentImporter$50, "component")
});
var $$splitComponentImporter$49 = () => import("./blog.bugs-and-tar-on-paint-Pwg5_Auh.mjs");
var Route$49 = createFileRoute("/blog/bugs-and-tar-on-paint")({
	loader: () => import("./pages-BgENyV9Z.mjs").then((mod) => mod.pageByPath("/blog/bugs-and-tar-on-paint")),
	head: ({ loaderData }) => contentHead(loaderData),
	component: lazyRouteComponent($$splitComponentImporter$49, "component")
});
var $$splitComponentImporter$48 = () => import("./blog.car-screens-buttons-and-glossy-trim-0NpK_KhB.mjs");
var Route$48 = createFileRoute("/blog/car-screens-buttons-and-glossy-trim")({
	loader: () => import("./pages-BgENyV9Z.mjs").then((mod) => mod.pageByPath("/blog/car-screens-buttons-and-glossy-trim")),
	head: ({ loaderData }) => contentHead(loaderData),
	component: lazyRouteComponent($$splitComponentImporter$48, "component")
});
var $$splitComponentImporter$47 = () => import("./blog.car-seat-interior-detailing-D0klmzBk.mjs");
var Route$47 = createFileRoute("/blog/car-seat-interior-detailing")({
	loader: () => import("./pages-BgENyV9Z.mjs").then((mod) => mod.pageByPath("/blog/car-seat-interior-detailing")),
	head: ({ loaderData }) => contentHead(loaderData),
	component: lazyRouteComponent($$splitComponentImporter$47, "component")
});
var $$splitComponentImporter$46 = () => import("./blog.ceramic-coating-does-not-hide-swirls-C7vAHX8t.mjs");
var Route$46 = createFileRoute("/blog/ceramic-coating-does-not-hide-swirls")({
	loader: () => import("./pages-BgENyV9Z.mjs").then((mod) => mod.pageByPath("/blog/ceramic-coating-does-not-hide-swirls")),
	head: ({ loaderData }) => contentHead(loaderData),
	component: lazyRouteComponent($$splitComponentImporter$46, "component")
});
var $$splitComponentImporter$45 = () => import("./blog.ceramic-coating-vs-ppf-CTTBV1Kr.mjs");
var Route$45 = createFileRoute("/blog/ceramic-coating-vs-ppf")({
	loader: () => import("./pages-BgENyV9Z.mjs").then((mod) => mod.pageByPath("/blog/ceramic-coating-vs-ppf")),
	head: ({ loaderData }) => contentHead(loaderData),
	component: lazyRouteComponent($$splitComponentImporter$45, "component")
});
var $$splitComponentImporter$44 = () => import("./blog.ceramic-coating-vs-wax-HVj23-rX.mjs");
var Route$44 = createFileRoute("/blog/ceramic-coating-vs-wax")({
	loader: () => import("./pages-BgENyV9Z.mjs").then((mod) => mod.pageByPath("/blog/ceramic-coating-vs-wax")),
	head: ({ loaderData }) => contentHead(loaderData),
	component: lazyRouteComponent($$splitComponentImporter$44, "component")
});
var $$splitComponentImporter$43 = () => import("./blog.ceramic-coating-warranties-explained-DnQyaccT.mjs");
var Route$43 = createFileRoute("/blog/ceramic-coating-warranties-explained")({
	loader: () => import("./pages-BgENyV9Z.mjs").then((mod) => mod.pageByPath("/blog/ceramic-coating-warranties-explained")),
	head: ({ loaderData }) => contentHead(loaderData),
	component: lazyRouteComponent($$splitComponentImporter$43, "component")
});
var $$splitComponentImporter$42 = () => import("./blog.construction-dust-on-paint-CwPAUgJ0.mjs");
var Route$42 = createFileRoute("/blog/construction-dust-on-paint")({
	loader: () => import("./pages-BgENyV9Z.mjs").then((mod) => mod.pageByPath("/blog/construction-dust-on-paint")),
	head: ({ loaderData }) => contentHead(loaderData),
	component: lazyRouteComponent($$splitComponentImporter$42, "component")
});
var $$splitComponentImporter$41 = () => import("./blog.decontamination-before-ceramic-coating-Dc0rKncN.mjs");
var Route$41 = createFileRoute("/blog/decontamination-before-ceramic-coating")({
	loader: () => import("./pages-BgENyV9Z.mjs").then((mod) => mod.pageByPath("/blog/decontamination-before-ceramic-coating")),
	head: ({ loaderData }) => contentHead(loaderData),
	component: lazyRouteComponent($$splitComponentImporter$41, "component")
});
var $$splitComponentImporter$40 = () => import("./blog.detailing-trucks-and-suvs-san-antonio-DsJe-Clz.mjs");
var Route$40 = createFileRoute("/blog/detailing-trucks-and-suvs-san-antonio")({
	loader: () => import("./pages-BgENyV9Z.mjs").then((mod) => mod.pageByPath("/blog/detailing-trucks-and-suvs-san-antonio")),
	head: ({ loaderData }) => contentHead(loaderData),
	component: lazyRouteComponent($$splitComponentImporter$40, "component")
});
var $$splitComponentImporter$39 = () => import("./blog.door-jambs-in-a-detail-CYM0gwYK.mjs");
var Route$39 = createFileRoute("/blog/door-jambs-in-a-detail")({
	loader: () => import("./pages-BgENyV9Z.mjs").then((mod) => mod.pageByPath("/blog/door-jambs-in-a-detail")),
	head: ({ loaderData }) => contentHead(loaderData),
	component: lazyRouteComponent($$splitComponentImporter$39, "component")
});
var $$splitComponentImporter$38 = () => import("./blog.floor-mats-and-carpets-07AA53VZ.mjs");
var Route$38 = createFileRoute("/blog/floor-mats-and-carpets")({
	loader: () => import("./pages-BgENyV9Z.mjs").then((mod) => mod.pageByPath("/blog/floor-mats-and-carpets")),
	head: ({ loaderData }) => contentHead(loaderData),
	component: lazyRouteComponent($$splitComponentImporter$38, "component")
});
var $$splitComponentImporter$37 = () => import("./blog.hard-water-spots-san-antonio-gk-clzuF.mjs");
var Route$37 = createFileRoute("/blog/hard-water-spots-san-antonio")({
	loader: () => import("./pages-BgENyV9Z.mjs").then((mod) => mod.pageByPath("/blog/hard-water-spots-san-antonio")),
	head: ({ loaderData }) => contentHead(loaderData),
	component: lazyRouteComponent($$splitComponentImporter$37, "component")
});
var $$splitComponentImporter$36 = () => import("./blog.hazy-headlights-san-antonio-DW1LqEMK.mjs");
var Route$36 = createFileRoute("/blog/hazy-headlights-san-antonio")({
	loader: () => import("./pages-BgENyV9Z.mjs").then((mod) => mod.pageByPath("/blog/hazy-headlights-san-antonio")),
	head: ({ loaderData }) => contentHead(loaderData),
	component: lazyRouteComponent($$splitComponentImporter$36, "component")
});
var $$splitComponentImporter$35 = () => import("./blog.how-ceramic-coating-works-B6MYZo1P.mjs");
var Route$35 = createFileRoute("/blog/how-ceramic-coating-works")({
	loader: () => import("./pages-BgENyV9Z.mjs").then((mod) => mod.pageByPath("/blog/how-ceramic-coating-works")),
	head: ({ loaderData }) => contentHead(loaderData),
	component: lazyRouteComponent($$splitComponentImporter$35, "component")
});
var $$splitComponentImporter$34 = () => import("./blog.how-long-a-detail-takes-DjqTz4T-.mjs");
var Route$34 = createFileRoute("/blog/how-long-a-detail-takes")({
	loader: () => import("./pages-BgENyV9Z.mjs").then((mod) => mod.pageByPath("/blog/how-long-a-detail-takes")),
	head: ({ loaderData }) => contentHead(loaderData),
	component: lazyRouteComponent($$splitComponentImporter$34, "component")
});
var $$splitComponentImporter$33 = () => import("./blog.how-long-does-ceramic-coating-last-7qBmYbek.mjs");
var Route$33 = createFileRoute("/blog/how-long-does-ceramic-coating-last")({
	loader: () => import("./pages-BgENyV9Z.mjs").then((mod) => mod.pageByPath("/blog/how-long-does-ceramic-coating-last")),
	head: ({ loaderData }) => contentHead(loaderData),
	component: lazyRouteComponent($$splitComponentImporter$33, "component")
});
var $$splitComponentImporter$32 = () => import("./blog.how-long-does-paint-correction-take-C-PlNkby.mjs");
var Route$32 = createFileRoute("/blog/how-long-does-paint-correction-take")({
	loader: () => import("./pages-BgENyV9Z.mjs").then((mod) => mod.pageByPath("/blog/how-long-does-paint-correction-take")),
	head: ({ loaderData }) => contentHead(loaderData),
	component: lazyRouteComponent($$splitComponentImporter$32, "component")
});
var $$splitComponentImporter$31 = () => import("./blog.how-often-to-detail-san-antonio-DzZB5yIc.mjs");
var Route$31 = createFileRoute("/blog/how-often-to-detail-san-antonio")({
	loader: () => import("./pages-BgENyV9Z.mjs").then((mod) => mod.pageByPath("/blog/how-often-to-detail-san-antonio")),
	head: ({ loaderData }) => contentHead(loaderData),
	component: lazyRouteComponent($$splitComponentImporter$31, "component")
});
var $$splitComponentImporter$30 = () => import("./blog.how-to-choose-a-paint-correction-detailer-Dj9FVkY_.mjs");
var Route$30 = createFileRoute("/blog/how-to-choose-a-paint-correction-detailer")({
	loader: () => import("./pages-BgENyV9Z.mjs").then((mod) => mod.pageByPath("/blog/how-to-choose-a-paint-correction-detailer")),
	head: ({ loaderData }) => contentHead(loaderData),
	component: lazyRouteComponent($$splitComponentImporter$30, "component")
});
var $$splitComponentImporter$29 = () => import("./blog.how-to-prepare-for-a-detail-3UhZi9cn.mjs");
var Route$29 = createFileRoute("/blog/how-to-prepare-for-a-detail")({
	loader: () => import("./pages-BgENyV9Z.mjs").then((mod) => mod.pageByPath("/blog/how-to-prepare-for-a-detail")),
	head: ({ loaderData }) => contentHead(loaderData),
	component: lazyRouteComponent($$splitComponentImporter$29, "component")
});
var $$splitComponentImporter$28 = () => import("./blog.how-to-wash-ceramic-coated-car-DPt4hDLp.mjs");
var Route$28 = createFileRoute("/blog/how-to-wash-ceramic-coated-car")({
	loader: () => import("./pages-BgENyV9Z.mjs").then((mod) => mod.pageByPath("/blog/how-to-wash-ceramic-coated-car")),
	head: ({ loaderData }) => contentHead(loaderData),
	component: lazyRouteComponent($$splitComponentImporter$28, "component")
});
var $$splitComponentImporter$27 = () => import("./blog.interior-stain-limits-DhiCCY-O.mjs");
var Route$27 = createFileRoute("/blog/interior-stain-limits")({
	loader: () => import("./pages-BgENyV9Z.mjs").then((mod) => mod.pageByPath("/blog/interior-stain-limits")),
	head: ({ loaderData }) => contentHead(loaderData),
	component: lazyRouteComponent($$splitComponentImporter$27, "component")
});
var $$splitComponentImporter$26 = () => import("./blog.iron-fallout-on-car-paint-CJvWp1Sy.mjs");
var Route$26 = createFileRoute("/blog/iron-fallout-on-car-paint")({
	loader: () => import("./pages-BgENyV9Z.mjs").then((mod) => mod.pageByPath("/blog/iron-fallout-on-car-paint")),
	head: ({ loaderData }) => contentHead(loaderData),
	component: lazyRouteComponent($$splitComponentImporter$26, "component")
});
var $$splitComponentImporter$25 = () => import("./blog.is-ceramic-coating-worth-it-27JwU_La.mjs");
var Route$25 = createFileRoute("/blog/is-ceramic-coating-worth-it")({
	loader: () => import("./pages-BgENyV9Z.mjs").then((mod) => mod.pageByPath("/blog/is-ceramic-coating-worth-it")),
	head: ({ loaderData }) => contentHead(loaderData),
	component: lazyRouteComponent($$splitComponentImporter$25, "component")
});
var $$splitComponentImporter$24 = () => import("./blog.leather-conditioning-san-antonio-DCTGYzlG.mjs");
var Route$24 = createFileRoute("/blog/leather-conditioning-san-antonio")({
	loader: () => import("./pages-BgENyV9Z.mjs").then((mod) => mod.pageByPath("/blog/leather-conditioning-san-antonio")),
	head: ({ loaderData }) => contentHead(loaderData),
	component: lazyRouteComponent($$splitComponentImporter$24, "component")
});
var $$splitComponentImporter$23 = () => import("./blog.new-car-paint-correction-before-ceramic-coating-C4G0U9n1.mjs");
var Route$23 = createFileRoute("/blog/new-car-paint-correction-before-ceramic-coating")({
	loader: () => import("./pages-BgENyV9Z.mjs").then((mod) => mod.pageByPath("/blog/new-car-paint-correction-before-ceramic-coating")),
	head: ({ loaderData }) => contentHead(loaderData),
	component: lazyRouteComponent($$splitComponentImporter$23, "component")
});
var $$splitComponentImporter$22 = () => import("./blog.oak-pollen-san-antonio-paint-bX6OwNTy.mjs");
var Route$22 = createFileRoute("/blog/oak-pollen-san-antonio-paint")({
	loader: () => import("./pages-BgENyV9Z.mjs").then((mod) => mod.pageByPath("/blog/oak-pollen-san-antonio-paint")),
	head: ({ loaderData }) => contentHead(loaderData),
	component: lazyRouteComponent($$splitComponentImporter$22, "component")
});
var $$splitComponentImporter$21 = () => import("./blog.paint-correction-aftercare-D5A1R47R.mjs");
var Route$21 = createFileRoute("/blog/paint-correction-aftercare")({
	loader: () => import("./pages-BgENyV9Z.mjs").then((mod) => mod.pageByPath("/blog/paint-correction-aftercare")),
	head: ({ loaderData }) => contentHead(loaderData),
	component: lazyRouteComponent($$splitComponentImporter$21, "component")
});
var $$splitComponentImporter$20 = () => import("./blog.paint-correction-before-ceramic-coating-NkwRjN_f.mjs");
var Route$20 = createFileRoute("/blog/paint-correction-before-ceramic-coating")({
	loader: () => import("./pages-BgENyV9Z.mjs").then((mod) => mod.pageByPath("/blog/paint-correction-before-ceramic-coating")),
	head: ({ loaderData }) => contentHead(loaderData),
	component: lazyRouteComponent($$splitComponentImporter$20, "component")
});
var $$splitComponentImporter$19 = () => import("./blog.pet-hair-interior-detailing-DTHQTEvB.mjs");
var Route$19 = createFileRoute("/blog/pet-hair-interior-detailing")({
	loader: () => import("./pages-BgENyV9Z.mjs").then((mod) => mod.pageByPath("/blog/pet-hair-interior-detailing")),
	head: ({ loaderData }) => contentHead(loaderData),
	component: lazyRouteComponent($$splitComponentImporter$19, "component")
});
var $$splitComponentImporter$18 = () => import("./blog.polishing-vs-waxing-BNYkXLmu.mjs");
var Route$18 = createFileRoute("/blog/polishing-vs-waxing")({
	loader: () => import("./pages-BgENyV9Z.mjs").then((mod) => mod.pageByPath("/blog/polishing-vs-waxing")),
	head: ({ loaderData }) => contentHead(loaderData),
	component: lazyRouteComponent($$splitComponentImporter$18, "component")
});
var $$splitComponentImporter$17 = () => import("./blog.products-to-avoid-on-ceramic-coating-zRADx6pi.mjs");
var Route$17 = createFileRoute("/blog/products-to-avoid-on-ceramic-coating")({
	loader: () => import("./pages-BgENyV9Z.mjs").then((mod) => mod.pageByPath("/blog/products-to-avoid-on-ceramic-coating")),
	head: ({ loaderData }) => contentHead(loaderData),
	component: lazyRouteComponent($$splitComponentImporter$17, "component")
});
var $$splitComponentImporter$16 = () => import("./blog.questions-before-ceramic-coating-DN2-uu1Y.mjs");
var Route$16 = createFileRoute("/blog/questions-before-ceramic-coating")({
	loader: () => import("./pages-BgENyV9Z.mjs").then((mod) => mod.pageByPath("/blog/questions-before-ceramic-coating")),
	head: ({ loaderData }) => contentHead(loaderData),
	component: lazyRouteComponent($$splitComponentImporter$16, "component")
});
var $$splitComponentImporter$15 = () => import("./blog.sun-damaged-dashboard-Bi6ftAt1.mjs");
var Route$15 = createFileRoute("/blog/sun-damaged-dashboard")({
	loader: () => import("./pages-BgENyV9Z.mjs").then((mod) => mod.pageByPath("/blog/sun-damaged-dashboard")),
	head: ({ loaderData }) => contentHead(loaderData),
	component: lazyRouteComponent($$splitComponentImporter$15, "component")
});
var $$splitComponentImporter$14 = () => import("./blog.swirl-marks-from-car-washes-vMpvb9Dc.mjs");
var Route$14 = createFileRoute("/blog/swirl-marks-from-car-washes")({
	loader: () => import("./pages-BgENyV9Z.mjs").then((mod) => mod.pageByPath("/blog/swirl-marks-from-car-washes")),
	head: ({ loaderData }) => contentHead(loaderData),
	component: lazyRouteComponent($$splitComponentImporter$14, "component")
});
var $$splitComponentImporter$13 = () => import("./blog.tree-sap-on-paint-D3sfnJfi.mjs");
var Route$13 = createFileRoute("/blog/tree-sap-on-paint")({
	loader: () => import("./pages-BgENyV9Z.mjs").then((mod) => mod.pageByPath("/blog/tree-sap-on-paint")),
	head: ({ loaderData }) => contentHead(loaderData),
	component: lazyRouteComponent($$splitComponentImporter$13, "component")
});
var $$splitComponentImporter$12 = () => import("./blog.washing-a-ceramic-coated-car-BywAoYQn.mjs");
var Route$12 = createFileRoute("/blog/washing-a-ceramic-coated-car")({
	loader: () => import("./pages-BgENyV9Z.mjs").then((mod) => mod.pageByPath("/blog/washing-a-ceramic-coated-car")),
	head: ({ loaderData }) => contentHead(loaderData),
	component: lazyRouteComponent($$splitComponentImporter$12, "component")
});
var $$splitComponentImporter$11 = () => import("./blog.water-spots-on-car-paint-DPpeRpei.mjs");
var Route$11 = createFileRoute("/blog/water-spots-on-car-paint")({
	loader: () => import("./pages-BgENyV9Z.mjs").then((mod) => mod.pageByPath("/blog/water-spots-on-car-paint")),
	head: ({ loaderData }) => contentHead(loaderData),
	component: lazyRouteComponent($$splitComponentImporter$11, "component")
});
var $$splitComponentImporter$10 = () => import("./blog.what-a-full-detail-includes-BKvmt4s0.mjs");
var Route$10 = createFileRoute("/blog/what-a-full-detail-includes")({
	loader: () => import("./pages-BgENyV9Z.mjs").then((mod) => mod.pageByPath("/blog/what-a-full-detail-includes")),
	head: ({ loaderData }) => contentHead(loaderData),
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
var $$splitComponentImporter$9 = () => import("./blog.what-changes-a-paint-correction-quote-CNwElJCm.mjs");
var Route$9 = createFileRoute("/blog/what-changes-a-paint-correction-quote")({
	loader: () => import("./pages-BgENyV9Z.mjs").then((mod) => mod.pageByPath("/blog/what-changes-a-paint-correction-quote")),
	head: ({ loaderData }) => contentHead(loaderData),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./blog.what-clay-bar-does-C1fRc4Jq.mjs");
var Route$8 = createFileRoute("/blog/what-clay-bar-does")({
	loader: () => import("./pages-BgENyV9Z.mjs").then((mod) => mod.pageByPath("/blog/what-clay-bar-does")),
	head: ({ loaderData }) => contentHead(loaderData),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./blog.what-is-paint-correction-CSBg4x-y.mjs");
var Route$7 = createFileRoute("/blog/what-is-paint-correction")({
	loader: () => import("./pages-BgENyV9Z.mjs").then((mod) => mod.pageByPath("/blog/what-is-paint-correction")),
	head: ({ loaderData }) => contentHead(loaderData),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./blog.what-to-tell-a-detailer-before-you-book-xVEozjfP.mjs");
var Route$6 = createFileRoute("/blog/what-to-tell-a-detailer-before-you-book")({
	loader: () => import("./pages-BgENyV9Z.mjs").then((mod) => mod.pageByPath("/blog/what-to-tell-a-detailer-before-you-book")),
	head: ({ loaderData }) => contentHead(loaderData),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./blog.wheel-detailing-san-antonio-DYzZKGjL.mjs");
var Route$5 = createFileRoute("/blog/wheel-detailing-san-antonio")({
	loader: () => import("./pages-BgENyV9Z.mjs").then((mod) => mod.pageByPath("/blog/wheel-detailing-san-antonio")),
	head: ({ loaderData }) => contentHead(loaderData),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./blog.when-a-scratch-is-too-deep-to-polish-B4zqltXU.mjs");
var Route$4 = createFileRoute("/blog/when-a-scratch-is-too-deep-to-polish")({
	loader: () => import("./pages-BgENyV9Z.mjs").then((mod) => mod.pageByPath("/blog/when-a-scratch-is-too-deep-to-polish")),
	head: ({ loaderData }) => contentHead(loaderData),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./blog.windshield-film-san-antonio-CdiVD7sL.mjs");
var Route$3 = createFileRoute("/blog/windshield-film-san-antonio")({
	loader: () => import("./pages-BgENyV9Z.mjs").then((mod) => mod.pageByPath("/blog/windshield-film-san-antonio")),
	head: ({ loaderData }) => contentHead(loaderData),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./ceramic-coating.index-CNvIEcTE.mjs");
var Route$2 = createFileRoute("/ceramic-coating/")({
	loader: () => import("./pages-BgENyV9Z.mjs").then((mod) => mod.pageByPath("/ceramic-coating")),
	head: ({ loaderData }) => contentHead(loaderData),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./ceramic-coating.cost-CLM8bjhe.mjs");
var Route$1 = createFileRoute("/ceramic-coating/cost")({
	loader: () => import("./pages-BgENyV9Z.mjs").then((mod) => mod.pageByPath("/ceramic-coating/cost")),
	head: ({ loaderData }) => contentHead(loaderData),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./ceramic-coating.process-CtdUc-zM.mjs");
var Route = createFileRoute("/ceramic-coating/process")({
	loader: () => import("./pages-BgENyV9Z.mjs").then((mod) => mod.pageByPath("/ceramic-coating/process")),
	head: ({ loaderData }) => contentHead(loaderData),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var IndexRoute = Route$79.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$80
});
var AboutRoute = Route$78.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$80
});
var BlogRoute = Route$77.update({
	id: "/blog",
	path: "/blog",
	getParentRoute: () => Route$80
});
var CeramicCoatingRoute = Route$76.update({
	id: "/ceramic-coating",
	path: "/ceramic-coating",
	getParentRoute: () => Route$80
});
var CeramicCoatingsRoute = Route$75.update({
	id: "/ceramic-coatings",
	path: "/ceramic-coatings",
	getParentRoute: () => Route$80
});
var ContactRoute = Route$74.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$80
});
var ConverseRoute = Route$73.update({
	id: "/converse",
	path: "/converse",
	getParentRoute: () => Route$80
});
var ExteriorDetailingRoute = Route$72.update({
	id: "/exterior-detailing",
	path: "/exterior-detailing",
	getParentRoute: () => Route$80
});
var FortSamHoustonRoute = Route$71.update({
	id: "/fort-sam-houston",
	path: "/fort-sam-houston",
	getParentRoute: () => Route$80
});
var FullDetailingRoute = Route$70.update({
	id: "/full-detailing",
	path: "/full-detailing",
	getParentRoute: () => Route$80
});
var InteriorDetailingRoute = Route$69.update({
	id: "/interior-detailing",
	path: "/interior-detailing",
	getParentRoute: () => Route$80
});
var LiveOakRoute = Route$68.update({
	id: "/live-oak",
	path: "/live-oak",
	getParentRoute: () => Route$80
});
var OakMeadowRoute = Route$67.update({
	id: "/oak-meadow",
	path: "/oak-meadow",
	getParentRoute: () => Route$80
});
var PaintCorrectionRoute = Route$66.update({
	id: "/paint-correction",
	path: "/paint-correction",
	getParentRoute: () => Route$80
});
var PricingRoute = Route$65.update({
	id: "/pricing",
	path: "/pricing",
	getParentRoute: () => Route$80
});
var PrivacyRoute = Route$64.update({
	id: "/privacy",
	path: "/privacy",
	getParentRoute: () => Route$80
});
var RefundPolicyRoute = Route$63.update({
	id: "/refund-policy",
	path: "/refund-policy",
	getParentRoute: () => Route$80
});
var RollingOaksRoute = Route$62.update({
	id: "/rolling-oaks",
	path: "/rolling-oaks",
	getParentRoute: () => Route$80
});
var RoyalRidgeRoute = Route$61.update({
	id: "/royal-ridge",
	path: "/royal-ridge",
	getParentRoute: () => Route$80
});
var SanAntonio78233Route = Route$60.update({
	id: "/san-antonio-78233",
	path: "/san-antonio-78233",
	getParentRoute: () => Route$80
});
var SchertzRoute = Route$59.update({
	id: "/schertz",
	path: "/schertz",
	getParentRoute: () => Route$80
});
var ServiceAreasRoute = Route$58.update({
	id: "/service-areas",
	path: "/service-areas",
	getParentRoute: () => Route$80
});
var ServicesRoute = Route$57.update({
	id: "/services",
	path: "/services",
	getParentRoute: () => Route$80
});
var TermsRoute = Route$56.update({
	id: "/terms",
	path: "/terms",
	getParentRoute: () => Route$80
});
var UniversalCityRoute = Route$55.update({
	id: "/universal-city",
	path: "/universal-city",
	getParentRoute: () => Route$80
});
var WindcrestRoute = Route$54.update({
	id: "/windcrest",
	path: "/windcrest",
	getParentRoute: () => Route$80
});
var BlogIndexRoute = Route$53.update({
	id: "/",
	path: "/",
	getParentRoute: () => BlogRoute
});
var BlogAutoDetailingSanAntonioTxGuideRoute = Route$52.update({
	id: "/auto-detailing-san-antonio-tx-guide",
	path: "/auto-detailing-san-antonio-tx-guide",
	getParentRoute: () => BlogRoute
});
var BlogBestAutoDetailerNortheastSanAntonioRoute = Route$51.update({
	id: "/best-auto-detailer-northeast-san-antonio",
	path: "/best-auto-detailer-northeast-san-antonio",
	getParentRoute: () => BlogRoute
});
var BlogBirdDroppingsOnCarPaintRoute = Route$50.update({
	id: "/bird-droppings-on-car-paint",
	path: "/bird-droppings-on-car-paint",
	getParentRoute: () => BlogRoute
});
var BlogBugsAndTarOnPaintRoute = Route$49.update({
	id: "/bugs-and-tar-on-paint",
	path: "/bugs-and-tar-on-paint",
	getParentRoute: () => BlogRoute
});
var BlogCarScreensButtonsAndGlossyTrimRoute = Route$48.update({
	id: "/car-screens-buttons-and-glossy-trim",
	path: "/car-screens-buttons-and-glossy-trim",
	getParentRoute: () => BlogRoute
});
var BlogCarSeatInteriorDetailingRoute = Route$47.update({
	id: "/car-seat-interior-detailing",
	path: "/car-seat-interior-detailing",
	getParentRoute: () => BlogRoute
});
var BlogCeramicCoatingDoesNotHideSwirlsRoute = Route$46.update({
	id: "/ceramic-coating-does-not-hide-swirls",
	path: "/ceramic-coating-does-not-hide-swirls",
	getParentRoute: () => BlogRoute
});
var BlogCeramicCoatingVsPpfRoute = Route$45.update({
	id: "/ceramic-coating-vs-ppf",
	path: "/ceramic-coating-vs-ppf",
	getParentRoute: () => BlogRoute
});
var BlogCeramicCoatingVsWaxRoute = Route$44.update({
	id: "/ceramic-coating-vs-wax",
	path: "/ceramic-coating-vs-wax",
	getParentRoute: () => BlogRoute
});
var BlogCeramicCoatingWarrantiesExplainedRoute = Route$43.update({
	id: "/ceramic-coating-warranties-explained",
	path: "/ceramic-coating-warranties-explained",
	getParentRoute: () => BlogRoute
});
var BlogConstructionDustOnPaintRoute = Route$42.update({
	id: "/construction-dust-on-paint",
	path: "/construction-dust-on-paint",
	getParentRoute: () => BlogRoute
});
var BlogDecontaminationBeforeCeramicCoatingRoute = Route$41.update({
	id: "/decontamination-before-ceramic-coating",
	path: "/decontamination-before-ceramic-coating",
	getParentRoute: () => BlogRoute
});
var BlogDetailingTrucksAndSuvsSanAntonioRoute = Route$40.update({
	id: "/detailing-trucks-and-suvs-san-antonio",
	path: "/detailing-trucks-and-suvs-san-antonio",
	getParentRoute: () => BlogRoute
});
var BlogDoorJambsInADetailRoute = Route$39.update({
	id: "/door-jambs-in-a-detail",
	path: "/door-jambs-in-a-detail",
	getParentRoute: () => BlogRoute
});
var BlogFloorMatsAndCarpetsRoute = Route$38.update({
	id: "/floor-mats-and-carpets",
	path: "/floor-mats-and-carpets",
	getParentRoute: () => BlogRoute
});
var BlogHardWaterSpotsSanAntonioRoute = Route$37.update({
	id: "/hard-water-spots-san-antonio",
	path: "/hard-water-spots-san-antonio",
	getParentRoute: () => BlogRoute
});
var BlogHazyHeadlightsSanAntonioRoute = Route$36.update({
	id: "/hazy-headlights-san-antonio",
	path: "/hazy-headlights-san-antonio",
	getParentRoute: () => BlogRoute
});
var BlogHowCeramicCoatingWorksRoute = Route$35.update({
	id: "/how-ceramic-coating-works",
	path: "/how-ceramic-coating-works",
	getParentRoute: () => BlogRoute
});
var BlogHowLongADetailTakesRoute = Route$34.update({
	id: "/how-long-a-detail-takes",
	path: "/how-long-a-detail-takes",
	getParentRoute: () => BlogRoute
});
var BlogHowLongDoesCeramicCoatingLastRoute = Route$33.update({
	id: "/how-long-does-ceramic-coating-last",
	path: "/how-long-does-ceramic-coating-last",
	getParentRoute: () => BlogRoute
});
var BlogHowLongDoesPaintCorrectionTakeRoute = Route$32.update({
	id: "/how-long-does-paint-correction-take",
	path: "/how-long-does-paint-correction-take",
	getParentRoute: () => BlogRoute
});
var BlogHowOftenToDetailSanAntonioRoute = Route$31.update({
	id: "/how-often-to-detail-san-antonio",
	path: "/how-often-to-detail-san-antonio",
	getParentRoute: () => BlogRoute
});
var BlogHowToChooseAPaintCorrectionDetailerRoute = Route$30.update({
	id: "/how-to-choose-a-paint-correction-detailer",
	path: "/how-to-choose-a-paint-correction-detailer",
	getParentRoute: () => BlogRoute
});
var BlogHowToPrepareForADetailRoute = Route$29.update({
	id: "/how-to-prepare-for-a-detail",
	path: "/how-to-prepare-for-a-detail",
	getParentRoute: () => BlogRoute
});
var BlogHowToWashCeramicCoatedCarRoute = Route$28.update({
	id: "/how-to-wash-ceramic-coated-car",
	path: "/how-to-wash-ceramic-coated-car",
	getParentRoute: () => BlogRoute
});
var BlogInteriorStainLimitsRoute = Route$27.update({
	id: "/interior-stain-limits",
	path: "/interior-stain-limits",
	getParentRoute: () => BlogRoute
});
var BlogIronFalloutOnCarPaintRoute = Route$26.update({
	id: "/iron-fallout-on-car-paint",
	path: "/iron-fallout-on-car-paint",
	getParentRoute: () => BlogRoute
});
var BlogIsCeramicCoatingWorthItRoute = Route$25.update({
	id: "/is-ceramic-coating-worth-it",
	path: "/is-ceramic-coating-worth-it",
	getParentRoute: () => BlogRoute
});
var BlogLeatherConditioningSanAntonioRoute = Route$24.update({
	id: "/leather-conditioning-san-antonio",
	path: "/leather-conditioning-san-antonio",
	getParentRoute: () => BlogRoute
});
var BlogNewCarPaintCorrectionBeforeCeramicCoatingRoute = Route$23.update({
	id: "/new-car-paint-correction-before-ceramic-coating",
	path: "/new-car-paint-correction-before-ceramic-coating",
	getParentRoute: () => BlogRoute
});
var BlogOakPollenSanAntonioPaintRoute = Route$22.update({
	id: "/oak-pollen-san-antonio-paint",
	path: "/oak-pollen-san-antonio-paint",
	getParentRoute: () => BlogRoute
});
var BlogPaintCorrectionAftercareRoute = Route$21.update({
	id: "/paint-correction-aftercare",
	path: "/paint-correction-aftercare",
	getParentRoute: () => BlogRoute
});
var BlogPaintCorrectionBeforeCeramicCoatingRoute = Route$20.update({
	id: "/paint-correction-before-ceramic-coating",
	path: "/paint-correction-before-ceramic-coating",
	getParentRoute: () => BlogRoute
});
var BlogPetHairInteriorDetailingRoute = Route$19.update({
	id: "/pet-hair-interior-detailing",
	path: "/pet-hair-interior-detailing",
	getParentRoute: () => BlogRoute
});
var BlogPolishingVsWaxingRoute = Route$18.update({
	id: "/polishing-vs-waxing",
	path: "/polishing-vs-waxing",
	getParentRoute: () => BlogRoute
});
var BlogProductsToAvoidOnCeramicCoatingRoute = Route$17.update({
	id: "/products-to-avoid-on-ceramic-coating",
	path: "/products-to-avoid-on-ceramic-coating",
	getParentRoute: () => BlogRoute
});
var BlogQuestionsBeforeCeramicCoatingRoute = Route$16.update({
	id: "/questions-before-ceramic-coating",
	path: "/questions-before-ceramic-coating",
	getParentRoute: () => BlogRoute
});
var BlogSunDamagedDashboardRoute = Route$15.update({
	id: "/sun-damaged-dashboard",
	path: "/sun-damaged-dashboard",
	getParentRoute: () => BlogRoute
});
var BlogSwirlMarksFromCarWashesRoute = Route$14.update({
	id: "/swirl-marks-from-car-washes",
	path: "/swirl-marks-from-car-washes",
	getParentRoute: () => BlogRoute
});
var BlogTreeSapOnPaintRoute = Route$13.update({
	id: "/tree-sap-on-paint",
	path: "/tree-sap-on-paint",
	getParentRoute: () => BlogRoute
});
var BlogWashingACeramicCoatedCarRoute = Route$12.update({
	id: "/washing-a-ceramic-coated-car",
	path: "/washing-a-ceramic-coated-car",
	getParentRoute: () => BlogRoute
});
var BlogWaterSpotsOnCarPaintRoute = Route$11.update({
	id: "/water-spots-on-car-paint",
	path: "/water-spots-on-car-paint",
	getParentRoute: () => BlogRoute
});
var BlogWhatAFullDetailIncludesRoute = Route$10.update({
	id: "/what-a-full-detail-includes",
	path: "/what-a-full-detail-includes",
	getParentRoute: () => BlogRoute
});
var BlogWhatChangesAPaintCorrectionQuoteRoute = Route$9.update({
	id: "/what-changes-a-paint-correction-quote",
	path: "/what-changes-a-paint-correction-quote",
	getParentRoute: () => BlogRoute
});
var BlogWhatClayBarDoesRoute = Route$8.update({
	id: "/what-clay-bar-does",
	path: "/what-clay-bar-does",
	getParentRoute: () => BlogRoute
});
var BlogWhatIsPaintCorrectionRoute = Route$7.update({
	id: "/what-is-paint-correction",
	path: "/what-is-paint-correction",
	getParentRoute: () => BlogRoute
});
var BlogWhatToTellADetailerBeforeYouBookRoute = Route$6.update({
	id: "/what-to-tell-a-detailer-before-you-book",
	path: "/what-to-tell-a-detailer-before-you-book",
	getParentRoute: () => BlogRoute
});
var BlogWheelDetailingSanAntonioRoute = Route$5.update({
	id: "/wheel-detailing-san-antonio",
	path: "/wheel-detailing-san-antonio",
	getParentRoute: () => BlogRoute
});
var BlogWhenAScratchIsTooDeepToPolishRoute = Route$4.update({
	id: "/when-a-scratch-is-too-deep-to-polish",
	path: "/when-a-scratch-is-too-deep-to-polish",
	getParentRoute: () => BlogRoute
});
var BlogWindshieldFilmSanAntonioRoute = Route$3.update({
	id: "/windshield-film-san-antonio",
	path: "/windshield-film-san-antonio",
	getParentRoute: () => BlogRoute
});
var CeramicCoatingIndexRoute = Route$2.update({
	id: "/",
	path: "/",
	getParentRoute: () => CeramicCoatingRoute
});
var CeramicCoatingCostRoute = Route$1.update({
	id: "/cost",
	path: "/cost",
	getParentRoute: () => CeramicCoatingRoute
});
var CeramicCoatingProcessRoute = Route.update({
	id: "/process",
	path: "/process",
	getParentRoute: () => CeramicCoatingRoute
});
var BlogRouteChildren = {
	BlogAutoDetailingSanAntonioTxGuideRoute,
	BlogBestAutoDetailerNortheastSanAntonioRoute,
	BlogBirdDroppingsOnCarPaintRoute,
	BlogBugsAndTarOnPaintRoute,
	BlogCarScreensButtonsAndGlossyTrimRoute,
	BlogCarSeatInteriorDetailingRoute,
	BlogCeramicCoatingDoesNotHideSwirlsRoute,
	BlogCeramicCoatingVsPpfRoute,
	BlogCeramicCoatingVsWaxRoute,
	BlogCeramicCoatingWarrantiesExplainedRoute,
	BlogConstructionDustOnPaintRoute,
	BlogDecontaminationBeforeCeramicCoatingRoute,
	BlogDetailingTrucksAndSuvsSanAntonioRoute,
	BlogDoorJambsInADetailRoute,
	BlogFloorMatsAndCarpetsRoute,
	BlogHardWaterSpotsSanAntonioRoute,
	BlogHazyHeadlightsSanAntonioRoute,
	BlogHowCeramicCoatingWorksRoute,
	BlogHowLongADetailTakesRoute,
	BlogHowLongDoesCeramicCoatingLastRoute,
	BlogHowLongDoesPaintCorrectionTakeRoute,
	BlogHowOftenToDetailSanAntonioRoute,
	BlogHowToChooseAPaintCorrectionDetailerRoute,
	BlogHowToPrepareForADetailRoute,
	BlogHowToWashCeramicCoatedCarRoute,
	BlogInteriorStainLimitsRoute,
	BlogIronFalloutOnCarPaintRoute,
	BlogIsCeramicCoatingWorthItRoute,
	BlogLeatherConditioningSanAntonioRoute,
	BlogNewCarPaintCorrectionBeforeCeramicCoatingRoute,
	BlogOakPollenSanAntonioPaintRoute,
	BlogPaintCorrectionAftercareRoute,
	BlogPaintCorrectionBeforeCeramicCoatingRoute,
	BlogPetHairInteriorDetailingRoute,
	BlogPolishingVsWaxingRoute,
	BlogProductsToAvoidOnCeramicCoatingRoute,
	BlogQuestionsBeforeCeramicCoatingRoute,
	BlogSunDamagedDashboardRoute,
	BlogSwirlMarksFromCarWashesRoute,
	BlogTreeSapOnPaintRoute,
	BlogWashingACeramicCoatedCarRoute,
	BlogWaterSpotsOnCarPaintRoute,
	BlogWhatAFullDetailIncludesRoute,
	BlogWhatChangesAPaintCorrectionQuoteRoute,
	BlogWhatClayBarDoesRoute,
	BlogWhatIsPaintCorrectionRoute,
	BlogWhatToTellADetailerBeforeYouBookRoute,
	BlogWheelDetailingSanAntonioRoute,
	BlogWhenAScratchIsTooDeepToPolishRoute,
	BlogWindshieldFilmSanAntonioRoute,
	BlogIndexRoute
};
var BlogRouteWithChildren = BlogRoute._addFileChildren(BlogRouteChildren);
var CeramicCoatingRouteChildren = {
	CeramicCoatingCostRoute,
	CeramicCoatingProcessRoute,
	CeramicCoatingIndexRoute
};
var rootRouteChildren = {
	IndexRoute,
	AboutRoute,
	BlogRoute: BlogRouteWithChildren,
	CeramicCoatingRoute: CeramicCoatingRoute._addFileChildren(CeramicCoatingRouteChildren),
	CeramicCoatingsRoute,
	ContactRoute,
	ConverseRoute,
	ExteriorDetailingRoute,
	FortSamHoustonRoute,
	FullDetailingRoute,
	InteriorDetailingRoute,
	LiveOakRoute,
	OakMeadowRoute,
	PaintCorrectionRoute,
	PricingRoute,
	PrivacyRoute,
	RefundPolicyRoute,
	RollingOaksRoute,
	RoyalRidgeRoute,
	SanAntonio78233Route,
	SchertzRoute,
	ServiceAreasRoute,
	ServicesRoute,
	TermsRoute,
	UniversalCityRoute,
	WindcrestRoute
};
var routeTree = Route$80._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		defaultErrorComponent: AppErrorComponent
	});
}
//#endregion
export { Route$51 as $, Route$28 as A, Route$38 as B, Route$21 as C, Route$25 as D, Route$24 as E, Route$33 as F, Route$43 as G, Route$40 as H, Route$34 as I, Route$46 as J, Route$44 as K, Route$35 as L, Route$30 as M, Route$31 as N, Route$26 as O, Route$32 as P, Route$50 as Q, Route$36 as R, Route$20 as S, Route$23 as T, Route$41 as U, Route$39 as V, Route$42 as W, Route$48 as X, Route$47 as Y, Route$49 as Z, Route$15 as _, Route$72 as _t, Route$3 as a, FAQS$1 as at, Route$18 as b, Button as bt, Route$6 as c, Route$61 as ct, Route$9 as d, Route$66 as dt, Route$52 as et, Route$10 as f, Route$67 as ft, Route$14 as g, Route$71 as gt, Route$13 as h, Route$70 as ht, Route$2 as i, FAQS as it, Route$29 as j, Route$27 as k, Route$7 as l, Route$62 as lt, Route$12 as m, Route$69 as mt, Route as n, Route$54 as nt, Route$4 as o, Route$59 as ot, Route$11 as p, Route$68 as pt, Route$45 as q, Route$1 as r, Route$55 as rt, Route$5 as s, Route$60 as st, router_exports as t, Route$53 as tt, Route$8 as u, Route$65 as ut, Route$16 as v, Route$73 as vt, Route$22 as w, Route$19 as x, Route$17 as y, FAQS$2 as yt, Route$37 as z };
