// Lightbox
const mediaItems = document.querySelectorAll('.media-item');
const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
document.body.appendChild(lightbox);

lightbox.addEventListener('click', e => {
  if(e.target !== e.currentTarget) return;
  lightbox.classList.remove('active');
  lightbox.innerHTML = '';
});

mediaItems.forEach(item => {
  item.addEventListener('click', () => {
    lightbox.classList.add('active');
    let mediaClone = item.querySelector('img, video').cloneNode(true);
    mediaClone.removeAttribute('controls'); // videos will have controls added dynamically
    if(mediaClone.tagName.toLowerCase() === 'video'){
      mediaClone.setAttribute('controls','controls');
    }
    lightbox.appendChild(mediaClone);
  });
});
