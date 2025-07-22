import React from 'react';
import { ArrowLeft, Zap, Settings, Factory, HardHat, Check, Bolt } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Subestacoes: React.FC = () => {
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
          <div className="relative bg-gradient-to-r from-orange-600 to-amber-600 py-12 px-8 text-white">
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500"></div>
            </div>
            <div className="relative z-10 flex flex-col md:flex-row items-center">
              <div className="md:w-2/3 mb-6 md:mb-0">
                <h1 className="text-4xl font-bold mb-4">Soluções em Subestações e Projetos Industriais</h1>
                <p className="text-xl text-orange-100">
                  Projetos elétricos completos para aplicações industriais de qualquer porte
                </p>
              </div>
              <div className="md:w-1/3 flex justify-center">
                <Bolt className="w-32 h-32 text-yellow-300" strokeWidth={1.5} />
              </div>
            </div>
          </div>

          {/* Conteúdo principal */}
          <div className="p-8 md:p-12">
            <div className="prose prose-lg text-gray-700 max-w-none">
              <div className="flex items-start mb-8">
                <Factory className="text-orange-500 mr-4 mt-1 flex-shrink-0" />
                <p className="text-xl text-gray-700 leading-relaxed">
                  Desenvolvemos projetos completos de subestações e instalações elétricas industriais, 
                  atendendo desde pequenas empresas até grandes complexos industriais com soluções 
                  personalizadas e eficientes.
                </p>
              </div>

              {/* Soluções */}
              <div className="grid md:grid-cols-2 gap-6 my-10">
                <div className="bg-orange-50 rounded-xl p-6 border-l-4 border-orange-500">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <Zap className="text-orange-600 mr-3" />
                    Subestações
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Subestações de entrada (primárias)",
                      "Subestações de distribuição (secundárias)",
                      "Unitárias e abrigadas",
                      "Média e alta tensão",
                      "Sistemas de proteção e controle",
                      "Automação e supervisão (SCADA)"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="text-orange-500 mr-2 mt-1 flex-shrink-0" size={18} />
                        <span className="text-gray-800">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-amber-50 rounded-xl p-6 border-l-4 border-amber-500">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <Settings className="text-amber-600 mr-3" />
                    Projetos Industriais
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Alimentação de motores e cargas especiais",
                      "Iluminação industrial",
                      "Centrais de comando de motores (CCM)",
                      "Guias e pontes rolantes",
                      "Sistemas de força e controle",
                      "Adequação às normas"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="text-amber-500 mr-2 mt-1 flex-shrink-0" size={18} />
                        <span className="text-gray-800">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Serviços */}
              <div className="my-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <HardHat className="text-orange-600 mr-3" />
                  Serviços Oferecidos
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    "Estudos de viabilidade técnica",
                    "Projetos executivos detalhados",
                    "Especificação de equipamentos",
                    "Coordenação da execução",
                    "Comissionamento e testes",
                    "Manutenção preventiva e corretiva"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start bg-white p-4 rounded-lg shadow-sm">
                      <Check className="text-orange-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-800">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Setores Atendidos */}
              <div className="bg-amber-100 rounded-xl p-8 my-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  Setores Atendidos
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                  {[
                    { icon: "⚙️", text: "Metalúrgica" },
                    { icon: "🍖", text: "Alimentícia" },
                    { icon: "🧪", text: "Química" },
                    { icon: "⛏️", text: "Mineração" },
                    { icon: "📄", text: "Celulose" },
                    { icon: "🏬", text: "Shoppings" }
                  ].map((sector, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg shadow-sm text-center">
                      <div className="text-2xl mb-2">{sector.icon}</div>
                      <span className="font-medium text-gray-800">{sector.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Destaque Experiência */}
              <div className="bg-gradient-to-r from-orange-600 to-amber-600 rounded-xl p-8 my-10 text-white">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-3/4 mb-6 md:mb-0">
                    <h3 className="text-2xl font-bold mb-4">15+ Anos de Expertise Industrial</h3>
                    <p className="text-xl">
                      Nossa equipe especializada possui vasta experiência em projetos complexos, 
                      garantindo soluções técnicas adequadas às necessidades específicas de cada cliente.
                    </p>
                  </div>
                  <div className="md:w-1/4 flex justify-center">
                    <div className="bg-white text-orange-600 font-bold py-3 px-6 rounded-full text-center">
                      <HardHat className="inline mr-2" />
                      <span>NR-10</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-12 text-center">
                <button className="bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-all shadow-lg transform hover:scale-105">
                  Solicitar Projeto
                </button>
                <p className="mt-4 text-gray-600">
                  Soluções elétricas industriais seguras e eficientes para seu negócio
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subestacoes;