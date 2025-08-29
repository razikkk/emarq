import React from 'react'
import { FeatureCard } from '@/components/FeatureCard';

const FeaturesList = () => {
  return (
    <div>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-10 text-lg tracking-[-0.5px]">
  <FeatureCard
    icon="https://api.builder.io/api/v1/image/assets/TEMP/d684fb77084952e4e5d609fd3b9a3733f2e67c6c?placeholderIfAbsent=true"
    title="Digital Marketing"
    description="Strategy, social media, SEO, and paid campaigns for brand growth."
   
  />
  <FeatureCard
    icon="https://api.builder.io/api/v1/image/assets/TEMP/3cb5687bbc592cce6a32a6ae431d6181dea10d13?placeholderIfAbsent=true"
    title="Creative Production"
    description="Photography, videography, and post-production for impactful storytelling."
   

  />
  <FeatureCard
    icon="https://api.builder.io/api/v1/image/assets/TEMP/0ac472041c3c5c4a50694c57eb94c2b4383c0e53?placeholderIfAbsent=true"
    title="Branding & Identity"
    description="Logos, visual identity, and brand guidelines that resonate with audiences."
  

  />
  <FeatureCard
    icon="https://api.builder.io/api/v1/image/assets/TEMP/bd4da7ffd0311d426d69d186df434c3e461ce697?placeholderIfAbsent=true"
    title="Web Development"
    description="Responsive corporate and e-commerce websites with measurable results."
  

  />
</div>
    </div>
  )
}

export default FeaturesList