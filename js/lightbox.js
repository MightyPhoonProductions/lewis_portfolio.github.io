const mediaItems = document.querySelectorAll('.media-item');
const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
document.body.appendChild(lightbox);

lightbox.addEventListener('click', () => {
  lightbox.classList.remove('active');
  lightbox.innerHTML = '';
});

mediaItems.forEach(item => {
  const media = item.querySelector('img, video');

  item.addEventListener('click', () => {
    lightbox.classList.add('active');
    const clone = media.cloneNode(true);
    if (clone.tagName.toLowerCase() === 'video') {
      clone.setAttribute('controls', 'controls');
      clone.removeAttribute('muted');
      clone.play();
    }
    lightbox.appendChild(clone);
  });

  if (media.tagName.toLowerCase() === 'video') {
    item.addEventListener('mouseenter', () => media.play());
    item.addEventListener('mouseleave', () => media.pause());
  }
});
