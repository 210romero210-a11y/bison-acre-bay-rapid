import type { ContentImage, ContentPage } from "@/lib/content/types";
import { BUSINESS, HOURS, IMAGES, SITE_ORIGIN } from "@/lib/site";

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
      "Safe washing, decontamination, wheel cleaning, gloss enhancement, and protection at the San Antonio studio.",
  },
  {
    path: "/ceramic-coating",
    name: "Ceramic Coating",
    serviceType: "Ceramic Coating",
    description:
      "Durable paint protection and easier maintenance for a longer-lasting shine. Installed in the San Antonio studio after prep.",
  },
  {
    path: "/paint-correction",
    name: "Paint Correction",
    serviceType: "Paint Correction",
    description:
      "Improve paint clarity by reducing light swirls, haze, and surface imperfections. In-shop only, in San Antonio.",
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

function authorId() {
  return `${ORIGIN}/#robert-romero-jr`;
}

function authorPerson() {
  return {
    "@type": "Person" as const,
    "@id": authorId(),
    name: BUSINESS.founder,
    url: absoluteUrl("/about"),
  };
}

function mediaObject(image: ContentImage) {
  const fileUrl = absoluteUrl(image.src);
  const name = decodeURIComponent(fileUrl.split("/").pop() || image.alt);
  const encodingFormat = image.src.endsWith(".png")
    ? "image/png"
    : image.src.endsWith(".jpg") || image.src.endsWith(".jpeg")
      ? "image/jpeg"
      : "image/webp";
  return {
    "@type": "ImageObject" as const,
    "@id": `${fileUrl}#image`,
    name,
    encodingFormat,
    description: image.caption || image.alt,
    caption: image.caption || image.alt,
    contentUrl: fileUrl,
    url: fileUrl,
    ...(image.width && image.height ? { width: image.width, height: image.height } : {}),
  };
}

function script(data: object) {
  return { type: "application/ld+json", children: JSON.stringify(data) };
}

function to24(value: string) {
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
    return [
      {
        "@type": "OpeningHoursSpecification" as const,
        dayOfWeek: row.day,
        opens,
        closes,
      },
    ];
  });
}

function photoUrls() {
  return Object.values(IMAGES).map((image) => absoluteUrl(image.src));
}

/** Shop entity. Hours, email, logo, photos, map, and coordinates are the confirmed studio facts. */
export function siteGraphJsonLd() {
  const photos = photoUrls();
  const placeFacts = {
    name: BUSINESS.name,
    url: `${ORIGIN}/`,
    telephone: BUSINESS.phoneE164,
    email: BUSINESS.email,
    logo: mediaObject({ src: "/logo.png", alt: `${BUSINESS.name} logo` }),
    image: photos.map((src) => mediaObject({ src: src.replace(ORIGIN, ""), alt: BUSINESS.name })),
    address: postalAddress(),
    hasMap: BUSINESS.mapsUrl,
    sameAs: [BUSINESS.googleBusinessUrl],
    foundingDate: BUSINESS.foundingDate,
    geo: {
      "@type": "GeoCoordinates" as const,
      latitude: BUSINESS.latitude,
      longitude: BUSINESS.longitude,
    },
    openingHoursSpecification: openingHoursSpecification(),
  };

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AutoWash",
        "@id": businessId(),
        description:
          "Southern Auto Detailers provides professional in-shop auto detailing, ceramic coating, paint correction, interior detailing, exterior detailing, and full detailing services in San Antonio, Texas.",
        ...placeFacts,
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
        ...placeFacts,
        founder: { "@id": authorId() },
      },
      authorPerson(),
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

const ARTICLE_ABOUT: Record<string, string> = {
  "/blog/ceramic-coating-vs-wax": "/ceramic-coating",
  "/blog/how-to-wash-ceramic-coated-car": "/ceramic-coating",
  "/blog/washing-a-ceramic-coated-car": "/ceramic-coating",
  "/blog/what-is-paint-correction": "/paint-correction",
  "/blog/new-car-paint-correction-before-ceramic-coating": "/paint-correction",
  "/blog/paint-correction-before-ceramic-coating": "/paint-correction",
  "/blog/water-spots-on-car-paint": "/exterior-detailing",
  "/blog/hard-water-spots-san-antonio": "/exterior-detailing",
  "/blog/ceramic-coating-does-not-hide-swirls": "/ceramic-coating",
  "/blog/when-a-scratch-is-too-deep-to-polish": "/paint-correction",
  "/blog/iron-fallout-on-car-paint": "/exterior-detailing",
  "/blog/car-screens-buttons-and-glossy-trim": "/interior-detailing",
  "/blog/what-to-tell-a-detailer-before-you-book": "/full-detailing",
};

export function webPageJsonLd(
  path: string,
  name: string,
  description: string,
  image?: ContentImage,
) {
  const url = absoluteUrl(path);
  const service = SERVICE_PAGES.find((item) => item.path === path);
  const place = PLACES[path];
  const ceramicChild = path === "/ceramic-coating/cost" || path === "/ceramic-coating/process";
  const articleService = ARTICLE_ABOUT[path];
  const aboutId = ceramicChild
    ? `${absoluteUrl("/ceramic-coating")}#service`
    : articleService
      ? `${absoluteUrl(articleService)}#service`
      : businessId();
  const isArticle = path.startsWith("/blog/") && path !== "/blog";
  const mainEntity = service
    ? `${url}#service`
    : ceramicChild
      ? `${absoluteUrl("/ceramic-coating")}#service`
      : isArticle
        ? `${url}#article`
        : businessId();

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
    ...(place ? { spatialCoverage: place.spatial } : {}),
    ...(image
      ? {
          primaryImageOfPage: mediaObject(image),
        }
      : {}),
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

export function serviceJsonLd(path: string, image?: { src: string; alt: string }) {
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
    ...(image ? { image: mediaObject(image) } : {}),
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

export function articleJsonLd(
  path: string,
  headline: string,
  description: string,
  images: ContentImage[] = [],
  published?: string,
) {
  const url = absoluteUrl(path);
  const unique = images.filter(
    (image, index) => images.findIndex((item) => item.src === image.src) === index,
  );
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    mainEntityOfPage: { "@type": "WebPage", "@id": `${url}#webpage` },
    headline,
    description,
    ...(published ? { datePublished: published, dateModified: published } : {}),
    ...(unique.length ? { image: unique.map((image) => mediaObject(image)) } : {}),
    author: authorPerson(),
    publisher: { "@id": organizationId() },
    inLanguage: "en-US",
  };
}

function blocksFor(
  path: string,
  name: string,
  description: string,
  extras: Array<object | null | undefined> = [],
  image?: { src: string; alt: string },
) {
  const crumb = breadcrumbJsonLd(path, name);
  return [webPageJsonLd(path, name, description, image), crumb, ...extras].filter(
    (block): block is object => Boolean(block),
  );
}

export function pageHead(
  title: string,
  description: string,
  path: string,
  extras: Array<object | null | undefined> = [],
  pageName?: string,
  image?: { src: string; alt: string },
) {
  return {
    meta: [
      { title },
      { name: "description", content: description },
    ],
    links: [{ rel: "canonical", href: absoluteUrl(path) }],
    scripts: blocksFor(path, pageName || title, description, extras, image).map(script),
  };
}

export function contentHead(page: ContentPage) {
  const images: ContentImage[] = [
    page.image,
    ...page.sections.flatMap((section) => (section.figure ? [section.figure] : [])),
  ];
  const extras: Array<object | null> = [faqJsonLd(page.path, page.faqs)];
  if (page.kind === "service") extras.unshift(serviceJsonLd(page.path, page.image));
  if (page.kind === "article") {
    extras.unshift(articleJsonLd(page.path, page.h1, page.description, images, page.published));
  }
  return pageHead(page.title, page.description, page.path, extras, page.h1, page.image);
}
