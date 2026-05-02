import { Project, Service, TeamMember, Testimonial } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Luxury Residence Project',
    category: 'Residential',
    image: 'https://images.pexels.com/photos/14589851/pexels-photo-14589851.jpeg',
    description: 'A minimalist sanctuary blending raw concrete with refined timber.',
    year: '2023',
    location: 'Beverly Hills, CA'
  },
  {
    id: '2',
    title: 'Vertex Plaza',
    category: 'Commercial',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800',
    description: 'Dynamic office architecture focusing on verticality and natural light.',
    year: '2022',
    location: 'London, UK'
  },
  {
    id: '3',
    title: 'Ivory Loft',
    category: 'Interior',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800',
    description: 'An expansive open-concept interior featuring pearl finishes.',
    year: '2024',
    location: 'Paris, FR'
  },
  {
    id: '4',
    title: 'Nexus Pavillion',
    category: 'Commercial',
    image: 'https://images.unsplash.com/photo-1470509037663-253afd7f0f51?auto=format&fit=crop&q=80&w=800',
    description: 'A modern community hub with parametric design elements.',
    year: '2023',
    location: 'Tokyo, JP'
  },
  {
    id: '5',
    title: 'Desert Mirage',
    category: 'Residential',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800',
    description: 'Luxury villa seamlessly integrated into the arid landscape.',
    year: '2024',
    location: 'Dubai, UAE'
  },
  {
    id: '6',
    title: 'Starlight Suite',
    category: 'Interior',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800',
    description: 'High-end penthouse renovation with bespoke marble work.',
    year: '2021',
    location: 'New York, NY'
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
