import { Apple, Users, ShieldCheck, ChefHat } from "lucide-react";

const pillars = [
  {
    icon: Apple,
    title: "Informed Food Choices",
    description: "Offering tools to plan meals, understand nutrient content, and manage grocery needs cost‑effectively.",
  },
  {
    icon: Users,
    title: "Community Health",
    description: "Connecting families with local food sources like farmers' markets and community vendors.",
  },
  {
    icon: ShieldCheck,
    title: "Child Nutrition",
    description: "Preventing nutrition‑related health issues by helping families plan balanced diets for children.",
  },
  {
    icon: ChefHat,
    title: "Accessible Cooking",
    description: "Reducing barriers to healthy home cooking with accessible digital platforms and resources.",
  },
];

const MissionSection = () => {
  return (
    <section id="mission" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-accent font-semibold uppercase tracking-wider text-sm mb-3">Our Mission</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            Food Literacy for Every Family
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            We believe that understanding food is the foundation of a healthy life. Our four pillars guide everything we do.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="bg-card rounded-xl p-8 border border-border hover:shadow-lg transition-shadow group"
            >
              <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <pillar.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">{pillar.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
