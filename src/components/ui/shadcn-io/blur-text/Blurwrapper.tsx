import { motion } from "framer-motion";
import React from "react";

interface BlurWrapperProps {
  children: React.ReactNode;
  delay?: number; // in milliseconds
  className?: string;
}

const BlurWrapper: React.FC<BlurWrapperProps> = ({
  children,
  delay = 0,
  className = "",
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(10px)", y: -50 }} // Start higher (-50px)
      animate={{ opacity: 1, filter: "blur(0px)", y: 0 }} // Move to natural position
      transition={{
        delay: delay / 1000, // Convert ms to seconds
        duration: 0.8,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default BlurWrapper;
