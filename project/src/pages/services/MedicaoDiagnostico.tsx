import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const MedicaoDiagnostico: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Análise completa da qualidade energética</h2>
          
          <div className="prose prose-lg text-gray-700 space-y-6">
            <p>
              Realizamos análises detalhadas da qualidade da energia elétrica, identificando 
              problemas e propondo soluções para otimizar o consumo e proteger equipamentos.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Parâmetros analisados:</h3>
            <ul className="list-disc list-inside space-y-3">
              <li>Tensões, correntes e potências</li>
              <li>Distorção harmônica total (THD)</li>
              <li>Fator de potência</li>
              <li>Flutuação de tensão (flicker)</li>
              <li>Desequilíbrios de tensão e corrente</li>
              <li>Transitórios e interrupções</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Equipamentos utilizados:</h3>
            <ul className="list-disc list-inside space-y-3">
              <li>Analisadores de qualidade de energia</li>
              <li>Registradores de grandezas elétricas</li>
              <li>Medidores de THD e harmônicas</li>
              <li>Osciloscópios para análise de transitórios</li>
              <li>Medidores de fator de potência</li>
              <li>Sistemas de monitoramento contínuo</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Relatórios técnicos incluem:</h3>
            <ul className="list-disc list-inside space-y-3">
              <li>Gráficos e análises estatísticas</li>
              <li>Comparação com padrões normativos</li>
              <li>Identificação de problemas</li>
              <li>Recomendações de melhorias</li>
              <li>Estimativas de economia</li>
              <li>Cronograma de implementação</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Benefícios:</h3>
            <ul className="list-disc list-inside space-y-3">
              <li>Redução de custos com energia</li>
              <li>Proteção de equipamentos sensíveis</li>
              <li>Melhoria da eficiência energética</li>
              <li>Cumprimento de normas técnicas</li>
              <li>Prevenção de multas por baixo FP</li>
            </ul>

            <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 mt-8">
              <h4 className="text-lg font-semibold text-indigo-900 mb-2">Diagnóstico Preciso</h4>
              <p className="text-indigo-800">
                Com equipamentos de última geração e técnicos especializados, 
                oferecemos análises precisas para otimizar seu sistema elétrico.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicaoDiagnostico;