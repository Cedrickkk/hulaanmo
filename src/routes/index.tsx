import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="space-y-6">
      <p className="text-sm text-muted-foreground leading-relaxed">
        An IT student from the Philippines focused on web development, working
        on both frontend and backend technologies.
      </p>
      <p className="text-sm text-muted-foreground leading-relaxed">
        Currently in my senior year at Pamantasan ng Lungsod ng Pasig, working
        towards my bachelor's degree in Information Technology.
      </p>
      <p className="text-sm text-muted-foreground leading-relaxed">
        I'm currently learning and specializing in Java and Spring Boot
        development.
      </p>
    </div>
  );
}
