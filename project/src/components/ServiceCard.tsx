import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Service } from '../types/services';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(service.path);
  };

  return (
    <div
      onClick={handleClick}
      className="group relative bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 cursor-pointer border border-gray-100 hover:border-blue-200 overflow-hidden"
    >
      {/* Background gradient on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Content */}
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <div className="text-4xl mb-2 transform group-hover:scale-110 transition-transform duration-300">
            {service.emoji}
          </div>
          <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transform group-hover:translate-x-1 transition-all duration-300" />
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-900 transition-colors duration-300">
          {service.title}
        </h3>
        
        <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
          {service.description}
        </p>
      </div>
      
      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
    </div>
  );
};

export default ServiceCard;