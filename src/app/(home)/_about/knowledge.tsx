import { Animate } from "@/components";

export function Knowledge() {
  return (
    <div className="pt-8">
      <Animate delay={0.15} as="h3" className="font-medium text-strong">
        Conhecimentos e habilidades em:
      </Animate>
      <Animate delay={0.2} as="ul" className="space-y-2 pt-4 text-sm">
        <li>
          <span className="font-medium text-highlighted">Idiomas:</span>{" "}
          Português (Nativo), Inglês (Avançado), Espanhol (Básico)
        </li>

        <li>
          <span className="font-medium text-highlighted">Linguagens:</span>{" "}
          Java, JavaScript, TypeScript, C++, C#, Go, Python, Ruby, Dart
        </li>

        <li>
          <span className="font-medium text-highlighted">Frontend:</span>{" "}
          HTML, CSS, SASS, Angular, React, Bootstrap, Flutter
        </li>

        <li>
          <span className="font-medium text-highlighted">Backend:</span>{" "}
          Node.js, Express.js, Spring Boot, .NET, Django, Fastify, jQuery, Hibernate
        </li>

        <li>
          <span className="font-medium text-highlighted">Banco de dados:</span>{" "}
          PostgreSQL, MySQL, SQLite, MongoDB, Firebase, DynamoDB, MariaDB, Microsoft SQL Server
        </li>

        <li>
          <span className="font-medium text-highlighted">APIs:</span>{" "}
          REST, Postman, JWT, Bearer, JSON
        </li>

        <li>
          <span className="font-medium text-highlighted">Testes automatizados:</span>{" "}
          Testes unitários e de integração (E2E), Jest, React Testing Library, Cypress, Playwright
        </li>

        <li>
          <span className="font-medium text-highlighted">DevOps & Cloud:</span>{" "}
          Docker, Git, GitHub Actions, AWS
        </li>

        <li>
          <span className="font-medium text-highlighted">AI e Data Science:</span>{" "}
          Python, R, TensorFlow
        </li>

        <li>
          <span className="font-medium text-highlighted">Editores e IDEs:</span>{" "}
          IntelliJ IDEA, Visual Studio, Eclipse, Notepad++
        </li>

        <li>
          <span className="font-medium text-highlighted">Ferramentas:</span>{" "}
          Figma, Trello, Codewars, Ubuntu
        </li>

        <li>
          <span className="font-medium text-highlighted">Metodologias ágeis:</span>{" "}
          Scrum, Kanban, Jira
        </li>

        <li>
          <span className="font-medium text-highlighted">Conceitos e boas práticas:</span>{" "}
          Design Pattern, Composition Pattern, Atomic Design, Git Flow, SOLID, Clean Code,
          Clean Architecture, Domain-driven design (DDD), Test-driven development (TDD), CI/CD, DevOps
        </li>
      </Animate>
    </div>
  );
}
