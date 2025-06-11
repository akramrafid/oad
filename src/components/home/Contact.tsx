
import { useState } from 'react';
import { EnvelopeSimple, Phone, MapPin } from '@phosphor-icons/react';
import { toast } from '@/hooks/use-toast';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, we would send the form data to a server
    console.log('Form submitted:', formData);
    toast({
      title: "Message Sent",
      description: "Thank you for contacting us. We'll respond shortly.",
    });
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };
  
  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <p className="text-sm uppercase tracking-wider text-primary mb-2">Contact Us</p>
          <h2 className="text-3xl md:text-4xl font-light tracking-tighter mb-6">Get In Touch</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Have a project in mind or questions about our services? Reach out and let's create something amazing together.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 animate-on-scroll">
          <div className="card-glass p-8">
            <h3 className="text-xl font-medium mb-6">Send Us A Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm text-foreground/70 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-md bg-secondary/50 border border-white/5 text-foreground/90 focus:outline-none focus:ring-2 focus:ring-primary/50"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm text-foreground/70 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-md bg-secondary/50 border border-white/5 text-foreground/90 focus:outline-none focus:ring-2 focus:ring-primary/50"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="subject" className="block text-sm text-foreground/70 mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-md bg-secondary/50 border border-white/5 text-foreground/90 focus:outline-none focus:ring-2 focus:ring-primary/50"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm text-foreground/70 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-2 rounded-md bg-secondary/50 border border-white/5 text-foreground/90 focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn-neumorphic w-full">
                Send Message
              </button>
            </form>
          </div>
          
          <div>
            <div className="card-glass p-8 mb-8">
              <h3 className="text-xl font-medium mb-6">Contact Information</h3>
              <ul className="space-y-6">
                <li className="flex">
                  <div className="mr-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <MapPin size={24} weight="light" className="text-primary" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-base font-medium mb-1">Address</h4>
                    <p className="text-foreground/70">123 Elite Street, Tech City, 10001</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="mr-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <EnvelopeSimple size={24} weight="light" className="text-primary" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-base font-medium mb-1">Email</h4>
                    <a href="mailto:contact@akram.studio" className="text-foreground/70 hover:text-primary transition-colors">
                      contact@akram.studio
                    </a>
                  </div>
                </li>
                <li className="flex">
                  <div className="mr-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <Phone size={24} weight="light" className="text-primary" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-base font-medium mb-1">Phone</h4>
                    <a href="tel:+15551234567" className="text-foreground/70 hover:text-primary transition-colors">
                      +1 (555) 123-4567
                    </a>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="card-glass p-8">
              <h3 className="text-xl font-medium mb-4">Business Hours</h3>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span className="text-foreground/70">Monday - Friday:</span>
                  <span>9:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-foreground/70">Saturday:</span>
                  <span>10:00 AM - 4:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-foreground/70">Sunday:</span>
                  <span>Closed</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
