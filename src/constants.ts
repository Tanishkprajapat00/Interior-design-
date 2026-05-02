import { Project, Service, TeamMember, Testimonial } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Luxury Residence Project',
    category: 'Residential',
    image: 'https://images.pexels.com/photos/14589851/pexels-photo-14589851.jpeg',
    description: 'A minimalist sanctuary blending raw concrete with refined timber.',
    year: '2024',
    location: 'Malibu, CA'
  },
  {
    id: '2',
    title: 'Glass Pavilion',
    category: 'Architecture',
    image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg',
    description: 'Bespoke structural glass integration in a natural forest setting.',
    year: '2023',
    location: 'Zurich, CH'
  },
  {
    id: '3',
    title: 'Urban Loft Studio',
    category: 'Interior',
    image: 'https://images.pexels.com/photos/373912/pexels-photo-373912.jpeg',
    description: 'Industrial chic reimagined for modern creative workspaces.',
    year: '2023',
    location: 'Berlin, DE'
  },
  {
    id: '4',
    title: 'Corporate Headquarters',
    category: 'Commercial',
    image: 'https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg',
    description: 'Sustainable office design focusing on vertical greenery.',
    year: '2024',
    location: 'Singapore, SG'
  }
];

export const SERVICES: Service[] = [
  {
    id: 'arch',
    title: 'Architectural Design',
    description: 'From conceptual sketches to detailed structural blueprints for iconic landmarks.',
    icon: 'Compass',
    priceRange: '₹5L - ₹50L+'
  },
  {
    id: 'interior',
    title: 'Interior Curation',
    description: 'Bespoke furniture selection, lighting design, and material palette curation.',
    icon: 'Armchair',
    priceRange: '₹3L - ₹30L'
  },
  {
    id: 'visual',
    title: '3D Visualization',
    description: 'Photorealistic renderings and immersive VR walkthroughs for pre-construction.',
    icon: 'Boxes',
    priceRange: '₹50K - ₹5L'
  },
  {
    id: 'management',
    title: 'Project Management',
    description: 'End-to-end oversight ensuring quality, timeline, and budget adherence.',
    icon: 'Briefcase',
    priceRange: '5% - 10% of total cost'
  }
];

export const TEAM: TeamMember[] = [
  {
    id: '1',
    name: 'Julian Vane',
    role: 'Principal Architect',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300'
  },
  {
    id: '2',
    name: 'Elena Rossi',
    role: 'Design Director',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=300'
  },
  {
    id: '3',
    name: 'Marcus Thorne',
    role: 'Technical Lead',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=300'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Alexandra Wright',
    text: 'Aura transformed our vision into a palpable masterpiece. Their attention to material texture is unparalleled.',
    rating: 5,
    location: 'London'
  },
  {
    id: '2',
    name: 'Robert Chen',
    text: 'Professional, visionary, and impeccable execution. The Vertex Plaza has become a local landmark.',
    rating: 5,
    location: 'Singapore'
  }
];
