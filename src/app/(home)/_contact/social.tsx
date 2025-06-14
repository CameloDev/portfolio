import { Mail } from "lucide-react";
import { SiGithub, SiLinkedin } from "react-icons/si";

import { Animate } from "@/components";
import { Button } from "@/components/ui";

export function Social() {
  return (
    <div className="flex items-center gap-4 pt-8">
      <Button
        href="mailto:victordepauladev@gmail.com"
        className="size-9 p-0"
        asChild
      >
        <Animate delay={0.3} as="a">
          <Mail className="size-5" />
          <span className="sr-only">Enviar e-mail</span>
        </Animate>
      </Button>
      <Button
        href="https://www.linkedin.com/in/victor-jayme"
        className="size-9 p-0"
        asChild
      >
        <Animate delay={0.4} as="a">
          <SiLinkedin className="size-5" />
          <span className="sr-only">LinkedIn</span>
        </Animate>
      </Button>
      <Button
        href="https://github.com/camelodev"
        className="size-9 p-0"
        asChild
      >
        <Animate delay={0.5} as="a">
          <SiGithub className="size-5" />
          <span className="sr-only">Github</span>
        </Animate>
      </Button>
    </div>
  );
}
