import Link from "next/link";

import { Icon } from "@/components/ui/Icon";
import { ProductImage } from "@/components/ui/ProductImage";
import { Reveal } from "@/components/ui/Reveal";
import { waLink, waMessages } from "@/lib/site";

const parameters = [
  { label: "Shed", value: "120 × 40 ft", note: "4,800 sq ft insulated" },
  { label: "Ventilation", value: "4 × 50 in", note: "178,000 CFM tunnel" },
  { label: "Cooling pad", value: "480 sq ft", note: "7090 · 100 mm" },
  { label: "Stocking", value: "6,400 birds", note: "0.75 sq ft / bird" },
  { label: "Power", value: "12 kW", note: "3-phase + 5 kVA backup" },
  { label: "Handover", value: "45 days", note: "from site handover" },
];

export function TurnkeyShowcase() {
  return (
    <section className="border-y border-line bg-paper-deep/40 py-16 md:py-24" aria-labelledby="turnkey-heading">
      <div className="shell grid gap-10 md:grid-cols-12 md:gap-8 lg:gap-12">
        <Reveal className="md:col-span-5">
          <p className="eyebrow">Turnkey EC housing</p>
          <h2 id="turnkey-heading" className="h2 mt-4 max-w-[18ch]">
            A closed tunnel house is a climate instrument, not a shed.
          </h2>
          <p className="mt-5 max-w-[46ch] text-[14.5px] leading-[1.7] text-ink-soft">
            Four fans, a pad bank and a controller solve three different problems: air exchange,
            temperature and humidity. Get the ratio wrong and the birds spend the summer panting
            instead of eating. We size all three against your design temperature before a quotation
            goes out.
          </p>

          <ul className="mt-7 space-y-4 border-t border-line pt-5">
            {[
              "Scope matrix agreed before mobilisation — structure, ventilation, feeding, drinking, electricals, controls.",
              "48-hour live commissioning run with your first flock inside, not an empty-shed walkthrough.",
              "Fan, pad and control schedules left on site, with spares listed by part number.",
            ].map((line) => (
              <li key={line} className="flex gap-3 text-[13.5px] leading-[1.65] text-ink-soft">
                <Icon name="check" size={15} className="mt-0.5 shrink-0 text-brand-600" strokeWidth={1.8} />
                {line}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-2.5 sm:flex-row">
            <Link href="/turnkey-solutions" className="btn-outline whitespace-nowrap">
              Compare packages
              <Icon name="arrow-right" size={15} />
            </Link>
            <a
              href={waLink(waMessages.turnkey)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-quiet whitespace-nowrap px-1 py-3"
            >
              <Icon name="whatsapp" size={15} />
              Ask on WhatsApp
            </a>
          </div>
        </Reveal>

        <Reveal className="md:col-span-7" delay={0.08}>
          <div className="overflow-hidden rounded-panel border border-ink bg-ink">
            <ProductImage
              label="Turnkey EC house, 120 × 40 ft — commissioning at a Sangareddy farm"
              sku="SKPE-HOUSE-EC120"
              categorySlug="housing-turnkey"
              view="Tunnel house · exterior"
              tone="dark"
              className="aspect-[16/9] w-full"
            />
            <div className="grid grid-cols-2 border-t border-white/12 sm:grid-cols-3">
              {parameters.map((parameter, index) => (
                <div
                  key={parameter.label}
                  className={`px-4 py-4 sm:px-5 ${
                    index % 2 === 0 ? "border-r border-white/10" : ""
                  } sm:border-r sm:border-white/10 sm:[&:nth-child(3n)]:border-r-0 ${
                    index < parameters.length - 2 ? "border-b border-white/10" : ""
                  } sm:border-b sm:border-white/10`}
                >
                  <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-white/55">
                    {parameter.label}
                  </p>
                  <p className="mt-1.5 font-mono text-[14px] leading-none text-white tabular-nums">
                    {parameter.value}
                  </p>
                  <p className="mt-1.5 font-mono text-[9px] uppercase tracking-[0.06em] text-brand-300/80">
                    {parameter.note}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.12em] text-ink-mute">
            Base specification · pad area and fan count recalculated for other shed lengths
          </p>
        </Reveal>
      </div>
    </section>
  );
}
