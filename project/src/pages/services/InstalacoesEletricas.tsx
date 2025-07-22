import React from 'react';
import { ArrowLeft, Zap, Home, Building, Shield, Check, Wrench } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const InstalacoesEletricas: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
       

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header com imagem e título */}
          <div className="relative bg-gradient-to-r from-orange-600 to-orange-600 py-12 px-8 text-white">
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-white"></div>
            </div>
            <div className="relative z-10 flex flex-col md:flex-row items-center">
              <div className="md:w-2/3 mb-6 md:mb-0">
                <h1 className="text-4xl font-bold mb-4">Instalações Elétricas Seguras</h1>
                <p className="text-xl text-orange-100">
                  Soluções completas em eletricidade residencial e comercial
                </p>
              </div>
              <div className="md:w-1/3 flex justify-center">
                <Zap className="w-32 h-32 text-orange-300" strokeWidth={1.5} />
              </div>
            </div>
          </div>

          {/* Conteúdo principal */}
          <div className="p-8 md:p-12">
            <div className="prose prose-lg text-gray-700 max-w-none">
              <div className="flex items-start mb-8">
                <Shield className="text-orange-500 mr-4 mt-1 flex-shrink-0" />
                <p className="text-xl text-gray-700 leading-relaxed">
                  Realizamos instalações elétricas completas e reformas, seguindo rigorosamente 
                  as normas técnicas ABNT NBR 5410, garantindo máxima segurança e qualidade.
                </p>
              </div>

              {/* Serviços */}
              <div className="my-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Wrench className="text-orange-600 mr-3" />
                  Nossos Serviços
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    {
                      title: "Residencial",
                      icon: <Home className="text-orange-500" />,
                      items: [
                        "Projetos elétricos residenciais",
                        "Instalação de quadros e disjuntores",
                        "Rede elétrica completa",
                        "Sistemas de iluminação LED",
                        "Instalação de chuveiros elétricos",
                        "Adequação de instalações antigas"
                      ]
                    },
                    {
                      title: "Comercial",
                      icon: <Building className="text-orange-500" />,
                      items: [
                        "Projetos para estabelecimentos",
                        "Sistemas de ar condicionado",
                        "Quadros de distribuição",
                        "Automação predial",
                        "Equipamentos industriais",
                        "Adequação às normas"
                      ]
                    },
                    {
                      title: "Reformas",
                      icon: <Wrench className="text-orange-500" />,
                      items: [
                        "Modernização de instalações",
                        "Aumento de carga elétrica",
                        "Substituição de fiação",
                        "Adequação às normas",
                        "Dispositivos de proteção"
                      ]
                    }
                  ].map((service, index) => (
                    <div key={index} className="bg-orange-50 rounded-lg p-6">
                      <div className="flex items-center mb-4">
                        <div className="mr-3 p-2 bg-white rounded-full shadow">
                          {service.icon}
                        </div>
                        <h4 className="text-xl font-semibold text-gray-900">{service.title}</h4>
                      </div>
                      <ul className="space-y-3">
                        {service.items.map((item, i) => (
                          <li key={i} className="flex items-start">
                            <Check className="text-orange-500 mr-2 mt-1 flex-shrink-0" size={18} />
                            <span className="text-gray-800">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Destaque Segurança */}
              <div className="bg-gradient-to-r from-orange-600 to-orange-600 rounded-xl p-8 my-10 text-white">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-3/4 mb-6 md:mb-0">
                    <h3 className="text-2xl font-bold mb-4">Segurança em Primeiro Lugar</h3>
                    <p className="text-xl">
                      Utilizamos apenas materiais certificados e mão de obra especializada, 
                      seguindo rigorosamente todas as normas de segurança elétrica.
                    </p>
                  </div>
                  <div className="md:w-1/4 flex justify-center">
                    <div className="bg-white text-orange-600 font-bold py-3 px-6 rounded-full text-center">
                      <Shield className="inline mr-2" />
                      <span>NBR 5410</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Garantias */}
              <div className="grid md:grid-cols-3 gap-6 my-10">
                <div className="bg-white border border-orange-200 p-6 rounded-xl text-center">
                  <div className="text-4xl font-bold text-orange-600 mb-3">100%</div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Materiais Certificados</h4>
                  <p className="text-gray-700">Utilizamos apenas produtos de qualidade comprovada</p>
                </div>
                <div className="bg-white border border-orange-200 p-6 rounded-xl text-center">
                  <div className="text-4xl font-bold text-orange-600 mb-3">10+</div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Anos de Experiência</h4>
                  <p className="text-gray-700">Profissionais qualificados e experientes</p>
                </div>
                <div className="bg-white border border-orange-200 p-6 rounded-xl text-center">
                  <div className="text-4xl font-bold text-orange-600 mb-3">24h</div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Atendimento Emergencial</h4>
                  <p className="text-gray-700">Suporte rápido para urgências elétricas</p>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-12 text-center">
                <button className="bg-gradient-to-r from-orange-600 to-orange-600 hover:from-orange-700 hover:to-orange-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-all shadow-lg transform hover:scale-105">
                  Solicitar Orçamento
                </button>
                <p className="mt-4 text-gray-600">
                  Instalações elétricas seguras garantem tranquilidade para sua família ou negócio
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstalacoesEletricas;