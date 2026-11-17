"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

import { Icon } from "@/components/ui/Icon";
import { ProductCard } from "@/components/product/ProductCard";
import { getFeaturedProducts } from "@/data/products";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Bestsellers() {
  const featured = getFeaturedProducts();
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const update = useCallback(() => {
    const element = scrollerRef.current;
    if (!element) return;
    const max = element.scrollWidth - element.clientWidth;
    setCanPrev(element.scrollLeft > 8);
    setCanNext(element.scrollLeft < max - 8);
    setProgress(max > 0 ? element.scrollLeft / max : 1);
  }, []);

  useEffect(() => {
    update();
    const element = scrollerRef.current;
    if (!element) return;
    element.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      element.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [update]);

  const scrollByCard = (direction: 1 | -1) => {
    const element = scrollerRef.current;
    if (!element) return;
    const card = element.querySelector<HTMLElement>("[data-card]");
    const step = card ? card.offsetWidth + 12 : 340;
    element.scrollBy({ left: direction * step, behavior: "smooth" });
  };

  return (
    <section className="py-16 md:py-24" aria-labelledby="featured-heading">
      <div className="shell">
        <SectionHeading
          eyebrow="Bestsellers"
          title={<span id="featured-heading">The lines farms reorder by name.</span>}
          description="Three products account for most of our repeat orders. Specs below are the ones that get checked on the shed floor."
          action={{ label: "All products", href: "/products" }}
        />
      </div>

      <div className="mt-9">
        <div
          ref={scrollerRef}
          className="scroll-x mx-auto flex w-full max-w-shell snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-2 sm:px-6 lg:px-8"
          role="region"
          aria-label="Featured products"
          tabIndex={0}
        >
          <div className="flex gap-3">
            {featured.map((product, index) => (
              <div
                key={product.id}
                data-card
                className="w-[286px] shrink-0 snap-start sm:w-[320px] lg:w-[360px]"
              >
                <ProductCard product={product} index={`0${index + 1}`} />
              </div>
            ))}
            <div className="w-[286px] shrink-0 snap-start sm:w-[320px] lg:w-[360px]">
              <div className="flex h-full min-h-[360px] flex-col justify-between rounded-card border border-line bg-paper-deep/50 p-6">
                <div>
                  <p className="eyebrow">Not sure which line fits?</p>
                  <p className="mt-4 text-[19px] font-semibold leading-[1.3] tracking-[-0.015em]">
                    Send shed length, width and bird count. We return a line-wise layout.
                  </p>
                  <p className="mt-3 text-[13px] leading-[1.65] text-ink-soft">
                    Fan count, pan spacing, nipple count and pad area come back on one sheet, with
                    the assumptions written down.
                  </p>
                </div>
                <Link href="/contact" className="btn-outline w-full">
                  Request a layout
                  <Icon name="arrow-right" size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="shell mt-5 flex items-center gap-4">
          <div className="h-px flex-1 bg-line" role="presentation">
            <div
              className="h-px bg-ink transition-[width] duration-200 ease-out"
              style={{ width: `${Math.max(10, progress * 100)}%` }}
            />
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => scrollByCard(-1)}
              disabled={!canPrev}
              aria-label="Previous products"
              className="grid h-9 w-9 place-items-center rounded-[6px] border border-line-strong text-ink transition-colors hover:border-ink/45 disabled:cursor-not-allowed disabled:opacity-35"
            >
              <Icon name="arrow-right" size={15} className="rotate-180" />
            </button>
            <button
              type="button"
              onClick={() => scrollByCard(1)}
              disabled={!canNext}
              aria-label="Next products"
              className="grid h-9 w-9 place-items-center rounded-[6px] border border-line-strong text-ink transition-colors hover:border-ink/45 disabled:cursor-not-allowed disabled:opacity-35"
            >
              <Icon name="arrow-right" size={15} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
