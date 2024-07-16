'use client';

import { motion } from "framer-motion";

//NOTE: Reference this video for explanation on how this works: https://www.youtube.com/watch?v=jVU3JD6qOBo

export default function Template({
  children
} : { 
  children: React.ReactNode
}) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: 'easeInOut', duration: 0.75 }}
    >
      {children}
    </motion.div>
  )
}