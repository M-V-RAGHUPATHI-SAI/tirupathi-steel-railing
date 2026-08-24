export default function Stars({ rating = 5, className = "" }) {
  return (
    <div className={`flex gap-1 ${className}`} aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          className={`w-4 h-4 ${i < Math.round(rating) ? "text-orange-500" : "text-graphite-600"}`}
          fill="currentColor"
        >
          <path d="M10 1.5l2.6 5.7 6.2.6-4.7 4.1 1.4 6.1L10 14.9l-5.5 3.1 1.4-6.1L1.2 7.8l6.2-.6L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}
