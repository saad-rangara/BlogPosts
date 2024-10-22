"use client"
import { motion } from 'framer-motion';

export default function Animation (props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="flex justify-center bg-gray-100"
    >
      {props.children}
    </motion.div>
  );
};
