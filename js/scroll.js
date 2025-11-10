// Fade in sections on scroll
const faders = document.querySelectorAll("section, .media-grid");
const appearOptions = { threshold: 0.2, rootMargin: "0px 0px -50px 0px" };
const appearOnScroll = new IntersectionObserver(function(entries, observer){
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("fade-in");
      observer.unobserve(entry.target);
    }
  });
}, appearOptions);

faders.forEach(fader => { fader.classList.add("fade-init"); appearOnScroll.observe(fader); });
