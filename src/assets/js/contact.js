function rotateClockHands(clockSelector, timeZone) {
                const clock = document.querySelector(clockSelector);
                const hourHand = clock.querySelector('.hour-hand');
                const minuteHand = clock.querySelector('.minute-hand');
                const secondHand = clock.querySelector('.second-hand');
                const amPmLabel = clock.querySelector('.time');
        
                function updateClock() {
                    const now = new Date();
        
                    // Convert time to the desired time zone
                    const options = {
                        timeZone: timeZone,
                        hour12: false,
                        hour: '2-digit',
                        minute: '2-digit',
                        second: '2-digit'
                    };
                    const formatter = new Intl.DateTimeFormat('en-US', options);
                    const parts = formatter.formatToParts(now);
        
                    const hour = parseInt(parts.find(p => p.type === 'hour').value);
                    const minute = parseInt(parts.find(p => p.type === 'minute').value);
                    const second = parseInt(parts.find(p => p.type === 'second').value);
        
                    const amPm = hour >= 12 ? 'PM' : 'AM';
                    amPmLabel.textContent = amPm;
        
                    const hourDeg = ((hour % 12) + minute / 60) * 30;
                    const minuteDeg = (minute + second / 60) * 6;
                    const secondDeg = second * 6;
        
                    hourHand.style.transform = `rotate(${hourDeg}deg)`;
                    minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
                    secondHand.style.transform = `rotate(${secondDeg}deg)`;
                }
        
                updateClock();
                setInterval(updateClock, 1000);
            }
        
            // Initialize clocks
            rotateClockHands('.india_clock', 'Asia/Kolkata');
            rotateClockHands('.aus_clock', 'Europe/Paris');

            function switchMap(branch) {
    const map = document.getElementById("mapIframe");
    const branch1Btn = document.getElementById("branch1Btn");
    const branch2Btn = document.getElementById("branch2Btn");

    if (branch === 1) {
      map.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15249885.318783779!2d82.75252935!3d21.0680074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1745035568980!5m2!1sen!2sin";

      branch1Btn.classList.add("bg-primary", "text-secondary");
      branch1Btn.classList.remove("text-black");

      branch2Btn.classList.remove("bg-primary", "text-secondary");
      branch2Btn.classList.add("text-black");
    } else {
      map.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9999934746547!2d2.2922929156743595!3d48.858373579287756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fdbf57921e7%3A0xc80b8f06e177fe62!2sEiffel%20Tower!5e0!3m2!1sen!2sfr!4v1745035777263!5m2!1sen!2sfr";

      branch2Btn.classList.add("bg-primary", "text-secondary");
      branch2Btn.classList.remove("text-black");

      branch1Btn.classList.remove("bg-primary", "text-secondary");
      branch1Btn.classList.add("text-black");
    }
  }    


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