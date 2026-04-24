import { education } from "@/data/education";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/education")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="space-y-6">
      <p className="text-sm text-muted-foreground">
        My academic background in information technology.
      </p>
      <ul className="space-y-4">
        {education.map(({ degree, school, period }) => (
          <li
            key={school}
            className="flex flex-col md:flex-row gap-y-0.5 md:items-baseline md:justify-between"
          >
            <p className="text-sm">
              {degree} &nbsp;
              <span className="italic text-muted-foreground md:inline hidden">
                — {school}
              </span>
            </p>
            <p className="text-muted-foreground italic text-sm md:hidden">
              {school}
            </p>
            <p className="text-muted-foreground text-xs tabular-nums">
              {period}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
