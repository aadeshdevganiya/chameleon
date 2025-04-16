// Register plugin
gsap.registerPlugin(ScrollTrigger);

// Animate the Hero Text (first section)
gsap.from(".banner-subtitle", {
    scrollTrigger: {
        trigger: ".banner-subtitle",
        start: "top 80%",
        toggleActions: "play reverse play reverse",
    },
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power3.out"
});

gsap.from(".why-card", {
    scrollTrigger: {
        trigger: ".why-card",
        start: "top 80%", // animation starts when card is in view
        toggleActions: "play none none none"
    },
    opacity: 0,
    y: 50,
    duration: 0.8,
    stagger: 0.3,
    ease: "power2.out"
});

gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".feedback-card").forEach((card, index) => {
    gsap.from(card, {
        y: 60,
        scale: 0.8,
        rotateZ: index % 2 === 0 ? 8 : 8,
        opacity: 0.5,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
            trigger: card,
            start: "top 85%",
            end: "bottom 30%",
            toggleActions: "play none none reverse",
            scrub: true,
            once: false,
        },
    });
});
