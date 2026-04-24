import { routeTree } from "@/routeTree.gen";
import {
  createRouter,
  type LinkProps,
  type RegisteredRouter,
} from "@tanstack/react-router";

export const router = createRouter({
  routeTree,
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

type AppRoutes = LinkProps<RegisteredRouter>["to"];

type Navigation = {
  label: string;
  path: AppRoutes;
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
    label: " @linkedin",
    url: "https://linkedin.com/in/cedric-panti",
  },
  {
    label: "@resume",
    url: "./resume.pdf",
  },
];

export const navigation: Navigation[] = [
  {
    path: "/",
    label: "about",
  },
  {
    path: "/experience",
    label: "experience",
  },
  {
    path: "/skills",
    label: "skills",
  },
  {
    path: "/education",
    label: "education",
  },
  {
    path: "/projects",
    label: "projects",
  },
  {
    path: "/currently",
    label: "currently",
  },
];
