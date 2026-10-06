import { BUSINESS, SITE_ORIGIN } from "@/lib/site";

const ORIGIN = (SITE_ORIGIN || "https://southernautodetailers.com").replace(/\/$/, "");

export type Crumb = { name: string; to: string };

type PageKind = "WebPage" | "ContactPage" | "AboutPage" | "CollectionPage";

const SERVICE_PAGES = [
  {
    path: "/full-detailing",
    name: "Full Auto Detailing",
    serviceType: "Full Auto Detailing",
    description:
      "In-shop full auto detailing that combines interior and exterior vehicle care in San Antonio, Texas.",
  },
  {
    path: "/interior-detailing",
    name: "Interior Detailing",
    serviceType: "Interior Auto Detailing",
    description:
      "Professional in-shop interior vehicle detailing at Southern Auto Detailers in San Antonio, Texas.",
  },
  {
    path: "/exterior-detailing",
    name: "Exterior Detailing",
    serviceType: "Exterior Auto Detailing",
    description:
      "Professional in-shop exterior auto detailing at Southern Auto Detailers in San Antonio, Texas.",
  },
  {
    path: "/ceramic-coating",
    name: "Ceramic Coating",
    serviceType: "Ceramic Coating",
    description:
      "Professional ceramic coating service performed at the Southern Auto Detailers shop in San Antonio, Texas.",
  },
  {
    path: "/paint-correction",
    name: "Paint Correction",
    serviceType: "Paint Correction",
    description:
      "Professional in-shop paint correction and polishing service for vehicles in San Antonio, Texas.",
  },
] as const;

const SIMPLE: Record<string, string> = {
  "/services": "Services",
  "/pricing": "Pricing",
  "/about": "About",
  "/contact": "Contact",
  "/blog": "Blog",
  "/service-areas": "Service Areas",
  "/privacy": "Privacy Policy",
  "/terms": "Terms & Conditions",
  "/refund-policy": "Refund Policy",
};

const PLACES: Record<string, { label: string; spatial: Record<string, unknown> }> = {
  "/san-antonio-78233": {
    label: "78233",
    spatial: {
      "@type": "PostalCode",
      postalCode: "78233",
      address: {
        "@type": "PostalAddress",
        addressLocality: "San Antonio",
        addressRegion: "TX",
        addressCountry: "US",
      },
    },
  },
  "/royal-ridge": { label: "Royal Ridge", spatial: { "@type": "Place", name: "Royal Ridge, San Antonio, Texas" } },
  "/rolling-oaks": {
    label: "Rolling Oaks Mall",
    spatial: { "@type": "Place", name: "Rolling Oaks Mall, San Antonio, Texas" },
  },
  "/fort-sam-houston": {
    label: "Fort Sam Houston",
    spatial: { "@type": "Place", name: "Fort Sam Houston, San Antonio, Texas" },
  },
  "/oak-meadow": { label: "Oak Meadow", spatial: { "@type": "Place", name: "Oak Meadow, San Antonio, Texas" } },
  "/live-oak": { label: "Live Oak", spatial: { "@type": "City", name: "Live Oak" } },
  "/universal-city": { label: "Universal City", spatial: { "@type": "City", name: "Universal City" } },
  "/converse": { label: "Converse", spatial: { "@type": "City", name: "Converse" } },
  "/windcrest": { label: "Windcrest", spatial: { "@type": "City", name: "Windcrest" } },
  "/schertz": { label: "Schertz", spatial: { "@type": "City", name: "Schertz" } },
};

export function absoluteUrl(path: string) {
  if (path === "/") return `${ORIGIN}/`;
  return `${ORIGIN}${path.startsWith("/") ? path : `/${path}`}`;
}

export function businessId() {
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
    "@type": "PostalAddress" as const,
    streetAddress: BUSINESS.street,
    addressLocality: BUSINESS.city,
    addressRegion: BUSINESS.region,
    postalCode: BUSINESS.postalCode,
    addressCountry: BUSINESS.country,
  };
}

function script(data: object) {
  return { type: "application/ld+json", children: JSON.stringify(data) };
}

/** Shop entity only. No hours, email, logo, geo, prices, or review fields. */
export function siteGraphJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AutoWash",
        "@id": businessId(),
        name: BUSINESS.name,
        description:
          "Southern Auto Detailers provides professional in-shop auto detailing, ceramic coating, paint correction, interior detailing, exterior detailing, and full detailing services in San Antonio, Texas.",
        url: `${ORIGIN}/`,
        telephone: BUSINESS.phoneE164,
        address: postalAddress(),
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "In-Shop Auto Detailing Services",
          itemListElement: SERVICE_PAGES.map((service) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              "@id": `${absoluteUrl(service.path)}#service`,
              name: service.name,
            },
          })),
        },
      },
      {
        "@type": "Organization",
        "@id": organizationId(),
        name: BUSINESS.name,
        url: `${ORIGIN}/`,
        telephone: BUSINESS.phoneE164,
        address: postalAddress(),
      },
    ],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": websiteId(),
    url: `${ORIGIN}/`,
    name: BUSINESS.name,
    publisher: { "@id": organizationId() },
    inLanguage: "en-US",
  };
}

export function crumbsFor(path: string, current?: string): Crumb[] {
  const home: Crumb = { name: "Home", to: "/" };
  if (path === "/") return [];
  const service = SERVICE_PAGES.find((item) => item.path === path);
  if (service) {
    return [home, { name: "Services", to: "/services" }, { name: service.name, to: path }];
  }
  if (path === "/ceramic-coating/cost" || path === "/ceramic-coating/process") {
    return [
      home,
      { name: "Services", to: "/services" },
      { name: "Ceramic Coating", to: "/ceramic-coating" },
      { name: path.endsWith("/cost") ? "Cost" : "Process", to: path },
    ];
  }
  if (path.startsWith("/blog/") && path !== "/blog") {
    return [home, { name: "Blog", to: "/blog" }, { name: current || "Article", to: path }];
  }
  const place = PLACES[path];
  if (place) {
    return [home, { name: "Service Areas", to: "/service-areas" }, { name: place.label, to: path }];
  }
  const simple = SIMPLE[path];
  if (simple) return [home, { name: simple, to: path }];
  return [home, { name: current || "Page", to: path }];
}

function pageTypeFor(path: string): PageKind {
  if (path === "/contact") return "ContactPage";
  if (path === "/about") return "AboutPage";
  if (path === "/services" || path === "/blog" || path === "/service-areas") return "CollectionPage";
  return "WebPage";
}

export function webPageJsonLd(path: string, name: string, description: string) {
  const url = absoluteUrl(path);
  const service = SERVICE_PAGES.find((item) => item.path === path);
  const place = PLACES[path];
  const ceramicChild = path === "/ceramic-coating/cost" || path === "/ceramic-coating/process";
  const mainEntity = service
    ? `${url}#service`
    : ceramicChild
      ? `${absoluteUrl("/ceramic-coating")}#service`
      : businessId();

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
    ...(place ? { spatialCoverage: place.spatial } : {}),
    inLanguage: "en-US",
  };
}

export function breadcrumbJsonLd(path: string, current?: string) {
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
      item: absoluteUrl(crumb.to),
    })),
  };
}

export function serviceJsonLd(path: string) {
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
    areaServed: { "@type": "City", name: "San Antonio" },
    availableChannel: {
      "@type": "ServiceChannel",
      serviceLocation: { "@id": businessId() },
    },
  };
}

export function faqJsonLd(path: string, items: readonly { q: string; a: string }[]) {
  if (!items.length) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${absoluteUrl(path)}#faq`,
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

export function articleJsonLd(path: string, headline: string, description: string) {
  const url = absoluteUrl(path);
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    mainEntityOfPage: { "@type": "WebPage", "@id": `${url}#webpage` },
    headline,
    description,
    author: { "@type": "Organization", "@id": organizationId() },
    publisher: { "@id": organizationId() },
    inLanguage: "en-US",
  };
}

function blocksFor(
  path: string,
  name: string,
  description: string,
  extras: Array<object | null | undefined> = [],
) {
  const crumb = breadcrumbJsonLd(path, name);
  return [webPageJsonLd(path, name, description), crumb, ...extras].filter(
    (block): block is object => Boolean(block),
  );
}

export function pageHead(
  title: string,
  description: string,
  path: string,
  extras: Array<object | null | undefined> = [],
  pageName?: string,
) {
  return {
    meta: [
      { title },
      { name: "description", content: description },
    ],
    scripts: blocksFor(path, pageName || title, description, extras).map(script),
  };
}

export function contentHead(page: {
  title: string;
  description: string;
  path: string;
  h1: string;
  kind: "service" | "place" | "article" | "page";
  faqs: readonly { q: string; a: string }[];
}) {
  const extras: Array<object | null> = [faqJsonLd(page.path, page.faqs)];
  if (page.kind === "service") extras.unshift(serviceJsonLd(page.path));
  if (page.kind === "article") extras.unshift(articleJsonLd(page.path, page.h1, page.description));
  const crumbName = page.h1;
  return pageHead(page.title, page.description, page.path, extras, crumbName);
}
