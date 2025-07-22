import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SPDAAterramento: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Proteção contra descargas atmosféricas</h2>
          
          <div className="prose prose-lg text-gray-700 space-y-6">
            <p>
              Sistemas de Proteção contra Descargas Atmosféricas (SPDA) e aterramento elétrico 
              seguindo a NBR 5419, garantindo a segurança de pessoas e patrimônio.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">SPDA - Sistema de Para-raios:</h3>
            <ul className="list-disc list-inside space-y-3">
              <li>Análise de risco conforme NBR 5419</li>
              <li>Projeto personalizado para cada edificação</li>
              <li>Instalação de captores e descidas</li>
              <li>Sistema de equalização de potenciais</li>
              <li>Inspeção e manutenção periódica</li>
              <li>Certificação e laudos técnicos</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Sistemas de Aterramento:</h3>
            <ul className="list-disc list-inside space-y-3">
              <li>Aterramento de proteção (safety)</li>
              <li>Aterramento funcional (working)</li>
              <li>Malhas de aterramento para subestações</li>
              <li>Medição de resistência de terra</li>
              <li>Adequação de sistemas existentes</li>
              <li>Aterramento para equipamentos sensíveis</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Aplicações:</h3>
            <ul className="list-disc list-inside space-y-3">
              <li>Edifícios residenciais e comerciais</li>
              <li>Galpões industriais</li>
              <li>Torres de telecomunicações</li>
              <li>Usinas fotovoltaicas</li>
              <li>Hospitais e escolas</li>
              <li>Instalações rurais</li>
            </ul>

            <div className="bg-red-50 border-l-4 border-red-500 p-6 mt-8">
              <h4 className="text-lg font-semibold text-red-900 mb-2">Proteção Essencial</h4>
              <p className="text-red-800">
                O Brasil é o país com maior incidência de raios no mundo. 
                Proteja seu patrimônio e sua família com sistemas adequados de proteção.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SPDAAterramento;