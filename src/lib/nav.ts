type Navigation = {
  label: string;
  path: string;
};

type ExternalLink = {
  label: string;
  url: string;
};

export const externalLinks: ExternalLink[] = [
  {
    label: "@github",
    url: "https://github.com/Cedrickkk",
  },
  {
    label: "@gmail",
    url: "mailto:inhog.cedrick@gmail.com",
  },
  {
    label: "@linkedin",
    url: "https://linkedin.com/in/cedric-panti",
  },
  {
    label: "@resume",
    url: "/resume.pdf",
  },
];

export const navigation: Navigation[] = [
  { path: "/", label: "about" },
  { path: "/experience", label: "experience" },
  { path: "/skills", label: "skills" },
  // { path: "/education", label: "education" },
  { path: "/projects", label: "projects" },
  { path: "/currently", label: "currently" },
];
