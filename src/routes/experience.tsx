import { experience } from "@/data/experience";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/experience")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="space-y-6">
      <p className="text-sm text-muted-foreground">
        A summary of the roles I've taken on — both internship and freelance
        work building full-stack web applications.
      </p>
      <ul className="space-y-5">
        {experience.map(({ role, type, period, bullets }) => (
          <li key={role} className="flex flex-col gap-y-1.5">
            <div className="flex items-baseline justify-between gap-x-4">
              <div className="flex md:flex-row flex-col items-start gap-x-1">
                <p className="text-sm">{role} —</p>
                <p className="italic text-muted-foreground text-sm">{type}</p>
                <p className="text-muted-foreground text-xs tabular-nums md:hidden">
                  {period}
                </p>
              </div>
              <p className="text-muted-foreground text-xs tabular-nums hidden md:block shrink-0">
                {period}
              </p>
            </div>
            <ul className="text-sm text-muted-foreground ml-4 list-disc space-y-1">
              {bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
