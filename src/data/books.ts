type Book = {
  title: string;
  author: string;
  note: string;
  link: string;
};

export const java: Book[] = [
  {
    title: "Introduction to Java Programming and Data Structures",
    author: "Daniel Liang",
    note: "Took me from Java basics to OOP fundamentals. Solved exercises at the end of every chapter to reinforce what I learned.",
    link: "https://github.com/Cedrickkk/introduction-to-java-programming-and-data-structures-12e-exercises",
  },
  {
    title: "Spring Start Here",
    author: "Laurentiu Spilca",
    note: "My entry point into Spring. Walked through dependency injection and auto-wiring by building small MVC and RESTful apps.",
    link: "https://github.com/Cedrickkk/spring-start-here",
  },
  {
    title: "Java Persistence with Spring Data and Hibernate",
    author: "Cătălin Tudose",
    note: "Still working through this. Learning how to model domains and persist data properly using ORMs and Hibernate.",
    link: "https://github.com/Cedrickkk/java-persistence-with-spring-data-and-hibernate",
  },
  {
    title: "Spring Security in Action",
    author: "Laurentiu Spilca",
    note: "Up next after persistence. Want to understand how to handle auth and protect user data the right way in Spring.",
    link: "https://github.com/Cedrickkk/spring-security-in-action",
  },
  {
    title: "Spring Boot Up and Running",
    author: "Mark Heckler",
    note: "Planned last. Looking forward to tying everything together and building production-ready Spring Boot applications.",
    link: "https://github.com/Cedrickkk/springboot-up-and-running",
  },
];

export const python: Book[] = [
  {
    title:
      "Automate the Boring Stuff With Python, Third Edition Practical Programming for Total Beginners",
    author: "Al Sweigart",
    note: "A beginner-friendly guide I’m using to get comfortable with Python through practical, everyday examples.",
    link: "",
  },
  {
    title:
      "Fluent Python Clear, Concise, and Effective Programming, 2nd Edition",
    author: "Luciano Ramalho",
    note: "A deeper follow-up for writing cleaner, more Pythonic code once I’ve got the basics down.",
    link: "",
  },
];
