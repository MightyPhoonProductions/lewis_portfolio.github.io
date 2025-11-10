// Lightbox for fullscreen view
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
  const media = item.querySelector('img, video');

  // Lightbox click
  item.addEventListener('click', () => {
    lightbox.classList.add('active');
    let clone = media.cloneNode(true);
    if(clone.tagName.toLowerCase() === 'video'){
      clone.setAttribute('controls','controls');
      clone.removeAttribute('muted');
      clone.play();
    }
    lightbox.appendChild(clone);
  });

  // Video hover autoplay (muted)
  if(media.tagName.toLowerCase() === 'video'){
    item.addEventListener('mouseenter', () => media.play());
    item.addEventListener('mouseleave', () => media.pause());
  }
});
