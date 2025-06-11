
import { Layout } from "@/components/layout/Layout";

const About = () => {
  return (
    <Layout>
      <div className="pt-32 pb-20 px-6 md:px-12 lg:px-24">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-light tracking-tighter mb-6">About Akram</h1>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
              Meet the visionary behind One Arc Digital, a passionate technologist dedicated to transforming digital experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20 animate-on-scroll">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1496307653780-42ee777d4833?auto=format&fit=crop&q=80&w=928" 
                alt="Akram Studio Office" 
                className="rounded-lg shadow-2xl"
              />
            </div>
            <div>
              <h2 className="text-3xl font-light tracking-tighter mb-6">Our Story</h2>
              <p className="text-foreground/70 mb-4">
                Founded in 2020, One Arc Digital began with a simple mission: to make premium digital experiences accessible to businesses of all sizes. What started as a one-person operation has grown into a team of passionate technologists, designers, and strategists united by a common purpose.
              </p>
              <p className="text-foreground/70 mb-4">
                Our founder, Akram, recognized a gap in the market for high-quality web development services that didn't come with enterprise-level pricing. Combining technical expertise with an eye for design, Akram established a studio that prioritizes both functionality and aesthetics.
              </p>
              <p className="text-foreground/70">
                Today, we're proud to have worked with over 20 clients across various industries, helping them transform their digital presence and achieve remarkable business results.
              </p>
            </div>
          </div>

          <div className="card-glass p-10 mb-20 animate-on-scroll">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-light tracking-tighter mb-4">Our Values</h2>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                These core principles guide every project we undertake and every client relationship we build.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6">
                <h3 className="text-xl font-medium mb-4 text-primary">Technical Excellence</h3>
                <p className="text-foreground/70">
                  We're committed to delivering solutions that not only look beautiful but function flawlessly. Our technical standards are uncompromising, ensuring robust, scalable, and future-proof digital assets.
                </p>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium mb-4 text-primary">Creative Innovation</h3>
                <p className="text-foreground/70">
                  We approach each project with fresh eyes, seeking innovative solutions to complex problems. Our creativity extends beyond aesthetics to encompass novel approaches to functionality and user experience.
                </p>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium mb-4 text-primary">Client Partnership</h3>
                <p className="text-foreground/70">
                  We view our clients as partners in the creative process. Your success is our success, which is why we invest time in understanding your business objectives and tailor our solutions accordingly.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center animate-on-scroll">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-light tracking-tighter mb-6">Meet the Founder</h2>
              <p className="text-foreground/70 mb-4">
                Akram is a seasoned technologist with over a decade of experience in web development, app creation, and digital innovation. With a background in computer science and a passion for design, Akram bridges the gap between technical functionality and aesthetic appeal.
              </p>
              <p className="text-foreground/70 mb-4">
                Prior to founding One Arc, Akram worked with several leading tech companies, contributing to projects that reached millions of users worldwide. This experience informed the studio's approach to creating scalable, user-centered digital solutions.
              </p>
              <p className="text-foreground/70">
                When not immersed in code or design, Akram can be found exploring emerging technologies, mentoring aspiring developers, and speaking at industry conferences about the future of digital experiences.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 to-blue-400/30 rounded-lg blur-xl opacity-50"></div>
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=928" 
                  alt="Akram - Founder" 
                  className="rounded-lg relative z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
