import { useState } from "react";
import Layout from "../components/Layout";
import Reveal from "../components/Reveal";
import { BUSINESS, waLink } from "../data/business";

const NEED_OPTIONS = [
  "Invisible Safety Grill",
  "SS Wire Rope Railing",
  "Glass Balcony Railing",
  "Steel Balcony Railing",
  "Not Sure Yet",
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", need: NEED_OPTIONS[0], message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const lines = [
      `Hi, I'm ${form.name || "a visitor"} from the Tirupathi Steel Railing website.`,
      `Phone: ${form.phone || "-"}`,
      `Interested in: ${form.need}`,
      form.message ? `Message: ${form.message}` : null,
    ].filter(Boolean);
    window.open(waLink(lines.join("\n")), "_blank", "noopener,noreferrer");
    setSent(true);
  };

  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(BUSINESS.mapQuery)}&z=15&output=embed`;

  return (
    <Layout>
      <section className="bg-graphite-900 border-b border-graphite-700 pt-16 pb-14">
        <div className="max-w-[1240px] mx-auto px-5 md:px-8">
          <p className="eyebrow mb-3">Get In Touch</p>
          <h1 className="font-display font-bold text-paper text-[clamp(2rem,5vw,3.2rem)] max-w-2xl">
            Let&rsquo;s Talk About Your Railing
          </h1>
          <p className="text-graphite-400 max-w-xl mt-4 leading-relaxed">
            Fastest response is on WhatsApp — send a photo of your balcony or window and
            we&rsquo;ll get back with a quote.
          </p>
        </div>
      </section>

      <section className="bg-graphite-950 py-16">
        <div className="max-w-[1240px] mx-auto px-5 md:px-8 grid lg:grid-cols-5 gap-12">
          {/* Info column */}
          <Reveal className="lg:col-span-2 space-y-8">
            <div className="flex gap-4">
              <a
                href={waLink()}
                target="_blank"
                rel="noreferrer"
                className="btn btn-orange w-full py-4"
              >
                Chat on WhatsApp
              </a>
            </div>
            <a href={`tel:${BUSINESS.phoneTel}`} className="btn btn-ghost w-full py-4 block text-center">
              Call {BUSINESS.phoneDisplay}
            </a>

            <div className="card p-6">
              <h3 className="eyebrow mb-3">Workshop / Service Area</h3>
              <p className="text-silver text-sm leading-relaxed">
                {BUSINESS.addressLines[0]}
                <br />
                {BUSINESS.addressLines[1]}
              </p>
              <h3 className="eyebrow mb-2 mt-6">Hours</h3>
              <p className="text-silver text-sm">{BUSINESS.hours}</p>
              <h3 className="eyebrow mb-2 mt-6">Proprietor</h3>
              <p className="text-silver text-sm">{BUSINESS.owner}</p>
            </div>

            <div className="rounded overflow-hidden border border-graphite-700 aspect-[4/3]">
              <iframe
                title="Tirupathi Steel Railing location"
                src={mapSrc}
                className="w-full h-full grayscale-[35%] contrast-[1.05]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>

          {/* Form column */}
          <Reveal delay={100} className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="card p-7 md:p-9 space-y-5">
              <div>
                <label className="font-label uppercase text-xs tracking-wide text-graphite-400 block mb-2">
                  Your Name
                </label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-graphite-900 border border-graphite-600 rounded px-4 py-3 text-silver text-sm outline-none focus:border-orange-500 transition-colors"
                  placeholder="e.g. Ramesh Reddy"
                />
              </div>

              <div>
                <label className="font-label uppercase text-xs tracking-wide text-graphite-400 block mb-2">
                  Phone Number
                </label>
                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  type="tel"
                  className="w-full bg-graphite-900 border border-graphite-600 rounded px-4 py-3 text-silver text-sm outline-none focus:border-orange-500 transition-colors"
                  placeholder="e.g. 98765 43210"
                />
              </div>

              <div>
                <label className="font-label uppercase text-xs tracking-wide text-graphite-400 block mb-2">
                  What Do You Need?
                </label>
                <select
                  name="need"
                  value={form.need}
                  onChange={handleChange}
                  className="w-full bg-graphite-900 border border-graphite-600 rounded px-4 py-3 text-silver text-sm outline-none focus:border-orange-500 transition-colors"
                >
                  {NEED_OPTIONS.map((n) => (
                    <option key={n} value={n}>{n}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="font-label uppercase text-xs tracking-wide text-graphite-400 block mb-2">
                  Message (optional)
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full bg-graphite-900 border border-graphite-600 rounded px-4 py-3 text-silver text-sm outline-none focus:border-orange-500 transition-colors resize-none"
                  placeholder="Balcony size, floor number, anything that helps us quote faster"
                />
              </div>

              <button type="submit" className="btn btn-orange w-full py-4">
                Send via WhatsApp
              </button>

              <p className="text-graphite-400 text-xs text-center leading-relaxed">
                This opens WhatsApp with your details filled in — just hit send from there.
              </p>

              {sent && (
                <p className="text-orange-400 text-sm text-center">
                  WhatsApp should have opened in a new tab. Didn&rsquo;t work?{" "}
                  <a href={waLink()} target="_blank" rel="noreferrer" className="underline">
                    Tap here instead.
                  </a>
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
