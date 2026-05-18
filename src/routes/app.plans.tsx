import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/AppShell";
import { plans, localFoods } from "@/lib/mock-data";

export const Route = createFileRoute("/app/plans")({
  head: () => ({ meta: [{ title: "Condition Plans · NutriLife" }] }),
  component: Plans,
});

const colorMap: Record<string, string> = {
  spice: "from-spice/20 to-spice/5 text-spice",
  leaf: "from-leaf/20 to-leaf/5 text-leaf",
  clay: "from-clay/20 to-clay/5 text-clay",
  honey: "from-honey/30 to-honey/5 text-clay",
};

function Plans() {
  return (
    <>
      <PageHeader title="Condition-based diet plans" sub="Pick a plan tailored to your health goal. Edit anytime as you progress." />
      <div className="p-6 lg:p-10 space-y-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {plans.map((p) => (
            <div key={p.id} className={`rounded-3xl p-6 bg-gradient-to-br ${colorMap[p.color]} border border-border`}>
              <p className="text-xs uppercase tracking-widest opacity-80">{p.days}-day plan</p>
              <h3 className="font-display text-2xl mt-2 text-foreground">{p.title}</h3>
              <p className="text-sm text-muted-foreground mt-3">{p.desc}</p>
              <button className="mt-6 rounded-full bg-ink text-cream px-5 py-2 text-sm">Start plan</button>
            </div>
          ))}
        </div>

        <section>
          <h2 className="font-display text-2xl mb-4">Local food database</h2>
          <div className="bg-card border border-border rounded-3xl overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-secondary text-secondary-foreground text-xs uppercase tracking-wider">
                <tr><th className="text-left p-4">Food</th><th className="text-left p-4">Calories</th><th className="text-left p-4">Note</th></tr>
              </thead>
              <tbody>
                {localFoods.map((f) => (
                  <tr key={f.name} className="border-t border-border">
                    <td className="p-4 font-medium">{f.name}</td>
                    <td className="p-4 text-leaf">{f.kcal} kcal</td>
                    <td className="p-4 text-muted-foreground">{f.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </>
  );
}
