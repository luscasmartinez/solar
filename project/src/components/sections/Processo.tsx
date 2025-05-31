import React, { useRef, useState, useEffect } from 'react';
import { useInView } from '../../hooks/useInView';
import { ClipboardCheck, Settings, Sun, CheckCircle } from 'lucide-react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';

const Processo: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });
  const controls = useAnimation();
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  const steps = [
    {
      icon: <ClipboardCheck size={24} />,
      title: "Análise Inicial",
      description: "Avaliação do local e consumo energético para dimensionamento ideal do sistema.",
      color: "bg-blue-500"
    },
    {
      icon: <Settings size={24} />,
      title: "Projeto Personalizado",
      description: "Desenvolvimento do projeto técnico atendendo às suas necessidades específicas.",
      color: "bg-purple-500"
    },
    {
      icon: <Sun size={24} />,
      title: "Instalação",
      description: "Nossa equipe especializada realiza a instalação com segurança e eficiência.",
      color: "bg-yellow-500"
    },
    {
      icon: <CheckCircle size={24} />,
      title: "Ativação",
      description: "Liberação do sistema e treinamento para monitoramento do desempenho.",
      color: "bg-green-500"
    }
  ];

  // Check screen size on mount and resize
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  const handleScroll = () => {
    if (sectionRef.current) {
      const timeline = sectionRef.current.querySelector('.timeline-steps');
      if (timeline) {
        const steps = timeline.querySelectorAll('.timeline-step');
        
        steps.forEach((step, index) => {
          const rect = step.getBoundingClientRect();
          const isActive = rect.top <= window.innerHeight * 0.7 && rect.bottom >= window.innerHeight * 0.3;
          
          if (isActive) {
            setActiveStep(index);
          }
        });
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const stepVariants = {
    hidden: isMobile ? { opacity: 0, y: 20 } : { opacity: 0, x: index => (index % 2 === 0 ? -50 : 50) },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        ease: "easeOut"
      }
    })
  };

  return (
    <section 
      id="processo" 
      ref={sectionRef}
      className="py-12 md:py-20 bg-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial="hidden"
          animate={controls}
          variants={variants}
          className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-primary-800 mb-3 md:mb-4">
            Como Funciona
          </h2>
          <p className="text-base md:text-lg text-primary-600">
            Conheça o passo a passo para ter energia solar em sua casa ou empresa
          </p>
        </motion.div>
        
        <div className="relative max-w-4xl mx-auto timeline-steps">
          {/* Timeline line with animation - hidden on mobile */}
          {!isMobile && (
            <motion.div 
              initial={{ height: 0 }}
              animate={{ height: "100%" }}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-primary-200 to-primary-500"
              style={{ originY: 0 }}
            />
          )}
          
          {/* Timeline steps */}
          <div className="space-y-10 sm:space-y-16">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                custom={index}
                initial="hidden"
                animate={controls}
                variants={stepVariants}
                className={`relative flex ${isMobile || index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-start md:items-center timeline-step`}
              >
                {/* Animated timeline dot */}
                <motion.div 
                  className={`absolute ${isMobile ? 'left-6 top-6' : 'left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2'} w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 ${step.color} rounded-full flex items-center justify-center z-10 shadow-lg`}
                  animate={{
                    scale: activeStep === index ? [1, 1.2, 1] : 1,
                    boxShadow: activeStep === index ? `0 0 0 6px rgba(99, 102, 241, 0.3)` : '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                  }}
                  transition={{ 
                    scale: { duration: 0.5, repeat: activeStep === index ? Infinity : 0, repeatType: "reverse" },
                    boxShadow: { duration: 0.3 }
                  }}
                >
                  {React.cloneElement(step.icon, { className: 'text-white w-3 h-3 sm:w-4 sm:h-4' })}
                </motion.div>
                
                {/* Content card with hover effect */}
                <motion.div 
                  className={`w-full ${isMobile ? 'ml-12 pl-6' : 'md:w-5/12'} p-4 sm:p-6 bg-white rounded-xl md:rounded-2xl shadow-soft border-l-4 ${step.color.replace('bg', 'border')} ${
                    !isMobile && (index % 2 === 0 ? 'mr-auto md:mr-0' : 'ml-auto md:ml-0')
                  }`}
                  whileHover={{ 
                    y: !isMobile ? -5 : 0,
                    boxShadow: !isMobile ? "0 10px 25px -5px rgba(0, 0, 0, 0.1)" : "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-lg sm:text-xl font-display font-semibold text-primary-800 mb-1 sm:mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm sm:text-base text-primary-600">
                    {step.description}
                  </p>
                  <div className="mt-2 sm:mt-3 text-xs sm:text-sm font-medium text-primary-500">
                    Etapa {index + 1}/{steps.length}
                  </div>
                  
                  <AnimatePresence>
                    {activeStep === index && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="mt-1 sm:mt-2 text-xs text-primary-400"
                      >
                        Você está nesta etapa
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-12 md:mt-16 text-center"
        >
          <a 
            href="#contact" 
            className="inline-block bg-primary-500 hover:bg-primary-600 text-white font-medium px-6 py-2 sm:px-8 sm:py-3 rounded-lg md:rounded-xl transition-all duration-300 shadow-soft hover:shadow-lg text-sm sm:text-base"
          >
            Iniciar Meu Projeto
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Processo;