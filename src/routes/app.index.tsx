import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/AppShell";
import { meals, tips, progressData } from "@/lib/mock-data";
import { Flame, Droplets, Footprints, TrendingDown, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/app/")({
  head: () => ({ meta: [{ title: "Dashboard · NutriLife" }] }),
  component: Dashboard,
});

function Dashboard() {
  const today = meals.slice(0, 3);
  const totalKcal = meals.reduce((a, m) => a + m.kcal, 0);
  return (
    <>
      <PageHeader title="Sannu Aisha 👋" sub="Here's your plan for today. Small wins, every meal." />
      <div className="p-6 lg:p-10 space-y-8">
        {/* Stat cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { i: Flame, l: "Calories today", v: `${totalKcal}`, s: "of 2,000 goal", c: "bg-spice/10 text-spice" },
            { i: Droplets, l: "Water", v: "6 / 8", s: "cups today", c: "bg-leaf/10 text-leaf" },
            { i: Footprints, l: "Steps", v: "7,420", s: "+12% vs yesterday", c: "bg-honey/20 text-clay" },
            { i: TrendingDown, l: "Weight", v: "76.9 kg", s: "-1.5kg this week", c: "bg-clay/10 text-clay" },
          ].map((s) => (
            <div key={s.l} className="bg-card border border-border rounded-2xl p-5">
              <div className={`h-10 w-10 rounded-xl grid place-items-center ${s.c}`}><s.i className="h-5 w-5" /></div>
              <p className="mt-4 text-xs uppercase tracking-wider text-muted-foreground">{s.l}</p>
              <p className="font-display text-3xl mt-1">{s.v}</p>
              <p className="text-xs text-muted-foreground mt-1">{s.s}</p>
            </div>
          ))}
        </div>

        {/* Today's meals + tips */}
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="font-display text-2xl">Today's plan</h2>
              <Link to="/app/meal-plan" className="text-sm text-accent inline-flex items-center gap-1">See full week <ArrowRight className="h-3 w-3" /></Link>
            </div>
            <div className="space-y-3">
              {today.map((m) => (
                <div key={m.id} className="bg-card border border-border rounded-2xl p-4 flex gap-4 items-center">
                  {m.image ? (
                    <img src={m.image} alt="" className="h-20 w-20 rounded-xl object-cover" loading="lazy" />
                  ) : (
                    <div className="h-20 w-20 rounded-xl gradient-warm grid place-items-center text-ink font-display">{m.slot[0]}</div>
                  )}
                  <div className="flex-1 min-w-0">
                    <p className="text-xs uppercase tracking-wider text-accent">{m.slot} · {m.time}</p>
                    <p className="font-medium mt-1 truncate">{m.name}</p>
                    <p className="text-xs text-muted-foreground mt-1">{m.tip}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-display text-xl">{m.kcal}</p>
                    <p className="text-[10px] uppercase text-muted-foreground">kcal</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <div className="bg-ink text-cream rounded-2xl p-6">
              <p className="text-xs uppercase tracking-widest text-honey">Tip of the day</p>
              <p className="font-display text-2xl mt-3 leading-snug">{tips[0]}</p>
              <p className="text-xs opacity-70 mt-4">Tap to mark done — keep your streak alive.</p>
            </div>
            <div className="bg-card border border-border rounded-2xl p-5">
              <p className="text-xs uppercase tracking-widest text-muted-foreground">Week at a glance</p>
              <div className="mt-4 flex items-end gap-2 h-32">
                {progressData.map((d) => {
                  const h = ((d.kcal - 1600) / 600) * 100;
                  return (
                    <div key={d.day} className="flex-1 flex flex-col items-center gap-1">
                      <div className="w-full rounded-t-md bg-gradient-to-t from-leaf to-honey" style={{ height: `${h}%` }} />
                      <span className="text-[10px] text-muted-foreground">{d.day}</span>
                    </div>
                  );
                })}
              </div>
              <Link to="/app/progress" className="mt-4 inline-flex text-sm text-accent items-center gap-1">Open progress <ArrowRight className="h-3 w-3" /></Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
