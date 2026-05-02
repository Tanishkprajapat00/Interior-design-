import { motion } from 'motion/react';
import Hero from '../components/sections/Hero';
import ProjectCard from '../components/ProjectCard';
import { PROJECTS, SERVICES } from '../constants';
import { ArrowRight, Compass, Armchair, Boxes, Briefcase } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const iconMap: Record<string, any> = {
  Compass,
  Armchair,
  Boxes,
  Briefcase
};

export default function Home() {
  return (
    <div>
      <Hero />

      {/* Intro Section */}
      <section className="section-padding grid grid-cols-1 lg:grid-cols-2 gap-16 items-center bg-white">
        <motion.div
           initial={{ opacity: 0, x: -50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
          <img 
            src="https://images.pexels.com/photos/31737861/pexels-photo-31737861.jpeg" 
            alt="Interior detail"
            className="w-full aspect-[4/3] object-cover grayscale hover:grayscale-0 transition-all duration-700"
          />
        </motion.div>
        
        <motion.div
           initial={{ opacity: 0, x: 50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
          <h4 className="meta-text mb-6">Our Philosophy</h4>
          <h2 className="text-4xl md:text-5xl mb-8 leading-tight italic">
            We believe architecture is the <span className="not-italic">soul</span> of civilization.
          </h2>
          <p className="text-zinc-600 leading-relaxed mb-10 text-[15px] font-sans">
            At Aura Studio, we transcend the conventional boundaries of structural engineering to create evocative spaces that resonate with the human spirit. Each project is a dialogue between site, materiality, and movement.
          </p>
          <NavLink to="/about" className="lux-link font-sans text-xs uppercase tracking-widest flex items-center gap-2 group">
            About the Studio <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
          </NavLink>
        </motion.div>
      </section>

      {/* Featured Projects */}
      <section className="section-padding bg-pearl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h4 className="meta-text mb-4">Latest Works</h4>
            <h2 className="text-5xl italic">Selected <span className="not-italic">Projects</span></h2>
          </div>
          <NavLink to="/portfolio" className="lux-button">
            View All Projects
          </NavLink>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {PROJECTS.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-obsidian text-white">
        <div className="max-w-4xl mb-20">
          <h4 className="font-accent text-gold text-xs uppercase tracking-[0.3em] mb-6">Expertise</h4>
          <h2 className="text-5xl mb-8">Crafting Excellence Across Scales</h2>
          <p className="text-zinc-400 text-lg">Our multidisciplinary approach ensures every detail, from the masterplan to the door handle, is intentional.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-zinc-800 border-[0.5px] border-zinc-800">
          {SERVICES.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <div key={service.id} className="bg-obsidian p-10 hover:bg-zinc-900 transition-colors group">
                <Icon className="w-10 h-10 text-gold mb-8 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl mb-4">{service.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                <span className="font-accent text-[10px] text-gold uppercase tracking-widest">{service.priceRange}</span>
              </div>
            );
          })}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 px-6 text-center bg-gold/5 border-y border-gold/10">
        <h2 className="text-5xl mb-10">Start Your Legacy Project</h2>
        <NavLink to="/contact" className="lux-button inline-block">
          Book Design Consultation
        </NavLink>
      </section>
    </div>
  );
}
