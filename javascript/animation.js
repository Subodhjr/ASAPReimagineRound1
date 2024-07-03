gsap.to("#home .herocontent .hero-section-text .head1", {
  x: -350,
  duration: 2,
  scrollTrigger: {
    trigger: "#home .herocontent",
    scroller: ".main",
    // markers:true,
    start: "top 20%",
    end: "top 5%",
    scrub: 3,
  },
});
gsap.to("#home .herocontent .hero-section-text .head2", {
  x: 350,
  duration: 2,
  //   opacity: 0,
  scrollTrigger: {
    trigger: "#home .herocontent",
    scroller: ".main",
    // markers:true,
    start: "top 20%",
    end: "top 5%",
    scrub: 3,
  },
});
gsap.to("#home .herocontent .hero-btn", {
  opacity: 0,
  // duration:0.1,
  scrollTrigger: {
    trigger: "#home .herocontent .hero-btn",
    scroller: ".main",
    // markers:true,
    start: "top 65%",
    end: "top 50%",
    scrub: 2,
  },
});
gsap.to("#about p", {
  // y: -200,
  // opacity:0,
  duration: 0.5,
  stagger: 1,
  transform: "translateX(-500%)",
  ease: "slow(0.7,0.7,false)",
  scrollTrigger: {
    trigger: "#about",
    scroller: ".main",
    // markers:true,
    start: "top 0%",
    end: "top -300%",
    scrub: 2,
    pin: true,
  },
});
gsap.from(".services-section h2", {
  duration: 0.3,
  opacity: 0,
  x: -150,
  stagger: 0.12,
  scrollTrigger: {
    trigger: ".services-section",
    scroller: ".main",
    // markers:true,
    start: "top 40%",
    end: "top 20%",
    // scrub:2
  },
});
gsap.from(".service-item", {
  duration: 2,
  opacity: 0,
  x: 20,
  stagger: 0.3,
  delay: 0.2,
  scrollTrigger: {
    trigger: ".services-section",
    scroller: ".main",
    // markers:true,
    start: "top 25%",
    end: "top 0%",
    // scrub:2
  },
});
gsap.from("#products .maindiv .p0div", {
  x: -800,
  opacity: 0,
  duration: 2,
  stagger: 1,
  // delay:0.2,
  scrollTrigger: {
    trigger: "#products .maindiv .p0div",
    scroller: ".main",
    // markers:true,
    start: "top 50%",
    end: "top 30%",
    scrub: 2,
  },
});
gsap.from("#products .maindiv .p1div", {
  x: 800,
  opacity: 0,
  duration: 2,
  stagger: 1,
  // delay:0.2,
  scrollTrigger: {
    trigger: "#products .maindiv .p0div",
    scroller: ".main",
    // markers:true,
    start: "top 50%",
    end: "top 30%",
    scrub: 2,
  },
});
gsap.from("#contact .headcont", {
  y: 900,
  opacity: 0,
  duration: 2,
  // stagger:1,
  delay: 0.2,
  ease: "circ.out",
  scrollTrigger: {
    trigger: "#contact",
    scroller: ".main",
    // markers:true,
    start: "top 60%",
    end: "top 40%",
    scrub: 2,
  },
});
gsap.from("#contact .contact-detail .more", {
  y: 900,
  opacity: 0,
  duration: 2,
  // stagger:1,
  delay: 0.2,
  ease: "circ.out",
  scrollTrigger: {
    trigger: "#contact .contact-detail",
    scroller: ".main",
    // markers:true,
    start: "top 57%",
    end: "top 35%",
    scrub: 2,
  },
});
gsap.from("#contact .contact-detail .more1 div", {
  x: -150,
  opacity: 0,
  duration: 2,
  stagger: 0.2,
  delay: 0.2,
  ease: "circ.out",
  scrollTrigger: {
    trigger: "#contact .contact-detail",
    scroller: ".main",
    // markers:true,
    start: "top 57%",
    end: "top 35%",
    scrub: 2,
  },
});
gsap.from("#contact .contact-detail .more2 div", {
  x: -150,
  opacity: 0,
  duration: 2,
  stagger: 0.2,
  delay: 0.2,
  ease: "circ.out",
  scrollTrigger: {
    trigger: "#contact .contact-detail",
    scroller: ".main",
    // markers:true,
    start: "top 57%",
    end: "top 35%",
    scrub: 2,
  },
});
var tt = gsap.timeline()

tt.from(".titlediv",{
  y:20,
  opacity:0,
  duration:0.5,
  delay:0.5
})
tt.from(".maindesc",{
  opacity:0,
  duration:0.5,
  delay:0.2,
  stagger:0.3
})
tt.from(".rupee",{
  y:10,
  opacity:0,
  duration:0.5,
  // delay:0.2,
  // stagger:0.3
})
tt.from(".but button",{
  opacity:0,
  duration:1
})
gsap.from(".detaildiv .moredet .fewdet",{
  scrollTrigger:{
    trigger:".detaildiv",
    scroller:"body",
    // marker:true,
    start:"top 50%",
    end:"top 30%",
    scrub:2
  },
  y:10,
  opacity:0,
  stagger:0.5
})
gsap.from(".secsect .specs",{
  scrollTrigger:{
    trigger:".secsect",
    scroller:"body",
    // marker:true,
    start:"top 60%",
    end:"top 30%",
    scrub:2
  },
  y:10,
  opacity:0,
  stagger:0.5
})
gsap.from("#sfrow .infor",{
  scrollTrigger:{
    trigger:"#sfrow",
    scroller:"body",
    marker:true,
    start:"top 55%",
    end:"top 20%",
    scrub:2
  },
  x:10,
  opacity:0,
  stagger:0.5
})
gsap.from("#gfrow .infor",{
  scrollTrigger:{
    trigger:"#gfrow",
    scroller:"body",
    marker:true,
    start:"top 55%",
    end:"top 20%",
    scrub:2
  },
  x:10,
  opacity:0,
  stagger:0.5
})