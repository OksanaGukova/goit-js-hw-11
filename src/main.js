
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { creatMarkup } from './js/render-functions';
import { fetchPhotos } from './js/pixabay-api';

const imgContainer = document.querySelector('.js-gallery');
const searchForm = document.querySelector('.search-form');
const loaderEl = document.querySelector('.loader');


function onSearch(event) {
  event.preventDefault();
  const searchQuery = event.target.elements.searchKeyword.value.trim();

  if (searchQuery === '') {
    imgContainer.innerHTML = '';
    event.target.reset();
    iziToast.error({
      message: 'Input field can not be empty',
    });

    return;
  }

  imgContainer.innerHTML = '';
  loaderEl.classList.remove('is-hidden');

  fetchPhotos(searchQuery)
    .then(imagesData => {
      if (imagesData.total === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
      }

      imgContainer.innerHTML = creatMarkup(imagesData.results);
    })
    .catch(error => console.log(error))
    .finally(() => {
      event.target.reset();
      loaderEl.classList.add('is-hidden');
    });
}

searchForm.addEventListener('submit', onSearch);