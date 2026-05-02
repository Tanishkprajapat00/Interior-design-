import React from 'react';
import { motion } from 'motion/react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  index: number;
  key?: React.Key;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative overflow-hidden bg-obsidian aspect-[4/5]"
    >
      <img 
        src={project.image} 
        alt={project.title}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-60"></div>
      
      <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
        <span className="meta-text text-[9px] mb-2 block">{project.category}</span>
        <h3 className="text-white text-2xl mb-2 font-serif italic">{project.title}</h3>
        <p className="text-zinc-400 text-[11px] font-sans uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
          {project.location} • {project.year}
        </p>
      </div>
    </motion.div>
  );
}
