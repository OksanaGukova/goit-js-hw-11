import { searchImages } from './js/pixabay-api';

export const imgContainer = document.querySelector('.img-container');
export const searchForm = document.querySelector('.search-form');
const loader = document.querySelector('.loader');
const searchInput = document.querySelector('.search-input');

searchForm.addEventListener('submit', onSearch);



function onSearch(event) {
  event.preventDefault();
 loader.classList.remove('is-hidden');
  const query = searchInput.value.trim();
  if (query !== '') {
    searchImages(query);
     loader.classList.add('is-hidden');
    return;
  }
   
}


export function onFetchError(error) {
  alert(error);
}

export function clearGallery() {
  imgContainer.innerHTML = '';
}

