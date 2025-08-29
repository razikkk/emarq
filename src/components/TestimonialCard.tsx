import React from 'react';

interface TestimonialCardProps {
  backgroundImage: string;
  avatarBackground: string;
  quote: string;
  clientName: string;
  clientTitle: string;
  companyName: string;
  starsImage: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  backgroundImage,
  avatarBackground,
  quote,
  clientName,
  clientTitle,
  companyName,
  starsImage
}) => {
  return (
    <article className="bg-[rgba(8,8,8,1)] flex flex-col overflow-hidden items-center aspect-[1] w-full rounded-[20px] max-md:mt-6">
      <div className="border flex flex-col items-stretch rounded-[20px] border-[rgba(255,255,255,0.07)] border-solid">
        <div className="self-center flex w-[170px] shrink-0 h-px" />
        <div className="flex flex-col relative aspect-[0.997] w-full overflow-hidden pt-[5px] pb-[38px] rounded-[372px]">
          <img
            src={backgroundImage}
            className="absolute h-full w-full object-cover inset-0"
            alt=""
          />
          <div className="relative flex w-[341px] max-w-full items-stretch gap-5 justify-between">
            <img
              src={avatarBackground}
              className="aspect-[2.65] object-contain w-[196px] shrink-0 max-w-full"
              alt=""
            />
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/0fe2fbee7363c159b3f016e42fbf44a04be57ca8?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-6 shrink-0 my-auto"
              alt=""
            />
          </div>
          <div className="relative flex w-full flex-col text-base text-white tracking-[-0.2px] leading-loose mt-[22px] px-[30px] max-md:px-5">
            <img
              src={starsImage}
              className="aspect-[5] object-contain w-[100px] max-w-full"
              alt="Rating stars"
            />
            <blockquote className="font-normal leading-[26px] self-stretch mt-[26px]">
              {quote}
            </blockquote>
            <div className="flex w-[230px] shrink-0 h-px mt-[26px]" />
            <div className="flex items-stretch gap-6 text-white tracking-[-0.5px] mt-7">
              <div className="font-semibold">{clientName}</div>
              <div className="font-medium">{clientTitle}</div>
            </div>
            <div className="font-normal mt-3.5">
              {companyName}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
