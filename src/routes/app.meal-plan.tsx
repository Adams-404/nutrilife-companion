import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/AppShell";
import { meals } from "@/lib/mock-data";
import { useState } from "react";

const modes = ["Weight Loss", "Weight Gain", "Fitness", "Wellness"] as const;
const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export const Route = createFileRoute("/app/meal-plan")({
  head: () => ({ meta: [{ title: "Meal Plan · NutriLife" }] }),
  component: MealPlan,
});

function MealPlan() {
  const [mode, setMode] = useState<(typeof modes)[number]>("Weight Loss");
  const [day, setDay] = useState("Mon");
  return (
    <>
      <PageHeader title="Your daily timetable" sub="Morning, afternoon, night — with snack & water reminders woven in." />
      <div className="p-6 lg:p-10 space-y-6">
        <div className="flex flex-wrap gap-3">
          {modes.map((m) => (
            <button key={m} onClick={() => setMode(m)}
              className={`rounded-full px-4 py-2 text-sm border transition ${
                mode === m ? "bg-primary text-primary-foreground border-primary" : "bg-card border-border hover:border-primary"
              }`}>{m}</button>
          ))}
        </div>

        <div className="flex gap-2 overflow-x-auto pb-2">
          {days.map((d) => (
            <button key={d} onClick={() => setDay(d)}
              className={`min-w-16 rounded-2xl py-3 text-sm font-medium ${
                day === d ? "bg-ink text-cream" : "bg-card border border-border"
              }`}>{d}</button>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-4">
          {meals.map((m) => (
            <div key={m.id} className="bg-card border border-border rounded-3xl overflow-hidden">
              {m.image && <img src={m.image} alt="" className="w-full h-44 object-cover" loading="lazy" />}
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <p className="text-xs uppercase tracking-widest text-accent">{m.slot} · {m.time}</p>
                  <span className="text-xs bg-secondary px-2 py-0.5 rounded-full">{m.kcal} kcal</span>
                </div>
                <h3 className="font-display text-xl mt-2">{m.name}</h3>
                <p className="text-sm text-muted-foreground mt-2">💡 {m.tip}</p>
                <div className="mt-3 flex gap-2 flex-wrap">
                  {m.tags.map((t) => <span key={t} className="text-[10px] uppercase tracking-wider bg-leaf/10 text-leaf rounded-full px-2 py-0.5">{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
