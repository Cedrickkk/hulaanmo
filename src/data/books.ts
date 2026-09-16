type Book = {
  title: string;
  author: string;
  note: string;
  link: string;
};

type Course = {
  title: string;
  instructor: string;
  note: string;
  link: string;
};

export const java: Book[] = [
  {
    title: "Introduction to Java Programming and Data Structures",
    author: "Daniel Liang",
    note: "Took me from basic Java syntax to OOP fundamentals and core data structures through end-of-chapter exercises.",
    link: "https://github.com/Cedrickkk/introduction-to-java-programming-and-data-structures-12e-exercises",
  },
  {
    title: "Spring Start Here",
    author: "Laurentiu Spilca",
    note: "The book that bridge my knowledge from core Java into Spring. Built out dependency injection, application context, and basic REST endpoints.",
    link: "https://github.com/Cedrickkk/spring-start-here",
  },
  {
    title: "Java Persistence with Spring Data and Hibernate",
    author: "Cătălin Tudose",
    note: "This drives my understanding of database integration, domain modeling, ORMs, and handling data persistence properly.",
    link: "https://github.com/Cedrickkk/java-persistence-with-spring-data-and-hibernate",
  },
  {
    title: "Spring Security in Action",
    author: "Laurentiu Spilca",
    note: "Guide for backend security, covering authentication flows, authorization rules, and securing application data.",
    link: "https://github.com/Cedrickkk/spring-security-in-action",
  },
  {
    title: "Spring Boot Up and Running",
    author: "Mark Heckler",
    note: "Ties Java and Spring concepts together for building and deploying production-ready backend applications.",
    link: "https://github.com/Cedrickkk/springboot-up-and-running",
  },
];

export const python: Book[] = [
  {
    title:
      "Automate the Boring Stuff With Python, Third Edition Practical Programming for Total Beginners",
    author: "Al Sweigart",
    note: "My hands-on intro to Python where I learned to automate daily tasks, scrape web data, and script file workflows.",
    link: "https://github.com/Cedrickkk/automate-boring-stuff-with-python",
  },
  {
    title:
      "Fluent Python Clear, Concise, and Effective Programming, 2nd Edition",
    author: "Luciano Ramalho",
    note: "The resource I to turn to when moving past the basics to write properly structured, clean Pythonic code.",
    link: "https://github.com/Cedrickkk/fluent-python-2nd-edition",
  },
];

export const systemDesign: Book[] = [
  {
    title:
      "Designing Data-Intensive Applications: The Big Ideas Behind Reliable, Scalable, and Maintainable Systems",
    author: "Martin Kleppmann & Chris Riccomini",
    note: "My go-to resource for understanding distributed systems, especially when digging into storage engines, message queues, and data consistency.",
    link: "",
  },
  {
    title: "Building Microservices: Designing Fine-Grained Systems",
    author: "Sam Newman",
    note: "What I picked to learn microservices architecture, breaking down monoliths, and managing service boundaries.",
    link: "",
  },
  {
    title: "Fundamentals of Software Architecture: An Engineering Approach",
    author: "Mark Richards & Neal Ford",
    note: "Keeps my architectural thinking sharp when evaluating component designs, system patterns, and technical trade-offs.",
    link: "",
  },
];

export const ai: Course[] = [
  {
    title:
      "AI Engineering Core & Agentic Track: LLM Engineering, RAG, QLoRA, Agents, MCP",
    instructor: "Ed Donner",
    note: "Hands-on walkthrough for modern AI workflows, including RAG pipelines, fine-tuning, and agent integration.",
    link: "https://github.com/Cedrickkk/ai-engineering",
  },
];
