import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Only scroll to top if there's no hash in the URL and we're not on the home page
    if (!window.location.hash && pathname !== '/') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }, [pathname]);
};

export default useScrollToTop; 