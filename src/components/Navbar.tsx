import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Landmark } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const links = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'glass-nav py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <NavLink to="/" className="flex items-center gap-2 group">
          <div className="text-2xl font-serif tracking-tighter font-bold uppercase select-none">
            Aura <span className="text-gold font-normal italic lowercase">studios</span>
          </div>
        </NavLink>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-12">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) => 
                `font-sans text-[10px] uppercase tracking-[0.2em] font-semibold transition-colors lux-link ${isActive ? 'text-obsidian after:translate-x-0' : 'text-[#666] hover:text-obsidian'}`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <NavLink to="/contact" className="lux-button">
            Consult Now
          </NavLink>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-obsidian">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white border-b border-black/5 flex flex-col items-center py-10 gap-6 md:hidden shadow-xl"
          >
            {links.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="font-accent text-sm uppercase tracking-widest text-obsidian"
              >
                {link.name}
              </NavLink>
            ))}
            <NavLink to="/contact" onClick={() => setIsOpen(false)} className="lux-button">
              Consult Now
            </NavLink>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
