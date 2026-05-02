import { motion } from 'motion/react';
import { SERVICES } from '../constants';
import { Compass, Armchair, Boxes, Briefcase, CheckCircle2 } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const iconMap: Record<string, any> = {
  Compass,
  Armchair,
  Boxes,
  Briefcase
};

export default function Services() {
  return (
    <div className="bg-pearl min-h-screen">
      {/* Header */}
      <section className="section-padding pt-40">
        <h4 className="font-accent text-gold text-xs uppercase tracking-[0.3em] mb-6">Expertise</h4>
        <h1 className="text-6xl md:text-8xl mb-12">Services</h1>
        <p className="max-w-2xl text-zinc-600 text-lg">
          We provide a comprehensive suite of design services, bridging the gap between artistic vision and technical feasibility.
        </p>
      </section>

      {/* Services List */}
      <section className="section-padding space-y-32">
        {SERVICES.map((service, idx) => {
          const Icon = iconMap[service.icon];
          return (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-center`}
            >
              <div className="flex-1 space-y-8">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-obsidian flex items-center justify-center text-gold">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h2 className="text-4xl md:text-5xl">{service.title}</h2>
                </div>
                <p className="text-zinc-600 text-lg leading-relaxed">
                  {service.description} Aura Studio leverages cutting-edge technology and centuries-old craftsmanship to deliver results that exceed expectations.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-sm text-zinc-500">
                    <CheckCircle2 className="w-4 h-4 text-gold" />
                    <span>Global Industry Standards</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-zinc-500">
                    <CheckCircle2 className="w-4 h-4 text-gold" />
                    <span>Sustainability First Approach</span>
                  </div>
                </div>

                <div className="pt-6 border-t border-zinc-200">
                  <span className="font-accent text-[10px] uppercase tracking-widest text-zinc-400 block mb-2">Starting Investment</span>
                  <span className="text-2xl font-display text-gold">{service.priceRange}</span>
                </div>

                <NavLink to="/contact" className="lux-button inline-block">
                  Enquire Now
                </NavLink>
              </div>

              <div className="flex-1 w-full">
                <img 
                  src={`https://images.unsplash.com/photo-${idx === 0 ? '1486406146926-c627a92ad1ab' : idx === 1 ? '1618221195710-dd6b41faaea6' : idx === 2 ? '1503387762-592eca58ef45' : '1541888941255-0974e80a5ed3'}?auto=format&fit=crop&q=80&w=800`} 
                  alt={service.title}
                  className="w-full h-[500px] object-cover shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </motion.div>
          );
        })}
      </section>

      {/* Process Section */}
      <section className="section-padding bg-zinc-50">
        <div className="text-center mb-20">
          <h4 className="font-accent text-gold text-xs uppercase tracking-[0.3em] mb-4">Methodology</h4>
          <h2 className="text-5xl">Our Process</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { step: '01', title: 'Consultation', desc: 'Understanding your vision and site constraints.' },
            { step: '02', title: 'Concept', desc: 'Initial sketches and material palette exploration.' },
            { step: '03', title: 'Development', desc: 'Detailed 3D models and structural engineering.' },
            { step: '04', title: 'Execution', desc: 'Project oversight and final site handover.' },
          ].map((item) => (
            <div key={item.step} className="p-8 bg-white border border-black/5 hover:border-gold transition-colors text-center group">
              <span className="font-display text-4xl text-zinc-200 group-hover:text-gold transition-colors block mb-6">{item.step}</span>
              <h3 className="text-xl mb-4 uppercase font-accent tracking-widest">{item.title}</h3>
              <p className="text-zinc-500 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
