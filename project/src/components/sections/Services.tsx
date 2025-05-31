import React, { useRef } from 'react';
import { useInView } from '../../hooks/useInView';
import { Sun, Home, Building2, Wrench, Battery, LineChart } from 'lucide-react';

const ServiceCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: string;
  isVisible: boolean;
}> = ({ icon, title, description, delay, isVisible }) => {
  return (
    <div 
      className={`bg-white rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 ${
        isVisible ? `animate-fade-in ${delay}` : 'opacity-0'
      }`}
    >
      <div className="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-display font-semibold text-primary-800 mb-3">
        {title}
      </h3>
      <p className="text-primary-600">
        {description}
      </p>
    </div>
  );
};

const Services: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });

  const services = [
    {
      icon: <Home className="text-primary-500\" size={28} />,
      title: "Residencial",
      description: "Sistemas solares personalizados para sua casa, reduzindo custos e aumentando o valor do seu imóvel.",
      delay: "delay-200"
    },
    {
      icon: <Building2 className="text-primary-500" size={28} />,
      title: "Empresarial",
      description: "Soluções em grande escala para empresas, com foco em eficiência energética e retorno do investimento.",
      delay: "delay-300"
    },
    {
      icon: <Wrench className="text-primary-500\" size={28} />,
      title: "Manutenção",
      description: "Serviços de manutenção preventiva e corretiva para garantir o máximo desempenho do seu sistema.",
      delay: "delay-400"
    },
    {
      icon: <LineChart className="text-primary-500" size={28} />,
      title: "Consultoria",
      description: "Análise detalhada do seu consumo e projeto personalizado para maximizar sua economia.",
      delay: "delay-500"
    }
  ];

  return (
    <section 
      id="services" 
      ref={sectionRef}
      className="py-20 bg-secondary-50"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className={`text-3xl md:text-4xl font-display font-bold text-primary-800 mb-4 ${isInView ? 'animate-fade-in' : 'opacity-0'}`}>
            Nossos Serviços
          </h2>
          <p className={`text-lg text-primary-600 ${isInView ? 'animate-slide-up delay-100' : 'opacity-0'}`}>
            Soluções completas em energia solar para todos os tipos de necessidades.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={service.delay}
              isVisible={isInView}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="#contact" 
            className={`inline-block bg-primary-500 hover:bg-primary-600 text-white font-medium px-8 py-3 rounded-xl transition-all duration-300 shadow-soft ${isInView ? 'animate-fade-in delay-600' : 'opacity-0'}`}
          >
            Solicite um Orçamento
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;