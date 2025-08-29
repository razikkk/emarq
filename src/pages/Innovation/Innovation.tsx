import React from 'react'
import { Button } from '@/components/ui/button';

const Innovation = () => {
  return (
    <div>
    <img
      src="https://api.builder.io/api/v1/image/assets/TEMP/f3db31373b234f933090d7c9de30276b79a804b7?placeholderIfAbsent=true"
      className="absolute h-full w-full object-cover inset-0"
      alt=""
    />
    <div className="flex flex-col relative min-h-[700px] w-full overflow-hidden items-center pt-[150px] pb-[50px] px-20 
                    max-md:max-w-full max-md:pt-[80px] max-md:pb-[40px] max-md:px-5">
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/00861b8127675d2340bd266bdcb3a42ef9ba0d7c?placeholderIfAbsent=true"
        className="absolute h-full w-full object-cover inset-0"
        alt=""
      />
      <div className="relative flex w-[517px] max-w-full flex-col items-center">
        <div className="flex flex-col relative aspect-[2.927] w-[120px] max-w-full overflow-hidden rounded-[40px]">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/b55dbd6959602bf92227eb90f7989a3b0a34c5d0?placeholderIfAbsent=true"
            className="absolute h-full w-full object-cover inset-0"
            alt=""
          />
          <div className="relative border flex shrink-0 h-[41px] rounded-[40px] border-[rgba(255,255,255,0.05)] border-solid" />
        </div>

        <div className="flex justify-between items-center gap-[10px] text-[54px] text-white font-normal whitespace-nowrap text-center tracking-[-1.9px] leading-none flex-wrap mt-[25px] max-md:text-[40px]">
          <div>Fueled</div>
          <div>by</div>
          <div>Ideas.</div>
        </div>

        <p className="text-gray-500 text-base font-normal leading-loose tracking-[-0.5px] text-center mt-[20px]">
          Emarq is packed with cutting-edge features designed to
        </p>
        <p className="text-gray-500 text-base font-normal leading-loose tracking-[-0.5px] text-center mt-[0.5px]">
          grow your brand and amplify your portfolio.
        </p>

        <Button className="hidden md:block w-[185px] h-[45px] rounded-[10px] border border-purple-400/30 
          bg-gradient-to-r from-[#412F59] to-[#8059E3] 
          [font-family:'DM_Sans',Helvetica] font-medium text-white text-base tracking-[-0.50px] leading-[26px] 
          hover:from-[#3a244f] hover:to-[#724dd8] transition-all mt-[20px]">
          Book an Appointment
        </Button>
      </div>
    </div>
  </div>
  )
}

export default Innovation