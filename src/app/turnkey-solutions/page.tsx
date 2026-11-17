import type { Metadata } from "next";
import Link from "next/link";

import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { shedParameters, turnkeyComparison } from "@/data/products";
import { site, waLink, waMessages } from "@/lib/site";

export const metadata: Metadata = {
  title: "Turnkey poultry houses — EC tunnel vs open house",
  description:
    "Compare closed tunnel environment-controlled houses against open-house packages for rural entrepreneurs: fan counts, pad area, stocking density, FCR bands, capex and a worked ROI example for a 120 × 40 ft shed.",
  alternates: { canonical: "/turnkey-solutions" },
  openGraph: {
    title: `Turnkey poultry houses | ${site.name}`,
    description:
      "Closed tunnel EC house or open-house package — a line-by-line comparison with shed parameters and FCR economics.",
    url: "/turnkey-solutions",
    images: ["/og.png"],
  },
};

const roiRows = [
  { label: "House", value: "120 × 40 ft · 6,400 birds" },
  { label: "Cycles per year", value: "6" },
  { label: "Feed saved per bird", value: "0.18 kg" },
  { label: "Feed price assumed", value: "₹38 / kg" },
  { label: "Feed saved per year", value: "6.9 tonnes" },
  { label: "Value of feed saved", value: "₹2,62,656" },
  { label: "Fewer mortality losses", value: "576 birds · ₹54,720" },
];

const fcrDrivers = [
  {
    title: "Temperature band",
    body: "Broilers hold intake between 22 and 26 °C. Above that, feed goes to panting instead of gain. Tunnel airflow keeps the band through May and June.",
    metric: "22–26 °C",
  },
  {
    title: "Feed access",
    body: "Pan lip height set to the bird's back and grill openings adjusted by age. A pan that is 20 mm too high costs more than any feed additive.",
    metric: "5 mm",
  },
  {
    title: "Water flow",
    body: "80–90 ml/min at 25 cm column from day one to lift. Restricted nipples cut intake first and show up as uneven birds three weeks later.",
    metric: "80–90 ml",
  },
];

const timeline = [
  { label: "Day 0", title: "Site and supply survey", body: "Levels, approach, power phase, water source and shed orientation recorded." },
  { label: "Day 3", title: "Layout and quotation", body: "Fan schedule, pad area, line lengths and control stages issued with the price." },
  { label: "Day 10", title: "Mobilisation", body: "Structure and sheeting first, services next, equipment last to avoid site damage." },
  { label: "Day 45", title: "Live commissioning", body: "48 hours with birds inside, alarm tests, and staff training on the control panel." },
];

export default function TurnkeySolutionsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Turnkey poultry housing solutions",
    url: `${site.url}/turnkey-solutions`,
    description:
      "Comparison of closed tunnel environment-controlled poultry houses and open-house packages for rural entrepreneurs, with shed parameters and FCR economics.",
    isPartOf: { "@id": `${site.url}/#website` },
    about: { "@id": `${site.url}/#organization` },
  };

  return (
    <>
      <section className="border-b border-line bg-paper-deep/40">
        <div className="shell py-9 md:py-14">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Turnkey solutions" }]} />
          <div className="mt-7 grid gap-8 md:grid-cols-12 md:items-end">
            <div className="md:col-span-8">
              <p className="eyebrow">Turnkey housing / two packages</p>
              <h1 className="display mt-5 max-w-[19ch] text-[clamp(2.2rem,4.4vw,3.4rem)]">
                Closed tunnel or open house. The numbers decide.
              </h1>
              <p className="mt-6 max-w-[56ch] text-[15px] leading-[1.7] text-ink-soft">
                A tunnel house costs roughly twice as much per square foot and stocks 40% more birds
                in the same footprint. Whether that pays depends on your summer, your power supply
                and how many cycles you actually run — not on which package sounds more modern.
              </p>
            </div>
            <div className="md:col-span-4">
              <div className="rounded-card border border-line bg-paper-card p-5">
                <p className="font-mono text-[9.5px] uppercase tracking-[0.12em] text-ink-mute">
                  At a glance
                </p>
                <dl className="mt-3 space-y-2.5 border-t border-line pt-3 text-[12.5px]">
                  <div className="flex justify-between gap-3">
                    <dt className="text-ink-soft">EC capex band</dt>
                    <dd className="font-mono text-ink">₹1,050–1,250 / ft²</dd>
                  </div>
                  <div className="flex justify-between gap-3">
                    <dt className="text-ink-soft">Open house band</dt>
                    <dd className="font-mono text-ink">₹480–620 / ft²</dd>
                  </div>
                  <div className="flex justify-between gap-3">
                    <dt className="text-ink-soft">EC FCR band</dt>
                    <dd className="font-mono text-ink">1.48–1.58</dd>
                  </div>
                  <div className="flex justify-between gap-3">
                    <dt className="text-ink-soft">Open FCR band</dt>
                    <dd className="font-mono text-ink">1.58–1.72</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="shell py-12 md:py-16" aria-labelledby="comparison">
        <SectionHeading
          eyebrow="Package comparison"
          title={<span id="comparison">Ten rows that decide the package.</span>}
          description="Both packages are built by the same crew to the same material grades. The difference is the envelope, the airflow and what that does to stocking and mortality."
        />

        <div className="mt-8 overflow-x-auto rounded-card border border-line">
          <table className="w-full min-w-[760px] border-collapse text-left">
            <caption className="sr-only">
              Comparison of closed tunnel environment-controlled houses and open-house packages
            </caption>
            <thead>
              <tr className="bg-ink text-white">
                <th scope="col" className="w-[26%] px-5 py-4 font-mono text-[9.5px] uppercase tracking-[0.12em] text-white/55">
                  Parameter
                </th>
                <th scope="col" className="w-[37%] px-5 py-4">
                  <span className="block text-[13px] font-semibold text-white">
                    Closed tunnel EC house
                  </span>
                  <span className="mt-1 block font-mono text-[9px] uppercase tracking-[0.1em] text-brand-300">
                    For 4,000+ birds and three-phase supply
                  </span>
                </th>
                <th scope="col" className="w-[37%] px-5 py-4">
                  <span className="block text-[13px] font-semibold text-white">
                    Open house / rural entrepreneur
                  </span>
                  <span className="mt-1 block font-mono text-[9px] uppercase tracking-[0.1em] text-white/60">
                    For first cycles and single-phase supply
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              {turnkeyComparison.map((row) => (
                <tr key={row.label} className="border-t border-line bg-paper-card even:bg-paper-deep/25">
                  <th scope="row" className="px-5 py-4 align-top text-[12.5px] font-medium text-ink">
                    {row.label}
                  </th>
                  <td className="px-5 py-4 align-top text-[12.5px] leading-[1.6] text-ink-soft">
                    {row.ec}
                  </td>
                  <td className="px-5 py-4 align-top text-[12.5px] leading-[1.6] text-ink-soft">
                    {row.open}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl font-mono text-[10px] uppercase leading-relaxed tracking-[0.08em] text-ink-mute">
            Capex bands exclude land and approach road · FCR and mortality bands are operator
            averages reported across our 2023–2025 installations
          </p>
          <div className="flex gap-2.5">
            <Link href="/contact" className="btn-primary shrink-0">
              Size my shed
            </Link>
            <a
              href={waLink(waMessages.turnkey)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline shrink-0"
            >
              <Icon name="whatsapp" size={15} />
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-paper-deep/40 py-12 md:py-16" aria-labelledby="parameters">
        <div className="shell">
          <SectionHeading
            eyebrow="Shed parameter guide"
            title={<span id="parameters">Fan count and pad area by shed size.</span>}
            description="Design temperature 40 °C dry bulb, tunnel velocity 2.5 m/s across the birds. Coastal humidity needs a larger pad and lower stocking."
          />

          <div className="mt-8 overflow-x-auto rounded-card border border-line">
            <table className="w-full min-w-[720px] border-collapse text-left">
              <caption className="sr-only">Recommended fan count, pad area and bird capacity by shed size</caption>
              <thead>
                <tr className="border-b border-line bg-paper-card">
                  {["Shed size", "Floor area", "Fans", "Pad area", "Bird capacity", "Density"].map(
                    (heading) => (
                      <th
                        key={heading}
                        scope="col"
                        className="px-5 py-3 font-mono text-[9.5px] uppercase tracking-[0.12em] text-ink-mute"
                      >
                        {heading}
                      </th>
                    ),
                  )}
                </tr>
              </thead>
              <tbody>
                {shedParameters.map((row) => (
                  <tr key={row.shed} className="border-t border-line bg-paper-card even:bg-paper-deep/25">
                    <th scope="row" className="px-5 py-3.5 font-mono text-[12.5px] font-medium text-ink">
                      {row.shed}
                    </th>
                    <td className="px-5 py-3.5 font-mono text-[12px] text-ink-soft">{row.area}</td>
                    <td className="px-5 py-3.5 font-mono text-[12px] text-ink-soft">{row.fans}</td>
                    <td className="px-5 py-3.5 font-mono text-[12px] text-ink-soft">{row.pad}</td>
                    <td className="px-5 py-3.5 font-mono text-[12px] text-ink">{row.capacity}</td>
                    <td className="px-5 py-3.5 font-mono text-[12px] text-ink-soft">{row.density}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 font-mono text-[10px] uppercase leading-relaxed tracking-[0.08em] text-ink-mute">
            Pad area at 100 mm 7090 sheet · Figure on face velocity of 1.8 m/s · Add 15% for sheds
            over 200 ft or sites above 600 m
          </p>
        </div>
      </section>

      <section className="shell py-12 md:py-16" aria-labelledby="roi">
        <div className="grid gap-10 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-6">
            <p className="eyebrow">ROI and FCR</p>
            <h2 id="roi" className="h2 mt-4 text-[clamp(1.7rem,3vw,2.4rem)]">
              Where the money actually comes back.
            </h2>
            <p className="mt-5 text-[14px] leading-[1.75] text-ink-soft">
              Ventilation does not sell at the gate. It shows up as feed conversion, mortality and
              the number of cycles you can run in a year. A tunnel house that holds 24–26 °C through
              summer lets birds eat through the afternoon instead of panting, and that is the
              difference between 1.62 and 1.54 on the same feed.
            </p>
            <p className="mt-4 text-[14px] leading-[1.75] text-ink-soft">
              Mortality compounds the same way. Heat stress events cost birds in the last ten days,
              when they carry the most weight and the most feed. Cutting a 4.1% cycle down to 2.6%
              recovers roughly 96 birds per cycle in a 6,400-bird house.
            </p>

            <div className="mt-7 grid gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-3">
              {fcrDrivers.map((driver) => (
                <div key={driver.title} className="bg-paper-card p-4">
                  <p className="font-mono text-[13px] tabular-nums text-brand-700">{driver.metric}</p>
                  <h3 className="mt-2 text-[12.5px] font-semibold">{driver.title}</h3>
                  <p className="mt-1.5 text-[11.5px] leading-[1.55] text-ink-soft">{driver.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="md:col-span-6">
            <div className="overflow-hidden rounded-panel border border-ink bg-ink text-white">
              <div className="flex items-center justify-between border-b border-white/12 px-5 py-3.5">
                <p className="font-mono text-[9.5px] uppercase tracking-[0.14em] text-white/50">
                  Worked example
                </p>
                <p className="font-mono text-[9.5px] uppercase tracking-[0.1em] text-brand-300">
                  Per year
                </p>
              </div>
              <dl className="divide-y divide-white/10 px-5">
                {roiRows.map((row) => (
                  <div key={row.label} className="flex items-baseline justify-between gap-4 py-3">
                    <dt className="text-[12.5px] text-white/60">{row.label}</dt>
                    <dd className="font-mono text-[12px] tabular-nums text-white">{row.value}</dd>
                  </div>
                ))}
              </dl>
              <div className="flex items-baseline justify-between gap-4 border-t border-white/20 bg-white/[0.04] px-5 py-4">
                <p className="text-[12.5px] font-medium text-white">Combined annual return</p>
                <p className="font-mono text-[17px] tabular-nums text-brand-300">≈ ₹3.17 lakh</p>
              </div>
            </div>
            <p className="mt-3 font-mono text-[10px] uppercase leading-relaxed tracking-[0.08em] text-ink-mute">
              Assumes 2.2 kg live weight, 6 cycles, ₹38/kg feed, ₹95/bird realisation, FCR 1.62 →
              1.54 and mortality 4.1% → 2.6%. Replace with your last three cycles before you invest
              anything.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="shell py-12 md:py-14">
          <SectionHeading
            eyebrow="From enquiry to handover"
            title="45 days, in four steps."
            description="Open-house packages run the same sequence in 21 days."
          />
          <ol className="mt-8 grid gap-px overflow-hidden rounded-card border border-line bg-line md:grid-cols-4">
            {timeline.map((step) => (
              <li key={step.label} className="flex h-full flex-col bg-paper-card p-5">
                <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-brand-700">
                  {step.label}
                </span>
                <h3 className="mt-3 text-[14.5px] font-semibold leading-[1.3]">{step.title}</h3>
                <p className="mt-2 text-[12.5px] leading-[1.6] text-ink-soft">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <JsonLd id="turnkey-schema" data={schema} />
    </>
  );
}
