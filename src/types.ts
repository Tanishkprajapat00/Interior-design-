export interface Project {
  id: string;
  title: string;
  category: 'Residential' | 'Commercial' | 'Interior' | 'Architecture';
  image: string;
  description: string;
  year: string;
  location: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  priceRange: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  rating: number;
  location: string;
}
