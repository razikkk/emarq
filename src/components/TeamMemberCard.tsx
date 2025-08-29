import React from 'react';

interface TeamMemberCardProps {
  avatar: string;
  name: string;
  position: string;
  socialIcon: string;
}

export const TeamMemberCard: React.FC<TeamMemberCardProps> = ({
  avatar,
  name,
  position,
  socialIcon
}) => {
  return (
    <article className="bg-[rgba(8,8,8,1)] w-full mx-auto rounded-[30px] max-md:max-w-full max-md:mt-3">
      <div className="border p-2.5 rounded-[30px] border-[rgba(255,255,255,0.07)] border-solid max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <div className="w-[17%] max-md:w-full max-md:ml-0">
            <img
              src={avatar}
              className="aspect-[1] object-contain w-[84px] shrink-0 rounded-[22px] max-md:mt-5"
              alt={`${name} avatar`}
            />
          </div>
          <div className="w-[83%] ml-5 max-md:w-full max-md:ml-0">
            <div className="bg-[rgba(8,8,8,1)] grow overflow-hidden text-base leading-loose w-full rounded-[22px] max-md:mt-5">
              <div className="w-full overflow-hidden">
                <div className="border flex items-stretch gap-5 justify-between px-4 py-[23px] rounded-[22px] border-[rgba(79,26,214,0.15)] border-solid">
                  <div className="flex flex-col items-stretch">
                    <div className="text-white font-semibold tracking-[-0.5px]">
                      {name}
                    </div>
                    <div className="text-white font-normal tracking-[-0.2px] mt-3.5">
                      {position}
                    </div>
                  </div>
                  <img
                    src={socialIcon}
                    className="aspect-[1] object-contain w-[38px] shrink-0 rounded-[10px]"
                    alt="Social media"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
