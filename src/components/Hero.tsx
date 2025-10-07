import { useState } from "react";
import { Search, MapPin, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import heroMap from "@/assets/hero-map.jpg";

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log("Searching for:", searchQuery);
      // Navigation logic would go here
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_hsl(217,91%,60%/0.08),_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_hsl(189,94%,43%/0.08),_transparent_50%)]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Hero Content */}
          <div className="text-center mb-12 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent border border-primary/20 mb-6">
              <Navigation className="w-4 h-4 text-primary animate-float" />
              <span className="text-sm font-medium text-accent-foreground">
                Next-Gen Indoor Navigation
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-fade-in">
              Navigate Indoors
              <br />
              With Precision
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in-up">
              Experience seamless indoor navigation with real-time pathfinding, voice assistance,
              and accessibility features designed for everyone.
            </p>

            {/* Search Bar */}
            <form
              onSubmit={handleSearch}
              className="max-w-2xl mx-auto mb-12 animate-scale-in"
            >
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity" />
                <div className="relative flex items-center bg-card border border-border rounded-2xl shadow-lg overflow-hidden">
                  <MapPin className="w-5 h-5 text-primary ml-6" />
                  <Input
                    type="text"
                    placeholder="Where do you want to go? (e.g., Room 4, Floor 3)"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="border-0 bg-transparent text-lg px-4 py-6 focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                  <Button
                    type="submit"
                    variant="hero"
                    size="lg"
                    className="m-2 rounded-xl"
                  >
                    <Search className="w-5 h-5 mr-2" />
                    Navigate
                  </Button>
                </div>
              </div>
            </form>
          </div>

          {/* Map Preview */}
          <div className="relative animate-scale-in" style={{ animationDelay: "0.2s" }}>
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 pointer-events-none" />
            <div className="relative rounded-3xl overflow-hidden border border-border shadow-2xl group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 mix-blend-overlay z-10" />
              <img
                src={heroMap}
                alt="Interactive Indoor Navigation Map"
                className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent z-20" />
              
              {/* Floating UI Elements */}
              <div className="absolute bottom-8 left-8 z-30 bg-card/95 backdrop-blur-sm rounded-2xl p-4 border border-border shadow-lg animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-card-foreground">Current Location</p>
                    <p className="text-xs text-muted-foreground">Main Entrance - Floor 1</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
