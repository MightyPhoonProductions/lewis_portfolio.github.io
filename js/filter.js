function filterProjects(cat){
  const items = document.querySelectorAll('.project-section-container > .project-card');
  items.forEach(item=>{
    if(cat==='all' || item.dataset.category === cat){
      item.style.display = "";
    } else item.style.display = "none";
  });
}
