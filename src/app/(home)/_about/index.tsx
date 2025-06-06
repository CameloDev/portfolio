import { UserRound } from "lucide-react";

import { Animate } from "@/components";
import { Title } from "@/components/ui";

import { Knowledge } from "./knowledge";

export function About() {
  return (
    <section id="about-me" className="mx-auto w-10/12 max-w-2xl pt-20 md:pt-24">
      <Title asChild className="mb-10 md:mb-12">
        <Animate as="h2">
          <UserRound className="size-6 min-w-6 text-border-50" />
          Quem eu sou
        </Animate>
      </Title>
      <div className="space-y-4">
        <Animate delay={0.05} as="p">
          Possuo habilidades sólidas em Java, Spring Boot, MongoDB, MySQL e
          arquitetura de microsserviços. Tenho experiência no desenvolvimento de
          APIs RESTful, integração com sistemas externos e aplicação de boas
          práticas de engenharia de software em projetos escaláveis.
        </Animate>
        <Animate delay={0.1} as="p">
          Também atuo como desenvolvedor voluntário em projetos colaborativos,
          contribuindo na criação e manutenção de funcionalidades do back-end,
          definindo regras de negócio, integrando bancos de dados e garantindo a
          qualidade do código por meio de testes automatizados, revisão de PRs e
          metodologias ágeis.
        </Animate>
      </div>

      <Knowledge />
    </section>
  );
}
