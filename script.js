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
});
