const stats = [
  { value: "12,000+", label: "Families Supported" },
  { value: "85", label: "Community Partners" },
  { value: "250+", label: "Workshops Held" },
  { value: "30", label: "Cities Reached" },
];

const ImpactSection = () => {
  return (
    <section id="impact" className="py-20 md:py-28 bg-primary">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-primary-foreground/70 font-semibold uppercase tracking-wider text-sm mb-3">Our Impact</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
            Making a Real Difference
          </h2>
          <p className="text-primary-foreground/80 text-lg leading-relaxed">
            Together with our community, we're building a healthier future for families everywhere.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-2">{stat.value}</p>
              <p className="text-primary-foreground/70 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
