import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 bg-foreground">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Heart className="h-5 w-5 text-accent fill-accent" />
            <span className="font-display text-lg font-bold text-primary-foreground">NourishAll</span>
          </div>
          <div className="flex gap-6 text-primary-foreground/60 text-sm">
            <a href="#mission" className="hover:text-primary-foreground transition-colors">Mission</a>
            <a href="#impact" className="hover:text-primary-foreground transition-colors">Impact</a>
            <a href="#donate" className="hover:text-primary-foreground transition-colors">Donate</a>
          </div>
          <p className="text-primary-foreground/40 text-sm">
            © 2026 NourishAll. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
