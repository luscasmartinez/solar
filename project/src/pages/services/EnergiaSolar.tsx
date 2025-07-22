import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const EnergiaSolar: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
     

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Transforme a luz solar em economia</h2>
          
          <div className="prose prose-lg text-gray-700 space-y-6">
            <p>
              Nossa solução de energia solar fotovoltaica oferece sistemas completos para geração 
              de energia limpa e renovável, proporcionando economia significativa na conta de luz.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">O que oferecemos:</h3>
            <ul className="list-disc list-inside space-y-3">
              <li>Projeto personalizado para sua residência ou empresa</li>
              <li>Instalação completa com equipamentos de alta qualidade</li>
              <li>Homologação junto à concessionária de energia</li>
              <li>Monitoramento em tempo real da geração</li>
              <li>Garantia de até 25 anos nos módulos solares</li>
              <li>Manutenção preventiva e corretiva</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Vantagens:</h3>
            <ul className="list-disc list-inside space-y-3">
              <li>Redução de até 95% na conta de luz</li>
              <li>Valorização do imóvel em até 6%</li>
              <li>Retorno do investimento em 4-6 anos</li>
              <li>Energia limpa e sustentável</li>
              <li>Baixa manutenção</li>
            </ul>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mt-8">
              <h4 className="text-lg font-semibold text-blue-900 mb-2">Financiamento Disponível</h4>
              <p className="text-blue-800">
                Trabalhamos com as melhores instituições financeiras para oferecer 
                condições especiais de pagamento, com parcelas que cabem no seu orçamento.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnergiaSolar;