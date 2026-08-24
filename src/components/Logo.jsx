export function LogoMark({ className = "w-11 h-11" }) {
  return (
    <svg viewBox="0 0 150 150" className={className}>
      <rect x="6" y="6" width="138" height="138" rx="18" fill="none" stroke="#dadad8" strokeWidth="7" />
      <rect x="16" y="97" width="118" height="11" fill="#e2681e" />
      <line x1="30" y1="18" x2="53" y2="90" stroke="#e2681e" strokeWidth="4" />
      <line x1="49" y1="18" x2="70" y2="90" stroke="#5f6162" strokeWidth="4" />
      <line x1="68" y1="18" x2="87" y2="90" stroke="#e2681e" strokeWidth="4" />
      <line x1="87" y1="18" x2="104" y2="90" stroke="#5f6162" strokeWidth="4" />
      <circle cx="122" cy="114" r="9" fill="#e2681e" />
    </svg>
  );
}

export default function Logo({ variant = "full", className = "" }) {
  if (variant === "mark") return <LogoMark className={className} />;
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <LogoMark className="w-10 h-10 shrink-0" />
      <span className="leading-none">
        <span className="block font-display font-bold uppercase text-silver text-lg tracking-wide">
          Tirupathi
        </span>
        <span className="block font-label font-semibold uppercase text-orange-500 text-[0.65rem] tracking-[0.2em] -mt-0.5">
          Steel Railing
        </span>
      </span>
    </span>
  );
}
