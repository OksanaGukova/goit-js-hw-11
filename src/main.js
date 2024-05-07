import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { searchImages } from './js/pixabay-api';
import { displayNoResultsMessage } from './js/pixabay-api';


export const imgContainer = document.querySelector('.img-container');
export const searchForm = document.querySelector('.search-form');
const loader = document.querySelector('.loader');
const searchInput = document.querySelector('.search-input');

searchForm.addEventListener('submit', onSearch);

 

function onSearch(event) {
    event.preventDefault();
    const query = searchInput.value.trim();
    if (query !== '') {
        searchImages(query);
    }
   displayNoResultsMessage();
        return;
    }




