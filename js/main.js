// Toggle sidebar
function toggleSidebar() {
  document.body.classList.toggle("collapsed");
  playClick();
}

// Typing intro
const introText = "Creative and technically skilled artist bridging art and engineering. Passionate about real-time visuals, shaders, and optimization.";
let i = 0;
function typeWriter() {
  if (i < introText.length) {
    document.getElementById("intro-text").innerHTML += introText.charAt(i);
    i++;
    setTimeout(typeWriter, 40);
  }
}
window.onload = typeWriter;

// Click sound
function playClick() {
  const audio = new Audio("/lewis_portfolio.github.io/audio/click.mp3");
  audio.play();
}

// Dark/light mode
function toggleTheme() {
  if (document.body.classList.contains("dark")) {
    document.body.classList.replace("dark","light");
  } else {
    document.body.classList.replace("light","dark");
  }
}

// Back to top
window.onscroll = function() {
  const btn = document.getElementById("back-to-top");
  if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) btn.style.display = "block";
  else btn.style.display = "none";
};
function scrollToTop() {
  window.scrollTo({top:0, behavior:'smooth'});
}
