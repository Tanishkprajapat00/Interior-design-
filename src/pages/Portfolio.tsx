import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import ProjectCard from '../components/ProjectCard';
import { PROJECTS } from '../constants';

const categories = ['All', 'Residential', 'Commercial', 'Interior', 'Architecture'];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeCategory);

  return (
    <div className="bg-pearl min-h-screen">
      {/* Header */}
      <section className="section-padding pt-40 border-b border-black/5">
        <h4 className="meta-text mb-6">Our Legacy</h4>
        <h1 className="text-6xl md:text-8xl mb-20 italic">The <span className="not-italic">Portfolio.</span></h1>

        {/* Filter */}
        <div className="flex flex-wrap gap-8 md:gap-12 pb-8 overflow-x-auto whitespace-nowrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`font-sans text-[10px] uppercase tracking-[0.2em] font-bold transition-all relative pb-2 ${
                activeCategory === cat ? 'text-obsidian' : 'text-zinc-400 hover:text-obsidian'
              }`}
            >
              {cat}
              {activeCategory === cat && (
                <motion.div 
                  layoutId="activeFilter"
                  className="absolute bottom-0 left-0 w-full h-[1px] bg-gold"
                />
              )}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="px-6 md:px-12 lg:px-24 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <ProjectCard key={project.id} project={project} index={idx} />
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section-padding bg-obsidian text-white text-center">
        <h2 className="text-4xl mb-10">Have a unique project in mind?</h2>
        <button className="lux-button bg-gold border-gold">Work With Us</button>
      </section>
    </div>
  );
}
