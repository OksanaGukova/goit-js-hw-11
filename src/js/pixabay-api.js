import { createMarkup } from './render-functions.js';
import { searchForm } from '../main.js';
import { imgContainer } from '../main.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export function searchImages(query) {
  const API_KEY = '43705346-f08330685c72fc18a8a8b3aad';
  const url = `https://pixabay.com/api/?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      if (data.hits.length === 0) {
        displayNoResultsMessage();
      } else {
        displayImages(data.hits);
      }
    })
    .catch(onFetchError)
    .finally(() => {
      searchForm.reset();
    });
}

export function displayNoResultsMessage() {
  iziToast.error({
    message:
      'Sorry, there are no images matching your search query. Please try again!',
  });
}

export function displayImages(images) {
  clearGallery();


  images.forEach(image => {
      createMarkup(image);
       const lightbox = new SimpleLightbox('.photo-list a', {});
       lightbox.refresh();
  });
}

function onFetchError(error) {
  alert(error);
}

function clearGallery() {
  imgContainer.innerHTML = '';
}