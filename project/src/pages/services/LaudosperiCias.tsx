import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const LaudosPericias: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Serviços técnicos especializados e certificações</h2>
          
          <div className="prose prose-lg text-gray-700 space-y-6">
            <p>
              Realizamos laudos técnicos, vistorias e perícias especializadas em sistemas elétricos, 
              fornecendo documentos com validade legal e técnica reconhecida.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Laudos técnicos:</h3>
            <ul className="list-disc list-inside space-y-3">
              <li>Laudo de conformidade de instalações elétricas</li>
              <li>Laudo de SPDA (para-raios)</li>
              <li>Laudo de resistividade do solo</li>
              <li>Laudo de aterramento elétrico</li>
              <li>Laudo de eficiência energética</li>
              <li>Laudo de qualidade de energia</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Vistorias técnicas:</h3>
            <ul className="list-disc list-inside space-y-3">
              <li>Vistoria predial em instalações elétricas</li>
              <li>Vistoria de adequação às normas</li>
              <li>Vistoria para financiamento</li>
              <li>Vistoria de sistemas fotovoltaicos</li>
              <li>Vistoria de segurança elétrica</li>
              <li>Vistoria para seguros</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Perícias técnicas:</h3>
            <ul className="list-disc list-inside space-y-3">
              <li>Perícia judicial em acidentes elétricos</li>
              <li>Perícia extrajudicial</li>
              <li>Análise de sinistros elétricos</li>
              <li>Avaliação de danos em equipamentos</li>
              <li>Perícia trabalhista (NR-10)</li>
              <li>Assistência técnica em litígios</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Certificações:</h3>
            <ul className="list-disc list-inside space-y-3">
              <li>Certificação de conformidade NBR 5410</li>
              <li>Certificação de SPDA NBR 5419</li>
              <li>Certificação para concessionárias</li>
              <li>Certificação de equipamentos</li>
              <li>ART (Anotação de Responsabilidade Técnica)</li>
              <li>Certificados para órgãos públicos</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Documentação técnica:</h3>
            <ul className="list-disc list-inside space-y-3">
              <li>Relatórios técnicos detalhados</li>
              <li>Fotografias e evidências</li>
              <li>Medições e ensaios</li>
              <li>Memorial de cálculo</li>
              <li>Recomendações técnicas</li>
              <li>Cronograma de adequações</li>
            </ul>

            <div className="bg-gray-50 border-l-4 border-gray-500 p-6 mt-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Validade Legal</h4>
              <p className="text-gray-800">
                Todos os nossos laudos e perícias são elaborados por engenheiros com 
                registro no CREA, garantindo validade legal e técnica dos documentos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaudosPericias;