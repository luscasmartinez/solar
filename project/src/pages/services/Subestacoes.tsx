import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Subestacoes: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Projetos elétricos para aplicações industriais</h2>
          
          <div className="prose prose-lg text-gray-700 space-y-6">
            <p>
              Desenvolvemos projetos completos de subestações e instalações elétricas industriais, 
              atendendo desde pequenas empresas até grandes complexos industriais.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Subestações:</h3>
            <ul className="list-disc list-inside space-y-3">
              <li>Subestações de entrada (primárias)</li>
              <li>Subestações de distribuição (secundárias)</li>
              <li>Subestações unitárias e abrigadas</li>
              <li>Projetos em média e alta tensão</li>
              <li>Sistemas de proteção e controle</li>
              <li>Automação e supervisão (SCADA)</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Projetos industriais:</h3>
            <ul className="list-disc list-inside space-y-3">
              <li>Alimentação de motores e cargas especiais</li>
              <li>Sistemas de iluminação industrial</li>
              <li>Centrais de comando de motores (CCM)</li>
              <li>Instalações para guindastes e pontes rolantes</li>
              <li>Sistemas de força e controle</li>
              <li>Adequação às normas regulamentadoras</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Serviços oferecidos:</h3>
            <ul className="list-disc list-inside space-y-3">
              <li>Estudos de viabilidade técnica</li>
              <li>Projetos executivos detalhados</li>
              <li>Especificação de equipamentos</li>
              <li>Coordenação da execução</li>
              <li>Comissionamento e testes</li>
              <li>Manutenção preventiva e corretiva</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Setores atendidos:</h3>
            <ul className="list-disc list-inside space-y-3">
              <li>Metalúrgica e siderúrgica</li>
              <li>Alimentícia e frigoríficos</li>
              <li>Química e petroquímica</li>
              <li>Mineração</li>
              <li>Papel e celulose</li>
              <li>Shopping centers e grandes edifícios</li>
            </ul>

            <div className="bg-orange-50 border-l-4 border-orange-500 p-6 mt-8">
              <h4 className="text-lg font-semibold text-orange-900 mb-2">Expertise Industrial</h4>
              <p className="text-orange-800">
                Com mais de 15 anos de experiência em projetos industriais, 
                garantimos soluções técnicas adequadas às suas necessidades específicas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subestacoes;