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
    y: -50, // optional: animate from top
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
        stagger: 0.4, // Stagger the animations of the paragraphs
        ease: "power3.out"
    });
});

     // Select the page2 element
        const page2 = document.querySelector(".page2");
    
        // Define the animation for the page-content elements inside page2
        gsap.from(".page2 .page-content p", {
            scrollTrigger: {
                trigger: page2,
                start: "top 80%", // Trigger animation when top of the element is 80% from the top of viewport
                end: "bottom 20%", // End animation when bottom of the element is 20% from the top of viewport
                toggleActions: "play none none reset", // Reset animation on each scroll into view
            },
            opacity: 0,
            y: 50,
            duration: 1,
            ease: "power4.out",
            stagger: 0.5, // Add stagger for a more natural effect
        });
        
            // // Select the image-container element
            // const imageContainer = document.querySelector(".image-container");
        
            // // Define the rotation animation for the image
            // gsap.from(".image-container img", {
            //     scrollTrigger: {
            //         trigger: imageContainer,
            //         start: "top 80%", // Trigger animation when top of the element is 80% from the top of viewport
            //         end: "bottom 20%",
            
            //         toggleActions: "play none none reset", // Reset animation on each scroll into view
            //     },
            //     rotationY: 360, // Rotate 360 degrees
            //     duration: 2, // Animation duration
            //     ease: "power3.out", // Easing function
            // });
            document.addEventListener("DOMContentLoaded", function() {
                gsap.registerPlugin(ScrollTrigger);
            
                // Select the image element
                const image = document.querySelector(".image-container img");
            
                // Define the rotation animation for the image
                gsap.from(image, {
                    scrollTrigger: {
                        trigger: image,
                        start: "top 80%", // Trigger animation when top of the image is 80% from the top of viewport
                        end: "bottom 20%", // End animation when bottom of the image is 20% from the top of viewport
                        toggleActions: "play none none reset", // Reset animation on each scroll into view
                    },
                    rotationY: 360, // Rotate 360 degrees
                    duration: 4,
                    ease: "power2.out", // Ease type
                });
            });
            document.addEventListener("DOMContentLoaded", function() {
                // Select the image inside .image-container
                gsap.registerPlugin(ScrollTrigger);
                const ima = document.querySelector("page2 page bike #Project1 .image-container img");
                gsap.from(ima, {
                    scrollTrigger: {
                        trigger: ima,
                        start: "top 80%", // Trigger animation when top of the image is 80% from the top of viewport
                        end: "bottom 20%", // End animation when bottom of the image is 20% from the top of viewport
                        toggleActions: "play none none reset", // Reset animation on each scroll into view
                    },
                    rotationY: 360, // Rotate 360 degrees
                    duration: 4,
                    ease: "power2.out", // Ease type
                });
                });
        