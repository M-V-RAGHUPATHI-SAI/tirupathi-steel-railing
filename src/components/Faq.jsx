import { useState } from "react";
import { FAQS } from "../data/business";

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <div className="max-w-2xl mx-auto divide-y divide-graphite-700 border-t border-b border-graphite-700">
      {FAQS.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={f.q}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? -1 : i)}
              aria-expanded={isOpen}
              className="w-full flex items-center justify-between gap-4 py-5 text-left cursor-pointer"
            >
              <span className="font-label text-silver text-base md:text-lg">{f.q}</span>
              <span
                className="shrink-0 text-orange-500 text-2xl leading-none transition-transform duration-300"
                style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
              >
                +
              </span>
            </button>
            <div
              className="grid transition-[grid-template-rows] duration-300 ease-out"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <p className="text-graphite-400 text-sm leading-relaxed pb-5 pr-8">{f.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
