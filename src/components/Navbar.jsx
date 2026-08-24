import { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import { BUSINESS } from "../data/business";

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-graphite-950/95 backdrop-blur border-b border-graphite-700">
      <div className="max-w-[1240px] mx-auto px-5 md:px-8 h-[76px] flex items-center justify-between">
        <NavLink to="/" onClick={() => setOpen(false)}>
          <Logo />
        </NavLink>

        <nav className="hidden md:flex items-center gap-9">
          {LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                `font-label uppercase text-sm tracking-[0.08em] transition-colors ${
                  isActive ? "text-orange-500" : "text-silver hover:text-orange-400"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <a href={`tel:${BUSINESS.phoneTel}`} className="btn btn-orange px-5 py-2.5 text-sm">
            Call Now
          </a>
        </nav>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
          className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-[5px]"
        >
          <span className={`block w-6 h-[2px] bg-silver transition-transform ${open ? "translate-y-[7px] rotate-45" : ""}`} />
          <span className={`block w-6 h-[2px] bg-silver transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-[2px] bg-silver transition-transform ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height] duration-300 ease-in-out bg-graphite-900 border-t border-graphite-700 ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col px-6 py-4 gap-1">
          {LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `font-label uppercase text-sm tracking-[0.08em] py-3 border-b border-graphite-700 ${
                  isActive ? "text-orange-500" : "text-silver"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <a
            href={`tel:${BUSINESS.phoneTel}`}
            className="btn btn-orange mt-4 py-3 text-sm"
          >
            Call {BUSINESS.phoneDisplay}
          </a>
        </nav>
      </div>
    </header>
  );
}
