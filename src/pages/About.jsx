import Layout from "../components/Layout";
import Reveal from "../components/Reveal";
import PhotoSlot from "../components/PhotoSlot";
import { BUSINESS, waLink } from "../data/business";

const VALUES = [
  { title: "Safety First", copy: "Every grill and railing is fitted to hold real weight, not just look good — checked before we call a job done." },
  { title: "Views, Not Bars", copy: "Invisible grills exist so your family is protected without staring through a cage all day." },
  { title: "No Shortcuts", copy: "SS 316/304 wire, PVC/PUC coating, and proper tensioning on every single job, every time." },
  { title: "Fair Pricing", copy: "Clear quotes before work starts — no hidden charges once the team is on site." },
];

export default function About() {
  return (
    <Layout>
      <section className="bg-graphite-900 border-b border-graphite-700 pt-16 pb-14">
        <div className="max-w-[1240px] mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-10 items-center">
          <Reveal>
            <p className="eyebrow mb-3">About Us</p>
            <h1 className="font-display font-bold text-paper text-[clamp(2rem,4.6vw,3rem)] leading-tight mb-5">
              Built On Trust,<br /> Fitted With Precision
            </h1>
            <p className="text-graphite-400 leading-relaxed mb-4">
              Tirupathi Steel Railing is a Hyderabad-based fabrication workshop run by{" "}
              <span className="text-silver">{BUSINESS.owner}</span>, specialising in invisible
              safety grills, SS wire rope railing, glass balcony railing, and steel balcony
              railing.
            </p>
            <p className="text-graphite-400 leading-relaxed">
              We started with a simple idea — safety shouldn&rsquo;t mean blocking the view
              you moved into your home for. Every grill and railing we fit is measured,
              fabricated, and installed by our own hands, not outsourced.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <PhotoSlot
              src="/images/hero-invisible-grill.jpg"
              alt="Invisible safety grill installation"
              ratio="aspect-[4/3]"
              className="rounded"
            />
          </Reveal>
        </div>
      </section>

      <section className="bg-graphite-950 py-16 md:py-20">
        <div className="max-w-[1240px] mx-auto px-5 md:px-8">
          <Reveal>
            <p className="eyebrow text-center mb-3">What We Stand For</p>
            <h2 className="font-display font-semibold text-paper text-[clamp(1.6rem,3.6vw,2.4rem)] text-center mb-12">
              Our Values
            </h2>
          </Reveal>
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 90}>
                <div className="card p-6 h-full">
                  <h3 className="font-label uppercase tracking-wide text-orange-500 text-sm mb-3">{v.title}</h3>
                  <p className="text-graphite-400 text-sm leading-relaxed">{v.copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-graphite-900 border-y border-graphite-700 py-16">
        <div className="max-w-[1240px] mx-auto px-5 md:px-8 grid sm:grid-cols-3 gap-8 text-center">
          <Reveal>
            <p className="font-display font-bold text-orange-500 text-4xl">100%</p>
            <p className="text-graphite-400 text-sm mt-2 uppercase tracking-wide font-label">In-house Fabrication</p>
          </Reveal>
          <Reveal delay={80}>
            <p className="font-display font-bold text-orange-500 text-4xl">SS 316/304</p>
            <p className="text-graphite-400 text-sm mt-2 uppercase tracking-wide font-label">Grade Wire Only</p>
          </Reveal>
          <Reveal delay={160}>
            <p className="font-display font-bold text-orange-500 text-4xl">Hyderabad</p>
            <p className="text-graphite-400 text-sm mt-2 uppercase tracking-wide font-label">Sitewide Service Area</p>
          </Reveal>
        </div>
      </section>

      <section className="bg-graphite-950 py-16 text-center">
        <Reveal>
          <h2 className="font-display font-semibold text-paper text-[clamp(1.5rem,3.4vw,2.2rem)] mb-6">
            Have a project in mind?
          </h2>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href={waLink()} target="_blank" rel="noreferrer" className="btn btn-orange px-7 py-4">
              Chat on WhatsApp
            </a>
            <a href={`tel:${BUSINESS.phoneTel}`} className="btn btn-ghost px-7 py-4">
              Call {BUSINESS.phoneDisplay}
            </a>
          </div>
        </Reveal>
      </section>
    </Layout>
  );
}
