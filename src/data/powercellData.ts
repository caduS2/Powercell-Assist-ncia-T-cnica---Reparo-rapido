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

export const COMPANY_DATA = {
  name: 'Powercell Assistência Técnica',
  shortName: 'Powercell',
  descriptor: 'Reparo rápido de celulares e computadores',
  niche: 'Assistência técnica especializada',
  phoneDisplay: '(11) 96172-9877',
  phoneRaw: '5511961729877',
  phoneTel: '+5511961729877',
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
  defaultWhatsappUrl: 'https://wa.me/5511961729877?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Powercell%20e%20gostaria%20de%20solicitar%20um%20atendimento.',
  hoursNote: 'Horário: consulte pelo WhatsApp',
};

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
