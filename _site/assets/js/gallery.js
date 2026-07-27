const galleryItems = Array.from(document.querySelectorAll('.gallery-item'));
const filterButtons = Array.from(document.querySelectorAll('.gallery-btn'));
const lightbox = document.getElementById('lightbox');
const lbImage = document.getElementById('lbImage');
const lbCaption = document.getElementById('lbCaption');
const lbPrev = document.getElementById('lbPrev');
const lbNext = document.getElementById('lbNext');
const lbClose = document.getElementById('lbClose');
let visibleItems = [...galleryItems];
let currentIndex = 0;

function applyFilter(filter){
  visibleItems = [];
  galleryItems.forEach(item => {
    const categories = item.dataset.category || '';
    const show = filter === 'all' || categories.includes(filter);
    item.classList.toggle('hidden', !show);
    if(show) visibleItems.push(item);
  });
}
filterButtons.forEach(btn => btn.addEventListener('click', () => {
  filterButtons.forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  applyFilter(btn.dataset.filter);
}));
function updateLightbox(){
  const item = visibleItems[currentIndex];
  lbImage.src = item.dataset.full;
  lbImage.alt = item.dataset.title || '';
  lbCaption.innerHTML = `<strong>${item.dataset.title || ''}</strong>${item.dataset.meta || ''}`;
}
function openLightbox(item){
  visibleItems = galleryItems.filter(el => !el.classList.contains('hidden'));
  currentIndex = visibleItems.indexOf(item);
  updateLightbox();
  lightbox.classList.add('open');
  lightbox.setAttribute('aria-hidden','false');
  document.body.style.overflow = 'hidden';
}
function closeLightbox(){
  lightbox.classList.remove('open');
  lightbox.setAttribute('aria-hidden','true');
  document.body.style.overflow = '';
  lbImage.src = '';
}
function nextImage(){ currentIndex = (currentIndex + 1) % visibleItems.length; updateLightbox(); }
function prevImage(){ currentIndex = (currentIndex - 1 + visibleItems.length) % visibleItems.length; updateLightbox(); }
galleryItems.forEach(item => {
  item.tabIndex = 0;
  item.addEventListener('click', () => openLightbox(item));
  item.addEventListener('keydown', e => { if(e.key === 'Enter' || e.key === ' ') openLightbox(item); });
});
lbClose?.addEventListener('click', closeLightbox);
lbNext?.addEventListener('click', nextImage);
lbPrev?.addEventListener('click', prevImage);
lightbox?.addEventListener('click', e => { if(e.target === lightbox) closeLightbox(); });
document.addEventListener('keydown', e => {
  if(!lightbox?.classList.contains('open')) return;
  if(e.key === 'Escape') closeLightbox();
  if(e.key === 'ArrowRight') nextImage();
  if(e.key === 'ArrowLeft') prevImage();
});
applyFilter('all');
