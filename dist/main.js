(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>c});var r=t(81),a=t.n(r),o=t(645),i=t.n(o)()(a());i.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap);"]),i.push([n.id,"/*\n  1. Use a more-intuitive box-sizing model.\n*/\n*, *::before, *::after {\n    box-sizing: border-box;\n  }\n  /*\n    2. Remove default margin\n  */\n  * {\n    margin: 0;\n  }\n  /*\n    Typographic tweaks!\n    3. Add accessible line-height\n    4. Improve text rendering\n  */\n  body {\n    line-height: 1.5;\n    -webkit-font-smoothing: antialiased;\n    font-family: 'Roboto', sans-serif;\n  }\n  /*\n    5. Improve media defaults\n  */\n  img, picture, video, canvas, svg {\n    display: block;\n    max-width: 100%;\n  }\n  /*\n    6. Remove built-in form typography styles\n  */\n  input, button, textarea, select {\n    font: inherit;\n  }\n  /*\n    7. Avoid text overflows\n  */\n  p, h1, h2, h3, h4, h5, h6 {\n    overflow-wrap: break-word;\n  }\n  /*\n    8. Create a root stacking context\n  */\n  #root, #__next {\n    isolation: isolate;\n  }\n\n  :root {\n    --brand-color: #FF2D08;\n    --accent: #fbff2b;\n    --neutral-white: #ffffff;\n\n    --container-width: 60%;\n    --main-gap: 1em;\n    --main-padding: 1em;\n    --full-width: 100%;\n\n  }\n  \n\n  .text-center {\n    text-align: center;\n  }\n\n  .container {\n    width: var(--container-width);\n    margin: 0 auto;\n  }\n\n  header {\n    background-color: var(--brand-color);\n    color: var(--neutral-white);\n    height: 60px;\n    font-weight: 900;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n\n  .flex {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: var(--main-gap);\n    padding: var(--main-padding)\n  }\n\n  .flex-col {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n  }\n\n  .nav-path {\n    font-weight: 900;\n    font-size: clamp(130%, 180%, 200%);\n    transition: all .4s;\n    cursor: pointer;\n  }\n  \n  .nav-path:hover {\n    border-bottom: 4px solid var(--accent);\n  }\n\n\n  .calculated-height {\n    height: calc(100vh - 60px);\n  }\n  .background {\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: center;\n    position: relative; \n    font-weight: 900;\n\n    color: var(--neutral-white);\n    \n  }\n\n  .slogan {\n    font-size: 500%;\n  }\n\n  .btn-cta {\n    cursor: pointer;\n    padding: .8em 1.3em;\n    outline: none;\n    font-weight: 900;\n    font-size: clamp(100%, 150%, 350%);\n    border: none;\n    background-color: var(--brand-color);\n    color: var(--neutral-white);\n    transition: all .4s;\n  }\n\n  .btn-cta:hover {\n    background-color: var(--neutral-white);\n    color: var(--brand-color);\n    border-radius: 8px;\n  }\n  .accent-text {\n    color: var(--accent);\n  }\n\n  .grid {\n    padding: 2em;\n\n    display: grid;\n    grid-template-columns: repeat( auto-fit, minmax(300px, 1fr) );\n    align-items: center;\n    grid-auto-rows: minmax(400px, 1fr);\n    gap: 2em;\n  }\n\n  .menu-card img {\n    width: 70%;\n    margin: 0 auto;\n    transition: transform .5s;\n  }\n  \n  .menu-card img:hover {\n    transform: scale(1.15);\n  }\n\n  .img-desc {\n    margin-top: auto;\n    font-size: clamp(200%, 150%, 150%);\n    text-transform: uppercase;\n    font-weight: 900;\n  }",""]);const c=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,a,o){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);r&&i[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),e.push(l))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var o={},i=[],c=0;c<n.length;c++){var s=n[c],d=r.base?s[0]+r.base:s[0],l=o[d]||0,u="".concat(d," ").concat(l);o[d]=l+1;var p=t(u),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(m);else{var f=a(m,r);r.byIndex=c,e.splice(c,0,{identifier:u,updater:f,references:1})}i.push(u)}return i}function a(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,a){var o=r(n=n||[],a=a||{});return function(n){n=n||[];for(var i=0;i<o.length;i++){var c=t(o[i]);e[c].references--}for(var s=r(n,a),d=0;d<o.length;d++){var l=t(o[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}o=s}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,a&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var a=e[r];if(void 0!==a)return a.exports;var o=e[r]={id:r,exports:{}};return n[r](o,o.exports,t),o.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{var n=t(379),e=t.n(n),r=t(795),a=t.n(r),o=t(569),i=t.n(o),c=t(565),s=t.n(c),d=t(216),l=t.n(d),u=t(589),p=t.n(u),m=t(426),f={};f.styleTagTransform=p(),f.setAttributes=s(),f.insert=i().bind(null,"head"),f.domAPI=a(),f.insertStyleElement=l(),e()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;const g=document.getElementById("content"),h="./static/party.jpg";function v(n="home"){g.innerHTML="";const e=document.createElement("div");switch(document.createElement("div"),n){case"home":const n=document.createElement("div");e.classList.add("background","flex","calculated-height"),e.setAttribute("style",`background-image:\n            linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.3)),\n            url(${h});`),n.innerHTML='<div class="container flex-col">\n                <div class="slogan text-center"><span class="accent-text">G</span>ood Time, <span class="accent-text">G</span>reat Taste</div>\n                <button class="btn-cta" id=\'btn-redirect\'>Take your order</button>\n            </div>',e.appendChild(n),g.appendChild(e),document.getElementById("btn-redirect").addEventListener("click",(()=>{v("menu")}));break;case"menu":e.classList.add("grid","calculated-height"),[{imgSource:"./static/meal1.png",description:"Happy Meal"},{imgSource:"./static/meal2.png",description:"Cheese Pounder "},{imgSource:"./static/meal3.png",description:"Triple Stack Meal"},{imgSource:"./static/meal4.png",description:"8pcs Chicken Bucket"}].forEach((n=>{const t=document.createElement("div");t.classList.add("menu-card","text-center");const r=document.createElement("img");r.src=n.imgSource;const a=document.createElement("h3");a.classList.add("img-desc"),a.textContent=n.description,t.prepend(r),t.appendChild(a),e.appendChild(t)})),g.appendChild(e);break;case"about":g.innerHTML="",console.log("about")}}const b=document.querySelectorAll(".nav-path");let y="";function x(n){y=n.target.getAttribute("id"),v(y)}b.forEach((n=>{n.addEventListener("click",x)})),document.addEventListener("DOMContentLoaded",v("home"))})()})();