type Project = {
  name: string;
  description: string;
  tech: string[];
  link: string;
};

export const projects: Project[] = [
  {
    name: "Qmsopticore",
    description:
      "Document management system with CNN-based document and signature authentication.",
    tech: ["Laravel", "React", "TypeScript", "MySQL", "Python", "Inertia.js"],
    link: "#",
  },
  {
    name: "JenVentory",
    description:
      "Full-stack inventory, POS and debt tracking system for a small retail store.",
    tech: [
      "Spring Boot",
      "React",
      "Typescript",
      "TanStack Query",
      "Zod",
      "PostgreSQL",
    ],
    link: "#",
  },
  {
    name: "QuizCram",
    description:
      "Educational app with quiz creation, timed testing, and automated grading.",
    tech: ["Laravel", "React", "TypeScript", "MySQL", "Inertia.js"],
    link: "#",
  },
  {
    name: "React Redux Bank",
    description:
      "Banking interface demonstrating Redux state management with deposit and loan operations.",
    tech: ["React", "TypeScript", "Redux"],
    link: "#",
  },
  {
    name: "The Missing Professor",
    description:
      "Interactive CTF game teaching cybersecurity through progressive challenges.",
    tech: ["React", "TypeScript", "Zod", "Zustand"],
    link: "#",
  },
];
