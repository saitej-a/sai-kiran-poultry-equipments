import type { MetadataRoute } from "next";

import { categories, products } from "@/data/products";
import { site } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${site.url}/`, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${site.url}/products`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${site.url}/turnkey-solutions`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${site.url}/downloads`, lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${site.url}/about`, lastModified, changeFrequency: "yearly", priority: 0.6 },
    { url: `${site.url}/contact`, lastModified, changeFrequency: "yearly", priority: 0.8 },
  ];

  const categoryRoutes: MetadataRoute.Sitemap = categories.map((category) => ({
    url: `${site.url}/products/${category.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const productRoutes: MetadataRoute.Sitemap = products.map((product) => ({
    url: `${site.url}/products/${product.categorySlug}/${product.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...categoryRoutes, ...productRoutes];
}
