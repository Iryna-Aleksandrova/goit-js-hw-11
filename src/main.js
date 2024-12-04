import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { searchImages } from './js/pixabay-api.js';
import { createMarkup } from './js/render-functions.js';
import iconError from './img/error.png';

const form = document.querySelector('.form-search');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

loader.style.display = 'none';

form.addEventListener('submit', createGallery);

function createGallery(event) {
  event.preventDefault();
  loader.style.display = 'block';

  const textInput = event.target.elements.text.value.trim();

  if (!textInput) {
    showError('Please write a query for search');
    loader.style.display = 'none';
    gallery.innerHTML = '';
    return;
  }

  searchImages(textInput)
    .then(data => {
      loader.style.display = 'none';

      if (data.hits.length === 0) {
        showError(
          'Sorry, there are no images matching your search query. Please try again!'
        );
        gallery.innerHTML = '';
        return;
      }

      renderGallery(data.hits);
      initLightbox();
    })
    .catch(error => {
      const errorMessage =
        error.message ||
        'An unexpected error occurred. Please try again later.';
      showError(errorMessage);
    })
    .finally(() => {
      loader.style.display = 'none';
      event.target.reset();
    });
}

function showError(message) {
  iziToast.error({
    iconUrl: iconError,
    position: 'topRight',
    backgroundColor: '#EF4040',
    iconColor: '#FAFAFB',
    imageWidth: 24,
    messageColor: '#FAFAFB',
    message: message,
  });
}

function renderGallery(images) {
  const markup = createMarkup(images);
  gallery.innerHTML = markup;
}

function initLightbox() {
  new SimpleLightbox('.gallery a', {
    captions: true,
    captionSelector: 'img',
    captionType: 'attr',
    captionsData: 'alt',
    captionPosition: 'bottom',
    animationSpeed: 250,
    className: 'simpl-lightbox',
  }).refresh();
}
