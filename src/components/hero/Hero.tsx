"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

import { HeroSchematic } from "@/components/hero/HeroSchematic";
import { Icon } from "@/components/ui/Icon";
import { waLink, waMessages } from "@/lib/site";

const metrics = [
  { value: "44,500", unit: "CFM", label: "50-inch cone fan at 0 Pa" },
  { value: "6,400", unit: "birds", label: "120 × 40 ft EC house" },
  { value: "0.08", unit: "FCR", label: "gain after drinking-line upgrade" },
  { value: "21", unit: "days", label: "open-house commissioning" },
];

const readout = [
  { value: "99.2%", label: "Feed retained in pan", note: "Anti-spill grill" },
  { value: "178,000", label: "CFM tunnel airflow", note: "4 × 50 in fans" },
  { value: "ISO 9001", label: "Works certification", note: "Since 2009" },
];

export function Hero() {
  const reduced = useReducedMotion();

  const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: reduced ? 0 : 0.085, delayChildren: 0.05 } },
  };

  const item = {
    hidden: { opacity: 0, y: reduced ? 0 : 18 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const } },
  };

  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <div className="pointer-events-none absolute inset-0 hairlines opacity-70" aria-hidden="true" />

      <div className="shell relative">
        <div className="grid grid-cols-1 items-center gap-10 pb-12 pt-12 md:pt-14 lg:grid-cols-12 lg:gap-10 lg:pb-16 lg:pt-16">
          <motion.div
            className="lg:col-span-6"
            variants={stagger}
            initial={reduced ? false : "hidden"}
            animate={reduced ? undefined : "visible"}
          >
            <motion.p
              variants={item}
              className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-brand-300"
            >
              <span className="inline-block h-px w-7 bg-brand-400/70" aria-hidden="true" />
              Proven poultry automation solutions
            </motion.p>

            <motion.h1
              variants={item}
              className="mt-6 max-w-[17ch] text-[clamp(2.3rem,4.1vw,3.35rem)] font-semibold leading-[1.03] tracking-[-0.032em] text-white"
            >
              Modern equipment &amp; turnkey systems for maximum farm profitability
            </motion.h1>

            <motion.p variants={item} className="mt-6 max-w-[46ch] text-[16px] leading-[1.65] text-white/65">
              Engineered for commercial broiler and layer farms. From day-old chick nipple lines to
              50-inch heavy-duty exhaust fans — built to hold feed conversion when the shed hits
              38&nbsp;°C.
            </motion.p>

            <motion.div variants={item} className="mt-8 flex flex-col gap-2.5 sm:flex-row">
              <Link href="/products" className="btn-primary">
                Explore equipment catalog
                <Icon name="arrow-right" size={15} />
              </Link>
              <a
                href={waLink(waMessages.turnkey)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-on-dark"
              >
                <Icon name="whatsapp" size={16} />
                Get turnkey farm quote
              </a>
            </motion.div>

            <motion.ul
              variants={item}
              className="mt-9 flex flex-wrap gap-x-6 gap-y-2.5 border-t border-white/12 pt-5 font-mono text-[9.5px] uppercase tracking-[0.1em] text-white/50"
            >
              {["Manufacturer-direct", "Z275 galvanised", "24-month drive warranty"].map(
                (line) => (
                  <li key={line} className="flex items-center gap-2">
                    <span className="h-[3px] w-[3px] bg-brand-400" aria-hidden="true" />
                    {line}
                  </li>
                ),
              )}
            </motion.ul>
          </motion.div>

          <motion.div
            className="relative pb-[62px] lg:col-span-6"
            initial={reduced ? false : { opacity: 0, y: 24 }}
            animate={reduced ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="rounded-panel border border-white/12 bg-[#0B0F0D] px-3 pb-3 pt-3.5 sm:px-5 sm:pb-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-2.5 font-mono text-[9px] uppercase tracking-[0.16em] text-white/55">
                <span>EC tunnel section</span>
                <span className="text-brand-300/90">120 × 40 ft</span>
              </div>
              <div className="pt-1.5">
                <HeroSchematic />
              </div>
              <div className="flex items-center justify-between border-t border-white/10 pt-2.5 font-mono text-[9px] uppercase tracking-[0.14em] text-white/50">
                <span>Section A–A</span>
                <span>178,000 CFM · 6,400 birds</span>
              </div>
            </div>

            <motion.dl
              className="absolute inset-x-2 bottom-0 grid grid-cols-2 overflow-hidden rounded-[8px] border border-white/15 bg-white/[0.06] shadow-[0_20px_50px_-28px_rgba(0,0,0,1)] backdrop-blur-[8px] sm:inset-x-4 sm:grid-cols-3"
              initial={reduced ? false : { opacity: 0, y: 14 }}
              animate={reduced ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              {readout.map((item, index) => (
                <div
                  key={item.label}
                  className={`flex flex-col border-white/10 px-3 py-2.5 ${
                    index === 1 ? "border-l" : ""
                  } ${index === 2 ? "hidden border-l sm:flex" : ""}`}
                >
                  <dt className="order-2 mt-1.5 text-[10px] font-medium leading-tight text-white/75">
                    {item.label}
                  </dt>
                  <dd className="order-1 font-mono text-[13.5px] leading-none tracking-tight text-white">
                    {item.value}
                  </dd>
                  <dd className="order-3 mt-1 font-mono text-[8.5px] uppercase tracking-[0.09em] text-white/50">
                    {item.note}
                  </dd>
                </div>
              ))}
            </motion.dl>
          </motion.div>
        </div>

        <dl className="grid grid-cols-2 border-t border-white/12 lg:grid-cols-4">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="border-b border-white/10 py-5 pr-5 lg:border-b-0 lg:border-r lg:pl-6 lg:first:pl-0 lg:last:border-r-0"
            >
              <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/55">
                {metric.label}
              </dt>
              <dd className="mt-2 flex items-baseline gap-1.5">
                <span className="font-mono text-[20px] leading-none tabular-nums text-white/90">
                  {metric.value}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.08em] text-brand-300">
                  {metric.unit}
                </span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
