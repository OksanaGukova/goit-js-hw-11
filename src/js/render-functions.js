import {imgContainer} from '../main.js'

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
        <img class="photo" src="${webformatURL}" alt="${tags}" loading="lazy" />
      </a>
      <div class="info">
        <ul>
          <li class="info-item">
            <p>Likes: ${likes}</p>
          </li>
          <li class="info-item">
            <p>Views: ${views}</p>
          </li>
          <li class="info-item">
            <p>Comments: ${comments}</p>
          </li>
          <li class="info-item">
            <p><b>Downloads:</b> ${downloads}</p>
          </li>
        </ul>
      </div>
    </div>`;

    imgContainer.innerHTML = markup;
  
}


