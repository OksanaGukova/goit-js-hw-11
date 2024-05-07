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
 const markup = `<div class="photo-list">
               <a href='${largeImageURL}' class="list">
              <img class="photo" src="${webformatURL}" alt="${tags}" loading="lazy" />
              <div class="info"></a>
                  <li>
                   <p class="info-item"likes</p> >
                  ${likes}
                <p class="info-item">
                  <p>Views</p>
                  ${views}
                </p>
                <p class="info-item">
                  <p>Comments</p>
                  ${comments}
                </p>
                <p class="info-item">
                  <b>Downloads</b>
                  ${downloads}
                </p>
              </div>
            </div>
            </li>`;
  imgContainer.innerHTML = markup;
}


