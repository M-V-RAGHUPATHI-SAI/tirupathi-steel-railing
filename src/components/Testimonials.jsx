import { TESTIMONIALS } from "../data/business";
import Stars from "./Stars";

export default function Testimonials() {
  return (
    <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 -mx-5 px-5 md:-mx-8 md:px-8 scrollbar-none">
      {TESTIMONIALS.map((t) => (
        <div
          key={t.name}
          className="card p-6 shrink-0 w-[300px] md:w-[340px] snap-start flex flex-col transition-transform duration-300 hover:-translate-y-1"
        >
          <Stars rating={t.rating} className="mb-4" />
          <p className="text-silver text-sm leading-relaxed flex-1">&ldquo;{t.quote}&rdquo;</p>
          <div className="mt-5 pt-4 border-t border-graphite-700">
            <p className="font-label uppercase text-sm tracking-wide text-paper">{t.name}</p>
            <p className="text-graphite-400 text-xs mt-0.5">{t.area}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
