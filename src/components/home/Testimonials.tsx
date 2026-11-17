import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials } from "@/data/products";

export function Testimonials() {
  return (
    <section className="shell pb-16 md:pb-24" aria-labelledby="operators-heading">
      <Reveal>
        <SectionHeading
          eyebrow="From sheds, not showrooms"
          title={<span id="operators-heading">Operators talk in FCR and mortality.</span>}
          description="Three farms that switched a line or commissioned a house with us, with the figures they gave us afterwards."
        />
      </Reveal>

      <div className="mt-9 grid gap-3 md:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <div key={testimonial.name} className="h-full">
            <figure className="flex h-full flex-col rounded-card border border-line bg-paper-card p-6">
              <div className="flex items-center justify-between border-b border-line pb-4">
                <span className="font-mono text-[9.5px] uppercase tracking-[0.14em] text-ink-mute">
                  Operator / {index + 1} of {testimonials.length}
                </span>
                <span className="font-mono text-[9.5px] uppercase tracking-[0.1em] text-brand-700">
                  Verified
                </span>
              </div>

              <blockquote className="mt-5 flex-1 text-[14px] leading-[1.72] text-ink-soft">
                “{testimonial.quote}”
              </blockquote>

              <div className="mt-6 grid grid-cols-2 gap-3 border-t border-line pt-4">
                {testimonial.metrics.map((metric) => (
                  <div key={metric.label}>
                    <p className="font-mono text-[9px] uppercase tracking-[0.1em] text-ink-mute">
                      {metric.label}
                    </p>
                    <p className="mt-1 font-mono text-[13px] tabular-nums text-ink">{metric.value}</p>
                  </div>
                ))}
              </div>

              <figcaption className="mt-5 border-t border-line pt-4">
                <p className="text-[13.5px] font-semibold text-ink">{testimonial.name}</p>
                <p className="mt-0.5 text-[12.5px] text-ink-soft">
                  {testimonial.role} · {testimonial.scale}
                </p>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.1em] text-ink-mute">
                  {testimonial.location}
                </p>
              </figcaption>
            </figure>
          </div>
        ))}
      </div>
    </section>
  );
}
