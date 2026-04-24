import { projects } from "@/data/project";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/projects")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="space-y-6">
      <p className="text-sm text-muted-foreground">
        A mix of academic and self-learning projects. Each one helped me apply
        what I was learning and explore different technologies hands-on.
      </p>
      <ul className="space-y-4">
        {projects.map(({ name, description, tech, link }) => (
          <li key={name} className="flex flex-col gap-y-0.5">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:text-muted-foreground transition-colors"
            >
              {name}
            </a>
            <p className="text-xs text-muted-foreground/60">
              {tech.join(" · ")}
            </p>
            <p className="text-sm text-muted-foreground">{description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
