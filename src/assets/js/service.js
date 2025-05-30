// gsap.registerPlugin(ScrollTrigger);

// let horizontalSection = document.querySelector('.horizontal');

// gsap.to('.horizontal', {
//     x: () => -(horizontalSection.scrollWidth - window.innerWidth),
//     ease: "none",
//     scrollTrigger: {
//         trigger: '#horizontal-scoll',
//         start: 'top top',
//         end: () => `+=${horizontalSection.scrollWidth}`,
//         pin: '#horizontal-scoll',
//         scrub: 0.5, // you can use scrub: 0.5 for smoother feel
//         invalidateOnRefresh: true
//     }
// });

// const toggles = document.querySelectorAll(".accordion-toggle");

// toggles.forEach((toggle) => {
//     toggle.addEventListener("click", () => {
//         const content = toggle.nextElementSibling;
//         const icon = toggle.querySelector(".icon");

//         // Toggle visibility
//         content.classList.toggle("hidden");

//         // Toggle icon
//         icon.textContent = content.classList.contains("hidden") ? "+" : "–";
//     });
// });   


gsap.registerPlugin(ScrollTrigger);

let horizontalSection = document.querySelector('#horizontal-scoll');

console.log(horizontalSection.scrollWidth);

gsap.to('.horizontal', {
  x: () => horizontalSection.scrollWidth * -1,
  xPercent: 100,
  scrollTrigger: {
    trigger: '.horizontal',
    start: 'center center',
    end: '+=2000px',
    pin: true,
    scrub: 5,
    
    invalidateOnRefresh: true
  }
});

// footer
window.addEventListener("load", () => {
  gsap.registerPlugin(ScrollTrigger);

  // Animate all footer blocks
  gsap.utils.toArray("#footer [data-animate]").forEach((el, i) => {
    gsap.fromTo(el, {
      opacity: 0,
      y: 30
    }, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out",
      delay: i * 0.2,
      scrollTrigger: {
        trigger: "#footer",  // Use entire footer as the trigger
        start: "top 85%",
        toggleActions: "play none none none"
      }
    });
  });

  // Animate register section
  gsap.utils.toArray("#register [data-animate]").forEach((el, i) => {
    gsap.fromTo(el, {
      opacity: 0,
      y: 40
    }, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
      delay: i * 0.3,
      scrollTrigger: {
        trigger: "#register",
        start: "top 80%",
        toggleActions: "play none none none"
      }
    });
  });
});