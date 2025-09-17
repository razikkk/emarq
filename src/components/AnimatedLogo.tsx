import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface AnimatedLogoProps {
  onFinish?: () => void;
}

const AnimatedLogo: React.FC<AnimatedLogoProps> = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);
  const [loadingDone, setLoadingDone] = useState(false);
  const [showFinal, setShowFinal] = useState(false); // for final zoom/fade

  // Progress counter
  useEffect(() => {
    if (progress < 100) {
      const interval = setInterval(() => {
        setProgress((prev) => Math.min(prev + 1, 100));
      }, 30);
      return () => clearInterval(interval);
    } else if (!loadingDone) {
      setLoadingDone(true);

      // Remove loader, show final text+image
      setShowFinal(true);

      // Notify parent immediately
      if (onFinish) onFinish();
    }
  }, [progress, loadingDone, onFinish]);

  return (
    <AnimatePresence>
      {!loadingDone ? (
        // Loader view
        <motion.div
          key="loader"
          className="fixed inset-0 flex flex-col items-center justify-center z-[9999] bg-[#3E2F56]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div className="flex items-center gap-1">
            {["E", "M", "A", "R"].map((letter, index) => (
              <span
                key={index}
                className="text-white font-leagueSpartan font-bold text-5xl md:text-8xl"
              >
                {letter}
              </span>
            ))}
            <img
              src="/q.png"
              alt="Logo Q"
              className="w-[155px] h-[155px] object-contain -mt-7 -ml-11"
            />
          </motion.div>

          <div className="absolute bottom-10 w-full max-w-[90%] flex items-center">
            <div className="relative w-full h-1">
              <motion.div
                className="absolute top-0 left-0 h-1 bg-[#E8C1C5]"
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ ease: "linear" }}
              />
            </div>
            <span className="ml-3 text-[#E8C1C5] text-[80px] font-bold">
              {progress}%
            </span>
          </div>
        </motion.div>
      ) : null}

      {showFinal && (
        // Final zoom + fade animation
        <motion.div
          key="final"
          className="fixed inset-0 flex flex-col items-center justify-center z-[9999] bg-black"
          initial={{ opacity: 1 }}
          animate={{ scale: 1.1, opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          onAnimationComplete={() => setShowFinal(false)}
        >
          <motion.div className="flex items-center gap-1">
            {["E", "M", "A", "R"].map((letter, index) => (
              <span
                key={index}
                className="text-white font-leagueSpartan font-bold text-5xl md:text-8xl"
              >
                {letter}
              </span>
            ))}
            <img
              src="/q.png"
              alt="Logo Q"
              className="w-[155px] h-[155px] object-contain -mt-7 -ml-11"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AnimatedLogo;
