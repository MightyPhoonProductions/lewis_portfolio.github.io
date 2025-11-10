const lightbox = document.getElementById("lightbox");
document.querySelectorAll(".media-grid img, .media-grid video").forEach(item=>{
  item.addEventListener("click", ()=>{
    lightbox.innerHTML = item.outerHTML;
    lightbox.classList.add("active");
  });
});
lightbox.addEventListener("click", ()=> lightbox.classList.remove("active"));
