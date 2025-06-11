
import { useState, useEffect } from 'react';
import { ArrowUp } from '@phosphor-icons/react';

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    
    window.addEventListener('scroll', toggleVisibility);
    
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <button 
      className={`fixed bottom-8 right-8 p-3 rounded-full neumorphic transition-all duration-300 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      onClick={scrollToTop}
      style={{ display: isVisible ? 'block' : 'none' }}
      aria-label="Scroll to top"
    >
      <ArrowUp size={24} weight="light" />
    </button>
  );
};
