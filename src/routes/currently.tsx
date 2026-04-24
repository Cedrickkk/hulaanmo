import { books } from "@/data/books";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/currently")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="space-y-6">
      <p className="text-sm text-muted-foreground">
        I like reading technical books and exploring new technologies. These are
        what I'm currently working through to deepen my understanding of backend
        development with Java and Spring.
      </p>
      <ul className="space-y-4">
        {books.map(({ title, author, note, link }) => (
          <li key={title} className="flex flex-col gap-y-0.5">
            <p className="text-sm">
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-muted-foreground transition-colors"
              >
                {title}
              </a>
              &nbsp;
              <span className="text-muted-foreground italic">— {author}</span>
            </p>
            <p className="text-sm text-muted-foreground">{note}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
