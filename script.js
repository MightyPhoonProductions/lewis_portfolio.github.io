const button = document.getElementById("toggle-btn");
const body = document.body;
const overlay = document.getElementById("overlay");

// Toggle sidebar visibility
function toggleSidebar() {
  if (window.innerWidth > 768) {
    // Desktop: collapse sidebar
    body.classList.toggle("collapsed");
  } else {
    // Mobile: slide sidebar in/out
    body.classList.toggle("show-sidebar");
  }
}

// Close sidebar when clicking overlay
overlay.addEventListener("click", () => {
  body.classList.remove("show-sidebar");
});

button.addEventListener("click", toggleSidebar);

// Optional: close sidebar when resizing to desktop
window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    body.classList.remove("show-sidebar");
  }
});
