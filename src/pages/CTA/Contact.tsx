import React from 'react'
import { HighlightTag } from '@/components/HighlightTag';
import { Button } from '@/components/ui/button';

const Contact = () => {
  return (
    <div className="w-full flex justify-center px-4"> {/* Center the whole block */}
    <div className="border pb-[50px] rounded-[40px] border-[rgba(255,255,255,0.07)] border-solid w-full max-w-[1000px]">
      <div className="flex flex-col rounded-[40px] relative min-h-[400px] overflow-hidden items-center pt-[50px] pb-[11px] px-20 max-md:px-5"
      style={{
        background: `
          radial-gradient(circle at 50% 0%, rgba(232, 193, 197, 0.35) 0%, transparent 60%),
          radial-gradient(circle at 30% 0%, rgba(232, 193, 197, 0.15) 0%, transparent 50%),
          radial-gradient(circle at 70% 0%, rgba(232, 193, 197, 0.15) 0%, transparent 50%)
        `,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      }}
    >
        {/* <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/a2636ce2ca11d0221cd376e99fa334aef06edf71?placeholderIfAbsent=true"
          className="absolute h-full w-full object-cover inset-0"
          alt=""
        /> */}
        <div className="relative flex w-full max-w-[900px] mx-auto flex-col items-center">
        <HighlightTag
          variant="dotted"
          className="border-2 border-white/80 rounded-lg shadow-[0_0_15px_rgba(255,255,255,0.3)]"
          title={
            <span className="bg-gradient-to-r from-[#3E2F56] to-[#8A6FB3] bg-clip-text text-transparent">
              Become a Part Of Us
            </span>
          }
          icon={  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-globe" viewBox="0 0 16 16">
          <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855A8 8 0 0 0 5.145 4H7.5zM4.09 4a9.3 9.3 0 0 1 .64-1.539 7 7 0 0 1 .597-.933A7.03 7.03 0 0 0 2.255 4zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a7 7 0 0 0-.656 2.5zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5zM8.5 5v2.5h2.99a12.5 12.5 0 0 0-.337-2.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5zM5.145 12q.208.58.468 1.068c.552 1.035 1.218 1.65 1.887 1.855V12zm.182 2.472a7 7 0 0 1-.597-.933A9.3 9.3 0 0 1 4.09 12H2.255a7 7 0 0 0 3.072 2.472M3.82 11a13.7 13.7 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5zm6.853 3.472A7 7 0 0 0 13.745 12H11.91a9.3 9.3 0 0 1-.64 1.539 7 7 0 0 1-.597.933M8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855q.26-.487.468-1.068zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.7 13.7 0 0 1-.312 2.5m2.802-3.5a7 7 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7 7 0 0 0-3.072-2.472c.218.284.418.598.597.933M10.855 4a8 8 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4z"/>
        </svg>
        }
        />
          <h2 className="text-white text-[54px] leading-none tracking-[-1.9px] text-center mt-[35px] max-md:text-[40px]">
            Ready to Elevate Your Brand
          </h2>
          <h2 className="text-white text-[54px] leading-none tracking-[-1.9px] text-center mt-[11px] max-md:text-[40px]">
            with Next-Gen Innovation?
          </h2>
          <p className="text-gray-500 tracking-[-0.2px] text-center mt-[43px] max-md:mt-10">
            Ready to take the next step? Join us now and start transforming your{" "}
          </p>
          <p className="text-gray-500 tracking-[-0.2px] text-center mt-[1px]">
            vision into reality with expert support.
          </p>
          <div className='mt-[20px]'> 

          
          <Button   className="w-full sm:w-[195px] h-[46px] rounded-[10px] 
  border border-[#E8C1C5]/30 shadow-sm shadow-white/20
  bg-gradient-to-r from-[#E8C1C5] to-[#E8C1C5] 
  [font-family:'DM_Sans',Helvetica] font-medium text-[#3E2F56] text-base tracking-[-0.50px] leading-[26px] 
  hover:from-[#d8a8ad] hover:to-[#d8a8ad] 
  transition-all duration-300 ease-in-out 
  mt-4 sm:mt-6">
          Book an Appointment
        </Button>
</div>
        </div>
      </div>
    </div>
  </div>


  
  )
}

export default Contact