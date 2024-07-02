var menu = document.querySelector(".nav .hamburger i")
var cross = document.querySelector(".menu i")
var t = gsap.timeline()

t.to(".menu",{
    right:0,
    duration:0.2,

})
t.from(".menu .men",{
    x:150,
    duration:0.2,
    stagger:0.1,
    opacity:0
})
t.from(".menu i",{
    opacity:0
})
t.pause()
menu.addEventListener("click",function(){
    t.play()
})
cross.addEventListener("click",function(){
    t.reverse()
})