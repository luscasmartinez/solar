import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Carregadores: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Preparando o futuro da mobilidade elétrica</h2>
          
          <div className="prose prose-lg text-gray-700 space-y-6">
            <p>
              Instalamos estações de carregamento para veículos elétricos, oferecendo soluções 
              completas para residências, condomínios, empresas e espaços comerciais.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Tipos de carregadores:</h3>
            <ul className="list-disc list-inside space-y-3">
              <li><strong>Carregamento AC:</strong> Para uso residencial e comercial</li>
              <li><strong>Carregamento DC:</strong> Carregamento rápido para frotas</li>
              <li><strong>Wallbox:</strong> Carregadores compactos para garagem</li>
              <li><strong>Postes públicos:</strong> Para estacionamentos e vias públicas</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Nossos serviços:</h3>
            <ul className="list-disc list-inside space-y-3">
              <li>Análise técnica do local de instalação</li>
              <li>Dimensionamento da infraestrutura elétrica</li>
              <li>Instalação completa certificada</li>
              <li>Configuração e testes de funcionamento</li>
              <li>Sistema de monitoramento remoto</li>
              <li>Manutenção preventiva e suporte técnico</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Vantagens:</h3>
            <ul className="list-disc list-inside space-y-3">
              <li>Economia em comparação aos combustíveis fósseis</li>
              <li>Sustentabilidade e responsabilidade ambiental</li>
              <li>Valorização do imóvel</li>
              <li>Comodidade de carregar em casa</li>
              <li>Tecnologia inteligente com controle via app</li>
            </ul>

            <div className="bg-purple-50 border-l-4 border-purple-500 p-6 mt-8">
              <h4 className="text-lg font-semibold text-purple-900 mb-2">Futuro Sustentável</h4>
              <p className="text-purple-800">
                Esteja preparado para a revolução dos veículos elétricos. 
                Instale já sua estação de carregamento e faça parte da mudança.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carregadores;