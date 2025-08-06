import React, { useRef } from 'react';
import { useInView } from '../../hooks/useInView';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="py-20 bg-white"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className={`text-3xl md:text-4xl font-display font-bold text-primary-800 mb-4 ${isInView ? 'animate-fade-in' : 'opacity-0'}`}>
            Onde nos Encontrar
          </h2>
          <p className={`text-lg text-primary-600 ${isInView ? 'animate-slide-up delay-100' : 'opacity-0'}`}>
            Venha nos visitar ou entre em contato pelos nossos canais.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Mapa do Google */}
          <div className={`h-full min-h-[400px] ${isInView ? 'animate-fade-in delay-200' : 'opacity-0'}`}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3464.194341662915!2d-55.795084!3d-29.7819227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95aab959fea21ce5%3A0xe33884eeabc10204!2sGround%20Energia%20Solar%20%26%20Engenharia!5e0!3m2!1spt-BR!2sbr!4v1712345678901!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: '16px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização da Ground Energia Solar & Engenharia"
            ></iframe>
          </div>
          
          {/* Informações de Contato */}
          <div className={`${isInView ? 'animate-slide-up delay-300' : 'opacity-0'}`}>
            <div className="bg-primary-800 text-white rounded-2xl p-8 shadow-soft h-full">
              <h3 className="text-2xl font-display font-semibold mb-6">
                Informações de Contato
              </h3>
              <p className="mb-8 text-white">
                Estamos à disposição para tirar suas dúvidas sobre energia solar.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="flex-shrink-0 mt-1 text-yellow-400" size={20} />
                  <div>
                    <h4 className="text-lg font-medium mb-1">Endereço</h4>
                    <p className="text-white">
                      Rua Gen. Vitorino, 382 - Centro, Alegrete,<br />
                      Alegrete - RS, 97542-320
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Mail className="flex-shrink-0 mt-1 text-yellow-400" size={20} />
                  <div>
                    <h4 className="text-lg font-medium mb-1">Email</h4>
                    <a 
                      href="mailto: groundenergiasolar@gmail.com" 
                      className="text-white hover:text-yellow-300 transition-colors"
                    >
                       groundenergiasolar@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Phone className="flex-shrink-0 mt-1 text-yellow-400" size={20} />
                  <div>
                    <h4 className="text-lg font-medium mb-1">Telefone</h4>
                    <a 
                      href="tel:5555999314171" 
                      className="text-white hover:text-yellow-300 transition-colors"
                    >
                      (55) 99931-4171
                    </a>
                    <p className="text-sm text-white/80 mt-1">WhatsApp disponível</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Clock className="flex-shrink-0 mt-1 text-yellow-400" size={20} />
                  <div>
                    <h4 className="text-lg font-medium mb-1">Horário de Atendimento</h4>
                    <p className="text-white">
                      Segunda a Sexta: 8h às 18h<br />
                      Sábado: 8h às 12h
                    </p>
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

export default Contact;