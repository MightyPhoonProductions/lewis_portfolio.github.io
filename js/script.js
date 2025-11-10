const button = document.getElementById("toggle-btn");
const body = document.body;
const overlay = document.getElementById("overlay");

button.addEventListener("click", () => {
  if(window.innerWidth>768) body.classList.toggle("collapsed");
  else body.classList.toggle("show-sidebar");
});

overlay.addEventListener("click", () => body.classList.remove("show-sidebar"));

window.addEventListener("resize", () => {
  if(window.innerWidth>768) body.classList.remove("show-sidebar");
});
