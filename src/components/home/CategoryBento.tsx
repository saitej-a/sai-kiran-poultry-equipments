import Link from "next/link";

import { Icon } from "@/components/ui/Icon";
import { categoryGlyph } from "@/components/ui/ProductImage";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { categories, getProductsByCategory } from "@/data/products";

const layout: Record<string, string> = {
  "feeding-systems": "md:col-span-6 md:row-span-2",
  "drinking-systems": "md:col-span-3",
  "climate-control": "md:col-span-3",
  "housing-turnkey": "md:col-span-6",
  "transport-accessories": "md:col-span-12",
};

export function CategoryBento() {
  const [anchor, ...rest] = categories;

  return (
    <section className="shell py-16 md:py-24" aria-labelledby="catalog-heading">
      <Reveal>
        <SectionHeading
          eyebrow="Five lines, one works"
          title={<span id="catalog-heading">Everything between the chick and the loading ramp.</span>}
          description="Each line is specified against shed length, bird count and power supply. Nothing here is sold as a one-size kit."
          action={{ label: "Full product catalog", href: "/products" }}
        />
      </Reveal>

      <div className="mt-9 grid grid-cols-1 gap-3 md:grid-cols-12 md:auto-rows-[minmax(196px,auto)]">
        <div className={layout[anchor.slug]}>
          <AnchorTile slug={anchor.slug} />
        </div>

        {rest.map((category, index) => (
          <div key={category.slug} className={layout[category.slug]}>
            {category.slug === "transport-accessories" ? (
              <TransportStrip slug={category.slug} />
            ) : (
              <CategoryTile slug={category.slug} wide={index >= 2} />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

function AnchorTile({ slug }: { slug: string }) {
  const category = categories.find((entry) => entry.slug === slug);
  if (!category) return null;
  const count = getProductsByCategory(category.slug).length;

  return (
    <Link
      href={`/products/${category.slug}`}
      className="group relative flex h-full min-h-[400px] flex-col justify-between overflow-hidden rounded-card border border-ink bg-ink p-6 text-white transition-transform duration-300 ease-craft hover:scale-[1.02] sm:p-7"
    >
      <div className="pointer-events-none absolute inset-0 hairlines opacity-60" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -right-6 bottom-24 text-white/[0.07] transition-transform duration-500 ease-craft group-hover:scale-105"
        aria-hidden="true"
      >
        <Icon name={categoryGlyph[category.slug]} size={196} strokeWidth={0.6} />
      </div>

      <div className="relative">
        <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.16em] text-white/60">
          <span>{category.index} / Feeding line</span>
          <span>{count} products</span>
        </div>
        <h3 className="mt-5 max-w-[16ch] text-[30px] font-semibold leading-[1.05] tracking-[-0.025em] text-white sm:text-[34px]">
          {category.name}
        </h3>
        <p className="mt-3 max-w-[38ch] text-[13.5px] leading-[1.65] text-white/60">{category.blurb}</p>
      </div>

      <div className="relative mt-8">
        <ul className="space-y-2 border-t border-white/12 pt-4">
          {category.highlights.map((highlight) => (
            <li
              key={highlight}
              className="flex items-center gap-2.5 font-mono text-[10.5px] uppercase tracking-[0.08em] text-white/55"
            >
              <span className="h-1 w-1 shrink-0 rounded-full bg-brand-400" aria-hidden="true" />
              {highlight}
            </li>
          ))}
        </ul>
        <span className="mt-5 inline-flex items-center gap-2 text-[12.5px] font-medium text-white">
          View feeding systems
          <Icon
            name="arrow-right"
            size={14}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </span>
      </div>
    </Link>
  );
}

function TransportStrip({ slug }: { slug: string }) {
  const category = categories.find((entry) => entry.slug === slug);
  if (!category) return null;
  const count = getProductsByCategory(category.slug).length;

  return (
    <Link
      href={`/products/${category.slug}`}
      className="group flex h-full flex-col justify-between gap-6 rounded-card border border-line bg-paper-card p-5 transition-all duration-300 ease-craft hover:scale-[1.02] hover:border-ink/35 md:flex-row md:items-center md:gap-8 md:px-6"
    >
      <div className="flex items-start gap-4 md:w-[30%]">
        <span className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.16em] text-ink-mute">
          {category.index}
        </span>
        <div>
          <h3 className="text-[18px] font-semibold tracking-[-0.015em]">{category.name}</h3>
          <p className="mt-1 font-mono text-[9.5px] uppercase tracking-[0.1em] text-ink-mute">
            {count} products
          </p>
        </div>
      </div>

      <p className="max-w-[42ch] text-[12.5px] leading-[1.6] text-ink-soft md:w-[36%]">
        {category.blurb}
      </p>

      <div className="flex items-center justify-between gap-4 border-t border-line pt-3 md:border-t-0 md:pt-0 lg:w-[30%]">
        <ul className="flex flex-wrap gap-x-4 gap-y-1">
          {category.highlights.map((highlight) => (
            <li
              key={highlight}
              className="font-mono text-[9px] uppercase tracking-[0.07em] text-ink-mute"
            >
              {highlight}
            </li>
          ))}
        </ul>
        <Icon
          name="arrow-up-right"
          size={15}
          className="shrink-0 text-ink transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        />
      </div>
    </Link>
  );
}

function CategoryTile({ slug, wide }: { slug: string; wide: boolean }) {
  const category = categories.find((entry) => entry.slug === slug);
  if (!category) return null;
  const count = getProductsByCategory(category.slug).length;

  return (
    <Link
      href={`/products/${category.slug}`}
      className="group flex h-full flex-col justify-between rounded-card border border-line bg-paper-card p-5 transition-all duration-300 ease-craft hover:scale-[1.02] hover:border-ink/35"
    >
      <div>
        <div className="flex items-start justify-between">
          <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-mute">
            {category.index}
          </span>
          <Icon
            name={categoryGlyph[category.slug]}
            size={22}
            strokeWidth={1.1}
            className="text-ink/30 transition-colors duration-300 group-hover:text-brand-600"
          />
        </div>
        <h3 className={`mt-4 ${wide ? "text-[19px]" : "text-[18px]"} font-semibold tracking-[-0.015em]`}>
          {category.name}
        </h3>
        {wide ? (
          <p className="mt-2 max-w-[46ch] text-[13px] leading-[1.6] text-ink-soft">{category.blurb}</p>
        ) : (
          <p className="mt-2 max-w-[26ch] text-[12.5px] leading-[1.55] text-ink-soft">
            {category.highlights[0]} · {category.highlights[1]}
          </p>
        )}
      </div>

      <div className="mt-6 flex items-center justify-between border-t border-line pt-3 font-mono text-[10px] uppercase tracking-[0.1em] text-ink-mute">
        <span>{count} products</span>
        <Icon
          name="arrow-up-right"
          size={13}
          className="text-ink transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        />
      </div>
    </Link>
  );
}
