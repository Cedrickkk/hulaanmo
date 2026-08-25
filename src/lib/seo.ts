export const siteConfig = {
  name: "John Cedric Panti",
  shortName: "Cedrickkk",
  title: "Cedrickkk - Java & Spring Boot Developer",
  description:
    "Full-stack developer specializing in Java, JavaScript, and PHP. Building web applications with Spring Boot, React, and Laravel. Currently deepening expertise in backend development with Spring Data, Spring Security, and REST APIs.",
  url: "https://cedrickkk.vercel.app",
  ogImage: "/og.png",
  ogImageAlt: "John Cedric Panti (Cedrickkk) — Java & Spring Boot Developer",
  ogImageWidth: 1200,
  ogImageHeight: 630,
  locale: "en_US",
  twitterHandle: "",
  keywords: [
    "John Cedric Panti",
    "Cedrickkk",
    "Java Developer",
    "Spring Boot Developer",
    "Full-stack Developer",
    "React Developer",
    "Laravel Developer",
    "Backend Developer Philippines",
    "Software Developer Portfolio",
  ],
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
