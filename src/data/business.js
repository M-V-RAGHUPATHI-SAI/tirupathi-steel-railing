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
