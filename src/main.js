
import { searchImages } from './js/pixabay-api';

export const imgContainer = document.querySelector('.img-container');
export const searchForm = document.querySelector('.search-form');
const loader = document.querySelector('.loader');
const searchInput = document.querySelector('.search-input');

searchForm.addEventListener('submit', onSearch);

function onSearch(event) {
  event.preventDefault();

  const query = searchInput.value.trim();
  if (query !== '') {
    loader.classList.remove('is-hidden'); // Показати завантажувач перед початком запиту
    searchImages(query)
      .then(() => {
        loader.classList.add('is-hidden'); // Приховати завантажувач після успішного завершення запиту
      })
      .catch(error => {
        loader.classList.add('is-hidden'); // Приховати завантажувач у разі помилки
        onFetchError(error); // Обробити помилку
      });
    return;
  }
}

export function onFetchError(error) {
  alert(error);
}

export function clearGallery() {
  imgContainer.innerHTML = '';
}
