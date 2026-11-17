import type { Metadata } from "next";

import { InquiryForm } from "@/components/contact/InquiryForm";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Icon } from "@/components/ui/Icon";
import { site, waLink, waMessages } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact the works — Sangareddy, Telangana",
  description:
    "Send a poultry equipment enquiry to Sai Kiran Poultry Equipments: shed size, bird count and power supply. WhatsApp, phone and works address in IDA Bollaram, Sangareddy.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: `Contact | ${site.name}`,
    description:
      "Inquiry form, WhatsApp line and works address for Sai Kiran Poultry Equipments, Sangareddy.",
    url: "/contact",
    images: ["/og.png"],
  },
};

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Sai Kiran Poultry Equipments",
  url: `${site.url}/contact`,
  mainEntity: {
    "@type": "LocalBusiness",
    name: site.legalName,
    telephone: site.phone.tel,
    email: site.email,
    url: site.url,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.office.lines[0],
      addressLocality: "Bollaram, Sangareddy",
      addressRegion: "Telangana",
      postalCode: "502325",
      addressCountry: "IN",
    },
    openingHours: "Mo-Sa 09:00-18:30",
  },
};

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-line">
        <div className="shell py-9 md:py-12">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Contact" }]} />
          <div className="mt-7 grid gap-8 md:grid-cols-12 md:items-end">
            <div className="md:col-span-8">
              <p className="eyebrow">Contact / Sangareddy works</p>
              <h1 className="h2 mt-4 max-w-[20ch] text-[clamp(2rem,4vw,3.1rem)]">
                Send the shed size. Get a line layout.
              </h1>
              <p className="mt-5 max-w-[52ch] text-[14.5px] leading-[1.7] text-ink-soft">
                Quotations are built from shed dimensions, bird count and your power supply. Send
                those three and the sizing desk returns a line-wise price with fan counts and pan
                spacing worked out.
              </p>
            </div>
            <div className="md:col-span-4 md:border-l md:border-line md:pl-6">
              <a
                href={`tel:${site.phone.tel}`}
                className="flex items-center gap-2 font-mono text-[15px] tabular-nums text-ink transition-colors hover:text-brand-700"
              >
                <Icon name="phone" size={15} />
                {site.phone.display}
              </a>
              <a
                href={`mailto:${site.email}`}
                className="mt-2.5 flex items-center gap-2 text-[13px] text-ink-soft transition-colors hover:text-brand-700"
              >
                <Icon name="mail" size={14} />
                {site.email}
              </a>
              <p className="mt-3 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.1em] text-ink-mute">
                <Icon name="clock" size={13} />
                {site.hours}
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="shell py-12 md:py-16">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <section className="lg:col-span-7" aria-labelledby="inquiry-heading">
            <div className="flex items-baseline justify-between border-b border-line pb-3">
              <h2 id="inquiry-heading" className="text-[15px] font-semibold">
                Inquiry form
              </h2>
              <span className="font-mono text-[9.5px] uppercase tracking-[0.12em] text-ink-mute">
                No account needed
              </span>
            </div>
            <div className="mt-6">
              <InquiryForm />
            </div>
          </section>

          <aside className="lg:col-span-5">
            <div className="rounded-card border border-ink bg-ink p-6 text-white">
              <p className="font-mono text-[9.5px] uppercase tracking-[0.14em] text-white/60">
                Fastest route
              </p>
              <h2 className="mt-3 text-[19px] font-semibold leading-[1.25]">
                WhatsApp the sizing desk directly.
              </h2>
              <p className="mt-2.5 text-[13px] leading-[1.65] text-white/60">
                Send a photo of the shed and the bird count. Voice notes work too — most of our
                enquiries come in that way.
              </p>
              <a
                href={waLink(waMessages.quote)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-[6px] bg-brand-500 px-5 py-3 text-[13.5px] font-medium text-white transition-colors hover:bg-brand-600"
              >
                <Icon name="whatsapp" size={16} />
                Chat on WhatsApp
              </a>
              <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.1em] text-white/55">
                {site.phone.display} · replies during works hours
              </p>
            </div>

            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              {[site.office, site.warehouse].map((location) => (
                <div key={location.label} className="rounded-card border border-line bg-paper-card p-4">
                  <p className="flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.1em] text-ink-mute">
                    <Icon name="pin" size={12} />
                    {location.label}
                  </p>
                  <address className="mt-2 text-[12.5px] not-italic leading-[1.6] text-ink-soft">
                    {location.lines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </address>
                </div>
              ))}
            </div>

            <div className="relative mt-3 aspect-[4/3] overflow-hidden rounded-card border border-line bg-paper-deep grid-lines">
              <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
                <Icon name="pin" size={22} className="text-brand-700" strokeWidth={1.4} />
                <p className="mt-3 font-mono text-[9.5px] uppercase tracking-[0.14em] text-ink-mute">
                  Map embed slot
                </p>
                <p className="mt-2 max-w-[24ch] text-[12.5px] leading-[1.5] text-ink-soft">
                  {site.office.lines[0]}, {site.office.lines[1]}
                </p>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=IDA+Bollaram+Sangareddy+Telangana"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 border-b border-ink/25 pb-0.5 text-[11.5px] font-medium transition-colors hover:border-brand-600 hover:text-brand-700"
                >
                  Open in Maps
                  <Icon name="arrow-up-right" size={12} />
                </a>
              </div>
              <span className="absolute left-3 top-3 font-mono text-[8.5px] uppercase tracking-[0.1em] text-ink-mute">
                17.53° N / 78.35° E
              </span>
              <span className="absolute bottom-3 right-3 font-mono text-[8.5px] uppercase tracking-[0.1em] text-ink-mute">
                NH-65 · 35 km from Hyderabad
              </span>
            </div>
            <p className="mt-2.5 font-mono text-[10px] uppercase leading-relaxed tracking-[0.08em] text-ink-mute">
              Site visits by appointment · bring shed dimensions and last cycle&apos;s FCR sheet
            </p>
          </aside>
        </div>
      </div>

      <JsonLd id="contact-schema" data={contactSchema} />
    </>
  );
}
