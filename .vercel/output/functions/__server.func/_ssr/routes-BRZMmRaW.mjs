import { _ as STEPS, a as GALLERY, f as REASONS, n as BUSINESS, p as SERVICES, s as IMAGES } from "./site-BioFshwK.mjs";
import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Phone, h as CalendarClock, i as ShieldCheck, l as Lock, m as Car, r as Sparkles, s as MapPin } from "../_libs/lucide-react.mjs";
import { S as Button } from "./router-COGHe9Ei.mjs";
import { t as CommunityPledge } from "./community-pledge-BE3uEXM5.mjs";
import { t as Badge } from "./badge-BF8l50QL.mjs";
import { t as Photo } from "./photo-BWmu363X.mjs";
import { n as Section, t as Eyebrow } from "./section-HcuhiqsJ.mjs";
import { t as FaqList } from "./faq-list-C3up0AHJ.mjs";
import { t as BookingForm } from "./booking-form-DIxyZ-S-.mjs";
import { t as ServiceCard } from "./service-card-RNggybdw.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BRZMmRaW.js
var import_jsx_runtime = require_jsx_runtime();
var reasonIcons = [
	Sparkles,
	Phone,
	ShieldCheck,
	Car,
	CalendarClock,
	Lock
];
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative isolate min-h-svh overflow-hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: IMAGES.hero.src,
					alt: IMAGES.hero.alt,
					className: "absolute inset-0 size-full object-cover",
					width: 1600,
					height: 900,
					loading: "eager",
					decoding: "async",
					fetchPriority: "high"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-bg via-bg/82 to-bg/20" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-bg via-transparent to-bg/50" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mx-auto flex min-h-svh w-full max-w-6xl flex-col justify-end px-4 py-24 md:px-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-4 text-xs font-semibold tracking-[0.22em] text-primary uppercase",
							children: "San Antonio based auto detailing"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "max-w-3xl font-display text-4xl font-semibold tracking-tight md:text-6xl",
							children: "Auto Detailing in San Antonio, TX"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 max-w-xl text-base text-muted md:text-lg",
							children: "Southern Auto Detailers is a San Antonio based studio owned by Robert Romero Jr., an Alamo Heights graduate and IDA-certified detailer. Private interior and exterior car detailing, paint correction, and ceramic coating — by appointment."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-col gap-3 sm:flex-row sm:items-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
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
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									size: "lg",
									variant: "outline",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/contact",
										children: "Request a Detail"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
									variant: "accent",
									className: "w-fit sm:ml-1",
									children: "Limited Availability"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-6 inline-flex items-start gap-2 text-sm text-muted",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "mt-0.5 size-4 shrink-0 text-primary" }),
								BUSINESS.addressLine,
								" · ",
								BUSINESS.hoursSummary
							]
						})
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-y border-border bg-surface",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-6xl gap-6 px-4 py-6 text-sm md:grid-cols-2 lg:grid-cols-4 md:px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-muted",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-semibold text-fg",
								children: "Hours"
							}),
							" — ",
							BUSINESS.hoursSummary
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-muted",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-semibold text-fg",
								children: "Studio"
							}),
							" — ",
							BUSINESS.street,
							", ",
							BUSINESS.postalCode
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-muted",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-semibold text-fg",
							children: "Private appointments"
						}), " — one vehicle at a time."]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-muted",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-semibold text-fg",
								children: "Direct line"
							}),
							" —",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								className: "font-semibold text-primary",
								href: BUSINESS.phoneTel,
								children: BUSINESS.phoneDisplay
							})
						]
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CommunityPledge, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Services" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col justify-between gap-6 md:flex-row md:items-end",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "max-w-xl font-display text-3xl md:text-4xl",
					children: "Auto detailing services in San Antonio, TX"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/services",
					className: "text-sm font-semibold text-primary",
					children: "View all services"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
				children: SERVICES.map((service) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServiceCard, { ...service }, service.slug))
			})
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			tone: "surface",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid items-center gap-10 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Photo, {
					src: IMAGES.suvInterior.src,
					alt: IMAGES.suvInterior.alt,
					className: "aspect-3/2 rounded-3xl"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Local detailing" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl md:text-4xl",
						children: "Your San Antonio based detailing studio"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 text-muted",
						children: "Southern Auto Detailers is San Antonio based, owned by Robert Romero Jr. — an Alamo Heights graduate and IDA-certified detailer. Looking for professional auto detailing in San Antonio, TX, or car detailing near 78233? We provide private, appointment-based care for daily commuters, work trucks, family SUVs, and enthusiast cars."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 text-muted",
						children: [
							"Visit the studio at ",
							BUSINESS.addressLine,
							". Hours: ",
							BUSINESS.hoursSummary,
							". Drivers in",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/san-antonio-78233",
								className: "font-semibold text-primary",
								children: "78233 and Northeast San Antonio"
							}),
							" ",
							"can start with a call to ",
							BUSINESS.phoneDisplay,
							"."
						]
					})
				] })]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Why us" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "max-w-2xl font-display text-3xl md:text-4xl",
				children: "Why San Antonio Drivers Choose Southern Auto Detailers"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
				children: REASONS.map((reason, index) => {
					const Icon = reasonIcons[index] ?? Sparkles;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "rounded-3xl border border-border bg-surface p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-5 text-primary" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-4 font-display text-xl",
								children: reason.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-muted",
								children: reason.body
							})
						]
					}, reason.title);
				})
			})
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			tone: "surface",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Process" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl md:text-4xl",
					children: "How a detail gets booked"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "mt-10 grid gap-4 md:grid-cols-4",
					children: STEPS.map((step) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "rounded-3xl border border-border bg-bg p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-sm text-primary",
								children: step.n
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-3 font-display text-lg",
								children: step.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted",
								children: step.body
							})
						]
					}, step.n))
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Finish" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "font-display text-3xl md:text-4xl",
			children: "The finish we aim for"
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-10 grid grid-cols-2 gap-3 md:grid-cols-4",
			children: GALLERY.slice(0, 4).map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Photo, {
				src: item.src,
				alt: item.alt,
				className: "aspect-3/2 rounded-2xl"
			}, item.src))
		})] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			tone: "surface",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-12 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Questions" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl md:text-4xl",
						children: "Auto detailing FAQs"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 text-muted",
						children: [
							"Timing, pets, stains, and how to prepare — then call ",
							BUSINESS.phoneDisplay,
							" if you want a recommendation for your specific vehicle."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaqList, {})
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl",
						children: "Book Auto Detailing in San Antonio"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 text-muted",
						children: [
							"Call Southern Auto Detailers at ",
							BUSINESS.phoneDisplay,
							" to discuss your vehicle, request a quote, or schedule your next detail."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 text-sm text-muted",
						children: [
							"A 20% non-refundable deposit of the quoted total secures the slot. Phone:",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								className: "font-semibold text-primary",
								href: BUSINESS.phoneTel,
								children: BUSINESS.phoneDisplay
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							BUSINESS.addressLine
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookingForm, { className: "mt-8" })
				] })]
			})
		})
	] });
}
//#endregion
export { Home as component };
