
import { useState, useEffect, useRef } from 'react';
import { CaretLeft, CaretRight, Star, User } from '@phosphor-icons/react';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  result: string;
  rating: number;
}

export const Testimonials = () => {
  const testimonials: Testimonial[] = [
    {
      name: 'Michael Chen',
      role: 'CEO',
      company: 'TechVision Inc.',
      content: 'Akram transformed our outdated website into a modern, sleek platform that truly represents our brand. The attention to detail and technical expertise exceeded our expectations.',
      result: '250% increase in user engagement',
      rating: 5
    },
    {
      name: 'Sarah Johnson',
      role: 'Marketing Director',
      company: 'Innovate Solutions',
      content: 'The AI automation solutions developed by Akram have saved us countless hours of manual work. Our workflow efficiency has improved dramatically, allowing us to focus on strategic initiatives.',
      result: '40% reduction in operational costs',
      rating: 5
    },
    {
      name: 'Raj Patel',
      role: 'Founder',
      company: 'NextGen Startups',
      content: 'Working with Akram on our mobile app development was a game-changer. The intuitive design and flawless functionality have received overwhelming positive feedback from our users.',
      result: '100,000+ downloads in the first month',
      rating: 4
    },
    {
      name: 'Emma Wilson',
      role: 'Content Manager',
      company: 'Digital Creatives',
      content: 'The video editing services provided by Akram elevated our content to a professional level. The cinematic quality and creative touches made our brand stand out in a crowded digital space.',
      result: '300% increase in content engagement',
      rating: 5
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const autoplayTimerRef = useRef<NodeJS.Timeout | null>(null);

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    setIsAutoplay(false);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    setIsAutoplay(false);
  };

  useEffect(() => {
    if (isAutoplay) {
      autoplayTimerRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
      }, 5000);
    }

    return () => {
      if (autoplayTimerRef.current) {
        clearInterval(autoplayTimerRef.current);
      }
    };
  }, [isAutoplay, testimonials.length]);

  return (
    <section id="testimonials" className="section-padding bg-secondary/10">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <p className="text-sm uppercase tracking-wider text-primary mb-2">Testimonials</p>
          <h2 className="text-3xl md:text-4xl font-light tracking-tighter mb-6">What Our Clients Say</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Discover how our solutions have empowered businesses to achieve remarkable results.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto animate-on-scroll">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="card-glass p-8 md:p-10">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="flex-shrink-0 flex justify-center md:justify-start">
                        <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                          <User size={32} weight="light" className="text-primary" />
                        </div>
                      </div>
                      <div>
                        <div className="flex mb-4">
                          {Array.from({ length: testimonial.rating }).map((_, i) => (
                            <Star key={i} size={20} weight="fill" className="text-yellow-500" />
                          ))}
                        </div>
                        <p className="italic text-foreground/80 mb-6">{testimonial.content}</p>
                        <div className="mb-4">
                          <h4 className="font-medium text-foreground">{testimonial.name}</h4>
                          <p className="text-sm text-foreground/70">{testimonial.role}, {testimonial.company}</p>
                        </div>
                        <div className="bg-primary/10 p-3 rounded-md">
                          <p className="text-sm font-medium text-primary">Result: {testimonial.result}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button 
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 bg-background/80 backdrop-blur-sm p-3 rounded-full neumorphic"
            onClick={handlePrev}
          >
            <CaretLeft size={24} weight="light" />
          </button>
          
          <button 
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 bg-background/80 backdrop-blur-sm p-3 rounded-full neumorphic"
            onClick={handleNext}
          >
            <CaretRight size={24} weight="light" />
          </button>
          
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === activeIndex ? 'bg-primary w-6' : 'bg-foreground/20'
                }`}
                onClick={() => {
                  setActiveIndex(index);
                  setIsAutoplay(false);
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
