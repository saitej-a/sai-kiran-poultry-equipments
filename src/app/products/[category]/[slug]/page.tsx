import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ProductCard } from "@/components/product/ProductCard";
import { ProductGallery } from "@/components/product/ProductGallery";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Icon, type IconName } from "@/components/ui/Icon";
import { SpecTable } from "@/components/ui/SpecTable";
import { getCategory, getProduct, products } from "@/data/products";
import { site, waLink, waMessages } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return products.map((product) => ({
    category: product.categorySlug,
    slug: product.slug,
  }));
}

type PageProps = { params: Promise<{ category: string; slug: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category: categorySlug, slug } = await params;
  const product = getProduct(slug);
  if (!product || product.categorySlug !== categorySlug) return {};

  const path = `/products/${product.categorySlug}/${product.slug}`;

  return {
    title: product.name,
    description: product.shortDescription,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      title: `${product.name} | ${site.name}`,
      description: product.shortDescription,
      url: path,
      images: ["/og.png"],
    },
    twitter: {
      card: "summary_large_image",
      title: product.name,
      description: product.shortDescription,
      images: ["/og.png"],
    },
  };
}

const advantageIcons: IconName[] = ["check", "shield", "ruler", "wrench"];

export default async function ProductPage({ params }: PageProps) {
  const { category: categorySlug, slug } = await params;
  const product = getProduct(slug);
  const category = getCategory(categorySlug);

  if (!product || !category || product.categorySlug !== category.slug) notFound();

  const path = `/products/${product.categorySlug}/${product.slug}`;
  const related = products
    .filter((item) => item.categorySlug === product.categorySlug && item.id !== product.id)
    .slice(0, 3);
  const quoteLink = waLink(waMessages.product(product.name));

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    sku: product.sku,
    category: product.category,
    image: [`${site.url}/og.png`],
    brand: { "@type": "Brand", name: site.name },
    manufacturer: { "@id": `${site.url}/#organization` },
    url: `${site.url}${path}`,
    additionalProperty: product.specifications.map((spec) => ({
      "@type": "PropertyValue",
      name: spec.label,
      value: spec.value,
    })),
  };

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
      { "@type": "ListItem", position: 4, name: product.name, item: `${site.url}${path}` },
    ],
  };

  return (
    <>
      <div className="shell py-7 md:py-9">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Products", href: "/products" },
            { label: category.shortName, href: `/products/${category.slug}` },
            { label: product.name },
          ]}
        />

        <div className="mt-6 grid gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <ProductGallery product={product} />
          </div>

          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-24">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[9.5px] uppercase tracking-[0.13em] text-ink-mute">
                <Link href={`/products/${category.slug}`} className="transition-colors hover:text-brand-700">
                  {category.name}
                </Link>
                <span className="text-ink-mute/50" aria-hidden="true">
                  /
                </span>
                <span>{product.sku}</span>
              </div>

              <h1 className="mt-3 text-[26px] font-semibold leading-[1.12] tracking-[-0.025em] md:text-[30px]">
                {product.name}
              </h1>

              <p className="mt-3 text-[14px] leading-[1.68] text-ink-soft">{product.shortDescription}</p>

              <div className="mt-6">
                <SpecTable
                  specs={product.specifications.slice(0, 4)}
                  caption="Key specification"
                />
              </div>

              <div className="mt-6 space-y-2.5">
                <a
                  href={quoteLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full"
                >
                  <Icon name="whatsapp" size={16} />
                  Inquire on WhatsApp
                </a>
                <a href={product.brochureUrl ?? "/downloads"} download className="btn-outline w-full">
                  <Icon name="download" size={15} />
                  Download product brochure
                </a>
              </div>

              <p className="mt-3 font-mono text-[9.5px] uppercase leading-relaxed tracking-[0.1em] text-ink-mute">
                Pricing on request · Dispatch 5–7 working days · Site layout included
              </p>

              <div className="mt-5 rounded-card border border-line bg-paper-card p-4">
                <p className="text-[12.5px] font-medium">Need this sized for your shed?</p>
                <p className="mt-1.5 text-[12.5px] leading-[1.6] text-ink-soft">
                  Send shed length, width, bird count and power supply. We return pan or nipple
                  counts and the fan schedule.
                </p>
                <Link
                  href="/contact"
                  className="mt-3 inline-flex items-center gap-1.5 text-[12.5px] font-medium text-brand-700 transition-colors hover:text-brand-800"
                >
                  Send shed details
                  <Icon name="arrow-right" size={13} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="border-y border-line bg-paper-deep/40">
        <div className="shell grid gap-10 py-12 md:grid-cols-12 md:gap-8 md:py-16">
          <div className="md:col-span-5">
            <p className="eyebrow">Overview</p>
            <h2 className="h2 mt-4 text-[clamp(1.6rem,2.6vw,2.1rem)]">What it changes on the floor.</h2>
            <p className="mt-5 text-[14px] leading-[1.75] text-ink-soft">{product.description}</p>
            <dl className="mt-6 grid grid-cols-2 gap-y-3 border-t border-line pt-4 font-mono text-[10px] uppercase tracking-[0.1em] text-ink-mute">
              <dt>Line</dt>
              <dd className="text-right text-ink">{product.category}</dd>
              <dt>Build</dt>
              <dd className="text-right text-ink">Manufacturer-direct</dd>
              <dt>Dispatch</dt>
              <dd className="text-right text-ink">Pan-India</dd>
            </dl>
          </div>

          <div className="md:col-span-7">
            <h2 className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-mute">
              Key farm advantages
            </h2>
            <ul className="mt-3 border-t border-line">
              {product.advantages.map((advantage, index) => (
                <li
                  key={advantage}
                  className="flex gap-4 border-b border-line py-4"
                >
                  <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-[4px] border border-line text-brand-700">
                    <Icon name={advantageIcons[index % advantageIcons.length]} size={14} />
                  </span>
                  <span className="text-[13.5px] leading-[1.65] text-ink-soft">{advantage}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="shell py-12 md:py-16" aria-labelledby="specifications">
        <div className="grid gap-10 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-7">
            <p className="eyebrow">Technical data</p>
            <h2 id="specifications" className="h2 mt-4 text-[clamp(1.6rem,2.6vw,2.1rem)]">
              Full specification
            </h2>
            <div className="mt-6">
              <SpecTable specs={product.specifications} caption={`${product.sku} · base build`} />
            </div>
            <p className="mt-3 font-mono text-[10px] uppercase leading-relaxed tracking-[0.08em] text-ink-mute">
              Dimensions in mm unless stated · Material grades verified at goods-in
            </p>
          </div>

          <aside className="md:col-span-5">
            <div className="rounded-card border border-line bg-paper-card p-6">
              <p className="font-mono text-[9.5px] uppercase tracking-[0.14em] text-ink-mute">
                To quote this line we need
              </p>
              <ol className="mt-4 space-y-3">
                {[
                  "Shed length × width, in feet",
                  "Bird count per cycle and target weight",
                  "Power supply: single or three-phase",
                  "Water source: overhead tank or borewell",
                ].map((item, index) => (
                  <li key={item} className="flex gap-3 text-[13px] leading-[1.6] text-ink-soft">
                    <span className="font-mono text-[10px] tabular-nums text-ink-mute">
                      0{index + 1}
                    </span>
                    {item}
                  </li>
                ))}
              </ol>

              <div className="mt-6 space-y-2.5 border-t border-line pt-5">
                <a
                  href={quoteLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full"
                >
                  <Icon name="whatsapp" size={16} />
                  Send on WhatsApp
                </a>
                <a
                  href={product.brochureUrl ?? "/downloads"}
                  download
                  className="btn-outline w-full"
                >
                  <Icon name="document" size={15} />
                  Spec sheet (PDF)
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {related.length > 0 ? (
        <section className="border-t border-line bg-paper-deep/40" aria-labelledby="related">
          <div className="shell py-12 md:py-14">
            <div className="flex items-end justify-between gap-4">
              <h2 id="related" className="h2 text-[clamp(1.4rem,2.2vw,1.8rem)]">
                More from {category.shortName.toLowerCase()}
              </h2>
              <Link
                href={`/products/${category.slug}`}
                className="hidden shrink-0 items-center gap-1.5 text-[12.5px] font-medium text-ink transition-colors hover:text-brand-700 sm:inline-flex"
              >
                View category
                <Icon name="arrow-right" size={13} />
              </Link>
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <div key={item.id} className="h-full">
                  <ProductCard product={item} />
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <JsonLd id="product-schema" data={productSchema} />
      <JsonLd id="breadcrumb-schema" data={breadcrumbSchema} />
    </>
  );
}
