import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface AnimatedLogoProps {
  onFinish?: () => void;
}

const AnimatedLogo: React.FC<AnimatedLogoProps> = ({ onFinish }) => {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    if (!showIntro && onFinish) {
      onFinish(); // call parent handler when intro finishes
    }
  }, [showIntro, onFinish]);

  if (!showIntro) return null;

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-[#3E2F56] z-[9999]"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        initial={{ scale: 1, x: 0, y: 0, opacity: 1 }}
        animate={{
          scale: [1, 1.3],
          opacity: [1, 0],
          x: 0,
          y: 0,
        }}
        transition={{
          duration: 1.5,
          ease: "easeInOut",
          delay: 3,
        }}
        onAnimationComplete={() => setShowIntro(false)}
        className="flex"
      >
        {["E", "M", "A", "R"].map((letter, index) => (
          <motion.span
            key={index}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: index * 0.3 }}
            className="text-white font-leagueSpartan font-bold text-5xl md:text-8xl"
          >
            {letter}
          </motion.span>
        ))}

        {/* Image replacing Q */}
        <motion.img
          src="/q.png"
          alt="Logo Q"
          className="w-[160px] h-[160px] object-contain -mt-11"
          initial={{ x: -70, opacity: 0 }}
          animate={{ x: -40, opacity: 1 }}
          transition={{ delay: 4 * 0.3 }}
        />
      </motion.div>
    </motion.div>
  );
};

export default AnimatedLogo;
