import { useState, useEffect } from 'react';

const useIsXs = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640); // You can adjust the breakpoint as needed
    };

    // Initial check on mount
    handleResize();

    // Listen to window resize events
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isMobile;
};

export default useIsXs;
