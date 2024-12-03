import{i as n,S as p}from"./assets/vendor-5ObWk2rO.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();function u(i){const r="47428145-66711742d009cc5b9838094e7",o="https://pixabay.com/api/",s=new URLSearchParams({key:r,q:i,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`${o}?${s}`).then(e=>{if(!e.ok)throw new Error(e.statusText);return e.json()}).catch(e=>console.log(e.message))}function A(i){return i.map(({largeImageURL:r,webformatURL:o,tags:s,likes:e,views:t,comments:a,downloads:m})=>`<li class="img-item">
          <a class="gallery-link" href="${r}">
          <img 
              class="gallery-image" 
              src=${o} 
              alt="${s}" width=360 height=152
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
              <p class="text-info">${a}</p>
            </li>
            <li class="item-text">
              <h2 class="title-img">Downloads</h2>
              <p class="text-info">${m}</p>
            </li>
          </ul>
        </li>`).join("")}const c="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAETSURBVHgBrVVbDoJADCwEwq83kaN4I+UkHgGP4mH4YTGslFBB2e0UYZImG9rO7KMtRBG0bXd1rvMW49gYTxYjTxK6eU+PNKUnKeh7Kjl2yKGiyCtCmHf+upMRHItO8je5WWQPORQ5gjwqopE7586YcB3zJTIt6kBiiR5ONtc0TRnw1ewbBbouTMLfYyJCjnJVgZgIIl/mZQSQ53k1BPNybCYGNxYb+1A+FPgVEQELOSMlI4aREFwjmE4gs4lt+mSePVBgSS7XsnwTKKJVg1YtWgkv/bDRLKWoNpoEDYShUVESQChGRsVnc5rIVqzIBUeIRMmPEIHke0Q08lUfyFjwPuE6P1l++kT+smV8jJhPgk27ljfw3ToafivEMQAAAABJRU5ErkJggg==",h=document.querySelector(".form-search"),g=document.querySelector(".gallery"),l=document.querySelector(".loader");l.style.display="none";h.addEventListener("submit",f);function f(i){i.preventDefault(),l.style.display="block";const r=i.target.elements.text.value.trim();if(r===""){n.error({iconUrl:c,position:"topRight",backgroundColor:"#EF4040",iconColor:"#FAFAFB",imageWidth:24,messageColor:"#FAFAFB",message:"Please write a query for search"}),l.style.display="none",g.innerHTML="";return}u(r).then(o=>{l.style.display="none",o.hits.length===0&&(n.error({iconUrl:c,position:"topRight",backgroundColor:"#EF4040",iconColor:"#FAFAFB",imageWidth:24,messageColor:"#FAFAFB",message:"Sorry, there are no images matching your search query. Please try again!"}),l.style.display="none",g.innerHTML="");const s=A(o.hits);g.innerHTML=s}).then(o=>{new p(".gallery a",{captions:!0,captionSelector:"img",captionType:"attr",captionsData:"alt",captionPosition:"bottom",captionClass:"",captionHTML:!0,captionClass:"captions",animationSpeed:"250",className:"simpl-lightbox"}).refresh()}).catch(o=>{n.error({iconUrl:c,position:"topRight",backgroundColor:"#EF4040",iconColor:"#FAFAFB",imageWidth:24,messageColor:"#FAFAFB",message:o})}).finally(()=>i.target.reset())}
//# sourceMappingURL=index.js.map
