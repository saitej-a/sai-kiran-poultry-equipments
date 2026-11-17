import type { Metadata } from "next";
import Link from "next/link";

import { ProductCard } from "@/components/product/ProductCard";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Icon } from "@/components/ui/Icon";
import { categories, getProductsByCategory, products } from "@/data/products";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Poultry equipment catalog — feeding, drinking, climate, housing",
  description:
    "Browse every Sai Kiran line: automatic pan and chain-disc feeders, 360° nipple systems, 50-inch cone fans, 7090 cooling pads, turnkey EC houses and transport accessories.",
  alternates: { canonical: "/products" },
  openGraph: {
    title: "Poultry equipment catalog | Sai Kiran Poultry Equipments",
    description:
      "Feeding, drinking, climate control, turnkey housing and transport equipment with published technical specifications.",
    url: "/products",
  },
};

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Poultry equipment catalog",
  url: `${site.url}/products`,
  isPartOf: { "@id": `${site.url}/#website` },
  about: categories.map((category) => category.name),
  mainEntity: {
    "@type": "ItemList",
    numberOfItems: products.length,
    itemListElement: products.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: product.name,
      url: `${site.url}/products/${product.categorySlug}/${product.slug}`,
    })),
  },
};

export default function ProductsPage() {
  return (
    <>
      <section className="border-b border-line bg-paper-deep/40">
        <div className="shell py-10 md:py-14">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Products" }]} />
          <div className="mt-7 grid gap-8 md:grid-cols-12 md:items-end">
            <div className="md:col-span-8">
              <p className="eyebrow">Master catalog / 2026</p>
              <h1 className="h2 mt-4 max-w-[22ch] text-[clamp(2rem,4vw,3.1rem)]">
                Every line we manufacture, with the numbers attached.
              </h1>
            </div>
            <div className="md:col-span-4 md:border-l md:border-line md:pl-6">
              <dl className="grid grid-cols-2 gap-y-3 font-mono text-[10px] uppercase tracking-[0.1em] text-ink-mute">
                <dt>Categories</dt>
                <dd className="text-right text-ink">{categories.length}</dd>
                <dt>Products</dt>
                <dd className="text-right text-ink">{products.length}</dd>
                <dt>Dispatch</dt>
                <dd className="text-right text-ink">Pan-India</dd>
                <dt>Pricing</dt>
                <dd className="text-right text-ink">On request</dd>
              </dl>
            </div>
          </div>

          <nav aria-label="Catalog categories" className="mt-8 grid gap-2 sm:grid-cols-2 lg:grid-cols-5">
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/products/${category.slug}`}
                className="group flex items-center justify-between gap-2 rounded-[6px] border border-line bg-paper-card px-3.5 py-3 transition-colors duration-200 hover:border-ink/40"
              >
                <span>
                  <span className="block font-mono text-[9px] uppercase tracking-[0.12em] text-ink-mute">
                    {category.index} · {getProductsByCategory(category.slug).length} products
                  </span>
                  <span className="mt-1 block text-[12.5px] font-medium">{category.shortName}</span>
                </span>
                <Icon
                  name="arrow-up-right"
                  size={13}
                  className="shrink-0 text-ink-mute transition-colors group-hover:text-brand-600"
                />
              </Link>
            ))}
          </nav>
        </div>
      </section>

      <section className="shell py-12 md:py-16" aria-label="All products">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <div key={product.id} className="h-full">
              <ProductCard product={product} index={String(index + 1).padStart(2, "0")} />
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-5 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-lg text-[13.5px] leading-[1.65] text-ink-soft">
            Specifications are the base build. Shed length, bird count and power supply change fan
            counts, pan spacing and pad area — send those three numbers with your enquiry.
          </p>
          <Link href="/contact" className="btn-primary shrink-0">
            Send shed details
            <Icon name="arrow-right" size={15} />
          </Link>
        </div>
      </section>

      <JsonLd id="catalog-schema" data={collectionSchema} />
    </>
  );
}
