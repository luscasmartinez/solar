import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const IluminacaoPublica: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Projetos de iluminação para espaços públicos</h2>
          
          <div className="prose prose-lg text-gray-700 space-y-6">
            <p>
              Desenvolvemos projetos completos de iluminação pública, loteamentos e espaços urbanos, 
              priorizando eficiência energética, segurança e sustentabilidade.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Iluminação pública:</h3>
            <ul className="list-disc list-inside space-y-3">
              <li>Projetos luminotécnicos especializados</li>
              <li>Cálculos de iluminância e uniformidade</li>
              <li>Especificação de luminárias LED</li>
              <li>Sistema de acionamento automático</li>
              <li>Redes de distribuição em baixa tensão</li>
              <li>Controle e monitoramento remoto</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Loteamentos residenciais:</h3>
            <ul className="list-disc list-inside space-y-3">
              <li>Infraestrutura elétrica completa</li>
              <li>Rede de distribuição primária e secundária</li>
              <li>Subestações de distribuição</li>
              <li>Iluminação de ruas e praças</li>
              <li>Padrões de entrada residencial</li>
              <li>Aprovação junto às concessionárias</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Projetos especiais:</h3>
            <ul className="list-disc list-inside space-y-3">
              <li>Iluminação de monumentos e fachadas</li>
              <li>Praças e parques públicos</li>
              <li>Quadras esportivas e estádios</li>
              <li>Túneis e viadutos</li>
              <li>Aeroportos e terminais</li>
              <li>Iluminação cênica e decorativa</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Normas seguidas:</h3>
            <ul className="list-disc list-inside space-y-3">
              <li>NBR 5101 - Iluminação Pública</li>
              <li>NBR 14039 - Instalações em Média Tensão</li>
              <li>NBR 5410 - Instalações em Baixa Tensão</li>
              <li>Normas das concessionárias locais</li>
              <li>Padrões municipais de iluminação</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Vantagens da iluminação LED:</h3>
            <ul className="list-disc list-inside space-y-3">
              <li>Economia de até 60% no consumo</li>
              <li>Vida útil de 50.000 horas</li>
              <li>Menor manutenção</li>
              <li>Melhor qualidade da luz</li>
              <li>Redução da poluição luminosa</li>
              <li>Sustentabilidade ambiental</li>
            </ul>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mt-8">
              <h4 className="text-lg font-semibold text-blue-900 mb-2">Cidades Inteligentes</h4>
              <p className="text-blue-800">
                Nossos projetos contribuem para o desenvolvimento de cidades mais inteligentes 
                e sustentáveis, com tecnologia de ponta em iluminação pública.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IluminacaoPublica;