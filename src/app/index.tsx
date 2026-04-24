const skills = [
  { label: "Languages", items: "JavaScript, TypeScript, Java, PHP" },
  { label: "Databases", items: "MySQL, PostgreSQL" },
  {
    label: "Frameworks",
    items: "Laravel, Spring Boot, Express, Tailwind CSS, Bootstrap",
  },
  {
    label: "Libraries",
    items: "React, Zod, Lombok, TanStack, Axios, Inertia, Sanctum",
  },
  { label: "Tools & Platforms", items: "Git, GitHub, Docker, Figma" },
];

const projects = [
  {
    name: "Qmsopticore",
    description:
      "A document management system for Pamantasan ng Lungsod ng Pasig with document and signature authentication using Convolutional Neural Network.",
    tech: ["TypeScript", "React", "Laravel", "MySQL", "Python", "Inertia.js"],
    href: "#",
  },
  {
    name: "JenVentory",
    description:
      "A document management system for Pamantasan ng Lungsod ng Pasig with document and signature authentication using Convolutional Neural Network.",
    tech: ["TypeScript", "React", "Laravel", "MySQL", "Python", "Inertia.js"],
    href: "#",
  },
  {
    name: "QuizCram",
    description:
      "An educational app with quiz creation, timed testing, and automated grading. Features multi-attempt tracking, data visualization, and progress monitoring.",
    tech: ["React", "Tailwind CSS", "Laravel", "MySQL", "Shadcn", "Inertia.js"],
    href: "#",
  },
  {
    name: "React Redux Bank",
    description:
      "A small banking interface demonstrating Redux state management. Users can create profiles, manage balances, and perform deposits, withdrawals, and loans.",
    tech: ["React", "Redux", "TypeScript", "Tailwind CSS", "Shadcn"],
    href: "#",
  },
  {
    name: "The Missing Professor",
    description:
      "An interactive CTF game teaching cybersecurity through five progressive challenges covering cryptography, terminal navigation, and authentication systems.",
    tech: ["React", "TypeScript", "Shadcn", "Zod", "Zustand"],
    href: "#",
  },
];

const books = [
  {
    title: "Introduction to Java Programming and Data Structures",
    author: "Daniel Liang",
    note: "Took me from Java basics to OOP fundamentals. Solved exercises at the end of every chapter to reinforce what I learned.",
  },
  {
    title: "Spring Start Here",
    author: "Laurentiu Spilca",
    note: "My entry point into Spring. Walked through dependency injection and auto-wiring by building small MVC and RESTful apps.",
  },
  {
    title: "Java Persistence with Spring Data and Hibernate",
    author: "Cătălin Tudose",
    note: "Still working through this. Learning how to model domains and persist data properly using ORMs and Hibernate.",
  },
  {
    title: "Spring Security in Action",
    author: "Laurentiu Spilca",
    note: "Up next after persistence. Want to understand how to handle auth and protect user data the right way in Spring.",
  },
  {
    title: "Spring Boot Up and Running",
    author: "Mark Heckler",
    note: "Planned last. Looking forward to tying everything together and building production-ready Spring Boot applications.",
  },
];

export default function App() {
  return (
    <div className="relative min-h-screen my-24">
      <div className="mx-auto max-w-2xl">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-4xl font-medium">Cedrick</h1>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#"
              className="text-muted-foreground text-sm hover:text-foreground transition-colors"
            >
              @github
            </a>
            <a
              href="#"
              className="text-muted-foreground text-sm hover:text-foreground transition-colors"
            >
              @email
            </a>
            <a
              href="#"
              className="text-muted-foreground text-sm hover:text-foreground transition-colors"
            >
              @linkedin
            </a>
            <a
              href="#"
              className="text-muted-foreground text-sm hover:text-foreground transition-colors"
            >
              @resume
            </a>
          </div>
        </div>

        {/* Sections */}
        <div className="mt-10 space-y-10">
          {/* Experience */}
          <section>
            <h2 className="text-sm font-medium mb-4">Experience</h2>
            <ul className="space-y-5">
              <li className="flex flex-col gap-y-1.5">
                <div className="flex items-baseline justify-between gap-x-4 flex-wrap">
                  <p className="text-sm">
                    Full-Stack Web Development Intern &nbsp;
                    <span className="italic text-muted-foreground">
                      — Internship, On-site
                    </span>
                  </p>
                  <p className="text-muted-foreground text-xs tabular-nums shrink-0">
                    Feb 2026 – May 2026
                  </p>
                </div>
                <ul className="text-sm text-muted-foreground ml-4 list-disc space-y-1">
                  <li>
                    Designed RESTful APIs and robust database schemas to
                    streamline loan application workflows.
                  </li>
                </ul>
              </li>

              <li className="flex flex-col gap-y-1.5">
                <div className="flex items-baseline justify-between gap-x-4 flex-wrap">
                  <p className="text-sm">
                    Software Developer &nbsp;
                    <span className="italic text-muted-foreground">
                      — Freelance, Remote
                    </span>
                  </p>
                  <p className="text-muted-foreground text-xs tabular-nums shrink-0">
                    Jan 2026
                  </p>
                </div>
                <ul className="text-sm text-muted-foreground ml-4 list-disc space-y-1">
                  <li>
                    Developed the frontend of a lending system with reliable
                    data flow and validation, collaborating with backend
                    developers to resolve API issues and support feature
                    integration.
                  </li>
                </ul>
              </li>
            </ul>
          </section>
          {/* Education */}
          <section>
            <h2 className="text-sm font-medium mb-4">Education</h2>
            <ul className="space-y-5">
              <li className="flex flex-col gap-y-1.5">
                <div className="flex items-baseline justify-between gap-x-4 flex-wrap">
                  <p className="text-sm">
                    B.S. Information Technology &nbsp;
                    <span className="italic text-muted-foreground">
                      — Pamantasan ng Lungsod ng Pasig
                    </span>
                  </p>
                  <p className="text-muted-foreground text-xs tabular-nums shrink-0">
                    2023 – 2026
                  </p>
                </div>
              </li>
              <li className="flex flex-col gap-y-1.5">
                <div className="flex items-baseline justify-between gap-x-4 flex-wrap">
                  <p className="text-sm">
                    B.S. Information Technology &nbsp;
                    <span className="italic text-muted-foreground">
                      — Jose Rizal University
                    </span>
                  </p>
                  <p className="text-muted-foreground text-xs tabular-nums shrink-0">
                    2023 – 2023
                  </p>
                </div>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-sm font-medium mb-4">Projects</h2>
            <ul className="space-y-5">
              {projects.map(({ name, description, tech, href }) => (
                <li key={name} className="flex flex-col gap-y-0.5">
                  <a
                    href={href}
                    className="text-sm hover:text-muted-foreground transition-colors"
                  >
                    {name}
                  </a>
                  <p className="text-xs text-muted-foreground/60">
                    {tech.join(" · ")}
                  </p>
                  <p className="text-sm text-muted-foreground">{description}</p>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-sm font-medium mb-4">Skills</h2>
            <div className="space-y-2">
              {skills.map(({ label, items }) => (
                <p key={label} className="text-sm">
                  <span className="text-foreground">{label}:</span> &nbsp;
                  <span className="text-muted-foreground">{items}</span>
                </p>
              ))}
            </div>
          </section>

          {/* Currently */}
          <section>
            <h2 className="text-sm font-medium mb-4">Currently</h2>
            <ul className="space-y-5">
              {books.map(({ title, author, note }) => (
                <li key={title} className="flex flex-col gap-y-0.5">
                  <p className="text-sm">
                    {title} &nbsp;
                    <span className="text-muted-foreground">— {author}</span>
                  </p>
                  <p className="text-sm text-muted-foreground">{note}</p>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
