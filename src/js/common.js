function animateResponsiveNavItems() {
    if (window.innerWidth < 1024) {
        gsap.fromTo("#navMenu ul li",
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, stagger: 0.2, duration: 0.8, ease: "power3.out" }
        );
    }
}

document.addEventListener("DOMContentLoaded", function () {
    gsap.from("#logo img", {
        opacity: 0,
        scale: 0.5,
        duration: 1,
        delay: 0.5,
        ease: "power3.out"
    });

    gsap.from("#burgerMenu", {
        opacity: 1,
        x: -10,
        duration: 1,
        delay: 0.2,
        ease: "power3.out"
    });

    if (window.innerWidth >= 1024) {
        gsap.from("#navMenu ul li", {
            opacity: 0,
            y: 20,
            stagger: 0.2,
            duration: 0.8,
            delay: 0.2,
            ease: "power3.out"
        });
    }

    gsap.from("#getInTouchBtn", {
        opacity: 0,
        scale: 0.5,
        duration: 1,
        delay: 0.5,
        ease: "power3.out"
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const burgerMenu = document.querySelector('.burgerMenu');
    const nav = document.getElementById('navMenu');

    burgerMenu.addEventListener('click', function () {
        nav.classList.toggle('hidden');

        const spans = this.querySelectorAll('span');
        spans[0].classList.toggle('rotate-45');
        spans[0].classList.toggle('translate-y-[8px]');
        spans[1].classList.toggle('opacity-0');
        spans[2].classList.toggle('rotate-135');
        spans[2].classList.toggle('translate-y-[-8px]');

        // Animate when menu opens
        if (!nav.classList.contains('hidden')) {
            animateResponsiveNavItems();
        }
    });
});


// banner-text
document.addEventListener("DOMContentLoaded", function () {
    function applyStaggeredAnimation(selector) {
        const $text = document.querySelectorAll(selector);
        gsap.timeline({ repeat: 0 })
            .staggerFrom(
                $text,
                0.5,
                {
                    opacity: 0,
                    y: 50,
                    scale: 0.8,
                    ease: "Power1.easeOut"
                },
                0.1)
            .to($text, 0.5, { opacity: 1, ease: "Power1.easeOut" });
    }

    function applyFadeInTextAnimation(selector) {
        const $text = document.querySelectorAll(selector);
        gsap.from($text, {
            opacity: 0,
            scale: 0.8,
            duration: 0.6,
            ease: "Power1.easeOut"
        });
    }

    function handleIntersection(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                applyStaggeredAnimation(".fade-text span");
                applyFadeInTextAnimation(".fade-in-text");
                observer.disconnect();
            }
        });
    }

    const observer = new IntersectionObserver(handleIntersection, {
        threshold: 0.5
    });

    const fadeTextElement = document.querySelector('.fade-text');
    if (fadeTextElement) {
        observer.observe(fadeTextElement);
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".counter");

    const animateCounter = (counter) => {
        const hasPlus = counter.getAttribute("data-plus") === "true";
        const target = +counter.getAttribute("data-target");

        gsap.fromTo(counter,
            { innerText: 0 },
            {
                innerText: target,
                duration: 2,
                ease: "power1.out",
                snap: { innerText: 1 },
                onUpdate: function () {
                    counter.innerText = Math.floor(counter.innerText) + (hasPlus ? "+" : "");
                }
            }
        );
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target); // Ek baar animate hone ke baad fir se dobara na ho
            }
        });
    }, {
        threshold: 0.5 // Jab 50% counter visible ho tab trigger kare
    });

    counters.forEach(counter => {
        observer.observe(counter);
    });
});


// auto-slider
const images = document.querySelectorAll('.slider-img');
gsap.set(images, { opacity: 0.3, transition: 'opacity 0.3s ease' });

images.forEach(img => {
    img.addEventListener('mouseenter', () => gsap.to(img, { opacity: 1 }));
    img.addEventListener('mouseleave', () => gsap.to(images, { opacity: 0.3 }));
});

// card-slide 
const cardWrapper = document.getElementById("cardWrapper");
let box_items = gsap.utils.toArray(".horizontal__item");
var banner_section = document.getElementById('banner-section');

gsap.registerPlugin(ScrollTrigger);

let mm = gsap.matchMedia();

mm.add("(min-width: 768px)", () => {
    gsap.set(box_items, {
        trigger: "#banner-section",
        xPercent: 0,
        x: (i) => -i * 350,
        rotate: 10,
        zIndex: (i) => box_items.length - i,
        transformOrigin: "bottom center",
        force3D: true,
    });

    gsap.to(box_items, {
        x: (i) => i * 0,
        rotate: 0,
        ease: "power1.out",
        scrollTrigger: {
            trigger: "#banner-section",
            pin: true,
            scrub: 1.5,
            start: "bottom top",
            end: "+=" + (cardWrapper.offsetWidth * 0.1),
            onUpdate: (self) => {
                if (self.progress < 0.1) {
                    gsap.set(box_items, { rotate: 10 });
                } else if (self.progress >= 0.1 && self.progress < 1) {
                    gsap.set(box_items, { rotate: 0 });
                }
            }
        }
    });

    gsap.registerPlugin(ScrollTrigger);

    const getScrollAmount = () => {
        const races = document.getElementById("cards");
        let racesWidth = races.scrollWidth;
        return -(racesWidth - window.innerWidth);
    };

    const tween = gsap.to("#cards", {
        transform: "translateX(-100%)",
        duration: 3,
        ease: "none",
    });

    ScrollTrigger.create({
        trigger: "#cardWrapper",
        start: "top top",
        end: "top -100%",
        pin: true,
        animation: tween,
        scrub: 5,
        invalidateOnRefresh: true,
    });
});

box_items.forEach(item => {
    item.addEventListener('mouseenter', () => {
        gsap.to(item, { y: -10, duration: 0.3, ease: 'power1.out' });
    });
    item.addEventListener('mouseleave', () => {
        gsap.to(item, { y: 0, duration: 0.3, ease: 'power1.out' });
    });
});


// grow section 
gsap.utils.toArray(".section").forEach((section, index) => {
    gsap.from(section, {
        scrollTrigger: {
            trigger: section,
            start: "top 90%",
            end: "bottom 10%",
            scrub: index === 1 ? 2 : 1,
            markers: false,
            anticipatePin: 1,
        },
        opacity: 1,
        y: 150,
        rotation: 10,
        ease: "power4.out",
    });
});


mm.add("(max-width: 767px)", () => {
    box_items.forEach((item, i) => {
        const direction = i % 2 === 0 ? -1 : 1;

        gsap.from(item, {
            x: direction * 100,
            opacity: 0,
            rotation: 10,
            duration: 1.5,
            ease: "power2.out",
            scrollTrigger: {
                trigger: item,
                start: "top 90%",
                end: "top 50%",
                scrub: 1,
                markers: false,
            }
        });
    });
});


// Success Stories 
gsap.registerPlugin(ScrollTrigger);

const section = document.getElementById("projectsSection");
const projectItems = document.querySelectorAll(".project-item");
const projectImg = document.getElementById("projectImg");
const projectTitle = document.getElementById("projectTitle");
const projectTags = document.getElementById("projectTags");

const projectData = [
    {
        title: "Signaturia",
        image: "images/everprint.png",
        features: ["Design", "Web App", "Signature Generator"]
    },
    {
        title: "Ticket Booking",
        image: "images/ticket.png",
        features: ["UI/UX", "Booking", "React"]
    },
    {
        title: "Jewelry Design",
        image: "images/jewelry.png",
        features: ["3D Renders", "Branding", "Luxury"]
    },
    {
        title: "Office Management",
        image: "images/office.png",
        features: ["Dashboard", "HR Tools", "Productivity"]
    }
];

let currentIndex = 0;

const firstItem = projectItems[0];
gsap.set(firstItem.querySelector(".project-title"), { opacity: 1 });

const firstDesc = firstItem.querySelector(".project-description");
firstDesc.style.display = "block";
firstDesc.style.height = "auto";
gsap.set(firstDesc, { opacity: 1, marginTop: "1rem" });

const firstArrow = firstItem.querySelector(".project-arrow");
if (firstArrow) {
    firstArrow.style.display = "inline-block";
    gsap.set(firstArrow, { opacity: 1 });
}

updateProject(0);

function updateProject(index) {
    const currentData = projectData[index];

    projectImg.src = currentData.image;
    projectImg.alt = currentData.title;
    projectTitle.textContent = currentData.title;

    projectTags.innerHTML = "";
    currentData.features.forEach((tag) => {
        const li = document.createElement("li");
        li.className = "px-[16px] py-[4px] border-1 border-black rounded-full";
        li.textContent = tag;
        projectTags.appendChild(li);
    });
}

gsap.to({}, {
    scrollTrigger: {
        trigger: section,
        start: "top top",
        end: `+=${(projectItems.length - 1) * window.innerHeight}`,
        scrub: 0.3,
        pin: true,
        onUpdate: (self) => {
            const newIndex = Math.round(self.progress * (projectItems.length - 1));
            if (currentIndex !== newIndex) {
                const prev = projectItems[currentIndex];
                gsap.to(prev.querySelector(".project-title"), { opacity: 0.3 });
                gsap.to(prev.querySelector(".project-description"), {
                    height: 0,
                    opacity: 0,
                    marginTop: 0,
                    overflow: "hidden",
                    duration: 0.4,
                    ease: "power2.inOut"
                });

                const next = projectItems[newIndex];
                gsap.to(next.querySelector(".project-title"), { opacity: 1 });

                const desc = next.querySelector(".project-description");
                desc.style.display = "block";
                const fullHeight = desc.scrollHeight;

                gsap.fromTo(desc, {
                    height: 0,
                    opacity: 0,
                    marginTop: 0,
                }, {
                    height: fullHeight,
                    opacity: 1,
                    marginTop: "1rem",
                    duration: 0.5,
                    ease: "power2.inOut",
                    onComplete: () => {
                        desc.style.height = "auto";
                    }
                });

                document.querySelectorAll(".project-arrow").forEach((arrow) => {
                    gsap.to(arrow, { opacity: 0, duration: 0.3 });
                });

                const activeArrow = next.querySelector(".project-arrow");
                if (activeArrow) {
                    activeArrow.style.display = 'inline-block';
                    gsap.to(activeArrow, { opacity: 1, duration: 0.3 });
                }

                currentIndex = newIndex;
                updateProject(currentIndex);
            }
        }
    }
});



// gsap.registerPlugin(ScrollTrigger);

// document.addEventListener("DOMContentLoaded", () => {
//     const spans = document.querySelectorAll('.animate-text span');

//     const lastSpan = spans[spans.length - 1];
//     const lastSpanOffset = lastSpan.offsetTop;

//     spans.forEach((span) => {
//         const offsetY = lastSpanOffset - span.offsetTop;

//         // Set all spans to start stacked on the last line (visually)
//         gsap.set(span, {
//             y: offsetY
//         });
//     });

//     // Animate them into their original positions
//     gsap.to(spans, {
//         y: 0,
//         stagger: 0.2,
//         duration: 1,
//         ease: "power4.out",
//         scrollTrigger: {
//             trigger: '.animate-text-wrapper',
//             start: 'top 80%',
//             end: 'bottom 20%',
//             scrub: true,
//             markers: true
//         }
//     });
// });


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

// freedback scrolltrigger 
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








