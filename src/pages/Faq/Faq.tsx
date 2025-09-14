import { HighlightTag } from "@/components/HighlightTag";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import {motion, Variants} from 'framer-motion'
  
 
    const faqItems = [
      {
        id: "item-1",
        question: "What services does Emarq provide as a marketing agency in Dubai?",
        answer: `Emarq offers a full suite of digital marketing and production services in Dubai, including
        branding, social media marketing (SMM), web design and development, SEO,
        performance marketing, influencer marketing, content creation, photography,
        videography, and PR services.`
      },
      {
        id: "item-2",
        question: "How can Emarq help improve my brand presence in Dubai?",
        answer: `Through professional branding, social media strategies, high-quality content creation,
        and PR campaigns, Emarq helps businesses in Dubai build a strong and recognizable
        brand presence.`
      },
      {
        id: "item-3",
        question: "What types of content creation does Emarq specialize in?",
        answer: `We specialize in automotive, lifestyle, F&B, and product photography and videography,
        event coverage, social media reels, promotional videos, and organic content marketing to maximize engagement.`
      },
      {
        id: "item-4",
        question: "Does Emarq provide SEO services for businesses in Dubai?",
        answer: `Yes! Emarq offers comprehensive SEO strategies, including on-page SEO, keyword
        research, link building, and content optimization to improve your website’s visibility and
        ranking on search engines.`
      },
      {
        id: "item-5",
        question: "What makes Emarq different from other marketing agencies in Dubai?",
        answer: `Emarq combines creative production and performance marketing with a results-driven
        approach, ensuring high-quality content and measurable growth for businesses across
        Dubai and the UAE.`
      },
      {
        id: "item-6",
        question: "Can Emarq manage my social media marketing campaigns?",
        answer: `Absolutely. We handle end-to-end social media marketing for platforms like Instagram,
        Facebook, TikTok, Snapchat, and LinkedIn, including content planning, posting,
        engagement, and analytics.`
      },
      {
        id: "item-7",
        question: "Do you provide influencer marketing services in Dubai?",
        answer: `Yes, Emarq connects brands with relevant influencers in Dubai to create authentic
        campaigns that drive engagement and brand awareness.`
      },
      {
        id: "item-8",
        question: "Does Emarq cover events and product launches for photography and videography?",
        answer: `Yes. We provide professional event coverage, product shoots, and launch
        documentation with high-quality photos and videos suitable for social media, websites,
        and marketing campaigns.`
      },
      {
        id: "item-9",
        question: "How does Emarq ensure high-quality results for content and campaigns?",
        answer: `We follow a strategic, data-driven approach combining creativity and analytics, using
        professional equipment and expert editors to deliver premium content that aligns with
        your brand goals.`
      },
      {
        id: "item-10",
        question: " How can I get started with Emarq for my marketing and production needs?",
        answer: `Simply contact us via phone, email, or our website inquiry form. We’ll schedule a
        consultation to understand your business objectives and create a tailored marketing and
        production plan.`
      },
    ];

    const highlightVariants: Variants = {
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeInOut" }, // use string easing to avoid TS errors
      },
    };



    const container: Variants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.2, // delay between each card
        },
      },
    };
    
    const item: Variants = {
      hidden: { opacity: 0, y: 30 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
      },
    };

    const words = ["Frequently", "Asked", "Questions"];
    const paragraph =
  "Have questions? Our FAQ section has you covered with quick answers to the most common inquiries.";

    const paragraphs = paragraph.split(" ");


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

<motion.div
      className="flex mt-[60px]"
      variants={highlightVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
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
      
      </motion.div>

      <div className="mb-[30px] mt-[40px]">
      <div className="flex flex-wrap gap-x-3">
        {words.map((word, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.3, // stagger word by word
              ease: "easeOut",
            }}
            className="[font-family:'DM_Sans',Helvetica] font-normal text-[54px] tracking-[-1.90px] leading-[50px]"
            style={{
              color: index === 0 ? "#ffffff" : "#ffffff99", // first word white, rest faded
            }}
          >
            {word}
          </motion.span>
        ))}
      </div>
    </div>

    <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#ffffff99] text-base tracking-[-0.20px] leading-[26px]">
      {paragraphs.map((word, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.4,
            delay: index * 0.05, // stagger each word
            ease: "easeOut",
          }}
          className="inline-block mr-1" // keeps spacing natural
        >
          {word}
        </motion.span>
      ))}
    </p>
    </div>

    <div className="w-full mt-[60px]">
    <Accordion
        type="single"
        collapsible
        className="space-y-6"
        asChild
      >
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }} 
        className="space-y-6"
      >
        {faqItems.map((itemData) => (
          <motion.div key={itemData.id} variants={item}>
            <AccordionItem
              value={itemData.id}
              className="relative backdrop-blur-md bg-white/5 rounded-[20px] border border-white/10 px-[30px] py-0 overflow-hidden"
            >
              {/* Gradient line for style */}
              <div
                className="absolute top-0 left-1/2 transform -translate-x-1/2 
                  w-[160px] sm:w-[200px] md:w-[240px] h-px 
                  bg-gradient-to-r from-[#3E2F56]/0 via-[#E8C1C5] to-[#3E2F56]/0"
              />

              <AccordionTrigger className="py-[30px] hover:no-underline [&[data-state=open]>svg]:rotate-45">
                <span className="[font-family:'DM_Sans',Helvetica] font-normal text-[#E8C1C5] text-lg tracking-[-0.50px] leading-[26px] text-left">
                  {itemData.question}
                </span>
              </AccordionTrigger>

              <AccordionContent className="pb-[30px] pt-0">
                <div className="[font-family:'DM_Sans',Helvetica] font-normal text-[#E8C1C5]/80 text-base tracking-[-0.20px] leading-[26px]">
                <ul className="list-disc ml-5">
                - {itemData.answer}
  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>
          </motion.div>
        ))}
      </motion.div>
      </Accordion>

    </div>

  </div>
</div>
    </div>
  )
}

export default Faq