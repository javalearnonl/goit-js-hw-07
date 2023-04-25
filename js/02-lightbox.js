import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');

const markup = galleryItems
  .map(image => `<li><a class="gallery__item" href="${image.original}">
                  <img class="gallery__image" src="${image.preview}" alt="${image.description}" />
                 </a></li>
                `)
  .join('')

galleryEl.insertAdjacentHTML('afterbegin', markup)



galleryEl.addEventListener('click', onImageClick)

function onImageClick(event) {

    event.preventDefault();

    if (event.target.nodeName !== 'IMG') {
        return;
    }

    let lightbox = new SimpleLightbox('.gallery a', { captionsData: "alt", captionDelay: 150, spinner: true });
}