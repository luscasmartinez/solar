import React from 'react';
import { ArrowLeft, Activity, Gauge, ClipboardList, BarChart2, Check, Zap, FileText, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const MedicaoDiagnostico: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header com imagem e título */}
          <div className="relative bg-gradient-to-r from-orange-600 to-orange-600 py-12 px-8 text-white">
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-500"></div>
            </div>
            <div className="relative z-10 flex flex-col md:flex-row items-center">
              <div className="md:w-2/3 mb-6 md:mb-0">
                <h1 className="text-4xl font-bold mb-4">Diagnóstico Energético Completo</h1>
                <p className="text-xl text-orange-100">
                  Análise precisa da qualidade de energia para otimizar seu sistema elétrico
                </p>
              </div>
              <div className="md:w-1/3 flex justify-center">
                <Activity className="w-32 h-32 text-orange-300" strokeWidth={1.5} />
              </div>
            </div>
          </div>

          {/* Conteúdo principal */}
          <div className="p-8 md:p-12">
            <div className="prose prose-lg text-gray-700 max-w-none">
              <div className="flex items-start mb-8">
                <Zap className="text-orange-500 mr-4 mt-1 flex-shrink-0" />
                <p className="text-xl text-gray-700 leading-relaxed">
                  Realizamos análises detalhadas da qualidade da energia elétrica, identificando 
                  problemas e propondo soluções para otimizar o consumo, reduzir custos e proteger 
                  seus equipamentos sensíveis.
                </p>
              </div>

              {/* Parâmetros Analisados */}
              <div className="my-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Gauge className="text-orange-600 mr-3" />
                  Parâmetros Analisados
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    "Tensões, correntes e potências",
                    "Distorção harmônica total (THD)",
                    "Fator de potência",
                    "Flutuação de tensão (flicker)",
                    "Desequilíbrios de tensão/corrente",
                    "Transitórios e interrupções"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start bg-orange-50 p-4 rounded-lg">
                      <Check className="text-orange-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-800">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Equipamentos e Benefícios */}
              <div className="grid md:grid-cols-2 gap-6 my-10">
                <div className="bg-white border border-orange-100 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <ClipboardList className="text-orange-500 mr-3" />
                    Equipamentos Utilizados
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Analisadores de qualidade de energia",
                      "Registradores de grandezas elétricas",
                      "Medidores de THD e harmônicas",
                      "Osciloscópios digitais",
                      "Medidores de fator de potência",
                      "Sistemas de monitoramento contínuo"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="text-orange-400 mr-2 mt-1 flex-shrink-0" size={18} />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white border border-orange-100 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <BarChart2 className="text-green-500 mr-3" />
                    Benefícios Principais
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Redução de custos com energia",
                      "Proteção de equipamentos sensíveis",
                      "Melhoria da eficiência energética",
                      "Conformidade com normas técnicas",
                      "Prevenção de multas por baixo FP",
                      "Aumento da vida útil dos equipamentos"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="text-green-400 mr-2 mt-1 flex-shrink-0" size={18} />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Relatórios */}
              <div className="bg-orange-50 rounded-xl p-8 my-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <FileText className="text-orange-600 mr-3" />
                  Relatórios Técnicos
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    "Gráficos e análises estatísticas detalhadas",
                    "Comparação com padrões normativos",
                    "Identificação clara de problemas",
                    "Recomendações de melhorias técnicas",
                    "Estimativas de economia potencial",
                    "Cronograma de implementação"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start bg-white p-4 rounded-lg shadow-sm">
                      <CheckCircle className="text-orange-400 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-800">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Destaque Diagnóstico */}
              <div className="bg-gradient-to-r from-orange-600 to-orange-600 rounded-xl p-8 my-10 text-white">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-3/4 mb-6 md:mb-0">
                    <h3 className="text-2xl font-bold mb-4">Tecnologia de Precisão</h3>
                    <p className="text-xl">
                      Utilizamos equipamentos de última geração e metodologias reconhecidas
                      para fornecer diagnósticos energéticos confiáveis e acionáveis.
                    </p>
                  </div>
                  <div className="md:w-1/4 flex justify-center">
                    <div className="bg-white text-orange-600 font-bold py-3 px-6 rounded-full text-center">
                      <Activity className="inline mr-2" />
                      <span>ANSI/IEEE</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-12 text-center">
                <a href="https://wa.me/5555999314171?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20um%20or%C3%A7amento%20para%20Diagnóstico%20Energético" target="_blank" rel="noopener noreferrer">
                <button className="bg-gradient-to-r from-orange-600 to-orange-600 hover:from-orange-700 hover:to-orange-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-all shadow-lg transform hover:scale-105">
                  Agendar Diagnóstico
                </button>
                </a>
                <p className="mt-4 text-gray-600">
                  Conheça a saúde do seu sistema elétrico e evite gastos desnecessários
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicaoDiagnostico;