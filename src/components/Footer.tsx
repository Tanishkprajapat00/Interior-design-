import { NavLink } from 'react-router-dom';
import { Landmark, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-obsidian text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-1">
          <NavLink to="/" className="flex items-center gap-2 mb-6">
            <Landmark className="w-8 h-8 text-gold" />
            <span className="font-display text-2xl tracking-tighter uppercase">Aura<span className="text-gold">.</span></span>
          </NavLink>
          <p className="text-zinc-400 text-sm leading-relaxed mb-8">
            Global architectural firm dedicated to the pursuit of spatial excellence and sustainable luxary.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 border border-zinc-700 rounded-full flex items-center justify-center hover:bg-gold hover:border-gold transition-colors">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="w-10 h-10 border border-zinc-700 rounded-full flex items-center justify-center hover:bg-gold hover:border-gold transition-colors">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="#" className="w-10 h-10 border border-zinc-700 rounded-full flex items-center justify-center hover:bg-gold hover:border-gold transition-colors">
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-accent text-xs uppercase tracking-[0.2em] text-gold mb-6">Studio</h4>
          <ul className="flex flex-col gap-4 text-sm text-zinc-400">
            <li><NavLink to="/about" className="hover:text-white transition-colors">Our Story</NavLink></li>
            <li><NavLink to="/portfolio" className="hover:text-white transition-colors">Portfolio</NavLink></li>
            <li><NavLink to="/services" className="hover:text-white transition-colors">Expertise</NavLink></li>
            <li><NavLink to="/careers" className="hover:text-white transition-colors">Careers</NavLink></li>
          </ul>
        </div>

        <div>
          <h4 className="font-accent text-xs uppercase tracking-[0.2em] text-gold mb-6">Contact</h4>
          <ul className="flex flex-col gap-4 text-sm text-zinc-400">
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-gold" />
              <span>contact@aura-studio.com</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-gold" />
              <span>+91 98765 43210</span>
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="w-4 h-4 text-gold" />
              <span>12/A Sky Tower, Mumbai, India</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-accent text-xs uppercase tracking-[0.2em] text-gold mb-6">Newsletter</h4>
          <p className="text-sm text-zinc-400 mb-6">Receive curated design inspiration monthly.</p>
          <div className="flex border-b border-zinc-700 pb-2">
            <input 
              type="email" 
              placeholder="Your Email" 
              className="bg-transparent text-sm w-full outline-none placeholder:text-zinc-600"
            />
            <button className="text-gold text-xs uppercase font-accent tracking-widest pl-4">Join</button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-10 border-t border-zinc-800 flex flex-col md:row justify-between items-center gap-4 text-xs text-zinc-500 uppercase tracking-widest">
        <span>© 2026 Aura Architecture Studio. All Rights Reserved.</span>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
