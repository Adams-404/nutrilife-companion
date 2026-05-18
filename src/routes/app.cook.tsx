import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/AppShell";
import { recipeSuggestions } from "@/lib/mock-data";
import { useState } from "react";
import { Sparkles, X, Plus, Bookmark, Share2 } from "lucide-react";

export const Route = createFileRoute("/app/cook")({
  head: () => ({ meta: [{ title: "Cook What You Have · NutriLife" }] }),
  component: Cook,
});

const suggested = ["Tomato", "Onion", "Pepper", "Egg", "Rice", "Spinach", "Plantain", "Yam", "Crayfish", "Garlic"];

function Cook() {
  const [items, setItems] = useState<string[]>(["Tomato", "Onion", "Pepper", "Rice"]);
  const [input, setInput] = useState("");
  const recipes = recipeSuggestions(items);

  const add = (v: string) => {
    const t = v.trim();
    if (t && !items.includes(t)) setItems([...items, t]);
    setInput("");
  };
  const remove = (v: string) => setItems(items.filter((i) => i !== v));

  return (
    <>
      <PageHeader title="Cook what you have" sub="Tell us what's in your kitchen. We'll cook up something healthy." />
      <div className="p-6 lg:p-10 space-y-8">
        <div className="bg-card border border-border rounded-3xl p-6">
          <div className="flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && add(input)}
              placeholder="Add an ingredient (e.g. tilapia)"
              className="flex-1 rounded-full bg-secondary px-5 py-3 text-sm outline-none focus:ring-2 ring-primary"
            />
            <button onClick={() => add(input)} className="rounded-full bg-primary text-primary-foreground px-5 py-3 text-sm inline-flex items-center gap-2"><Plus className="h-4 w-4" /> Add</button>
          </div>
          <div className="mt-4 flex gap-2 flex-wrap">
            {items.map((i) => (
              <span key={i} className="inline-flex items-center gap-1 bg-leaf/10 text-leaf rounded-full px-3 py-1 text-sm">
                {i}
                <button onClick={() => remove(i)}><X className="h-3 w-3" /></button>
              </span>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-4">Suggestions:</p>
          <div className="mt-2 flex gap-2 flex-wrap">
            {suggested.filter((s) => !items.includes(s)).map((s) => (
              <button key={s} onClick={() => add(s)} className="text-xs rounded-full border border-border bg-background px-3 py-1 hover:border-primary">+ {s}</button>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="h-4 w-4 text-accent" />
            <h2 className="font-display text-2xl">Smart suggestions</h2>
          </div>
          {recipes.length === 0 ? (
            <p className="text-muted-foreground">Add a few ingredients to see ideas.</p>
          ) : (
            <div className="grid lg:grid-cols-2 gap-4">
              {recipes.map((r) => (
                <div key={r.name} className="bg-card border border-border rounded-3xl p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-widest text-accent">Best for {r.bestTime.toLowerCase()}</p>
                      <h3 className="font-display text-2xl mt-1">{r.name}</h3>
                    </div>
                    <span className="text-xs bg-secondary px-2 py-0.5 rounded-full">{r.kcal} kcal</span>
                  </div>

                  <p className="text-xs uppercase tracking-wider text-muted-foreground mt-5">Uses</p>
                  <p className="text-sm mt-1">{r.uses.join(" · ")}</p>

                  <p className="text-xs uppercase tracking-wider text-spice mt-4">Cut down</p>
                  <ul className="text-sm mt-1 list-disc list-inside text-muted-foreground">{r.remove.map((x) => <li key={x}>{x}</li>)}</ul>

                  <p className="text-xs uppercase tracking-wider text-leaf mt-4">Add for nutrition</p>
                  <ul className="text-sm mt-1 list-disc list-inside text-muted-foreground">{r.add.map((x) => <li key={x}>{x}</li>)}</ul>

                  <div className="mt-5 flex gap-2">
                    <button className="rounded-full bg-primary text-primary-foreground px-4 py-2 text-sm inline-flex items-center gap-2"><Bookmark className="h-4 w-4" /> Save</button>
                    <button className="rounded-full border border-border px-4 py-2 text-sm inline-flex items-center gap-2"><Share2 className="h-4 w-4" /> Share</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
