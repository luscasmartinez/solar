import React from 'react';
import { ArrowLeft, Sun, Zap, Droplet, Check, Leaf } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AquecimentoSolar: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header com imagem e título */}
          <div className="relative bg-orange-600 py-12 px-8 text-white">
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500"></div>
            </div>
            <div className="relative z-10 flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-6 md:mb-0">
                <h1 className="text-4xl font-bold mb-4">Aquecimento Solar Térmico</h1>
                <p className="text-xl text-orange-100">
                  Conforto sustentável com a energia do sol
                </p>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <Sun className="w-32 h-32 text-yellow-300" strokeWidth={1.5} />
              </div>
            </div>
          </div>

          {/* Conteúdo principal */}
          <div className="p-8 md:p-12">
            <div className="prose prose-lg text-gray-700 max-w-none">
              <div className="flex items-start mb-8">
                <Droplet className="text-orange-500 mr-4 mt-1 flex-shrink-0" />
                <p className="text-xl text-gray-700 leading-relaxed">
                  O sistema de aquecimento solar térmico capta a energia solar para aquecer água, 
                  proporcionando conforto térmico e economia de até 80% no consumo de energia elétrica ou gás.
                </p>
              </div>

              {/* Cards de benefícios */}
              <div className="grid md:grid-cols-2 gap-6 my-10">
                <div className="bg-orange-50 rounded-lg p-6 border-l-4 border-orange-500">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <Zap className="text-orange-600 mr-3" size={20} />
                    Nossos Serviços
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Dimensionamento personalizado do sistema",
                      "Instalação de coletores solares e boiler",
                      "Sistema de circulação e controle automático",
                      "Integração com aquecimento auxiliar",
                      "Garantia de 5 anos nos coletores",
                      "Assistência técnica especializada"
                    ].map((item) => (
                      <li key={item} className="flex items-start">
                        <Check className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-500">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <Leaf className="text-green-600 mr-3" size={20} />
                    Benefícios Principais
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Redução de até 80% nos custos com aquecimento",
                      "Solução ecológica e sustentável",
                      "Baixo custo de manutenção",
                      "Durabilidade superior a 20 anos",
                      "Funcionamento mesmo em dias nublados",
                      "Valorização do imóvel"
                    ].map((item) => (
                      <li key={item} className="flex items-start">
                        <Check className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Destaque */}
              <div className="bg-yellow-50 rounded-xl p-8 my-10 border border-yellow-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                  Ideal para diversos tipos de estabelecimentos
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center mt-6">
                  {["Residências", "Hotéis/Pousadas", "Academias", "Hospitais", "Clínicas", "Piscinas", "Restaurantes", "Salões de Beleza"].map((item) => (
                    <div key={item} className="bg-white py-3 px-4 rounded-lg shadow-sm">
                      <span className="font-medium text-gray-800">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="mt-12 text-center">
                <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors shadow-lg">
                  Solicitar Orçamento
                </button>
                <p className="mt-4 text-gray-600">
                  Economize na conta de energia enquanto cuida do planeta
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AquecimentoSolar;