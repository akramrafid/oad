import React from "react";
import { Button } from "@/components/ui/button";
import { GitBranch, Instagram, Search, MousePointer, LineChart, ChevronRight, Zap } from "lucide-react";

export const Roadmap = () => {
  const phases = [
    {
      id: 1,
      title: "Foundation Building",
      description: "Setting up the core infrastructure for your business growth",
      timeline: "Months 1-2",
      services: [
        { name: "Brand Identity Development", icon: <GitBranch size={18} /> },
        { name: "Website Design & Development", icon: <MousePointer size={18} /> },
        { name: "Social Media Setup", icon: <Instagram size={18} /> },
        { name: "SEO Foundation", icon: <Search size={18} /> },
      ],
    },
    {
      id: 2,
      title: "Content Strategy",
      description: "Creating engaging content that resonates with your audience",
      timeline: "Months 2-4",
      services: [
        { name: "Content Calendar Creation", icon: <GitBranch size={18} /> },
        { name: "Video Production", icon: <MousePointer size={18} /> },
        { name: "Blog Writing & Strategy", icon: <Instagram size={18} /> },
        { name: "Email Marketing Setup", icon: <Search size={18} /> },
      ],
    },
    {
      id: 3,
      title: "Growth Engine",
      description: "Accelerating your business with targeted marketing strategies",
      timeline: "Months 4-6",
      services: [
        { name: "PPC Campaign Setup", icon: <GitBranch size={18} /> },
        { name: "Social Media Advertising", icon: <MousePointer size={18} /> },
        { name: "Conversion Optimization", icon: <Instagram size={18} /> },
        { name: "Analytics & Reporting", icon: <LineChart size={18} /> },
      ],
    },
    {
      id: 4,
      title: "Automation & Scaling",
      description: "Streamlining operations to support sustainable growth",
      timeline: "Months 6+",
      services: [
        { name: "Marketing Automation", icon: <Zap size={18} /> },
        { name: "CRM Integration", icon: <MousePointer size={18} /> },
        { name: "Advanced Analytics", icon: <LineChart size={18} /> },
        { name: "Growth Strategy Consulting", icon: <ChevronRight size={18} /> },
      ],
    },
  ];

  return (
    <section id="roadmap" className="py-20 relative bg-gradient-to-b from-background to-background/95">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-playfair mb-4">Your Business Growth Roadmap</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A strategic plan to take your business from concept to growth, 
            with our full-service digital expertise supporting you every step of the way.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-[50%] top-10 bottom-0 w-1 bg-primary/20 hidden lg:block"></div>
          
          <div className="space-y-12 lg:space-y-24 relative">
            {phases.map((phase, index) => (
              <div key={phase.id} className="lg:flex items-center">
                {/* Timeline Point */}
                <div className="hidden lg:block absolute left-[50%] transform -translate-x-1/2 w-10 h-10 bg-primary rounded-full border-4 border-background z-10"></div>
                
                {/* Content */}
                <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-20 lg:text-right' : 'lg:pl-20 lg:ml-auto'}`}>
                  <div className="bg-card rounded-xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="mb-2 inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                      {phase.timeline}
                    </div>
                    <h3 className="text-2xl font-semibold mb-3">Phase {phase.id}: {phase.title}</h3>
                    <p className="text-muted-foreground mb-6">
                      {phase.description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {phase.services.map((service, serviceIndex) => (
                        <div key={serviceIndex} className="flex items-center gap-2">
                          <div className="p-2 rounded-full bg-primary/10">
                            {service.icon}
                          </div>
                          <span className="text-sm">{service.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <Button className="bg-primary text-white hover:bg-primary/90 rounded-md px-6 py-6">
            Schedule Your Strategy Call
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            Let's discuss which phase your business needs to focus on next
          </p>
        </div>
      </div>
    </section>
  );
};
