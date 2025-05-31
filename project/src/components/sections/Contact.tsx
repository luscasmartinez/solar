import React, { useRef } from 'react';
import { useInView } from '../../hooks/useInView';
import { Send } from 'lucide-react';

const Contact: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    alert('Formulário enviado com sucesso! Em um ambiente real, esta mensagem seria enviada.');
  };

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="py-20 bg-white"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className={`text-3xl md:text-4xl font-display font-bold text-primary-800 mb-4 ${isInView ? 'animate-fade-in' : 'opacity-0'}`}>
            Entre em Contato
          </h2>
          <p className={`text-lg text-primary-600 ${isInView ? 'animate-slide-up delay-100' : 'opacity-0'}`}>
            Estamos prontos para ajudar você a transformar suas ideias em realidade.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className={`${isInView ? 'animate-fade-in delay-200' : 'opacity-0'}`}>
            <div className="bg-secondary-50 rounded-2xl p-8 shadow-soft">
              <h3 className="text-2xl font-display font-semibold text-primary-800 mb-6">
                Envie uma Mensagem
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-primary-700 mb-1">
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-secondary-300 focus:border-primary-500 focus:ring focus:ring-primary-200 focus:ring-opacity-50 transition-colors"
                    placeholder="Seu nome completo"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-primary-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-secondary-300 focus:border-primary-500 focus:ring focus:ring-primary-200 focus:ring-opacity-50 transition-colors"
                    placeholder="seu.email@exemplo.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-primary-700 mb-1">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-secondary-300 focus:border-primary-500 focus:ring focus:ring-primary-200 focus:ring-opacity-50 transition-colors"
                    placeholder="Como podemos ajudar você?"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="inline-flex items-center justify-center bg-primary-500 hover:bg-primary-600 text-white font-medium px-6 py-3 rounded-xl transition-all duration-300 shadow-soft w-full md:w-auto"
                >
                  <span>Enviar Mensagem</span>
                  <Send size={18} className="ml-2" />
                </button>
              </form>
            </div>
          </div>
          
          <div className={`${isInView ? 'animate-slide-up delay-300' : 'opacity-0'}`}>
            <div className="bg-primary-800 text-white rounded-2xl p-8 shadow-soft h-full">
              <h3 className="text-2xl font-display font-semibold mb-6">
                Informações de Contato
              </h3>
              <p className="mb-8 text-secondary-300">
                Ficaremos felizes em conversar sobre seu projeto e como podemos ajudar a alcançar seus objetivos.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-medium mb-2">Endereço</h4>
                  <p className="text-secondary-300">Av. Paulista, 1000 - São Paulo, SP</p>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium mb-2">Email</h4>
                  <a href="mailto:contato@exemplo.com" className="text-secondary-300 hover:text-white transition-colors">
                    contato@exemplo.com
                  </a>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium mb-2">Telefone</h4>
                  <a href="tel:+551199999999" className="text-secondary-300 hover:text-white transition-colors">
                    (11) 99999-9999
                  </a>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium mb-2">Horário de Atendimento</h4>
                  <p className="text-secondary-300">
                    Segunda a Sexta: 9h às 18h<br />
                    Sábado: 9h às 13h
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;