import { AREAS, BUSINESS, SERVICES, SITE_ORIGIN } from "@/lib/site";

const DESCRIPTION =
  "Southern Auto Detailers provides professional interior and exterior auto detailing in San Antonio, TX. Call (210) 201-4847 to book your vehicle detail today.";

function absoluteUrl(path: string) {
  if (!SITE_ORIGIN) return undefined;
  return `${SITE_ORIGIN.replace(/\/$/, "")}${path.startsWith("/") ? path : `/${path}`}`;
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

function areaServed() {
  return AREAS.map((area) =>
    area.name.includes("Northeast")
      ? { "@type": "Place" as const, name: area.name }
      : { "@type": "City" as const, name: area.name },
  );
}

export function businessId() {
  return SITE_ORIGIN ? `${SITE_ORIGIN.replace(/\/$/, "")}/#localbusiness` : "#localbusiness";
}

export function localBusinessJsonLd() {
  const url = SITE_ORIGIN || undefined;
  const images = [
    absoluteUrl("/og.jpg"),
    absoluteUrl("/logo.png"),
    absoluteUrl("/images/auto-detailing-san-antonio-tx-southern-auto-detailers.webp"),
  ].filter((value): value is string => Boolean(value));
  const logo = absoluteUrl("/logo.png");

  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "AutoWash"],
    "@id": businessId(),
    name: BUSINESS.name,
    telephone: BUSINESS.phoneE164,
    email: BUSINESS.email,
    description: DESCRIPTION,
    url: url ?? "https://southernautodetailers.com",
    image: images.length
      ? images
      : ["https://southernautodetailers.com/og.jpg"],
    logo: logo ?? "https://southernautodetailers.com/logo.png",
    address: postalAddress(),
    founder: {
      "@type": "Person",
      name: BUSINESS.founder,
      jobTitle: "Owner and IDA-certified detailer",
      homeLocation: {
        "@type": "Place",
        name: "Alamo Heights, Texas",
      },
      alumniOf: {
        "@type": "EducationalOrganization",
        name: "Alamo Heights",
      },
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "07:00",
        closes: "23:00",
      },
    ],
    areaServed: [
      ...areaServed(),
      {
        "@type": "Place",
        name: "San Antonio 78233",
        address: {
          "@type": "PostalAddress",
          postalCode: "78233",
          addressLocality: "San Antonio",
          addressRegion: "TX",
          addressCountry: "US",
        },
      },
    ],
    knowsAbout: [
      "Auto detailing",
      "Car detailing",
      "Interior auto detailing",
      "Exterior auto detailing",
      "Full auto detailing",
      "Paint correction",
      "Swirl mark removal",
      "Ceramic coating",
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
        dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "07:00",
        closes: "23:00",
      },
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
          areaServed: { "@type": "City", name: "San Antonio" },
          provider: { "@id": businessId() },
        },
      })),
    },
  };
}

export function serviceJsonLd(name: string, description: string, path?: string) {
  const url = path ? absoluteUrl(path) : undefined;
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    ...(url ? { url } : {}),
    provider: {
      "@type": ["LocalBusiness", "AutoWash"],
      "@id": businessId(),
      name: BUSINESS.name,
      telephone: BUSINESS.phoneE164,
      address: postalAddress(),
    },
    areaServed: { "@type": "City", name: "San Antonio" },
    serviceType: name,
  };
}

export function faqJsonLd(items: readonly { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

export function pageHead(title: string, description: string, jsonLd?: object | object[]) {
  const extra = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];
  return {
    meta: [
      { title },
      { name: "description", content: description },
    ],
    scripts: extra.map((data) => ({
      type: "application/ld+json",
      children: JSON.stringify(data),
    })),
  };
}
