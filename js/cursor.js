const trail = [];
const trailCount = 12;

for(let i=0;i<trailCount;i++){
  const el = document.createElement("div");
  el.className = "cursor-trail";
  document.body.appendChild(el);
  trail.push(el);
}

// Mouse movement
document.addEventListener("mousemove", e => {
  trail.forEach((el,i)=>{
    setTimeout(()=>{
      el.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    }, i*10);
  });
});

// Touch movement
document.addEventListener("touchmove", e => {
  const touch = e.touches[0];
  trail.forEach((el,i)=>{
    setTimeout(()=>{
      el.style.transform = `translate(${touch.clientX}px, ${touch.clientY}px)`;
    }, i*10);
  });
},{passive:true});
