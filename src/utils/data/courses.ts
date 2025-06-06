import type { ICourseItem } from "@/@types/course-item";

export const courses: ICourseItem[] = [
  {
    id: "jala-university",
    institution: "Jala University",
    period: "Jun 2024 - Jun 2028",
    position: "Bacharel em Engenharia de Software",
    description:
      "Formação com foco em desenvolvimento de software utilizando Java e Python. Ênfase em orientação a objetos, integração de APIs REST, testes automatizados, princípios SOLID, Clean Architecture, DDD, TDD, CI/CD e práticas de DevOps.",
  },
  {
    id: "ifro",
    institution: "Instituto Federal de Rondônia",
    period: "Jan 2021 - Dez 2023",
    position: "Técnico em Informática - Desenvolvimento de Sistemas",
    description:
      "Aprendizado prático de programação com foco em C# e Flutter. Desenvolvimento de sistemas desktop, web e mobile, utilizando boas práticas, versionamento com Git e fundamentos de banco de dados e estruturas de dados.",
  },
  {
    id: "danki-code",
    institution: "Danki Code",
    period: "2023",
    position: "Curso Profissionalizante",
    description:
      "Formação complementar voltada para desenvolvimento de aplicações com C# e .NET, com foco em lógica de programação, orientação a objetos, consumo de APIs e criação de sistemas completos.",
  },
  {
    id: "autodidata",
    institution:
      "Outras Fontes / Autodidata (YouTube, documentações, comunidades)",
    period: "2016 - Presente",
    position: "Aprendizado Autônomo",
    description:
      "Estudo contínuo de tecnologias modernas através de vídeos, artigos e projetos pessoais. Experiência com: \n" +
      "- Linguagens: JavaScript, TypeScript, Go, Ruby, Dart, C++ (primeira linguagem)\n" +
      "- Frameworks/Bibliotecas: Spring, Express, .NET, Django, Fastify, Hibernate, jQuery\n" +
      "- Bancos de dados: MySQL, MongoDB, DynamoDB, MariaDB, Microsoft SQL Server, Firebase (com Flutter)\n" +
      "Exploração de arquitetura de software, boas práticas de desenvolvimento e DevOps.",
  },
];
