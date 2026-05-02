import { motion } from 'motion/react';
import { NavLink } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/33720788/pexels-photo-33720788.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-white text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif leading-tight drop-shadow-lg">
            Designing Modern <span className="italic">Spaces</span> That Inspire
          </h1>

          <p className="mt-6 max-w-xl mx-auto text-lg md:text-xl font-sans font-light opacity-90 leading-relaxed drop-shadow-md">
            We craft bespoke architectural narratives that harmonize form and function across the globe.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <NavLink to="/contact" className="px-8 py-3 bg-gold text-obsidian font-sans text-[11px] uppercase tracking-[0.2em] font-bold transition-all hover:bg-white">
              Get Consultation
            </NavLink>
            <NavLink to="/portfolio" className="px-8 py-3 border border-white text-white font-sans text-[11px] uppercase tracking-[0.2em] transition-all hover:bg-white/10">
              View Our Work
            </NavLink>
          </div>
        </motion.div>
      </div>

      {/* Decorative Bottom Line */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-20 opacity-40">
        <span className="text-[10px] uppercase tracking-[0.4em] font-sans">Scroll</span>
        <div className="w-px h-12 bg-white"></div>
      </div>
    </section>
  );
}
