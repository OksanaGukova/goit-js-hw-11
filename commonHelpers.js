import{i as c}from"./assets/vendor-ad859c2f.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const u=s=>s.map(({tags:o,webformatURL:r,largeImageURL:n,likes:e,views:t,comments:i,downloads:d})=>`
            <a href='${n}' class="card-link js-card-link">
            <div class="photo-card">
              <img class="photo" src="${r}" alt="${o}" loading="lazy" />
              <div class="info">
                <div class="info-item info-item-likes">
                  <button type="button" class="circle" onclick="style.boxShadow='inset -1px -1px 3px white, inset 1px 1px 3px rgba(0, 0, 0, 0.1)'">
                    <i class="bi bi-heart-fill" onclick="style.color='#ff0000'"></i>
                  </button>
                  <div class="box-likes"><b>Likes</b>
                  <span id="value">${e}</span>
                  </div>
                  
                </div>
                <p class="info-item">
                  <b>Views</b>
                  ${t}
                </p>
                <p class="info-item">
                  <b>Comments</b>
                  ${i}
                </p>
                <p class="info-item">
                  <b>Downloads</b>
                  ${d}
                </p>
              </div>
            </div>
            </a>`).join(""),f="43705346-f08330685c72fc18a8a8b3aad",p="https://pixabay.com/api/",m=(s="cat")=>{const o=new URLSearchParams({q:s,per_page:20,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${p}?key=${f}&q=${o}`).then(r=>{if(!r.ok)throw new Error(r.statusText);return r.json()})},a=document.querySelector(".js-gallery"),h=document.querySelector(".search-form"),l=document.querySelector(".loader");function y(s){s.preventDefault();const o=s.target.elements.searchKeyword.value.trim();if(o===""){a.innerHTML="",s.target.reset(),c.error({message:"Input field can not be empty"});return}a.innerHTML="",l.classList.remove("is-hidden"),m(o).then(r=>{r.total===0&&c.error({message:"Sorry, there are no images matching your search query. Please try again!"}),a.innerHTML=u(r.results)}).catch(r=>console.log(r)).finally(()=>{s.target.reset(),l.classList.add("is-hidden")})}h.addEventListener("submit",y);
//# sourceMappingURL=commonHelpers.js.map
