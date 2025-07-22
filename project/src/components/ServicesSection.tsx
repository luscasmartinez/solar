import React from 'react';
import { services } from '../types/services';
import ServiceCard from './ServiceCard';

const ServicesSection: React.FC = () => {
  return (
    <div id="services"  className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-4">
            Nossos Serviços
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Soluções completas em energia solar e sistemas elétricos para residências, 
            empresas e projetos industriais. Qualidade, eficiência e sustentabilidade.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;