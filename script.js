const button = document.getElementById("toggle-btn");
const body = document.body;

function toggleSidebar() {
  if (window.innerWidth > 768) {
    // Desktop slide
    body.classList.toggle("collapsed");
  } else {
    // Mobile slide-in
    body.classList.toggle("show-sidebar");
  }
}

button.addEventListener("click", toggleSidebar);

// Close sidebar when clicking outside (mobile only)
document.addEventListener("click", (e) => {
  if (window.innerWidth <= 768) {
    const sidebar = document.getElementById("sidebar");
    if (!sidebar.contains(e.target) && e.target !== button) {
      body.classList.remove("show-sidebar");
    }
  }
});
