import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/AppShell";
import { useState, useMemo } from "react";

export const Route = createFileRoute("/app/profile")({
  head: () => ({ meta: [{ title: "Profile · NutriLife" }] }),
  component: Profile,
});

function Profile() {
  const [age, setAge] = useState(28);
  const [weight, setWeight] = useState(76.9);
  const [height, setHeight] = useState(168);
  const [gender, setGender] = useState("Female");
  const [goal, setGoal] = useState("Lose weight");

  const bmi = useMemo(() => {
    const h = height / 100;
    return weight / (h * h);
  }, [weight, height]);

  const bmiLabel =
    bmi < 18.5 ? { l: "Underweight", c: "text-honey" } :
    bmi < 25 ? { l: "Normal", c: "text-leaf" } :
    bmi < 30 ? { l: "Overweight", c: "text-clay" } :
    { l: "Obese", c: "text-spice" };

  return (
    <>
      <PageHeader title="Your profile" sub="Personalize your plan. We use this to tune meals, portions and reminders." />
      <div className="p-6 lg:p-10 grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-card border border-border rounded-3xl p-6 space-y-5">
          <Field label="Age">
            <input type="number" value={age} onChange={(e) => setAge(+e.target.value)} className="w-full rounded-xl bg-secondary px-4 py-3 outline-none focus:ring-2 ring-primary" />
          </Field>
          <div className="grid grid-cols-2 gap-4">
            <Field label="Weight (kg)">
              <input type="number" step="0.1" value={weight} onChange={(e) => setWeight(+e.target.value)} className="w-full rounded-xl bg-secondary px-4 py-3 outline-none focus:ring-2 ring-primary" />
            </Field>
            <Field label="Height (cm)">
              <input type="number" value={height} onChange={(e) => setHeight(+e.target.value)} className="w-full rounded-xl bg-secondary px-4 py-3 outline-none focus:ring-2 ring-primary" />
            </Field>
          </div>
          <Field label="Gender">
            <div className="flex gap-2">
              {["Female", "Male", "Other"].map((g) => (
                <button key={g} onClick={() => setGender(g)} className={`flex-1 rounded-xl py-3 text-sm border ${gender === g ? "bg-primary text-primary-foreground border-primary" : "bg-card border-border"}`}>{g}</button>
              ))}
            </div>
          </Field>
          <Field label="Health goal">
            <div className="grid grid-cols-2 gap-2">
              {["Lose weight", "Gain weight", "Maintain fitness", "Manage condition"].map((g) => (
                <button key={g} onClick={() => setGoal(g)} className={`rounded-xl py-3 text-sm border ${goal === g ? "bg-ink text-cream border-ink" : "bg-card border-border"}`}>{g}</button>
              ))}
            </div>
          </Field>
          <button className="rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-medium">Save profile</button>
        </div>

        <div className="bg-ink text-cream rounded-3xl p-6 h-fit">
          <p className="text-xs uppercase tracking-widest text-honey">Your BMI</p>
          <p className="font-display text-6xl mt-3">{bmi.toFixed(1)}</p>
          <p className={`mt-1 ${bmiLabel.c}`}>{bmiLabel.l}</p>
          <div className="mt-6 h-2 rounded-full bg-cream/20 overflow-hidden">
            <div className="h-full gradient-warm" style={{ width: `${Math.min(100, (bmi / 40) * 100)}%` }} />
          </div>
          <p className="text-xs opacity-70 mt-4">BMI is a starting point — your plan adapts as you log meals.</p>
        </div>
      </div>
    </>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-widest text-muted-foreground">{label}</span>
      <div className="mt-2">{children}</div>
    </label>
  );
}
