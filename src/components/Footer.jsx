import { Link } from "react-router-dom";
import Logo from "./Logo";
import { BUSINESS, SERVICES, waLink } from "../data/business";

export default function Footer() {
  return (
    <footer className="bg-graphite-900 border-t border-graphite-700 pt-14 pb-8">
      <div className="max-w-[1240px] mx-auto px-5 md:px-8 grid gap-10 md:grid-cols-4">
        <div>
          <Logo />
          <p className="text-graphite-400 text-sm mt-4 leading-relaxed max-w-[240px]">
            Invisible safety grills and premium railing solutions across Hyderabad.
          </p>
        </div>

        <div>
          <h4 className="eyebrow mb-4">Services</h4>
          <ul className="space-y-2.5">
            {SERVICES.map((s) => (
              <li key={s.id}>
                <Link to={`/services#${s.id}`} className="text-silver text-sm hover:text-orange-400 transition-colors">
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="eyebrow mb-4">Quick Links</h4>
          <ul className="space-y-2.5">
            <li><Link to="/gallery" className="text-silver text-sm hover:text-orange-400 transition-colors">Gallery</Link></li>
            <li><Link to="/about" className="text-silver text-sm hover:text-orange-400 transition-colors">About Us</Link></li>
            <li><Link to="/contact" className="text-silver text-sm hover:text-orange-400 transition-colors">Contact</Link></li>
            <li>
              <a href={waLink()} target="_blank" rel="noreferrer" className="text-silver text-sm hover:text-orange-400 transition-colors">
                WhatsApp Us
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="eyebrow mb-4">Contact</h4>
          <ul className="space-y-2.5 text-sm text-silver">
            <li>{BUSINESS.addressLines[0]}</li>
            <li>{BUSINESS.addressLines[1]}</li>
            <li className="pt-2">
              <a href={`tel:${BUSINESS.phoneTel}`} className="hover:text-orange-400 transition-colors">
                {BUSINESS.phoneDisplay}
              </a>
            </li>
            <li className="text-graphite-400 text-xs pt-1">{BUSINESS.hours}</li>
          </ul>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto px-5 md:px-8 mt-10 pt-6 border-t border-graphite-700 flex flex-col sm:flex-row gap-2 justify-between text-xs text-graphite-400">
        <span>&copy; {new Date().getFullYear()} Tirupathi Steel Railing. All rights reserved.</span>
        <span>Proprietor: {BUSINESS.owner}</span>
      </div>
    </footer>
  );
}
