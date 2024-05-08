import{i as f,S as d}from"./assets/vendor-0fc460d7.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function p({tags:o,webformatURL:r,largeImageURL:s,likes:i,views:e,comments:t,downloads:n}){const u=`
    <div class="photo-list">
      <a href='${s}' class="list"> 
      <div class ="photo-card">
        <img class="photo" src="${r}" alt="${o}" loading="lazy" />
      <div class="info">
        <ul class="info-list" >
          <li class="info-item">
            <p>Likes:</p>
            <p>${i}</p>
          </li>
          <li class="info-item">
            <p>Views:</p>
            <p>${e}</p>
          </li>
          <li class="info-item">
            <p>Comments:</p>
            <p>${t}</p> 
          </li>
          <li class="info-item">
            <p>Downloads:</p>
            <p>${n}</p>
          </li>
        </ul>
         </div>
      </div>
    </div> 
     </a> `;a.insertAdjacentHTML("beforeend",u)}function h(o){const s=`https://pixabay.com/api/?key=43705346-f08330685c72fc18a8a8b3aad&q=${o}&image_type=photo&orientation=horizontal&safesearch=true`;fetch(s).then(i=>{if(!i.ok)throw new Error("Network response was not ok");return i.json()}).then(i=>{i.hits.length===0?f.error({message:"Sorry, there are no images matching your search query. Please try again!"}):m(i.hits)}).catch(v).finally(()=>{l.reset()})}function m(o){L(),o.forEach(r=>{p(r),new d(".photo-list a",{}).refresh()})}const a=document.querySelector(".img-container"),l=document.querySelector(".search-form"),c=document.querySelector(".loader"),y=document.querySelector(".search-input");l.addEventListener("submit",g);function g(o){o.preventDefault(),c.classList.remove("is-hidden");const r=y.value.trim();if(r!==""){h(r),c.classList.add("is-hidden");return}}function v(o){alert(o)}function L(){a.innerHTML=""}
//# sourceMappingURL=commonHelpers.js.map
