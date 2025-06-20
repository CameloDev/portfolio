import { ContactRound } from "lucide-react";

import { Animate } from "@/components";
import { TextLink, Title } from "@/components/ui";

import { Social } from "./social";

export function Contact() {
  return (
    <section id="contact" className="mx-auto w-10/12 max-w-2xl py-20 md:py-24">
      <Title asChild className="mb-10 md:mb-12">
        <Animate as="h2">
          <ContactRound className="size-6 min-w-6 text-border-50" />
          Que tal me recrutar para sua equipe?
        </Animate>
      </Title>

      <Animate delay={0.15} as="p">
        Vamos nos conectar! Adoraria conversar e analisar novas oportunidades.
        Entre em contato pelo{" "}
        <TextLink href="mailto:victordepauladev@gmail.com">
          Meu Email
        </TextLink>{" "}
        ou através das minhas redes.
      </Animate>

      <Social />
    </section>
  );
}
