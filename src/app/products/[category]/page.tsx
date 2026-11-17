import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ProductCard } from "@/components/product/ProductCard";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Icon } from "@/components/ui/Icon";
import { categories, getCategory, getProductsByCategory } from "@/data/products";
import { site, waLink, waMessages } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return categories.map((category) => ({ category: category.slug }));
}

type PageProps = { params: Promise<{ category: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category: slug } = await params;
  const category = getCategory(slug);
  if (!category) return {};

  return {
    title: `${category.name} — poultry farm equipment`,
    description: category.description,
    alternates: { canonical: `/products/${category.slug}` },
    openGraph: {
      title: `${category.name} | ${site.name}`,
      description: category.description,
      url: `/products/${category.slug}`,
      images: ["/og.png"],
    },
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const { category: slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();

  const items = getProductsByCategory(category.slug);
  const otherCategories = categories.filter((entry) => entry.slug !== category.slug);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      { "@type": "ListItem", position: 2, name: "Products", item: `${site.url}/products` },
      {
        "@type": "ListItem",
        position: 3,
        name: category.name,
        item: `${site.url}/products/${category.slug}`,
      },
    ],
  };

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: category.name,
    description: category.description,
    url: `${site.url}/products/${category.slug}`,
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: items.length,
      itemListElement: items.map((product, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: product.name,
        url: `${site.url}/products/${product.categorySlug}/${product.slug}`,
      })),
    },
  };

  return (
    <>
      <section className="border-b border-line bg-paper-deep/40">
        <div className="shell py-9 md:py-12">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Products", href: "/products" },
              { label: category.shortName },
            ]}
          />

          <div className="mt-6 grid gap-8 md:grid-cols-12 md:gap-10">
            <div className="md:col-span-7">
              <p className="eyebrow">
                Category {category.index} / 05 · {items.length} products
              </p>
              <h1 className="mt-4 text-[clamp(2rem,4vw,2.9rem)] font-semibold leading-[1.02] tracking-[-0.03em]">
                {category.name}
              </h1>
              <p className="mt-5 max-w-[54ch] text-[14.5px] leading-[1.7] text-ink-soft">
                {category.description}
              </p>
            </div>

            <div className="md:col-span-5">
              <div className="rounded-card border border-line bg-paper-card p-5">
                <p className="font-mono text-[9.5px] uppercase tracking-[0.14em] text-ink-mute">
                  Range at a glance
                </p>
                <dl className="mt-3 divide-y divide-line border-t border-line">
                  {category.highlights.map((highlight, index) => (
                    <div key={highlight} className="flex items-baseline gap-3 py-2.5">
                      <dt className="font-mono text-[9.5px] tabular-nums text-ink-mute">
                        0{index + 1}
                      </dt>
                      <dd className="text-[12.5px] text-ink">{highlight}</dd>
                    </div>
                  ))}
                </dl>
                <a
                  href={waLink(waMessages.quote)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-[12.5px] font-medium text-brand-700 transition-colors hover:text-brand-800"
                >
                  <Icon name="whatsapp" size={14} />
                  Ask for a line layout
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="shell py-12 md:py-16" aria-label={`${category.name} products`}>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((product, index) => (
            <div key={product.id} className="h-full">
              <ProductCard product={product} index={String(index + 1).padStart(2, "0")} />
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-6 rounded-card border border-line bg-paper-card p-6 md:grid-cols-12 md:items-center md:p-7">
          <div className="md:col-span-8">
            <p className="eyebrow">Sizing note</p>
            <p className="mt-3 max-w-[62ch] text-[14.5px] leading-[1.7] text-ink">
              {category.blurb}
            </p>
          </div>
          <div className="flex flex-col gap-2.5 sm:flex-row md:col-span-4 md:justify-end">
            <Link href="/contact" className="btn-primary">
              Request pricing
            </Link>
            <Link href="/products" className="btn-outline">
              All products
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-line" aria-labelledby="other-categories">
        <div className="shell py-10">
          <h2 id="other-categories" className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-mute">
            Other lines
          </h2>
          <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
            {otherCategories.map((entry) => (
              <Link
                key={entry.slug}
                href={`/products/${entry.slug}`}
                className="group flex items-center justify-between gap-3 border-b border-line py-3 transition-colors hover:border-ink/40"
              >
                <span className="flex items-baseline gap-2.5">
                  <span className="font-mono text-[9.5px] text-ink-mute">{entry.index}</span>
                  <span className="text-[13px] font-medium group-hover:text-brand-700">
                    {entry.name}
                  </span>
                </span>
                <Icon name="arrow-right" size={13} className="text-ink-mute" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <JsonLd id="breadcrumb-schema" data={breadcrumbSchema} />
      <JsonLd id="collection-schema" data={collectionSchema} />
    </>
  );
}
