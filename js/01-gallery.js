import { galleryItems } from './gallery-items.js';

const galleryEl = document.querySelector('.gallery');


const createGalleryMarkup = (items) => {

  return items
    .map(
      ({ preview, original, description }) => `
      <li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </li>
    `
    )
    .join('');
};


galleryEl.insertAdjacentHTML('afterbegin', createGalleryMarkup(galleryItems));


galleryEl.addEventListener('click', onImageClick);

function onImageClick(event) {
  event.preventDefault();


  if (event.target.nodeName !== 'IMG') {
    return;
  }

  const source = event.target.dataset.source;
  const instance = basicLightbox.create(`<img src="${source}" width="800" height="600">`);
  instance.show();

  window.addEventListener('keydown', onKeyDown, { once: true });

  function onKeyDown(event) {
    if (event.code === 'Escape') {
      instance.close();
    }
  }
}