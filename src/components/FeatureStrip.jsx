import { FEATURES } from "../data/business";

const ICONS = [
  // Shield check - Invisible Safety Grills
  (p) => (
    <svg viewBox="0 0 64 64" className={p}>
      <path d="M32 6 L54 14 V30 C54 44 44 54 32 58 C20 54 10 44 10 30 V14 Z" fill="none" stroke="currentColor" strokeWidth="3.5" />
      <path d="M22 32 L29 39 L43 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  // Wire coil - SS 316/304 Wire
  (p) => (
    <svg viewBox="0 0 64 64" className={p}>
      <circle cx="32" cy="32" r="6" fill="currentColor" />
      {[12, 19, 26].map((r) => (
        <path key={r} d={`M ${32 - r} 32 A ${r} ${r} 0 1 1 ${32 + r} 32`} fill="none" stroke="currentColor" strokeWidth="3" />
      ))}
    </svg>
  ),
  // Rope - 3mm Rope Wire Strength
  (p) => (
    <svg viewBox="0 0 64 64" className={p}>
      <line x1="12" y1="50" x2="52" y2="14" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      {[0, 1, 2, 3].map((i) => {
        const t = i / 3;
        const x = 12 + t * 40;
        const y = 50 - t * 36;
        return <circle key={i} cx={x} cy={y} r="2.6" fill="currentColor" />;
      })}
    </svg>
  ),
  // Droplet shield - PVC/PUC Coated Finish
  (p) => (
    <svg viewBox="0 0 64 64" className={p}>
      <path d="M32 6 L54 14 V30 C54 44 44 54 32 58 C20 54 10 44 10 30 V14 Z" fill="none" stroke="currentColor" strokeWidth="3" />
      <path d="M32 22 C38 30 41 34 41 39 A9 9 0 0 1 23 39 C23 34 26 30 32 22 Z" fill="currentColor" />
    </svg>
  ),
  // Window frame - Balcony & Window Fit
  (p) => (
    <svg viewBox="0 0 64 64" className={p}>
      <rect x="10" y="10" width="44" height="44" fill="none" stroke="currentColor" strokeWidth="3.5" />
      <line x1="32" y1="10" x2="32" y2="54" stroke="currentColor" strokeWidth="2.5" />
      <line x1="10" y1="32" x2="54" y2="32" stroke="currentColor" strokeWidth="2.5" />
    </svg>
  ),
  // Railing bars - Glass & Steel Railing
  (p) => (
    <svg viewBox="0 0 64 64" className={p}>
      <rect x="9" y="16" width="6" height="38" fill="currentColor" />
      <rect x="49" y="16" width="6" height="38" fill="currentColor" />
      <rect x="7" y="10" width="50" height="7" fill="currentColor" />
      {[26, 34, 42].map((y) => (
        <rect key={y} x="17" y={y} width="30" height="3.4" fill="currentColor" opacity="0.85" />
      ))}
    </svg>
  ),
];

export default function FeatureStrip({ compact = false }) {
  return (
    <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 ${compact ? "gap-6" : "gap-0"}`}>
      {FEATURES.map((f, i) => {
        const Icon = ICONS[i];
        return (
          <div
            key={f.name}
            className={`flex flex-col items-center text-center px-4 py-6 ${
              !compact && i < FEATURES.length - 1 ? "lg:border-r lg:border-graphite-700" : ""
            }`}
          >
            <Icon className="w-11 h-11 text-orange-500 mb-3" />
            <p className="text-silver font-label uppercase text-sm tracking-wide leading-tight">{f.name}</p>
            <p className="text-graphite-400 text-xs mt-1.5 leading-snug">{f.sub}</p>
          </div>
        );
      })}
    </div>
  );
}
