import{S,i as m}from"./assets/vendor-BSrUI5OQ.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function v(o){const n="49149625-6c85390ad8fbd016bc28c7d7b",r="https://pixabay.com/api/",s={key:n,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15};let e=`${r}?key=${n}&q=${encodeURIComponent(o)}`;for(const t in s)t!=="key"&&(e+=`&${t}=${s[t]}`);return e}function w(o){console.log("Дані для рендерингу:",o);const n=document.querySelector(".gallery"),r=o.hits.map(s=>{const{webformatURL:e,largeImageURL:t,likes:a,views:A,tags:h,comments:y,downloads:E}=s,c=document.createElement("li");c.classList.add("gallery-item");const l=document.createElement("a");l.classList.add("gallery-link"),l.href=t;const i=document.createElement("img");i.classList.add("gallery-image"),i.src=e,i.alt=h,i.width=360,i.height=200,c.appendChild(l),l.appendChild(i);const d=document.createElement("div");return d.classList.add("gallery-item-info"),d.innerHTML=`
  <div class="item-info-container">
    <span class="description-name">Likes</span>
    <span class="description-counts">${a}</span>
  </div>
  <div class="item-desc-container">
    <span class="description-name">Views</span>
    <span class="description-counts">${A}</span>
  </div>
  <div class="item-desc-container">
    <span class="description-name">Comments</span>
    <span class="description-counts">${y}</span>
  </div>
  <div class="item-desc-container">
    <span class="description-name">Downloads</span>
    <span class="description-counts">${E}</span>
  </div>
`,c.appendChild(d),c});n.append(...r)}const L="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEYSURBVHgBrZZRDoIwDIYrwfDqTeQo3ohxEr0BXsW77GXFOFdkYcC6DuFPCJB1/7fCWgBgZEzfIPY256BYzqfkzE8nUNbCE+DzgqSKK8W6OVBV5xYk+ZUbgw/IFMVKmfxtng3ZYy5CjjBnISlzrXUtGcZiZpDxolsGIWItvTi/OK0xAuk7GhsBRjEGioNMmffMXKNEAAeRzENACYJc8QxF5IuJNBZhS2PSfBGwhNB9rjmpgHxZ5jqprAyC3jT0mi29RwSE5v6xhO9EhAjblN0tqS38G59t02ShKeCzU2Kh+SDE9z0GAUGxGPKaLS4F2aqVudcRENb8CIhovgeSMl/VwdQWbOPOl5yPvivs25b2MWjKJOu3hTX+AgZ5PpvL0NSkAAAAAElFTkSuQmCC",f=document.querySelector(".form"),u=document.querySelector(".loader"),C=document.querySelector(".gallery"),g={message:"Sorry, there are no images matching your search query.Please try again!",messageColor:"#fff",backgroundColor:"#ef4040",position:"topRight",iconUrl:L};let p=new S(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250,animationSpeed:350});p.on("show.simplelightbox",function(){});p.on("error.simplelightbox",function(o){console.log(o)});f.addEventListener("submit",b);function b(o){o.preventDefault();const n=o.currentTarget.elements.searchQuery.value.trim();if(!n)return;u.classList.remove("visually-hidden"),C.innerHTML="";const r=v(n);console.log("Запит до API:",r),f.reset(),fetch(r,{headers:{Accept:"application/json"}}).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()}).then(s=>{if(s.hits.length===0){m.show(g),console.log("Отримані дані:",s);return}w(s.hits),p.refresh()}).catch(s=>{m.show(g)}).finally(()=>{u.classList.add("visually-hidden")})}
//# sourceMappingURL=index.js.map
