type Skill = {
  label: string;
  items: string;
};

export const skills: Skill[] = [
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
