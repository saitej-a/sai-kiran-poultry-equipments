import type { Metadata } from "next";
import Link from "next/link";

import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Icon } from "@/components/ui/Icon";
import { ProductImage } from "@/components/ui/ProductImage";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About the works — Sangareddy, Telangana",
  description:
    "Sai Kiran Poultry Equipments has manufactured and commissioned poultry feeding, drinking and ventilation equipment from IDA Bollaram, Sangareddy since 2009. Material grades, quality gates and how we work.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: `About the works | ${site.name}`,
    description:
      "One works in Sangareddy, five equipment lines, and a rule that every quotation names the material grade.",
    url: "/about",
    images: ["/og.png"],
  },
};

const facts = [
  { label: "Established", value: "2009" },
  { label: "Works", value: "18,000 ft²" },
  { label: "Team", value: "22 people" },
  { label: "Equipment lines", value: "5" },
  { label: "Dispatch", value: "14 states" },
  { label: "Commissioning", value: "21–45 days" },
];

const process = [
  {
    index: "01",
    title: "Sizing before quotation",
    body: "Shed length, width, bird count, power supply and water source go onto one sheet. Fan counts, pan spacing and pad area are calculated from those numbers — not picked off a rate card.",
  },
  {
    index: "02",
    title: "Goods-in inspection",
    body: "Sheet thickness is measured, galvanising certificates are filed against the batch, and UV masterbatch is checked per resin lot. A consignment that fails goes back before it reaches the shop floor.",
  },
  {
    index: "03",
    title: "Assembly and balancing",
    body: "Fan blade sets are balanced as an assembly at 560 rpm and logged by serial number. Feed and drink lines are run on jigs to check alignment before dispatch.",
  },
  {
    index: "04",
    title: "Commissioning and handover",
    body: "Site teams install structure, lines and controls, then run a live 48-hour check with your first flock inside. You get the as-built schedules, spares list and a written power-cut procedure.",
  },
];

const qualityGates = [
  { check: "Sheet thickness", method: "Micrometer, at goods-in", frequency: "Every consignment" },
  { check: "Galvanising", method: "Z275 certificate + salt-spray sample", frequency: "Per batch" },
  { check: "UV masterbatch", method: "Supplier certificate + weather test", frequency: "Per resin lot" },
  { check: "Fan balance", method: "Vibration reading at 560 rpm", frequency: "Every fan" },
  { check: "Nipple flow", method: "90-second timed draw at 25 cm", frequency: "1 in 50 nipples" },
  { check: "Line pressure", method: "40 kPa hold for 30 minutes", frequency: "Per assembly" },
];

const desks = [
  {
    icon: "ruler" as const,
    title: "Sizing desk",
    body: "Line layouts, fan schedules and quotations. Replies within one working day on weekdays.",
  },
  {
    icon: "wrench" as const,
    title: "Installation crew",
    body: "Structure, lines, electricals and controls on site. Same crew from first bolt to commissioning.",
  },
  {
    icon: "document" as const,
    title: "Service & spares",
    body: "Part numbers held against your installation. Spares dispatched within 48 hours of confirmation.",
  },
];

export default function AboutPage() {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Sai Kiran Poultry Equipments",
    url: `${site.url}/about`,
    mainEntity: { "@id": `${site.url}/#organization` },
  };

  return (
    <>
      <section className="border-b border-line">
        <div className="shell py-9 md:py-14">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About" }]} />
          <div className="mt-7 grid gap-10 md:grid-cols-12 md:gap-8">
            <div className="md:col-span-7">
              <p className="eyebrow">The works / IDA Bollaram</p>
              <h1 className="display mt-5 max-w-[16ch] text-[clamp(2.3rem,4.6vw,3.6rem)]">
                We build for the shed, not the showroom.
              </h1>
              <p className="mt-6 max-w-[52ch] text-[15px] leading-[1.7] text-ink-soft">
                Sai Kiran has been moulding, galvanising, assembling and commissioning poultry
                equipment out of Sangareddy since {site.established}. Twenty-two people, one works,
                five lines — and a rule that every quotation names the material grade it is built
                from.
              </p>
            </div>

            <div className="md:col-span-5">
              <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-card border border-line bg-line">
                {facts.map((fact) => (
                  <div key={fact.label} className="bg-paper-card px-4 py-4">
                    <dt className="font-mono text-[9px] uppercase tracking-[0.12em] text-ink-mute">
                      {fact.label}
                    </dt>
                    <dd className="mt-1.5 font-mono text-[15px] tabular-nums text-ink">{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      <section className="shell py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-6">
            <ProductImage
              label="Fabrication bay, IDA Bollaram works — pan line assembly"
              sku="SKPE-WORKS"
              categorySlug="housing-turnkey"
              view="Assembly bay"
              className="aspect-[5/4] w-full rounded-panel border border-line"
            />
          </div>
          <div className="md:col-span-6">
            <p className="eyebrow">Where we sit</p>
            <h2 className="h2 mt-4 text-[clamp(1.6rem,2.8vw,2.2rem)]">
              Close enough to reach the shed the same week.
            </h2>
            <p className="mt-5 text-[14px] leading-[1.75] text-ink-soft">
              The works sits inside IDA Bollaram, 35 km from Hyderabad, which puts most of
              Telangana&apos;s broiler belt within a day&apos;s drive. That matters at commissioning
              and it matters more in week six, when a regulator or a bearing needs replacing.
            </p>
            <p className="mt-4 text-[14px] leading-[1.75] text-ink-soft">
              We supply integrators, independent farmers and dealers across Telangana, Andhra
              Pradesh, Karnataka and Maharashtra. Dealer enquiries get the same specification sheets
              as direct customers — no separate &ldquo;dealer grade&rdquo; line.
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              <div className="rounded-card border border-line bg-paper-card p-4">
                <p className="font-mono text-[9px] uppercase tracking-[0.12em] text-ink-mute">
                  {site.office.label}
                </p>
                {site.office.lines.map((line) => (
                  <p key={line} className="mt-1 text-[12.5px] leading-[1.55] text-ink-soft">
                    {line}
                  </p>
                ))}
              </div>
              <div className="rounded-card border border-line bg-paper-card p-4">
                <p className="font-mono text-[9px] uppercase tracking-[0.12em] text-ink-mute">
                  {site.warehouse.label}
                </p>
                {site.warehouse.lines.map((line) => (
                  <p key={line} className="mt-1 text-[12.5px] leading-[1.55] text-ink-soft">
                    {line}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-paper-deep/50 py-12 md:py-16">
        <div className="shell">
          <SectionHeading
            eyebrow="How a package moves"
            title="Four stages, with a check between each."
            description="Most equipment problems are decided before the equipment is installed — in sizing, in goods-in, or in a commissioning run that never happened."
          />
          <ol className="mt-9 grid gap-px overflow-hidden rounded-card border border-line bg-line md:grid-cols-2 lg:grid-cols-4">
            {process.map((step) => (
              <li key={step.index} className="flex h-full flex-col bg-paper-card p-5">
                <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-mute">
                  {step.index}
                </span>
                <h3 className="mt-4 text-[15px] font-semibold leading-[1.3]">{step.title}</h3>
                <p className="mt-2.5 text-[13px] leading-[1.65] text-ink-soft">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="shell py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-5">
            <p className="eyebrow">Quality gates</p>
            <h2 className="h2 mt-4 text-[clamp(1.6rem,2.8vw,2.2rem)]">
              What gets checked, and how often.
            </h2>
            <p className="mt-5 max-w-[42ch] text-[14px] leading-[1.75] text-ink-soft">
              Six checks cover the failure modes we actually see in the field. Records are kept
              against the batch and the fan serial number, so a complaint can be traced to a
              consignment rather than a shrug.
            </p>
            <Link
              href="/downloads"
              className="mt-6 inline-flex items-center gap-2 border-b border-ink/25 pb-1 text-[13px] font-medium transition-colors hover:border-brand-600 hover:text-brand-700"
            >
              Download the standards sheet
              <Icon name="download" size={14} />
            </Link>
          </div>

          <div className="md:col-span-7">
            <table className="spec-table">
              <caption>Inspection record — current build</caption>
              <thead>
                <tr className="border-t border-line">
                  <th scope="col" className="py-2.5 pr-4 font-mono text-[9.5px] uppercase tracking-[0.1em] text-ink-mute">
                    Check
                  </th>
                  <th scope="col" className="py-2.5 pr-4 font-mono text-[9.5px] uppercase tracking-[0.1em] text-ink-mute">
                    Method
                  </th>
                  <th scope="col" className="py-2.5 text-right font-mono text-[9.5px] uppercase tracking-[0.1em] text-ink-mute">
                    Frequency
                  </th>
                </tr>
              </thead>
              <tbody>
                {qualityGates.map((gate) => (
                  <tr key={gate.check}>
                    <th scope="row" className="py-3 pr-4 font-medium text-ink">
                      {gate.check}
                    </th>
                    <td className="py-3 pr-4 text-[12.5px] font-normal text-ink-soft">{gate.method}</td>
                    <td className="py-3 text-right font-mono text-[11px] text-ink-soft">
                      {gate.frequency}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="shell py-12 md:py-16">
          <SectionHeading
            eyebrow="Who you deal with"
            title="Three desks, no call centre."
            description="Every enquiry lands with a person who can read a shed drawing and price a line."
          />
          <div className="mt-8 grid gap-3 md:grid-cols-3">
            {desks.map((desk) => (
              <div key={desk.title} className="h-full">
                <div className="flex h-full flex-col rounded-card border border-line bg-paper-card p-6">
                  <Icon name={desk.icon} size={20} className="text-brand-700" strokeWidth={1.4} />
                  <h3 className="mt-4 text-[15px] font-semibold">{desk.title}</h3>
                  <p className="mt-2.5 text-[13px] leading-[1.65] text-ink-soft">{desk.body}</p>
                  <a
                    href={`tel:${site.phone.tel}`}
                    className="mt-auto pt-5 font-mono text-[11px] tabular-nums text-ink transition-colors hover:text-brand-700"
                  >
                    {site.phone.display}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <JsonLd id="about-schema" data={aboutSchema} />
    </>
  );
}
