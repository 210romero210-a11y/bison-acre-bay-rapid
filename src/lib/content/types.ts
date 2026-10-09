export type Faq = { q: string; a: string };

export type ContentImage = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  caption?: string;
};

export type ContentFigure = ContentImage & {
  caption: string;
  width: number;
  height: number;
  srcSet?: string;
  sizes?: string;
};

export type ContentCompare = {
  caption: string;
  headers: string[];
  rows: string[][];
};

export type ContentSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
  figure?: ContentFigure;
  compare?: ContentCompare;
};

export type ContentPage = {
  path: string;
  title: string;
  description: string;
  eyebrow: string;
  h1: string;
  lede: string;
  image: ContentImage;
  sections: ContentSection[];
  faqs: readonly Faq[];
  related: { to: string; label: string }[];
  kind: "service" | "place" | "article" | "page";
  serviceName?: string;
  published?: string;
  compare?: ContentCompare;
};
