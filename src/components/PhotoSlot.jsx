export default function PhotoSlot({ src, alt = "", label, ratio = "aspect-[4/3]", className = "" }) {
  if (src) {
    return (
      <div className={`overflow-hidden ${ratio} ${className}`}>
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
    );
  }
  return (
    <div className={`ph ${ratio} ${className}`}>
      <span className="ph-label">{label || "Photo coming soon"}</span>
    </div>
  );
}
