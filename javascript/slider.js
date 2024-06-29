document.addEventListener("mousemove", function (details) {
    document.querySelectorAll(".slide-element").forEach((elem) => {
        const position =elem.getAttribute("data-value");
        var x = (window.innerWidth - details.clientX * position) / 50;
        elem.style.transform = `translateX(${-x}px)`
    });
});