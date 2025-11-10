// lightbox.js
document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.media-item');
  const lb = document.createElement('div');
  lb.id = 'lightbox';
  document.body.appendChild(lb);

  items.forEach(item => {
    item.addEventListener('click', (e) => {
      const media = item.querySelector('img,video');
      if(!media) return;
      lb.innerHTML = `<div class="inner"></div>`;
      const inner = lb.querySelector('.inner');
      const clone = media.cloneNode(true);
      if(clone.tagName.toLowerCase() === 'video'){
        clone.setAttribute('controls','controls');
        clone.removeAttribute('muted');
        clone.currentTime = 0;
        clone.play().catch(()=>{});
      }
      inner.appendChild(clone);
      lb.classList.add('active');
    });
  });

  // close on click outside
  lb.addEventListener('click', (e) => {
    if(e.target === lb){
      lb.classList.remove('active');
      lb.innerHTML = '';
    }
  });

  // close on Esc
  document.addEventListener('keydown', (e) => {
    if(e.key === 'Escape') {
      lb.classList.remove('active');
      lb.innerHTML = '';
    }
  });
});
