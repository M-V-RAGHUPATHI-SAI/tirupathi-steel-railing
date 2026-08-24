import { useState } from "react";
import Layout from "../components/Layout";
import Reveal from "../components/Reveal";
import PhotoSlot from "../components/PhotoSlot";

const CATEGORIES = [
  {
    id: "invisible-grills",
    name: "Invisible Safety Grills",
    items: [
      { src: "/images/hero-invisible-grill.jpg", alt: "Invisible grill wire mesh, high-rise balcony", label: null },
      { src: null, label: "Invisible Grill — Window Install" },
      { src: null, label: "Invisible Grill — Balcony Corner" },
      { src: null, label: "Invisible Grill — Close-up Wire" },
    ],
  },
  {
    id: "wire-rope",
    name: "SS Wire Rope Railing",
    items: [
      { src: "/images/wire-rope-full.jpg", alt: "Stainless steel wire rope railing", label: null },
      { src: null, label: "Wire Rope — Terrace Deck" },
      { src: null, label: "Wire Rope — Post Detail" },
      { src: null, label: "Wire Rope — Staircase" },
    ],
  },
  {
    id: "glass",
    name: "Glass Balcony Railing",
    items: [
      { src: "/images/glass-railing-full.jpg", alt: "Frameless glass balcony railing", label: null },
      { src: null, label: "Glass Railing — Frameless" },
      { src: null, label: "Glass Railing — Balcony View" },
      { src: null, label: "Glass Railing — Handrail Detail" },
    ],
  },
  {
    id: "steel",
    name: "Steel Balcony Railing",
    items: [
      { src: "/images/steel-railing-full.jpg", alt: "Horizontal bar steel balcony railing", label: null },
      { src: null, label: "Steel Railing — Wraparound Deck" },
      { src: null, label: "Steel Railing — Post & Bar Detail" },
      { src: null, label: "Steel Railing — Powder Coated Finish" },
    ],
  },
];

export default function Gallery() {
  const [active, setActive] = useState("all");
  const visible = active === "all" ? CATEGORIES : CATEGORIES.filter((c) => c.id === active);

  return (
    <Layout>
      <section className="bg-graphite-900 border-b border-graphite-700 pt-16 pb-10">
        <div className="max-w-[1240px] mx-auto px-5 md:px-8">
          <p className="eyebrow mb-3">Our Work</p>
          <h1 className="font-display font-bold text-paper text-[clamp(2rem,5vw,3.2rem)] mb-6">
            Gallery
          </h1>
          <div className="flex flex-wrap gap-2.5">
            <button
              onClick={() => setActive("all")}
              className={`btn px-4 py-2 text-xs ${active === "all" ? "btn-orange" : "btn-ghost"}`}
            >
              All
            </button>
            {CATEGORIES.map((c) => (
              <button
                key={c.id}
                onClick={() => setActive(c.id)}
                className={`btn px-4 py-2 text-xs ${active === c.id ? "btn-orange" : "btn-ghost"}`}
              >
                {c.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-graphite-950 py-14">
        <div className="max-w-[1240px] mx-auto px-5 md:px-8 space-y-14">
          {visible.map((cat) => (
            <div key={cat.id}>
              <Reveal>
                <h2 className="font-label uppercase tracking-[0.1em] text-orange-500 text-sm mb-5">
                  {cat.name}
                </h2>
              </Reveal>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
                {cat.items.map((it, idx) => (
                  <Reveal key={idx} delay={idx * 70}>
                    <PhotoSlot src={it.src} alt={it.alt} label={it.label} ratio="aspect-square" className="rounded" />
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
