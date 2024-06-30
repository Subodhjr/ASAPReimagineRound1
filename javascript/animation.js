gsap.to("#home .herocontent h1",{
    x:-400,
    duration:2,
    scrollTrigger:{
        trigger:"#home .herocontent h1",
        scroller:"body",
        // markers:true,
        start:"top 20%",
        end:"top 5%",
        scrub:3,
    }
})
gsap.to("#home .herocontent p",{
    x:500,
    duration:0.5,
    opacity:0,
    scrollTrigger:{
        trigger:"#home .herocontent p",
        scroller:"body",
        // markers:true,
        start:"top 30%",
        end:"top 15%",
        scrub:3
    }
})
gsap.to("#home .herocontent .hero-btn",{
    opacity:0,
    // duration:0.1,
    scrollTrigger:{
        trigger:"#home .herocontent .hero-btn",
        scroller:"body",
        // markers:true,
        start:"top 65%",
        end:"top 50%",
        scrub:2,
    }
})
gsap.to("#about p",{
    transform:"translateX(-680%)",
    ease: "slow(0.7,0.7,false)",
    scrollTrigger:{
        trigger:"#about",
        scroller:"body",
        markers:true,
        start:"top 0%",
        end:"top -400%",
        scrub:2,
        pin:true
    }
})
//project 0
ddocument.addEventListener("DOMContentLoaded", function () {
    // Animate header fade-in
    gsap.from("#header", { duration: 1.5, opacity: 0, y: -50, ease: "power2.out" });

    // Animate product details section
    gsap.from("#product-title", { duration: 1, opacity: 0, x: -100, ease: "power2.out", delay: 0.5 });
    gsap.from("#product-image", { duration: 1, opacity: 0, x: 100, ease: "power2.out", delay: 1 });
    gsap.from("#product-description", { duration: 1, opacity: 0, y: 50, ease: "power2.out", delay: 1.5 });
    gsap.from("#register-button", { duration: 1, scale: 0.5, opacity: 0, ease: "bounce.out", delay: 2 });

    // Animate footer fade-in
    gsap.from("#footer", { duration: 1.5, opacity: 0, y: 50, ease: "power2.out", delay: 2.5 });
});
