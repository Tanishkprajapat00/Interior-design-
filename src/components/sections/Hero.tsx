import { motion } from 'motion/react';
import { NavLink } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative h-screen bg-obsidian overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center transition-transform duration-[10s] scale-110" 
          style={{ 
            backgroundImage: "url('https://images.pexels.com/photos/33720788/pexels-photo-33720788.jpeg')", 
          }}
        ></div>
        {/* The 40% black overlay requested by user */}
        <div className="absolute inset-0 bg-black/40 z-10"></div>
      </div>

      <div className="relative z-20 h-full max-w-7xl mx-auto px-8 md:px-16 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          <p className="text-gold text-[11px] uppercase tracking-[0.5em] mb-8 font-bold flex items-center gap-4">
            <span className="w-8 h-px bg-gold"></span> Est. 2012 — London / Mumbai
          </p>
          <h1 className="text-[56px] md:text-[86px] font-serif leading-[0.9] mb-8 tracking-tight italic text-pearl">
            Designing Modern <span className="not-italic">Spaces</span> That Inspire.
          </h1>
          <p className="text-[16px] leading-relaxed text-pearl/80 max-w-md mb-12 font-sans font-light">
            We craft bespoke architectural narratives that harmonize form, function, and the human spirit. From luxury residences to commercial landmarks.
          </p>
          
          <div className="flex items-center gap-8">
            <NavLink to="/contact" className="lux-button !bg-gold !text-obsidian hover:!bg-pearl">
              Get Consultation
            </NavLink>
            <NavLink to="/portfolio" className="text-[11px] text-pearl uppercase tracking-widest border-b border-pearl/30 cursor-pointer hover:text-gold hover:border-gold transition-colors font-sans py-2">
              View Work
            </NavLink>
          </div>
        </motion.div>

        {/* Floating Statistics - Subtle */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-24 flex gap-12 text-pearl"
        >
          <div>
            <div className="text-2xl font-serif mb-1 tracking-tighter">150+</div>
            <div className="text-[9px] uppercase tracking-widest text-pearl/50 font-sans">Projects</div>
          </div>
          <div>
            <div className="text-2xl font-serif mb-1 tracking-tighter">26</div>
            <div className="text-[9px] uppercase tracking-widest text-pearl/50 font-sans">Awards</div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-16 right-16 flex justify-between items-center text-[10px] tracking-[0.4em] uppercase text-pearl/40 font-sans z-20">
        <div className="flex gap-10">
          <a href="#" className="hover:text-gold transition-colors">Instagram</a>
          <a href="#" className="hover:text-gold transition-colors">LinkedIn</a>
        </div>
        <div className="hidden md:flex items-center gap-4">
          <span>Scroll to explore</span>
          <div className="w-16 h-[1px] bg-pearl/20"></div>
        </div>
      </div>
    </section>
  );
}
