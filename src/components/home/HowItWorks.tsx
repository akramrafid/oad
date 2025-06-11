
import { Code, Gear, Lightning } from "@phosphor-icons/react";

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="section-padding relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-500/10 via-indigo-500/5 to-transparent rounded-full filter blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-500/10 via-cyan-500/5 to-transparent rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-light tracking-tighter mb-6">
              Everything you need<br />
              for exceptional digital presence.
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 animate-on-scroll">
            <div className="glass border border-white/5 p-8 rounded-xl">
              <div className="mb-6 p-3 rounded-full bg-gradient-to-br from-white/10 to-transparent w-12 h-12 flex items-center justify-center border border-white/10">
                <Code size={24} weight="light" className="text-primary" />
              </div>
              <h3 className="font-inter text-xl font-medium mb-3">Simplified project management.</h3>
              <p className="text-sm text-foreground/60">Your projects, insights, and deliverables are at the tip of your fingers.</p>
              
              <div className="mt-8">
                <div className="flex items-center space-x-4">
                  <svg viewBox="0 0 100 100" width="100" height="100" className="opacity-70 hover:opacity-100 transition-opacity">
                    <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="1" className="text-white/20" />
                    <circle cx="30" cy="50" r="10" fill="currentColor" className="text-primary/60" />
                    <circle cx="70" cy="50" r="10" fill="currentColor" className="text-indigo-400/60" />
                  </svg>
                </div>
              </div>
            </div>
            
            <div className="glass border border-white/5 p-8 rounded-xl">
              <h3 className="font-inter text-6xl font-light mb-3 text-primary">100%</h3>
              <p className="text-sm text-foreground/60">Client satisfaction</p>
              
              <div className="mt-8 grid grid-cols-3 gap-2">
                <div className="flex items-center justify-center p-3 bg-white/5 rounded-md">
                  <span className="text-primary">UI</span>
                </div>
                <div className="flex items-center justify-center p-3 bg-white/5 rounded-md">
                  <span className="text-primary">UX</span>
                </div>
                <div className="flex items-center justify-center p-3 bg-white/5 rounded-md">
                  <span className="text-primary">DEV</span>
                </div>
              </div>
            </div>
            
            <div className="glass border border-white/5 p-8 rounded-xl">
              <h3 className="font-inter text-6xl font-light mb-3">15,000<span className="text-primary">+</span></h3>
              <p className="text-sm text-foreground/60">Projects completed</p>
              
              <div className="mt-8">
                <a href="#waitlist" className="btn-neumorphic text-xs uppercase tracking-wider inline-flex items-center justify-center w-full">
                  Get on waitlist
                </a>
              </div>
            </div>
          </div>
          
          <div className="mt-16 text-center animate-on-scroll">
            <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-light tracking-tighter mb-6">
              <span className="text-gradient">Request to access the future —</span><br />
              Join the waitlist now!
            </h2>
            <div className="mt-8">
              <a href="#contact" className="btn-neumorphic text-xs uppercase tracking-wider">
                Apply for the waitlist
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
