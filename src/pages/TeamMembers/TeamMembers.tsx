import React from 'react'
import { TeamMemberCard } from '@/components/TeamMemberCard';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage } from '@/components/ui/avatar';

const teamMembers = [
    {
      name: "Sinan",
      role: "Co-Founder, CEO",
      image: "/image---o8p5wc5w3lqe0e9pvlcnxms2quk-png.png",
    },
    {
      name: "Lena Williams",
      role: "Co-Founder, CTO",
      image: "/image---woman-1.png",
    },
    {
      name: "Maya Johnson",
      role: "Senior Developer",
      image: "/image---woman-2.png",
    },
    {
      name: "Zara Patel",
      role: "Chief Operations Officer",
      image: "/image---woman-3.png",
    },
    {
      name: "Emma Davis",
      role: "Chief Product Officer",
      image: "/image---woman-4.png",
    },
    {
      name: "Chloe Anderson",
      role: "Senior Product Designer",
      image: "/image---woman-5.png",
    },
  ];
const TeamMembers = () => {
  return (
    <div className="flex flex-col items-center px-4 sm:px-6 lg:px-8">
  {/* Keep original image size and styling, but center it */}
  <div className="flex justify-center mt-[120px] sm:mt-[160px] md:mt-[200px] lg:mt-[220px]">
    <div className="flex flex-col relative aspect-[3.122] w-24 sm:w-28 md:w-32 max-w-full overflow-hidden rounded-[40px]">
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/58b56afbf83ade4953169199f3377be3d12fff87?placeholderIfAbsent=true"
        className="absolute h-full w-full object-cover inset-0"
        alt=""
      />
      <div className="relative border flex shrink-0 h-[41px] rounded-[40px] border-[rgba(255,255,255,0.05)] border-solid" />
    </div>
  </div>

  {/* Heading */}
  <div className="mt-[25px] sm:mt-[30px] md:mt-[35px] text-center">
    {/* First line */}
    <div className="flex justify-center flex-wrap gap-[10px] sm:gap-[15px] text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-normal tracking-[-1.9px] leading-none text-white">
      <span>Meet</span>
      <span>the</span>
      <span>Team</span>
      <span>Making</span>
    </div>
    {/* Second line */}
    <div className="flex justify-center flex-wrap gap-[10px] sm:gap-[15px] text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-normal tracking-[-1.9px] leading-none text-[#ffffff99] mt-2 sm:mt-3 md:mt-4">
      <span>Things</span>
      <span>Happen</span>
      <span>Every</span>
      <span>Day</span>
    </div>
  </div>

  {/* Subtext */}
  <p className="text-[#ffffff99] text-sm sm:text-base md:text-lg font-normal leading-relaxed tracking-[-0.2px] text-center mt-4 sm:mt-6 max-w-[90%] sm:max-w-[500px] md:max-w-[600px]">
    Our team is made up of passionate professionals who bring their expertise and creativity to every project.
  </p>

  {/* Button */}
  <Button className="h-[36px] sm:h-[38px] md:h-[41px] rounded-[10px] bg-[linear-gradient(180deg,rgba(65,47,89,1)_0%,rgba(128,89,227,1)_100%)] border-[3px] border-[#ffffff26] hover:bg-[linear-gradient(180deg,rgba(65,47,89,1)_0%,rgba(128,89,227,1)_100%)] mt-4 sm:mt-6">
    <span className="text-[12px] sm:text-[13px] md:text-[14.4px] font-medium text-white tracking-[-0.45px] leading-[23.4px]">
      Book an Appointment
    </span>
  </Button>

  {/* Team Members Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-[1200px] mx-auto mt-[40px] sm:mt-[60px] md:mt-[80px]">
  {teamMembers.map((member, index) => (
    <Card
      key={index}
      className="bg-[#080808] border border-[#ffffff12] rounded-[20px] sm:rounded-[25px] md:rounded-[30px] p-4 sm:p-5 md:p-6 w-full max-w-full mx-auto flex"
    >
      {/* Avatar */}
      <Avatar className="w-20 sm:w-24 md:w-[120px] h-20 sm:h-24 md:h-[120px] rounded-[16px] sm:rounded-[20px] md:rounded-[22px] border border-[#ffffff14] flex-shrink-0 relative">
        <AvatarImage
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover rounded-[inherit]"
        />
        <div className="absolute inset-0 rounded-[inherit] bg-[linear-gradient(180deg,rgba(0,0,0,0)_91%,rgba(0,0,0,0.3)_100%)]" />
      </Avatar>

      {/* Info */}
      <div className="flex-1 ml-4 sm:ml-6 md:ml-8 bg-[#080808] rounded-[16px] sm:rounded-[20px] md:rounded-[22px] border border-[#4f1ad626] h-[100px] sm:h-[110px] md:h-[120px] p-4 sm:p-5 md:p-5 shadow-[inset_0px_10px_10px_-1px_#4f1ad626] relative flex items-center justify-between">
        <div>
          <h3 className="font-semibold text-white text-sm sm:text-base md:text-lg tracking-[-0.5px] leading-[22px] sm:leading-[24px] md:leading-[26px] mb-1">
            {member.name}
          </h3>
          <p className="font-normal text-[#ffffff99] text-xs sm:text-sm md:text-base tracking-[-0.2px] leading-[20px] sm:leading-[22px] md:leading-[26px]">
            {member.role}
          </p>
        </div>

        <img
          className="w-8 h-8 sm:w-9 sm:h-9 md:w-[42px] md:h-[42px]"
          alt="Social icon"
          src="/social-icon---icon.svg"
        />
      </div>
    </Card>
  ))}
</div>

</div>
  )
}

export default TeamMembers