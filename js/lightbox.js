const lightbox = document.getElementById("lightbox");

document.querySelectorAll(".media-grid img, .media-grid video").forEach(el=>{
  el.addEventListener("click",()=>{
    lightbox.innerHTML = "";
    const clone = el.cloneNode(true);
    clone.removeAttribute("class");
    clone.controls = true;
    lightbox.appendChild(clone);
    lightbox.style.display = "flex";
  });
});

lightbox.addEventListener("click",()=>{ lightbox.style.display="none"; });
