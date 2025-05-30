// Register plugin

gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
    const spans = document.querySelectorAll('.animate-text span');

    const lastSpan = spans[spans.length - 1];
    const lastSpanOffset = lastSpan.offsetTop;

    spans.forEach((span) => {
        const offsetY = lastSpanOffset - span.offsetTop;

        gsap.set(span, {
            opacity: 0,
            y: offsetY
        });
    });

    gsap.to(spans, {
        opacity: 1,
        y: 0,
        stagger: 0.15,
        duration: 1.4,
        ease: "power3.out",
        scrollTrigger: {
            trigger: '.animate-text-wrapper',
            start: 'top 80%',
            end: 'bottom 15%',
            scrub: 2,
            markers: false
        }
    });
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

