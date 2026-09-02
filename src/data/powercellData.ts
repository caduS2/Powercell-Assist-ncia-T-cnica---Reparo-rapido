export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  iconName: string;
  whatsappMessage: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface FactualStat {
  value: number;
  suffix?: string;
  label: string;
  detail: string;
}

export interface CustomerReview {
  id: string;
  author: string;
  role?: string;
  rating: number;
  timeAgo: string;
  content: string;
  serviceTag: string;
  ownerReply?: {
    date: string;
    text: string;
  };
  highlight?: string;
  avatarColor: string;
  likesCount?: number;
}

export const COMPANY_DATA = {
  name: 'Powercell Assistência Técnica',
  officialTitle: 'Powercell Assistência Técnica - Reparo rápido',
  shortName: 'Powercell',
  descriptor: 'Reparo rápido de celulares e computadores',
  niche: 'Serviço de reparos de aparelhos telefônicos em São Bernardo do Campo, SP',
  phoneDisplay: '(11) 96173-0625',
  phoneRaw: '5511961730625',
  phoneTel: '+5511961730625',
  address: {
    gallery: 'Galeria Lauro Gomes',
    street: 'Av. Brg. Faria Lima, 1257',
    neighborhood: 'Centro',
    city: 'São Bernardo do Campo',
    state: 'SP',
    cep: '09720-120',
    fullFormatted: 'Galeria Lauro Gomes — Av. Brg. Faria Lima, 1257 — Centro, São Bernardo do Campo–SP, CEP 09720-120',
    shortFormatted: 'Galeria Lauro Gomes — Av. Brg. Faria Lima, 1257 — Centro, SBC',
  },
  googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Galeria+Lauro+Gomes+Av+Brigadeiro+Faria+Lima+1257+Centro+Sao+Bernardo+do+Campo+SP',
  googleMapsEmbedUrl: 'https://maps.google.com/maps?q=Galeria%20Lauro%20Gomes%2C%20Av.%20Brigadeiro%20Faria%20Lima%2C%201257%20-%20Centro%2C%20S%C3%A3o%20Bernardo%20do%20Campo%20-%20SP&t=&z=16&ie=UTF8&iwloc=&output=embed',
  wazeUrl: 'https://waze.com/ul?q=Galeria%20Lauro%20Gomes%20Sao%20Bernardo%20do%20Campo',
  defaultWhatsappUrl: 'https://wa.me/5511961730625?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Powercell%20e%20gostaria%20de%20solicitar%20um%20atendimento.',
  hoursNote: 'Segunda a Sábado das 07:00 às 20:00 · Domingo das 07:00 às 16:00',
  schedule: {
    isOpen: true,
    statusText: 'Aberto das 07:00 às 20:00 (Seg a Sáb) · Domingo 07:00 às 16:00',
    weekdays: '07:00 às 20:00',
    saturday: '07:00 às 20:00',
    sunday: '07:00 às 16:00',
    holidayNotice: 'Feriados (como Independência do Brasil): 07:00 às 20:00 (os horários podem variar)',
    days: [
      { day: 'Segunda-feira', hours: '07:00–20:00', note: 'Horário normal / feriados podem variar' },
      { day: 'Terça-feira', hours: '07:00–20:00' },
      { day: 'Quarta-feira', hours: '07:00–20:00' },
      { day: 'Quinta-feira', hours: '07:00–20:00' },
      { day: 'Sexta-feira', hours: '07:00–20:00' },
      { day: 'Sábado', hours: '07:00–20:00' },
      { day: 'Domingo', hours: '07:00–16:00' },
    ],
  },
  instagram: {
    handle: '@powercell_sbc',
    username: 'powercell_sbc',
    url: 'https://www.instagram.com/powercell_sbc/',
    followersCount: 278,
    postsCount: 8,
    followingCount: 312,
    badgeText: 'Mestre em Reparo',
    bioHighlights: [
      '🥇 Mestre em Reparo | Rápido, seguro e garantido',
      '🔧 Especialista em iPhone & Android',
      '📲 Orçamentos no direct & WhatsApp',
    ],
  },
  googleBusiness: {
    rating: 4.9,
    reviewsCount: 352,
    ratingMax: 5.0,
    category: 'Serviço de reparos de aparelhos telefônicos em São Bernardo do Campo',
    tags: [
      { id: 'all', label: 'Todos os reparos', count: 352 },
      { id: 'speed', label: 'Velocidade de reparo', count: 7 },
      { id: 'screen', label: 'Troca de tela', count: 12 },
      { id: 'same-day', label: 'Reparo no mesmo dia', count: 2 },
      { id: 'quick', label: 'Resolução rápida', count: 2 },
    ],
  },
};

export const REVIEWS_LIST: CustomerReview[] = [
  {
    id: 'rev-1',
    author: 'Bruna Evelyn',
    role: 'Local Guide · 18 avaliações · 8 fotos',
    rating: 5,
    timeAgo: '1 mês atrás',
    content: 'Excelente atendimento desde o primeiro contato. O conserto do meu celular foi super rápido e o valor também foi acessível. Muito satisfeita com o trabalho do Pablo. Podem confiar!',
    serviceTag: 'Troca de Tela / Reparo Rápido',
    highlight: 'super rápido e o valor também foi acessível',
    avatarColor: 'from-amber-500 to-orange-600',
    likesCount: 1,
  },
  {
    id: 'rev-2',
    author: 'Fabio Souza',
    role: 'Cliente verificado · 6 avaliações',
    rating: 5,
    timeAgo: '4 meses atrás',
    content: 'Atendimento top!!! Rapaz muito gente boa e o serviço profissional.',
    serviceTag: 'Atendimento Técnico',
    highlight: 'serviço profissional e atendimento top',
    avatarColor: 'from-sky-500 to-blue-600',
    likesCount: 2,
    ownerReply: {
      date: '2 meses atrás',
      text: 'Olá, tudo bem? Muito obrigado por dedicar um tempinho para deixar sua avaliação no Google! Sua opinião é extremamente importante para nós e nos ajuda a melhorar continuamente. Ficamos felizes em saber que você teve uma boa experiência — será sempre um prazer atendê-lo!',
    },
  },
  {
    id: 'rev-3',
    author: 'Laryssa Santos',
    role: 'Cliente verificada · 10 avaliações · 2 fotos',
    rating: 5,
    timeAgo: '1 mês atrás',
    content: 'Atendimento ótimo !!! Procurei assistência para consertar meu iPhone 11 e Pablo foi super atencioso e me atendeu super rápido ! Valor justo, recomendo a todos!',
    serviceTag: 'iPhone 11 / Reparo Expresso',
    highlight: 'consertar meu iPhone 11... atendeu super rápido e valor justo',
    avatarColor: 'from-emerald-500 to-teal-600',
    likesCount: 1,
  },
  {
    id: 'rev-4',
    author: 'Deividson Mota',
    role: 'Cliente verificado · 1 avaliação',
    rating: 5,
    timeAgo: '6 meses atrás',
    content: 'Incrível um atendimento simplesmente incrível , e destacando que o assistente teve a maior empatia do mundo me ajudando a consertar o celular da minha esposa literalmente em menos de 40 min qualidade rapidez ótimo atendimento Deus abençoe muito vocês',
    serviceTag: 'Reparo em menos de 40 min',
    highlight: 'consertar o celular da minha esposa em menos de 40 min',
    avatarColor: 'from-purple-500 to-indigo-600',
    ownerReply: {
      date: '6 meses atrás',
      text: 'Muito obrigado pela avaliação! Ficamos muito felizes em saber que você gostou do atendimento. Qualquer coisa que precisar no seu celular, estamos à disposição! 🙏🏻✨',
    },
  },
  {
    id: 'rev-5',
    author: 'Bruno Faian',
    role: 'Local Guide · 8 avaliações · 32 fotos',
    rating: 5,
    timeAgo: '8 meses atrás',
    content: 'Melhor local para assistência técnica da região, buscou a peça em todos os lugares para arrumar na hora.... preço muito honesto.',
    serviceTag: 'Arrumou na hora / Peça original',
    highlight: 'Melhor da região, buscou a peça para arrumar na hora',
    avatarColor: 'from-rose-500 to-pink-600',
  },
];

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'tela',
    number: '01',
    title: 'Troca e reparo de tela',
    description: 'Substituição de displays danificados, vidros trincados ou touch screen inoperante, mantendo a resposta tátil e fidelidade visual.',
    iconName: 'Smartphone',
    whatsappMessage: 'Olá! Gostaria de consultar sobre troca ou reparo de tela do meu aparelho.',
  },
  {
    id: 'bateria',
    number: '02',
    title: 'Bateria e consumo de energia',
    description: 'Análise de integridade e troca de baterias viciadas, estufadas ou com desligamentos repentinos para restaurar a autonomia diária.',
    iconName: 'BatteryCharging',
    whatsappMessage: 'Olá! Gostaria de consultar sobre substituição de bateria para o meu aparelho.',
  },
  {
    id: 'conector',
    number: '03',
    title: 'Conector e falhas de carregamento',
    description: 'Reparo e troca de entradas Type-C, Lightning e Micro-USB com mau contato, oxidação ou que não mantêm o carregamento.',
    iconName: 'PlugZap',
    whatsappMessage: 'Olá! Meu aparelho está com problema no conector de carga e gostaria de uma orientação.',
  },
  {
    id: 'audio-camera',
    number: '04',
    title: 'Câmera, áudio e microfone',
    description: 'Correção de lentes riscadas, foco travado, falhas no microfone durante chamadas ou ausência de som nos alto-falantes.',
    iconName: 'Camera',
    whatsappMessage: 'Olá! Preciso de avaliação para problemas de câmera, áudio ou microfone.',
  },
  {
    id: 'placa',
    number: '05',
    title: 'Diagnóstico de placa',
    description: 'Avaliação minuciosa de circuitos integrados, curtos, falhas de inicialização e problemas lógicos complexos em bancada técnica.',
    iconName: 'Cpu',
    whatsappMessage: 'Olá! Meu aparelho não liga/apresenta falha interna e preciso de diagnóstico de placa.',
  },
  {
    id: 'liquido',
    number: '06',
    title: 'Danos por contato com líquido',
    description: 'Desoxidação química e avaliação dos componentes afetados após queda em água, umidade ou contato com líquidos.',
    iconName: 'Droplets',
    whatsappMessage: 'Olá! Meu aparelho teve contato com líquido e preciso de desoxidação técnica urgente.',
  },
  {
    id: 'computadores',
    number: '07',
    title: 'Computadores e notebooks',
    description: 'Manutenção de hardware em notebooks e desktops: troca de telas, teclados, fontes, upgrades de SSD/memória e reparos elétricos.',
    iconName: 'Laptop',
    whatsappMessage: 'Olá! Gostaria de suporte técnico para meu computador ou notebook.',
  },
  {
    id: 'limpeza',
    number: '08',
    title: 'Limpeza e otimização do aparelho',
    description: 'Higienização interna, desobstrução de grades acústicas, troca de pasta térmica e revisão para prevenção de superaquecimento.',
    iconName: 'Sparkles',
    whatsappMessage: 'Olá! Gostaria de agendar uma limpeza técnica e revisão do meu aparelho.',
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Conte o problema',
    description: 'Envie uma mensagem pelo WhatsApp ou formulário descrevendo a falha que você notou no aparelho.',
  },
  {
    number: '02',
    title: 'Leve para análise',
    description: 'Visite nossa bancada no Centro de São Bernardo para avaliação física e testes instrumentais.',
  },
  {
    number: '03',
    title: 'Receba a orientação técnica',
    description: 'Explicamos a origem do defeito, a viabilidade real do reparo e as opções adequadas para o seu caso.',
  },
  {
    number: '04',
    title: 'Autorize o serviço',
    description: 'Com tudo esclarecido e aprovado por você, realizamos o reparo com rigor e conferência técnica.',
  },
];

export const FACTUAL_STATS: FactualStat[] = [
  {
    value: 8,
    suffix: '',
    label: 'Categorias de atendimento',
    detail: 'Do conector à análise de placa e manutenção de notebooks',
  },
  {
    value: 2,
    suffix: '',
    label: 'Linhas de dispositivos',
    detail: 'Especialização em celulares, notebooks e computadores',
  },
  {
    value: 1,
    suffix: ' un',
    label: 'Unidade central em SBC',
    detail: 'Atendimento direto na Galeria Lauro Gomes',
  },
];

export const DEVICE_TYPES = [
  { value: 'smartphone', label: 'Celular / Smartphone' },
  { value: 'notebook', label: 'Notebook' },
  { value: 'computador', label: 'Computador (Desktop)' },
  { value: 'tablet', label: 'Tablet' },
  { value: 'outro', label: 'Outro dispositivo' },
];

export const PROBLEM_TYPES = [
  { value: 'tela', label: 'Tela trincada / sem imagem / toque falhando' },
  { value: 'bateria', label: 'Bateria descarregando rápido / estufada' },
  { value: 'conector', label: 'Não carrega / mau contato no cabo' },
  { value: 'nao_liga', label: 'Aparelho não liga / travado no logo' },
  { value: 'liquido', label: 'Caiu na água / contato com líquido' },
  { value: 'audio_camera', label: 'Câmera, som ou microfone com defeito' },
  { value: 'lentidao', label: 'Lentidão / necessidade de upgrade ou limpeza' },
  { value: 'outro', label: 'Outro problema' },
];
