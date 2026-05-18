import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/AppShell";
import { experts } from "@/lib/mock-data";
import { Star, Video, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/app/consult")({
  head: () => ({ meta: [{ title: "Expert Consult · NutriLife" }] }),
  component: Consult,
});

function Consult() {
  return (
    <>
      <PageHeader title="Talk to a real dietician" sub="Chat or video calls with verified Nigerian nutrition experts. Book inside the app." />
      <div className="p-6 lg:p-10 grid md:grid-cols-2 gap-5">
        {experts.map((e) => (
          <div key={e.id} className="bg-card border border-border rounded-3xl p-6">
            <div className="flex items-start gap-4">
              <div className="h-16 w-16 rounded-2xl gradient-warm grid place-items-center font-display text-2xl text-ink">
                {e.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
              </div>
              <div className="flex-1">
                <h3 className="font-display text-xl">{e.name}</h3>
                <p className="text-sm text-muted-foreground">{e.role} · {e.years} yrs</p>
                <div className="flex items-center gap-1 mt-1 text-xs">
                  <Star className="h-3 w-3 fill-honey text-honey" /> {e.rating} · {e.focus.join(", ")}
                </div>
              </div>
              <p className="font-display text-lg text-accent">₦{e.price.toLocaleString()}</p>
            </div>
            <div className="mt-5 flex gap-2">
              <button className="flex-1 rounded-full bg-primary text-primary-foreground py-2 text-sm inline-flex items-center justify-center gap-2"><MessageCircle className="h-4 w-4" /> Chat</button>
              <button className="flex-1 rounded-full border border-border py-2 text-sm inline-flex items-center justify-center gap-2"><Video className="h-4 w-4" /> Video call</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
