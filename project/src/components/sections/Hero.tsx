import React, { useRef } from 'react';
import { useInView } from '../../hooks/useInView';
import { Sun, Leaf } from 'lucide-react';
import Counter from '../Counter';
import WhatsAppCTA from '../WhatsAppCTA';

const Hero: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen pt-24 pb-16 flex items-center"
    >
      {/* Imagem de fundo escura com overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
          alt="Painéis solares"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Seção Esquerda (Totalmente Preservada) */}
          <div className={`space-y-6 ${isInView ? 'animate-fade-in' : 'opacity-0'}`}>
            <div className="flex gap-4 mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/20 text-green-100 text-sm font-medium">
                <Leaf size={18} className="mr-2" />
                Energia Limpa
              </span>
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-yellow-500/20 text-yellow-100 text-sm font-medium">
                <Sun size={18} className="mr-2" />
                Sustentável
              </span>
            </div>

            <div className="relative">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Transforme o Sol em Economia para seu Futuro
              </h1>
            </div>

            <p className="text-xl text-gray-300 max-w-lg">
              Soluções em energia solar para residências e empresas. Reduza sua conta de luz e contribua para um planeta mais sustentável.
            </p>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center  font-bold text-2xl text-yellow-400">
                <Counter value={200} prefix='+ de '/>
                <p className="text-sm text-gray-300">Projetos Entregues</p>
              </div>
              <div className="text-center font-bold text-2xl text-yellow-400">
                <Counter value={+4230} prefix='+ de '/>
                <p className="text-sm text-gray-300">Módulos Instalados</p>
              </div>
              <div className="text-center font-bold text-2xl text-yellow-400">
                <Counter value={+2326} suffix="" prefix='+ de '/>
                <p className="text-sm text-gray-300">kWp de Potencia Total</p>
              </div>
            </div>
          </div>

          {/* Seção Direita - Botão WhatsApp */}
          <div className={`${isInView ? 'animate-slide-up delay-300' : 'opacity-0 translate-y-10'}`}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-yellow-500/20 to-green-500/20 rounded-2xl blur-xl"></div>
              <div className="relative bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-yellow-500/10 rounded-full flex items-center justify-center">
                    <Sun className="text-yellow-500" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    Fale conosco pelo WhatsApp
                  </h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Tire suas dúvidas ou solicite um orçamento. Estamos prontos para atender você.
                </p>
                <WhatsAppCTA section="hero" variant="primary" className="w-full" />
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex items-center gap-2 text-gray-600 text-sm mt-2">
                    <Leaf size={16} />
                    <span>Energia 100% limpa e renovável</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;