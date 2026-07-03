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
    type: "Probationary, Remotee",
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
      "Implemented features for a lending system, handling form validation and working closely with backend developers to iron out API integration issues during development.",
    ],
  },
];
