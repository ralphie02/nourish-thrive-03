import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

const DonateSection = () => {
  return (
    <section id="donate" className="py-20 md:py-28 bg-muted">
      <div className="container mx-auto px-4 text-center max-w-2xl">
        <div className="h-16 w-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
          <Heart className="h-8 w-8 text-accent" />
        </div>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
          Help Us Nourish More Families
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed mb-10">
          Your donation directly funds meal-planning tools, community workshops, and resources that help families eat healthier on any budget.
        </p>
        <Button variant="hero" size="lg" className="text-lg px-12 py-6" asChild>
          <a href="https://www.paypal.com/donate" target="_blank" rel="noopener noreferrer">
            Donate Now
          </a>
        </Button>
        <p className="text-muted-foreground text-sm mt-4">
          Secure donation via PayPal. Every dollar makes a difference.
        </p>
      </div>
    </section>
  );
};

export default DonateSection;
