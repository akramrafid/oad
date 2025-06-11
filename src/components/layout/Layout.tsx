
import { ReactNode, useEffect } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { ScrollToTop } from './ScrollToTop';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  useEffect(() => {
    // Initial animation on page load
    const allElements = document.querySelectorAll('.animate-on-scroll');
    allElements.forEach((element) => {
      element.classList.add('animate-fade-in-up');
    });
    
    // Set up intersection observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.1 });
    
    // Observe all elements with the animate-on-scroll class
    document.querySelectorAll('.animate-on-scroll').forEach((element) => {
      observer.observe(element);
    });
    
    return () => {
      observer.disconnect();
    };
  }, []);
  
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
      <ScrollToTop />
    </>
  );
};
