// scroll.js
document.addEventListener('DOMContentLoaded', () => {
  const faders = document.querySelectorAll('.fade-in');
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  faders.forEach(f => observer.observe(f));

  // Video hover play (muted)
  const mediaItems = document.querySelectorAll('.media-item');
  mediaItems.forEach(item => {
    const vid = item.querySelector('video');
    if(vid){
      item.addEventListener('mouseenter', () => { vid.muted = true; vid.play().catch(()=>{}); });
      item.addEventListener('mouseleave', () => { vid.pause(); vid.currentTime = 0; });
    }
  });
});
