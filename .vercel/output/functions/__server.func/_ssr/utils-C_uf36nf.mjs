import { c as HOURS, l as IMAGES, n as BUSINESS } from "./site-C-sVfkRh.mjs";
import { n as clsx } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/seo-DhSvL_LQ.js
var ORIGIN = "https://southernautodetailers.com".replace(/\/$/, "");
var SERVICE_PAGES = [
	{
		path: "/full-detailing",
		name: "Full Auto Detailing",
		serviceType: "Full Auto Detailing",
		description: "In-shop full auto detailing that combines interior and exterior vehicle care in San Antonio, Texas."
	},
	{
		path: "/interior-detailing",
		name: "Interior Detailing",
		serviceType: "Interior auto detailing",
		description: "In-shop interior detailing by appointment, including carpets and mats, material-appropriate seat cleaning, consoles, vents, door panels, and interior glass. Stains and odors are not guaranteed."
	},
	{
		path: "/exterior-detailing",
		name: "Exterior Detailing",
		serviceType: "Exterior Auto Detailing",
		description: "Safe washing, decontamination, wheel cleaning, gloss enhancement, and protection at the San Antonio studio."
	},
	{
		path: "/ceramic-coating",
		name: "Ceramic Coating",
		serviceType: "Ceramic Coating",
		description: "Durable paint protection and easier maintenance for a longer-lasting shine. Installed in the San Antonio studio after prep."
	},
	{
		path: "/paint-correction",
		name: "Paint Correction",
		serviceType: "Paint Correction",
		description: "Improve paint clarity by reducing light swirls, haze, and surface imperfections. In-shop only, in San Antonio."
	}
];
var SIMPLE = {
	"/services": "Services",
	"/pricing": "Pricing",
	"/about": "About",
	"/contact": "Contact",
	"/blog": "Blog",
	"/service-areas": "Service Areas",
	"/privacy": "Privacy Policy",
	"/terms": "Terms & Conditions",
	"/refund-policy": "Refund Policy"
};
var PLACES = {
	"/san-antonio-78233": {
		label: "78233",
		spatial: {
			"@type": "PostalCode",
			postalCode: "78233",
			address: {
				"@type": "PostalAddress",
				addressLocality: "San Antonio",
				addressRegion: "TX",
				addressCountry: "US"
			}
		}
	},
	"/royal-ridge": {
		label: "Royal Ridge",
		spatial: {
			"@type": "Place",
			name: "Royal Ridge, San Antonio, Texas"
		}
	},
	"/rolling-oaks": {
		label: "Rolling Oaks Mall",
		spatial: {
			"@type": "Place",
			name: "Rolling Oaks Mall, San Antonio, Texas"
		}
	},
	"/fort-sam-houston": {
		label: "Fort Sam Houston",
		spatial: {
			"@type": "Place",
			name: "Fort Sam Houston, San Antonio, Texas"
		}
	},
	"/oak-meadow": {
		label: "Oak Meadow",
		spatial: {
			"@type": "Place",
			name: "Oak Meadow, San Antonio, Texas"
		}
	},
	"/live-oak": {
		label: "Live Oak",
		spatial: {
			"@type": "City",
			name: "Live Oak"
		}
	},
	"/universal-city": {
		label: "Universal City",
		spatial: {
			"@type": "City",
			name: "Universal City"
		}
	},
	"/converse": {
		label: "Converse",
		spatial: {
			"@type": "City",
			name: "Converse"
		}
	},
	"/windcrest": {
		label: "Windcrest",
		spatial: {
			"@type": "City",
			name: "Windcrest"
		}
	},
	"/schertz": {
		label: "Schertz",
		spatial: {
			"@type": "City",
			name: "Schertz"
		}
	}
};
function absoluteUrl(path) {
	if (path === "/") return `${ORIGIN}/`;
	return `${ORIGIN}${path.startsWith("/") ? path : `/${path}`}`;
}
function businessId() {
	return `${ORIGIN}/#business`;
}
function organizationId() {
	return `${ORIGIN}/#organization`;
}
function websiteId() {
	return `${ORIGIN}/#website`;
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
function authorId() {
	return `${ORIGIN}/#robert-romero-jr`;
}
function authorPerson() {
	return {
		"@type": "Person",
		"@id": authorId(),
		name: BUSINESS.founder,
		url: absoluteUrl("/about")
	};
}
function mediaObject(image) {
	const fileUrl = absoluteUrl(image.src);
	const name = decodeURIComponent(fileUrl.split("/").pop() || image.alt);
	const encodingFormat = image.src.endsWith(".png") ? "image/png" : image.src.endsWith(".jpg") || image.src.endsWith(".jpeg") ? "image/jpeg" : "image/webp";
	return {
		"@type": "ImageObject",
		"@id": `${fileUrl}#image`,
		name,
		encodingFormat,
		description: image.caption || image.alt,
		caption: image.caption || image.alt,
		contentUrl: fileUrl,
		url: fileUrl,
		...image.width && image.height ? {
			width: image.width,
			height: image.height
		} : {}
	};
}
function script(data) {
	return {
		type: "application/ld+json",
		children: JSON.stringify(data)
	};
}
function to24(value) {
	const match = value.trim().match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i);
	if (!match) return null;
	let hour = Number(match[1]);
	const minute = match[2];
	const meridiem = match[3].toUpperCase();
	if (meridiem === "PM" && hour !== 12) hour += 12;
	if (meridiem === "AM" && hour === 12) hour = 0;
	return `${String(hour).padStart(2, "0")}:${minute}`;
}
function openingHoursSpecification() {
	return HOURS.flatMap((row) => {
		if (row.time === "Closed") return [];
		const [opensRaw, closesRaw] = row.time.split(/\s+[–-]\s+/);
		const opens = to24(opensRaw ?? "");
		const closes = to24(closesRaw ?? "");
		if (!opens || !closes) return [];
		return [{
			"@type": "OpeningHoursSpecification",
			dayOfWeek: row.day,
			opens,
			closes
		}];
	});
}
function studioPlace() {
	return {
		"@type": "Place",
		"@id": `${ORIGIN}/#studio`,
		name: `${BUSINESS.name} studio`,
		address: postalAddress(),
		hasMap: BUSINESS.mapsUrl,
		geo: {
			"@type": "GeoCoordinates",
			latitude: BUSINESS.latitude,
			longitude: BUSINESS.longitude
		}
	};
}
/** Shop entity. Hours, email, logo, map, and coordinates are the confirmed studio facts. */
function siteGraphJsonLd() {
	const place = studioPlace();
	return {
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": "WebSite",
				"@id": websiteId(),
				url: `${ORIGIN}/`,
				name: BUSINESS.name,
				publisher: { "@id": businessId() },
				inLanguage: "en-US"
			},
			{
				"@type": ["LocalBusiness", "AutomotiveBusiness"],
				"@id": businessId(),
				name: BUSINESS.name,
				description: "Southern Auto Detailers provides professional in-shop auto detailing, ceramic coating, paint correction, interior detailing, exterior detailing, and full detailing services in San Antonio, Texas.",
				url: `${ORIGIN}/`,
				telephone: BUSINESS.phoneE164,
				email: BUSINESS.email,
				logo: absoluteUrl("/logo.png"),
				image: [
					absoluteUrl(IMAGES.hero.src),
					absoluteUrl(IMAGES.interior.src),
					absoluteUrl(IMAGES.exterior.src)
				],
				address: postalAddress(),
				sameAs: [BUSINESS.googleBusinessUrl],
				foundingDate: BUSINESS.foundingDate,
				location: place,
				openingHoursSpecification: openingHoursSpecification(),
				areaServed: {
					"@type": "City",
					name: "San Antonio"
				}
			},
			{
				"@type": "LocalBusiness",
				"@id": organizationId(),
				name: BUSINESS.name,
				url: `${ORIGIN}/`,
				telephone: BUSINESS.phoneE164,
				address: postalAddress(),
				location: { "@id": place["@id"] },
				founder: { "@id": authorId() }
			},
			authorPerson()
		]
	};
}
function crumbsFor(path, current) {
	const home = {
		name: "Home",
		to: "/"
	};
	if (path === "/") return [];
	const service = SERVICE_PAGES.find((item) => item.path === path);
	if (service) return [
		home,
		{
			name: "Services",
			to: "/services"
		},
		{
			name: service.name,
			to: path
		}
	];
	if (path === "/ceramic-coating/cost" || path === "/ceramic-coating/process") return [
		home,
		{
			name: "Services",
			to: "/services"
		},
		{
			name: "Ceramic Coating",
			to: "/ceramic-coating"
		},
		{
			name: path.endsWith("/cost") ? "Cost" : "Process",
			to: path
		}
	];
	if (path.startsWith("/blog/") && path !== "/blog") return [
		home,
		{
			name: "Blog",
			to: "/blog"
		},
		{
			name: current || "Article",
			to: path
		}
	];
	const place = PLACES[path];
	if (place) return [
		home,
		{
			name: "Service Areas",
			to: "/service-areas"
		},
		{
			name: place.label,
			to: path
		}
	];
	const simple = SIMPLE[path];
	if (simple) return [home, {
		name: simple,
		to: path
	}];
	return [home, {
		name: current || "Page",
		to: path
	}];
}
function pageTypeFor(path) {
	if (path === "/contact") return "ContactPage";
	if (path === "/about") return "AboutPage";
	if (path === "/services" || path === "/blog" || path === "/service-areas") return "CollectionPage";
	return "WebPage";
}
var ARTICLE_ABOUT = {
	"/blog/ceramic-coating-vs-wax": "/ceramic-coating",
	"/blog/how-to-wash-ceramic-coated-car": "/ceramic-coating",
	"/blog/washing-a-ceramic-coated-car": "/ceramic-coating",
	"/blog/what-is-paint-correction": "/paint-correction",
	"/blog/swirl-marks-from-car-washes": "/paint-correction",
	"/blog/new-car-paint-correction-before-ceramic-coating": "/paint-correction",
	"/blog/paint-correction-before-ceramic-coating": "/paint-correction",
	"/blog/water-spots-on-car-paint": "/exterior-detailing",
	"/blog/hard-water-spots-san-antonio": "/exterior-detailing",
	"/blog/ceramic-coating-does-not-hide-swirls": "/ceramic-coating",
	"/blog/when-a-scratch-is-too-deep-to-polish": "/paint-correction",
	"/blog/iron-fallout-on-car-paint": "/exterior-detailing",
	"/blog/car-screens-buttons-and-glossy-trim": "/interior-detailing",
	"/blog/floor-mats-and-carpets": "/interior-detailing",
	"/blog/pet-hair-interior-detailing": "/interior-detailing",
	"/blog/leather-conditioning-san-antonio": "/interior-detailing",
	"/blog/sun-damaged-dashboard": "/interior-detailing",
	"/blog/car-seat-interior-detailing": "/interior-detailing",
	"/blog/interior-stain-limits": "/interior-detailing",
	"/blog/what-a-full-detail-includes": "/full-detailing",
	"/blog/what-to-tell-a-detailer-before-you-book": "/full-detailing",
	"/blog/what-changes-a-paint-correction-quote": "/paint-correction",
	"/blog/polishing-vs-waxing": "/paint-correction",
	"/blog/how-long-does-paint-correction-take": "/paint-correction",
	"/blog/how-to-choose-a-paint-correction-detailer": "/paint-correction",
	"/blog/paint-correction-aftercare": "/paint-correction"
};
function webPageJsonLd(path, name, description, image) {
	const url = absoluteUrl(path);
	const service = SERVICE_PAGES.find((item) => item.path === path);
	const place = PLACES[path];
	const ceramicChild = path === "/ceramic-coating/cost" || path === "/ceramic-coating/process";
	const articleService = ARTICLE_ABOUT[path];
	const aboutId = ceramicChild ? `${absoluteUrl("/ceramic-coating")}#service` : articleService ? `${absoluteUrl(articleService)}#service` : businessId();
	const isArticle = path.startsWith("/blog/") && path !== "/blog";
	const mainEntity = service ? `${url}#service` : ceramicChild ? `${absoluteUrl("/ceramic-coating")}#service` : isArticle ? `${url}#article` : businessId();
	const hasCrumb = crumbsFor(path, name).length >= 2;
	return {
		"@context": "https://schema.org",
		"@type": pageTypeFor(path),
		"@id": `${url}#webpage`,
		url,
		name,
		description,
		isPartOf: { "@id": websiteId() },
		about: { "@id": aboutId },
		mainEntity: { "@id": mainEntity },
		publisher: { "@id": businessId() },
		...hasCrumb ? { breadcrumb: { "@id": `${url}#breadcrumb` } } : {},
		...place ? { spatialCoverage: place.spatial } : {},
		...image ? { primaryImageOfPage: mediaObject(image) } : {},
		inLanguage: "en-US"
	};
}
function breadcrumbJsonLd(path, current) {
	const crumbs = crumbsFor(path, current);
	if (crumbs.length < 2) return null;
	return {
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		"@id": `${absoluteUrl(path)}#breadcrumb`,
		itemListElement: crumbs.map((crumb, index) => ({
			"@type": "ListItem",
			position: index + 1,
			name: crumb.name,
			item: absoluteUrl(crumb.to)
		}))
	};
}
function serviceJsonLd(path, image) {
	const service = SERVICE_PAGES.find((item) => item.path === path);
	if (!service) return null;
	const url = absoluteUrl(service.path);
	return {
		"@context": "https://schema.org",
		"@type": "Service",
		"@id": `${url}#service`,
		name: service.name,
		description: service.description,
		url,
		provider: { "@id": businessId() },
		mainEntityOfPage: { "@id": `${url}#webpage` },
		serviceType: service.serviceType,
		areaServed: {
			"@type": "City",
			name: "San Antonio"
		},
		availableChannel: {
			"@type": "ServiceChannel",
			serviceLocation: { "@id": businessId() }
		},
		...image ? { image: mediaObject(image) } : {}
	};
}
function faqJsonLd(path, items) {
	if (!items.length) return null;
	return {
		"@context": "https://schema.org",
		"@type": "FAQPage",
		"@id": `${absoluteUrl(path)}#faq`,
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
function articleJsonLd(path, headline, description, images = [], published) {
	const url = absoluteUrl(path);
	const unique = images.filter((image, index) => images.findIndex((item) => item.src === image.src) === index);
	return {
		"@context": "https://schema.org",
		"@type": "BlogPosting",
		"@id": `${url}#article`,
		mainEntityOfPage: {
			"@type": "WebPage",
			"@id": `${url}#webpage`
		},
		headline,
		description,
		...published ? {
			datePublished: published,
			dateModified: published
		} : {},
		...unique.length ? { image: unique.map((image) => mediaObject(image)) } : {},
		author: authorPerson(),
		publisher: { "@id": organizationId() },
		inLanguage: "en-US"
	};
}
function blocksFor(path, name, description, extras = [], image) {
	const crumb = breadcrumbJsonLd(path, name);
	return [
		webPageJsonLd(path, name, description, image),
		crumb,
		...extras
	].filter((block) => Boolean(block));
}
function pageHead(title, description, path, extras = [], pageName, image, options) {
	const blocks = blocksFor(path, pageName || title, description, extras, image);
	const scripts = options?.linkGraph ? [script({
		"@context": "https://schema.org",
		"@graph": blocks.map((block) => {
			const { "@context": _context, ...node } = block;
			return node;
		})
	})] : blocks.map(script);
	return {
		meta: [{ title }, {
			name: "description",
			content: description
		}],
		links: [{
			rel: "canonical",
			href: absoluteUrl(path)
		}],
		scripts
	};
}
function contentHead(page) {
	const images = [page.image, ...page.sections.flatMap((section) => section.figure ? [section.figure] : [])];
	const linkGraph = page.path === "/interior-detailing";
	const extras = linkGraph ? [] : [faqJsonLd(page.path, page.faqs)];
	if (page.kind === "service") extras.unshift(serviceJsonLd(page.path, page.image));
	if (page.kind === "article") extras.unshift(articleJsonLd(page.path, page.h1, page.description, images, page.published));
	return pageHead(page.title, page.description, page.path, extras, page.h1, page.image, { linkGraph });
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/utils-C_uf36nf.js
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
//#endregion
export { faqJsonLd as a, crumbsFor as i, absoluteUrl as n, pageHead as o, contentHead as r, siteGraphJsonLd as s, cn as t };
