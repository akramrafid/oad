
import { Check } from "@phosphor-icons/react";

interface PricingPlan {
  name: string;
  description: string;
  price: string;
  features: string[];
  isRecommended?: boolean;
  buttonText: string;
  buttonLink: string;
}

export const Pricing = () => {
  const plans: PricingPlan[] = [
    {
      name: "Free",
      description: "Essential features for individuals and small projects.",
      price: "$0",
      features: [
        "Basic website development",
        "1 page website",
        "Mobile responsive design",
        "1 revision round",
        "Basic SEO optimization",
        "7-day support"
      ],
      buttonText: "Start Free",
      buttonLink: "#contact"
    },
    {
      name: "Pro",
      description: "Comprehensive solutions for growing businesses.",
      price: "$99",
      features: [
        "Advanced website development",
        "Up to 5 pages",
        "Responsive design for all devices",
        "3 revision rounds",
        "Full SEO optimization",
        "Basic app development",
        "Video editing (up to 2 minutes)",
        "30-day support"
      ],
      isRecommended: true,
      buttonText: "Get Pro",
      buttonLink: "#contact"
    },
    {
      name: "Enterprise",
      description: "Custom solutions for established organizations.",
      price: "Custom",
      features: [
        "Premium website development",
        "Unlimited pages",
        "Fully responsive design",
        "Unlimited revisions",
        "Advanced SEO strategy",
        "Full app development",
        "AI automation integration",
        "Professional video editing",
        "Dedicated support team",
        "24/7 priority support"
      ],
      buttonText: "Contact Us",
      buttonLink: "#contact"
    }
  ];
  
  return (
    <section id="pricing" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <p className="text-sm uppercase tracking-wider text-primary mb-2">Pricing</p>
          <h2 className="text-3xl md:text-4xl font-light tracking-tighter mb-6">Choose Your Plan</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Flexible pricing options designed to meet your specific needs and budget.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-on-scroll">
          {plans.map((plan, index) => (
            <div key={index} className={`card-glass relative ${plan.isRecommended ? 'border border-primary/30' : ''}`}>
              {plan.isRecommended && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white text-xs py-1 px-3 rounded-full">
                  Recommended
                </div>
              )}
              <div className="p-6 md:p-8">
                <h3 className="text-xl font-medium mb-2">{plan.name}</h3>
                <p className="text-sm text-foreground/70 mb-6">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-3xl font-medium">{plan.price}</span>
                  {plan.name !== "Enterprise" && <span className="text-foreground/70">/month</span>}
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check size={20} weight="bold" className="text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a 
                  href={plan.buttonLink}
                  className={`w-full text-center py-3 rounded-lg transition-all duration-300 ${
                    plan.isRecommended 
                      ? 'bg-primary text-white hover:bg-primary/90' 
                      : 'neumorphic'
                  }`}
                >
                  {plan.buttonText}
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <p className="text-center text-sm text-foreground/60 mt-8 animate-on-scroll">
          All plans include secure hosting and technical maintenance. Need something specific?
          <a href="#contact" className="text-primary ml-1 hover:underline">Contact us</a> for custom solutions.
        </p>
      </div>
    </section>
  );
};
