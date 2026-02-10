import { Button } from "@/components/ui/button";
import { Heart, Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="#" className="flex items-center gap-2">
          <Heart className="h-6 w-6 text-primary fill-primary" />
          <span className="font-display text-xl font-bold text-foreground">NourishAll</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a href="#mission" className="text-muted-foreground hover:text-foreground transition-colors font-medium">Mission</a>
          <a href="#impact" className="text-muted-foreground hover:text-foreground transition-colors font-medium">Our Impact</a>
          <a href="#get-involved" className="text-muted-foreground hover:text-foreground transition-colors font-medium">Get Involved</a>
          <Button variant="hero" size="lg" asChild>
            <a href="#donate">Donate Now</a>
          </Button>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background border-b border-border px-4 pb-4 flex flex-col gap-3">
          <a href="#mission" className="text-muted-foreground hover:text-foreground py-2" onClick={() => setOpen(false)}>Mission</a>
          <a href="#impact" className="text-muted-foreground hover:text-foreground py-2" onClick={() => setOpen(false)}>Our Impact</a>
          <a href="#get-involved" className="text-muted-foreground hover:text-foreground py-2" onClick={() => setOpen(false)}>Get Involved</a>
          <Button variant="hero" size="lg" asChild>
            <a href="#donate">Donate Now</a>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
