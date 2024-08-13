import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Tittle = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsVisible(prev => !prev);
    }, 1000);


    return () => clearInterval(intervalId);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.3 }}
    >
      <h1 className= 'my-5 text-center font-bold tracking-wide text-6xl text-gray-600'>Products</h1>
      
    </motion.div>
  );
};

export default Tittle;
