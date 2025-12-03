// Typing effect for intro text + theme, back-to-top and audio wiring
document.addEventListener("DOMContentLoaded", () => {
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
  typeIntro();

  // Play power-on (optional)
  function playAudio(src){
    const audio = new Audio(src);
    audio.volume = 0.15;
    audio.play().catch(()=>{});
  }
  playAudio("/lewis_portfolio.github.io/audio/poweron.mp3");

  // Theme toggle wrapper
  window.toggleTheme = function() {
    document.body.classList.toggle("dark");
  };

  // Sidebar toggle wrapper
  window.toggleSidebar = function() {
    document.body.classList.toggle("collapsed");
    playClick();
  };

  // Click sound
  window.playClick = function() {
    const audio = new Audio("/lewis_portfolio.github.io/audio/click.mp3");
    audio.volume = 0.25;
    audio.play().catch(()=>{});
  };

  // Back to top
  window.scrollToTop = function() {
    window.scrollTo({top:0,behavior:'smooth'});
  };

  // Attach small audio to interactive elements
  document.querySelectorAll('button,a').forEach(el=>{
    el.addEventListener('click',()=>playClick());
  });
});
