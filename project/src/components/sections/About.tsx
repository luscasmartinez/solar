import React, { useRef } from 'react';
import { useInView } from '../../hooks/useInView';
import { Sun, Battery, Leaf, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import Counter from '../Counter';

const About: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });
  const clientLogos = [
    "https://i.imgur.com/IMe5Z7D.jpeg",
    "https://i.imgur.com/Veu1Tn2.jpeg",
    "https://i.imgur.com/w6LRmxD.jpeg",
    "https://i.imgur.com/BbqlV5H.jpeg",
    "https://i.imgur.com/ybUH6rq.jpeg",
    "https://i.imgur.com/pLn9Dhb.jpeg",
    "https://i.imgur.com/lJClLl8.jpeg",
    "https://i.imgur.com/wGhuAxV.jpeg",
    "https://i.imgur.com/eM58T9c.jpeg",
    "https://i.imgur.com/iwka3rh.jpeg",
    "https://i.imgur.com/BGDZ9Yc.jpeg",
    "https://i.imgur.com/Nohqk01.jpeg"
  ];

  const cards = [
    {
      icon: <Battery size={28} />,
      title: "Missão",
      description: "Entregar soluções em engenharia elétrica e energia solar com excelência técnica, segurança e comprometimento, promovendo o uso inteligente da energia e contribuindo para a sustentabilidade e o desenvolvimento dos nossos clientes e da sociedade.",
      bgImage: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      day: "01",
      month: "Jan",
      year: "2023",
      color: "from-blue-500 to-blue-700"
    },
    {
      icon: <Leaf size={28} />,
      title: "Visão",
      description: "Ser referência em engenharia elétrica e sistemas fotovoltaicos no Sul do Brasil, reconhecida pela qualidade dos serviços, inovação nos projetos e confiança construída com clientes, parceiros e comunidade.",
      bgImage: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      day: "15",
      month: "Mar",
      year: "2023",
      color: "from-green-500 to-green-700"
    },
    {
      icon: <Award size={28} />,
      title: "Valores",
      description: "Valorizamos a segurança, a excelência técnica, a sustentabilidade, a transparência com o cliente e a inovação com propósito em tudo o que fazemos.",
      bgImage: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      day: "30",
      month: "Jun",
      year: "2023",
      color: "from-amber-500 to-amber-700"
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-20 bg-[#153569]"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold text-white mb-4 ${isInView ? 'animate-fade-in' : 'opacity-0'}`}>
            Por que Escolher Solar?
          </h2>
          <p className={`text-lg text-blue-200 ${isInView ? 'animate-slide-up delay-100' : 'opacity-0'}`}>
            Investir em energia solar é investir em um futuro sustentável e economicamente viável.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="relative h-full min-h-[400px] rounded-2xl overflow-hidden shadow-xl">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-all duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url(${card.bgImage})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                </div>

                <div className="relative h-full flex flex-col justify-end p-6">
                  <div className={`w-14 h-14 mb-4 rounded-full flex items-center justify-center bg-gradient-to-br ${card.color} shadow-md`}>
                    {React.cloneElement(card.icon, { className: 'text-white' })}
                  </div>

                  <div className="transform transition-all duration-300 group-hover:translate-y-0">
                    <h3 className="text-2xl font-bold text-white mb-2">{card.title}</h3>
                    <p className="text-blue-100 mb-4">{card.description}</p>
                    
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`${isInView ? 'animate-slide-up delay-500' : 'opacity-0'}`}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-300/20 to-secondary-300/20 rounded-2xl blur-xl"></div>
              <div className="relative rounded-2xl shadow-medium overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Instalação de painéis solares" 
                  className="w-full h-auto rounded-xl"
                />
              </div>
            </div>
          </div>
          
          <div className={`space-y-6 ${isInView ? 'animate-fade-in delay-600' : 'opacity-0'}`}>
  <h3 className="text-2xl md:text-3xl font-bold text-white">
    Nossa Experiência
  </h3>
  <p className="text-blue-200">
    Com mais de 10 anos no mercado de energia solar, já realizamos mais de 500 instalações em residências e empresas. Nossa equipe altamente qualificada está pronta para desenvolver o projeto ideal para suas necessidades.
  </p>
  <p className="text-blue-200">
    Oferecemos soluções completas, desde o dimensionamento do sistema até a instalação e manutenção, sempre com foco na máxima eficiência e satisfação do cliente.
  </p>

  {/* Cards de Estatísticas */}
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
    {/* Projetos Entregues */}
    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
      <div className="text-2xl md:text-3xl font-bold text-yellow-400 mb-1">
        <Counter value={300} duration={2000} />
      </div>
      <p className="text-sm text-blue-200">Projetos Entregues</p>
    </div>

    {/* Módulos Instalados */}
    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
      <div className="text-2xl md:text-3xl font-bold text-yellow-400 mb-1">
        <Counter value={6350} duration={2000} />
      </div>
      <p className="text-sm text-blue-200">Módulos Instalados</p>
    </div>

    {/* KWp de Potência */}
    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
      <div className="text-2xl md:text-3xl font-bold text-yellow-400 mb-1">
        <Counter value={3490} duration={2000} suffix=" " />
      </div>
      <p className="text-sm text-blue-200">KWp de Potência Total</p>
    </div>

    {/* Economia Gerada */}
    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
      <div className="text-2xl md:text-3xl font-bold text-yellow-400 mb-1">
        <Counter value={849} duration={2000} prefix="R$ " />
      </div>
      <p className="text-sm text-blue-200">Mil em Economia Gerada</p>
    </div>
  </div>
</div>
        </div>
      </div>

      <div className="mt-24">
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-white">
            Algumas empresas que confiaram em nosso trabalho.
          </h3>
        </div>
        
        <div className="relative bg-white/10 rounded-xl overflow-hidden py-6 shadow-soft backdrop-blur-sm">
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#153569]/80 to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#153569]/80 to-transparent z-10"></div>
          
          <div className="slider-container">
            <div className="slide-track animate-scroll">
              {[...clientLogos, ...clientLogos].map((logo, index) => (
                <div key={index} className="slide px-8">
                  <img 
                    src={logo} 
                    height="60" 
                    width="200" 
                    alt="" 
                    className="object-contain h-12 md:h-16 opacity-80 hover:opacity-100 transition-opacity"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .slider-container {
          overflow: hidden;
          position: relative;
          width: 100%;
        }
        
        .slide-track {
          display: flex;
          width: calc(200px * ${clientLogos.length * 2});
          animation: scroll 40s linear infinite;
        }
        
        .slide {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-200px * ${clientLogos.length})) }
        }
      `}</style>
    </section>
  );
};

export default About;