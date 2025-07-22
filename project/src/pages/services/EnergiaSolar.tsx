import React from 'react';
import { ArrowLeft, Sun, Zap, Home, Monitor, Check, TrendingUp, Shield, Leaf } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const EnergiaSolar: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center text-orange-600 hover:text-orange-800 mb-6 transition-colors"
        >
          <ArrowLeft className="mr-2" size={20} />
          Voltar
        </button>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header com imagem e título */}
          <div className="relative bg-gradient-to-r from-orange-600 to-red-600 py-12 px-8 text-white">
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
              <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-orange-500"></div>
            </div>
            <div className="relative z-10 flex flex-col md:flex-row items-center">
              <div className="md:w-2/3 mb-6 md:mb-0">
                <h1 className="text-4xl font-bold mb-4">Energia Solar Fotovoltaica</h1>
                <p className="text-xl text-orange-100">
                  Transforme a luz solar em economia real para seu negócio ou residência
                </p>
              </div>
              <div className="md:w-1/3 flex justify-center">
                <Sun className="w-32 h-32 text-yellow-300" strokeWidth={1.5} />
              </div>
            </div>
          </div>

          {/* Conteúdo principal */}
          <div className="p-8 md:p-12">
            <div className="prose prose-lg text-gray-700 max-w-none">
              <div className="flex items-start mb-8">
                <Zap className="text-orange-500 mr-4 mt-1 flex-shrink-0" />
                <p className="text-xl text-gray-700 leading-relaxed">
                  Nossos sistemas fotovoltaicos oferecem geração de energia limpa e renovável, 
                  com economia imediata na conta de luz e retorno garantido do investimento.
                </p>
              </div>

              {/* O que oferecemos */}
              <div className="my-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Home className="text-orange-600 mr-3" />
                  Nossas Soluções Completas
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    "Projeto personalizado para sua necessidade",
                    "Instalação com equipamentos premium",
                    "Homologação com a concessionária",
                    "Monitoramento em tempo real",
                    "Garantia de 25 anos nos módulos",
                    "Manutenção especializada"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start bg-orange-50 p-4 rounded-lg">
                      <Check className="text-orange-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-800">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Vantagens */}
              <div className="bg-gray-50 rounded-xl p-8 my-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <TrendingUp className="text-sky-600 mr-3" />
                  Vantagens Exclusivas
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { 
                      title: "Até 95% de economia", 
                      desc: "Redução drástica na conta de energia",
                      icon: <Zap className="text-yellow-500" />
                    },
                    { 
                      title: "+6% no valor do imóvel", 
                      desc: "Valorização imediata da propriedade",
                      icon: <Home className="text-orange-500" />
                    },
                    { 
                      title: "Retorno em 4-6 anos", 
                      desc: "Payback rápido e garantido",
                      icon: <Monitor className="text-green-500" />
                    },
                    { 
                      title: "Energia 100% limpa", 
                      desc: "Sustentabilidade ambiental",
                      icon: <Leaf className="text-emerald-500" />
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

              {/* Destaque Financiamento */}
              <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-xl p-8 my-10 text-white">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-2/3 mb-6 md:mb-0">
                    <h3 className="text-2xl font-bold mb-4">Financiamento Facilitado</h3>
                    <p className="text-xl">
                      Parcelamos seu sistema solar em até 120x com taxas especiais. 
                      A economia começa antes mesmo de terminar de pagar!
                    </p>
                  </div>
                  <div className="md:w-1/3 flex justify-center">
                    <div className="bg-white text-orange-600 font-bold py-3 px-6 rounded-full text-center">
                      <div className="text-sm">A partir de</div>
                      <div className="text-2xl">R$199/mês</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Comparativo */}
              <div className="my-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Shield className="text-orange-500 mr-3" />
                  Garantias e Segurança
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    { 
                      title: "25 anos", 
                      desc: "Garantia de performance dos módulos",
                      color: "bg-orange-100 text-orange-800"
                    },
                    { 
                      title: "10 anos", 
                      desc: "Garantia nos inversores",
                      color: "bg-orange-100 text-orange-800"
                    },
                    { 
                      title: "5 anos", 
                      desc: "Garantia na instalação",
                      color: "bg-orange-100 text-orange-800"
                    }
                  ].map((item, index) => (
                    <div key={index} className={`${item.color} p-6 rounded-xl text-center`}>
                      <h4 className="text-2xl font-bold mb-2">{item.title}</h4>
                      <p>{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="mt-12 text-center">
                <button className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-sky-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-all shadow-lg transform hover:scale-105">
                  Simular Economia
                </button>
                <p className="mt-4 text-gray-600">
                  O sol brilha para todos - aproveite essa energia gratuita!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnergiaSolar;