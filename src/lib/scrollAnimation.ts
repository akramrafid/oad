
import { useEffect } from 'react';

export function useScrollAnimation() {
  useEffect(() => {
    // Initial animation on page load
    const allElements = document.querySelectorAll('.animate-on-scroll');
    allElements.forEach(element => {
      element.classList.add('animate-fade-in-up');
    });
    
    // Set up intersection observer for scroll animations
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.1 });
    
    // Observe all elements with the animate-on-scroll class
    document.querySelectorAll('.animate-on-scroll').forEach(element => {
      observer.observe(element);
    });
    
    return () => {
      observer.disconnect();
    };
  }, []);
}
