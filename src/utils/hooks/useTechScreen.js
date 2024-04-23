import { useState, useEffect } from 'react';

const useTechScreen = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 695);
    };

    handleResize(); // Check on mount

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array ensures that this effect runs only once on mount

  return isMobile;
};

export default useTechScreen;
