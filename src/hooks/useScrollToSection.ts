import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useScrollToSection = () => {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    // Scroll to top when pathname changes
    if (!hash) {
      window.scrollTo(0, 0);
    }
    
    // Scroll to section if hash exists
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash, pathname]);
}; 