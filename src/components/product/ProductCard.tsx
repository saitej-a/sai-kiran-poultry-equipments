import Link from "next/link";

import { Icon } from "@/components/ui/Icon";
import { ProductImage } from "@/components/ui/ProductImage";
import type { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
  index?: string;
}

export function ProductCard({ product, index }: ProductCardProps) {
  const primarySpec = product.specifications[0];
  const secondarySpec = product.specifications[1];

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-card border border-line bg-paper-card transition-colors duration-200 hover:border-ink/30">
      <Link
        href={`/products/${product.categorySlug}/${product.slug}`}
        className="block"
        aria-label={`${product.name} — specifications`}
      >
        <ProductImage
          label={product.name}
          sku={product.sku}
          categorySlug={product.categorySlug}
          view={product.category}
          className="aspect-[4/3] w-full"
        />
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center justify-between gap-3">
          <span className="font-mono text-[9.5px] uppercase tracking-[0.14em] text-ink-mute">
            {product.category}
          </span>
          {index ? (
            <span className="font-mono text-[9.5px] tabular-nums text-ink-mute/70">{index}</span>
          ) : null}
        </div>

        <h3 className="h3 mt-2.5">
          <Link
            href={`/products/${product.categorySlug}/${product.slug}`}
            className="transition-colors duration-200 hover:text-brand-700"
          >
            {product.name}
          </Link>
        </h3>

        <p className="mt-2 line-clamp-2 text-[13px] leading-[1.6] text-ink-soft">
          {product.shortDescription}
        </p>

        <dl className="mt-4 grid grid-cols-2 gap-x-4 border-t border-line pt-3">
          {primarySpec ? (
            <div>
              <dt className="font-mono text-[9px] uppercase tracking-[0.1em] text-ink-mute">
                {primarySpec.label}
              </dt>
              <dd className="mt-1 font-mono text-[11.5px] leading-snug text-ink">{primarySpec.value}</dd>
            </div>
          ) : null}
          {secondarySpec ? (
            <div>
              <dt className="font-mono text-[9px] uppercase tracking-[0.1em] text-ink-mute">
                {secondarySpec.label}
              </dt>
              <dd className="mt-1 font-mono text-[11.5px] leading-snug text-ink">
                {secondarySpec.value}
              </dd>
            </div>
          ) : null}
        </dl>

        <div className="mt-auto pt-5">
          <Link
            href={`/products/${product.categorySlug}/${product.slug}`}
            className="inline-flex items-center gap-1.5 border-b border-transparent pb-0.5 text-[12.5px] font-medium text-ink transition-colors duration-200 group-hover:border-brand-600 group-hover:text-brand-700"
          >
            View specs
            <Icon name="arrow-right" size={13} />
          </Link>
        </div>
      </div>
    </article>
  );
}
