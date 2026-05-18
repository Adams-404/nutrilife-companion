import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/AppShell";
import { progressData } from "@/lib/mock-data";

export const Route = createFileRoute("/app/progress")({
  head: () => ({ meta: [{ title: "Progress · NutriLife" }] }),
  component: Progress,
});

function Progress() {
  const max = Math.max(...progressData.map((d) => d.weight));
  const min = Math.min(...progressData.map((d) => d.weight));
  const diff = progressData[0].weight - progressData[progressData.length - 1].weight;

  // Build line points
  const w = 600, h = 200;
  const pts = progressData.map((d, i) => {
    const x = (i / (progressData.length - 1)) * w;
    const y = h - ((d.weight - min) / (max - min || 1)) * h;
    return `${x},${y}`;
  }).join(" ");

  return (
    <>
      <PageHeader title="Your progress" sub={`You've lost ${diff.toFixed(1)}kg this week 🎉 Keep the rhythm.`} />
      <div className="p-6 lg:p-10 space-y-8">
        <div className="grid md:grid-cols-3 gap-4">
          {[
            ["Current weight", "76.9 kg"],
            ["Avg daily kcal", "1,925"],
            ["Streak", "14 days"],
          ].map(([l, v]) => (
            <div key={l} className="bg-card border border-border rounded-2xl p-5">
              <p className="text-xs uppercase tracking-widest text-muted-foreground">{l}</p>
              <p className="font-display text-3xl mt-2">{v}</p>
            </div>
          ))}
        </div>

        <div className="bg-card border border-border rounded-3xl p-6">
          <h2 className="font-display text-xl">Weight (this week)</h2>
          <svg viewBox={`0 0 ${w} ${h + 30}`} className="w-full mt-4">
            <polyline points={pts} fill="none" stroke="var(--leaf)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            {progressData.map((d, i) => {
              const x = (i / (progressData.length - 1)) * w;
              const y = h - ((d.weight - min) / (max - min || 1)) * h;
              return (
                <g key={d.day}>
                  <circle cx={x} cy={y} r="5" fill="var(--clay)" />
                  <text x={x} y={h + 22} textAnchor="middle" fontSize="11" fill="var(--muted-foreground)">{d.day}</text>
                </g>
              );
            })}
          </svg>
        </div>

        <div className="bg-ink text-cream rounded-3xl p-6">
          <p className="text-xs uppercase tracking-widest text-honey">Weekly summary</p>
          <p className="font-display text-2xl mt-3 leading-snug">You ate 13,480 kcal, drank 52 cups of water, and stayed under your goal 5 of 7 days. Strong week, Aisha.</p>
        </div>
      </div>
    </>
  );
}
