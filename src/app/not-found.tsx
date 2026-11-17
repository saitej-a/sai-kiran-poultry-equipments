import type { Metadata } from "next";
import Link from "next/link";

import { footerNav } from "@/lib/site";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <section className="shell py-16 md:py-24">
      <p className="eyebrow">Error 404</p>
      <h1 className="display mt-5 max-w-[18ch] text-[clamp(2.2rem,4.6vw,3.5rem)]">
        That page is not on the drawing.
      </h1>
      <p className="mt-5 max-w-[46ch] text-[14.5px] leading-[1.7] text-ink-soft">
        The link may be from an older catalogue. The current equipment lines and specification
        sheets are listed below.
      </p>

      <div className="mt-8 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {footerNav.catalog.map((item, index) => (
          <Link
            key={item.href}
            href={item.href}
            className="group flex items-center justify-between border-b border-line py-3 transition-colors hover:border-ink/40"
          >
            <span className="flex items-baseline gap-2.5">
              <span className="font-mono text-[9.5px] text-ink-mute">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="text-[13px] font-medium group-hover:text-brand-700">{item.label}</span>
            </span>
          </Link>
        ))}
      </div>

      <div className="mt-8 flex flex-col gap-2.5 sm:flex-row">
        <Link href="/" className="btn-primary">
          Back to home
        </Link>
        <Link href="/products" className="btn-outline">
          Full catalog
        </Link>
      </div>
    </section>
  );
}
