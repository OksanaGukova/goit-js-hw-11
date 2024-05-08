import { imgContainer } from '../main.js';

export function createMarkup({
  tags,
  webformatURL,
  largeImageURL,
  likes,
  views,
  comments,
  downloads,
}) {
  const markup = `
    <div class="photo-list">
      <a href='${largeImageURL}' class="list"> 
      <div class ="photo-card">
        <img class="photo" src="${webformatURL}" alt="${tags}" loading="lazy" />
      <div class="info">
        <ul class="info-list" >
          <li class="info-item">
            <p>Likes:</p>
            <p>${likes}</p>
          </li>
          <li class="info-item">
            <p>Views:</p>
            <p>${views}</p>
          </li>
          <li class="info-item">
            <p>Comments:</p>
            <p>${comments}</p> 
          </li>
          <li class="info-item">
            <p>Downloads:</p>
            <p>${downloads}</p>
          </li>
        </ul>
         </div>
      </div>
    </div> 
     </a> `;

  imgContainer.insertAdjacentHTML('beforeend', markup);
}