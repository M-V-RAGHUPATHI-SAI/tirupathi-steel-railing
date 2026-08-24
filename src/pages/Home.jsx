import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import Reveal from "../components/Reveal";
import PhotoSlot from "../components/PhotoSlot";
import FeatureStrip from "../components/FeatureStrip";
import Testimonials from "../components/Testimonials";
import Faq from "../components/Faq";
import { BUSINESS, SERVICES, TRUST_POINTS, waLink } from "../data/business";

const STEPS = [
  { n: "01", title: "Site Visit & Measurement", copy: "We visit your balcony or window and take precise measurements at no cost." },
  { n: "02", title: "Material & Finish Selection", copy: "Choose your wire grade, finish, and railing style to match your space." },
  { n: "03", title: "Precision Installation", copy: "Our team fits and tensions every wire and post for a clean, tight finish." },
  { n: "04", title: "Final Check & Handover", copy: "We walk the job with you before handover, and stand by our work after." },
];

export default function Home() {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative overflow-hidden min-h-[85vh] flex items-end">
        <div className="absolute inset-0">
          <img
            src="/images/hero-invisible-grill.jpg"
            alt="Invisible safety grill wire mesh on a high-rise balcony"
            className="w-full h-full object-cover hero-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-graphite-950 via-graphite-950/75 to-graphite-950/25" />
          <div className="absolute inset-0 bg-gradient-to-t from-graphite-950 via-transparent to-transparent" />
        </div>

        <div className="relative max-w-[1240px] mx-auto px-5 md:px-8 pt-24 pb-20 md:pb-28">
          <Reveal>
            <p className="eyebrow mb-4">Hyderabad&rsquo;s Invisible Grill Specialists</p>
            <h1 className="font-display font-bold text-paper text-[clamp(2.4rem,6vw,4.6rem)] leading-[1.05] max-w-2xl">
              Invisible Safety.
              <br />
              <span className="text-orange-500">Uninterrupted Views.</span>
            </h1>
            <p className="text-silver/85 text-lg mt-6 max-w-lg leading-relaxed">
              Premium invisible grills, SS wire rope, glass and steel railing solutions
              that keep your family safe without blocking the view you pay for.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="flex flex-wrap gap-4 mt-9">
              <a href={waLink()} target="_blank" rel="noreferrer" className="btn btn-orange px-7 py-4">
                Chat on WhatsApp
              </a>
              <a href={`tel:${BUSINESS.phoneTel}`} className="btn btn-outline-light px-7 py-4">
                Call {BUSINESS.phoneDisplay}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-graphite-900 border-b border-graphite-700 py-6">
        <div className="max-w-[1240px] mx-auto px-5 md:px-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
          {TRUST_POINTS.map((point) => (
            <div key={point} className="flex items-center gap-2.5 text-silver text-sm">
              <svg viewBox="0 0 20 20" className="w-4 h-4 text-orange-500 shrink-0" fill="currentColor">
                <path d="M8.3 13.3 4.9 10l-1.4 1.4L8.3 16 17 7.3l-1.4-1.4z" />
              </svg>
              <span className="font-label tracking-wide">{point}</span>
            </div>
          ))}
        </div>
      </section>

      {/* INTRO STRIP */}
      <section className="bg-graphite-950 py-16 md:py-20 border-b border-graphite-700">
        <div className="max-w-[1240px] mx-auto px-5 md:px-8 text-center">
          <Reveal>
            <p className="eyebrow mb-3">What We Do</p>
            <h2 className="font-display font-semibold text-paper text-[clamp(1.6rem,3.6vw,2.6rem)]">
              Complete Wire, Glass &amp; Steel<br className="hidden sm:block" /> Railing Solutions
            </h2>
            <p className="text-graphite-400 max-w-xl mx-auto mt-4 leading-relaxed">
              One workshop for every railing need — invisible safety grills, cable-wire
              balustrades, frameless glass, and heavy-duty steel bar railing, all fabricated
              and fitted in-house.
            </p>
          </Reveal>
        </div>
      </section>

      {/* SERVICE CARDS */}
      <section className="bg-graphite-950 py-16 md:py-20">
        <div className="max-w-[1240px] mx-auto px-5 md:px-8 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s, i) => (
            <Reveal key={s.id} delay={i * 90}>
              <Link to={`/services#${s.id}`} className="card block overflow-hidden group h-full">
                <PhotoSlot src={s.image} alt={s.name} label={s.name} ratio="aspect-[4/3]" />
                <div className="p-5">
                  <h3 className="font-display font-semibold text-silver text-lg group-hover:text-orange-400 transition-colors">
                    {s.name}
                  </h3>
                  <p className="text-graphite-400 text-sm mt-2 leading-relaxed">{s.short}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FEATURE STRIP */}
      <section className="bg-graphite-900 border-y border-graphite-700 py-14">
        <div className="max-w-[1240px] mx-auto px-5 md:px-8">
          <Reveal>
            <p className="text-center font-display font-semibold text-paper text-[clamp(1.2rem,2.6vw,1.6rem)] tracking-wide mb-6">
              Built To Last. Designed To Impress.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <FeatureStrip />
          </Reveal>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-graphite-950 py-16 md:py-20">
        <div className="max-w-[1240px] mx-auto px-5 md:px-8">
          <Reveal>
            <p className="eyebrow text-center mb-3">How We Work</p>
            <h2 className="font-display font-semibold text-paper text-[clamp(1.6rem,3.6vw,2.4rem)] text-center mb-12">
              From Measurement To Installation
            </h2>
          </Reveal>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s, i) => (
              <Reveal key={s.n} delay={i * 100}>
                <div className="relative pl-2">
                  <span className="font-display font-bold text-4xl text-graphite-700">{s.n}</span>
                  <h3 className="font-label uppercase tracking-wide text-silver text-base mt-3 mb-2">{s.title}</h3>
                  <p className="text-graphite-400 text-sm leading-relaxed">{s.copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="relative bg-graphite-900 border-y border-graphite-700 py-16 md:py-20 overflow-hidden">
        <div className="wire-field" />
        <div className="relative max-w-[1240px] mx-auto px-5 md:px-8">
          <Reveal>
            <p className="eyebrow text-center mb-3">What Customers Say</p>
            <h2 className="font-display font-semibold text-paper text-[clamp(1.6rem,3.6vw,2.4rem)] text-center mb-12">
              Trusted Across Hyderabad
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <Testimonials />
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-graphite-950 py-16 md:py-20">
        <div className="max-w-[1240px] mx-auto px-5 md:px-8">
          <Reveal>
            <p className="eyebrow text-center mb-3">Questions</p>
            <h2 className="font-display font-semibold text-paper text-[clamp(1.6rem,3.6vw,2.4rem)] text-center mb-12">
              Frequently Asked
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <Faq />
          </Reveal>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="bg-orange-500 py-14">
        <div className="max-w-[1240px] mx-auto px-5 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <h2 className="font-display font-bold text-graphite-950 text-[clamp(1.5rem,3.4vw,2.2rem)] leading-tight">
            Ready to make your balcony safe<br className="hidden md:block" /> without losing the view?
          </h2>
          <div className="flex gap-4 flex-wrap justify-center">
            <a href={waLink()} target="_blank" rel="noreferrer" className="btn bg-graphite-950 text-paper px-7 py-4 hover:bg-graphite-800">
              Chat on WhatsApp
            </a>
            <a href={`tel:${BUSINESS.phoneTel}`} className="btn btn-outline-light !border-graphite-950 !text-graphite-950 hover:!border-graphite-800 hover:!text-graphite-800 px-7 py-4">
              Call Now
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
