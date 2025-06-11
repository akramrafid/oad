
export const Mission = () => {
  return (
    <section id="mission" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/5 z-0"></div>
      <div className="absolute -bottom-64 -right-64 w-96 h-96 rounded-full bg-gradient-to-tr from-indigo-900/20 via-purple-800/10 to-transparent blur-3xl"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="highlight-card rounded-2xl p-10 animate-on-scroll border border-white/5 mb-20">
            <div className="flex flex-col md:flex-row md:items-center gap-8">
              <div className="w-full md:w-2/3">
                <h2 className="font-playfair text-3xl md:text-4xl font-light tracking-tighter mb-6">Development plan.</h2>
                <p className="text-sm text-foreground/70 mb-6">
                  Step-by-step guide to building exceptional digital solutions using cutting-edge technology.
                </p>
                <div className="space-y-6">
                  <div className="space-y-4">
                    <div className="relative">
                      <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-primary to-transparent"></div>
                      <div className="ml-6">
                        <h4 className="text-sm font-medium mb-1">Phase 1</h4>
                        <div className="glass rounded-lg p-4">
                          <h5 className="font-medium mb-1">Discovery & Research</h5>
                          <p className="text-xs text-foreground/60">Understanding client needs & market analysis</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="relative">
                      <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-primary to-transparent"></div>
                      <div className="ml-6">
                        <h4 className="text-sm font-medium mb-1">Phase 2</h4>
                        <div className="glass rounded-lg p-4">
                          <h5 className="font-medium mb-1">Design & Prototyping</h5>
                          <p className="text-xs text-foreground/60">Visual design, UX strategy, prototype testing</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="relative">
                      <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-primary to-transparent"></div>
                      <div className="ml-6">
                        <h4 className="text-sm font-medium mb-1">Phase 3</h4>
                        <div className="glass rounded-lg p-4">
                          <h5 className="font-medium mb-1">Development & Testing</h5>
                          <p className="text-xs text-foreground/60">Frontend, Backend, QA testing</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="w-full md:w-1/3">
                <div className="space-y-6">
                  <div className="glass rounded-lg p-4">
                    <h5 className="font-medium mb-1">Launch & Training</h5>
                    <p className="text-xs text-foreground/60">Deployment, Documentation, Client training</p>
                  </div>
                  
                  <div className="glass rounded-lg p-4">
                    <h5 className="font-medium mb-1">Post-launch Support</h5>
                    <p className="text-xs text-foreground/60">Maintenance, Analytics, Optimization</p>
                  </div>
                  
                  <div className="flex mt-8">
                    <div className="flex-1 text-center">
                      <div className="text-xs text-foreground/40 uppercase">Now</div>
                    </div>
                    <div className="flex-1 text-center">
                      <div className="text-xs text-foreground/40 uppercase">2025</div>
                    </div>
                    <div className="flex-1 text-center">
                      <div className="text-xs text-foreground/40 uppercase">2026</div>
                    </div>
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
