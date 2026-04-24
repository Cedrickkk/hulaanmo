import { skills } from "@/data/skll";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/skills")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="space-y-6">
      <p className="text-sm text-muted-foreground">
        Technologies I've worked with across personal projects, freelance work,
        and internships.
      </p>
      <div className="space-y-2">
        {skills.map(({ label, items }) => (
          <p key={label} className="text-sm">
            <span className="text-foreground">{label}:</span> &nbsp;
            <span className="text-muted-foreground">{items}</span>
          </p>
        ))}
      </div>
    </div>
  );
}
