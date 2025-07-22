import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const InstalacoesEletricas: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Instalações elétricas seguras e eficientes</h2>
          
          <div className="prose prose-lg text-gray-700 space-y-6">
            <p>
              Realizamos instalações elétricas completas e reformas, seguindo rigorosamente 
              as normas técnicas ABNT NBR 5410, garantindo segurança e qualidade.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Serviços residenciais:</h3>
            <ul className="list-disc list-inside space-y-3">
              <li>Projetos elétricos residenciais</li>
              <li>Instalação de quadros e disjuntores</li>
              <li>Rede elétrica completa (tomadas e interruptores)</li>
              <li>Sistemas de iluminação LED</li>
              <li>Instalação de chuveiros e torneiras elétricas</li>
              <li>Adequação de instalações antigas</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Serviços comerciais:</h3>
            <ul className="list-disc list-inside space-y-3">
              <li>Projetos elétricos para estabelecimentos</li>
              <li>Instalação de sistemas de ar condicionado</li>
              <li>Quadros de distribuição e comando</li>
              <li>Sistemas de automação predial</li>
              <li>Instalações para equipamentos industriais</li>
              <li>Adequação às normas de segurança</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Reformas elétricas:</h3>
            <ul className="list-disc list-inside space-y-3">
              <li>Modernização de instalações antigas</li>
              <li>Aumento de carga elétrica</li>
              <li>Substituição de fiação deteriorada</li>
              <li>Adequação às normas atuais</li>
              <li>Instalação de dispositivos de proteção</li>
            </ul>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mt-8">
              <h4 className="text-lg font-semibold text-yellow-900 mb-2">Segurança em Primeiro Lugar</h4>
              <p className="text-yellow-800">
                Todos os nossos serviços seguem rigorosamente as normas de segurança, 
                utilizando apenas materiais certificados e mão de obra especializada.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstalacoesEletricas;