import Link from "next/link";

import { Icon } from "@/components/ui/Icon";
import { Logo } from "@/components/ui/Logo";
import { footerNav, site, waLink, waMessages } from "@/lib/site";

export function QuoteBanner() {
  return (
    <section className="bg-ink text-white">
      <div className="shell grid gap-8 py-14 md:grid-cols-12 md:items-end md:py-16">
        <div className="md:col-span-7">
          <p className="eyebrow text-white/50">Next step</p>
          <h2 className="h2 mt-4 max-w-xl text-white">
            Tell us the shed size. We will size the equipment around it.
          </h2>
          <p className="mt-4 max-w-lg text-[14.5px] leading-[1.7] text-white/60">
            Send shed length and width, bird count and your power supply. You get a line-wise
            quotation with fan counts, pan spacing and pad area worked out.
          </p>
        </div>
        <div className="flex flex-col gap-2.5 sm:flex-row md:col-span-5 md:justify-end">
          <Link href="/contact" className="btn-primary">
            Request a quotation
            <Icon name="arrow-right" size={15} />
          </Link>
          <a
            href={waLink(waMessages.turnkey)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-on-dark"
          >
            <Icon name="whatsapp" size={16} />
            WhatsApp the works
          </a>
        </div>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-paper-deep">
      <div className="shell grid gap-10 py-14 md:grid-cols-12">
        <div className="md:col-span-4">
          <Logo />
          <p className="mt-5 max-w-xs text-[13.5px] leading-[1.7] text-ink-soft">
            Feeding, drinking, ventilation and turnkey housing for commercial broiler and layer
            farms. Manufactured at IDA Bollaram, dispatched across India.
          </p>
          <div className="mt-5 space-y-2 font-mono text-[11px] uppercase tracking-[0.12em] text-ink-mute">
            <p>GSTIN 36AAXFS1932K1Z4</p>
            <p>Est. {site.established} · Sangareddy works</p>
          </div>
        </div>

        <nav aria-label="Catalog" className="md:col-span-2">
          <h2 className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-mute">Catalog</h2>
          <ul className="mt-4 space-y-2.5">
            {footerNav.catalog.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-[13.5px] text-ink-soft transition-colors hover:text-brand-600"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Company" className="md:col-span-2">
          <h2 className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-mute">Company</h2>
          <ul className="mt-4 space-y-2.5">
            {footerNav.company.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-[13.5px] text-ink-soft transition-colors hover:text-brand-600"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-4">
          <h2 className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-mute">
            Works &amp; dispatch
          </h2>
          <div className="mt-4 space-y-4 text-[13px] leading-[1.6] text-ink-soft">
            <div>
              <p className="font-medium text-ink">{site.office.label}</p>
              {site.office.lines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
            <div>
              <p className="font-medium text-ink">{site.warehouse.label}</p>
              {site.warehouse.lines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
            <div className="flex flex-col gap-1.5 pt-1">
              <a
                href={`tel:${site.phone.tel}`}
                className="inline-flex items-center gap-2 font-mono text-[12px] tabular-nums text-ink transition-colors hover:text-brand-600"
              >
                <Icon name="phone" size={13} />
                {site.phone.display}
              </a>
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center gap-2 text-ink transition-colors hover:text-brand-600"
              >
                <Icon name="mail" size={13} />
                {site.email}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="shell flex flex-col gap-2 py-5 font-mono text-[10px] uppercase tracking-[0.13em] text-ink-mute sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.legalName}. All rights reserved.
          </p>
          <p>{site.hours} · Site visits by appointment</p>
        </div>
      </div>
    </footer>
  );
}
