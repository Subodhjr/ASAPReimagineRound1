document.addEventListener('DOMContentLoaded', function() {
    // Initialize Slick Slider
    $('.slider').slick({
        autoplay: true,
        autoplaySpeed: 1000,
        dots: true,
        arrows: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        fade: true,
        cssEase: 'linear'
    });

    // Expand description on clicking plus icon
    const expandIcons = document.querySelectorAll('.expand-icon');
    expandIcons.forEach(icon => {
        icon.addEventListener('click', () => {
            const expandDesc = icon.closest('.slide-item').querySelector('.expand-description');
            const slideDesc = expandDesc.querySelector('.slide-description');

            expandDesc.classList.toggle('active');
            icon.classList.toggle('rotate');
            slideDesc.classList.toggle('active');
        });
    });

    // Toggle hamburger menu on click
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active'); // Toggle 'active' class on hamburger
        navLinks.classList.toggle('active'); // Toggle 'active' class on navLinks

        // Toggle body scroll lock
        document.body.classList.toggle('no-scroll');
    });

    // Close navbar when a nav link is clicked (on mobile)
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
            document.body.classList.remove('no-scroll'); // Ensure scroll lock is removed
        });
    });

    // Handle dropdown on mobile
    const dropdown = document.querySelector('.dropdown > a');
    if (dropdown) {
        dropdown.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                const dropdownMenu = dropdown.nextElementSibling;
                dropdownMenu.classList.toggle('active');
            }
        });
    }
    $('.products-link').click(function(e){
        e.preventDefault();
        $(this).parent().toggleClass('active');
    });
    $(document).click(function(e) {
        if (!$(e.target).closest('nav').length) {
            $('.nav-links').removeClass('active');
            $('body').removeClass('no-scroll');
            $('.hamburger').removeClass('active');
            $('.dropdown').removeClass('active');
        }
    });
});
  // GSAP animation for fade in
  gsap.from(".hero-content", {
    opacity: 0,
    duration: 1,
    y: 50, // optional: animate from top
    ease: "power2.out", // optional: easing function
    delay: 0.5 // optional: delay before animation starts
  });

  document.addEventListener("DOMContentLoaded", function() {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".page-content p", {
        scrollTrigger: {
            trigger: ".page-content",
            start: "top 80%", // Trigger when the top of the element is 80% from the top of the viewport
            end: "bottom 20%", // End when the bottom of the element is 20% from the top of the viewport
            toggleActions: "play none none reset" // Play the animation when it enters the viewport
        },
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.4, 
        ease: "power3.out"
    });
});

     // Select the page2 element
        const page2 = document.querySelector(".page2");
    
        gsap.from(".page2 .page-content p", {
            scrollTrigger: {
                trigger: page2,
                start: "top 80%", 
                end: "bottom 20%",
                toggleActions: "play none none reset", 
            },
            opacity: 0,
            y: 50,
            duration: 1,
            ease: "power2.out",
            stagger: 0.4, 
        });
        
            document.addEventListener("DOMContentLoaded", function() {
                gsap.registerPlugin(ScrollTrigger);
            
                const image = document.querySelector(".image-container img");
            
                // Define the rotation animation for the image1
                gsap.from(image, {
                    scrollTrigger: {
                        trigger: image,
                       
                        toggleActions: "play none none reset", // Reset animation on each scroll into view
                    },
                  
                });
            });
          // Animation for Project Zero 
          gsap.to('#Project0 .image-container img', {
            rotationY: 360,
            ease: "none",
            scrollTrigger: {
                trigger: "#Project0",
                start: "top center",
                end: "bottom center",
                scrub: true,
              
            }
        });
        
            // Animation for Project One
            gsap.fromTo('#Project1 .image-container img', {
                rotation: 0
            }, {
                rotationY: -360,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: "#Project1",
                    start: "top center",
                    end: "bottom center",
                    scrub: true,
                    markers: false 
                }
            });

// Hover effect using GSAP
const serviceItem = document.querySelectorAll('.service-item');

serviceItem.forEach(item => {
    item.addEventListener('mouseenter', () => {
        gsap.to(item, { scale: 1.1, duration: 0.3 });
    });

    item.addEventListener('mouseleave', () => {
        gsap.to(item, { scale: 1, duration: 0.3 });
    });
});



// Hover effect using GSAP
const serviceItems = document.querySelectorAll('.service-item');

serviceItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        gsap.to(item, { scale: 1.1, duration: 0.3 });
    });

    item.addEventListener('mouseleave', () => {
        gsap.to(item, { scale: 1, duration: 0.3 });
    });
});
// GSAP hover animation for header

// GSAP hover animations for header links
gsap.utils.toArray('.nav-links a').forEach(link => {
    let hoverAnimation = gsap.timeline({ paused: true });
    
    hoverAnimation.to(link, {
        scale: 1.1,
        color: "#ff6347",
        duration: 0.3,
        ease: "power2.inOut"
    });
    
    hoverAnimation.to(link, {
        scale: 1,
        color: "#000",
        duration: 0.3,
        ease: "power2.inOut"
    });
    
    link.addEventListener("mouseenter", () => {
        hoverAnimation.play();
    });
    
    link.addEventListener("mouseleave", () => {
        hoverAnimation.reverse();
    });
});
//hover effect for contact section
gsap.to(".contact-btn", {
    duration: 0.3,
    scale: 1,
    ease: "power2.inOut",
    overwrite: "auto",
    // Hover scale effect
    onHover: function () {
        gsap.to(this.target, { scale: 1.1 });
    },
    onLeave: function () {
        gsap.to(this.target, { scale: 1 });
    },
});
gsap.to(".contact-heading", {
    duration: 0.3,
    scale: 1,
    ease: "power2.inOut",
    overwrite: "auto",
    // Hover color and scale effect
    onHover: function () {
        gsap.to(this.target, { color: "#f00", scale: 1.1 });
    },
    onLeave: function () {
        gsap.to(this.target, { color: "#333", scale: 1 });
    },
});
//heading half move left half right
//animation for project 0
    

// Wait for the DOM content to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Select the product description element
    const productDescription = document.getElementById('product-description');

    // Create a GSAP timeline for the fade-in animation
    gsap.from(productDescription, {
        opacity: 0,                    // Start from opacity 0 (invisible)
        y: 200,                         // Move 20px downward
        duration: 1.5,                   // Animation duration in seconds
        scrollTrigger: {
            trigger: productDescription,   // Element to trigger animation
            start: 'top 90%',             // Start animation when 70% of the element is in view
            end: 'top 20%',               // End animation when 50% of the element is in view
            scrub: true                   // Smoothly scrub through animation
        }
    });
});