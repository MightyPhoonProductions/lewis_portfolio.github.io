// mediaLoader.js
// Config — update folders or max counts if needed
const MEDIA_CONFIG = {
  blender: "/lewis_portfolio.github.io/media/blender",
  unity: "/lewis_portfolio.github.io/media/unity",
  substance: "/lewis_portfolio.github.io/media/substance"
};

const IMAGE_EXTS = [".png", ".jpg", ".jpeg", ".gif", ".webp"];
const VIDEO_EXTS = [".mp4", ".webm"];
const MAX_PROJECTS = 30;
const MAX_FILES = 200;

async function exists(url){
  try {
    const r = await fetch(url, { method: "HEAD" });
    return r.ok;
  } catch { return false; }
}

async function fetchTextIfExists(url){
  try{
    const r = await fetch(url);
    if(!r.ok) return null;
    return await r.text();
  }catch{return null;}
}

async function buildProjects() {
  for(const [category, baseFolder] of Object.entries(MEDIA_CONFIG)){
    const containerId = `${category}-projects`;
    const container = document.getElementById(containerId);
    if(!container) continue;

    for(let p=1; p<=MAX_PROJECTS; p++){
      const projectFolder = `${baseFolder}/project${p}`;
      // require title.txt to consider it a project
      const titleURL = `${projectFolder}/title.txt`;
      if(!(await exists(titleURL))) continue;
      const title = (await fetchTextIfExists(titleURL)) || `Project ${p}`;
      const description = (await fetchTextIfExists(`${projectFolder}/description.txt`)) || "";

      // create card
      const card = document.createElement("div");
      card.className = "project-card";
      card.dataset.category = category;
      card.innerHTML = `
        <div class="project-section">
          <div class="project-title">${escapeHtml(title)}</div>
          <div class="project-description">${escapeHtml(description)}</div>
        </div>
        <div class="media-grid"></div>
      `;

      const grid = card.querySelector(".media-grid");

      // load media files
      for(let f=1; f<=MAX_FILES; f++){
        let loaded = false;
        for(const ext of [...IMAGE_EXTS, ...VIDEO_EXTS]){
          const url = `${projectFolder}/${f}${ext}`;
          /* eslint-disable no-await-in-loop */
          if(await exists(url)){
            loaded = true;
            const item = document.createElement("div");
            item.className = "media-item";
            if(VIDEO_EXTS.includes(ext)){
              item.innerHTML = `<video src="${url}" muted loop class="neon-glow hover-glitch"></video>`;
            } else {
              item.innerHTML = `<img src="${url}" alt="${escapeHtml(title)}" class="neon-glow hover-glitch">`;
            }
            grid.appendChild(item);
            break;
          }
        }
        if(!loaded) continue;
      }

      container.appendChild(card);
    }
  }

  // re-bind lightbox to newly created elements
  if(typeof initLightboxBindings === "function") initLightboxBindings();
  // run fade-in observer on newly added content
  document.querySelectorAll('.fade-init').forEach(el => el.classList.add('fade-init'));
}

function escapeHtml(s){ return String(s).replace(/[&<>"'`]/g, c=>({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;','`':'&#96;' }[c])); }

document.addEventListener("DOMContentLoaded", buildProjects);
