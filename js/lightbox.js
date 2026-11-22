const lightbox = document.getElementById('lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const galleryImages = document.querySelectorAll('.galerija-img');
const closeBtn = document.querySelector('.lightbox .close');

if (lightbox && lightboxImg && closeBtn && galleryImages.length > 0) {
  galleryImages.forEach(img => {
    img.addEventListener('click', () => {
      lightbox.style.display = 'flex';
      lightboxImg.src = img.src;
    });
  });

  closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
  });

  lightbox.addEventListener('click', e => {
    if (e.target !== lightboxImg && e.target !== closeBtn) {
      lightbox.style.display = 'none';
    }
  });
}
