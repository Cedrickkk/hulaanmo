import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="space-y-6">
      <p className="text-sm text-muted-foreground leading-relaxed">
        An IT graduate from the Philippines currently focused on full-stack
        development. Motivated by the idea that small improvements compound over
        time.
      </p>
      <p className="text-sm text-muted-foreground leading-relaxed">
        On the side, I've been focusing on Java, Spring Boot, and AI
        Engineering, exploring new ecosystems and deepening my understanding of
        backend architecture and modern frameworks.
      </p>
    </div>
  );
}
