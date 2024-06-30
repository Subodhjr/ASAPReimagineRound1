gsap.to("#home .herocontent h1", {
  x: -300,
  duration: 2,
  scrollTrigger: {
    trigger: "#home .herocontent h1",
    scroller: "body",
    // markers:true,
    start: "top 20%",
    end: "top 5%",
    scrub: 3,
  },
});
gsap.to("#home .herocontent p", {
  x: 500,
  duration: 0.5,
  opacity: 0,
  scrollTrigger: {
    trigger: "#home .herocontent p",
    scroller: "body",
    // markers:true,
    start: "top 30%",
    end: "top 15%",
    scrub: 3,
  },
});
gsap.to("#home .herocontent .hero-btn", {
  opacity: 0,
  // duration:0.1,
  scrollTrigger: {
    trigger: "#home .herocontent .hero-btn",
    scroller: "body",
    // markers:true,
    start: "top 65%",
    end: "top 50%",
    scrub: 2,
  },
});
gsap.to("#about p", {
  transform: "translateX(-150%)",
  ease: "slow(0.7,0.7,false)",
  scrollTrigger: {
    trigger: "#about",
    scroller: "body",
    // markers:true,
    start: "top 0%",
    end: "top -150%",
    scrub: 2,
    pin: true,
  },
});
// document.addEventListener("DOMContentLoaded", function () {
//     gsap.registerPlugin(ScrollTrigger);

//     // Animation for each bike section
//     gsap.from("#bike", {
//         opacity: 0,
//         y: 50,
//         duration: 1,
//         stagger: 0.3,
//         scrollTrigger: {
//             trigger: "#bike",
//             start: "top 80%",
//             end: "bottom 20%",
//             scrub: true,
//         },
//     });

//     // Animation for images
//     gsap.from("#bikes .image-container img", {
//         scale: 0.8,
//         opacity: 0,
//         duration: 1.5,
//         ease: "power4.out",
//         scrollTrigger: {
//             trigger: "#bikes .image-container",
//             start: "top 80%",
//             end: "bottom 20%",
//             scrub: true,
//         },
//     });

//     // Animation for text
//     gsap.from("#bikes .page-content p", {
//         opacity: 0,
//         y: 30,
//         duration: 1,
//         stagger: 0.2,
//         scrollTrigger: {
//             trigger: "#bikes .page-content",
//             start: "top 80%",
//             end: "bottom 20%",
//             scrub: true,
//         },
//     });
// });
