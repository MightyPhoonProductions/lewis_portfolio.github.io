// main.js
document.addEventListener('DOMContentLoaded', () => {

  // Toggle menu (desktop collapses, mobile slides)
  const toggleBtn = document.getElementById('toggle-btn');
  toggleBtn.addEventListener('click', () => {
    if (window.innerWidth > 900) document.body.classList.toggle('collapsed');
    else document.body.classList.toggle('show-sidebar');
    playClick();
  });

  // Sound toggle
  const soundToggle = document.getElementById('sound-toggle');
  const audio = new Audio('audio/click.mp3');
  audio.volume = 0.25;
  let soundOn = true;
  function playClick(){
    if(soundOn && audio) {
      try{ audio.currentTime = 0; audio.play().catch(()=>{}); }catch(e){}
    }
  }
  soundToggle.addEventListener('click', () => {
    soundOn = !soundOn;
    soundToggle.textContent = soundOn ? '🔊' : '🔇';
  });

  // Back to top
  const backBtn = document.getElementById('back-to-top');
  window.addEventListener('scroll', () => {
    if(window.scrollY > 400) backBtn.classList.add('show'); else backBtn.classList.remove('show');
  });
  backBtn.addEventListener('click', () => { window.scrollTo({top:0, behavior:'smooth'}); playClick(); });

  // Progress bar
  const progressBar = document.getElementById('progress-bar');
  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const height = document.documentElement.scrollHeight - window.innerHeight;
    const pct = (scrolled / height) * 100;
    progressBar.style.width = pct + '%';
  });

  // Typing flicker (simple)
  const typed = document.getElementById('typed');
  const text = typed.textContent;
  typed.textContent = '';
  let i = 0;
  const typeTick = setInterval(() => {
    typed.textContent += text[i++];
    if(i >= text.length) { clearInterval(typeTick); blinkCursor(); }
  }, 60);
  function blinkCursor(){
    const cursor = document.querySelector('.cursor');
    let on = true;
    setInterval(()=> cursor.style.opacity = on ? '1' : '0.15', 500);
  }

  // make playClick available
  window.playClick = playClick;

  function toggleSidebar() {
  document.body.classList.toggle("collapsed");
  const audio = new Audio("/lewis_portfolio.github.io/audio/click.mp3");
  audio.play();
}

// Typing effect for intro text
const introText = "Creative and technically skilled artist bridging art and engineering. Passionate about real-time visuals, shaders, and optimization.";
function typeWriter() {
  if (i < introText.length) {
    document.getElementById("intro-text").innerHTML += introText.charAt(i);
    i++;
    setTimeout(typeWriter, 40);
  }
}
window.onload = typeWriter;


});
