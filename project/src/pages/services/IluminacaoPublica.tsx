import React from 'react';
import { ArrowLeft, Lightbulb, Map, Star, ShieldCheck, Zap, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const IluminacaoPublica: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header com imagem e título */}
          <div className="relative bg-gradient-to-r from-orange-600 to-orange-600 py-12 px-8 text-white">
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-white"></div>
            </div>
            <div className="relative z-10 flex flex-col md:flex-row items-center">
              <div className="md:w-2/3 mb-6 md:mb-0">
                <h1 className="text-4xl font-bold mb-4">Iluminação Pública Inteligente</h1>
                <p className="text-xl text-orange-100">
                  Projetos completos para cidades mais seguras, eficientes e sustentáveis
                </p>
              </div>
              <div className="md:w-1/3 flex justify-center">
                <Lightbulb className="w-32 h-32 text-yellow-300" strokeWidth={1.5} />
              </div>
            </div>
          </div>

          {/* Conteúdo principal */}
          <div className="p-8 md:p-12">
            <div className="prose prose-lg text-gray-700 max-w-none">
              <div className="flex items-start mb-8">
                <Zap className="text-orange-500 mr-4 mt-1 flex-shrink-0" />
                <p className="text-xl text-gray-700 leading-relaxed">
                  Desenvolvemos projetos completos de iluminação para espaços urbanos, 
                  combinando eficiência energética, tecnologia LED e sistemas inteligentes 
                  para criar ambientes mais seguros e sustentáveis.
                </p>
              </div>

              {/* Nossas Soluções */}
              <div className="my-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Lightbulb className="text-orange-600 mr-3" />
                  Nossas Soluções em Iluminação
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    {
                      title: "Iluminação Pública",
                      items: [
                        "Projetos luminotécnicos especializados",
                        "Cálculos de iluminância e uniformidade",
                        "Luminárias LED de alta eficiência",
                        "Sistema de acionamento automático",
                        "Redes de distribuição inteligentes",
                        "Controle e monitoramento remoto"
                      ],
                      icon: <Lightbulb className="text-orange-500" />
                    },
                    {
                      title: "Loteamentos",
                      items: [
                        "Infraestrutura elétrica completa",
                        "Redes de distribuição primária/secundária",
                        "Subestações de distribuição",
                        "Iluminação de ruas e praças",
                        "Padrões de entrada residencial",
                        "Aprovação com concessionárias"
                      ],
                      icon: <Map className="text-orange-500" />
                    },
                    {
                      title: "Projetos Especiais",
                      items: [
                        "Iluminação de monumentos",
                        "Praças e parques públicos",
                        "Quadras esportivas",
                        "Túneis e viadutos",
                        "Aeroportos e terminais",
                        "Iluminação cênica"
                      ],
                      icon: <Star className="text-yellow-500" />
                    }
                  ].map((solution, index) => (
                    <div key={index} className="bg-orange-50 rounded-lg p-6">
                      <div className="flex items-center mb-4">
                        <div className="mr-3 p-2 bg-white rounded-full shadow">
                          {solution.icon}
                        </div>
                        <h4 className="text-xl font-semibold text-gray-900">{solution.title}</h4>
                      </div>
                      <ul className="space-y-3">
                        {solution.items.map((item, i) => (
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

              {/* Vantagens LED */}
              <div className="bg-orange-50 rounded-xl p-8 my-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Zap className="text-orange-600 mr-3" />
                  Vantagens da Tecnologia LED
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    { 
                      title: "60% de economia", 
                      desc: "Redução drástica no consumo energético",
                      icon: "💰"
                    },
                    { 
                      title: "50.000 horas", 
                      desc: "Vida útil extremamente longa",
                      icon: "⏳"
                    },
                    { 
                      title: "Baixa manutenção", 
                      desc: "Redução de custos operacionais",
                      icon: "🛠️"
                    },
                    { 
                      title: "Luz de qualidade", 
                      desc: "Melhor reprodução de cores",
                      icon: "🌈"
                    },
                    { 
                      title: "Menos poluição", 
                      desc: "Redução da poluição luminosa",
                      icon: "🌃"
                    },
                    { 
                      title: "Sustentável", 
                      desc: "Tecnologia ecologicamente correta",
                      icon: "🌱"
                    }
                  ].map((item, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                      <div className="text-2xl mb-3">{item.icon}</div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h4>
                      <p className="text-gray-700">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Normas e Certificações */}
              <div className="my-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <ShieldCheck className="text-orange-600 mr-3" />
                  Normas e Certificações
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
                  {[
                    "NBR 5101",
                    "NBR 14039",
                    "NBR 5410",
                    "Normas Locais",
                    "Padrões Municipais"
                  ].map((norm, index) => (
                    <div key={index} className="bg-white border border-orange-200 py-3 px-4 rounded-lg text-center">
                      <span className="font-medium text-gray-800">{norm}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Destaque Cidades Inteligentes */}
              <div className="bg-gradient-to-r from-orange-600 to-orange-600 rounded-xl p-8 my-10 text-white">
                <div className="max-w-2xl mx-auto text-center">
                  <h3 className="text-2xl font-bold mb-4">Cidades Inteligentes</h3>
                  <p className="text-xl mb-6">
                    Nossos projetos integram tecnologia e sustentabilidade para criar espaços 
                    urbanos mais eficientes, seguros e preparados para o futuro.
                  </p>
                  <div className="inline-flex items-center bg-white text-orange-600 font-bold py-2 px-6 rounded-full">
                    <Lightbulb className="mr-2" size={18} />
                    <span>Iluminação 4.0</span>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-12 text-center">
                <button className="bg-gradient-to-r from-orange-600 to-orange-600 hover:from-orange-700 hover:to-orange-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-all shadow-lg transform hover:scale-105">
                  Solicitar Projeto
                </button>
                <p className="mt-4 text-gray-600">
                  Transforme sua cidade com iluminação inteligente e sustentável
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IluminacaoPublica;