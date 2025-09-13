import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const AnimatedLogo = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, []);

  const letters = ["E", "M", "A", "R", "image"]; // placeholder for image

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
    scale: [1, 1.3],       // zoom forward
    opacity: [1, 0],       // fade out
    x: 0,                  // no horizontal movement
    y: 0                   // no vertical movement
  }}
  transition={{
    duration: 1.5,
    ease: "easeInOut",
    delay: 3               // wait 3s before starting zoom+fade
  }}
  onAnimationComplete={() => setShowIntro(false)}
  className="flex"      >
        {["E", "M", "A", "R"].map((letter, index) => (
          <motion.span
            key={index}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: index * 0.3 }}
            className="text-white font-bebasNeue text-5xl md:text-7xl"
          >
            {letter}
          </motion.span>
        ))}

        {/* Image replacing Q */}
        <motion.img
  src="/q.png"
  alt="Logo Q"
  className="w-[90px] h-[90px] md:w-[120px] md:h-[120px] object-contain mb-[120px] -mt-8"
  initial={{ x: -70, opacity: 0 }}
  animate={{ x: -30, opacity: 1 }}
  transition={{ delay: 4 * 0.3 }}
/>

       
      </motion.div>

    </motion.div>
  );
};

export default AnimatedLogo;
