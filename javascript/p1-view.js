function locomotive() {
    gsap.registerPlugin(ScrollTrigger);
  
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector(".main"),
      smooth: true ,
    });
    locoScroll.on("scroll", ScrollTrigger.update);
  
    ScrollTrigger.scrollerProxy(".main", {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      },
  
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
  
      pinType: document.querySelector(".main").style.transform
        ? "transform"
        : "fixed",
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
  }
  locomotive();
  
  
  const canvas = document.querySelector("canvas");
  const context = canvas.getContext("2d");
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  
  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });
  
  function files(index) {
    var data = `
    ./images/p1/p1-360/1.png
    ./images/p1/p1-360/2.png
    ./images/p1/p1-360/3.png
    ./images/p1/p1-360/4.png
    ./images/p1/p1-360/5.png
    ./images/p1/p1-360/6.png
    ./images/p1/p1-360/7.png
    ./images/p1/p1-360/8.png
    ./images/p1/p1-360/9.png
    ./images/p1/p1-360/10.png
    ./images/p1/p1-360/11.png
    ./images/p1/p1-360/12.png
    ./images/p1/p1-360/13.png
    ./images/p1/p1-360/14.png
    ./images/p1/p1-360/15.png
    ./images/p1/p1-360/16.png
    ./images/p1/p1-360/17.png
    ./images/p1/p1-360/18.png
    ./images/p1/p1-360/19.png
    ./images/p1/p1-360/20.png
    ./images/p1/p1-360/21.png
    ./images/p1/p1-360/22.png
    ./images/p1/p1-360/23.png
    ./images/p1/p1-360/24.png
    ./images/p1/p1-360/25.png
    ./images/p1/p1-360/26.png
    ./images/p1/p1-360/27.png
    ./images/p1/p1-360/28.png
    ./images/p1/p1-360/29.png
    ./images/p1/p1-360/30.png
    ./images/p1/p1-360/31.png
    ./images/p1/p1-360/32.png
    ./images/p1/p1-360/33.png
    ./images/p1/p1-360/34.png
    ./images/p1/p1-360/35.png
    ./images/p1/p1-360/36.png
    ./images/p1/p1-360/37.png
    ./images/p1/p1-360/38.png
    ./images/p1/p1-360/39.png
    ./images/p1/p1-360/40.png
    ./images/p1/p1-360/41.png
    ./images/p1/p1-360/42.png
    ./images/p1/p1-360/43.png
    ./images/p1/p1-360/44.png
    ./images/p1/p1-360/45.png
    ./images/p1/p1-360/46.png
    ./images/p1/p1-360/47.png
    ./images/p1/p1-360/48.png
    ./images/p1/p1-360/49.png
    ./images/p1/p1-360/50.png
    ./images/p1/p1-360/51.png
    ./images/p1/p1-360/52.png
    ./images/p1/p1-360/53.png
    ./images/p1/p1-360/54.png
    ./images/p1/p1-360/55.png
    ./images/p1/p1-360/56.png
    ./images/p1/p1-360/57.png
    ./images/p1/p1-360/58.png
    ./images/p1/p1-360/59.png
    ./images/p1/p1-360/60.png
    ./images/p1/p1-360/61.png
    ./images/p1/p1-360/62.png
    ./images/p1/p1-360/63.png
    ./images/p1/p1-360/64.png
    ./images/p1/p1-360/65.png
   `;
    return data.split("\n")[index].trim();
  }
  
  const frameCount = 65;
  
  const images = [];
  const imageSeq = {
    frame: 1,
    // frame: 0,
  };
  
  for (let i = 1; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }
  
  images[1].onload = render;

  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
      scrub: 0.15,
      trigger: `.page>canvas`,
      start: `top top`,
      end: `600% top`,
      scroller: `.main`,
    },
    onUpdate: render,
  });
  
//   images[1].onload = render;
  images[1].onload = render;
  
  function render() {
    scaleImage(images[imageSeq.frame], context);
  }
  
  function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  }
  ScrollTrigger.create({
    trigger: ".page>canvas",
    pin: true,
    // markers:true,
    scroller: `.main`,
    start: `top top`,
    end: `600% top`,
  });
  
gsap.to(".page1",{
    scrollTrigger:{
      trigger:`.page1`,
      start:`top top`,
      end:`bottom top`,
      pin:true,
      scroller:`.main`
    }
  })
  gsap.to(".page2",{
    scrollTrigger:{
      trigger:`.page2`,
      start:`top top`,
      end:`bottom top`,
      pin:true,
      scroller:`.main`
    }
  })
  gsap.to(".page3",{
    scrollTrigger:{
      trigger:`.page3`,
      start:`top top`,
      end:`bottom top`,
      pin:true,
      scroller:`.main`
    }
  })
gsap.to(".page4",{
    scrollTrigger:{
      trigger:`page4`,
      start:`top top`,
      end:`bottom top`,
      pin:true,
      scroller:`.main`
    }
  })
  gsap.to(".page5",{
    scrollTrigger:{
      trigger:`.page5`,
      start:`top top`,
      end:`bottom top`,
      pin:true,
      scroller:`.main`
    }
  })
  gsap.to(".page6",{
    scrollTrigger:{
      trigger:`.page6`,
      start:`top top`,
      end:`bottom top`,
      pin:true,
      scroller:`.main`
    }
  })