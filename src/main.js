import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { searchImages } from './js/pixabay-api';



export const imgContainer = document.querySelector('.img-container');
const searchForm = document.querySelector('.search-form');
const loader = document.querySelector('.loader');

searchForm.addEventListener('submit', onSearch);

function onSearch(event) {
    event.preventDefault();

}


const lightboxGallery = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
});

