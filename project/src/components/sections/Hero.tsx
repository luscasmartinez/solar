import React, { useRef } from 'react';
import { useInView } from '../../hooks/useInView';
import { Sun, Battery, Leaf, Send } from 'lucide-react';

const Hero: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Obrigado pelo interesse! Entraremos em contato em breve.');
  };

  return (
    <section 
      id="hero" 
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
              <div className="text-center">
                <div className="font-bold text-2xl text-yellow-400">98%</div>
                <p className="text-sm text-gray-300">Economia na Conta</p>
              </div>
              <div className="text-center">
                <div className="font-bold text-2xl text-yellow-400">500+</div>
                <p className="text-sm text-gray-300">Projetos Realizados</p>
              </div>
              <div className="text-center">
                <div className="font-bold text-2xl text-yellow-400">25 Anos</div>
                <p className="text-sm text-gray-300">Garantia dos Painéis</p>
              </div>
            </div>
          </div>
          
          <div className={`${isInView ? 'animate-slide-up delay-300' : 'opacity-0 translate-y-10'}`}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-yellow-500/20 to-green-500/20 rounded-2xl blur-xl"></div>
              <div className="relative bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-yellow-500/10 rounded-full flex items-center justify-center">
                    <Sun className="text-yellow-500" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    Solicite um Orçamento
                  </h3>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nome completo
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-yellow-500 focus:ring focus:ring-yellow-200 focus:ring-opacity-50 transition-colors"
                      placeholder="Digite seu nome"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      E-mail
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-yellow-500 focus:ring focus:ring-yellow-200 focus:ring-opacity-50 transition-colors"
                      placeholder="seu@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Telefone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-yellow-500 focus:ring focus:ring-yellow-200 focus:ring-opacity-50 transition-colors"
                      placeholder="(00) 00000-0000"
                    />
                  </div>

                  <div>
                    <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-2">
                      Tipo de instalação
                    </label>
                    <select
                      id="type"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-yellow-500 focus:ring focus:ring-yellow-200 focus:ring-opacity-50 transition-colors"
                    >
                      <option value="">Selecione uma opção</option>
                      <option value="residential">Residencial</option>
                      <option value="commercial">Comercial</option>
                      <option value="industrial">Industrial</option>
                      <option value="rural">Rural</option>
                    </select>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-medium px-6 py-3 rounded-xl transition-all duration-300 shadow-md flex items-center justify-center"
                  >
                    <Send size={20} className="mr-2" />
                    Solicitar Orçamento
                  </button>
                </form>
                
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex items-center gap-2 text-gray-600 text-sm">
                    <Battery size={16} />
                    <span>Economia média de 95% na conta de luz</span>
                  </div>
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