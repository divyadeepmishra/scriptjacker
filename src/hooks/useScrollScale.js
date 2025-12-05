import { useEffect, useState } from 'react';

export function useScrollScale() {
  const [scale, setScale] = useState(1);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Start at 1.05, shrink to 0.98 over 500px of scroll
      const newScale = Math.max(0.98, 1.05 - (scrollY * 0.0002));
      const newOpacity = Math.max(0, 1 - (scrollY * 0.002));

      setScale(newScale);
      setOpacity(newOpacity);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { scale, opacity };
}
