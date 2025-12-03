// scroll.js - IntersectionObserver fade-in
document.addEventListener("DOMContentLoaded", () => {
  const faders = document.querySelectorAll('.fade-init');

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  faders.forEach(f => observer.observe(f));
});
