gsap.registerPlugin(ScrollTrigger);

const section = document.getElementById("projectsSection");
const projectItems = document.querySelectorAll(".project-item");
const projectImg = document.getElementById("projectImg");
const projectTitle = document.getElementById("projectTitle");
const projectTags = document.getElementById("projectTags");

let currentIndex = 0;

function updateProject(index) {
  const currentData = projectData[index];

  // Update image
  projectImg.src = currentData.image;
  projectImg.alt = currentData.title;

  // Update title
  projectTitle.textContent = currentData.title;

  // Update tags
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
        // Animate previous title
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

        // Animate new title
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

        currentIndex = newIndex;
        updateProject(currentIndex);
      }
    }
  }
});