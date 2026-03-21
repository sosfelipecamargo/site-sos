export type IconName = 
  | "Monitor" 
  | "Shield" 
  | "Users" 
  | "Building2" 
  | "Car" 
  | "Camera" 
  | "Wifi"
  | "Bell"
  | "Home"
  | "Building"
  | "Factory"
  | "Store"
  | "Landmark"
  | "Clock"
  | "HeartHandshake"
  | "Settings"
  | "Wrench"
  | "Award"
  | "CheckCircle"
  | "Zap"
  | "Lock"

export interface Service {
  id: string
  name: string
  shortName: string
  slug: string
  icon: IconName
  description: string
  shortDescription: string
  heroTitle: string
  heroSubtitle: string
  heroDescription: string
  whatIs: {
    title: string
    description: string
    forWhom: string[]
    problems: string[]
  }
  advantages: {
    title: string
    description: string
    icon: IconName
  }[]
  benefits: {
    title: string
    description: string
  }[]
  steps: {
    step: number
    title: string
    description: string
  }[]
  targetAudience: {
    title: string
    description: string
    icon: IconName
  }[]
  technicalDifferentials: string[]
  testimonial: {
    quote: string
    author: string
    role: string
  }
  stats: {
    value: string
    label: string
  }[]
}

export const services: Service[] = [
  {
    id: "portaria-virtual",
    name: "Portaria Virtual",
    shortName: "Portaria Virtual",
    slug: "portaria-virtual",
    icon: "Monitor",
    description: "Controle de acesso remoto 24 horas com operação estruturada, redução de custos e padronização de processos.",
    shortDescription: "Controle de acesso remoto 24h com tecnologia e operação estruturada.",
    heroTitle: "Portaria Virtual",
    heroSubtitle: "Mais controle de acesso, mais segurança, mais eficiência",
    heroDescription: "Operação remota 24 horas com tecnologia, processos definidos e atendimento especializado para condomínios, empresas e empreendimentos.",
    whatIs: {
      title: "O que é Portaria Virtual?",
      description: "A Portaria Virtual é um sistema de controle de acesso operado remotamente por uma central de monitoramento 24 horas. Através de câmeras, interfones IP, biometria e automação, a equipe da SOS gerencia entradas e saídas de moradores, visitantes, prestadores de serviço e entregas, sem a necessidade de porteiros presenciais.",
      forWhom: [
        "Condomínios residenciais e comerciais",
        "Prédios empresariais",
        "Loteamentos fechados",
        "Empreendimentos logísticos",
        "Empresas com múltiplas unidades"
      ],
      problems: [
        "Alto custo com portaria presencial",
        "Falhas operacionais e falta de padronização",
        "Dificuldade em controlar acessos fora do horário comercial",
        "Falta de registro e rastreabilidade de acessos",
        "Rotatividade e gestão de equipe"
      ]
    },
    advantages: [
      { title: "Mais de 46 anos de experiência", description: "Tradição e conhecimento acumulado em segurança e operação.", icon: "Award" },
      { title: "Operação 24/7 estruturada", description: "Central de monitoramento com equipe treinada e processos definidos.", icon: "Clock" },
      { title: "Atendimento humano", description: "Suporte próximo e comunicação direta com síndicos e gestores.", icon: "HeartHandshake" },
      { title: "Tecnologia confiável", description: "Equipamentos de qualidade e infraestrutura redundante.", icon: "Settings" },
      { title: "Projeto sob medida", description: "Cada implantação é planejada conforme a realidade do cliente.", icon: "Wrench" },
      { title: "Implantação orientada", description: "Acompanhamento técnico e operacional desde o início.", icon: "CheckCircle" }
    ],
    benefits: [
      { title: "Redução de custos", description: "Economia significativa em comparação à portaria presencial tradicional." },
      { title: "Mais controle", description: "Registro completo de todos os acessos com imagens e histórico." },
      { title: "Padronização", description: "Processos definidos e consistentes independente do horário." },
      { title: "Segurança reforçada", description: "Verificação rigorosa de identidade e autorização de visitantes." },
      { title: "Agilidade operacional", description: "Respostas rápidas e procedimentos automatizados." },
      { title: "Tranquilidade", description: "Gestores e moradores têm a certeza de uma operação confiável." }
    ],
    steps: [
      { step: 1, title: "Avaliação técnica", description: "Visita técnica para entender a estrutura e necessidades do local." },
      { step: 2, title: "Projeto personalizado", description: "Desenvolvimento de um projeto adequado à realidade do cliente." },
      { step: 3, title: "Instalação", description: "Implementação dos equipamentos e sistemas de comunicação." },
      { step: 4, title: "Treinamento", description: "Capacitação de moradores e gestores para uso do sistema." },
      { step: 5, title: "Operação", description: "Início da operação 24h com a central de monitoramento SOS." },
      { step: 6, title: "Acompanhamento", description: "Suporte contínuo e ajustes conforme necessário." }
    ],
    targetAudience: [
      { title: "Condomínios residenciais", description: "Desde pequenos prédios até grandes loteamentos.", icon: "Building" },
      { title: "Prédios comerciais", description: "Escritórios e empreendimentos empresariais.", icon: "Building2" },
      { title: "Indústrias", description: "Controle de acesso para colaboradores e fornecedores.", icon: "Factory" },
      { title: "Loteamentos fechados", description: "Gestão de múltiplas entradas e perfis de acesso.", icon: "Home" }
    ],
    technicalDifferentials: [
      "Câmeras IP de alta resolução com visão noturna",
      "Interfones IP com áudio e vídeo bidirecional",
      "Integração com biometria e tags de acesso",
      "Sistema de backup e redundância de comunicação",
      "Aplicativo para moradores e gestores",
      "Relatórios de acesso e ocorrências"
    ],
    testimonial: {
      quote: "A portaria virtual da SOS trouxe uma economia real para o condomínio, além de muito mais controle. A operação é profissional e o suporte é excelente.",
      author: "Carlos Roberto",
      role: "Síndico Profissional"
    },
    stats: [
      { value: "40%", label: "Redução média de custos" },
      { value: "24/7", label: "Operação ininterrupta" },
      { value: "99.9%", label: "Disponibilidade do sistema" }
    ]
  },
  {
    id: "monitoramento-de-alarmes",
    name: "Monitoramento de Alarmes",
    shortName: "Monitoramento",
    slug: "monitoramento-de-alarmes",
    icon: "Bell",
    description: "Acompanhamento 24 horas de sistemas de alarme com resposta rápida, suporte técnico e pronta resposta.",
    shortDescription: "Monitoramento 24h com resposta rápida e suporte especializado.",
    heroTitle: "Monitoramento de Alarmes",
    heroSubtitle: "Acompanhamento 24 horas com resposta estruturada",
    heroDescription: "Central de monitoramento com equipe especializada, protocolos definidos e viaturas de pronta resposta para sua segurança.",
    whatIs: {
      title: "O que é Monitoramento de Alarmes?",
      description: "O Monitoramento de Alarmes é o acompanhamento contínuo de sistemas de segurança eletrônica (alarmes, sensores, câmeras) por uma central especializada. Quando um evento é detectado, a equipe SOS aciona protocolos de verificação e resposta, incluindo contato com responsáveis e acionamento de viaturas.",
      forWhom: [
        "Residências",
        "Comércios e lojas",
        "Empresas e escritórios",
        "Indústrias",
        "Condomínios"
      ],
      problems: [
        "Alarmes que disparam sem ninguém para responder",
        "Falta de verificação de eventos",
        "Ausência de histórico de ocorrências",
        "Demora na resposta a emergências",
        "Sistemas desatualizados ou sem manutenção"
      ]
    },
    advantages: [
      { title: "Central 24/7", description: "Equipe de monitoramento ativa a todo momento.", icon: "Clock" },
      { title: "Protocolos definidos", description: "Procedimentos claros para cada tipo de evento.", icon: "CheckCircle" },
      { title: "Pronta resposta", description: "Viaturas próprias para verificação presencial.", icon: "Car" },
      { title: "Suporte técnico", description: "Manutenção preventiva e corretiva dos sistemas.", icon: "Wrench" },
      { title: "Histórico completo", description: "Registro de todos os eventos e ações tomadas.", icon: "Settings" },
      { title: "Atendimento próximo", description: "Comunicação direta com a equipe SOS.", icon: "HeartHandshake" }
    ],
    benefits: [
      { title: "Segurança ativa", description: "Seu patrimônio monitorado 24 horas por dia." },
      { title: "Resposta rápida", description: "Ação imediata em caso de eventos suspeitos." },
      { title: "Prevenção", description: "Identificação de problemas antes que se tornem ocorrências." },
      { title: "Tranquilidade", description: "A certeza de que alguém está sempre olhando." },
      { title: "Manutenção", description: "Sistema sempre funcionando corretamente." },
      { title: "Registro", description: "Histórico completo para análise e evidências." }
    ],
    steps: [
      { step: 1, title: "Avaliação", description: "Análise do sistema atual ou necessidade de instalação." },
      { step: 2, title: "Configuração", description: "Integração do sistema com a central de monitoramento." },
      { step: 3, title: "Testes", description: "Verificação de todos os sensores e comunicação." },
      { step: 4, title: "Ativação", description: "Início do monitoramento 24 horas." },
      { step: 5, title: "Suporte", description: "Acompanhamento contínuo e manutenção preventiva." }
    ],
    targetAudience: [
      { title: "Residências", description: "Casas e apartamentos com sistema de alarme.", icon: "Home" },
      { title: "Comércios", description: "Lojas, restaurantes e estabelecimentos comerciais.", icon: "Store" },
      { title: "Empresas", description: "Escritórios e unidades empresariais.", icon: "Building2" },
      { title: "Indústrias", description: "Galpões, fábricas e áreas industriais.", icon: "Factory" }
    ],
    technicalDifferentials: [
      "Comunicação via GPRS, IP e linha telefônica",
      "Backup de comunicação automático",
      "Integração com câmeras para verificação visual",
      "Aplicativo para arme/desarme remoto",
      "Relatórios periódicos de eventos",
      "Manutenção preventiva inclusa"
    ],
    testimonial: {
      quote: "O monitoramento da SOS já evitou duas tentativas de invasão no meu comércio. A resposta foi imediata e o suporte é excelente.",
      author: "Roberto Mendes",
      role: "Empresário"
    },
    stats: [
      { value: "30s", label: "Tempo médio de resposta" },
      { value: "24/7", label: "Monitoramento contínuo" },
      { value: "+2000", label: "Clientes monitorados" }
    ]
  },
  {
    id: "portaria-hibrida",
    name: "Portaria Híbrida",
    shortName: "Portaria Híbrida",
    slug: "portaria-hibrida",
    icon: "Users",
    description: "Combinação inteligente de portaria presencial e virtual, unindo o melhor dos dois modelos.",
    shortDescription: "O equilíbrio entre tecnologia e presença física no controle de acesso.",
    heroTitle: "Portaria Híbrida",
    heroSubtitle: "O equilíbrio entre tecnologia e presença humana",
    heroDescription: "Modelo que combina porteiros presenciais em horários estratégicos com operação remota nos demais períodos.",
    whatIs: {
      title: "O que é Portaria Híbrida?",
      description: "A Portaria Híbrida combina a presença de porteiros físicos em horários de maior movimento com a operação remota da portaria virtual nos demais períodos. É uma solução que equilibra custo, segurança e atendimento presencial conforme a necessidade de cada local.",
      forWhom: [
        "Condomínios que valorizam presença física",
        "Locais com alto fluxo em horários específicos",
        "Empreendimentos em transição para portaria virtual",
        "Clientes que buscam equilíbrio entre custo e atendimento"
      ],
      problems: [
        "Custo elevado de portaria 24h presencial",
        "Necessidade de atendimento pessoal em horários de pico",
        "Dificuldade em manter qualidade nos horários noturnos",
        "Resistência a mudanças completas"
      ]
    },
    advantages: [
      { title: "Flexibilidade", description: "Modelo adaptável à realidade de cada cliente.", icon: "Settings" },
      { title: "Redução de custos", description: "Economia em comparação à portaria 100% presencial.", icon: "Zap" },
      { title: "Presença quando necessário", description: "Porteiros físicos nos horários de maior demanda.", icon: "Users" },
      { title: "Tecnologia nos demais períodos", description: "Operação remota eficiente e padronizada.", icon: "Monitor" },
      { title: "Transição suave", description: "Modelo ideal para adaptação gradual.", icon: "CheckCircle" },
      { title: "Suporte integrado", description: "Gestão unificada pela SOS.", icon: "HeartHandshake" }
    ],
    benefits: [
      { title: "Economia inteligente", description: "Custos otimizados sem perder qualidade." },
      { title: "Atendimento personalizado", description: "Presença humana quando mais importa." },
      { title: "Segurança contínua", description: "Operação profissional 24 horas." },
      { title: "Flexibilidade operacional", description: "Ajustes conforme a necessidade." },
      { title: "Padronização", description: "Processos definidos em todos os turnos." },
      { title: "Transição facilitada", description: "Caminho para modernização gradual." }
    ],
    steps: [
      { step: 1, title: "Análise de fluxo", description: "Mapeamento dos horários de maior movimento." },
      { step: 2, title: "Definição do modelo", description: "Desenho da combinação ideal presencial/remoto." },
      { step: 3, title: "Implantação", description: "Instalação de equipamentos e início da operação." },
      { step: 4, title: "Treinamento", description: "Capacitação de todos os envolvidos." },
      { step: 5, title: "Ajustes", description: "Refinamento do modelo conforme a operação." }
    ],
    targetAudience: [
      { title: "Condomínios tradicionais", description: "Que valorizam a presença do porteiro.", icon: "Building" },
      { title: "Empreendimentos mistos", description: "Com fluxo variável ao longo do dia.", icon: "Building2" },
      { title: "Clientes em transição", description: "Que buscam modernização gradual.", icon: "Home" },
      { title: "Locais com alto fluxo", description: "Que precisam de atendimento presencial em picos.", icon: "Users" }
    ],
    technicalDifferentials: [
      "Gestão unificada presencial e remota",
      "Sistemas integrados de controle de acesso",
      "Equipe de porteiros treinados pela SOS",
      "Central de monitoramento como backup",
      "Relatórios consolidados",
      "Flexibilidade para ajustes"
    ],
    testimonial: {
      quote: "A portaria híbrida foi a solução perfeita para nosso condomínio. Mantivemos o porteiro durante o dia e economizamos à noite com a operação remota.",
      author: "Mariana Costa",
      role: "Síndica"
    },
    stats: [
      { value: "30%", label: "Economia média" },
      { value: "24/7", label: "Cobertura completa" },
      { value: "100%", label: "Satisfação dos clientes" }
    ]
  },
  {
    id: "portaria-presencial",
    name: "Portaria Presencial",
    shortName: "Portaria Presencial",
    slug: "portaria-presencial",
    icon: "Shield",
    description: "Porteiros profissionais treinados e supervisionados, com postura, atendimento e apoio operacional.",
    shortDescription: "Porteiros profissionais com treinamento e supervisão SOS.",
    heroTitle: "Portaria Presencial",
    heroSubtitle: "Presença profissional com postura e atendimento",
    heroDescription: "Porteiros treinados, uniformizados e supervisionados pela SOS para garantir controle de acesso e apoio operacional.",
    whatIs: {
      title: "O que é Portaria Presencial?",
      description: "A Portaria Presencial é o serviço de controle de acesso realizado por porteiros físicos, profissionais treinados e uniformizados que atuam na guarita ou recepção do local. A SOS fornece, treina e supervisiona a equipe, garantindo postura, atendimento e procedimentos padronizados.",
      forWhom: [
        "Condomínios que preferem presença física",
        "Prédios comerciais com recepção",
        "Empresas com atendimento ao público",
        "Locais com alto fluxo de pessoas",
        "Empreendimentos de alto padrão"
      ],
      problems: [
        "Dificuldade em contratar e treinar porteiros",
        "Falta de padronização no atendimento",
        "Rotatividade e ausências",
        "Gestão trabalhista complexa",
        "Falta de supervisão adequada"
      ]
    },
    advantages: [
      { title: "Profissionais treinados", description: "Porteiros capacitados em atendimento e segurança.", icon: "Award" },
      { title: "Supervisão SOS", description: "Acompanhamento contínuo da equipe.", icon: "CheckCircle" },
      { title: "Uniformes e postura", description: "Apresentação profissional e padronizada.", icon: "Shield" },
      { title: "Cobertura de ausências", description: "Substituição garantida em faltas ou férias.", icon: "Users" },
      { title: "Gestão trabalhista", description: "Toda a parte burocrática com a SOS.", icon: "Settings" },
      { title: "Integração tecnológica", description: "Sistemas de apoio para registro de acessos.", icon: "Monitor" }
    ],
    benefits: [
      { title: "Atendimento humanizado", description: "Contato pessoal com moradores e visitantes." },
      { title: "Controle de acesso", description: "Verificação presencial de identidade." },
      { title: "Apoio operacional", description: "Auxílio em situações diversas do dia a dia." },
      { title: "Segurança visual", description: "Presença que inibe ações indesejadas." },
      { title: "Flexibilidade", description: "Atendimento a situações imprevistas." },
      { title: "Confiança", description: "Relacionamento com a comunidade." }
    ],
    steps: [
      { step: 1, title: "Levantamento", description: "Entendimento das necessidades e perfil do local." },
      { step: 2, title: "Seleção", description: "Escolha de profissionais adequados ao perfil." },
      { step: 3, title: "Treinamento", description: "Capacitação em procedimentos e atendimento." },
      { step: 4, title: "Implantação", description: "Início da operação com acompanhamento." },
      { step: 5, title: "Supervisão", description: "Visitas periódicas e acompanhamento contínuo." }
    ],
    targetAudience: [
      { title: "Condomínios residenciais", description: "Que valorizam o contato humano.", icon: "Building" },
      { title: "Prédios comerciais", description: "Com necessidade de recepção.", icon: "Building2" },
      { title: "Empresas", description: "Com atendimento ao público.", icon: "Landmark" },
      { title: "Alto padrão", description: "Empreendimentos que exigem excelência.", icon: "Award" }
    ],
    technicalDifferentials: [
      "Processo seletivo rigoroso",
      "Treinamento em atendimento e segurança",
      "Uniformes e apresentação padronizada",
      "Supervisão com visitas periódicas",
      "Sistema de ponto e controle de jornada",
      "Cobertura garantida em ausências"
    ],
    testimonial: {
      quote: "Os porteiros da SOS são muito bem treinados e têm uma postura excelente. O atendimento aos moradores melhorou muito desde que contratamos o serviço.",
      author: "Fernando Silva",
      role: "Gestor de Condomínio"
    },
    stats: [
      { value: "100%", label: "Cobertura de ausências" },
      { value: "24/7", label: "Disponibilidade" },
      { value: "+500", label: "Profissionais treinados" }
    ]
  },
  {
    id: "vigilancia-patrimonial",
    name: "Vigilância Patrimonial",
    shortName: "Vigilância",
    slug: "vigilancia-patrimonial",
    icon: "Shield",
    description: "Vigilantes armados e desarmados para proteção ostensiva de patrimônios, eventos e operações especiais.",
    shortDescription: "Proteção ostensiva com vigilantes treinados e autorizados.",
    heroTitle: "Vigilância Patrimonial",
    heroSubtitle: "Proteção ostensiva para seu patrimônio",
    heroDescription: "Vigilantes profissionais, treinados e habilitados para proteção de empresas, indústrias, eventos e operações especiais.",
    whatIs: {
      title: "O que é Vigilância Patrimonial?",
      description: "A Vigilância Patrimonial é o serviço de proteção ostensiva realizado por vigilantes profissionais habilitados pela Polícia Federal. Esses profissionais atuam na prevenção de crimes, controle de acesso e proteção de pessoas e patrimônios em empresas, indústrias, eventos e operações especiais.",
      forWhom: [
        "Indústrias e fábricas",
        "Empresas de grande porte",
        "Eventos corporativos",
        "Operações especiais",
        "Áreas de risco"
      ],
      problems: [
        "Risco de invasões e furtos",
        "Necessidade de presença armada",
        "Proteção de áreas extensas",
        "Segurança em eventos",
        "Proteção de cargas e operações"
      ]
    },
    advantages: [
      { title: "Profissionais habilitados", description: "Vigilantes com formação e autorização da PF.", icon: "Award" },
      { title: "Armados ou desarmados", description: "Conforme a necessidade do cliente.", icon: "Shield" },
      { title: "Supervisão", description: "Acompanhamento e coordenação pela SOS.", icon: "CheckCircle" },
      { title: "Cobertura", description: "Substituição garantida em ausências.", icon: "Users" },
      { title: "Equipamentos", description: "Rádios, coletes e itens de segurança.", icon: "Settings" },
      { title: "Relatórios", description: "Registro de rondas e ocorrências.", icon: "Monitor" }
    ],
    benefits: [
      { title: "Proteção ostensiva", description: "Presença que inibe ações criminosas." },
      { title: "Resposta imediata", description: "Ação rápida em situações de risco." },
      { title: "Controle de perímetro", description: "Vigilância de áreas extensas." },
      { title: "Segurança armada", description: "Quando a situação exige." },
      { title: "Flexibilidade", description: "Escalas e postos conforme necessidade." },
      { title: "Profissionalismo", description: "Equipe treinada e uniformizada." }
    ],
    steps: [
      { step: 1, title: "Análise de riscos", description: "Avaliação das vulnerabilidades e necessidades." },
      { step: 2, title: "Plano de segurança", description: "Definição de postos, escalas e procedimentos." },
      { step: 3, title: "Seleção", description: "Escolha de vigilantes com perfil adequado." },
      { step: 4, title: "Treinamento", description: "Capacitação específica para o local." },
      { step: 5, title: "Operação", description: "Início da vigilância com supervisão." }
    ],
    targetAudience: [
      { title: "Indústrias", description: "Proteção de áreas fabris e estoques.", icon: "Factory" },
      { title: "Empresas", description: "Segurança de sedes e unidades.", icon: "Building2" },
      { title: "Eventos", description: "Proteção de participantes e patrimônio.", icon: "Users" },
      { title: "Operações especiais", description: "Segurança de cargas e operações.", icon: "Car" }
    ],
    technicalDifferentials: [
      "Vigilantes com CNV ativa",
      "Armamento e munição regularizados",
      "Sistema de ronda eletrônica",
      "Supervisão com visitas periódicas",
      "Comunicação via rádio",
      "Relatórios de ocorrências"
    ],
    testimonial: {
      quote: "A vigilância da SOS trouxe tranquilidade para nossa operação industrial. Os vigilantes são profissionais e a supervisão é constante.",
      author: "Ricardo Almeida",
      role: "Diretor Industrial"
    },
    stats: [
      { value: "24/7", label: "Cobertura completa" },
      { value: "100%", label: "Vigilantes habilitados" },
      { value: "+200", label: "Postos ativos" }
    ]
  },
  {
    id: "viaturas-pronta-resposta",
    name: "Viaturas de Pronta Resposta",
    shortName: "Pronta Resposta",
    slug: "viaturas-pronta-resposta",
    icon: "Car",
    description: "Viaturas próprias com equipe treinada para verificação presencial e resposta rápida a ocorrências.",
    shortDescription: "Resposta rápida com viaturas próprias e equipe treinada.",
    heroTitle: "Viaturas de Pronta Resposta",
    heroSubtitle: "Agilidade na resposta a ocorrências",
    heroDescription: "Frota própria de viaturas com equipes treinadas para verificação presencial, rondas e apoio em ocorrências.",
    whatIs: {
      title: "O que são Viaturas de Pronta Resposta?",
      description: "O serviço de Viaturas de Pronta Resposta consiste em uma frota de veículos próprios com equipes treinadas para deslocamento rápido em caso de alarmes, solicitações de verificação ou ocorrências. É o braço presencial da central de monitoramento.",
      forWhom: [
        "Clientes do monitoramento de alarmes",
        "Empresas que precisam de rondas",
        "Condomínios com portaria virtual",
        "Locais que exigem verificação presencial"
      ],
      problems: [
        "Alarmes que disparam sem verificação",
        "Demora em atendimentos de ocorrências",
        "Falta de apoio presencial ao monitoramento",
        "Necessidade de rondas periódicas"
      ]
    },
    advantages: [
      { title: "Frota própria", description: "Viaturas identificadas e rastreadas.", icon: "Car" },
      { title: "Equipes treinadas", description: "Profissionais capacitados para verificação.", icon: "Users" },
      { title: "Cobertura regional", description: "Atuação em Americana e região.", icon: MapPin },
      { title: "Integração", description: "Acionamento direto pela central de monitoramento.", icon: "Monitor" },
      { title: "Rapidez", description: "Tempo de resposta otimizado.", icon: "Zap" },
      { title: "Rondas", description: "Passagens periódicas programadas.", icon: "Clock" }
    ],
    benefits: [
      { title: "Verificação presencial", description: "Confirmação visual de ocorrências." },
      { title: "Resposta rápida", description: "Deslocamento imediato quando necessário." },
      { title: "Dissuasão", description: "Presença de viaturas na região." },
      { title: "Apoio", description: "Suporte em situações diversas." },
      { title: "Registro", description: "Relatório fotográfico de verificações." },
      { title: "Integração", description: "Conexão direta com o monitoramento." }
    ],
    steps: [
      { step: 1, title: "Alerta", description: "Central de monitoramento recebe o evento." },
      { step: 2, title: "Verificação inicial", description: "Contato com cliente e análise do evento." },
      { step: 3, title: "Acionamento", description: "Despacho da viatura mais próxima." },
      { step: 4, title: "Deslocamento", description: "Equipe se dirige ao local." },
      { step: 5, title: "Verificação", description: "Inspeção presencial e registro fotográfico." },
      { step: 6, title: "Relatório", description: "Comunicação à central e ao cliente." }
    ],
    targetAudience: [
      { title: "Clientes monitorados", description: "Que contam com resposta presencial.", icon: "Home" },
      { title: "Empresas", description: "Que precisam de rondas e verificações.", icon: "Building2" },
      { title: "Condomínios", description: "Com portaria virtual ou monitoramento.", icon: "Building" },
      { title: "Comércios", description: "Que necessitam de apoio rápido.", icon: "Store" }
    ],
    technicalDifferentials: [
      "Viaturas identificadas e rastreadas via GPS",
      "Comunicação via rádio com a central",
      "Equipes com treinamento específico",
      "Tempo de resposta monitorado",
      "Registro fotográfico de verificações",
      "Cobertura regional otimizada"
    ],
    testimonial: {
      quote: "Já tivemos dois alarmes que a viatura da SOS verificou em menos de 10 minutos. Isso nos dá muita segurança.",
      author: "Paulo Ferreira",
      role: "Proprietário de Loja"
    },
    stats: [
      { value: "< 15min", label: "Tempo médio de chegada" },
      { value: "24/7", label: "Disponibilidade" },
      { value: "+50", label: "Viaturas na região" }
    ]
  },
  {
    id: "seguranca-eletronica",
    name: "Segurança Eletrônica",
    shortName: "Seg. Eletrônica",
    slug: "seguranca-eletronica",
    icon: "Camera",
    description: "Projetos sob medida em CFTV, alarmes, controle de acesso, cercas elétricas e integração de sistemas.",
    shortDescription: "Projetos personalizados em câmeras, alarmes e controle de acesso.",
    heroTitle: "Segurança Eletrônica",
    heroSubtitle: "Projetos sob medida para sua proteção",
    heroDescription: "Câmeras, alarmes, cercas elétricas, controle de acesso e integração de sistemas com projeto personalizado e instalação profissional.",
    whatIs: {
      title: "O que é Segurança Eletrônica?",
      description: "Segurança Eletrônica engloba todos os sistemas tecnológicos de proteção patrimonial: câmeras de vigilância (CFTV), alarmes de intrusão, sensores de presença, cercas elétricas, concertinas, controle de acesso por biometria, cartão ou senha, e a integração entre todos esses sistemas.",
      forWhom: [
        "Residências",
        "Condomínios",
        "Empresas",
        "Comércios",
        "Indústrias"
      ],
      problems: [
        "Falta de visibilidade do que acontece",
        "Ausência de barreiras de proteção",
        "Controle de acesso ineficiente",
        "Sistemas antigos ou mal dimensionados",
        "Falta de integração entre equipamentos"
      ]
    },
    advantages: [
      { title: "Projeto personalizado", description: "Cada solução é desenhada para o local.", icon: "Wrench" },
      { title: "Equipamentos de qualidade", description: "Marcas confiáveis e tecnologia atualizada.", icon: "Settings" },
      { title: "Instalação profissional", description: "Equipe técnica especializada.", icon: "CheckCircle" },
      { title: "Integração", description: "Sistemas que conversam entre si.", icon: "Monitor" },
      { title: "Manutenção", description: "Suporte técnico e preventiva.", icon: "Wrench" },
      { title: "Monitoramento", description: "Possibilidade de conexão com a central SOS.", icon: "Clock" }
    ],
    benefits: [
      { title: "Visibilidade", description: "Câmeras em pontos estratégicos." },
      { title: "Proteção perimetral", description: "Cercas e sensores de barreira." },
      { title: "Controle de acesso", description: "Quem entra e quem sai, com registro." },
      { title: "Detecção de intrusão", description: "Alarmes com resposta rápida." },
      { title: "Registro", description: "Gravação de imagens como evidência." },
      { title: "Integração", description: "Todos os sistemas conectados." }
    ],
    steps: [
      { step: 1, title: "Visita técnica", description: "Análise do local e necessidades." },
      { step: 2, title: "Projeto", description: "Desenho da solução completa." },
      { step: 3, title: "Proposta", description: "Apresentação de equipamentos e valores." },
      { step: 4, title: "Instalação", description: "Implementação por equipe especializada." },
      { step: 5, title: "Configuração", description: "Ajuste e integração dos sistemas." },
      { step: 6, title: "Treinamento", description: "Orientação para uso dos equipamentos." }
    ],
    targetAudience: [
      { title: "Residências", description: "Câmeras, alarmes e cercas elétricas.", icon: "Home" },
      { title: "Condomínios", description: "CFTV, controle de acesso, interfonia.", icon: "Building" },
      { title: "Empresas", description: "Sistemas integrados de segurança.", icon: "Building2" },
      { title: "Indústrias", description: "Proteção de perímetro e áreas críticas.", icon: "Factory" }
    ],
    technicalDifferentials: [
      "Câmeras IP de alta resolução",
      "Gravadores com armazenamento em nuvem",
      "Alarmes com comunicação redundante",
      "Cercas elétricas com certificação",
      "Controle de acesso biométrico e facial",
      "Integração com portaria virtual"
    ],
    testimonial: {
      quote: "O projeto de segurança eletrônica da SOS transformou a proteção da nossa empresa. Agora temos visibilidade de tudo e controle total de acesso.",
      author: "Luciana Santos",
      role: "Gestora Administrativa"
    },
    stats: [
      { value: "+5000", label: "Projetos realizados" },
      { value: "46 anos", label: "De experiência" },
      { value: "100%", label: "Personalização" }
    ]
  },
  {
    id: "sos-telecom",
    name: "SOS Telecom",
    shortName: "Telecom",
    slug: "sos-telecom",
    icon: "Wifi",
    description: "Internet fibra, telefonia e infraestrutura de comunicação para suportar operações e sistemas de segurança.",
    shortDescription: "Conectividade estável para sua operação e sistemas de segurança.",
    heroTitle: "SOS Telecom",
    heroSubtitle: "Conectividade estável para operações inteligentes",
    heroDescription: "Internet fibra, telefonia e infraestrutura de comunicação para suportar segurança, operação e desempenho do seu negócio.",
    whatIs: {
      title: "O que é SOS Telecom?",
      description: "A SOS Telecom é a vertical de conectividade do Grupo SOS, oferecendo internet fibra óptica, telefonia IP e infraestrutura de comunicação. A solução foi desenvolvida para garantir estabilidade e desempenho, especialmente para sistemas de segurança que dependem de conexão confiável.",
      forWhom: [
        "Empresas de todos os portes",
        "Condomínios",
        "Comércios",
        "Indústrias",
        "Clientes dos serviços de segurança SOS"
      ],
      problems: [
        "Internet instável que afeta operações",
        "Queda de comunicação com sistemas de segurança",
        "Falta de suporte técnico próximo",
        "Custos elevados com múltiplos fornecedores",
        "Infraestrutura de rede deficiente"
      ]
    },
    advantages: [
      { title: "Fibra óptica", description: "Velocidade e estabilidade de conexão.", icon: "Wifi" },
      { title: "Suporte local", description: "Atendimento próximo em Americana e região.", icon: "HeartHandshake" },
      { title: "Integração", description: "Conectividade otimizada para sistemas SOS.", icon: "Monitor" },
      { title: "Telefonia IP", description: "Comunicação profissional e econômica.", icon: Phone },
      { title: "Infraestrutura", description: "Projeto e cabeamento estruturado.", icon: "Settings" },
      { title: "Monitoramento", description: "Acompanhamento proativo da conexão.", icon: "Clock" }
    ],
    benefits: [
      { title: "Estabilidade", description: "Conexão confiável para operações críticas." },
      { title: "Velocidade", description: "Banda larga para todas as demandas." },
      { title: "Economia", description: "Planos competitivos e telefonia VoIP." },
      { title: "Suporte", description: "Atendimento rápido e especializado." },
      { title: "Integração", description: "Otimizado para sistemas de segurança." },
      { title: "Infraestrutura", description: "Rede bem projetada e instalada." }
    ],
    steps: [
      { step: 1, title: "Análise", description: "Entendimento das necessidades de conectividade." },
      { step: 2, title: "Viabilidade", description: "Verificação técnica de atendimento." },
      { step: 3, title: "Proposta", description: "Plano adequado ao perfil do cliente." },
      { step: 4, title: "Instalação", description: "Implementação da fibra e equipamentos." },
      { step: 5, title: "Configuração", description: "Ajuste de rede e integração." },
      { step: 6, title: "Suporte", description: "Acompanhamento contínuo." }
    ],
    targetAudience: [
      { title: "Empresas", description: "Conexão estável para operações.", icon: "Building2" },
      { title: "Condomínios", description: "Fibra para portaria e áreas comuns.", icon: "Building" },
      { title: "Comércios", description: "Internet e telefonia para o negócio.", icon: "Store" },
      { title: "Indústrias", description: "Conectividade para sistemas e gestão.", icon: "Factory" }
    ],
    technicalDifferentials: [
      "Fibra óptica com alta disponibilidade",
      "Link dedicado para empresas",
      "Telefonia IP com ramais virtuais",
      "Projeto de cabeamento estruturado",
      "Monitoramento proativo de link",
      "Integração com sistemas SOS"
    ],
    testimonial: {
      quote: "A SOS Telecom garantiu a estabilidade que precisávamos para nosso sistema de câmeras e portaria virtual. O suporte é muito próximo e eficiente.",
      author: "André Martins",
      role: "Síndico"
    },
    stats: [
      { value: "99.9%", label: "Disponibilidade" },
      { value: "< 4h", label: "Tempo de resposta" },
      { value: "100%", label: "Fibra óptica" }
    ]
  }
]

export const differentials = [
  {
    icon: "Award" as IconName,
    title: "Mais de 46 anos de mercado",
    description: "Tradição e experiência acumulada desde 1980 em segurança e tecnologia."
  },
  {
    icon: "Clock" as IconName,
    title: "Operação 24/7 estruturada",
    description: "Central de monitoramento com equipe treinada e processos definidos."
  },
  {
    icon: "Settings" as IconName,
    title: "Tecnologia confiável",
    description: "Equipamentos de qualidade e infraestrutura redundante para sua segurança."
  },
  {
    icon: "Lock" as IconName,
    title: "Portfólio completo",
    description: "Segurança eletrônica, portaria, vigilância, monitoramento e telecom."
  },
  {
    icon: "HeartHandshake" as IconName,
    title: "Atendimento humano",
    description: "Suporte próximo e comunicação direta com nossa equipe."
  },
  {
    icon: "Wrench" as IconName,
    title: "Projetos sob medida",
    description: "Cada solução é desenhada conforme a realidade do cliente."
  },
  {
    icon: "CheckCircle" as IconName,
    title: "Conformidade e estrutura",
    description: "Empresa regularizada com processos operacionais definidos."
  },
  {
    icon: "Zap" as IconName,
    title: "Eficiência operacional",
    description: "Redução de custos com aumento de controle e padronização."
  }
]

export const timeline = [
  { year: "1980", title: "Fundação da SOS", description: "Início das atividades em Americana/SP." },
  { year: "1993", title: "Monitoramento 24/7", description: "Implantação da central de monitoramento de alarmes." },
  { year: "1998", title: "Vigilância e portaria", description: "Expansão para serviços de vigilância patrimonial e portaria." },
  { year: "2015", title: "Portaria virtual e telecom", description: "Lançamento da portaria virtual e início da SOS Telecom." },
  { year: "2025", title: "Modernização", description: "Renovação tecnológica do monitoramento e sistemas." }
]

export const targetAudiences = [
  { icon: "Home" as IconName, title: "Residências", description: "Soluções para casas e apartamentos com tecnologia e monitoramento." },
  { icon: "Building" as IconName, title: "Condomínios", description: "Portaria virtual, controle de acesso e segurança integrada." },
  { icon: "Building2" as IconName, title: "Empresas", description: "Proteção patrimonial com projetos sob medida." },
  { icon: "Store" as IconName, title: "Comércios", description: "Alarmes, câmeras e monitoramento para lojas e estabelecimentos." },
  { icon: "Factory" as IconName, title: "Indústrias", description: "Vigilância, controle de acesso e segurança perimetral." },
  { icon: "Landmark" as IconName, title: "Prédios comerciais", description: "Portaria, CFTV e controle de acesso para edifícios empresariais." }
]

export const testimonials = [
  {
    quote: "A SOS transformou a gestão de segurança do nosso condomínio. A portaria virtual trouxe economia e muito mais controle. O suporte é excepcional.",
    author: "Carlos Roberto Mendes",
    role: "Síndico Profissional",
    company: "Condomínio Residencial Aurora"
  },
  {
    quote: "Contratamos a SOS para monitoramento e vigilância da nossa fábrica. A operação é séria, os profissionais são bem treinados e a resposta é rápida.",
    author: "Luciana Santos Ferreira",
    role: "Gestora Administrativa",
    company: "Indústria Metalúrgica Ferreira"
  },
  {
    quote: "A segurança eletrônica e o monitoramento 24h da SOS nos dão tranquilidade para focar no negócio. Recomendo sem ressalvas.",
    author: "André Martins Costa",
    role: "Diretor de Operações",
    company: "Grupo Costa Logística"
  }
]

export const blogPosts = [
  {
    id: 1,
    slug: "portaria-virtual-vale-a-pena",
    title: "Portaria virtual vale a pena? Entenda custos e benefícios",
    excerpt: "Descubra como a portaria virtual pode reduzir custos e aumentar a segurança do seu condomínio ou empresa.",
    category: "Portaria Virtual",
    image: "/images/blog/portaria-virtual.jpg",
    date: "2024-01-15"
  },
  {
    id: 2,
    slug: "tendencias-seguranca-2024",
    title: "Tendências em segurança eletrônica para 2024",
    excerpt: "Conheça as principais inovações e tecnologias que estão transformando o mercado de segurança.",
    category: "Tecnologia",
    image: "/images/blog/tendencias.jpg",
    date: "2024-01-10"
  },
  {
    id: 3,
    slug: "como-escolher-sistema-alarme",
    title: "Como escolher o sistema de alarme ideal para sua empresa",
    excerpt: "Guia prático para entender os tipos de alarme e escolher a melhor opção para seu negócio.",
    category: "Segurança Eletrônica",
    image: "/images/blog/alarmes.jpg",
    date: "2024-01-05"
  }
]

export const clientLogos = [
  { name: "Cliente 1", logo: "/images/clients/client-1.png" },
  { name: "Cliente 2", logo: "/images/clients/client-2.png" },
  { name: "Cliente 3", logo: "/images/clients/client-3.png" },
  { name: "Cliente 4", logo: "/images/clients/client-4.png" },
  { name: "Cliente 5", logo: "/images/clients/client-5.png" },
  { name: "Cliente 6", logo: "/images/clients/client-6.png" },
]
