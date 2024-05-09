import{S as f,i as c}from"./assets/vendor-0fc460d7.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const m=s=>s.reduce((o,{tags:t,webformatURL:a,largeImageURL:e,likes:r,views:i,comments:u,downloads:d})=>o+`
      <a href='${e}' class="card-link js-card-link">
        <div class="photo-card">
          <img class="photo" src="${a}" alt="${t}" loading="lazy"</a> />
          <div class="info">
            <div class="info-item info-item-likes">
              <button type="button" class="circle">
                <i class="bi bi-heart-fill"></i>
              </button>
              <div class="box-likes"><b>Likes</b>
                <span id="value">${r}</span>
              </div>
            </div>
            <p class="info-item">
              <b>Views</b>
              ${i}
            </p>
            <p class="info-item">
              <b>Comments</b>
              ${u}
            </p>
            <p class="info-item">
              <b>Downloads</b>
              ${d}
            </p>
          </div>
        </div>
      
    `,""),h="43705346-f08330685c72fc18a8a8b3aad",p="https://pixabay.com/api/",y=s=>{const o=new URLSearchParams({key:h,q:s,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`${p}/?${o}`).then(t=>{if(!t.ok)throw new Error("Sorry, there are no images matching your search query. Please try again!");return t.json()})},n=document.querySelector(".gallery"),g=document.querySelector(".search-form"),l=document.querySelector(".loader");function b(s){s.preventDefault();const o=s.target.elements.searchKeyword.value.trim();if(n.innerHTML="",o==="")return c.error({message:"Sorry, there are no images matching your search query. Please try again!"});n.innerHTML="",l.classList.remove("is-hidden"),y(o).then(t=>{t.hits.length===0&&c.error({message:"Sorry, there are no images matching your search query. Please try again!"}),n.innerHTML=m(t.hits)}).catch(t=>console.log(t)).finally(()=>{s.target.reset(),l.classList.add("is-hidden")})}g.addEventListener("submit",b);new f(".gallery a",{captionsData:"alt",captionsPosition:"bottom",captionsDelay:250});
//# sourceMappingURL=commonHelpers.js.map
