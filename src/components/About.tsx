import { CheckCircle, Target, Lightbulb, Rocket } from "lucide-react";

const timeline = [
  {
    icon: Lightbulb,
    title: "The Vision",
    description: "Indoor navigation has always been challenging. We envisioned a solution that combines cutting-edge technology with intuitive design to help people navigate complex indoor spaces effortlessly.",
    year: "Concept",
  },
  {
    icon: Target,
    title: "The Problem",
    description: "Traditional indoor navigation systems rely on expensive infrastructure and provide limited accessibility. We set out to create a solution that works for everyone, everywhere.",
    year: "Analysis",
  },
  {
    icon: Rocket,
    title: "The Solution",
    description: "Our platform leverages advanced algorithms, real-time data, and AI to provide accurate indoor navigation with features like voice assistance, accessibility routes, and crowd management.",
    year: "Innovation",
  },
  {
    icon: CheckCircle,
    title: "The Impact",
    description: "Transforming how people navigate shopping malls, hospitals, airports, and office buildings. Making indoor spaces accessible and easy to navigate for everyone.",
    year: "Success",
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-muted/30">
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_hsl(189,94%,43%/0.08),_transparent_60%)]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            About Our Project
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Revolutionizing indoor navigation with technology that puts users first.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary via-secondary to-primary hidden md:block" />

            <div className="space-y-12">
              {timeline.map((item, index) => {
                const Icon = item.icon;
                const isEven = index % 2 === 0;

                return (
                  <div
                    key={index}
                    className={`relative flex items-center ${
                      isEven ? "md:flex-row" : "md:flex-row-reverse"
                    } flex-col animate-fade-in-up`}
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    {/* Content Card */}
                    <div className={`w-full md:w-5/12 ${isEven ? "md:pr-12" : "md:pl-12"}`}>
                      <div className="group relative bg-card border border-border rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        
                        <div className="relative">
                          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r ${
                            isEven ? "from-primary to-secondary" : "from-secondary to-primary"
                          } mb-4`}>
                            <span className="text-xs font-bold text-primary-foreground">
                              {item.year}
                            </span>
                          </div>

                          <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                            {item.title}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Center Icon */}
                    <div className="relative flex items-center justify-center my-4 md:my-0">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg z-10 animate-glow">
                        <Icon className="w-8 h-8 text-primary-foreground" />
                      </div>
                    </div>

                    {/* Spacer for alignment */}
                    <div className="hidden md:block w-5/12" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
