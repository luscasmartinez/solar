export interface Service {
  id: string;
  title: string;
  emoji: string;
  description: string;
  path: string;
}

export const services: Service[] = [
  {
    id: 'energia-solar',
    title: 'Energia Solar Fotovoltaica',
    emoji: '',
    description: 'Sistemas completos de energia solar para residências e empresas',
    path: '/servicos/energia-solar'
  },
  {
    id: 'aquecimento-solar',
    title: 'Aquecimento Solar Térmico',
    emoji: '',
    description: 'Soluções de aquecimento sustentável para água',
    path: '/servicos/aquecimento-solar'
  },
  {
    id: 'carregadores',
    title: 'Carregadores Veiculares',
    emoji: '',
    description: 'Instalação de estações de carregamento para veículos elétricos',
    path: '/servicos/carregadores'
  },
  {
    id: 'instalacoes-eletricas',
    title: 'Instalações Elétricas e Reformas',
    emoji: '',
    description: 'Serviços completos de instalação e reforma elétrica',
    path: '/servicos/instalacoes-eletricas'
  },
  {
    id: 'spda-aterramento',
    title: 'SPDA e Aterramento',
    emoji: '',
    description: 'Sistemas de proteção contra descargas atmosféricas',
    path: '/servicos/spda-aterramento'
  },
  {
    id: 'medicao-diagnostico',
    title: 'Medição e Diagnóstico da Qualidade de Energia',
    emoji: '',
    description: 'Análise completa da qualidade energética',
    path: '/servicos/medicao-diagnostico'
  },
  {
    id: 'subestacoes',
    title: 'Subestações e Projetos Industriais',
    emoji: '',
    description: 'Projetos elétricos para aplicações industriais',
    path: '/servicos/subestacoes'
  },
  {
    id: 'eficiencia-energetica',
    title: 'Eficiência Energética e Redução de Consumo',
    emoji: '',
    description: 'Otimização do consumo energético',
    path: '/servicos/eficiencia-energetica'
  },
  {
    id: 'iluminacao-publica',
    title: 'Iluminação Pública e Loteamentos',
    emoji: '',
    description: 'Projetos de iluminação para espaços públicos',
    path: '/servicos/iluminacao-publica'
  },
  {
    id: 'laudos-pericias',
    title: 'Laudos, Vistorias e Perícias Técnicas',
    emoji: '',
    description: 'Serviços técnicos especializados e certificações',
    path: '/servicos/laudos-pericias'
  }
];