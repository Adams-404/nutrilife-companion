import { Link, Outlet, useLocation } from "@tanstack/react-router";
import { Home, UtensilsCrossed, ChefHat, BookOpen, HeartPulse, LineChart, Stethoscope, Users, User2, Leaf } from "lucide-react";

const nav = [
  { to: "/app", label: "Dashboard", icon: Home },
  { to: "/app/meal-plan", label: "Meal Plan", icon: UtensilsCrossed },
  { to: "/app/cook", label: "Cook What You Have", icon: ChefHat },
  { to: "/app/articles", label: "Articles", icon: BookOpen },
  { to: "/app/plans", label: "Condition Plans", icon: HeartPulse },
  { to: "/app/progress", label: "Progress", icon: LineChart },
  { to: "/app/consult", label: "Consult", icon: Stethoscope },
  { to: "/app/community", label: "Naija Fit Talk", icon: Users },
  { to: "/app/profile", label: "Profile", icon: User2 },
];

export function AppShell() {
  const loc = useLocation();
  return (
    <div className="min-h-screen bg-background flex">
      <aside className="hidden lg:flex w-64 flex-col bg-sidebar text-sidebar-foreground p-5 sticky top-0 h-screen">
        <Link to="/" className="flex items-center gap-2 mb-8">
          <span className="h-9 w-9 rounded-xl gradient-warm grid place-items-center">
            <Leaf className="h-5 w-5 text-ink" />
          </span>
          <span className="font-display text-xl">NutriLife</span>
        </Link>
        <nav className="flex flex-col gap-1 text-sm">
          {nav.map((n) => {
            const active = loc.pathname === n.to;
            return (
              <Link
                key={n.to}
                to={n.to}
                className={`flex items-center gap-3 rounded-xl px-3 py-2.5 transition ${
                  active ? "bg-sidebar-primary text-sidebar-primary-foreground font-semibold" : "hover:bg-sidebar-accent"
                }`}
              >
                <n.icon className="h-4 w-4" /> {n.label}
              </Link>
            );
          })}
        </nav>
        <div className="mt-auto rounded-2xl bg-sidebar-accent p-4 text-xs">
          <p className="font-semibold mb-1 text-sidebar-primary">Go Premium</p>
          <p className="opacity-80">Unlock 30-day condition plans & expert consults.</p>
        </div>
      </aside>

      {/* Mobile top bar */}
      <div className="lg:hidden fixed top-0 inset-x-0 z-30 bg-sidebar text-sidebar-foreground px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="h-8 w-8 rounded-lg gradient-warm grid place-items-center"><Leaf className="h-4 w-4 text-ink" /></span>
          <span className="font-display">NutriLife</span>
        </Link>
      </div>

      <main className="flex-1 min-w-0 lg:pt-0 pt-14 pb-24 lg:pb-0">
        <Outlet />
      </main>

      {/* Mobile bottom nav */}
      <nav className="lg:hidden fixed bottom-0 inset-x-0 z-30 bg-sidebar text-sidebar-foreground border-t border-sidebar-border grid grid-cols-5 text-[10px]">
        {nav.slice(0, 5).map((n) => {
          const active = loc.pathname === n.to;
          return (
            <Link key={n.to} to={n.to} className={`flex flex-col items-center gap-1 py-2 ${active ? "text-sidebar-primary" : ""}`}>
              <n.icon className="h-4 w-4" />
              <span>{n.label.split(" ")[0]}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}

export function PageHeader({ title, sub }: { title: string; sub?: string }) {
  return (
    <div className="px-6 lg:px-10 pt-8 lg:pt-10 pb-6 border-b border-border bg-gradient-to-b from-cream to-background">
      <h1 className="font-display text-3xl lg:text-4xl">{title}</h1>
      {sub && <p className="mt-2 text-muted-foreground max-w-2xl">{sub}</p>}
    </div>
  );
}
