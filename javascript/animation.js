gsap.to("#home .herocontent h1",{
    x:-400,
    duration:2,
    scrollTrigger:{
        trigger:"#home .herocontent h1",
        scroller:"body",
        markers:true,
        start:"top 20%",
        scrub:3,
    }
})
gsap.to("#home .herocontent p",{
    x:500,
    duration:1,
    opacity:0,
    scrollTrigger:{
        trigger:"#home .herocontent p",
        scroller:"body",
        markers:true,
        start:"top 30%",
        scrub:3
    }
})
gsap.to("#home .herocontent .hero-btn",{
    opacity:0,
    // duration:0.1,
    scrollTrigger:{
        trigger:"#home .herocontent .hero-btn",
        scroller:"body",
        markers:true,
        start:"top 65%",
        scrub:2,
    }
})
