gsap.registerPlugin(ScrollTrigger);

const cards = document.querySelectorAll(".why-card");

cards.forEach((card, index) => {
    const direction = index % 2 === 0 ? -1000 : 1000; // left for even, right for odd
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play reverse play reverse",
        },
        x: direction,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    });
});

gsap.utils.toArray('[data-animate="left"]').forEach((elem) => {
    gsap.from(elem, {
        x: -100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
            trigger: elem,
            start: "top 80%",
            toggleActions: "play reverse play reverse",
        },
    });
});

gsap.utils.toArray('[data-animate="right"]').forEach((elem) => {
    gsap.from(elem, {
        x: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
            trigger: elem,
            start: "top 80%",
            toggleActions: "play reverse play reverse",
        },
    });
});