import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-food.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImage} alt="Community gathered around fresh food" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/60" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center max-w-3xl">
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 animate-fade-up">
          Nourishing Communities Through Food Literacy
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/90 mb-10 font-body leading-relaxed animate-fade-up" style={{ animationDelay: "0.2s" }}>
          Empowering families to make informed food choices, plan nutritious meals, and build healthier lives — one plate at a time.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.4s" }}>
          <Button variant="hero" size="lg" className="text-lg px-10 py-6" asChild>
            <a href="#donate">Donate Today</a>
          </Button>
          <Button variant="hero-outline" size="lg" className="text-lg px-10 py-6 border-primary-foreground/80 text-primary-foreground hover:bg-primary-foreground/20 hover:text-primary-foreground" asChild>
            <a href="#mission">Learn More</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
