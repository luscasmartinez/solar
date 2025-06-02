import React, { useRef, useState } from 'react';
import { useInView } from '../../hooks/useInView';
import { Home, Building2, Wrench, LineChart } from 'lucide-react';

const Services: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });
  const [activeCard, setActiveCard] = useState(0);

  const services = [
    {
      icon: <Home className="text-white" size={28} />,
      title: "Residencial",
      description: "Sistemas solares personalizados para sua casa, reduzindo custos e aumentando o valor do seu imóvel.",
      bgImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      icon: <Building2 className="text-white" size={28} />,
      title: "Empresarial",
      description: "Soluções em grande escala para empresas, com foco em eficiência energética e retorno do investimento.",
      bgImage: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      icon: <Wrench className="text-white" size={28} />,
      title: "Manutenção",
      description: "Serviços de manutenção preventiva e corretiva para garantir o máximo desempenho do seu sistema.",
      bgImage: "https://solproenergiasolar.com/wp-content/uploads/2021/03/placas-fotovoltaicas.jpg"
    },
    {
      icon: <LineChart className="text-white" size={28} />,
      title: "Consultoria",
      description: "Análise detalhada do seu consumo e projeto personalizado para maximizar sua economia.",
      bgImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    }
  ];

  return (
    <section 
      id="services" 
      ref={sectionRef}
      className="py-20 bg-primary-800"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold text-white mb-4 ${isInView ? 'animate-fade-in' : 'opacity-0'}`}>
            Nossos Serviços
          </h2>
          <p className={`text-lg text-primary-200 ${isInView ? 'animate-slide-up delay-100' : 'opacity-0'}`}>
            Soluções completas em energia solar para todos os tipos de necessidades.
          </p>
        </div>
        
        <div className="relative">
          <div className="flex overflow-x-auto pb-8 -mx-4 px-4">
            <div className="flex space-x-8">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className={`relative flex-shrink-0 w-80 md:w-96 h-96 rounded-2xl overflow-hidden transition-all duration-500 cursor-pointer ${
                    activeCard === index ? 'active-card shadow-2xl' : 'opacity-90 hover:opacity-100'
                  }`}
                  style={{ 
                    backgroundImage: `url(${service.bgImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                  onClick={() => setActiveCard(index)}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                  
                  <div className={`absolute bottom-0 left-0 right-0 p-6 text-white transition-all duration-500 ${
                    activeCard === index ? 'translate-y-0' : 'translate-y-[calc(100%-80px)]'
                  }`}>
                    <div className={`w-14 h-14 bg-primary-500 rounded-full flex items-center justify-center mb-4 ${
                      activeCard === index ? '' : '-mt-[15px]'
                    }`}>
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                    <p className={`transition-all duration-500 ${
                      activeCard === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}>
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="#contact" 
            className={`inline-block bg-primary-500 hover:bg-primary-600 text-white font-medium px-8 py-3 rounded-xl transition-all duration-300 shadow-soft ${
              isInView ? 'animate-fade-in delay-600' : 'opacity-0'
            }`}
          >
            Solicite um Orçamento
          </a>
        </div>
      </div>

      <style jsx>{`
        .active-card {
          transform: scale(1.05);
          z-index: 10;
        }
        
        /* Custom scrollbar */
        .flex::-webkit-scrollbar {
          height: 8px;
        }
        .flex::-webkit-scrollbar-track {
          background: rgba(255,255,255,0.1);
          border-radius: 10px;
        }
        .flex::-webkit-scrollbar-thumb {
          background: rgba(255,255,255,0.3);
          border-radius: 10px;
        }
        .flex::-webkit-scrollbar-thumb:hover {
          background: rgba(255,255,255,0.5);
        }
      `}</style>
    </section>
  );
};

export default Services;