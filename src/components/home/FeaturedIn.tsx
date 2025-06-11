
export const FeaturedIn = () => {
  return (
    <section id="featured" className="section-padding bg-secondary/5">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Trusted by Industry Leaders
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto text-lg">
            Join the companies that trust us to deliver exceptional results
          </p>
        </div>
        
        <div className="relative overflow-hidden py-12">
          {/* Gradient overlays for smooth fade effect */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-background to-transparent z-10"></div>
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-background to-transparent z-10"></div>
          
          <div className="flex items-center animate-scroll-left">
            {/* First set of logos */}
            <div className="flex items-center gap-16 min-w-max">
              <img 
                src="/lovable-uploads/88ffb0cd-d192-4e1c-8135-489d8c040e20.png" 
                alt="Polyjute" 
                className="h-24 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300"
              />
              <img 
                src="/lovable-uploads/5a3898e9-0355-4168-893c-21a4218718aa.png" 
                alt="Primetime Amusements" 
                className="h-24 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300"
              />
              <img 
                src="/lovable-uploads/3edd9b17-6841-4b78-8edf-cb63ec45c7e9.png" 
                alt="Bit by Bit Marketing" 
                className="h-24 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300"
              />
              <img 
                src="/lovable-uploads/02ba5ddc-2711-42c5-a6c7-4299ba68d6b4.png" 
                alt="Guus Goorts Higher Education Marketing" 
                className="h-24 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300"
              />
              <img 
                src="/lovable-uploads/c46e499f-efb0-45a8-aca7-8f6eae3abfeb.png" 
                alt="Palate Sensations Culinary School" 
                className="h-24 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300"
              />
              <img 
                src="/lovable-uploads/44a9ca3c-219b-4d0b-bee1-958173f365fb.png" 
                alt="Springer Publishing" 
                className="h-24 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300"
              />
              <img 
                src="/lovable-uploads/e7b74dc2-761f-467b-95c2-977c2524533d.png" 
                alt="Love Bakes Good Cakes" 
                className="h-24 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
            
            {/* Duplicate set for seamless infinite loop */}
            <div className="flex items-center gap-16 min-w-max">
              <img 
                src="/lovable-uploads/88ffb0cd-d192-4e1c-8135-489d8c040e20.png" 
                alt="Polyjute" 
                className="h-24 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300"
              />
              <img 
                src="/lovable-uploads/5a3898e9-0355-4168-893c-21a4218718aa.png" 
                alt="Primetime Amusements" 
                className="h-24 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300"
              />
              <img 
                src="/lovable-uploads/3edd9b17-6841-4b78-8edf-cb63ec45c7e9.png" 
                alt="Bit by Bit Marketing" 
                className="h-24 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300"
              />
              <img 
                src="/lovable-uploads/02ba5ddc-2711-42c5-a6c7-4299ba68d6b4.png" 
                alt="Guus Goorts Higher Education Marketing" 
                className="h-24 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300"
              />
              <img 
                src="/lovable-uploads/c46e499f-efb0-45a8-aca7-8f6eae3abfeb.png" 
                alt="Palate Sensations Culinary School" 
                className="h-24 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300"
              />
              <img 
                src="/lovable-uploads/44a9ca3c-219b-4d0b-bee1-958173f365fb.png" 
                alt="Springer Publishing" 
                className="h-24 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300"
              />
              <img 
                src="/lovable-uploads/e7b74dc2-761f-467b-95c2-977c2524533d.png" 
                alt="Love Bakes Good Cakes" 
                className="h-24 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
