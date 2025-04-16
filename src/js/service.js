gsap.registerPlugin(ScrollTrigger);

let horizontalSection = document.querySelector('.horizontal');

gsap.to('.horizontal', {
    x: () => -(horizontalSection.scrollWidth - window.innerWidth),
    ease: "none",
    scrollTrigger: {
        trigger: '#horizontal-scoll',
        start: 'top top',
        end: () => `+=${horizontalSection.scrollWidth}`,
        pin: '#horizontal-scoll',
        scrub: 0.5, // you can use scrub: 0.5 for smoother feel
        invalidateOnRefresh: true
    }
});







const toggles = document.querySelectorAll(".accordion-toggle");

toggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
        const content = toggle.nextElementSibling;
        const icon = toggle.querySelector(".icon");

        // Toggle visibility
        content.classList.toggle("hidden");

        // Toggle icon
        icon.textContent = content.classList.contains("hidden") ? "+" : "–";
    });
});