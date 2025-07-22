import React from 'react';
import { ArrowLeft, Zap, BatteryCharging, Home, Settings, Check, Leaf, Car } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Carregadores: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header com imagem e título */}
          <div className="relative bg-gradient-to-r from-orange-600 to-red-600 py-12 px-8 text-white">
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-500"></div>
            </div>
            <div className="relative z-10 flex flex-col md:flex-row items-center">
              <div className="md:w-2/3 mb-6 md:mb-0">
                <h1 className="text-4xl font-bold mb-4">Infraestrutura para Mobilidade Elétrica</h1>
                <p className="text-xl text-blue-100">
                  Preparando o futuro da mobilidade sustentável
                </p>
              </div>
              <div className="md:w-1/3 flex justify-center">
                <BatteryCharging className="w-32 h-32 text-yellow-300" strokeWidth={1.5} />
              </div>
            </div>
          </div>

          {/* Conteúdo principal */}
          <div className="p-8 md:p-12">
            <div className="prose prose-lg text-gray-700 max-w-none">
              <div className="flex items-start mb-8">
                <Zap className="text-purple-500 mr-4 mt-1 flex-shrink-0" />
                <p className="text-xl text-gray-700 leading-relaxed">
                  Instalamos estações de carregamento completas para veículos elétricos, 
                  oferecendo soluções personalizadas para residências, condomínios, 
                  empresas e espaços comerciais.
                </p>
              </div>

              {/* Tipos de carregadores 
              <div className="my-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Car className="text-blue-500 mr-3" />
                  Tipos de Carregadores
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      title: "Carregamento AC",
                      description: "Para uso residencial e comercial",
                      icon: <Home className="text-blue-500" />
                    },
                    {
                      title: "Carregamento DC",
                      description: "Carregamento rápido para frotas",
                      icon: <Zap className="text-yellow-500" />
                    },
                    {
                      title: "Wallbox",
                      description: "Carregadores compactos para garagem",
                      icon: <Settings className="text-purple-500" />
                    },
                    {
                      title: "Postes públicos",
                      description: "Para estacionamentos e vias públicas",
                      icon: <BatteryCharging className="text-green-500" />
                    }
                  ].map((item, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-6 border-l-4 border-blue-500">
                      <div className="flex items-center mb-3">
                        <div className="mr-4 p-2 bg-white rounded-full shadow">
                          {item.icon}
                        </div>
                        <h4 className="text-xl font-semibold text-gray-900">{item.title}</h4>
                      </div>
                      <p className="text-gray-700">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>*/}
              

              {/*
              {/* Nossos serviços */}
              <div className="bg-orange-50 rounded-xl p-8 my-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Settings className="text-blue-600 mr-3" />
                  Nossos Serviços
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Análise técnica do local de instalação",
                    "Dimensionamento da infraestrutura elétrica",
                    "Instalação completa certificada",
                    "Configuração e testes de funcionamento",
                    "Sistema de monitoramento remoto",
                    "Manutenção preventiva e suporte técnico"
                  ].map((service, index) => (
                    <div key={index} className="flex items-start bg-white p-4 rounded-lg">
                      <Check className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-800">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
              {/* Vantagens */}
              <div className="my-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Leaf className="text-green-600 mr-3" />
                  Vantagens
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    { 
                      title: "Economia", 
                      desc: "Redução de custos em comparação aos combustíveis fósseis",
                      color: "text-green-500"
                    },
                    { 
                      title: "Sustentabilidade", 
                      desc: "Contribuição para o meio ambiente",
                      color: "text-blue-500"
                    },
                    { 
                      title: "Futuro", 
                      desc: "Preparado para a revolução elétrica",
                      color: "text-indigo-500"
                    }
                  ].map((item, index) => (
                    <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                      <h4 className={`text-xl font-semibold mb-3 ${item.color}`}>{item.title}</h4>
                      <p className="text-gray-700">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Destaque */}
              <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-xl p-8 my-10 text-white">
                <h3 className="text-2xl font-bold mb-4">Futuro Sustentável</h3>
                <p className="text-xl mb-6">
                  Esteja preparado para a revolução dos veículos elétricos. 
                  Instale já sua estação de carregamento e faça parte da mudança.
                </p>
                <div className="flex flex-wrap gap-4">
                  {["Condomínios", "Empresas", "Estacionamentos", "Residências", "Shopping Centers", "Postos de Gasolina"].map((item) => (
                    <div key={item} className="bg-white bg-opacity-20 py-2 px-4 rounded-full">
                      <span className="font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="mt-12 text-center">
                <button className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-all shadow-lg transform hover:scale-105">
                  Solicitar Projeto Personalizado
                </button>
                <p className="mt-4 text-gray-600">
                  O futuro da mobilidade já chegou - só falta a infraestrutura certa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carregadores;