import React from 'react';
import { ArrowLeft, Zap, Shield, Cpu, Building, Check, CloudLightning } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SPDAAterramento: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header com imagem e título */}
          <div className="relative bg-gradient-to-r from-orange-600 to-orange-600 py-12 px-8 text-white">
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500"></div>
            </div>
            <div className="relative z-10 flex flex-col md:flex-row items-center">
              <div className="md:w-2/3 mb-6 md:mb-0">
                <h1 className="text-4xl font-bold mb-4">Proteção Contra Descargas Atmosféricas</h1>
                <p className="text-xl text-orange-100">
                  Sistemas SPDA e Aterramento conforme NBR 5419 para segurança de pessoas e patrimônio
                </p>
              </div>
              <div className="md:w-1/3 flex justify-center">
                <CloudLightning className="w-32 h-32 text-yellow-300" strokeWidth={1.5} />
              </div>
            </div>
          </div>

          {/* Conteúdo principal */}
          <div className="p-8 md:p-12">
            <div className="prose prose-lg text-orange-700 max-w-none">
              <div className="flex items-start mb-8">
                <Shield className="text-orange-500 mr-4 mt-1 flex-shrink-0" />
                <p className="text-xl text-orange-700 leading-relaxed">
                  Projetamos e instalamos Sistemas de Proteção contra Descargas Atmosféricas (SPDA) 
                  e aterramentos elétricos que garantem máxima proteção seguindo rigorosamente 
                  as normas técnicas brasileiras.
                </p>
              </div>

              {/* SPDA e Aterramento */}
              <div className="grid md:grid-cols-2 gap-6 my-10">
                <div className="bg-orange-50 rounded-xl p-6 border-l-4 border-orange-500">
                  <h3 className="text-xl font-bold text-orange-900 mb-4 flex items-center">
                    <Zap className="text-orange-600 mr-3" />
                    Sistemas SPDA
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Análise de risco conforme NBR 5419",
                      "Projeto personalizado para cada edificação",
                      "Instalação de captores e descidas",
                      "Equalização de potenciais",
                      "Inspeção e manutenção periódica",
                      "Certificação e laudos técnicos"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="text-orange-500 mr-2 mt-1 flex-shrink-0" size={18} />
                        <span className="text-orange-800">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-orange-50 rounded-xl p-6 border-l-4 border-orange-500">
                  <h3 className="text-xl font-bold text-orange-900 mb-4 flex items-center">
                    <Cpu className="text-orange-600 mr-3" />
                    Sistemas de Aterramento
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Aterramento de proteção (safety)",
                      "Aterramento funcional (working)",
                      "Malhas para subestações",
                      "Medição de resistência de terra",
                      "Adequação de sistemas existentes",
                      "Para equipamentos sensíveis"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="text-orange-500 mr-2 mt-1 flex-shrink-0" size={18} />
                        <span className="text-orange-800">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Aplicações */}
              <div className="my-10">
                <h3 className="text-2xl font-bold text-orange-900 mb-6 flex items-center">
                  <Building className="text-orange-600 mr-3" />
                  Aplicações
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                  {[
                    { icon: "🏠", text: "Residencial" },
                    { icon: "🏢", text: "Comercial" },
                    { icon: "🏭", text: "Industrial" },
                    { icon: "📡", text: "Telecom" },
                    { icon: "☀️", text: "Usinas" },
                    { icon: "🏥", text: "Hospitais" }
                  ].map((app, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg shadow-sm text-center">
                      <div className="text-2xl mb-2">{app.icon}</div>
                      <span className="font-medium text-orange-800">{app.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Destaque Brasil */}
              <div className="bg-gradient-to-r from-orange-600 to-orange-600 rounded-xl p-8 my-10 text-white">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-3/4 mb-6 md:mb-0">
                    <h3 className="text-2xl font-bold mb-4">Proteção Essencial</h3>
                    <p className="text-xl">
                      O Brasil é o país com maior incidência de raios no mundo - 
                      mais de 70 milhões por ano. Nossos sistemas garantem proteção 
                      completa para seu patrimônio.
                    </p>
                  </div>
                  <div className="md:w-1/4 flex justify-center">
                    <div className="bg-white text-orange-600 font-bold py-3 px-6 rounded-full text-center">
                      <CloudLightning className="inline mr-2" />
                      <span>NBR 5419</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Processo */}
              <div className="grid md:grid-cols-4 gap-4 my-10">
                {[
                  { step: "1", title: "Análise", desc: "Avaliação de risco" },
                  { step: "2", title: "Projeto", desc: "Personalizado NBR 5419" },
                  { step: "3", title: "Instalação", desc: "Por equipe especializada" },
                  { step: "4", title: "Certificação", desc: "Laudo técnico completo" }
                ].map((item, index) => (
                  <div key={index} className="bg-white border border-orange-200 p-4 rounded-lg text-center">
                    <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-orange-100 flex items-center justify-center text-xl font-bold text-orange-600">
                      {item.step}
                    </div>
                    <h4 className="font-semibold text-orange-900 mb-1">{item.title}</h4>
                    <p className="text-sm text-orange-600">{item.desc}</p>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-12 text-center">
                <button className="bg-gradient-to-r from-orange-600 to-orange-600 hover:from-orange-700 hover:to-orange-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-all shadow-lg transform hover:scale-105">
                  Solicitar Análise de Risco
                </button>
                <p className="mt-4 text-orange-600">
                  Não espere um incidente para proteger o que é importante
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SPDAAterramento;