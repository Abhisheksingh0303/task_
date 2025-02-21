document.addEventListener("DOMContentLoaded", () => {
    const hoverReveal = document.querySelector('.hover-reveal');
    const hoverImg = document.querySelector('.hover-img');
    const textItems = document.querySelectorAll('.text-container h1');

    textItems.forEach(item => {
        item.addEventListener("mouseenter", (e) => {
            let imageSrc = e.target.getAttribute("data-img");
            hoverImg.style.backgroundImage = `url(${imageSrc})`;
            gsap.to(hoverReveal, { opacity: 1, scale: 1, duration: 0.3 });
        });

        item.addEventListener("mousemove", (e) => {
            gsap.to(hoverReveal, { 
                x: e.clientX - 160, 
                y: e.clientY - 200, 
                duration: 0.4, 
                ease: "power3.out" 
            });
        });

        item.addEventListener("mouseleave", () => {
            gsap.to(hoverReveal, { opacity: 0, scale: 0.8, duration: 0.3 });
        });
    });
});
