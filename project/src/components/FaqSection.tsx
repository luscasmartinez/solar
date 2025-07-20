// src/components/FaqSection.tsx
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

const FaqSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs: FaqItem[] = [
    {
      question: "Quanto tempo dura a instalação de um sistema solar?",
      answer: "O tempo de instalação varia conforme o tamanho do sistema, mas em média leva de 2 a 5 dias úteis para sistemas residenciais."
    },
    {
      question: "Qual é a vida útil dos painéis solares?",
      answer: "Os painéis solares têm vida útil média de 25 anos, com garantia de desempenho de 80% após esse período."
    },
    {
      question: "Preciso de manutenção frequente no sistema?",
      answer: "A manutenção é mínima, recomendamos limpeza dos painéis a cada 6 meses e revisão técnica anual do sistema."
    },
    {
      question: "O sistema funciona em dias nublados ou chuvosos?",
      answer: "Sim, os painéis continuam gerando energia, porém com menor eficiência. O sistema é conectado à rede elétrica para esses casos."
    },
    {
      question: "Qual o valor médio de economia na conta de luz?",
      answer: "A economia média é de 80% a 95% na conta de energia, podendo chegar a 100% em alguns casos."
    }
  ];

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-lg text-gray-600">
            Tire suas dúvidas sobre energia solar fotovoltaica
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="mb-4 border border-gray-200 rounded-xl overflow-hidden shadow-sm"
            >
              <button
                className={`w-full flex justify-between items-center p-6 text-left transition-all ${activeIndex === index ? 'bg-primary-50' : 'bg-white'}`}
                onClick={() => toggleAccordion(index)}
              >
                <h3 className="text-lg md:text-xl font-medium text-primary-800">
                  {faq.question}
                </h3>
                {activeIndex === index ? (
                  <ChevronUp className="text-primary-600" size={24} />
                ) : (
                  <ChevronDown className="text-primary-600" size={24} />
                )}
              </button>
              
              <div 
                className={`transition-all duration-300 overflow-hidden ${activeIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="p-6 pt-0 bg-white text-gray-600">
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;