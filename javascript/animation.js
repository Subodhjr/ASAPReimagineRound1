gsap.to("#home .herocontent .hero-section-text .head1", {
  x: -350,
  duration: 2,
  scrollTrigger: {
    trigger: "#home .herocontent",
    scroller: "body",
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
    scroller: "body",
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
    scroller: "body",
    // markers:true,
    start: "top 65%",
    end: "top 50%",
    scrub: 2,
  },
});
gsap.to("#about p", {
  y: -200,
  // opacity:0,
  duration: 0.5,
  stagger: 1,
  transform: "translateX(-500%)",
  ease: "slow(0.7,0.7,false)",
  scrollTrigger: {
    trigger: "#about",
    scroller: "body",
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
    scroller: "body",
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
    scroller: "body",
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
    scroller: "body",
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
    scroller: "body",
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
    scroller: "body",
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
    scroller: "body",
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
    scroller: "body",
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
    scroller: "body",
    // markers:true,
    start: "top 57%",
    end: "top 35%",
    scrub: 2,
  },
});
// document.addEventListener("DOMContentLoaded", () => {
//   // gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
//     document.querySelectorAll(".navs").forEach((link) => {
//       link.addEventListener("click", function (e) {
//       e.preventDefault();
//       const targetId = this.getAttribute("href");
//       const target = document.querySelector(targetId);

//       // Disable animations during scroll
//       animations.forEach((animation) => animation.scrollTrigger.disable());

//       // Perform smooth scrolling
//       gsap.to(window, {
//         scrollTo: { y: target.offsetTop, autoKill: false },
//         duration: 1,
//         onComplete: () => {
//           // Re-enable animations after scroll
//           animations.forEach((animation) => animation.scrollTrigger.enable());
//         },
//       });
//     });
//   });

  // Resume animations on user scroll
  // window.addEventListener("scroll", () => {
    // animations.forEach((animation) => animation.resume());
  // });
// });
// gsap.from("#about p",{
//     y:400,
//     opacity:0,
//     duration:0.5,
//     stagger:1,
//     scrollTrigger:{
//         trigger:"#about",
//         scroller:"body",
//         markers:true,
//         start:"top 0%",
//         end:"-250%",
//         scrub:2,
//         pin:true
//     }
// })
// var tl = gsap.timeline()
// tl.from("#about .i1",{
//     y:400,
//     opacity:0,
//     duration:0.5
// })
// tl.from("#about .i2",{
//     y:400,
//     opacity:0,
//     duration:0.5
// })
// tl.from("#about .i3",{
//     y:400,
//     opacity:0,
//     duration:0.5
// })
// tl.from("#about .i4",{
//     y:400,
//     opacity:0,
//     duration:0.5
// })
// tl.from("#about .i5",{
//     y:400,
//     opacity:0,
//     duration:0.5
// })
// tl.from("#about .i6",{
//     y:400,
//     opacity:0,
//     duration:0.5
// })
// tl.from("#about .i7",{
//     y:400,
//     opacity:0,
//     duration:0.5
// })
// tl.from("#about .i8",{
//     y:400,
//     opacity:0,
//     duration:0.5
// })
// tl.from("#about .i9",{
//     y:400,
//     opacity:0,
//     duration:0.5
// })
// tl.from("#about .i10",{
//     y:400,
//     opacity:0,
//     duration:0.5
// })
// tl.from("#about .i11",{
//     y:400,
//     opacity:0,
//     duration:0.5
// })
// tl.from("#about .i12",{
//     y:400,
//     opacity:0,
//     duration:0.5
// })
// tl.from("#about .i13",{
//     y:400,
//     opacity:0,
//     duration:0.5
// })
// gsap.from("#about p", {
//     y:500,
//     opacity:0,
//     ease: "slow(0.7,0.7,false)",
//     scrollTrigger:"#about p",
//     stagger:0.5
//   });
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

// function breakText(){
//     var p = document.querySelector(".about-section p")
//     var p1 = p.textContent
//     var splittedword = p1.split(" ")
//     var cut=""
//     splittedword.forEach(function(e,idx){
//     cut= cut + " " + `<span class="a">${e}</span>`
//     })
//     p.innerHTML = cut
// }
// breakText()
// gsap.from("p span",{

// })
