import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/AppShell";
import { forumPosts } from "@/lib/mock-data";
import { Heart, MessageCircle, Share2 } from "lucide-react";

export const Route = createFileRoute("/app/community")({
  head: () => ({ meta: [{ title: "Naija Fit Talk · NutriLife" }] }),
  component: Community,
});

function Community() {
  return (
    <>
      <PageHeader title="Naija Fit Talk" sub="Share meals, wins, and recipes with people on the same journey." />
      <div className="p-6 lg:p-10 max-w-2xl mx-auto space-y-4">
        <div className="bg-card border border-border rounded-3xl p-5">
          <textarea placeholder="What did you eat today? Share with the fam..." className="w-full bg-transparent outline-none resize-none text-sm" rows={3} />
          <div className="flex justify-end">
            <button className="rounded-full bg-primary text-primary-foreground px-5 py-2 text-sm">Post</button>
          </div>
        </div>

        {forumPosts.map((p) => (
          <article key={p.id} className="bg-card border border-border rounded-3xl p-5">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full gradient-warm grid place-items-center font-display text-ink">{p.author[0]}</div>
              <div>
                <p className="font-medium">{p.author} <span className="text-muted-foreground text-xs font-normal">{p.handle} · {p.time}</span></p>
              </div>
            </div>
            <p className="mt-3">{p.body}</p>
            <div className="mt-4 flex gap-6 text-xs text-muted-foreground">
              <button className="inline-flex items-center gap-1 hover:text-spice"><Heart className="h-4 w-4" /> {p.likes}</button>
              <button className="inline-flex items-center gap-1 hover:text-leaf"><MessageCircle className="h-4 w-4" /> {p.comments}</button>
              <button className="inline-flex items-center gap-1 hover:text-accent"><Share2 className="h-4 w-4" /></button>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
