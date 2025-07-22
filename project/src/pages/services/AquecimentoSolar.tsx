import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AquecimentoSolar: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
     

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Água quente com energia do sol</h2>
          
          <div className="prose prose-lg text-gray-700 space-y-6">
            <p>
              O sistema de aquecimento solar térmico utiliza a energia solar para aquecer água, 
              proporcionando conforto e economia significativa no consumo de energia elétrica ou gás.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Nossos serviços incluem:</h3>
            <ul className="list-disc list-inside space-y-3">
              <li>Dimensionamento personalizado do sistema</li>
              <li>Instalação de coletores solares e boiler</li>
              <li>Sistema de circulação e controle automático</li>
              <li>Integração com sistema de aquecimento auxiliar</li>
              <li>Garantia de 5 anos nos coletores</li>
              <li>Assistência técnica especializada</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Benefícios:</h3>
            <ul className="list-disc list-inside space-y-3">
              <li>Redução de até 80% no gasto com aquecimento de água</li>
              <li>Sistema ecológico e sustentável</li>
              <li>Baixo custo de manutenção</li>
              <li>Durabilidade de mais de 20 anos</li>
              <li>Água quente mesmo em dias nublados</li>
            </ul>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 mt-8">
              <h4 className="text-lg font-semibold text-green-900 mb-2">Ideal para:</h4>
              <p className="text-green-800">
                Residências, pousadas, hotéis, hospitais, academias e qualquer local 
                que necessite de água aquecida regularmente.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AquecimentoSolar;