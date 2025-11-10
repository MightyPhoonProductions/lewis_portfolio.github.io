function filterProjects(cat){
  const items = document.querySelectorAll('.project-item');
  items.forEach(item=>{
    if(cat==='all' || item.classList.contains(cat)){
      item.style.display = "grid";
    } else item.style.display = "none";
  });
}
