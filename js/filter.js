function filterProjects(category){
  const items = document.querySelectorAll(".project-item");
  items.forEach(item=>{
    if(category==="all") item.style.display="grid";
    else item.style.display = item.classList.contains(category) ? "grid" : "none";
  });
}
