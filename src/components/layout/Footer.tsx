
import { EnvelopeSimple, Phone, MapPin, GithubLogo, TwitterLogo, LinkedinLogo, InstagramLogo } from '@phosphor-icons/react';

export const Footer = () => {
  return (
    <footer className="bg-background border-t border-border/50">
      <div className="container mx-auto py-12 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-primary text-primary-foreground px-2 py-1 rounded-md text-sm font-semibold">
                OAD
              </div>
              <span className="text-lg font-semibold text-foreground">One Arc Digital</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6 max-w-sm">
              Premium web development, app development, video editing, and AI automation services for businesses looking to elevate their digital presence.
            </p>
            <div className="flex items-center gap-3">
              <a 
                href="#" 
                className="w-9 h-9 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center justify-center group"
              >
                <GithubLogo size={18} weight="regular" />
              </a>
              <a 
                href="#" 
                className="w-9 h-9 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center justify-center group"
              >
                <TwitterLogo size={18} weight="regular" />
              </a>
              <a 
                href="#" 
                className="w-9 h-9 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center justify-center group"
              >
                <LinkedinLogo size={18} weight="regular" />
              </a>
              <a 
                href="#" 
                className="w-9 h-9 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center justify-center group"
              >
                <InstagramLogo size={18} weight="regular" />
              </a>
            </div>
          </div>

          {/* Services Section */}
          <div>
            <h3 className="text-base font-semibold text-foreground mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                  App Development
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                  Video Editing
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                  AI Automation
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                  UI/UX Design
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-base font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                  About
                </a>
              </li>
              <li>
                <a href="/skills" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                  Skills
                </a>
              </li>
              <li>
                <a href="/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                  Blog
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-base font-semibold text-foreground mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 flex-shrink-0">
                  <MapPin size={12} weight="regular" className="text-primary" />
                </div>
                <span className="text-sm text-muted-foreground leading-relaxed">
                  Manchester, UK
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone size={12} weight="regular" className="text-primary" />
                </div>
                <a href="tel:+15551234567" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                  +1 (555) 123-4567
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <EnvelopeSimple size={12} weight="regular" className="text-primary" />
                </div>
                <a href="mailto:akramrafid123@gmail.com" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                  akramrafid123@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border/50 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 One Arc Digital Studio. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
              Terms of Service
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
