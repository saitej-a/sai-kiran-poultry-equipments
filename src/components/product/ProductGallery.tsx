"use client";

import { useState } from "react";

import { Icon } from "@/components/ui/Icon";
import { categoryGlyph, ProductImage } from "@/components/ui/ProductImage";
import type { Product } from "@/types/product";

const views = [
  { id: "front", label: "Front view", frame: "Front elevation" },
  { id: "detail", label: "Detail", frame: "Material and fitting detail" },
  { id: "installed", label: "Installed", frame: "Installed in shed" },
];

export function ProductGallery({ product }: { product: Product }) {
  const [active, setActive] = useState(0);
  const glyph = categoryGlyph[product.categorySlug] ?? "grid";

  return (
    <div>
      <div className="relative overflow-hidden rounded-panel border border-line bg-paper-card">
        <ProductImage
          label={`${product.name} — ${views[active].frame}`}
          sku={product.sku}
          categorySlug={product.categorySlug}
          view={views[active].frame}
          className="aspect-[4/3] w-full"
        />
        <span className="absolute left-3 top-3 rounded-[4px] border border-ink/15 bg-paper/85 px-2 py-1 font-mono text-[9px] uppercase tracking-[0.12em] text-ink-soft backdrop-blur-sm">
          {product.category}
        </span>
      </div>

      <div className="mt-2.5 grid grid-cols-3 gap-2.5">
        {views.map((view, index) => {
          const selected = index === active;
          return (
            <button
              key={view.id}
              type="button"
              onClick={() => setActive(index)}
              aria-pressed={selected}
              aria-label={`Show ${view.frame}`}
              className={`group relative flex flex-col justify-between overflow-hidden rounded-[6px] border p-2.5 text-left transition-colors duration-200 ${
                selected
                  ? "border-ink bg-paper-card"
                  : "border-line bg-paper-card/60 hover:border-ink/35"
              }`}
            >
              <div className="flex items-start justify-between">
                <Icon
                  name={glyph}
                  size={20}
                  strokeWidth={1.1}
                  className={selected ? "text-brand-600" : "text-ink/30"}
                />
                <span className="font-mono text-[9px] tabular-nums text-ink-mute">
                  0{index + 1}
                </span>
              </div>
              <span className="mt-6 block font-mono text-[9.5px] uppercase leading-tight tracking-[0.1em] text-ink-soft">
                {view.label}
              </span>
            </button>
          );
        })}
      </div>

      <p aria-live="polite" className="mt-2.5 font-mono text-[10px] uppercase tracking-[0.1em] text-ink-mute">
        View {active + 1} of 3 · {views[active].frame}
      </p>
    </div>
  );
}
