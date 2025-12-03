// lightbox.js
const lightbox = document.getElementById("lightbox");

function initLightboxBindings() {
  // clear previous listeners by cloning if needed
  document.querySelectorAll(".media-item img, .media-item video, .media-grid img, .media-grid video").forEach(el=>{
    el.addEventListener("click", openInLightbox);
    el.style.cursor = "zoom-in";
  });
}

function openInLightbox(el){
  const target = (el.currentTarget) ? el.currentTarget : el;
  lightbox.innerHTML = "";
  const clone = target.cloneNode(true);
  clone.removeAttribute("class");
  if(clone.tagName.toLowerCase() === "video"){
    clone.controls = true;
    clone.autoplay = true;
  }
  lightbox.appendChild(clone);
  lightbox.classList.add("active");
  lightbox.style.display = "flex";
}

// Close lightbox on click or touch
lightbox.addEventListener("click",()=>{ lightbox.classList.remove("active"); lightbox.style.display="none"; });
lightbox.addEventListener("touchstart",()=>{ lightbox.classList.remove("active"); lightbox.style.display="none"; });

// init on load for any existing items
document.addEventListener("DOMContentLoaded", initLightboxBindings);
