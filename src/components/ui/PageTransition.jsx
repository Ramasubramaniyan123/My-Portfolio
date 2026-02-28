import React from 'react';
import { motion } from 'framer-motion';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

const PageTransition = ({ children }) => {
  const prefersReducedMotion = usePrefersReducedMotion();

  const pageVariants = {
    initial: {
      opacity: 0,
      y: prefersReducedMotion ? 0 : 20,
    },
    in: {
      opacity: 1,
      y: 0,
    },
    out: {
      opacity: 0,
      y: prefersReducedMotion ? 0 : -20,
    },
  };

  const pageTransition = {
    type: prefersReducedMotion ? 'tween' : 'tween',
    ease: 'anticipate',
    duration: prefersReducedMotion ? 0.1 : 0.5,
  };

  if (prefersReducedMotion) {
    return <div>{children}</div>;
  }

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
