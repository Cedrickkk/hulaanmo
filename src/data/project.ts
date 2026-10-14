type Project = {
  name: string;
  description: string;
  tech: string[];
  link: string;
  preview?: { src: string; alt: string; caption: string; width: number; height: number };
};

export const projects: Project[] = [
  // {
  //   name: "Routemate ",
  //   description:
  //     "A social adventure platform for discovering, creating, and sharing outdoor experiences.",
  //   tech: ["Spring Boot", "React Native", "TypeScript", "PostgreSQL"],
  //   link: "https://github.com/Cedrickkk/routemate",
  // },
  {
    name: "Spring Boot Microservices Demo",
    description:
      "A Spring Boot ecommerce demo for learning and exploring microservices with Spring Boot ecosystem.",
    tech: ["Spring Boot", "Apache Kafka", "Docker"],
    link: "https://github.com/Cedrickkk/springboot-microservices-ecom-demo",
    preview: {
      src: "/projects/spring-boot-ecom-demo-architecture.png",
      alt: "Architecture diagram of the Spring Boot ecommerce microservices demo.",
      caption: "",
      width: 2240,
      height: 1630,
    },
  },
  {
    name: "Spring AI-ception",
    description:
      "A meta RAG & persistent chat memory service that uses Spring AI to answer questions about Spring AI.",
    tech: ["Spring AI", "pgvector", "React", "TypeScript", "Python", "Ollama"],
    link: "https://github.com/Cedrickkk/spring-ai-ception",
    preview: {
      src: "/projects/spring-ai-ception.png",
      alt: "Spring AI-ception chat interface.",
      caption: "",
      width: 1950,
      height: 1672,
    },
  },
  {
    name: "Prompt2Bean",
    description:
      "A Spring AI REST API that transforms unstructured natural language prompts into strongly-typed Java Records and JSON schemas.",
    tech: ["Spring AI", "React", "Ollama"],
    link: "https://github.com/Cedrickkk/prompt2bean",
    preview: {
      src: "/projects/prompt2bean.png",
      alt: "Prompt2Bean interface for converting natural language into structured output.",
      caption: "",
      width: 1950,
      height: 1672,
    },
  },
  {
    name: "Pamantasan ng Lungsod ng Pasig Document Management System",
    description:
      "Streamlines document workflows, featuring CNN-based signature consistency checking and role-based access control.",
    tech: ["Laravel", "React", "TypeScript", "MySQL", "Python", "Inertia.js"],
    link: "https://github.com/Cedrickkk/qmsopticore",
    preview: {
      src: "/projects/qmsopticore.png",
      alt: "Document management system interface.",
      caption: "",
      width: 2306,
      height: 1454,
    },
  },
  {
    name: "React Redux Bank",
    description:
      "Banking interface demonstrating Redux state management with deposit and loan operations.",
    tech: ["React", "TypeScript", "Redux"],
    link: "https://github.com/Cedrickkk/react-redux-bank",
    preview: {
      src: "/projects/react-redux-bank.png",
      alt: "React Redux banking interface.",
      caption: "",
      width: 2396,
      height: 1814,
    },
  },
  {
    name: "The Missing Professor",
    description:
      "Interactive CTF game teaching cybersecurity through progressive challenges.",
    tech: ["React", "TypeScript", "Zod", "Zustand"],
    link: "",
    preview: {
      src: "/projects/the-missing-professor.png",
      alt: "The Missing Professor game preview showing the desk, cipher puzzle, library, and command prompt.",
      caption: "",
      width: 1566,
      height: 1005,
    },
  },
  {
    name: "JenVentory",
    description:
      "Full-stack inventory, POS and debt tracking system for a small retail store.",
    tech: [
      "Spring Boot",
      "React",
      "TypeScript",
      "TanStack Query",
      "Zod",
      "PostgreSQL",
    ],
    link: "https://github.com/cedrickkk?tab=repositories&q=jen-ventory",
  },
  {
    name: "Java Console Projects",
    description: "Collection of console apps I made while learning Java.",
    tech: ["Java", "Data Structures"],
    link: "https://github.com/Cedrickkk/java-console-projects",
  },
  {
    name: "Learning Spring AI",
    description: "A simple project to explore the capabilities of Spring AI ",
    tech: ["Spring AI", "Ollama"],
    link: "https://github.com/Cedrickkk/learning-spring-ai",
  },
  {
    name: "Python Calendar Roadmap",
    description:
      "A simple python program to automate calendar creation for structured learning roadmaps and study schedules via the Google Calendar API.",
    tech: ["Python", "Google Calendar API"],
    link: "https://github.com/Cedrickkk/python-calendar-bootcamp",
  },
  {
    name: "QuizCram",
    description:
      "Educational app with quiz creation, timed testing, and automated grading.",
    tech: ["Laravel", "React", "TypeScript", "MySQL", "Inertia.js"],
    link: "https://github.com/Cedrickkk/quizcram",
  },
  {
    name: "Minimal 3-Tier Web App with Docker",
    description:
      "A Docker learning project — a 3-tier web app running an interpreted Node.js and compiled Spring Boot server with a containerized database.",
    tech: ["Docker", "Express", "Spring Boot", "TypeScript"],
    link: "https://github.com/Cedrickkk/3-tier-docker-lab",
  },
];
