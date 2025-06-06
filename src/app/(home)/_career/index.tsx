import { Milestone } from "lucide-react";

import { Animate } from "@/components";
import { Title } from "@/components/ui";

import { Additional } from "./additional";
import { Companies } from "./companies";
import { Education } from "./education";

export function Career() {
  return (
    <section id="career" className="mx-auto w-10/12 max-w-2xl pt-20 md:pt-24">
      <Title asChild className="mb-10 md:mb-12">
        <Animate as="h2">
          <Milestone className="size-6 min-w-6 text-border-50" />
          Minha trajetória
        </Animate>
      </Title>
      <Animate delay={0.05} as="p">
        Iniciei minha carreira atuando em áreas relacionadas a tecnologia, 
        passando por experiências em desenvolvimento de software e manutenção 
        de sistemas. Atualmente, venho me dedicando ao desenvolvimento backend, 
        focando em aprimorar a arquitetura, performance e segurança das aplicações. 
        Abaixo estão algumas das minhas atuações mais recentes.
      </Animate>

      <Companies />
      <Education />
      <Additional />
    </section>
  );
}
