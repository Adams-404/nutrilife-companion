import egusi from "@/assets/dish-egusi.jpg";
import oats from "@/assets/dish-oats.jpg";
import tilapia from "@/assets/dish-tilapia.jpg";

export const meals = [
  { id: "m1", slot: "Morning", time: "7:30 AM", name: "Oats with banana, groundnut & honey", kcal: 380, image: oats, tip: "Slow-release carbs keep you full till noon.", tags: ["high-fiber", "heart"] },
  { id: "m2", slot: "Snack", time: "10:30 AM", name: "Sliced pawpaw + green tea", kcal: 120, image: null, tip: "Pawpaw aids digestion and is loaded with vitamin C.", tags: ["light"] },
  { id: "m3", slot: "Afternoon", time: "1:30 PM", name: "Grilled tilapia with boiled yam & ugu", kcal: 540, image: tilapia, tip: "Grill instead of frying — saves ~200 kcal.", tags: ["protein", "low-oil"] },
  { id: "m4", slot: "Snack", time: "4:30 PM", name: "Roasted groundnuts (small handful)", kcal: 170, image: null, tip: "Good fats. Stop at one fist-size portion.", tags: ["energy"] },
  { id: "m5", slot: "Night", time: "7:30 PM", name: "Egusi soup with wheat swallow", kcal: 460, image: egusi, tip: "Add extra ugu & reduce palm oil for a lighter bowl.", tags: ["traditional", "balanced"] },
];

export const localFoods = [
  { name: "Jollof Rice (1 cup)", kcal: 330, note: "Use less oil, more veg." },
  { name: "Eba (1 wrap)", kcal: 280, note: "Pair with vegetable soup." },
  { name: "Moi Moi (1 piece)", kcal: 190, note: "Protein-rich, low fat." },
  { name: "Tuwo Shinkafa", kcal: 250, note: "Best with miyan kuka." },
  { name: "Akara (3 pcs)", kcal: 220, note: "Bake instead of deep-fry." },
  { name: "Boiled Yam (200g)", kcal: 240, note: "Great pre-workout carb." },
  { name: "Ofada Rice (1 cup)", kcal: 290, note: "Lower GI than white rice." },
  { name: "Plantain (boiled, 1)", kcal: 180, note: "Rich in potassium." },
];

export const articles = [
  { id: "a1", title: "5 Naija foods that quietly lower blood pressure", category: "Hypertension", read: "4 min", excerpt: "From bitter leaf to garden eggs — the kitchen pharmacy you already own." },
  { id: "a2", title: "Sugar in your tea: the diabetes math", category: "Diabetes", read: "6 min", excerpt: "What two cubes a day really cost you over a year." },
  { id: "a3", title: "Why moringa earned the name 'miracle tree'", category: "Wellness", read: "5 min", excerpt: "Iron, calcium, antioxidants — and how to use it without overdoing it." },
  { id: "a4", title: "Healthy swaps for your favourite swallow", category: "Weight Loss", read: "3 min", excerpt: "Wheat, oat fufu, and unripe plantain flour — ranked." },
  { id: "a5", title: "The student's ₦1,000 daily healthy plate", category: "Budget", read: "7 min", excerpt: "Three meals, balanced, no shortcuts on nutrition." },
];

export const plans = [
  { id: "bp", title: "High Blood Pressure", days: 30, color: "spice", desc: "Low-sodium, potassium-rich Naija meals to ease the heart." },
  { id: "db", title: "Diabetes Friendly", days: 30, color: "leaf", desc: "Low-GI swallows, smart portions, balanced carbs." },
  { id: "wl", title: "Weight Loss", days: 7, color: "clay", desc: "Calorie-aware plates that still taste like home." },
  { id: "uw", title: "Healthy Weight Gain", days: 30, color: "honey", desc: "Calorie-dense, nutrient-rich meals for lean gain." },
  { id: "gw", title: "General Wellness", days: 7, color: "leaf", desc: "Everyday balance for energy and immunity." },
];

export const progressData = [
  { day: "Mon", weight: 78.4, kcal: 1980 },
  { day: "Tue", weight: 78.1, kcal: 2050 },
  { day: "Wed", weight: 77.9, kcal: 1890 },
  { day: "Thu", weight: 77.6, kcal: 1920 },
  { day: "Fri", weight: 77.5, kcal: 2010 },
  { day: "Sat", weight: 77.2, kcal: 1850 },
  { day: "Sun", weight: 76.9, kcal: 1780 },
];

export const experts = [
  { id: "e1", name: "Dr. Amaka Obi", role: "Clinical Dietician", years: 12, price: 7500, rating: 4.9, focus: ["Diabetes", "Hypertension"] },
  { id: "e2", name: "Coach Bilal Sani", role: "Sports Nutritionist", years: 8, price: 5500, rating: 4.8, focus: ["Weight Loss", "Fitness"] },
  { id: "e3", name: "Mrs. Funmi Adeleke", role: "Family Nutritionist", years: 15, price: 8000, rating: 5.0, focus: ["Pregnancy", "Children"] },
  { id: "e4", name: "Hauwa Bashir, RD", role: "Registered Dietician", years: 6, price: 5000, rating: 4.7, focus: ["Ramadan", "Wellness"] },
];

export const forumPosts = [
  { id: "p1", author: "Chinedu", handle: "@nedu_fit", time: "2h", body: "Day 14 of swapping eba for oat fufu — down 3kg and my energy is mad!", likes: 124, comments: 18 },
  { id: "p2", author: "Aisha", handle: "@aishaeats", time: "5h", body: "Made the moi moi recipe with less oil. Even my mum approved 😅", likes: 87, comments: 12 },
  { id: "p3", author: "Tobi", handle: "@coachtobi", time: "1d", body: "Reminder: water before food. Half a glass 20 mins before lunch = less overeating.", likes: 230, comments: 41 },
];

export const tips = [
  "Drink a glass of water before every meal.",
  "Swap white rice for ofada or brown rice twice this week.",
  "Walk 20 minutes after dinner.",
  "Snack on groundnuts, not biscuits.",
  "Add one extra handful of ugu to your soup today.",
];

export const recipeSuggestions = (ings: string[]) => {
  if (!ings.length) return [];
  return [
    {
      name: "Quick Veggie Jollof",
      uses: ings.slice(0, 4),
      remove: ["Reduce vegetable oil by half"],
      add: ["A handful of chopped ugu", "1 fresh tomato"],
      bestTime: "Lunch",
      kcal: 410,
    },
    {
      name: "Pepper Vegetable Stir-Fry",
      uses: ings.slice(0, 3),
      remove: ["No seasoning cubes — use ginger & garlic"],
      add: ["Crayfish for protein", "Squeeze of lime"],
      bestTime: "Dinner",
      kcal: 290,
    },
  ];
};
