import { Icon, type IconName } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface Reason {
  index: string;
  icon: IconName;
  metric: string;
  metricLabel: string;
  title: string;
  body: string;
  detail: string;
}

const reasons: Reason[] = [
  {
    index: "01",
    icon: "thermometer",
    metric: "0.08",
    metricLabel: "FCR points",
    title: "Feed conversion is the only number that compounds.",
    body: "Feed is 68–72% of a broiler cycle. Moving FCR from 1.62 to 1.54 on a 2.2 kg bird saves about 0.18 kg of feed per bird. Across 6,400 birds and six cycles, that is roughly 6.9 tonnes a year — before a single bird grows faster.",
    detail: "Pan spacing, nipple flow and shed temperature decide whether that gain happens.",
  },
  {
    index: "02",
    icon: "layers",
    metric: "Z275",
    metricLabel: "galvanised sheet",
    title: "We publish the material grade, not a promise.",
    body: "1.2 mm Z275 galvanised housing, virgin polypropylene with a 2.5% UV masterbatch, virgin PVC square pipe, SS 304 trigger pins. When a quotation does not name the grade, the grade is where the margin came from.",
    detail: "Grades are printed on our spec sheets and checked at goods-in.",
  },
  {
    index: "03",
    icon: "bolt",
    metric: "4–6 h",
    metricLabel: "outage tolerance",
    title: "Built for the supply your village actually has.",
    body: "Single-phase fan options, manual winches on every powered line, gravity header tanks and low-start-amperage motors. A four-hour cut should cost you airflow for an afternoon, not a flock.",
    detail: "Every package is handed over with a written power-cut procedure.",
  },
];

export function WhyChoose() {
  return (
    <section className="border-y border-line bg-paper-deep/60 py-16 md:py-24" aria-labelledby="why-heading">
      <div className="shell">
        <Reveal>
          <SectionHeading
            eyebrow="Why farms standardise on us"
            title={<span id="why-heading">Three things we will not compromise on.</span>}
            description="Equipment is only as good as the specification behind it. These are the three inputs that decide whether a shed pays for itself in two cycles or five."
          />
        </Reveal>

        <div className="mt-10 grid gap-px overflow-hidden rounded-card border border-line bg-line md:grid-cols-3">
          {reasons.map((reason) => (
            <div key={reason.index} className="h-full">
              <article className="flex h-full flex-col bg-paper-card p-6 sm:p-7">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-mute">
                    {reason.index}
                  </span>
                  <Icon name={reason.icon} size={19} className="text-brand-600" strokeWidth={1.4} />
                </div>

                <div className="mt-6 flex items-baseline gap-2 border-b border-line pb-4">
                  <span className="font-mono text-[26px] leading-none tabular-nums tracking-[-0.02em]">
                    {reason.metric}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-ink-mute">
                    {reason.metricLabel}
                  </span>
                </div>

                <h3 className="mt-5 text-[17px] font-semibold leading-[1.3] tracking-[-0.015em]">
                  {reason.title}
                </h3>
                <p className="mt-3 text-[13.5px] leading-[1.7] text-ink-soft">{reason.body}</p>
                <p className="mt-auto pt-5 font-mono text-[10.5px] leading-relaxed uppercase tracking-[0.06em] text-ink-mute">
                  {reason.detail}
                </p>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
