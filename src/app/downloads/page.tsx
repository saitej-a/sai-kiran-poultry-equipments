import type { Metadata } from "next";
import Link from "next/link";

import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Icon } from "@/components/ui/Icon";
import { brochures } from "@/data/products";
import { site, waLink, waMessages } from "@/lib/site";
import type { Brochure } from "@/types/product";

export const metadata: Metadata = {
  title: "Brochures, catalogues and technical manuals",
  description:
    "Download the Sai Kiran master catalogue, product specification sheets for feeding, drinking and climate control lines, turnkey house specs and the installation manual.",
  alternates: { canonical: "/downloads" },
  openGraph: {
    title: `Brochures & manuals | ${site.name}`,
    description:
      "Master catalogue, product specification sheets and installation manuals in PDF.",
    url: "/downloads",
    images: ["/og.png"],
  },
};

const groups: Brochure["group"][] = ["Catalogues", "Product sheets", "Technical manuals"];

export default function DownloadsPage() {
  return (
    <>
      <section className="border-b border-line bg-paper-deep/40">
        <div className="shell py-9 md:py-14">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Downloads" }]} />
          <div className="mt-7 grid gap-8 md:grid-cols-12 md:items-end">
            <div className="md:col-span-8">
              <p className="eyebrow">Media centre</p>
              <h1 className="h2 mt-4 max-w-[22ch] text-[clamp(2rem,4vw,3.1rem)]">
                Everything we print, in one place.
              </h1>
              <p className="mt-5 max-w-[52ch] text-[14.5px] leading-[1.7] text-ink-soft">
                Catalogue, product specification sheets and the installation manual. The spec sheets
                are the same documents our sales desk quotes from, including material grades and
                working-pressure figures.
              </p>
            </div>
            <div className="md:col-span-4">
              <div className="rounded-card border border-line bg-paper-card p-5">
                <p className="font-mono text-[9.5px] uppercase tracking-[0.12em] text-ink-mute">
                  Prefer a printed set?
                </p>
                <p className="mt-2 text-[12.5px] leading-[1.6] text-ink-soft">
                  Collect from the works, or ask for a courier to your district.
                </p>
                <a
                  href={waLink(waMessages.brochure("master catalogue"))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-2 text-[12.5px] font-medium text-brand-700 transition-colors hover:text-brand-800"
                >
                  <Icon name="whatsapp" size={14} />
                  Request printed set
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="shell py-12 md:py-16">
        {groups.map((group) => {
          const files = brochures.filter((brochure) => brochure.group === group);
          return (
            <section key={group} className="mb-12 last:mb-0" aria-labelledby={`group-${group}`}>
              <div className="flex items-baseline justify-between border-b border-line pb-3">
                <h2 id={`group-${group}`} className="text-[15px] font-semibold tracking-[-0.01em]">
                  {group}
                </h2>
                <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-ink-mute">
                  {String(files.length).padStart(2, "0")} files
                </span>
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {files.map((file) => (
                  <div key={file.file} className="h-full">
                    <article className="flex h-full flex-col rounded-card border border-line bg-paper-card p-5 transition-colors duration-200 hover:border-ink/30">
                      <div className="flex items-start justify-between">
                        <span className="grid h-9 w-9 place-items-center rounded-[4px] border border-line text-ink/55">
                          <Icon name="document" size={17} strokeWidth={1.3} />
                        </span>
                        <span className="font-mono text-[9px] uppercase tracking-[0.1em] text-ink-mute">
                          {file.format} · {file.pages}
                        </span>
                      </div>

                      <h3 className="mt-4 text-[15px] font-semibold leading-[1.3]">{file.title}</h3>
                      <p className="mt-2 flex-1 text-[12.5px] leading-[1.6] text-ink-soft">
                        {file.description}
                      </p>

                      <div className="mt-5 flex items-center justify-between border-t border-line pt-3">
                        <span className="font-mono text-[10px] uppercase tracking-[0.08em] text-ink-mute">
                          {file.size}
                        </span>
                        <a
                          href={file.file}
                          download
                          className="inline-flex items-center gap-1.5 text-[12px] font-medium text-ink transition-colors hover:text-brand-700"
                        >
                          Download
                          <Icon name="download" size={13} />
                        </a>
                      </div>
                    </article>
                  </div>
                ))}
              </div>
            </section>
          );
        })}

        <div className="mt-4 flex flex-col gap-4 rounded-card border border-line bg-paper-deep/40 p-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-[13px] leading-[1.65] text-ink-soft">
            Looking for a drawing for a specific shed — fan placement, pad wall dimensions or line
            layout? The sizing desk sends as-built drawings with the quotation.
          </p>
          <Link href="/contact" className="btn-outline shrink-0">
            Ask the sizing desk
            <Icon name="arrow-right" size={14} />
          </Link>
        </div>
      </div>
    </>
  );
}
