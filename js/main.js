// Typing effect for intro text
const intro = "Creative and technically skilled artist bridging art & engineering. Proficient in shaders, tools, and real-time 3D pipelines.";
const introEl = document.getElementById("intro-text");
let idx = 0;
function typeIntro() {
  if(idx < intro.length){
    introEl.innerHTML += intro[idx];
    idx++;
    setTimeout(typeIntro, 30);
  }
}
window.addEventListener("load", () => {
  typeIntro();
  playAudio("/lewis_portfolio.github.io/audio/poweron.mp3");
});

// Theme toggle
function toggleTheme() {
  document.body.classList.toggle("dark");
}

// Back to top
function scrollToTop() {
  window.scrollTo({top:0,behavior:'smooth'});
}

// Audio feedback
function playAudio(src){
  const audio = new Audio(src);
  audio.volume = 0.2;
  audio.play();
}
document.querySelectorAll('button,a').forEach(el=>{
  el.addEventListener('click',()=>playAudio("/lewis_portfolio.github.io/audio/click.mp3"));
});
