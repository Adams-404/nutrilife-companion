import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Leaf, Sparkles, HeartPulse, ChefHat, LineChart, Users, Quote } from "lucide-react";
import hero from "@/assets/hero-foods.jpg";
import portrait from "@/assets/portrait-amaka.jpg";
import egusi from "@/assets/dish-egusi.jpg";
import oats from "@/assets/dish-oats.jpg";
import tilapia from "@/assets/dish-tilapia.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NutriLife — Eat Smart, Live Better" },
      { name: "description", content: "African-rooted nutrition app: personalized meal plans, smart recipes from what you have, condition-based diets, and expert consults." },
    ],
  }),
  component: Landing,
});

function Landing() {
  return (
    <div className="min-h-screen bg-background bg-grain">
      {/* Nav */}
      <header className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="h-9 w-9 rounded-xl gradient-warm grid place-items-center"><Leaf className="h-5 w-5 text-ink" /></span>
          <span className="font-display text-xl">NutriLife</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#features">Features</a>
          <a href="#culture">For Naija</a>
          <a href="#pricing">Pricing</a>
        </nav>
        <Link to="/app" className="rounded-full bg-primary text-primary-foreground px-5 py-2 text-sm font-medium inline-flex items-center gap-2">
          Open app <ArrowRight className="h-4 w-4" />
        </Link>
      </header>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 pt-8 lg:pt-12 pb-20 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-cream px-3 py-1 text-xs text-muted-foreground">
            <Sparkles className="h-3 w-3 text-accent" /> Built for African kitchens
          </span>
          <h1 className="mt-5 font-display text-5xl lg:text-7xl leading-[1.02] text-balance">
            Eat smart.<br />
            <span className="italic text-accent">Live better.</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl text-balance">
            NutriLife is your everyday nutrition companion — meal plans built around jollof, egusi, tuwo and the foods your family actually eats. Affordable. Personal. Rooted at home.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/app" className="rounded-full bg-primary text-primary-foreground px-6 py-3 font-medium inline-flex items-center gap-2">
              Start your plan <ArrowRight className="h-4 w-4" />
            </Link>
            <a href="#features" className="rounded-full border border-border bg-card px-6 py-3 font-medium">How it works</a>
          </div>
          <dl className="mt-10 grid grid-cols-3 gap-6 max-w-md">
            {[
              ["12k+", "active users"],
              ["350+", "local recipes"],
              ["98%", "stick with it"],
            ].map(([n, l]) => (
              <div key={l}>
                <dt className="font-display text-3xl">{n}</dt>
                <dd className="text-xs text-muted-foreground uppercase tracking-wide">{l}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="lg:col-span-5 relative">
          <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
            <img src={hero} alt="African healthy ingredients" className="w-full h-full object-cover" width={1536} height={1280} />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl shadow-xl p-4 max-w-[220px] border border-border">
            <p className="text-xs text-muted-foreground">Today's plate</p>
            <p className="font-display text-lg leading-tight">Grilled tilapia + yam & ugu</p>
            <p className="text-xs mt-1"><span className="font-semibold text-leaf">540 kcal</span> · balanced</p>
          </div>
          <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground rounded-2xl px-4 py-3 shadow-xl">
            <p className="text-xs opacity-80">Weekly</p>
            <p className="font-display text-2xl">-2.1kg</p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="bg-cream border-y border-border py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
            <div>
              <p className="text-xs uppercase tracking-widest text-accent">Everything you need</p>
              <h2 className="font-display text-4xl lg:text-5xl mt-2">A kitchen, a coach,<br />a community.</h2>
            </div>
            <p className="text-muted-foreground max-w-sm">Eleven tools built around how Africans actually shop, cook, and eat.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { i: ChefHat, t: "Cook What You Have", d: "Type what's in your kitchen — get a healthy recipe in seconds, with smart swaps." },
              { i: HeartPulse, t: "Condition-Based Plans", d: "7 & 30-day plans for hypertension, diabetes, weight goals and wellness." },
              { i: LineChart, t: "Progress Tracker", d: "Log meals & weight. See trends, get a weekly summary you'll actually read." },
              { i: Leaf, t: "Local Food Database", d: "Calories & health value for Tuwo, Eba, Egusi, Moi Moi, Jollof — and more." },
              { i: Sparkles, t: "Smart Reminders", d: "Meal times, water alerts, and motivation in Pidgin, Hausa, Yoruba or Igbo." },
              { i: Users, t: "Naija Fit Talk", d: "Share meals, wins, and tips with people on the same journey." },
            ].map((f) => (
              <div key={f.t} className="bg-card rounded-2xl p-6 border border-border hover:shadow-lg transition">
                <span className="inline-flex h-11 w-11 rounded-xl bg-secondary text-leaf items-center justify-center">
                  <f.i className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-display text-xl">{f.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture strip */}
      <section id="culture" className="py-20 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img src={egusi} alt="Egusi soup" className="rounded-2xl aspect-square object-cover" loading="lazy" />
              <img src={oats} alt="Oats bowl" className="rounded-2xl aspect-square object-cover mt-10" loading="lazy" />
              <img src={tilapia} alt="Grilled tilapia" className="rounded-2xl aspect-square object-cover" loading="lazy" />
              <img src={portrait} alt="Happy NutriLife user" className="rounded-2xl aspect-square object-cover mt-10" loading="lazy" />
            </div>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-accent">Rooted at home</p>
            <h2 className="font-display text-4xl lg:text-5xl mt-2 text-balance">
              Built with the foods, prices,<br />and rhythms of Naija life.
            </h2>
            <ul className="mt-8 space-y-4 text-sm">
              {[
                "Budget meals under ₦1,000 — eat well without stretching it.",
                "Suhur & Iftar plans during Ramadan, prayer-time aware.",
                "Herbal remedies — moringa, ginger, turmeric, honey.",
                "Campus Life Diet for students who cook on a hot plate.",
                "Offline mode for when the network plays up.",
              ].map((p) => (
                <li key={p} className="flex gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-accent shrink-0" /> {p}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-ink text-cream">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Quote className="mx-auto h-8 w-8 text-honey" />
          <p className="mt-6 font-display text-3xl lg:text-4xl leading-snug text-balance">
            "I lost 6kg in two months eating the same Naija food — just smarter portions and the plan NutriLife gave me. My BP is normal again."
          </p>
          <p className="mt-6 text-sm opacity-70">— Aisha, Kano</p>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-widest text-accent">Pricing</p>
          <h2 className="font-display text-4xl lg:text-5xl mt-2">Free to start. Premium when you're ready.</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {[
            { name: "Free", price: "₦0", desc: "Daily timetable, BMI, basic recipes.", cta: "Start free", highlight: false },
            { name: "Premium", price: "₦2,500/mo", desc: "30-day condition plans, full recipe AI, progress reports.", cta: "Go premium", highlight: true },
            { name: "Consult", price: "from ₦5,000", desc: "Chat or video with a registered dietician.", cta: "Browse experts", highlight: false },
          ].map((p) => (
            <div key={p.name} className={`rounded-3xl p-7 border ${p.highlight ? "bg-ink text-cream border-ink" : "bg-card border-border"}`}>
              <p className={`text-sm ${p.highlight ? "text-honey" : "text-muted-foreground"}`}>{p.name}</p>
              <p className="font-display text-4xl mt-2">{p.price}</p>
              <p className={`mt-3 text-sm ${p.highlight ? "opacity-80" : "text-muted-foreground"}`}>{p.desc}</p>
              <Link to="/app" className={`mt-6 inline-flex w-full justify-center rounded-full px-5 py-2.5 text-sm font-medium ${p.highlight ? "bg-honey text-ink" : "bg-primary text-primary-foreground"}`}>{p.cta}</Link>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-border py-10 text-center text-sm text-muted-foreground">
        <p>© 2026 NutriLife · Eat Smart, Live Better</p>
        <p className="mt-1 text-xs">Crafted by Adam Muhammad Kuri</p>
      </footer>
    </div>
  );
}
