import React from 'react';
import { ArrowLeft, Zap, Lightbulb, Gauge, BarChart2, CheckCircle, ClipboardCheck, Settings } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const EficienciaEnergetica: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header com imagem e título */}
          <div className="relative bg-gradient-to-r from-orange-600 to-amber-600 py-12 px-8 text-white">
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-500"></div>
            </div>
            <div className="relative z-10 flex flex-col md:flex-row items-center">
              <div className="md:w-2/3 mb-6 md:mb-0">
                <h1 className="text-4xl font-bold mb-4">Otimização do Consumo Energético</h1>
                <p className="text-xl text-orange-100">
                  Reduza custos operacionais e aumente a eficiência de forma sustentável
                </p>
              </div>
              <div className="md:w-1/3 flex justify-center">
                <Zap className="w-32 h-32 text-amber-300" strokeWidth={1.5} />
              </div>
            </div>
          </div>

          {/* Conteúdo principal */}
          <div className="p-8 md:p-12">
            <div className="prose prose-lg text-gray-700 max-w-none">
              <div className="flex items-start mb-8">
                <Lightbulb className="text-orange-500 mr-4 mt-1 flex-shrink-0" />
                <p className="text-xl text-gray-700 leading-relaxed">
                  Implementamos soluções personalizadas para redução do consumo de energia elétrica, 
                  aumentando a eficiência e diminuindo custos operacionais com garantia de resultados.
                </p>
              </div>

              {/* Auditoria energética */}
              <div className="my-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <ClipboardCheck className="text-orange-600 mr-3" />
                  Auditoria Energética Completa
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    "Levantamento completo do consumo",
                    "Identificação de desperdícios",
                    "Análise de tarifação elétrica",
                    "Medições e monitoramento contínuo",
                    "Relatório com oportunidades de melhoria",
                    "Análise de viabilidade econômica"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start bg-orange-50 p-4 rounded-lg">
                      <CheckCircle className="text-orange-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-800">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Soluções implementadas */}
              <div className="bg-amber-50 rounded-xl p-8 my-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Settings className="text-amber-600 mr-3" />
                  Soluções Implementadas
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { 
                      title: "Iluminação LED", 
                      desc: "Substituição completa por tecnologia eficiente",
                      icon: <Lightbulb className="text-amber-500" />
                    },
                    { 
                      title: "Fator de Potência", 
                      desc: "Correção para evitar multas e melhorar eficiência",
                      icon: <Gauge className="text-orange-500" />
                    },
                    { 
                      title: "Motores Elétricos", 
                      desc: "Otimização e controle inteligente",
                      icon: <Settings className="text-amber-600" />
                    },
                    { 
                      title: "Automação Predial", 
                      desc: "Sistemas inteligentes de controle",
                      icon: <BarChart2 className="text-orange-600" />
                    }
                  ].map((item, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                      <div className="flex items-center mb-3">
                        <div className="mr-4 p-2 bg-orange-50 rounded-full">
                          {item.icon}
                        </div>
                        <h4 className="text-xl font-semibold text-gray-900">{item.title}</h4>
                      </div>
                      <p className="text-gray-700">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefícios */}
              <div className="my-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Zap className="text-orange-500 mr-3" />
                  Benefícios Alcançados
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    { 
                      title: "Redução de 20-40%", 
                      desc: "Diminuição comprovada no consumo energético",
                      color: "bg-orange-100 text-orange-800"
                    },
                    { 
                      title: "Eliminação de Multas", 
                      desc: "Fim das penalidades por baixo fator de potência",
                      color: "bg-amber-100 text-amber-800"
                    },
                    { 
                      title: "Qualidade da Energia", 
                      desc: "Melhoria na estabilidade e confiabilidade",
                      color: "bg-orange-100 text-orange-800"
                    },
                    { 
                      title: "Menor Manutenção", 
                      desc: "Redução de desgaste em equipamentos",
                      color: "bg-amber-100 text-amber-800"
                    },
                    { 
                      title: "Conformidade", 
                      desc: "Adequação às normas ambientais",
                      color: "bg-orange-100 text-orange-800"
                    },
                    { 
                      title: "Retorno Rápido", 
                      desc: "Payback entre 12-24 meses",
                      color: "bg-amber-100 text-amber-800"
                    }
                  ].map((item, index) => (
                    <div key={index} className={`${item.color} p-6 rounded-xl`}>
                      <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                      <p>{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Destaque */}
              <div className="bg-gradient-to-r from-orange-600 to-amber-600 rounded-xl p-8 my-10 text-white">
                <div className="max-w-2xl mx-auto text-center">
                  <h3 className="text-2xl font-bold mb-4">Economia Garantida</h3>
                  <p className="text-xl mb-6">
                    Nossos projetos de eficiência energética oferecem retorno do investimento 
                    com redução comprovada nos custos com energia elétrica.
                  </p>
                  <div className="inline-flex items-center bg-white text-orange-600 font-bold py-2 px-6 rounded-full">
                    <Zap className="mr-2" size={18} />
                    <span>Garantia de Resultados</span>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-12 text-center">
                <button className="bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-all shadow-lg transform hover:scale-105">
                  Solicitar Auditoria Gratuita
                </button>
                <p className="mt-4 text-gray-600">
                  Gasto invisível é o que mais pesa. Eficiência é inteligência.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EficienciaEnergetica;