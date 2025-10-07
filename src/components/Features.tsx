import { Navigation, Mic, Users, TrendingUp, Accessibility, Zap } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: Navigation,
    title: "Smart Indoor Navigation",
    description: "Real-time pathfinding algorithms guide you through complex indoor spaces with precision and efficiency.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Mic,
    title: "Voice Assistant",
    description: "Hands-free navigation with intelligent voice commands. Just speak your destination and we'll guide you there.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Users,
    title: "Crowd Heatmaps",
    description: "Avoid crowded areas with live occupancy data. Get the fastest route based on real-time traffic patterns.",
    gradient: "from-orange-500 to-red-500",
  },
  {
    icon: Accessibility,
    title: "Accessibility Routes",
    description: "Customized pathfinding for wheelchair users, elevators, and accessibility-friendly routes throughout buildings.",
    gradient: "from-green-500 to-teal-500",
  },
  {
    icon: TrendingUp,
    title: "Smart Route Optimization",
    description: "AI-powered route suggestions that adapt to building changes, events, and your personal preferences.",
    gradient: "from-indigo-500 to-blue-500",
  },
  {
    icon: Zap,
    title: "Instant Updates",
    description: "Real-time notifications about route changes, building updates, and emergency situations.",
    gradient: "from-yellow-500 to-orange-500",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_hsl(217,91%,60%/0.05),_transparent_70%)]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Powerful Features
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need for seamless indoor navigation, from smart pathfinding to accessibility features.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="group relative overflow-hidden border-border hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Gradient Background on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <CardHeader className="relative">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} p-3 mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <Icon className="w-full h-full text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative">
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>

                {/* Decorative Element */}
                <div className="absolute -bottom-16 -right-16 w-32 h-32 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
