import{i as g,S as u}from"./assets/vendor-5ObWk2rO.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();function p(r){const s="47428145-66711742d009cc5b9838094e7",o="https://pixabay.com/api/",i=new URLSearchParams({key:s,q:r,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`${o}?${i}`).then(e=>{if(!e.ok)throw new Error(e.statusText);return e.json()}).catch(e=>console.log(e.message))}function A(r){return r.map(({largeImageURL:s,webformatURL:o,tags:i,likes:e,views:t,comments:n,downloads:m})=>`<li class="img-item">
          <a class="gallery-link" href="${s}">
          <img 
              class="gallery-image" 
              src=${o} 
              alt="${i}" width=360 height=152
              />
      </a>
          <ul class="list-text">
            <li class="item-text">
              <h2 class="title-img">Likes</h2>
              <p class="text-info">${e}</p>
            </li>
            <li class="item-text">
              <h2 class="title-img">Views</h2>
              <p class="text-info">${t}</p>
            </li>
            <li class="item-text">
              <h2 class="title-img">Comments</h2>
              <p class="text-info">${n}</p>
            </li>
            <li class="item-text">
              <h2 class="title-img">Downloads</h2>
              <p class="text-info">${m}</p>
            </li>
          </ul>
        </li>`).join("")}const f="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAETSURBVHgBrVVbDoJADCwEwq83kaN4I+UkHgGP4mH4YTGslFBB2e0UYZImG9rO7KMtRBG0bXd1rvMW49gYTxYjTxK6eU+PNKUnKeh7Kjl2yKGiyCtCmHf+upMRHItO8je5WWQPORQ5gjwqopE7586YcB3zJTIt6kBiiR5ONtc0TRnw1ewbBbouTMLfYyJCjnJVgZgIIl/mZQSQ53k1BPNybCYGNxYb+1A+FPgVEQELOSMlI4aREFwjmE4gs4lt+mSePVBgSS7XsnwTKKJVg1YtWgkv/bDRLKWoNpoEDYShUVESQChGRsVnc5rIVqzIBUeIRMmPEIHke0Q08lUfyFjwPuE6P1l++kT+smV8jJhPgk27ljfw3ToafivEMQAAAABJRU5ErkJggg==",h=document.querySelector(".form-search"),c=document.querySelector(".gallery"),a=document.querySelector(".loader");a.style.display="none";h.addEventListener("submit",y);function y(r){r.preventDefault(),a.style.display="block";const s=r.target.elements.text.value.trim();if(!s){l("Please write a query for search"),a.style.display="none",c.innerHTML="";return}p(s).then(o=>{if(a.style.display="none",o.hits.length===0){l("Sorry, there are no images matching your search query. Please try again!"),c.innerHTML="";return}d(o.hits),w()}).catch(o=>{const i=o.message||"An unexpected error occurred. Please try again later.";l(i)}).finally(()=>{a.style.display="none",r.target.reset()})}function l(r){g.error({iconUrl:f,position:"topRight",backgroundColor:"#EF4040",iconColor:"#FAFAFB",imageWidth:24,messageColor:"#FAFAFB",message:r})}function d(r){const s=A(r);c.innerHTML=s}function w(){new u(".gallery a",{captions:!0,captionSelector:"img",captionType:"attr",captionsData:"alt",captionPosition:"bottom",animationSpeed:250,className:"simpl-lightbox"}).refresh()}
//# sourceMappingURL=index.js.map
