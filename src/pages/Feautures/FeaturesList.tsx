import React from 'react'
import { FeatureCard } from '@/components/FeatureCard';
import { motion, Variants } from "framer-motion";


const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1] },
  },
};

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3, // each card animates after 0.3s
    },
  },
};
const FeaturesList = () => {
  return (
    <motion.div
    variants={containerVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8"
  >
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-10 text-lg tracking-[-0.5px]">
      <motion.div variants={cardVariants}>
        <FeatureCard
          icon="https://api.builder.io/api/v1/image/assets/TEMP/d684fb77084952e4e5d609fd3b9a3733f2e67c6c?placeholderIfAbsent=true"
          title="Digital Marketing"
          description="Strategy, social media, SEO, and paid campaigns for brand growth."
        />
      </motion.div>

      <motion.div variants={cardVariants}>
        <FeatureCard
          icon="https://api.builder.io/api/v1/image/assets/TEMP/3cb5687bbc592cce6a32a6ae431d6181dea10d13?placeholderIfAbsent=true"
          title="Creative Production"
          description="Photography, videography, and post-production for impactful storytelling."
        />
      </motion.div>

      <motion.div variants={cardVariants}>
        <FeatureCard
          icon="https://api.builder.io/api/v1/image/assets/TEMP/0ac472041c3c5c4a50694c57eb94c2b4383c0e53?placeholderIfAbsent=true"
          title="Branding & Identity"
          description="Logos, visual identity, and brand guidelines that resonate with audiences."
        />
      </motion.div>

      <motion.div variants={cardVariants}>
        <FeatureCard
          icon="https://api.builder.io/api/v1/image/assets/TEMP/bd4da7ffd0311d426d69d186df434c3e461ce697?placeholderIfAbsent=true"
          title="Web Development"
          description="Responsive corporate and e-commerce websites with measurable results."
        />
      </motion.div>
    </div>
  </motion.div>
  )
}

export default FeaturesList