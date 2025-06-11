
import { useState } from 'react';
import { CaretDown } from '@phosphor-icons/react';
import { cn } from '@/lib/utils';

interface FAQ {
  question: string;
  answer: string;
}

export const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  
  const faqs: FAQ[] = [
    {
      question: "What services do you offer?",
      answer: "We provide comprehensive digital solutions including web development, mobile app development, video editing, and AI automation services. Each service is custom-tailored to meet the unique needs of your business."
    },
    {
      question: "How long does it take to complete a website project?",
      answer: "Project timelines vary depending on complexity and scope. Simple websites typically take 2-4 weeks, while more complex projects with custom functionality may require 6-12 weeks. We'll provide a detailed timeline during our initial consultation."
    },
    {
      question: "What is your pricing structure?",
      answer: "Our pricing varies based on the scope and requirements of each project. We offer flexible options from our Free plan for simple needs to our Enterprise solutions for comprehensive services. Contact us for a personalized quote tailored to your specific needs."
    },
    {
      question: "Do you offer ongoing maintenance and support?",
      answer: "Yes, we offer various maintenance and support packages to ensure your digital assets remain secure, up-to-date, and performing optimally. Our support periods range from 7 days to dedicated 24/7 support depending on your plan."
    },
    {
      question: "How do you handle revisions and feedback?",
      answer: "Revisions are an integral part of our process. Our Free plan includes one revision round, Pro includes three, and Enterprise offers unlimited revisions. We maintain open communication channels throughout the project to ensure your vision is realized."
    },
    {
      question: "Can you integrate AI solutions into my existing systems?",
      answer: "Absolutely. Our AI automation services are designed to integrate seamlessly with your existing systems and workflows. We'll assess your current setup and implement solutions that enhance efficiency without disrupting your operations."
    }
  ];
  
  const toggleQuestion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  
  return (
    <section id="faq" className="section-padding bg-secondary/10">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <p className="text-sm uppercase tracking-wider text-primary mb-2">FAQ</p>
          <h2 className="text-3xl md:text-4xl font-light tracking-tighter mb-6">Frequently Asked Questions</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Find answers to common questions about our services and processes.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto animate-on-scroll">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="mb-4 card-glass overflow-hidden"
            >
              <button
                className="w-full text-left p-6 flex justify-between items-center"
                onClick={() => toggleQuestion(index)}
              >
                <h3 className="text-lg font-medium">{faq.question}</h3>
                <CaretDown 
                  size={20} 
                  weight="light"
                  className={cn(
                    "text-foreground/70 transition-transform duration-300",
                    activeIndex === index && "transform rotate-180"
                  )}
                />
              </button>
              <div 
                className={cn(
                  "overflow-hidden transition-all duration-300",
                  activeIndex === index ? "max-h-96" : "max-h-0"
                )}
              >
                <p className="px-6 pb-6 text-foreground/70">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 animate-on-scroll">
          <p className="text-foreground/70 mb-6">Still have questions? Contact us for more information.</p>
          <a href="#contact" className="btn-neumorphic inline-block">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};
