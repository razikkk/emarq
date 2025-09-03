import React from 'react'
import { PortfolioCard } from '@/components/PortfolioCard';
import { Button } from '@/components/ui/button';
import { HighlightTag } from '@/components/HighlightTag';

const Portfolio = () => {
  return (
    <div>
            <hr className="border-0 h-px bg-[#E8C1C5]/30" />

    <div className="flex flex-col relative w-full overflow-hidden items-center pt-[100px] min-h-screen max-md:max-w-full">
      {/* Background */}
      {/* <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/b8eac3d4b26ed07f548eca35005a6b1d81426adf?placeholderIfAbsent=true"
        className="absolute h-full w-full object-cover inset-0"
        alt=""
      /> */}
  
      {/* Icon */}
      {/* <div className="flex flex-col relative aspect-[2.878] w-[118px] max-w-full overflow-hidden rounded-[40px]">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/7c068ef605e6e75aa37b6779a4f150fd0f95ce9b?placeholderIfAbsent=true"
          className="absolute h-full w-full object-cover inset-0"
          alt=""
        />
        <div className="relative border flex shrink-0 h-[41px] rounded-[40px] border-[rgba(255,255,255,0.05)] border-solid" />
      </div> */}

<div className="flex justify-center">
        <HighlightTag
          variant="dotted"
          className="border-2 border-white/80 rounded-lg shadow-[0_0_15px_rgba(255,255,255,0.3)]"
          title={
            <span className="bg-gradient-to-r from-[#3E2F56] to-[#8A6FB3] bg-clip-text text-transparent">
              Portfolio
            </span>
          }
          icon={ <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-tools" viewBox="0 0 16 16">
          <path d="M1 0 0 1l2.2 3.081a1 1 0 0 0 .815.419h.07a1 1 0 0 1 .708.293l2.675 2.675-2.617 2.654A3.003 3.003 0 0 0 0 13a3 3 0 1 0 5.878-.851l2.654-2.617.968.968-.305.914a1 1 0 0 0 .242 1.023l3.27 3.27a.997.997 0 0 0 1.414 0l1.586-1.586a.997.997 0 0 0 0-1.414l-3.27-3.27a1 1 0 0 0-1.023-.242L10.5 9.5l-.96-.96 2.68-2.643A3.005 3.005 0 0 0 16 3q0-.405-.102-.777l-2.14 2.141L12 4l-.364-1.757L13.777.102a3 3 0 0 0-3.675 3.68L7.462 6.46 4.793 3.793a1 1 0 0 1-.293-.707v-.071a1 1 0 0 0-.419-.814zm9.646 10.646a.5.5 0 0 1 .708 0l2.914 2.915a.5.5 0 0 1-.707.707l-2.915-2.914a.5.5 0 0 1 0-.708M3 11l.471.242.529.026.287.445.445.287.026.529L5 13l-.242.471-.026.529-.445.287-.287.445-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471.026-.529.445-.287.287-.445.529-.026z"/>
        </svg>
          }
          
        />
      
      </div>
  
      {/* Headline Row 1 */}
      <div className="relative flex flex-wrap justify-center w-full gap-4 text-white font-normal text-center tracking-[-1.9px] leading-none mt-[35px] text-4xl md:text-[54px]">
        <div>Showcasing</div>
        <div>Your</div>
        <div>Best</div>
      </div>
  
      {/* Headline Row 2 */}
      <div className="relative flex flex-wrap justify-center w-full gap-4 text-gray-500 font-normal text-center tracking-[-1.9px] leading-none mt-[11px] text-4xl md:text-[54px]">
        <div>Work</div>
        <div>with</div>
        <div>Pure</div>
        <div>Precision.</div>
      </div>
  
      {/* Description */}
      <p className="relative text-gray-500 text-sm sm:text-base font-normal leading-relaxed tracking-[-0.2px] text-center mt-[43px] max-md:max-w-full">
        A portfolio is more than just projects—it's your story, vision, and
      </p>
      <p className="relative text-gray-500 text-sm sm:text-base font-normal leading-relaxed tracking-[-0.2px] text-center mt-1 max-md:max-w-full">
        expertise. Emarq ensures your work stands out with a rank.
      </p>
  
      {/* Button */}
      <Button   className="w-full sm:w-[195px] h-[46px] rounded-[10px] 
  border border-[#E8C1C5]/30 shadow-sm shadow-white/20
  bg-gradient-to-r from-[#E8C1C5] to-[#E8C1C5] 
  [font-family:'DM_Sans',Helvetica] font-medium text-[#3E2F56] text-base tracking-[-0.50px] leading-[26px] 
  hover:from-[#d8a8ad] hover:to-[#d8a8ad] 
  transition-all duration-300 ease-in-out 
  mt-4 sm:mt-6">
        View More Works
      </Button>

            {/* Portfolio Cards */}
            <div className="relative mt-[60px] max-md:mt-10 space-y-8 sm:space-y-10 w-full max-w-6xl">
              <PortfolioCard
                year="2024"
                title="Lemonide Tech"
                features={[
                  { icon: "https://api.builder.io/api/v1/image/assets/TEMP/32a4530ec069805e3ebae1d9d7551c98664be11f?placeholderIfAbsent=true", text: "AI Integration" },
                  { icon: "https://api.builder.io/api/v1/image/assets/TEMP/32a4530ec069805e3ebae1d9d7551c98664be11f?placeholderIfAbsent=true", text: "Responsive Design" },
                  { icon: "https://api.builder.io/api/v1/image/assets/TEMP/32a4530ec069805e3ebae1d9d7551c98664be11f?placeholderIfAbsent=true", text: "Custom Layouts" },
                  { icon: "https://api.builder.io/api/v1/image/assets/TEMP/32a4530ec069805e3ebae1d9d7551c98664be11f?placeholderIfAbsent=true", text: "Fast Loading" }
                ]}
                tags={["E-Commerce", "Portfolio"]}
                image1="https://api.builder.io/api/v1/image/assets/TEMP/f5fe4f840d593b302ad9ce0391640f5bd3d78895?placeholderIfAbsent=true"
                image2="https://api.builder.io/api/v1/image/assets/TEMP/f4e865051721b7bb561405fa978c50b43fa5e916?placeholderIfAbsent=true"
              />
              <PortfolioCard
                year="2025"
                title="Viper Studio"
                features={[
                  { icon: "https://api.builder.io/api/v1/image/assets/TEMP/ea61d7cfe3e004e89aa201447b44ba1920dbd59a?placeholderIfAbsent=true", text: "Modern Typography" },
                  { icon: "https://api.builder.io/api/v1/image/assets/TEMP/d796e748a358ac1b3f7c21286b97de7702805f8c?placeholderIfAbsent=true", text: "User Friendly" },
                  { icon: "https://api.builder.io/api/v1/image/assets/TEMP/a346c02abe0908fee6e23850fe8c1a179941b52a?placeholderIfAbsent=true", text: "Flexible CMS" },
                  { icon: "https://api.builder.io/api/v1/image/assets/TEMP/f9d73010b28d691da8c603afb2320d23cdfe4ed4?placeholderIfAbsent=true", text: "SEO Optimized" }
                ]}
                tags={["Business", "Agency"]}
                image1="https://api.builder.io/api/v1/image/assets/TEMP/c8bad13c4ea7315a8750fcb379166bec8ae17039?placeholderIfAbsent=true"
                image2="https://api.builder.io/api/v1/image/assets/TEMP/62ca4baffc71a8c953f56227f1fbffcf171eda70?placeholderIfAbsent=true"
              />
              <PortfolioCard
                year="2025"
                title="Million One"
                features={[
                  { icon: "https://api.builder.io/api/v1/image/assets/TEMP/e6d0a9f306c61bf864832706754d86e1bd79dd6a?placeholderIfAbsent=true", text: "Easy Customization" },
                  { icon: "https://api.builder.io/api/v1/image/assets/TEMP/e25d1d7e4e641ed194e072bcdd58b4c8c9c1e191?placeholderIfAbsent=true", text: "Interactive Elements" },
                  { icon: "https://api.builder.io/api/v1/image/assets/TEMP/34d6e45870c088ea6864e2a4f58bcb4a4f1a84bc?placeholderIfAbsent=true", text: "Retina Ready" },
                  { icon: "https://api.builder.io/api/v1/image/assets/TEMP/0f8e561b863c3fae3f6c405330df0090556a5c96?placeholderIfAbsent=true", text: "High Performance" }
                ]}
                tags={["Portfolio", "Agency"]}
                image1="https://api.builder.io/api/v1/image/assets/TEMP/9b9f21a7b7ed3617570f724eded4dcb52d588540?placeholderIfAbsent=true"
                image2="https://api.builder.io/api/v1/image/assets/TEMP/b7c86a82f0370eab5e2454fccaad49e71d95e2ca?placeholderIfAbsent=true"
              />
            </div>
          </div>
    </div>
  )
}

export default Portfolio