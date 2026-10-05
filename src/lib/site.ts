export const BUSINESS = {
  name: "Southern Auto Detailers",
  phoneDisplay: "(210) 201-4847",
  phoneTel: "tel:+12102014847",
  phoneE164: "+1-210-201-4847",
  email: "contact@southernautodetailers.com",
  emailMailto: "mailto:contact@southernautodetailers.com",
  street: "11692 Bricken Circle",
  city: "San Antonio",
  region: "TX",
  postalCode: "78233",
  country: "US",
  addressLine: "11692 Bricken Circle, San Antonio, TX 78233",
  mapsUrl: "https://maps.google.com/?q=11692+Bricken+Circle,+San+Antonio,+TX+78233",
  mapsEmbed:
    "https://maps.google.com/maps?q=11692%20Bricken%20Circle%2C%20San%20Antonio%2C%20TX%2078233&z=15&output=embed",
  websiteDisplay: "southernautodetailers.com",
  servingLine: "San Antonio based · 11692 Bricken Circle, 78233",
  founder: "Robert Romero Jr.",
  founderHometown: "Alamo Heights",
  hoursSummary: "Tue–Sun 7 AM–11 PM · Monday closed",
} as const;

export const DEPOSIT = {
  percent: 20,
  title: "20% non-refundable deposit",
  blurb:
    "A 20% non-refundable deposit — 20% of the quoted total cost — is required to secure your booking slot. The remaining balance is due when the work is completed.",
} as const;

export const HOURS = [
  { day: "Monday", time: "Closed" },
  { day: "Tuesday", time: "7:00 AM – 11:00 PM" },
  { day: "Wednesday", time: "7:00 AM – 11:00 PM" },
  { day: "Thursday", time: "7:00 AM – 11:00 PM" },
  { day: "Friday", time: "7:00 AM – 11:00 PM" },
  { day: "Saturday", time: "7:00 AM – 11:00 PM" },
  { day: "Sunday", time: "7:00 AM – 11:00 PM" },
] as const;

export const JUNIOR_ACHIEVEMENT = {
  name: "Junior Achievement of South Texas",
  url: "https://www.jast.org",
  headline: "Transforming Vehicles & Young Lives Together",
  pledge: "10% of every sale goes to Junior Achievement of South Texas",
  support: "Supporting and shaping the future of San Antonio, TX.",
} as const;

export const SITE_ORIGIN: string = "https://southernautodetailers.com";

export const NAV = [
  { to: "/services", label: "Services" },
  { to: "/pricing", label: "Pricing" },
  { to: "/service-areas", label: "Service Areas" },
  { to: "/blog", label: "Blog" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export const SERVICE_NAV = [
  { to: "/interior-detailing", label: "Interior Detailing" },
  { to: "/exterior-detailing", label: "Exterior Detailing" },
  { to: "/full-detailing", label: "Full Detailing" },
  { to: "/paint-correction", label: "Paint Correction" },
  { to: "/ceramic-coating", label: "Ceramic Coating" },
] as const;

export const LEGAL_NAV = [
  { to: "/privacy", label: "Privacy Policy" },
  { to: "/terms", label: "Terms & Conditions" },
  { to: "/refund-policy", label: "Refund Policy" },
] as const;

export const IMAGES = {
  hero: {
    src: "/images/auto-detailing-san-antonio-tx-southern-auto-detailers.webp",
    alt: "Freshly detailed luxury sedan after auto detailing in San Antonio, TX by Southern Auto Detailers",
  },
  interior: {
    src: "/images/interior-car-detailing-san-antonio-tx-southern-auto-detailers.webp",
    alt: "Interior car detailing in San Antonio, TX — conditioned leather and a deep-cleaned cabin",
  },
  exterior: {
    src: "/images/exterior-car-detailing-san-antonio-tx-southern-auto-detailers.webp",
    alt: "Exterior car detailing hand wash with foam in San Antonio, TX",
  },
  paint: {
    src: "/images/paint-correction-san-antonio-tx-southern-auto-detailers.webp",
    alt: "Paint correction and swirl removal in San Antonio, TX",
  },
  ceramic: {
    src: "/images/ceramic-coating-san-antonio-tx-southern-auto-detailers.webp",
    alt: "Ceramic coating water beading on protected paint in San Antonio, TX",
  },
  truck: {
    src: "/images/truck-detailing-san-antonio-tx-southern-auto-detailers.webp",
    alt: "Truck detailing in San Antonio, TX by Southern Auto Detailers",
  },
  wheels: {
    src: "/images/wheel-detailing-san-antonio-tx-southern-auto-detailers.webp",
    alt: "Wheel and tire detailing in San Antonio, TX",
  },
  suvInterior: {
    src: "/images/family-suv-interior-detailing-san-antonio-tx.webp",
    alt: "Family SUV interior detailing in San Antonio, TX",
  },
  neglected: {
    src: "/images/neglected-paint-before-detail-san-antonio-tx.webp",
    alt: "Neglected San Antonio paint with dust, oxidation, and water spots before detailing",
  },
  coupe: {
    src: "/images/ceramic-coated-sports-car-san-antonio-tx.webp",
    alt: "Ceramic coated sports car with a high-gloss finish in San Antonio, TX",
  },
} as const;

export const SERVICES = [
  {
    slug: "interior-detailing",
    href: "/interior-detailing",
    title: "Interior Detailing",
    short:
      "Deep cleaning for seats, carpets, consoles, door panels, and hard-to-reach surfaces.",
    image: IMAGES.interior,
  },
  {
    slug: "exterior-detailing",
    href: "/exterior-detailing",
    title: "Exterior Detailing",
    short:
      "Safe washing, decontamination, wheel cleaning, gloss enhancement, and protection.",
    image: IMAGES.exterior,
  },
  {
    slug: "full-detail",
    href: "/full-detailing",
    title: "Full Detail Packages",
    short: "A complete car detail — interior and exterior reset in one appointment.",
    image: IMAGES.truck,
    highlight: "Most requested",
  },
  {
    slug: "paint-correction",
    href: "/paint-correction",
    title: "Paint Correction",
    short:
      "Improve paint clarity by reducing light swirls, haze, and surface imperfections.",
    image: IMAGES.paint,
  },
  {
    slug: "ceramic-coatings",
    href: "/ceramic-coating",
    title: "Ceramic Coatings",
    short:
      "Durable paint protection and easier maintenance for a longer-lasting shine.",
    image: IMAGES.ceramic,
  },
  {
    slug: "maintenance",
    href: "/services#maintenance",
    title: "Maintenance Details",
    short:
      "Recurring care to keep your vehicle consistently clean and protected.",
    image: IMAGES.wheels,
  },
] as const;

export const AREAS = [
  {
    name: "San Antonio",
    blurb:
      "South Texas heat, UV, oak pollen, and caliche dust wear on paint and interiors year-round. Professional auto detailing in San Antonio, TX covers daily drivers, work trucks, family SUVs, and enthusiast cars — matched to condition, not a rushed wash.",
  },
  {
    name: "Northeast San Antonio",
    blurb:
      "Drivers along I-35 and Loop 1604 pick up film from commute miles, construction dust, and summer storms. Northeast San Antonio auto detailing is a core focus — including the 78233 ZIP, ceramic coating in Northeast San Antonio, and interiors that actually get reset.",
  },
  {
    name: "Live Oak",
    blurb:
      "Looking for auto detailing near Live Oak TX? Neighborhood pollen, parking-lot dust, and highway film collect fast. We recommend interior, exterior, or full details based on how the cabin is used — kids, pets, and work gear included.",
  },
  {
    name: "Universal City",
    blurb:
      "Auto detailing near Universal City TX and the Randolph area puts real hours on cars and trucks. We tailor exterior decontamination and interior deep cleans for vehicles that sit outside or log frequent short trips.",
  },
  {
    name: "Converse",
    blurb:
      "Auto detailing near Converse TX is a fit for dust, water spots, and a tired cabin. Book a focused interior, a careful exterior, or a full package. Call and describe the vehicle — we will recommend the right amount of work.",
  },
  {
    name: "Schertz",
    blurb:
      "Car detailing near Schertz TX sits in the same hard-water and pollen pattern as the rest of the northeast metro. Regular maintenance details keep swirl-prone paint from looking dull between deeper correction or coating work.",
  },
  {
    name: "Cibolo",
    blurb:
      "Cibolo vehicles that live in driveways and garages still collect Texas film. Southern Auto Detailers services eligible cars, trucks, and SUVs by appointment so the job gets the time it needs.",
  },
  {
    name: "Windcrest",
    blurb:
      "Looking for car detailing near Windcrest TX? You are next door to Northeast San Antonio and the 78233 ZIP. Call to confirm appointment timing for interior, exterior, full, paint correction, or ceramic coating work.",
  },
] as const;

export const PLACE_LINKS = [
  { to: "/san-antonio-78233", label: "78233 / Northeast SA" },
  { to: "/royal-ridge", label: "Royal Ridge" },
  { to: "/rolling-oaks", label: "Rolling Oaks Mall" },
  { to: "/fort-sam-houston", label: "Fort Sam Houston" },
  { to: "/live-oak", label: "Live Oak" },
  { to: "/universal-city", label: "Universal City" },
  { to: "/converse", label: "Converse" },
  { to: "/windcrest", label: "Windcrest" },
  { to: "/schertz", label: "Schertz" },
] as const;

export const FAQS = [
  {
    q: "How long does an auto detail take?",
    a: "Detail time depends on the vehicle size, condition, and service selected. Contact Southern Auto Detailers for an estimate based on your vehicle and goals.",
  },
  {
    q: "Do I need an appointment?",
    a: "Appointments are recommended so your vehicle receives the time and attention it needs. Call (210) 201-4847 to check availability.",
  },
  {
    q: "Do you detail trucks and SUVs?",
    a: "Yes. Southern Auto Detailers can tailor service recommendations for cars, trucks, SUVs, and other eligible vehicles.",
  },
  {
    q: "How often should I get my vehicle detailed?",
    a: "Many drivers benefit from professional detailing every three to six months, depending on mileage, parking conditions, children, pets, and how the vehicle is used.",
  },
  {
    q: "Can you handle pet hair and stains?",
    a: "Yes — mention pet hair, stains, or odors when you book. Heavy buildup may need extra time. We will be straightforward about what a standard interior can accomplish versus a deeper clean.",
  },
  {
    q: "How should I prepare my vehicle?",
    a: "Remove valuables, toll tags you need same-day, and loose personal items so we can reach carpets, seats, and consoles. If the vehicle is especially dirty, tell us when you call so we can plan the appointment.",
  },
  {
    q: "What payment methods do you accept?",
    a: "Call (210) 201-4847 and we will confirm accepted payment methods when you schedule. Do not send card details through the website form.",
  },
  {
    q: "How much does auto detailing cost in San Antonio?",
    a: "Auto detailing prices in San Antonio depend on vehicle size, condition, and whether you need interior work, an exterior detail, a full package, paint correction, or ceramic coating. We quote after we understand the vehicle — call (210) 201-4847. Online starting prices usually skip the prep that actually determines the bill.",
  },
  {
    q: "Do you serve 78233 and Northeast San Antonio?",
    a: "Yes. Southern Auto Detailers serves San Antonio including the 78233 ZIP and nearby Live Oak, Universal City, Converse, Schertz, Cibolo, and Windcrest. Call (210) 201-4847 to confirm appointment timing for your vehicle.",
  },
  {
    q: "What are your hours?",
    a: "Southern Auto Detailers is open Tuesday through Sunday, 7:00 AM to 11:00 PM. We are closed on Monday. Appointments are recommended — call (210) 201-4847.",
  },
  {
    q: "Where is the studio?",
    a: "We are a San Antonio based studio at 11692 Bricken Circle, San Antonio, TX 78233. Owner Robert Romero Jr. is from Alamo Heights and is an Alamo Heights graduate. Work is private and appointment-based.",
  },
  {
    q: "Do you require a deposit to book?",
    a: "Yes. A 20% non-refundable deposit (20% of the quoted total cost) is required to secure your booking slot. The remaining balance is due when the work is completed.",
  },
] as const;

export const SERVICE_OPTIONS = [
  "Interior Detailing",
  "Exterior Detailing",
  "Full Detail Package",
  "Paint Correction",
  "Ceramic Coating",
  "Maintenance Detail",
  "Not sure — need a recommendation",
] as const;

export const GALLERY = [
  {
    ...IMAGES.neglected,
    title: "Sun-baked paint before a reset",
    tag: "Exterior",
  },
  {
    ...IMAGES.hero,
    title: "Wet-look finish after careful exterior work",
    tag: "Exterior",
  },
  {
    ...IMAGES.interior,
    title: "Leather cabin after interior detailing",
    tag: "Interior",
  },
  {
    ...IMAGES.suvInterior,
    title: "Family SUV interior, deep cleaned",
    tag: "Interior",
  },
  {
    ...IMAGES.exterior,
    title: "Foam wash and decontamination",
    tag: "Exterior",
  },
  {
    ...IMAGES.paint,
    title: "Paint correction in progress",
    tag: "Paint",
  },
  {
    ...IMAGES.ceramic,
    title: "Ceramic coating water behavior",
    tag: "Paint",
  },
  {
    ...IMAGES.truck,
    title: "Truck detailing, San Antonio",
    tag: "Exterior",
  },
  {
    ...IMAGES.wheels,
    title: "Wheels and tires cleaned the right way",
    tag: "Exterior",
  },
  {
    ...IMAGES.coupe,
    title: "Protected gloss on a performance coupe",
    tag: "Paint",
  },
] as const;

export const REASONS = [
  {
    title: "Detail-focused work",
    body: "Not a rushed, one-size-fits-all wash. We recommend the service your vehicle actually needs.",
  },
  {
    title: "Direct phone booking",
    body: "Call (210) 201-4847 to talk through condition, timing, and the right package — no runaround.",
  },
  {
    title: "Honest recommendations",
    body: "Clear service suggestions based on paint, interior soil, and how you use the vehicle.",
  },
  {
    title: "Careful technique",
    body: "Professional products and methods chosen to clean and protect, not cut corners on finish.",
  },
  {
    title: "Cars, trucks, and SUVs",
    body: "Daily commuters, work trucks, family SUVs, and enthusiast vehicles are all in scope.",
  },
  {
    title: "Private, appointment-based",
    body: "One vehicle at a time in a private San Antonio studio — not a crowded wash bay.",
  },
] as const;

export const STEPS = [
  {
    n: "01",
    title: "Call or request a detail",
    body: "Tell us the year, make, model, and what is bothering you — interior, paint, or both.",
  },
  {
    n: "02",
    title: "Quote and 20% deposit",
    body: "We price the vehicle in front of the conversation. A 20% non-refundable deposit of that total secures the slot.",
  },
  {
    n: "03",
    title: "We take the time",
    body: "Appointments are paced so carpets, wheels, and paint get real attention — not a hurry-up rinse.",
  },
  {
    n: "04",
    title: "Leave with a sharper vehicle",
    body: "A cleaner cabin, clearer paint, and a straightforward plan for keeping it that way.",
  },
] as const;
