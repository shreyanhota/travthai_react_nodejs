import React from 'react';
import { motion } from 'framer-motion';

function AboutPage() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.5 }}
    >
      <h1>About TravAI</h1>
      <p>This is the about page with a smooth animation1212e12.</p>
    </motion.div>
  );
}

export default AboutPage
