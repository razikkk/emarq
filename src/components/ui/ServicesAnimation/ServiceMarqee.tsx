import gsap from 'gsap'

export function setUpMarqueeAnimation(){
    const marqueeItems  = gsap.utils.toArray(".marquee h1")
    if(marqueeItems.length > 0){
        const tl = horizontalLoop(marqueeItems,{
            repeat:-1,
            paddingRight: 30
        })
    }
}

function horizontalLoop(items,config){
    items = gsap.utils.toArray(items)
    config = config || {}
    let tl = gsap.timeline({
        repeat: config.repeat,
        defaults:{ease: "none"}
    })
    let length = items.length
    let startX = items[0].offsetLeft
    let width = []
    let xpercents = []
    let pixelPerSecond = (config.speed || 1) * 100
    let totalWidth, curX, distanceToStart, distanceToLoop, item, i

    gsap.set(items,{
        xPercent: (i,el)=>{
            let w = (width[i] = parseFloat(gsap.getProperty(el,"width", "px") as string));
            xpercents[i] = (parseFloat(gsap.getProperty(el,"x","px") as string )/w) * 100 + 
            Number(gsap.getProperty(el, "xPercent"))
            return xpercents[i]
        }
    })

    gsap.set(items,{x:0})
    totalWidth = 
    items[length]

}