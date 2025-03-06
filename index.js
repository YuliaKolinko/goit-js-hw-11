import{S,i as m}from"./assets/vendor-BSrUI5OQ.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function v(s){const o="49149625-6c85390ad8fbd016bc28c7d7b",r="https://pixabay.com/api/",n={key:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15};let e=`${r}?key=${o}&q=${encodeURIComponent(s)}`;for(const t in n)t!=="key"&&(e+=`&${t}=${n[t]}`);return e}function w(s){console.log("Дані для рендерингу:",s);const o=document.querySelector(".gallery"),r=s.map(n=>{const{webformatURL:e,largeImageURL:t,likes:a,views:A,tags:h,comments:y,downloads:E}=n,c=document.createElement("li");c.classList.add("gallery-item");const l=document.createElement("a");l.classList.add("gallery-link"),l.href=t;const i=document.createElement("img");i.classList.add("gallery-image"),i.src=e,i.alt=h,i.width=360,i.height=200,c.appendChild(l),l.appendChild(i);const d=document.createElement("div");return d.classList.add("gallery-item-info"),d.innerHTML=`
  <div class="item-info-container">
    <span class="description-name">Likes</span>
    <span class="description-counts">${a}</span>
  </div>
  <div class="item-info-container">
    <span class="description-name">Views</span>
    <span class="description-counts">${A}</span>
  </div>
  <div class="item-info-container">
    <span class="description-name">Comments</span>
    <span class="description-counts">${y}</span>
  </div>
  <div class="item-info-container">
    <span class="description-name">Downloads</span>
    <span class="description-counts">${E}</span>
  </div>
`,c.appendChild(d),c});o.append(...r)}const L="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEYSURBVHgBrZZRDoIwDIYrwfDqTeQo3ohxEr0BXsW77GXFOFdkYcC6DuFPCJB1/7fCWgBgZEzfIPY256BYzqfkzE8nUNbCE+DzgqSKK8W6OVBV5xYk+ZUbgw/IFMVKmfxtng3ZYy5CjjBnISlzrXUtGcZiZpDxolsGIWItvTi/OK0xAuk7GhsBRjEGioNMmffMXKNEAAeRzENACYJc8QxF5IuJNBZhS2PSfBGwhNB9rjmpgHxZ5jqprAyC3jT0mi29RwSE5v6xhO9EhAjblN0tqS38G59t02ShKeCzU2Kh+SDE9z0GAUGxGPKaLS4F2aqVudcRENb8CIhovgeSMl/VwdQWbOPOl5yPvivs25b2MWjKJOu3hTX+AgZ5PpvL0NSkAAAAAElFTkSuQmCC",g=document.querySelector(".form"),u=document.querySelector(".loader"),C=document.querySelector(".gallery"),f={message:"Sorry, there are no images matching your search query.Please try again!",messageColor:"#fff",backgroundColor:"#ef4040",position:"topRight",iconUrl:L};let p=new S(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250,animationSpeed:350});p.on("show.simplelightbox",function(){});p.on("error.simplelightbox",function(s){console.log(s)});g.addEventListener("submit",b);function b(s){s.preventDefault();const o=s.currentTarget.elements.searchQuery.value.trim();if(!o)return;u.classList.remove("visually-hidden"),C.innerHTML="";const r=v(o);console.log("Запит до API:",r),g.reset(),fetch(r,{headers:{Accept:"application/json"}}).then(n=>{if(!n.ok)throw new Error(n.status);return n.json()}).then(n=>{if(n.hits.length===0){m.show(f),console.log("Отримані дані:",n);return}w(n.hits),p.refresh()}).catch(n=>{m.show(f)}).finally(()=>{u.classList.add("visually-hidden")})}
//# sourceMappingURL=index.js.map
