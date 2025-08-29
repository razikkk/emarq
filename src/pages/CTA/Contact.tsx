import React from 'react'
import { HighlightTag } from '@/components/HighlightTag';
import { Button } from '@/components/ui/button';

const Contact = () => {
  return (
    <div className="w-full flex justify-center px-4"> {/* Center the whole block */}
    <div className="border pb-[50px] rounded-[40px] border-[rgba(255,255,255,0.07)] border-solid w-full max-w-[1000px]">
      <div className="flex flex-col rounded-[40px] relative min-h-[400px] overflow-hidden items-center pt-[50px] pb-[11px] px-20 max-md:px-5">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/a2636ce2ca11d0221cd376e99fa334aef06edf71?placeholderIfAbsent=true"
          className="absolute h-full w-full object-cover inset-0"
          alt=""
        />
        <div className="relative flex w-full max-w-[900px] mx-auto flex-col items-center">
          <HighlightTag
            variant="dotted"
            title="Become a Part of Us"
            icon="https://api.builder.io/api/v1/image/assets/TEMP/e5855e0bc63ee5a82bdee7cb0ecb8c9f5e3826cd?placeholderIfAbsent=true"
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

          
          <Button className="hidden md:block w-[185px] h-[45px] rounded-[10px] border border-purple-400/30 
  bg-gradient-to-r from-[#412F59] to-[#8059E3] 
  [font-family:'DM_Sans',Helvetica] font-medium text-white text-base tracking-[-0.50px] leading-[26px] 
  hover:from-[#3a244f] hover:to-[#724dd8] transition-all">
  Book An Appointment
</Button>
</div>
        </div>
      </div>
    </div>
  </div>


  
  )
}

export default Contact