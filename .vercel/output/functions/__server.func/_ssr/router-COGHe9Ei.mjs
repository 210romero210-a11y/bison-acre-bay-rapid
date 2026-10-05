import { i as __toESM } from "../_runtime.mjs";
import { c as JUNIOR_ACHIEVEMENT, d as PLACE_LINKS, g as SITE_ORIGIN, i as FAQS, l as LEGAL_NAV, m as SERVICE_NAV, n as BUSINESS, o as HOURS, p as SERVICES, t as AREAS, u as NAV } from "./site-BioFshwK.mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { n as pageByPath } from "./pages-DicOkQbO.mjs";
import { _ as require_jsx_runtime, l as Slot, v as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { W as redirect, _ as createFileRoute, b as useRouter, d as Scripts, f as HeadContent, g as lazyRouteComponent, h as Outlet, m as createRouter, v as createRootRoute, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Phone, c as Mail, d as Clock, g as CalendarCheck, n as TriangleAlert, o as Menu, s as MapPin, t as X } from "../_libs/lucide-react.mjs";
import { a as union, i as string, n as number, r as object, t as literal } from "../_libs/zod.mjs";
import { a as DialogPortal, i as DialogOverlay, n as DialogClose, o as DialogTitle, r as DialogContent, s as DialogTrigger, t as Dialog } from "../_libs/@radix-ui/react-dialog+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-COGHe9Ei.js
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
function HoursList({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("text-sm", className),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-3 text-xs font-semibold tracking-[0.18em] text-muted uppercase",
				children: "Hours"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "grid gap-1.5",
				children: HOURS.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex items-baseline justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-fg",
						children: row.day
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: row.time === "Closed" ? "text-muted" : "text-primary",
						children: row.time
					})]
				}, row.day))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3 text-xs text-muted",
				children: [BUSINESS.hoursSummary, ". Appointments recommended."]
			})
		]
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
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "border-t border-border bg-surface",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-2 lg:grid-cols-5 md:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-4 max-w-sm text-sm leading-relaxed text-muted",
							children: [
								"San Antonio based auto detailing. Owner ",
								BUSINESS.founder,
								" is from Alamo Heights and is an Alamo Heights graduate. Private, appointment-based studio care."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: BUSINESS.phoneTel,
							className: "mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4" }), BUSINESS.phoneDisplay]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: BUSINESS.emailMailto,
							className: "mt-2 flex items-center gap-2 text-sm text-muted hover:text-primary",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "size-4 text-primary" }), BUSINESS.email]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: BUSINESS.mapsUrl,
							className: "mt-2 flex items-start gap-2 text-sm text-muted hover:text-primary",
							target: "_blank",
							rel: "noreferrer",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "mt-0.5 size-4 shrink-0 text-primary" }), BUSINESS.addressLine]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-4 text-sm text-muted",
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
								"."
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HoursList, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-semibold tracking-[0.18em] text-muted uppercase",
					children: "Explore"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-4 grid gap-2 text-sm",
					children: [NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: item.to,
						className: "text-fg/90 hover:text-primary",
						children: item.label
					}) }, item.to)), LEGAL_NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: item.to,
						className: "text-fg/90 hover:text-primary",
						children: item.label
					}) }, item.to))]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-semibold tracking-[0.18em] text-muted uppercase",
					children: "Services"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-4 grid gap-2 text-sm",
					children: [
						SERVICE_NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: item.to,
							className: "text-fg/90 hover:text-primary",
							children: item.label
						}) }, item.to)),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/san-antonio-78233",
							className: "text-fg/90 hover:text-primary",
							children: "Auto detailing 78233"
						}) }),
						PLACE_LINKS.slice(1).map((area) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: area.to,
							className: "text-fg/90 hover:text-primary",
							children: area.label
						}) }, area.to))
					]
				})] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-border",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-xs text-muted md:flex-row md:items-center md:justify-between md:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" ",
					BUSINESS.name,
					". San Antonio based auto detailing."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					BUSINESS.addressLine,
					" · ",
					BUSINESS.phoneDisplay,
					" · ",
					BUSINESS.websiteDisplay
				] })]
			})
		})]
	});
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
					className: "hidden items-center gap-6 lg:flex",
					"aria-label": "Primary",
					children: NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
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
							className: "hidden md:inline-flex",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/contact",
								children: "Book Now"
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
											NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
												to: item.to,
												className: cn(linkClass, "py-3 text-base"),
												onClick: () => setOpen(false),
												children: item.label
											}, item.to)),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-4 text-xs font-semibold tracking-[0.18em] text-muted uppercase",
												children: "Services"
											}),
											SERVICE_NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
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
var DESCRIPTION = "Southern Auto Detailers provides professional interior and exterior auto detailing in San Antonio, TX. Call (210) 201-4847 to book your vehicle detail today.";
function absoluteUrl(path) {
	return `${SITE_ORIGIN.replace(/\/$/, "")}${path.startsWith("/") ? path : `/${path}`}`;
}
function postalAddress() {
	return {
		"@type": "PostalAddress",
		streetAddress: BUSINESS.street,
		addressLocality: BUSINESS.city,
		addressRegion: BUSINESS.region,
		postalCode: BUSINESS.postalCode,
		addressCountry: BUSINESS.country
	};
}
function areaServed() {
	return AREAS.map((area) => area.name.includes("Northeast") ? {
		"@type": "Place",
		name: area.name
	} : {
		"@type": "City",
		name: area.name
	});
}
function businessId() {
	return `${SITE_ORIGIN.replace(/\/$/, "")}/#localbusiness`;
}
function localBusinessJsonLd() {
	const url = "https://southernautodetailers.com";
	const images = [
		absoluteUrl("/og.jpg"),
		absoluteUrl("/logo.png"),
		absoluteUrl("/images/auto-detailing-san-antonio-tx-southern-auto-detailers.webp")
	].filter((value) => Boolean(value));
	const logo = absoluteUrl("/logo.png");
	return {
		"@context": "https://schema.org",
		"@type": ["LocalBusiness", "AutoWash"],
		"@id": businessId(),
		name: BUSINESS.name,
		telephone: BUSINESS.phoneE164,
		email: BUSINESS.email,
		description: DESCRIPTION,
		url,
		image: images.length ? images : ["https://southernautodetailers.com/og.jpg"],
		logo: logo ?? "https://southernautodetailers.com/logo.png",
		address: postalAddress(),
		founder: {
			"@type": "Person",
			name: BUSINESS.founder,
			jobTitle: "Owner and IDA-certified detailer",
			homeLocation: {
				"@type": "Place",
				name: "Alamo Heights, Texas"
			},
			alumniOf: {
				"@type": "EducationalOrganization",
				name: "Alamo Heights"
			}
		},
		openingHoursSpecification: [{
			"@type": "OpeningHoursSpecification",
			dayOfWeek: [
				"Tuesday",
				"Wednesday",
				"Thursday",
				"Friday",
				"Saturday",
				"Sunday"
			],
			opens: "07:00",
			closes: "23:00"
		}],
		areaServed: [...areaServed(), {
			"@type": "Place",
			name: "San Antonio 78233",
			address: {
				"@type": "PostalAddress",
				postalCode: "78233",
				addressLocality: "San Antonio",
				addressRegion: "TX",
				addressCountry: "US"
			}
		}],
		knowsAbout: [
			"Auto detailing",
			"Car detailing",
			"Interior auto detailing",
			"Exterior auto detailing",
			"Full auto detailing",
			"Paint correction",
			"Swirl mark removal",
			"Ceramic coating"
		],
		contactPoint: {
			"@type": "ContactPoint",
			telephone: BUSINESS.phoneE164,
			email: BUSINESS.email,
			contactType: "customer service",
			areaServed: "US",
			availableLanguage: ["English"],
			hoursAvailable: {
				"@type": "OpeningHoursSpecification",
				dayOfWeek: [
					"Tuesday",
					"Wednesday",
					"Thursday",
					"Friday",
					"Saturday",
					"Sunday"
				],
				opens: "07:00",
				closes: "23:00"
			}
		},
		hasOfferCatalog: {
			"@type": "OfferCatalog",
			name: "Auto detailing services in San Antonio, TX",
			itemListElement: SERVICES.map((service) => ({
				"@type": "Offer",
				itemOffered: {
					"@type": "Service",
					name: service.title,
					description: service.short,
					areaServed: {
						"@type": "City",
						name: "San Antonio"
					},
					provider: { "@id": businessId() }
				}
			}))
		}
	};
}
function serviceJsonLd(name, description, path) {
	const url = path ? absoluteUrl(path) : void 0;
	return {
		"@context": "https://schema.org",
		"@type": "Service",
		name,
		description,
		...url ? { url } : {},
		provider: {
			"@type": ["LocalBusiness", "AutoWash"],
			"@id": businessId(),
			name: BUSINESS.name,
			telephone: BUSINESS.phoneE164,
			address: postalAddress()
		},
		areaServed: {
			"@type": "City",
			name: "San Antonio"
		},
		serviceType: name
	};
}
function faqJsonLd(items) {
	return {
		"@context": "https://schema.org",
		"@type": "FAQPage",
		mainEntity: items.map((item) => ({
			"@type": "Question",
			name: item.q,
			acceptedAnswer: {
				"@type": "Answer",
				text: item.a
			}
		}))
	};
}
function articleJsonLd(headline, description, path) {
	const url = absoluteUrl(path);
	return {
		"@context": "https://schema.org",
		"@type": "BlogPosting",
		headline,
		description,
		...url ? {
			url,
			mainEntityOfPage: url
		} : {},
		datePublished: "2026-10-05",
		dateModified: "2026-10-05",
		author: {
			"@type": "Person",
			name: BUSINESS.founder
		},
		publisher: { "@id": businessId() },
		image: absoluteUrl("/logo.png")
	};
}
function pageHead(title, description, jsonLd) {
	const extra = jsonLd ? Array.isArray(jsonLd) ? jsonLd : [jsonLd] : [];
	const scripts = [localBusinessJsonLd(), ...extra].map((data) => ({
		type: "application/ld+json",
		children: JSON.stringify(data)
	}));
	return {
		meta: [{ title }, {
			name: "description",
			content: description
		}],
		scripts
	};
}
function contentHead(page) {
	const blocks = [faqJsonLd(page.faqs)];
	if (page.kind === "service") blocks.unshift(serviceJsonLd(page.serviceName ?? page.h1, page.description, page.path));
	if (page.kind === "article") blocks.unshift(articleJsonLd(page.h1, page.description, page.path));
	return pageHead(page.title, page.description, blocks);
}
var styles_default = "/assets/styles-jG8-q2-o.css";
var APP_NAME = "Southern Auto Detailers";
var Route$32 = createRootRoute({
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
			children: JSON.stringify(localBusinessJsonLd())
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
				rel: "apple-touch-icon",
				href: "/__grok/icon-180.png"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&family=Sora:wght@500;600;700&display=swap"
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
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", {
			className: "min-h-svh bg-bg font-sans text-fg",
			children: [
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
var $$splitComponentImporter$31 = () => import("./routes-BRZMmRaW.mjs");
var Route$31 = createFileRoute("/")({
	head: () => pageHead("Auto Detailing San Antonio TX | Southern Auto Detailers", "Professional auto detailing in San Antonio, TX — car detailing, interiors, exteriors, paint correction, and ceramic coating. Call (210) 201-4847 to book.", faqJsonLd(FAQS)),
	component: lazyRouteComponent($$splitComponentImporter$31, "component")
});
var $$splitComponentImporter$30 = () => import("./about-D0bqiAvn.mjs");
var Route$30 = createFileRoute("/about")({
	head: () => pageHead("About Southern Auto Detailers | Robert Romero Jr. | San Antonio, TX", "San Antonio based auto detailing owned by Robert Romero Jr., an Alamo Heights graduate and IDA-certified detailer. Private studio at 11692 Bricken Circle. Call (210) 201-4847."),
	component: lazyRouteComponent($$splitComponentImporter$30, "component")
});
var $$splitComponentImporter$29 = () => import("./blog-GHsbigBI.mjs");
var Route$29 = createFileRoute("/blog")({ component: lazyRouteComponent($$splitComponentImporter$29, "component") });
var $$splitComponentImporter$28 = () => import("./ceramic-coating-iNKFUIuv.mjs");
var Route$28 = createFileRoute("/ceramic-coating")({ component: lazyRouteComponent($$splitComponentImporter$28, "component") });
var $$splitComponentImporter$27 = () => import("./ceramic-coatings-BV2GzgzC.mjs");
var Route$27 = createFileRoute("/ceramic-coatings")({
	beforeLoad: () => {
		throw redirect({
			href: "/ceramic-coating",
			replace: true
		});
	},
	component: lazyRouteComponent($$splitComponentImporter$27, "component")
});
var $$splitComponentImporter$26 = () => import("./contact-BWFlfpeT.mjs");
var Route$26 = createFileRoute("/contact")({
	head: () => pageHead("Book Auto Detailing San Antonio TX | 11692 Bricken Circle | (210) 201-4847", "Book Southern Auto Detailers at 11692 Bricken Circle, San Antonio, TX 78233. Call (210) 201-4847 or email contact@southernautodetailers.com. Tue–Sun 7 AM–11 PM."),
	component: lazyRouteComponent($$splitComponentImporter$26, "component")
});
var page$19 = pageByPath("/converse");
var $$splitComponentImporter$25 = () => import("./converse-BNQgVjYs.mjs");
var Route$25 = createFileRoute("/converse")({
	head: () => contentHead(page$19),
	component: lazyRouteComponent($$splitComponentImporter$25, "component")
});
var page$18 = pageByPath("/exterior-detailing");
var $$splitComponentImporter$24 = () => import("./exterior-detailing-CK4eIGIt.mjs");
var Route$24 = createFileRoute("/exterior-detailing")({
	head: () => contentHead(page$18),
	component: lazyRouteComponent($$splitComponentImporter$24, "component")
});
var page$17 = pageByPath("/full-detailing");
var $$splitComponentImporter$23 = () => import("./full-detailing-CQyIAuF7.mjs");
var Route$23 = createFileRoute("/full-detailing")({
	head: () => contentHead(page$17),
	component: lazyRouteComponent($$splitComponentImporter$23, "component")
});
var page$16 = pageByPath("/interior-detailing");
var $$splitComponentImporter$22 = () => import("./interior-detailing-CRexx7dY.mjs");
var Route$22 = createFileRoute("/interior-detailing")({
	head: () => contentHead(page$16),
	component: lazyRouteComponent($$splitComponentImporter$22, "component")
});
var page$15 = pageByPath("/live-oak");
var $$splitComponentImporter$21 = () => import("./live-oak-DxnFuEy3.mjs");
var Route$21 = createFileRoute("/live-oak")({
	head: () => contentHead(page$15),
	component: lazyRouteComponent($$splitComponentImporter$21, "component")
});
var page$14 = pageByPath("/mobile-detailing");
var $$splitComponentImporter$20 = () => import("./mobile-detailing-BpHXZUU4.mjs");
var Route$20 = createFileRoute("/mobile-detailing")({
	head: () => contentHead(page$14),
	component: lazyRouteComponent($$splitComponentImporter$20, "component")
});
var page$13 = pageByPath("/paint-correction");
var $$splitComponentImporter$19 = () => import("./paint-correction-Db8t2d3x.mjs");
var Route$19 = createFileRoute("/paint-correction")({
	head: () => contentHead(page$13),
	component: lazyRouteComponent($$splitComponentImporter$19, "component")
});
var page$12 = pageByPath("/pricing");
var $$splitComponentImporter$18 = () => import("./pricing-BmkWiFM3.mjs");
var Route$18 = createFileRoute("/pricing")({
	head: () => contentHead(page$12),
	component: lazyRouteComponent($$splitComponentImporter$18, "component")
});
var $$splitComponentImporter$17 = () => import("./privacy-BmF07jhw.mjs");
var Route$17 = createFileRoute("/privacy")({
	head: () => pageHead("Privacy Policy | Southern Auto Detailers", "Privacy policy for Southern Auto Detailers in San Antonio, TX. How we handle appointment requests, contact details, and studio privacy."),
	component: lazyRouteComponent($$splitComponentImporter$17, "component")
});
var $$splitComponentImporter$16 = () => import("./refund-policy-gVBoEiLw.mjs");
var Route$16 = createFileRoute("/refund-policy")({
	head: () => pageHead("Refund Policy | Southern Auto Detailers", "Refund policy for Southern Auto Detailers. A 20% non-refundable deposit of the quoted total is required to secure a booking slot in San Antonio, TX."),
	component: lazyRouteComponent($$splitComponentImporter$16, "component")
});
var page$11 = pageByPath("/san-antonio-78233");
var $$splitComponentImporter$15 = () => import("./san-antonio-78233-C0DV1obu.mjs");
var Route$15 = createFileRoute("/san-antonio-78233")({
	head: () => contentHead(page$11),
	component: lazyRouteComponent($$splitComponentImporter$15, "component")
});
var page$10 = pageByPath("/schertz");
var $$splitComponentImporter$14 = () => import("./schertz-BNxW4hdO.mjs");
var Route$14 = createFileRoute("/schertz")({
	head: () => contentHead(page$10),
	component: lazyRouteComponent($$splitComponentImporter$14, "component")
});
var $$splitComponentImporter$13 = () => import("./service-areas-SENbQA7i.mjs");
var Route$13 = createFileRoute("/service-areas")({
	head: () => pageHead("Auto Detailing Near San Antonio TX | 78233, Live Oak, Schertz", "Auto detailing near San Antonio, TX — Northeast San Antonio, 78233, Live Oak, Universal City, Converse, Schertz, Cibolo, and Windcrest. Call (210) 201-4847."),
	component: lazyRouteComponent($$splitComponentImporter$13, "component")
});
var $$splitComponentImporter$12 = () => import("./services-BxqTDKEC.mjs");
var Route$12 = createFileRoute("/services")({
	head: () => pageHead("Auto Detailing Services San Antonio TX | Interior, Exterior, Full Detail", "Auto detailing service in San Antonio, TX — interior, exterior, full auto detailing, paint correction, and ceramic coating. Call (210) 201-4847."),
	component: lazyRouteComponent($$splitComponentImporter$12, "component")
});
var $$splitComponentImporter$11 = () => import("./terms-D9kaST02.mjs");
var Route$11 = createFileRoute("/terms")({
	head: () => pageHead("Terms & Conditions | Southern Auto Detailers", "Terms for booking auto detailing with Southern Auto Detailers in San Antonio, TX, including the 20% non-refundable deposit required to secure a slot."),
	component: lazyRouteComponent($$splitComponentImporter$11, "component")
});
var page$9 = pageByPath("/universal-city");
var $$splitComponentImporter$10 = () => import("./universal-city-DIYuodc9.mjs");
var Route$10 = createFileRoute("/universal-city")({
	head: () => contentHead(page$9),
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
var page$8 = pageByPath("/windcrest");
var $$splitComponentImporter$9 = () => import("./windcrest-jixnI6CN.mjs");
var Route$9 = createFileRoute("/windcrest")({
	head: () => contentHead(page$8),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./blog.index-Db-uAfpN.mjs");
var Route$8 = createFileRoute("/blog/")({
	head: () => pageHead("Auto Detailing Blog | San Antonio TX", "Guides from Southern Auto Detailers on ceramic coating, paint correction, pricing, and Northeast San Antonio detailing. Call (210) 201-4847."),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var page$7 = pageByPath("/blog/auto-detailing-san-antonio-tx-guide");
var $$splitComponentImporter$7 = () => import("./blog.auto-detailing-san-antonio-tx-guide-j0PZj4_w.mjs");
var Route$7 = createFileRoute("/blog/auto-detailing-san-antonio-tx-guide")({
	head: () => contentHead(page$7),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var page$6 = pageByPath("/blog/best-auto-detailer-northeast-san-antonio");
var $$splitComponentImporter$6 = () => import("./blog.best-auto-detailer-northeast-san-antonio-8RzVw-yq.mjs");
var Route$6 = createFileRoute("/blog/best-auto-detailer-northeast-san-antonio")({
	head: () => contentHead(page$6),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var page$5 = pageByPath("/blog/ceramic-coating-vs-wax");
var $$splitComponentImporter$5 = () => import("./blog.ceramic-coating-vs-wax-CUVibfbN.mjs");
var Route$5 = createFileRoute("/blog/ceramic-coating-vs-wax")({
	head: () => contentHead(page$5),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var page$4 = pageByPath("/blog/how-long-does-ceramic-coating-last");
var $$splitComponentImporter$4 = () => import("./blog.how-long-does-ceramic-coating-last-Dz33JFbq.mjs");
var Route$4 = createFileRoute("/blog/how-long-does-ceramic-coating-last")({
	head: () => contentHead(page$4),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var page$3 = pageByPath("/blog/what-is-paint-correction");
var $$splitComponentImporter$3 = () => import("./blog.what-is-paint-correction-CizExhvI.mjs");
var Route$3 = createFileRoute("/blog/what-is-paint-correction")({
	head: () => contentHead(page$3),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var page$2 = pageByPath("/ceramic-coating");
var $$splitComponentImporter$2 = () => import("./ceramic-coating.index-DSVFvo1V.mjs");
var Route$2 = createFileRoute("/ceramic-coating/")({
	head: () => contentHead(page$2),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var page$1 = pageByPath("/ceramic-coating/cost");
var $$splitComponentImporter$1 = () => import("./ceramic-coating.cost-A1kj6bQG.mjs");
var Route$1 = createFileRoute("/ceramic-coating/cost")({
	head: () => contentHead(page$1),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var page = pageByPath("/ceramic-coating/process");
var $$splitComponentImporter = () => import("./ceramic-coating.process-CSEY2yDO.mjs");
var Route = createFileRoute("/ceramic-coating/process")({
	head: () => contentHead(page),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var IndexRoute = Route$31.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$32
});
var AboutRoute = Route$30.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$32
});
var BlogRoute = Route$29.update({
	id: "/blog",
	path: "/blog",
	getParentRoute: () => Route$32
});
var CeramicCoatingRoute = Route$28.update({
	id: "/ceramic-coating",
	path: "/ceramic-coating",
	getParentRoute: () => Route$32
});
var CeramicCoatingsRoute = Route$27.update({
	id: "/ceramic-coatings",
	path: "/ceramic-coatings",
	getParentRoute: () => Route$32
});
var ContactRoute = Route$26.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$32
});
var ConverseRoute = Route$25.update({
	id: "/converse",
	path: "/converse",
	getParentRoute: () => Route$32
});
var ExteriorDetailingRoute = Route$24.update({
	id: "/exterior-detailing",
	path: "/exterior-detailing",
	getParentRoute: () => Route$32
});
var FullDetailingRoute = Route$23.update({
	id: "/full-detailing",
	path: "/full-detailing",
	getParentRoute: () => Route$32
});
var InteriorDetailingRoute = Route$22.update({
	id: "/interior-detailing",
	path: "/interior-detailing",
	getParentRoute: () => Route$32
});
var LiveOakRoute = Route$21.update({
	id: "/live-oak",
	path: "/live-oak",
	getParentRoute: () => Route$32
});
var MobileDetailingRoute = Route$20.update({
	id: "/mobile-detailing",
	path: "/mobile-detailing",
	getParentRoute: () => Route$32
});
var PaintCorrectionRoute = Route$19.update({
	id: "/paint-correction",
	path: "/paint-correction",
	getParentRoute: () => Route$32
});
var PricingRoute = Route$18.update({
	id: "/pricing",
	path: "/pricing",
	getParentRoute: () => Route$32
});
var PrivacyRoute = Route$17.update({
	id: "/privacy",
	path: "/privacy",
	getParentRoute: () => Route$32
});
var RefundPolicyRoute = Route$16.update({
	id: "/refund-policy",
	path: "/refund-policy",
	getParentRoute: () => Route$32
});
var SanAntonio78233Route = Route$15.update({
	id: "/san-antonio-78233",
	path: "/san-antonio-78233",
	getParentRoute: () => Route$32
});
var SchertzRoute = Route$14.update({
	id: "/schertz",
	path: "/schertz",
	getParentRoute: () => Route$32
});
var ServiceAreasRoute = Route$13.update({
	id: "/service-areas",
	path: "/service-areas",
	getParentRoute: () => Route$32
});
var ServicesRoute = Route$12.update({
	id: "/services",
	path: "/services",
	getParentRoute: () => Route$32
});
var TermsRoute = Route$11.update({
	id: "/terms",
	path: "/terms",
	getParentRoute: () => Route$32
});
var UniversalCityRoute = Route$10.update({
	id: "/universal-city",
	path: "/universal-city",
	getParentRoute: () => Route$32
});
var WindcrestRoute = Route$9.update({
	id: "/windcrest",
	path: "/windcrest",
	getParentRoute: () => Route$32
});
var BlogIndexRoute = Route$8.update({
	id: "/",
	path: "/",
	getParentRoute: () => BlogRoute
});
var BlogAutoDetailingSanAntonioTxGuideRoute = Route$7.update({
	id: "/auto-detailing-san-antonio-tx-guide",
	path: "/auto-detailing-san-antonio-tx-guide",
	getParentRoute: () => BlogRoute
});
var BlogBestAutoDetailerNortheastSanAntonioRoute = Route$6.update({
	id: "/best-auto-detailer-northeast-san-antonio",
	path: "/best-auto-detailer-northeast-san-antonio",
	getParentRoute: () => BlogRoute
});
var BlogCeramicCoatingVsWaxRoute = Route$5.update({
	id: "/ceramic-coating-vs-wax",
	path: "/ceramic-coating-vs-wax",
	getParentRoute: () => BlogRoute
});
var BlogHowLongDoesCeramicCoatingLastRoute = Route$4.update({
	id: "/how-long-does-ceramic-coating-last",
	path: "/how-long-does-ceramic-coating-last",
	getParentRoute: () => BlogRoute
});
var BlogWhatIsPaintCorrectionRoute = Route$3.update({
	id: "/what-is-paint-correction",
	path: "/what-is-paint-correction",
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
	BlogCeramicCoatingVsWaxRoute,
	BlogHowLongDoesCeramicCoatingLastRoute,
	BlogWhatIsPaintCorrectionRoute,
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
	FullDetailingRoute,
	InteriorDetailingRoute,
	LiveOakRoute,
	MobileDetailingRoute,
	PaintCorrectionRoute,
	PricingRoute,
	PrivacyRoute,
	RefundPolicyRoute,
	SanAntonio78233Route,
	SchertzRoute,
	ServiceAreasRoute,
	ServicesRoute,
	TermsRoute,
	UniversalCityRoute,
	WindcrestRoute
};
var routeTree = Route$32._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		defaultErrorComponent: AppErrorComponent
	});
}
//#endregion
export { HoursList as C, Button as S, page$15 as _, page$3 as a, page$18 as b, page$6 as c, page$9 as d, page$10 as f, page$14 as g, page$13 as h, page$2 as i, page$7 as l, page$12 as m, page as n, page$4 as o, page$11 as p, page$1 as r, page$5 as s, router_exports as t, page$8 as u, page$16 as v, page$19 as x, page$17 as y };
