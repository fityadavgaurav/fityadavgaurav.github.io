!function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=25)}({1:function(e,t,n){!function(t,n){var i=function(e,t,n){"use strict";var i,r;if(function(){var t,n={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0,ricTimeout:0,throttleDelay:125};for(t in r=e.lazySizesConfig||e.lazysizesConfig||{},n)t in r||(r[t]=n[t])}(),!t||!t.getElementsByClassName)return{init:function(){},cfg:r,noSupport:!0};var a=t.documentElement,o=e.HTMLPictureElement,s=e.addEventListener.bind(e),l=e.setTimeout,u=e.requestAnimationFrame||l,c=e.requestIdleCallback,d=/^picture$/i,f=["load","error","lazyincluded","_lazyloaded"],y={},g=Array.prototype.forEach,v=function(e,t){return y[t]||(y[t]=new RegExp("(\\s|^)"+t+"(\\s|$)")),y[t].test(e.getAttribute("class")||"")&&y[t]},m=function(e,t){v(e,t)||e.setAttribute("class",(e.getAttribute("class")||"").trim()+" "+t)},p=function(e,t){var n;(n=v(e,t))&&e.setAttribute("class",(e.getAttribute("class")||"").replace(n," "))},h=function(e,t,n){var i=n?"addEventListener":"removeEventListener";n&&h(e,t),f.forEach((function(n){e[i](n,t)}))},z=function(e,n,r,a,o){var s=t.createEvent("Event");return r||(r={}),r.instance=i,s.initEvent(n,!a,!o),s.detail=r,e.dispatchEvent(s),s},b=function(t,n){var i;!o&&(i=e.picturefill||r.pf)?(n&&n.src&&!t.getAttribute("srcset")&&t.setAttribute("srcset",n.src),i({reevaluate:!0,elements:[t]})):n&&n.src&&(t.src=n.src)},A=function(e,t){return(getComputedStyle(e,null)||{})[t]},C=function(e,t,n){for(n=n||e.offsetWidth;n<r.minSize&&t&&!e._lazysizesWidth;)n=t.offsetWidth,t=t.parentNode;return n},E=(ye=[],ge=[],ve=ye,me=function(){var e=ve;for(ve=ye.length?ge:ye,de=!0,fe=!1;e.length;)e.shift()();de=!1},pe=function(e,n){de&&!n?e.apply(this,arguments):(ve.push(e),fe||(fe=!0,(t.hidden?l:u)(me)))},pe._lsFlush=me,pe),_=function(e,t){return t?function(){E(e)}:function(){var t=this,n=arguments;E((function(){e.apply(t,n)}))}},M=function(e){var t,i,r=function(){t=null,e()},a=function(){var e=n.now()-i;e<99?l(a,99-e):(c||r)(r)};return function(){i=n.now(),t||(t=l(a,99))}},w=(U=/^img$/i,G=/^iframe$/i,J="onscroll"in e&&!/(gle|ing)bot/.test(navigator.userAgent),K=0,Q=0,V=-1,X=function(e){Q--,(!e||Q<0||!e.target)&&(Q=0)},Y=function(e){return null==I&&(I="hidden"==A(t.body,"visibility")),I||!("hidden"==A(e.parentNode,"visibility")&&"hidden"==A(e,"visibility"))},Z=function(e,n){var i,r=e,o=Y(e);for(k-=n,q+=n,H-=n,$+=n;o&&(r=r.offsetParent)&&r!=t.body&&r!=a;)(o=(A(r,"opacity")||1)>0)&&"visible"!=A(r,"overflow")&&(i=r.getBoundingClientRect(),o=$>i.left&&H<i.right&&q>i.top-1&&k<i.bottom+1);return o},ee=function(){var e,n,o,s,l,u,c,d,f,y,g,v,m=i.elements;if((F=r.loadMode)&&Q<8&&(e=m.length)){for(n=0,V++;n<e;n++)if(m[n]&&!m[n]._lazyRace)if(!J||i.prematureUnveil&&i.prematureUnveil(m[n]))se(m[n]);else if((d=m[n].getAttribute("data-expand"))&&(u=1*d)||(u=K),y||(y=!r.expand||r.expand<1?a.clientHeight>500&&a.clientWidth>500?500:370:r.expand,i._defEx=y,g=y*r.expFactor,v=r.hFac,I=null,K<g&&Q<1&&V>2&&F>2&&!t.hidden?(K=g,V=0):K=F>1&&V>1&&Q<6?y:0),f!==u&&(j=innerWidth+u*v,D=innerHeight+u,c=-1*u,f=u),o=m[n].getBoundingClientRect(),(q=o.bottom)>=c&&(k=o.top)<=D&&($=o.right)>=c*v&&(H=o.left)<=j&&(q||$||H||k)&&(r.loadHidden||Y(m[n]))&&(P&&Q<3&&!d&&(F<3||V<4)||Z(m[n],u))){if(se(m[n]),l=!0,Q>9)break}else!l&&P&&!s&&Q<4&&V<4&&F>2&&(W[0]||r.preloadAfterLoad)&&(W[0]||!d&&(q||$||H||k||"auto"!=m[n].getAttribute(r.sizesAttr)))&&(s=W[0]||m[n]);s&&!l&&se(s)}},te=function(e){var t,i=0,a=r.throttleDelay,o=r.ricTimeout,s=function(){t=!1,i=n.now(),e()},u=c&&o>49?function(){c(s,{timeout:o}),o!==r.ricTimeout&&(o=r.ricTimeout)}:_((function(){l(s)}),!0);return function(e){var r;(e=!0===e)&&(o=33),t||(t=!0,(r=a-(n.now()-i))<0&&(r=0),e||r<9?u():l(u,r))}}(ee),ne=function(e){var t=e.target;t._lazyCache?delete t._lazyCache:(X(e),m(t,r.loadedClass),p(t,r.loadingClass),h(t,re),z(t,"lazyloaded"))},ie=_(ne),re=function(e){ie({target:e.target})},ae=function(e){var t,n=e.getAttribute(r.srcsetAttr);(t=r.customMedia[e.getAttribute("data-media")||e.getAttribute("media")])&&e.setAttribute("media",t),n&&e.setAttribute("srcset",n)},oe=_((function(e,t,n,i,a){var o,s,u,c,f,y;(f=z(e,"lazybeforeunveil",t)).defaultPrevented||(i&&(n?m(e,r.autosizesClass):e.setAttribute("sizes",i)),s=e.getAttribute(r.srcsetAttr),o=e.getAttribute(r.srcAttr),a&&(c=(u=e.parentNode)&&d.test(u.nodeName||"")),y=t.firesLoad||"src"in e&&(s||o||c),f={target:e},m(e,r.loadingClass),y&&(clearTimeout(B),B=l(X,2500),h(e,re,!0)),c&&g.call(u.getElementsByTagName("source"),ae),s?e.setAttribute("srcset",s):o&&!c&&(G.test(e.nodeName)?function(e,t){try{e.contentWindow.location.replace(t)}catch(n){e.src=t}}(e,o):e.src=o),a&&(s||c)&&b(e,{src:o})),e._lazyRace&&delete e._lazyRace,p(e,r.lazyClass),E((function(){var t=e.complete&&e.naturalWidth>1;y&&!t||(t&&m(e,"ls-is-cached"),ne(f),e._lazyCache=!0,l((function(){"_lazyCache"in e&&delete e._lazyCache}),9)),"lazy"==e.loading&&Q--}),!0)})),se=function(e){if(!e._lazyRace){var t,n=U.test(e.nodeName),i=n&&(e.getAttribute(r.sizesAttr)||e.getAttribute("sizes")),a="auto"==i;(!a&&P||!n||!e.getAttribute("src")&&!e.srcset||e.complete||v(e,r.errorClass)||!v(e,r.lazyClass))&&(t=z(e,"lazyunveilread").detail,a&&x.updateElem(e,!0,e.offsetWidth),e._lazyRace=!0,Q++,oe(e,t,a,i,n))}},le=M((function(){r.loadMode=3,te()})),ue=function(){3==r.loadMode&&(r.loadMode=2),le()},ce=function(){P||(n.now()-R<999?l(ce,999):(P=!0,r.loadMode=3,te(),s("scroll",ue,!0)))},{_:function(){R=n.now(),i.elements=t.getElementsByClassName(r.lazyClass),W=t.getElementsByClassName(r.lazyClass+" "+r.preloadClass),s("scroll",te,!0),s("resize",te,!0),s("pageshow",(function(e){if(e.persisted){var n=t.querySelectorAll("."+r.loadingClass);n.length&&n.forEach&&u((function(){n.forEach((function(e){e.complete&&se(e)}))}))}})),e.MutationObserver?new MutationObserver(te).observe(a,{childList:!0,subtree:!0,attributes:!0}):(a.addEventListener("DOMNodeInserted",te,!0),a.addEventListener("DOMAttrModified",te,!0),setInterval(te,999)),s("hashchange",te,!0),["focus","mouseover","click","load","transitionend","animationend"].forEach((function(e){t.addEventListener(e,te,!0)})),/d$|^c/.test(t.readyState)?ce():(s("load",ce),t.addEventListener("DOMContentLoaded",te),l(ce,2e4)),i.elements.length?(ee(),E._lsFlush()):te()},checkElems:te,unveil:se,_aLSL:ue}),x=(L=_((function(e,t,n,i){var r,a,o;if(e._lazysizesWidth=i,i+="px",e.setAttribute("sizes",i),d.test(t.nodeName||""))for(a=0,o=(r=t.getElementsByTagName("source")).length;a<o;a++)r[a].setAttribute("sizes",i);n.detail.dataAttr||b(e,n.detail)})),O=function(e,t,n){var i,r=e.parentNode;r&&(n=C(e,r,n),(i=z(e,"lazybeforesizes",{width:n,dataAttr:!!t})).defaultPrevented||(n=i.detail.width)&&n!==e._lazysizesWidth&&L(e,r,i,n))},T=M((function(){var e,t=S.length;if(t)for(e=0;e<t;e++)O(S[e])})),{_:function(){S=t.getElementsByClassName(r.autosizesClass),s("resize",T)},checkElems:T,updateElem:O}),N=function(){!N.i&&t.getElementsByClassName&&(N.i=!0,x._(),w._())};var S,L,O,T;var W,P,B,F,R,j,D,k,H,$,q,I,U,G,J,K,Q,V,X,Y,Z,ee,te,ne,ie,re,ae,oe,se,le,ue,ce;var de,fe,ye,ge,ve,me,pe;return l((function(){r.init&&N()})),i={cfg:r,autoSizer:x,loader:w,init:N,uP:b,aC:m,rC:p,hC:v,fire:z,gW:C,rAF:E}}(t,t.document,Date);t.lazySizes=i,e.exports&&(e.exports=i)}("undefined"!=typeof window?window:{})},25:function(e,t,n){"use strict";n.r(t);var i=n(1);n.n(i).a.init()}});;(function(){var container,button,menu,links,i,len;container=document.getElementById('site-navigation');if(!container){return;}
button=container.getElementsByTagName('button')[0];if('undefined'===typeof button){return;}
menu=container.getElementsByTagName('ul')[0];if('undefined'===typeof menu){button.style.display='none';return;}
menu.setAttribute('aria-expanded','false');if(-1===menu.className.indexOf('nav-menu')){menu.className+=' nav-menu';}
button.onclick=function(){if(-1!==container.className.indexOf('toggled')){container.className=container.className.replace(' toggled','');button.setAttribute('aria-expanded','false');menu.setAttribute('aria-expanded','false');}else{container.className+=' toggled';button.setAttribute('aria-expanded','true');menu.setAttribute('aria-expanded','true');}};links=menu.getElementsByTagName('a');for(i=0,len=links.length;i<len;i++){links[i].addEventListener('focus',toggleFocus,true);links[i].addEventListener('blur',toggleFocus,true);}
function toggleFocus(){var self=this;while(-1===self.className.indexOf('nav-menu')){if('li'===self.tagName.toLowerCase()){if(-1!==self.className.indexOf('focus')){self.className=self.className.replace(' focus','');}else{self.className+=' focus';}}
self=self.parentElement;}}
(function(container){var touchStartFn,i,parentLink=container.querySelectorAll('.menu-item-has-children > a, .page_item_has_children > a');if('ontouchstart'in window){touchStartFn=function(e){var menuItem=this.parentNode,i;if(!menuItem.classList.contains('focus')){e.preventDefault();for(i=0;i<menuItem.parentNode.children.length;++i){if(menuItem===menuItem.parentNode.children[i]){continue;}
menuItem.parentNode.children[i].classList.remove('focus');}
menuItem.classList.add('focus');}else{menuItem.classList.remove('focus');}};for(i=0;i<parentLink.length;++i){parentLink[i].addEventListener('touchstart',touchStartFn,false);}}}(container));})();/*!This file is auto-generated*/!function(d,l){"use strict";var e=!1,o=!1;if(l.querySelector)if(d.addEventListener)e=!0;if(d.wp=d.wp||{},!d.wp.receiveEmbedMessage)if(d.wp.receiveEmbedMessage=function(e){var t=e.data;if(t)if(t.secret||t.message||t.value)if(!/[^a-zA-Z0-9]/.test(t.secret)){var r,a,i,s,n,o=l.querySelectorAll('iframe[data-secret="'+t.secret+'"]'),c=l.querySelectorAll('blockquote[data-secret="'+t.secret+'"]');for(r=0;r<c.length;r++)c[r].style.display="none";for(r=0;r<o.length;r++)if(a=o[r],e.source===a.contentWindow){if(a.removeAttribute("style"),"height"===t.message){if(1e3<(i=parseInt(t.value,10)))i=1e3;else if(~~i<200)i=200;a.height=i}if("link"===t.message)if(s=l.createElement("a"),n=l.createElement("a"),s.href=a.getAttribute("src"),n.href=t.value,n.host===s.host)if(l.activeElement===a)d.top.location.href=t.value}}},e)d.addEventListener("message",d.wp.receiveEmbedMessage,!1),l.addEventListener("DOMContentLoaded",t,!1),d.addEventListener("load",t,!1);function t(){if(!o){o=!0;var e,t,r,a,i=-1!==navigator.appVersion.indexOf("MSIE 10"),s=!!navigator.userAgent.match(/Trident.*rv:11\./),n=l.querySelectorAll("iframe.wp-embedded-content");for(t=0;t<n.length;t++){if(!(r=n[t]).getAttribute("data-secret"))a=Math.random().toString(36).substr(2,10),r.src+="#?secret="+a,r.setAttribute("data-secret",a);if(i||s)(e=r.cloneNode(!0)).removeAttribute("security"),r.parentNode.replaceChild(e,r)}}}}(window,document);