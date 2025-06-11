
import { ShieldCheck, Code, Rocket, Zap, Users, Target, ArrowRight, CheckCircle } from "lucide-react";
import { useState } from "react";
import { LeadCaptureModal } from "./LeadCaptureModal";

export const Features = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const features = [
    {
      title: "AI-Powered Automation",
      description: "Reduce manual work by 80% with intelligent automation that learns and adapts to your business processes.",
      icon: Zap,
      color: "from-primary to-blue-600",
      benefit: "Save 20+ hours/week",
      cta: "See ROI Calculator"
    },
    {
      title: "Expert Development Team",
      description: "Senior developers with 10+ years experience building scalable solutions for Fortune 500 companies.",
      icon: Code,
      color: "from-blue-500 to-cyan-500",
      benefit: "99.9% Uptime Guarantee",
      cta: "View Portfolio"
    },
    {
      title: "Strategic Growth Planning",
      description: "Data-driven strategies that have helped businesses achieve 300% revenue growth within 12 months.",
      icon: Rocket,
      color: "from-green-500 to-emerald-500",
      benefit: "3x Revenue Growth",
      cta: "Get Strategy Session"
    },
    {
      title: "Quality Assurance",
      description: "Rigorous testing protocols ensure zero bugs and perfect performance across all devices.",
      icon: ShieldCheck,
      color: "from-orange-500 to-red-500",
      benefit: "Zero Bug Guarantee",
      cta: "See Quality Process"
    },
    {
      title: "24/7 Priority Support",
      description: "Dedicated account manager and instant support response for all your business needs.",
      icon: Users,
      color: "from-indigo-500 to-primary",
      benefit: "<2min Response Time",
      cta: "Talk to Support"
    },
    {
      title: "Measurable Results",
      description: "Real-time analytics and reporting showing exactly how our solutions impact your bottom line.",
      icon: Target,
      color: "from-teal-500 to-blue-500",
      benefit: "Track Every Dollar",
      cta: "View Live Demo"
    }
  ];

  return (
    <section id="features" className="section-padding bg-muted/30">
      <div className="container mx-auto">
        {/* Header with Social Proof */}
        <div className="text-center mb-16 animate-on-scroll">
          <div className="inline-flex items-center gap-2 bg-green-100 dark:bg-green-900/30 px-4 py-2 rounded-full mb-4">
            <CheckCircle size={16} className="text-green-500" />
            <span className="text-sm font-medium text-green-700 dark:text-green-300">
              Trusted by 250+ Growing Businesses
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Why Smart Businesses Choose <span className="gradient-text">One Arc Digital</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto mb-8">
            Join successful companies that have transformed their operations and increased revenue by 300% with our proven solutions.
          </p>

          {/* Results Banner */}
          <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 max-w-4xl mx-auto mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-primary">300%</div>
                <div className="text-sm text-foreground/70">Average Revenue Increase</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">30 Days</div>
                <div className="text-sm text-foreground/70">Time to See Results</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">98%</div>
                <div className="text-sm text-foreground/70">Client Retention Rate</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-on-scroll">
          {features.map((feature, index) => (
            <div key={index} className="card-modern group hover:scale-105 transition-all duration-300 relative overflow-hidden">
              <div className="flex flex-col h-full">
                <div className={`mb-6 p-4 rounded-2xl bg-gradient-to-br ${feature.color} w-16 h-16 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow`}>
                  <feature.icon size={28} className="text-white" />
                </div>
                
                <h3 className="text-xl font-semibold mb-4 text-foreground group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-foreground/70 text-sm leading-relaxed flex-grow mb-4">
                  {feature.description}
                </p>

                {/* Benefit Highlight */}
                <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-3 mb-4">
                  <div className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
                    <span className="text-sm font-medium text-green-700 dark:text-green-300">
                      {feature.benefit}
                    </span>
                  </div>
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="w-full mt-auto flex items-center justify-center gap-2 text-primary hover:text-primary/80 font-medium text-sm transition-colors group/btn"
                >
                  {feature.cta}
                  <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-16 text-center animate-on-scroll">
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Ready to Join 250+ Successful Businesses?
            </h3>
            <p className="text-foreground/70 mb-6 max-w-2xl mx-auto">
              Get a free strategy session and discover how we can help you achieve 300% revenue growth in the next 12 months.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => setIsModalOpen(true)}
                className="btn-primary group text-lg px-8 py-4"
              >
                Get Free Strategy Session
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <div className="flex items-center gap-2 text-sm text-foreground/60">
                <CheckCircle size={16} className="text-green-500" />
                <span>No commitment • 30-min consultation • $497 value</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <LeadCaptureModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};
