import { HighlightTag } from "@/components/HighlightTag";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

  
 
    const faqItems = [
      {
        id: "item-1",
        question: "What do I need to get started?",
      },
      {
        id: "item-2",
        question: "What kind of customization is available?",
      },
      {
        id: "item-3",
        question: "How easy is it to edit for beginners?",
      },
      {
        id: "item-4",
        question: "Let me know more about moneyback guarantee?",
      },
      {
        id: "item-5",
        question: "Do I need to know how to code?",
      },
      {
        id: "item-6",
        question: "What will I get after purchasing the template?",
      },
    ];





const Faq = () => {
  return (
    <div>
         <div className="absolute inset-0 opacity-70 bg-[url(/light-rays---rays-3.png)] bg-cover bg-[50%_50%]" />

<div className="absolute bottom-0 left-0 w-full h-56 bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,1)_100%)]" />

<div className="relative max-w-[1200px] mx-auto px-4 lg:px-0">
    
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-[60px] lg:gap-[60px]">
  {/* <img
src="https://api.builder.io/api/v1/image/assets/TEMP/e08f995785ffaeb25ebfbc926126c960d9f3a290?placeholderIfAbsent=true"
className="absolute h-full w-full object-cover inset-0 -z-10"
alt=""
/> */}
    <div className="flex flex-col">
    {/* <div className="flex flex-col relative aspect-[2.171] w-[89px] overflow-hidden rounded-[40px] mt-[60px]">
                        <img
                          src="https://api.builder.io/api/v1/image/assets/TEMP/b1b3630e18743670fecc03c8c23114886ac34aa7?placeholderIfAbsent=true"
                          className="absolute h-full w-full object-cover inset-0"
                          alt=""
                        />
                        <div className="relative border flex shrink-0 h-[41px] rounded-[40px] border-[rgba(255,255,255,0.05)] border-solid" />
                      </div> */}

    <div className="flex  mt-[60px]">
        <HighlightTag
          variant="dotted"
          className="border-2 border-white/80 rounded-lg shadow-[0_0_15px_rgba(255,255,255,0.3)]"
          title={
            <span className="bg-gradient-to-r from-[#3E2F56] to-[#8A6FB3] bg-clip-text text-transparent">
              FAQ
            </span>
          }
          icon={  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-question-lg" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M4.475 5.458c-.284 0-.514-.237-.47-.517C4.28 3.24 5.576 2 7.825 2c2.25 0 3.767 1.36 3.767 3.215 0 1.344-.665 2.288-1.79 2.973-1.1.659-1.414 1.118-1.414 2.01v.03a.5.5 0 0 1-.5.5h-.77a.5.5 0 0 1-.5-.495l-.003-.2c-.043-1.221.477-2.001 1.645-2.712 1.03-.632 1.397-1.135 1.397-2.028 0-.979-.758-1.698-1.926-1.698-1.009 0-1.71.529-1.938 1.402-.066.254-.278.461-.54.461h-.777ZM7.496 14c.622 0 1.095-.474 1.095-1.09 0-.618-.473-1.092-1.095-1.092-.606 0-1.087.474-1.087 1.091S6.89 14 7.496 14"/>
        </svg>
        }
          
        />
      
      </div>

      <div className="mb-[30px] mt-[40px]">
        <h2 className="[font-family:'DM_Sans',Helvetica] font-normal text-white text-[54px] tracking-[-1.90px] leading-[50px] mb-[10px]">
          Frequently
        </h2>
        <div className="flex flex-wrap gap-x-3">
          <span className="[font-family:'DM_Sans',Helvetica] font-normal text-[#ffffff99] text-[54px] tracking-[-1.90px] leading-[50px]">
            Asked
          </span>
          <span className="[font-family:'DM_Sans',Helvetica] font-normal text-[#ffffff99] text-[54px] tracking-[-1.90px] leading-[50px]">
            Questions
          </span>
        </div>
      </div>

      <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#ffffff99] text-base tracking-[-0.20px] leading-[26px]">
        Have questions? Our FAQ section has you covered with <br />
        quick answers to the most common inquiries.
      </p>
    </div>

    <div className="w-full mt-[60px]">
      <Accordion type="single" collapsible className="space-y-6">
        {faqItems.map((item) => (
          <AccordionItem
            key={item.id}
            value={item.id}
            className="bg-[#080808] rounded-[20px] border border-[#ffffff12] px-[30px] py-0 data-[state=open]:bg-[#080808]"
          >
            <AccordionTrigger className="py-[30px] hover:no-underline [&[data-state=open]>svg]:rotate-45">
              <span className="[font-family:'DM_Sans',Helvetica] font-normal text-white text-lg tracking-[-0.50px] leading-[26px] text-left">
                {item.question}
              </span>
            </AccordionTrigger>
            <AccordionContent className="pb-[30px] pt-0">
              <div className="[font-family:'DM_Sans',Helvetica] font-normal text-[#ffffff99] text-base tracking-[-0.20px] leading-[26px]">
                Answer content would go here for: {item.question}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </div>
</div>
    </div>
  )
}

export default Faq