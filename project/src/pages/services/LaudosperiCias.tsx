import React from 'react';
import { ArrowLeft, FileText, ClipboardCheck, Search, Shield, FileSignature, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const LaudosPericias: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header com imagem e título */}
          <div className="relative bg-gradient-to-r from-orange-700 to-orange-900 py-12 px-8 text-white">
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-orange-500"></div>
            </div>
            <div className="relative z-10 flex flex-col md:flex-row items-center">
              <div className="md:w-2/3 mb-6 md:mb-0">
                <h1 className="text-4xl font-bold mb-4">Laudos e Perícias Técnicas</h1>
                <p className="text-xl text-orange-200">
                  Documentos técnicos com validade legal e reconhecimento profissional
                </p>
              </div>
              <div className="md:w-1/3 flex justify-center">
                <FileText className="w-32 h-32 text-blue-300" strokeWidth={1.5} />
              </div>
            </div>
          </div>

          {/* Conteúdo principal */}
          <div className="p-8 md:p-12">
            <div className="prose prose-lg text-orange-700 max-w-none">
              <div className="flex items-start mb-8">
                <Shield className="text-orange-600 mr-4 mt-1 flex-shrink-0" />
                <p className="text-xl text-orange-700 leading-relaxed">
                  Realizamos laudos técnicos, vistorias e perícias especializadas em sistemas elétricos, 
                  fornecendo documentos com validade legal e reconhecimento técnico pelo CREA.
                </p>
              </div>

              {/* Serviços */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
                {[
                  {
                    title: "Laudos Técnicos",
                    icon: <FileText className="text-blue-500" />,
                    items: [
                      "Conformidade de instalações",
                      "SPDA (para-raios)",
                      "Resistividade do solo",
                      "Aterramento elétrico",
                      "Eficiência energética",
                      "Qualidade de energia"
                    ]
                  },
                  {
                    title: "Vistorias",
                    icon: <Search className="text-green-500" />,
                    items: [
                      "Vistoria predial elétrica",
                      "Adequação às normas",
                      "Para financiamento",
                      "Sistemas fotovoltaicos",
                      "Segurança elétrica",
                      "Para seguros"
                    ]
                  },
                  {
                    title: "Perícias",
                    icon: <ClipboardCheck className="text-red-500" />,
                    items: [
                      "Judicial em acidentes",
                      "Extrajudicial",
                      "Análise de sinistros",
                      "Avaliação de danos",
                      "Trabalhista (NR-10)",
                      "Assistência em litígios"
                    ]
                  },
                  {
                    title: "Certificações",
                    icon: <FileSignature className="text-purple-500" />,
                    items: [
                      "Conformidade NBR 5410",
                      "SPDA NBR 5419",
                      "Para concessionárias",
                      "De equipamentos",
                      "ART (Anotação de RT)",
                      "Para órgãos públicos"
                    ]
                  },
                  {
                    title: "Documentação",
                    icon: <FileText className="text-yellow-500" />,
                    items: [
                      "Relatórios detalhados",
                      "Fotografias e evidências",
                      "Medições e ensaios",
                      "Memorial de cálculo",
                      "Recomendações técnicas",
                      "Cronograma de adequações"
                    ]
                  }
                ].map((service, index) => (
                  <div key={index} className="bg-orange-50 rounded-lg p-6 border border-orange-200">
                    <div className="flex items-center mb-4">
                      <div className="mr-3 p-2 bg-white rounded-full shadow">
                        {service.icon}
                      </div>
                      <h4 className="text-xl font-semibold text-orange-900">{service.title}</h4>
                    </div>
                    <ul className="space-y-2">
                      {service.items.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <Check className="text-orange-500 mr-2 mt-1 flex-shrink-0" size={16} />
                          <span className="text-orange-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Destaque Legal */}
              <div className="bg-gradient-to-r from-orange-700 to-orange-900 rounded-xl p-8 my-10 text-white">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-3/4 mb-6 md:mb-0">
                    <h3 className="text-2xl font-bold mb-4">Validade Legal Garantida</h3>
                    <p className="text-xl">
                      Todos os nossos documentos são elaborados por engenheiros registrados no CREA, 
                      com ART (Anotação de Responsabilidade Técnica) quando necessário.
                    </p>
                  </div>
                  <div className="md:w-1/4 flex justify-center">
                    <div className="bg-white text-orange-800 font-bold py-3 px-6 rounded-full text-center">
                      <Shield className="inline mr-2" />
                      <span>CREA</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Processo */}
              <div className="my-10">
                <h3 className="text-2xl font-bold text-orange-900 mb-6 flex items-center">
                  <ClipboardCheck className="text-orange-600 mr-3" />
                  Nosso Processo de Trabalho
                </h3>
                <div className="grid md:grid-cols-4 gap-4">
                  {[
                    { step: "1", title: "Análise", desc: "Avaliação inicial do caso" },
                    { step: "2", title: "Vistoria", desc: "Inspeção técnica detalhada" },
                    { step: "3", title: "Laudo", desc: "Elaboração do documento" },
                    { step: "4", title: "Entrega", desc: "Documento assinado e validado" }
                  ].map((item, index) => (
                    <div key={index} className="bg-white border border-orange-200 p-4 rounded-lg text-center">
                      <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-orange-100 flex items-center justify-center text-xl font-bold text-orange-800">
                        {item.step}
                      </div>
                      <h4 className="font-semibold text-orange-900 mb-1">{item.title}</h4>
                      <p className="text-sm text-orange-600">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="mt-12 text-center">
                <button className="bg-gradient-to-r from-orange-700 to-orange-900 hover:from-orange-800 hover:to-orange-900 text-white font-bold py-3 px-8 rounded-full text-lg transition-all shadow-lg transform hover:scale-105">
                  Solicitar Laudo Técnico
                </button>
                <p className="mt-4 text-orange-600">
                  Documentação técnica confiável para respaldar suas necessidades legais e comerciais
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaudosPericias;