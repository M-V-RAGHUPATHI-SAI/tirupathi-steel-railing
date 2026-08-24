import Layout from "../components/Layout";
import Reveal from "../components/Reveal";
import PhotoSlot from "../components/PhotoSlot";
import { BUSINESS, SERVICES, waLink } from "../data/business";

export default function Services() {
  return (
    <Layout>
      <section className="bg-graphite-900 border-b border-graphite-700 pt-16 pb-14">
        <div className="max-w-[1240px] mx-auto px-5 md:px-8">
          <p className="eyebrow mb-3">What We Offer</p>
          <h1 className="font-display font-bold text-paper text-[clamp(2rem,5vw,3.2rem)] max-w-2xl">
            Our Railing &amp; Grill Solutions
          </h1>
          <p className="text-graphite-400 max-w-xl mt-4 leading-relaxed">
            Every job is measured, fabricated, and installed by our own team —
            no subcontracting, no shortcuts.
          </p>
        </div>
      </section>

      {SERVICES.map((s, i) => (
        <section
          key={s.id}
          id={s.id}
          className={`scroll-mt-[76px] py-16 md:py-20 ${i % 2 === 1 ? "bg-graphite-900" : "bg-graphite-950"} border-b border-graphite-700`}
        >
          <div className="max-w-[1240px] mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-10 items-center">
            <Reveal className={i % 2 === 1 ? "md:order-2" : ""}>
              <PhotoSlot src={s.image} alt={s.name} label={s.name} ratio="aspect-[4/3]" className="rounded" />
            </Reveal>
            <Reveal delay={100} className={i % 2 === 1 ? "md:order-1" : ""}>
              <p className="eyebrow mb-3">0{i + 1}</p>
              <h2 className="font-display font-semibold text-paper text-[clamp(1.6rem,3.4vw,2.2rem)] mb-4">
                {s.name}
              </h2>
              <p className="text-graphite-400 leading-relaxed mb-6">{s.short}</p>
              <ul className="space-y-3 mb-8">
                {s.points.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-silver text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-4">
                <a href={waLink(`Hi, I'd like a quote for ${s.name}.`)} target="_blank" rel="noreferrer" className="btn btn-orange px-6 py-3.5">
                  Get a Quote
                </a>
                <a href={`tel:${BUSINESS.phoneTel}`} className="btn btn-ghost px-6 py-3.5">
                  Call Us
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      ))}

      <section className="bg-graphite-950 py-16 text-center">
        <Reveal>
          <p className="eyebrow mb-3">Not Sure What You Need?</p>
          <h2 className="font-display font-semibold text-paper text-[clamp(1.5rem,3.4vw,2.2rem)] mb-6">
            Send us a photo of your balcony on WhatsApp
          </h2>
          <a href={waLink()} target="_blank" rel="noreferrer" className="btn btn-orange px-8 py-4 inline-flex">
            Chat on WhatsApp
          </a>
        </Reveal>
      </section>
    </Layout>
  );
}
