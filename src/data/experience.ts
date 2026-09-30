type Experience = {
  role: string;
  company?: string;
  type: string;
  period: string;
  bullets: string[];
};

export const experience: Experience[] = [
  {
    role: "Junior Software Developer - Trainee",
    company: "Novaware Systems Inc.",
    type: "Probationary, Remote",
    period: "Jul 2026 - Present",
    bullets: [],
  },
  {
    role: "Full-Stack Web Development Intern",
    company: "Comfac Corporation",
    type: "Internship, On-site",
    period: "Feb 2026 – May 2026",
    bullets: [
      "Developed the backend of an internal loan management system, designing REST APIs that handled the full loan lifecycle and normalizing the database schema to support multi-stage workflows.",
    ],
  },
  {
    role: "Software Developer",
    type: "Freelance, Remote",
    period: "Jan 2026",
    bullets: [
      "Developed frontend components for a lending system, leading form validation efforts and troubleshooting API integration bottlenecks alongside backend teams.",
    ],
  },
];
