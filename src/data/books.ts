type Book = {
  title: string;
  author: string;
  note: string;
  link: string;
};

export const books: Book[] = [
  {
    title: "Introduction to Java Programming and Data Structures",
    author: "Daniel Liang",
    note: "Took me from Java basics to OOP fundamentals. Solved exercises at the end of every chapter to reinforce what I learned.",
    link: "https://github.com/cedrickkk?tab=repositories&q=java-programming",
  },
  {
    title: "Spring Start Here",
    author: "Laurentiu Spilca",
    note: "My entry point into Spring. Walked through dependency injection and auto-wiring by building small MVC and RESTful apps.",
    link: "https://github.com/cedrickkk?tab=repositories&q=spring-start-here",
  },
  {
    title: "Java Persistence with Spring Data and Hibernate",
    author: "Cătălin Tudose",
    note: "Still working through this. Learning how to model domains and persist data properly using ORMs and Hibernate.",
    link: "https://github.com/cedrickkk?tab=repositories&q=java-persistence",
  },
  {
    title: "Spring Security in Action",
    author: "Laurentiu Spilca",
    note: "Up next after persistence. Want to understand how to handle auth and protect user data the right way in Spring.",
    link: "https://github.com/cedrickkk?tab=repositories&q=spring-security",
  },
  {
    title: "Spring Boot Up and Running",
    author: "Mark Heckler",
    note: "Planned last. Looking forward to tying everything together and building production-ready Spring Boot applications.",
    link: "https://github.com/cedrickkk?tab=repositories&q=spring-boot-up-and-running",
  },
];
