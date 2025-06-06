import {
  SiDocker,
  SiNodedotjs,
  SiPostgresql,
  SiTypescript,
  SiSpringboot,
  SiDotnet,
  SiDjango,
  SiFastify,
  SiExpress,
} from "react-icons/si";
import { DiJava } from "react-icons/di";

import { Animate } from "@/components";
import { TechItem } from "./_components/tech-item";

export function Techs() {
  return (
    <Animate
      variant="fadeLeft"
      duration={0.65}
      delay={0.1}
      as="section"
      className="grid w-fit grid-cols-2 gap-x-14 gap-y-3 pt-8 sm:grid-cols-3 sm:gap-y-4 sm:pt-12 md:grid-cols-4"
    >
      <TechItem>
        <SiNodedotjs className="size-4 text-muted-100 transition-colors group-hover:text-[#339933] xs:size-5" />
        Node.js
      </TechItem>
      <TechItem>
        <SiExpress className="size-4 text-muted-100 transition-colors group-hover:text-[#000000] xs:size-5" />
        Express.js
      </TechItem>
      <TechItem>
        <SiSpringboot className="size-4 text-muted-100 transition-colors group-hover:text-[#6DB33F] xs:size-5" />
        Spring Boot
      </TechItem>
      <TechItem>
        <SiDotnet className="size-4 text-muted-100 transition-colors group-hover:text-[#512BD4] xs:size-5" />
        .NET
      </TechItem>
      <TechItem>
        <SiDjango className="size-4 text-muted-100 transition-colors group-hover:text-[#092E20] xs:size-5" />
        Django
      </TechItem>
      <TechItem>
        <SiFastify className="size-4 text-muted-100 transition-colors group-hover:text-[#FF3E00] xs:size-5" />
        Fastify
      </TechItem>
      <TechItem>
        <span className="size-4 text-muted-100 transition-colors group-hover:text-[#0769AD] xs:size-5 font-bold">jQuery</span>
      </TechItem>
      <TechItem>
        <DiJava className="size-4 text-muted-100 transition-colors group-hover:text-[#007396] xs:size-5" />
        Java
      </TechItem>
      <TechItem>
        <span className="size-4 text-muted-100 transition-colors group-hover:text-[#59666C] xs:size-5 font-bold">Hibernate</span>
      </TechItem>

      <TechItem>
        <SiPostgresql className="size-4 text-muted-100 transition-colors group-hover:text-[#4169E1] xs:size-5" />
        PostgreSQL
      </TechItem>

      <TechItem>
        <SiDocker className="size-4 text-muted-100 transition-colors group-hover:text-[#2496ED] xs:size-5" />
        Docker
      </TechItem>

      <TechItem>
        <SiTypescript className="size-4 text-muted-100 transition-colors group-hover:text-[#3178C6] xs:size-5" />
        Typescript
      </TechItem>
    </Animate>
  );
}
