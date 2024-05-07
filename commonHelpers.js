import{i as f,S as m}from"./assets/vendor-8c59ed88.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function p({tags:o,webformatURL:r,largeImageURL:s,likes:i,views:e,comments:t,downloads:n}){const u=`
    <div class="photo-list">
      <a href='${s}' class="list">
        <img class="photo" src="${r}" alt="${o}" loading="lazy" />
      </a>
      <div class="info">
        <ul>
          <li class="info-item">
            <p>Likes: ${i}</p>
          </li>
          <li class="info-item">
            <p>Views: ${e}</p>
          </li>
          <li class="info-item">
            <p>Comments: ${t}</p>
          </li>
          <li class="info-item">
            <p><b>Downloads:</b> ${n}</p>
          </li>
        </ul>
      </div>
    </div>`;a.innerHTML=u}function h(o){const s=`https://pixabay.com/api/?key=43705346-f08330685c72fc18a8a8b3aad&q=${o}&image_type=photo&orientation=horizontal&safesearch=true`;fetch(s).then(i=>{if(!i.ok)throw new Error("Network response was not ok");return i.json()}).then(i=>{i.hits.length===0?c():d(i.hits)}).catch(y).finally(()=>{l.reset()})}function c(){f.error({message:"Sorry, there are no images matching your search query. Please try again!"})}function d(o){g(),o.forEach(r=>{p(r),new m(".photo-list a",{}).refresh()})}function y(o){alert(o)}function g(){a.innerHTML=""}const a=document.querySelector(".img-container"),l=document.querySelector(".search-form");document.querySelector(".loader");const b=document.querySelector(".search-input");l.addEventListener("submit",L);function L(o){o.preventDefault();const r=b.value.trim();r!==""&&h(r),c()}
//# sourceMappingURL=commonHelpers.js.map
