export interface TechnicalSpec {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  categorySlug: string;
  shortDescription: string;
  description: string;
  image: string;
  advantages: string[];
  specifications: TechnicalSpec[];
  brochureUrl?: string;
  isFeatured?: boolean;
  sku: string;
}

export interface Category {
  slug: string;
  name: string;
  shortName: string;
  index: string;
  description: string;
  blurb: string;
  highlights: string[];
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  location: string;
  scale: string;
  metrics: { label: string; value: string }[];
}

export interface Brochure {
  title: string;
  description: string;
  file: string;
  format: string;
  pages: string;
  size: string;
  group: "Catalogues" | "Product sheets" | "Technical manuals";
}
