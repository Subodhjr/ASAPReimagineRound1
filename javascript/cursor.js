document.addEventListener("DOMContentLoaded", function() {
    // Select necessary elements
    var cursor = document.querySelector("#cursor");
  
    // Add event listener for mousemove on the document
    document.addEventListener("mousemove", function(event) {
      // Use GSAP to smoothly animate cursor movement
      gsap.to(cursor, {
        x: event.clientX, 
        y: event.clientY, 
        duration: 0.3,
        ease: "power2.out"
      });
    });
  
    // Add event listener for mouseenter on the image
    var img = document.querySelector(".product-detail-section img");
    img.addEventListener("mouseenter", function() {
      cursor.innerHTML = "View More";
      gsap.to(cursor, {
        scale: 1.5,
        duration: 0.3,
        ease: "power2.out"
      });
    });
  
    // Add event listener for mouseleave on the image
    img.addEventListener("mouseleave", function() {
      cursor.innerHTML = "";
      gsap.to(cursor, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out"
      });
    });
  
  });
  