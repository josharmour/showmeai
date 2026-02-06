import { useEffect, useRef, useState } from 'react';

/**
 * Reliable scroll-reveal hook using native IntersectionObserver.
 * Once the element enters the viewport it stays "visible" permanently.
 * Unlike Framer Motion's whileInView, this never reverses or glitches.
 */
export function useOnScreen(margin = '-60px') {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { rootMargin: margin }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [margin]);

  return { ref, visible };
}
