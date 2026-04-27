type Experience = {
  role: string;
  company?: string;
  type: string;
  period: string;
  bullets: string[];
};

export const experience: Experience[] = [
  {
    role: "Full-Stack Web Development Intern",
    company: "Comfac Corporation",
    type: "Internship, On-site",
    period: "Feb 2026 – May 2026",
    bullets: [
      "Built the backend of an internal loan management system, designing REST APIs that handled the full loan lifecycle and normalizing the database schema to support complex multi-stage workflows.",
    ],
  },
  {
    role: "Software Developer",
    type: "Freelance, Remote",
    period: "Jan 2026",
    bullets: [
      "Built the frontend for a lending system, handling form validation and working closely with backend developers to iron out API integration issues during development.",
    ],
  },
];
