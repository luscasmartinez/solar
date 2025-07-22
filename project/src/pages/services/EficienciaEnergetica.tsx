import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const EficienciaEnergetica: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Otimização do consumo energético</h2>
          
          <div className="prose prose-lg text-gray-700 space-y-6">
            <p>
              Implementamos soluções para redução do consumo de energia elétrica, 
              aumentando a eficiência e diminuindo custos operacionais de forma sustentável.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Auditoria energética:</h3>
            <ul className="list-disc list-inside space-y-3">
              <li>Levantamento completo do consumo</li>
              <li>Identificação de desperdícios</li>
              <li>Análise de tarifação elétrica</li>
              <li>Medições e monitoramento</li>
              <li>Relatório com oportunidades de melhoria</li>
              <li>Análise de viabilidade econômica</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Soluções implementadas:</h3>
            <ul className="list-disc list-inside space-y-3">
              <li>Conversão para iluminação LED</li>
              <li>Correção do fator de potência</li>
              <li>Otimização de motores elétricos</li>
              <li>Sistemas de automação predial</li>
              <li>Gerenciamento de demanda</li>
              <li>Aproveitamento de energia reativa</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Tecnologias utilizadas:</h3>
            <ul className="list-disc list-inside space-y-3">
              <li>Inversores de frequência</li>
              <li>Bancos de capacitores automáticos</li>
              <li>Sistemas de medição inteligente</li>
              <li>Sensores de presença e fotocélulas</li>
              <li>Controladores programáveis</li>
              <li>Software de monitoramento energético</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Benefícios alcançados:</h3>
            <ul className="list-disc list-inside space-y-3">
              <li>Redução de 20% a 40% no consumo</li>
              <li>Eliminação de multas por baixo fator de potência</li>
              <li>Melhoria na qualidade da energia</li>
              <li>Menor manutenção em equipamentos</li>
              <li>Conformidade ambiental</li>
              <li>Retorno do investimento em 12-24 meses</li>
            </ul>

            <div className="bg-teal-50 border-l-4 border-teal-500 p-6 mt-8">
              <h4 className="text-lg font-semibold text-teal-900 mb-2">Economia Garantida</h4>
              <p className="text-teal-800">
                Nossos projetos de eficiência energética garantem retorno do investimento 
                e redução comprovada nos custos com energia elétrica.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EficienciaEnergetica;