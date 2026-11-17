"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { Icon } from "@/components/ui/Icon";
import { Logo } from "@/components/ui/Logo";
import { categories, getProductsByCategory } from "@/data/products";
import { mainNav, site } from "@/lib/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setProductsOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      if (productsOpen) {
        setProductsOpen(false);
        toggleRef.current?.focus();
      }
      setMobileOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [productsOpen]);

  useEffect(() => {
    if (!productsOpen) return;
    const onClick = (event: MouseEvent) => {
      if (!dropdownRef.current?.contains(event.target as Node)) {
        setProductsOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [productsOpen]);

  const isActive = (href: string) => pathname.startsWith(href.split("/").slice(0, 2).join("/"));

  return (
    <header className="sticky top-0 z-50">
      <div className="hidden bg-ink lg:block">
        <div className="shell flex h-8 items-center justify-between font-mono text-[10.5px] uppercase tracking-[0.13em] text-white/55">
          <p>Manufacturer &amp; supplier since {site.established} · Sangareddy, Telangana</p>
          <div className="flex items-center gap-6">
            <span className="text-white/60">{site.hours}</span>
            <a href={`tel:${site.phone.tel}`} className="text-white/80 transition-colors hover:text-white">
              {site.phone.display}
            </a>
          </div>
        </div>
      </div>

      <div
        className={`border-b transition-colors duration-300 ${
          scrolled
            ? "border-line bg-paper/85 backdrop-blur-md"
            : "border-line/70 bg-paper"
        }`}
      >
        <div className="shell flex h-14 items-center justify-between gap-4 lg:h-[68px]">
          <Logo />

          <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
            >
              <button
                ref={toggleRef}
                type="button"
                aria-expanded={productsOpen}
                aria-controls="product-menu"
                onClick={() => setProductsOpen((open) => !open)}
                className={`flex items-center gap-1.5 py-2 text-[13.5px] font-medium transition-colors duration-200 ${
                  isActive("/products") ? "text-brand-600" : "text-ink hover:text-brand-600"
                }`}
              >
                Products
                <Icon
                  name="chevron-down"
                  size={13}
                  className={`transition-transform duration-200 ${productsOpen ? "rotate-180" : ""}`}
                />
              </button>

              {productsOpen ? (
                <div
                  id="product-menu"
                  className="absolute left-1/2 top-full w-[520px] -translate-x-1/2 pt-2"
                >
                  <div className="rounded-card border border-line bg-paper-card p-2 shadow-lift">
                    <div className="grid grid-cols-2 gap-1">
                      {categories.map((category) => (
                        <Link
                          key={category.slug}
                          href={`/products/${category.slug}`}
                          className="group flex items-start gap-3 rounded-[5px] px-3 py-2.5 transition-colors duration-150 hover:bg-paper-deep/70"
                        >
                          <span className="mt-0.5 font-mono text-[10px] tracking-[0.1em] text-ink-mute">
                            {category.index}
                          </span>
                          <span>
                            <span className="block text-[13px] font-medium text-ink group-hover:text-brand-700">
                              {category.name}
                            </span>
                            <span className="mt-0.5 block text-[11.5px] text-ink-mute">
                              {getProductsByCategory(category.slug).length} products
                            </span>
                          </span>
                        </Link>
                      ))}
                    </div>
                    <div className="mt-1 border-t border-line pt-2">
                      <Link
                        href="/products"
                        className="flex items-center justify-between px-3 py-2 text-[12px] font-medium text-ink transition-colors hover:text-brand-600"
                      >
                        Full product catalog
                        <Icon name="arrow-right" size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
              ) : null}
            </div>

            {mainNav.slice(1).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`py-2 text-[13.5px] font-medium transition-colors duration-200 ${
                  isActive(item.href) ? "text-brand-600" : "text-ink hover:text-brand-600"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={`tel:${site.phone.tel}`}
              className="hidden items-center gap-2 border-r border-line pr-4 font-mono text-[11.5px] tabular-nums text-ink-soft transition-colors hover:text-ink lg:flex"
            >
              <Icon name="phone" size={13} />
              {site.phone.display}
            </a>
            <Link href="/contact" className="hidden btn-primary !py-2.5 !px-4 sm:inline-flex">
              Get a quote
            </Link>
            <button
              type="button"
              onClick={() => setMobileOpen((open) => !open)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              className="grid h-10 w-10 place-items-center rounded-[6px] border border-line-strong text-ink transition-colors hover:border-ink/40 lg:hidden"
            >
              <Icon name={mobileOpen ? "close" : "menu"} size={18} />
            </button>
          </div>
        </div>
      </div>

      {mobileOpen ? (
        <div
          id="mobile-menu"
          className="fixed inset-x-0 bottom-0 top-14 z-40 overflow-y-auto border-t border-line bg-paper lg:hidden"
        >
          <div className="shell py-6">
            <p className="eyebrow">Catalog</p>
            <ul className="mt-3 divide-y divide-line border-y border-line">
              {categories.map((category) => (
                <li key={category.slug}>
                  <Link
                    href={`/products/${category.slug}`}
                    className="flex items-center justify-between py-3.5"
                  >
                    <span className="flex items-baseline gap-3">
                      <span className="font-mono text-[10px] text-ink-mute">{category.index}</span>
                      <span className="text-[15px] font-medium">{category.name}</span>
                    </span>
                    <Icon name="chevron-right" size={15} className="text-ink-mute" />
                  </Link>
                </li>
              ))}
            </ul>

            <ul className="mt-6 space-y-3.5">
              {mainNav.slice(1).map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-[15px] font-medium">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-7 grid gap-2.5">
              <Link href="/contact" className="btn-primary w-full">
                Get a quote
              </Link>
              <a
                href={`tel:${site.phone.tel}`}
                className="btn-outline w-full font-mono text-[12px] tabular-nums"
              >
                <Icon name="phone" size={14} />
                {site.phone.display}
              </a>
            </div>
            <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.14em] text-ink-mute">
              {site.hours}
            </p>
          </div>
        </div>
      ) : null}
    </header>
  );
}
