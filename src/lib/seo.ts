export const siteConfig = {
  name: "John Cedric Panti",
  title: "Cedrickkk - Java & Spring Boot Developer",
  description:
    "Full-stack developer specializing in Java, JavaScript, and PHP. Building web applications with Spring Boot, React, and Laravel. Currently deepening expertise in backend development with Spring Data, Spring Security, and REST APIs.",
  url: "https://cedrickkk.vercel.app",
  ogImage: "/og.png",
};

type PageSeo = {
  title?: string;
  description?: string;
};

export function resolveSeo({ title, description }: PageSeo = {}) {
  return {
    title: title ? `${title} · ${siteConfig.name}` : siteConfig.title,
    description: description ?? siteConfig.description,
  };
}
