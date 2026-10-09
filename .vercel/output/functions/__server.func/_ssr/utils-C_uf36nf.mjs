import { n as BUSINESS, o as HOURS, s as IMAGES } from "./site-DZY_i1CI.mjs";
import { n as clsx } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/seo-DfNIBBMq.js
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
		serviceType: "Interior Auto Detailing",
		description: "Professional in-shop interior vehicle detailing at Southern Auto Detailers in San Antonio, Texas."
	},
	{
		path: "/exterior-detailing",
		name: "Exterior Detailing",
		serviceType: "Exterior Auto Detailing",
		description: "Professional in-shop exterior auto detailing at Southern Auto Detailers in San Antonio, Texas."
	},
	{
		path: "/ceramic-coating",
		name: "Ceramic Coating",
		serviceType: "Ceramic Coating",
		description: "Professional ceramic coating service performed at the Southern Auto Detailers shop in San Antonio, Texas."
	},
	{
		path: "/paint-correction",
		name: "Paint Correction",
		serviceType: "Paint Correction",
		description: "Professional in-shop paint correction and polishing service for vehicles in San Antonio, Texas."
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
function photoUrls() {
	return Object.values(IMAGES).map((image) => absoluteUrl(image.src));
}
/** Shop entity. Hours, email, logo, photos, map, and coordinates are the confirmed studio facts. */
function siteGraphJsonLd() {
	const logo = absoluteUrl("/logo.png");
	const photos = photoUrls();
	const placeFacts = {
		name: BUSINESS.name,
		url: `${ORIGIN}/`,
		telephone: BUSINESS.phoneE164,
		email: BUSINESS.email,
		logo,
		image: photos,
		address: postalAddress(),
		hasMap: BUSINESS.mapsUrl,
		sameAs: [BUSINESS.googleBusinessUrl],
		foundingDate: BUSINESS.foundingDate,
		geo: {
			"@type": "GeoCoordinates",
			latitude: BUSINESS.latitude,
			longitude: BUSINESS.longitude
		},
		openingHoursSpecification: openingHoursSpecification()
	};
	return {
		"@context": "https://schema.org",
		"@graph": [{
			"@type": "AutoWash",
			"@id": businessId(),
			description: "Southern Auto Detailers provides professional in-shop auto detailing, ceramic coating, paint correction, interior detailing, exterior detailing, and full detailing services in San Antonio, Texas.",
			...placeFacts,
			hasOfferCatalog: {
				"@type": "OfferCatalog",
				name: "In-Shop Auto Detailing Services",
				itemListElement: SERVICE_PAGES.map((service) => ({
					"@type": "Offer",
					itemOffered: {
						"@type": "Service",
						"@id": `${absoluteUrl(service.path)}#service`,
						name: service.name
					}
				}))
			}
		}, {
			"@type": "Organization",
			"@id": organizationId(),
			...placeFacts
		}]
	};
}
function websiteJsonLd() {
	return {
		"@context": "https://schema.org",
		"@type": "WebSite",
		"@id": websiteId(),
		url: `${ORIGIN}/`,
		name: BUSINESS.name,
		publisher: { "@id": organizationId() },
		inLanguage: "en-US"
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
function webPageJsonLd(path, name, description, image) {
	const url = absoluteUrl(path);
	const service = SERVICE_PAGES.find((item) => item.path === path);
	const place = PLACES[path];
	const ceramicChild = path === "/ceramic-coating/cost" || path === "/ceramic-coating/process";
	const mainEntity = service ? `${url}#service` : ceramicChild ? `${absoluteUrl("/ceramic-coating")}#service` : businessId();
	return {
		"@context": "https://schema.org",
		"@type": pageTypeFor(path),
		"@id": `${url}#webpage`,
		url,
		name,
		description,
		isPartOf: { "@id": websiteId() },
		about: { "@id": ceramicChild ? `${absoluteUrl("/ceramic-coating")}#service` : businessId() },
		mainEntity: { "@id": mainEntity },
		...place ? { spatialCoverage: place.spatial } : {},
		...image ? { primaryImageOfPage: {
			"@type": "ImageObject",
			contentUrl: absoluteUrl(image.src),
			caption: image.alt
		} } : {},
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
		serviceType: service.serviceType,
		areaServed: {
			"@type": "City",
			name: "San Antonio"
		},
		availableChannel: {
			"@type": "ServiceChannel",
			serviceLocation: { "@id": businessId() }
		},
		...image ? { image: {
			"@type": "ImageObject",
			contentUrl: absoluteUrl(image.src),
			caption: image.alt
		} } : {}
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
function articleJsonLd(path, headline, description, image, published) {
	const url = absoluteUrl(path);
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
		...image ? { image: [{
			"@type": "ImageObject",
			"@id": `${absoluteUrl(image.src)}#image`,
			contentUrl: absoluteUrl(image.src),
			url: absoluteUrl(image.src),
			caption: image.alt
		}] } : {},
		author: {
			"@type": "Organization",
			"@id": organizationId()
		},
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
function pageHead(title, description, path, extras = [], pageName, image) {
	return {
		meta: [{ title }, {
			name: "description",
			content: description
		}],
		scripts: blocksFor(path, pageName || title, description, extras, image).map(script)
	};
}
function contentHead(page) {
	const extras = [faqJsonLd(page.path, page.faqs)];
	if (page.kind === "service") extras.unshift(serviceJsonLd(page.path, page.image));
	if (page.kind === "article") extras.unshift(articleJsonLd(page.path, page.h1, page.description, page.image, page.published));
	return pageHead(page.title, page.description, page.path, extras, page.h1, page.image);
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/utils-C_uf36nf.js
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
//#endregion
export { faqJsonLd as a, websiteJsonLd as c, crumbsFor as i, absoluteUrl as n, pageHead as o, contentHead as r, siteGraphJsonLd as s, cn as t };
