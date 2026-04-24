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
    tech: ["TypeScript", "React", "Laravel", "MySQL", "Python", "Inertia.js"],
    link: "#",
  },
  {
    name: "QuizCram",
    description:
      "Educational app with quiz creation, timed testing, and automated grading.",
    tech: ["React", "Tailwind CSS", "Laravel", "MySQL", "Shadcn", "Inertia.js"],
    link: "#",
  },
  {
    name: "React Redux Bank",
    description:
      "Banking interface demonstrating Redux state management with deposit and loan operations.",
    tech: ["React", "Redux", "TypeScript", "Tailwind CSS", "Shadcn"],
    link: "#",
  },
  {
    name: "The Missing Professor",
    description:
      "Interactive CTF game teaching cybersecurity through progressive challenges.",
    tech: ["React", "TypeScript", "Shadcn", "Zod", "Zustand"],
    link: "#",
  },
];
