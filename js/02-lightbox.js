import { galleryItems } from './gallery-items.js';


console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');

const markup = galleryItems
  .map(image => `<li><a class="gallery__item" href="${image.original}">
                  <img class="gallery__image" src="${image.preview}" alt="${image.description}" />
                 </a></li>
                `)
  .join('')

galleryEl.insertAdjacentHTML('afterbegin', markup)

 let lightbox = new SimpleLightbox('.gallery a', { captionsData: "alt", captionDelay: 150, spinner: true });














