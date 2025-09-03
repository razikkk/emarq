import React from 'react'
import { TeamMemberCard } from '@/components/TeamMemberCard';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { HighlightTag } from '@/components/HighlightTag';

const teamMembers = [
    {
      name: "Sinan",
      role: "Co-Founder, CEO",
      image: "/logo.jpg",
    },
    {
      name: "Lena Williams",
      role: "Co-Founder, CTO",
      image: "/logo.jpg",
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
     {/* <div className="flex flex-col relative aspect-[3.122] w-24 sm:w-28 md:w-32 max-w-full overflow-hidden rounded-[40px]">
       <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/58b56afbf83ade4953169199f3377be3d12fff87?placeholderIfAbsent=true"
        className="absolute h-full w-full object-cover inset-0"
        alt=""
      /> 
       <div className="relative border flex shrink-0 h-[41px] rounded-[40px] border-[rgba(255,255,255,0.05)] border-solid" /> 
     </div>  */}
    <div className="flex justify-center">
        <HighlightTag
          variant="dotted"
          className="border-2 border-white/80 rounded-lg shadow-[0_0_15px_rgba(255,255,255,0.3)]"
          title={
            <span className="bg-gradient-to-r from-[#3E2F56] to-[#8A6FB3] bg-clip-text text-transparent">
              Our Team
            </span>
          }
          icon={  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-people-fill" viewBox="0 0 16 16">
          <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/>
        </svg>
        }
          
        />
      
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
  <Button   className="w-full sm:w-[195px] h-[46px] rounded-[10px] 
  border border-[#E8C1C5]/30 shadow-sm shadow-white/20
  bg-gradient-to-r from-[#E8C1C5] to-[#E8C1C5] 
  [font-family:'DM_Sans',Helvetica] font-medium text-[#3E2F56] text-base tracking-[-0.50px] leading-[26px] 
  hover:from-[#d8a8ad] hover:to-[#d8a8ad] 
  transition-all duration-300 ease-in-out 
  mt-4 sm:mt-6">
        Book an Appointment
      </Button>

  {/* Team Members Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1200px] mx-auto mt-[40px] sm:mt-[60px] md:mt-[80px]">
  {teamMembers.map((member, index) => (
    <div
      key={index}
      className="relative aspect-square rounded-[12px] overflow-hidden group"
    >
      {/* Image */}
      <img
        src={member.image}
        alt={member.name}
        className="w-full h-full object-cover"
      />

      {/* Overlay for text */}
      <div className="absolute bottom-0 right-0 p-4  w-full text-right">
        <h3 className="text-white font-semibold text-lg">
          {member.name}
        </h3>
        <p className="text-white/80 text-sm">
          {member.role}
        </p>
      </div>
    </div>
  ))}
</div>



</div>
  )
}

export default TeamMembers