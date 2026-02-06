import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { useOnScreen } from '../hooks/useOnScreen';

interface Props {
  variants: Variants;
  children: React.ReactNode;
  className?: string;
  /** For AnimatePresence exit handling */
  exitAnim?: any;
}

/**
 * Wrapper that reliably fades children in when scrolled into view.
 * Uses native IntersectionObserver (via useOnScreen) instead of
 * Framer Motion's whileInView which can glitch during fast scrolling.
 */
export const RevealCard: React.FC<Props> = ({ variants, children, className, exitAnim }) => {
  const { ref, visible } = useOnScreen('-40px');
  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={visible ? 'visible' : 'hidden'}
      exit={exitAnim ?? { opacity: 0, scale: 0.95, transition: { duration: 0.15, ease: 'easeOut' } }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
