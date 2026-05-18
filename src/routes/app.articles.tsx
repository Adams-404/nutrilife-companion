import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/AppShell";
import { articles } from "@/lib/mock-data";
import { useState } from "react";
import { Share2 } from "lucide-react";

const cats = ["All", "Hypertension", "Diabetes", "Wellness", "Weight Loss", "Budget"];

export const Route = createFileRoute("/app/articles")({
  head: () => ({ meta: [{ title: "Articles · NutriLife" }] }),
  component: Articles,
});

function Articles() {
  const [cat, setCat] = useState("All");
  const list = cat === "All" ? articles : articles.filter((a) => a.category === cat);
  return (
    <>
      <PageHeader title="Health tips & articles" sub="Short, practical reads — grouped by what matters to you." />
      <div className="p-6 lg:p-10 space-y-6">
        <div className="flex gap-2 flex-wrap">
          {cats.map((c) => (
            <button key={c} onClick={() => setCat(c)} className={`rounded-full px-4 py-2 text-sm border ${cat === c ? "bg-ink text-cream border-ink" : "bg-card border-border"}`}>{c}</button>
          ))}
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          {list.map((a) => (
            <article key={a.id} className="bg-card border border-border rounded-3xl p-6 hover:shadow-lg transition">
              <div className="flex items-center justify-between text-xs">
                <span className="bg-accent/10 text-accent rounded-full px-2 py-0.5">{a.category}</span>
                <span className="text-muted-foreground">{a.read} read</span>
              </div>
              <h3 className="font-display text-2xl mt-4 leading-tight">{a.title}</h3>
              <p className="text-sm text-muted-foreground mt-2">{a.excerpt}</p>
              <div className="mt-5 flex items-center justify-between">
                <button className="text-sm text-accent">Read article →</button>
                <button className="text-muted-foreground hover:text-foreground"><Share2 className="h-4 w-4" /></button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}
