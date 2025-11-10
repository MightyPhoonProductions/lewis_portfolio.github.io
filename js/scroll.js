const faders = document.querySelectorAll('.fade-init');

function checkFade() {
  const triggerBottom = window.innerHeight * 0.9;
  faders.forEach(f => {
    const top = f.getBoundingClientRect().top;
    if(top < triggerBottom) f.classList.add('fade-in');
  });
}
window.addEventListener('scroll', checkFade);
window.addEventListener('load', checkFade);
