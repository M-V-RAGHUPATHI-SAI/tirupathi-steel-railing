# Tirupathi Steel Railing — Website

React + Vite + Tailwind CSS v4 site for Tirupathi Steel Railing
(Proprietor: Manju Lal), Mansoorabad X Road, Hyderabad.

## Run locally

```bash
npm install
npm run dev
```

Open the URL shown in the terminal (usually http://localhost:5173).

## Build for production

```bash
npm run build
```

Output goes to `dist/` — upload that folder's contents to any static host
(Hostinger, Netlify, Vercel, GitHub Pages, etc.).

## Structure

- `src/pages/` — Home, Services, Gallery, About, Contact (one file per route)
- `src/components/` — Navbar, Footer, FloatingCTA, PhotoSlot, FeatureStrip,
  Reveal, Logo, Layout, ScrollToTop
- `src/data/business.js` — all business info (name, phone, address, services,
  features) in one place — edit here to update content across the whole site
- `src/index.css` — design tokens (colors/fonts) + shared component classes
  (`.ph` placeholder blocks, buttons, cards, etc.)
- `public/images/` — real photos currently in use, plus the favicon

## Swapping in real photos

The Gallery page (and a few Service sections) use `PhotoSlot`, which shows a
clearly labeled dashed placeholder until a real photo is provided. To swap
one in:

1. Drop the image into `public/images/`
2. In `src/pages/Gallery.jsx` (or `src/data/business.js` for the main
   service photos), change that item's `src: null` to
   `src: "/images/your-file.jpg"`

No other code changes needed — the placeholder styling disappears
automatically once a real `src` is set.

## Contact form to WhatsApp

The Contact page form does not send email — it builds a WhatsApp deep link
from the entered name/phone/need/message and opens `wa.me` in a new tab,
same as tapping the floating WhatsApp button. Edit the number in
`src/data/business.js` (`whatsappNumber`) if it ever changes.

## Key business info (edit in `src/data/business.js`)

- Phone / WhatsApp: +91 77289 46929
- Address: Mansoorabad X Road, Hyderabad, Telangana, India
- Proprietor: Manju Lal
