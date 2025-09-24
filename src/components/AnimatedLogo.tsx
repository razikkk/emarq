// import React, { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// interface AnimatedLogoProps {
//   onFinish?: () => void;
// }

// const AnimatedLogo: React.FC<AnimatedLogoProps> = ({ onFinish }) => {
//   const [progress, setProgress] = useState(0);
//   const [loadingDone, setLoadingDone] = useState(false);
//   const [showFinal, setShowFinal] = useState(false); // for final zoom/fade

//   // Progress counter
//   useEffect(() => {
//     if (progress < 100) {
//       const interval = setInterval(() => {
//         setProgress((prev) => Math.min(prev + 1, 100));
//       }, 30);
//       return () => clearInterval(interval);
//     } else if (!loadingDone) {
//       setLoadingDone(true);

//       // Remove loader, show final text+image
//       setShowFinal(true);

//       // Notify parent immediately
//       if (onFinish) onFinish();
//     }
//   }, [progress, loadingDone, onFinish]);

//   return (
//     <AnimatePresence>
//       {!loadingDone ? (
//         // Loader view
//         <motion.div
//           key="loader"
//           className="fixed inset-0 flex flex-col items-center justify-center z-[9999] bg-[#3E2F56]"
//           initial={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//         >
//           <motion.div className="flex items-center gap-1">
//             {["E", "M", "A", "R"].map((letter, index) => (
//               <span
//                 key={index}
//                 className="text-white font-leagueSpartan font-bold text-5xl md:text-8xl"
//               >
//                 {letter}
//               </span>
//             ))}
//             <img
//               src="/q.png"
//               alt="Logo Q"
//               className="
//               w-[90px] h-[90px]          /* mobile */
//               sm:w-[120px] sm:h-[120px]  /* small screens */
//               md:w-[155px] md:h-[155px]  /* medium and up */
//               object-contain
//               -mt-4 sm:-mt-6 md:-mt-7   
//               -ml-6 sm:-ml-8 md:-ml-11"
//             />
//           </motion.div>

//           <div className="absolute bottom-10 w-full max-w-[90%] flex items-center">
//             <div className="relative w-full h-1">
//               <motion.div
//                 className="absolute top-0 left-0 h-1 bg-[#E8C1C5]"
//                 initial={{ width: "0%" }}
//                 animate={{ width: `${progress}%` }}
//                 transition={{ ease: "linear" }}
//               />
//             </div>
//             <span className="ml-3 text-[#E8C1C5] text-[80px] font-bold">
//               {progress}%
//             </span>
//           </div>
//         </motion.div>
//       ) : null}

//       {showFinal && (
//         // Final zoom + fade animation
//         <motion.div
//           key="final"
//           className="fixed inset-0 flex flex-col items-center justify-center z-[9999] bg-black"
//           initial={{ opacity: 1 }}
//           animate={{ scale: 1.1, opacity: 0 }}
//           transition={{ duration: 1.2, ease: "easeOut" }}
//           onAnimationComplete={() => setShowFinal(false)}
//         >
//           <motion.div className="flex items-center gap-1">
//             {["E", "M", "A", "R"].map((letter, index) => (
//               <span
//                 key={index}
//                 className="text-white font-leagueSpartan font-bold text-5xl md:text-8xl"
//               >
//                 {letter}
//               </span>
//             ))}
//             <img
//               src="/q.png"
//               alt="Logo Q"
//               className="w-[155px] h-[155px] object-contain -mt-7 -ml-11"
//             />
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// };

// export default AnimatedLogo;


import { motion } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";

export default function AnimatedLogo({ children }: { children: ReactNode }) {
  const [progress, setProgress] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Loading animation
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 2000); // delay before showing page
          return 100;
        }
        return prev + 1;
      });
    }, 10);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="fixed z-[100] inset-0 bg-black flex items-center justify-center">
          <div className="relative flex flex-col items-center justify-center">
            {/* Title */}
            <motion.h1
  initial={{ scale: 0.6 }}
  animate={progress === 100 ? { scale: 1 } : { scale: 0.6 }}
  transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
  className="relative z-10 font-bold flex items-center gap-2 text-white font-leagueSpartan"
>
  <span className="text-5xl sm:text-7xl md:text-8xl lg:text-[160px]">EMAR</span>
  <img
    src="/q.png"
    alt="Q"
    className="
      w-[80px] h-[80px] 
      sm:w-[100px] sm:h-[100px] 
      md:w-[140px] md:h-[140px] 
      lg:w-[250px] lg:h-[250px] 
      object-contain -ml-8 sm:-ml-8 md:-ml-12 lg:-ml-20
      -mt-2 sm:-mt-4 md:-mt-5 lg:-mt-6
    "
  />
</motion.h1>


            {/* Expanding circle */}
            {progress === 100 ? (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 100 }}
                transition={{ duration: 0.8, delay: 0.5, ease: "easeInOut" }}
                className="absolute z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-[#3E2F56] rounded-full"
              />
            ) : (
              // Progress bar
              <div
  className="absolute -bottom-4 sm:bottom-0 w-[90%] sm:w-[400px] h-4 bg-zinc-800 rounded-full overflow-hidden"
>
  <div
    style={{ width: `${progress}%` }}
    className="bg-white h-full transition-all duration-100"
  />
  <p className="absolute inset-0 flex items-center justify-center text-black text-base font-medium">
    {progress}%
  </p>
</div>

            )}
          </div>
        </div>
      ) : (
        // ⬇️ Only render children AFTER loader finishes
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {children}
        </motion.div>
      )}
    </>
  );
}

