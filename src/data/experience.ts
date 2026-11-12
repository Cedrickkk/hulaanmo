type Experience = {
  role: string;
  company?: string;
  type: string;
  period: string;
  bullets: string[];
};

export const experience: Experience[] = [
  {
    role: "Junior Software Developer",
    company: "Novaware Systems, Inc.",
    type: "",
    period: "Jul 2026 - Present",
    bullets: [],
  },
  {
    role: "Full-Stack Web Development Intern",
    company: "Comfac Corporation",
    type: "",
    period: "Feb 2026 – May 2026",
    bullets: [
      "Designed and implemented REST APIs and normalized the database schema for an internal loan management system, supporting end-to-end loan lifecycles and multi-stage workflows. ",
    ],
  },
  {
    role: "Freelance Software Developer",
    type: "",
    period: "Jan 2026",
    bullets: [
      "Implemented frontend components for a lending system, focusing on form validation and resolving API integration bottlenecks with backend teams",
    ],
  },
];
