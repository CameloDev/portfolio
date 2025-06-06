import { ICareerItem } from "@/@types/career-item";

export const companies: ICareerItem[] = [
  {
    id: "bit-camel",
    company: "Bit Camel",
    period: "Abr 2025 - Presente",
    type: "Founder / Remoto",
    position: "Co-Fundador e CTO",
    activities: [
      {
        id: "bc-1",
        text: "Idealização e estruturação de microsserviços inovadores com foco em SaaS para mercados específicos;",
      },
      {
        id: "bc-2",
        text: "Coordenação de arquitetura, estratégia técnica e desenvolvimento de MVPs com tecnologias modernas;",
      },
      {
        id: "bc-3",
        text: "Mentoria e liderança técnica de colaboradores e parceiros em projetos como Appetito e Pecuária Digital;",
      },
    ],
  },
  {
    id: "appetito",
    company: "StargateIT",
    period: "Mai 2025 - Presente",
    type: "Projeto / Remoto",
    position: "Desenvolvedor Back-end",
    activities: [
      {
        id: "apt-1",
        text: "Desenvolvimento de sistema para restaurantes com cardápio digital, pedidos e chamada de garçom via QR Code;",
      },
      {
        id: "apt-2",
        text: "Implementação de API REST com autenticação JWT, controle de permissões e painéis distintos (cliente/dashboard);",
      },
      {
        id: "apt-3",
        text: "Criação do sistema com Spring Boot, Java, MySQL e JavaFX no front-end local;",
      },
    ],
  },
  {
    id: "ifro",
    company: "IFRO - Instituto Federal de Rondônia",
    period: "Fev 2023 - Presente",
    type: "Acadêmico / Presencial",
    position: "Aluno Voluntario de Automação e Desenvolvimento de Sistemas",
    activities: [
      {
        id: "ifro-1",
        text: "Participação em projetos acadêmicos como o sistema bancário JalaBank, com práticas reais de mercado;",
      },
      {
        id: "ifro-2",
        text: "Criação de relatórios técnicos, apresentações e documentação de software para diferentes públicos;",
      },
      {
        id: "ifro-3",
        text: "Atuação em metodologias ágeis e versionamento com Git em trabalhos em grupo;",
      },
    ],
  },
];
