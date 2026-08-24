export const BUSINESS = {
  name: "Tirupathi Steel Railing",
  tagline: "Invisible Grill Specialists",
  owner: "Manju Lal",
  phoneDisplay: "+91 77289 46929",
  phoneTel: "+917728946929",
  whatsappNumber: "917728946929",
  addressLines: ["Mansoorabad X Road", "Hyderabad, Telangana, India"],
  hours: "Mon – Sat, 9:30 AM – 7:30 PM",
  mapQuery: "Mansoorabad X Road, Hyderabad",
};

export function waLink(message) {
  const text = encodeURIComponent(message || "Hi, I'm interested in your invisible grill / railing work.");
  return `https://wa.me/${BUSINESS.whatsappNumber}?text=${text}`;
}

export const SERVICES = [
  {
    id: "invisible-grills",
    name: "Invisible Safety Grills",
    short: "SS wire mesh grills that guard balconies and windows without blocking the view.",
    image: "/images/hero-invisible-grill.jpg",
    points: [
      "SS 316 / 304 grade wire",
      "3mm rope wire strength",
      "PVC / PUC coated finish",
      "Custom fit for balconies & windows",
    ],
  },
  {
    id: "wire-rope-railing",
    name: "SS Wire Rope Railing",
    short: "Horizontal cable-wire railing systems — strong, rust-free, and modern.",
    image: "/images/wire-rope-full.jpg",
    points: [
      "Stainless steel cable construction",
      "Corrosion & rust resistant",
      "Minimal-post modern profile",
      "Ideal for decks, balconies, terraces",
    ],
  },
  {
    id: "glass-balcony-railing",
    name: "Glass Balcony Railing",
    short: "Frameless glass railing for a clear, elegant, uninterrupted balcony view.",
    image: "/images/glass-railing-full.jpg",
    points: [
      "Toughened safety glass",
      "Frameless / semi-frameless options",
      "Weatherproof aluminium fittings",
      "Premium architectural finish",
    ],
  },
  {
    id: "steel-balcony-railing",
    name: "Steel Balcony Railing",
    short: "Horizontal-bar steel railing — durable, stylish, and built to last.",
    image: "/images/steel-railing-full.jpg",
    points: [
      "Heavy-duty steel construction",
      "Powder-coated weatherproof finish",
      "Custom heights & bar spacing",
      "Low maintenance, long life",
    ],
  },
];

export const FEATURES = [
  { name: "Invisible Safety Grills", sub: "Unobstructed views with maximum safety" },
  { name: "SS 316 / 304 Grade Wire", sub: "High corrosion resistance" },
  { name: "3mm Rope Wire Strength", sub: "Extra strong and reliable" },
  { name: "PVC / PUC Coated Finish", sub: "Weather resistant & long lasting" },
  { name: "Balcony & Window Fit", sub: "Custom fit for all spaces" },
  { name: "Glass & Steel Railing", sub: "Modern and elegant look" },
];

export const TRUST_POINTS = [
  "Free On-Site Measurement",
  "100% In-House Fabrication",
  "SS 316 / 304 Grade Materials",
  "Standing By Our Workmanship",
];

// Illustrative testimonials — swap in real customer quotes as they come in
// (same swap-in idea as PhotoSlot: replace text/name/area, nothing else to touch).
export const TESTIMONIALS = [
  {
    name: "Ramesh K.",
    area: "Mansoorabad",
    rating: 5,
    quote: "Got the invisible grill done for our 3rd floor balcony. You genuinely can't see the wires from a distance but it feels solid when you lean on it. Clean job, finished in a day.",
  },
  {
    name: "Swathi R.",
    area: "Dilsukhnagar",
    rating: 5,
    quote: "We were worried grills would make the balcony feel like a cage. This mesh is barely visible and our kids can't push through it. Exactly what we wanted.",
  },
  {
    name: "Anil Kumar",
    area: "LB Nagar",
    rating: 4,
    quote: "Wire rope railing for our terrace came out neat — no rust after the first monsoon. Team was on time for the site visit and the actual install both.",
  },
  {
    name: "Priya N.",
    area: "Kothapet",
    rating: 5,
    quote: "Compared quotes from a few places and these guys were upfront about pricing before starting, no surprises later. Glass railing looks premium against our flooring.",
  },
  {
    name: "Farhan S.",
    area: "Vanasthalipuram",
    rating: 5,
    quote: "Steel balcony railing, powder coated finish — a year in and it still looks new. Would call them again for the terrace railing next.",
  },
];

export const FAQS = [
  {
    q: "Will an invisible grill block airflow or access to my AC compressor?",
    a: "No. The wire mesh is open enough for normal airflow, and we can build in an access section around AC units or vents when needed.",
  },
  {
    q: "Is the wire actually strong enough to stop a child or pet leaning on it?",
    a: "Yes — we use SS 316/304 grade wire and tension every run properly before handover, not just fix it loosely for looks.",
  },
  {
    q: "Does the stainless steel wire rust or discolor over time?",
    a: "SS 316/304 grade resists rust and staining far better than mild steel or cheaper alternatives, even through Hyderabad's monsoon.",
  },
  {
    q: "How long does a typical installation take?",
    a: "Most single balcony or window installs are completed in a day once measurements are taken and material is ready.",
  },
  {
    q: "Can the railing or grill be custom-fit to an odd-shaped balcony?",
    a: "Yes — height, spacing, and finish are all worked out during the free site visit, so it's fitted to your actual space, not a standard size.",
  },
  {
    q: "Is the site visit and quote free?",
    a: "Yes. We visit, measure, and quote before any work starts — no cost, no obligation.",
  },
];
