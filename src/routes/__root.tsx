import { externalLinks, navigation } from "@/lib/router";
import {
  Link,
  Outlet,
  createRootRoute,
  useLocation,
} from "@tanstack/react-router";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  const { pathname } = useLocation();

  return (
    <div className="relative min-h-screen animate-fade-in">
      <div className="mx-auto max-w-2xl w-full px-6 py-12 md:py-24">
        <div className="space-y-6">
          <div className="flex gap-4 items-center">
            <img src="/me.jpg" alt="Cedrick" className="size-36 shrink-0" />
            <div className="space-y-1">
              <h1 className="text-4xl font-medium">Cedrick</h1>
              <div className="space-y-0.5">
                <p className="text-sm font-medium">
                  Junior Software Developer - Trainee
                </p>
                <p className="text-xs text-muted-foreground">
                  Novaware Systems Inc.
                </p>
              </div>
              <div className="flex flex-wrap items-start gap-x-4 gap-y-1 pt-1">
                {externalLinks.map(({ label, url }) => (
                  <a
                    key={label}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground text-sm hover:text-foreground transition-colors"
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:flex-wrap gap-2 md:gap-4">
            {navigation.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                activeOptions={path === "/" ? { exact: true } : undefined}
              >
                {({ isActive }) => (
                  <span
                    className={`text-sm transition-colors ${
                      isActive
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {label}
                  </span>
                )}
              </Link>
            ))}
          </div>
        </div>

        <div key={pathname} className="mt-7 animate-fade-in">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
