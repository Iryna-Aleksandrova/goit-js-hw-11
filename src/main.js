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

  if (textInput === '') {
    iziToast.error({
      iconUrl: iconError,
      position: 'topRight',
      backgroundColor: '#EF4040',
      iconColor: '#FAFAFB',
      imageWidth: 24,
      messageColor: '#FAFAFB',
      message: 'Please write a query for search',
    });
    loader.style.display = 'none';
    gallery.innerHTML = '';
    return;
  }

  searchImages(textInput)
    .then(data => {
      loader.style.display = 'none';
      if (data.hits.length === 0) {
        iziToast.error({
          iconUrl: iconError,
          position: 'topRight',
          backgroundColor: '#EF4040',
          iconColor: '#FAFAFB',
          imageWidth: 24,
          messageColor: '#FAFAFB',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
        loader.style.display = 'none';
        gallery.innerHTML = '';
      }

      const markup = createMarkup(data.hits);
      gallery.innerHTML = markup;
    })
    .then(data => {
      let galleryImgs = new SimpleLightbox('.gallery a', {
        captions: true,
        captionSelector: 'img',
        captionType: 'attr',
        captionsData: 'alt',
        captionPosition: 'bottom',
        captionClass: '',
        captionHTML: true,
        captionClass: 'captions',
        animationSpeed: '250',
        className: 'simpl-lightbox',
      });
      galleryImgs.refresh();
    })
    .catch(error => {
      iziToast.error({
        iconUrl: iconError,
        position: 'topRight',
        backgroundColor: '#EF4040',
        iconColor: '#FAFAFB',
        imageWidth: 24,
        messageColor: '#FAFAFB',
        message: error,
      });
    })
    .finally(() => event.target.reset());
}
