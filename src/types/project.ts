export interface Project {
  id?: string;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  gallery: string[];
  tags: string[];
  team: string[];
  duration: string;
  features: string[];
  category: 'residential' | 'commercial' | 'rural' | 'industrial';
  power: string;
  systemType: 'on-grid' | 'off-grid' | 'hybrid';
  location: string;
  completedAt: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface ProjectFormData {
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  gallery: string[];
  tags: string[];
  team: string[];
  duration: string;
  features: string[];
  category: 'residential' | 'commercial' | 'rural' | 'industrial';
  power: string;
  systemType: 'on-grid' | 'off-grid' | 'hybrid';
  location: string;
  completedAt: string;
}