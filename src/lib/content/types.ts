export type Faq = { q: string; a: string };

export type ContentPage = {
  path: string;
  title: string;
  description: string;
  eyebrow: string;
  h1: string;
  lede: string;
  image: { src: string; alt: string };
  sections: { heading: string; paragraphs: string[]; bullets?: string[] }[];
  faqs: readonly Faq[];
  related: { to: string; label: string }[];
  kind: "service" | "place" | "article" | "page";
  serviceName?: string;
  published?: string;
  compare?: {
    caption: string;
    headers: string[];
    rows: string[][];
  };
};
