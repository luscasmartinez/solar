import React, { useRef } from 'react';
import { useInView } from '../../hooks/useInView';
import { Sun, Battery, Leaf, Award } from 'lucide-react';

const About: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });
   const clientLogos = [
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png"
  ];

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-20 bg-white"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className={`text-3xl md:text-4xl font-display font-bold text-primary-800 mb-4 ${isInView ? 'animate-fade-in' : 'opacity-0'}`}>
            Por que Escolher Solar?
          </h2>
          <p className={`text-lg text-primary-600 ${isInView ? 'animate-slide-up delay-100' : 'opacity-0'}`}>
            Investir em energia solar é investir em um futuro sustentável e economicamente viável.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className={`bg-secondary-50 rounded-2xl p-8 shadow-soft ${isInView ? 'animate-fade-in delay-200' : 'opacity-0'}`}>
            <div className="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center mb-6">
              <Battery className="text-primary-500" size={28} />
            </div>
            <h3 className="text-xl font-display font-semibold text-primary-800 mb-3">
              Economia Real
            </h3>
            <p className="text-primary-600">
              Reduza sua conta de energia em até 95% e tenha retorno do investimento em aproximadamente 4 anos.
            </p>
          </div>
          
          <div className={`bg-secondary-50 rounded-2xl p-8 shadow-soft ${isInView ? 'animate-fade-in delay-300' : 'opacity-0'}`}>
            <div className="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center mb-6">
              <Leaf className="text-primary-500" size={28} />
            </div>
            <h3 className="text-xl font-display font-semibold text-primary-800 mb-3">
              Sustentabilidade
            </h3>
            <p className="text-primary-600">
              Energia limpa e renovável que contribui para a redução da emissão de gases do efeito estufa.
            </p>
          </div>
          
          <div className={`bg-secondary-50 rounded-2xl p-8 shadow-soft ${isInView ? 'animate-fade-in delay-400' : 'opacity-0'}`}>
            <div className="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center mb-6">
              <Award className="text-primary-500" size={28} />
            </div>
            <h3 className="text-xl font-display font-semibold text-primary-800 mb-3">
              Qualidade Garantida
            </h3>
            <p className="text-primary-600">
              Utilizamos equipamentos de primeira linha com garantia estendida e suporte técnico especializado.
            </p>
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`${isInView ? 'animate-slide-up delay-500' : 'opacity-0'}`}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-300/20 to-secondary-300/20 rounded-2xl blur-xl"></div>
              <div className="relative bg-white p-2 rounded-2xl shadow-medium overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Instalação de painéis solares" 
                  className="w-full h-auto rounded-xl"
                />
              </div>
            </div>
          </div>
          
          <div className={`space-y-6 ${isInView ? 'animate-fade-in delay-600' : 'opacity-0'}`}>
            <h3 className="text-2xl md:text-3xl font-display font-bold text-primary-800">
              Nossa Experiência
            </h3>
            <p className="text-primary-600">
              Com mais de 10 anos no mercado de energia solar, já realizamos mais de 500 instalações em residências e empresas. Nossa equipe altamente qualificada está pronta para desenvolver o projeto ideal para suas necessidades.
            </p>
            <p className="text-primary-600">
              Oferecemos soluções completas, desde o dimensionamento do sistema até a instalação e manutenção, sempre com foco na máxima eficiência e satisfação do cliente.
            </p>
            <div className="pt-2">
              <a 
                href="#contact" 
                className="inline-block bg-primary-500 hover:bg-primary-600 text-white font-medium px-6 py-2 rounded-xl transition-all duration-300 shadow-soft"
              >
                Solicite uma Avaliação
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-24">
  <div className="text-center mb-12">
    <h3 className="text-2xl md:text-3xl font-bold text-primary-800">
      Algumas empresas que confiaram em nosso trabalho
    </h3>
  </div>
  
  <div className="relative bg-secondary-50 rounded-xl overflow-hidden py-6 shadow-soft">
    {/* Gradientes laterais */}
    <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-secondary-50 to-transparent z-10"></div>
    <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-secondary-50 to-transparent z-10"></div>
    
    <div className="slider-container">
      <div className="slide-track animate-scroll">
        {/* Duplicamos as logos para criar o efeito de loop contínuo */}
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

{/* Estilos embutidos para o slider */}
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