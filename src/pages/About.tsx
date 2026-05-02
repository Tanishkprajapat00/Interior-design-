import { motion } from 'motion/react';
import { TEAM } from '../constants';

export default function About() {
  return (
    <div>
      {/* Header */}
      <section className="section-padding bg-pearl pt-40 border-b border-black/5">
        <div className="max-w-4xl">
          <motion.h4 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="meta-text mb-6"
          >
            Since 2012
          </motion.h4>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl mb-12 italic"
          >
            A Collective of Visionary <span className="not-italic">Architects.</span>
          </motion.h1>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding grid grid-cols-1 lg:grid-cols-2 gap-20 bg-white">
        <div className="space-y-8">
          <h2 className="text-4xl italic">Designing for more than a decade.</h2>
          <p className="text-zinc-600 text-[15px] leading-relaxed font-sans mt-8">
            Founded in a small studio in London, Aura has grown into a global powerhouse with projects spanning four continents. Our origins are rooted in the belief that great design should be accessible but exclusive in its thought process.
          </p>
          <div className="grid grid-cols-2 gap-8 pt-12 border-t border-zinc-100">
            <div>
              <span className="block text-4xl font-serif text-gold mb-2">12+</span>
              <span className="text-[10px] uppercase tracking-widest font-sans font-bold text-zinc-400">Years Excellence</span>
            </div>
            <div>
              <span className="block text-4xl font-serif text-gold mb-2">150+</span>
              <span className="text-[10px] uppercase tracking-widest font-sans font-bold text-zinc-400">Completed Projects</span>
            </div>
            <div>
              <span className="block text-4xl font-serif text-gold mb-2">25+</span>
              <span className="text-[10px] uppercase tracking-widest font-sans font-bold text-zinc-400">Design Awards</span>
            </div>
            <div>
              <span className="block text-4xl font-serif text-gold mb-2">4</span>
              <span className="text-[10px] uppercase tracking-widest font-sans font-bold text-zinc-400">Global Studios</span>
            </div>
          </div>
        </div>
        <div className="relative">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800" 
            alt="Studio Space"
            className="w-full h-[600px] object-cover rounded-sm"
          />
          <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-gold hidden xl:block -z-10"></div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-obsidian text-white">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h4 className="font-accent text-gold text-xs uppercase tracking-[0.3em] mb-6">Masterminds</h4>
          <h2 className="text-5xl mb-6">The Collective</h2>
          <p className="text-zinc-500">Our strength lies in our diversity of thought and our unified passion for perfection.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {TEAM.map((member, idx) => (
            <motion.div 
              key={member.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group text-center"
            >
              <div className="aspect-square overflow-hidden mb-6 relative">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="text-2xl mb-1">{member.name}</h3>
              <p className="font-accent text-[10px] uppercase tracking-widest text-gold">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center py-20 relative z-10">
          <h2 className="text-5xl italic mb-10 leading-snug">"Architecture is a visual art, and the buildings speak for themselves."</h2>
          <p className="font-accent text-xs uppercase tracking-[0.4em] text-zinc-400">— Aura Manifesto</p>
        </div>
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
          <div className="grid grid-cols-12 h-full">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="border-r border-obsidian h-full"></div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
