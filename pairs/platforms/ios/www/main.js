!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);n(1);window.openedSquare=[];var r=document.querySelector(".popup"),o="",a="",i=document.body.querySelector("#gameBoard");let s=4;var c=Math.pow(s,2),u=(new Object,new Object,new Object,0),l=document.querySelector("#bestMoves").innerHTML,d=(document.querySelector(".bestTime").innerHTML,document.body.querySelector(".moves")),f=[],p=[];document.querySelector("#squareImageGallery");document.querySelector("#restartBtn");function h(){var e=document.body.querySelector(".moves");u=0,e.innerHTML=u}window.matchedSquares=[],window.imageGallery=[],document.body.addEventListener("click",e=>{const t="BUTTON"===e.target.nodeName;var n=e.target.dataset.action;if(t)switch(n){case"close":document.querySelector("body").classList.remove("complete");break;case"restart":h(),y(),document.body.classList.remove("complete"),openedSquare=[],matchedSquares=[],imageGallery=[],f=[],p=[],w()}});var m,v=0,b=0,g=document.querySelector(".timer");function y(){var e=document.querySelector(".timer");v=0,b=0,0,e.innerHTML="0mins 0secs",clearInterval(m)}function S(){this.classList.contains("hidden")&&(openedSquare.push(this),this.classList.remove("hidden"),2===openedSquare.length&&(u++,d.innerHTML=u,1==u&&function(){var e=document.querySelector(".timer");m=setInterval(function(){e.innerHTML=b+"mins "+v+"secs",60==++v&&(b++,v=0),60==b&&(0,b=0)},1e3)}(),openedSquare[0].style.backgroundImage==openedSquare[1].style.backgroundImage?(matchedSquares.push(this),function(){for(e=0;e<2;e++){var e=e;openedSquare[e].classList.add("disabled")}openedSquare=[]}(),matchedSquares.length===c/2&&(matchedSquares=[],document.body.classList.add("complete"),r.classList.add("show"),clearInterval(m),o=g.innerHTML,(a=u)<l&&(l=a,document.querySelector("#bestMoves").innerHTML=a),o,document.querySelector(".bestTime").innerHTML=o)):requestAnimationFrame(function(){openedSquare[0].classList.add("hidden"),openedSquare[1].classList.add("hidden"),openedSquare=[]})))}function w(){r.classList.remove("show"),openedSquare=[],matchedSquares=[],imageGallery=[],f=[],p=[],function(){for(e=0;e<c/2;e++){var e=e;imageGallery.push("https://picsum.photos/id/"+(e+400)+"/300/300")}}();var e=0;for(t=0;t<c;t++){var t=t;e===Math.ceil(c/2)-1?e=0:e++;var n="<div class='generatedSquare' type="+e+" style='background-image: url("+imageGallery[e]+")'></div>";f.push(n)}var o=function(e){for(var t,n,r=e.length;0!==r;)n=Math.floor(Math.random()*e.length),t=e[r-=1],e[r]=e[n],e[n]=t;return e}(f),a="";for(t=0;t<o.length;t++)t%s==0&&(a+="<div class='clearFix'></div>"),a+=o[t];for(i.innerHTML=a,document.documentElement.style.setProperty("--width",Math.floor((100-1*s)/s)+"%"),document.documentElement.style.setProperty("--padding-bottom",Math.floor((100-1*s)/s)+"%"),p=i.querySelectorAll(".generatedSquare"),t=0;t<c;t++)p[t].classList.add("square"),p[t].classList.add("hidden"),p[t].classList.remove("disabled");if(/iP(hone|ad)/.test(window.navigator.userAgent)){var u=document.querySelectorAll(".square");for(t=0;t<u.length;t++)u[t].addEventListener("touchstart",S)}else for(u=document.querySelectorAll(".square"),t=0;t<u.length;t++)u[t].addEventListener("click",S);return i}document.body.appendChild(w())},function(e,t,n){var r=n(2);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(4)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){(e.exports=n(3)(!1)).push([e.i,"body {\n\tbackground-color: rgba(150, 150, 175, 0.2);\n\tz-index: -1;\n}\n\n#header{\n\tcolor: rgb(75,75,75);\n}\n\n#header div {\n\twidth: 50%;\n\ttext-align: center;\n}\n\n#imageBtn {\n\twidth: 100%;\n\tmargin: 0;\n\ttext-align: center;\n}\n\n#imgCatDiv {\n\twidth: 100%;\n\tmargin: auto;\n}\n\nh1 {\n\tmargin: auto;\n\ttext-align: center;\n\twidth: 50%;\n}\n\n\n.square {\n\tposition: relative;\n\tcolor: black;\n\twidth: var(--width);\n\tpadding-bottom: var(--padding-bottom);\n\tfloat: left;\n\tmargin: 0.5%;\n\ttransition: all 800ms;\n}\n\n.square:after {\n\tcontent: '';\n\tposition: absolute;\n\ttop: 0;\n\tbottom: 0;\n\tleft: 0;\n\tright: 0;\n}\n\n.hidden {\n\tbackground-color: black;\n}\n\n.disabled:after {\n\tbackground-color: rgba(0,200,0,0.2);\n}\n\n.hidden:hover:after {\n\tbackground: #0a0a0a;\n}\n\n.hidden:after {\n\tbackground: #000;\n\ttransition: all 600ms 500ms;\n}\n\n.show {\n\tposition: absolute;\n\ttop: 0;\n\tbottom: 0;\n\tleft: 0;\n\tright: 0;\n\tz-index: 1;\n\twidth: 100%;\n\theight: 100%;\n\tmargin: auto;\n\tdisplay: block;\n}\n\n.model{\n\tposition: absolute;\n\ttop: 0;\n\tbottom: 0%;\n\tleft: 0;\n\tright: 0;\n\tdisplay: none;\n\twidth: 100%;\n\ttext-align: center;\n\tpadding: 0;\n\tbackground-color: rgba(0,0,0,.2);\n}\n\n.popup{\n\ttop: 10%;\n\twidth: 80%;\n\tbackground-color: rgba(230,230,230,1);\n}\n\n.clearFix {\n\twidth: 0;\n\theight: 0;\n\tclear: both;\n}\n\n.complete .model {\n\tdisplay: block;\n}\n\n#gameBoard {\n\twidth: 80%;\n\tmargin: auto;\n}\n",""])},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(i=r,s=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(c," */")),a=r.sources.map(function(e){return"/*# sourceURL=".concat(r.sourceRoot).concat(e," */")});return[n].concat(a).concat([o]).join("\n")}var i,s,c;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2],"{").concat(n,"}"):n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var a=this[o][0];null!=a&&(r[a]=!0)}for(var i=0;i<e.length;i++){var s=e[i];null!=s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="(".concat(s[2],") and (").concat(n,")")),t.push(s))}},t}},function(e,t,n){var r,o,a={},i=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),s=function(e){var t={};return function(e,n){if("function"==typeof e)return e();if(void 0===t[e]){var r=function(e,t){return t?t.querySelector(e):document.querySelector(e)}.call(this,e,n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}}(),c=null,u=0,l=[],d=n(5);function f(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=a[r.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](r.parts[i]);for(;i<r.parts.length;i++)o.parts.push(g(r.parts[i],t))}else{var s=[];for(i=0;i<r.parts.length;i++)s.push(g(r.parts[i],t));a[r.id]={id:r.id,refs:1,parts:s}}}}function p(e,t){for(var n=[],r={},o=0;o<e.length;o++){var a=e[o],i=t.base?a[0]+t.base:a[0],s={css:a[1],media:a[2],sourceMap:a[3]};r[i]?r[i].parts.push(s):n.push(r[i]={id:i,parts:[s]})}return n}function h(e,t){var n=s(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=l[l.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),l.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=s(e.insertAt.before,n);n.insertBefore(t,o)}}function m(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=l.indexOf(e);t>=0&&l.splice(t,1)}function v(e){var t=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var r=function(){0;return n.nc}();r&&(e.attrs.nonce=r)}return b(t,e.attrs),h(e,t),t}function b(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function g(e,t){var n,r,o,a;if(t.transform&&e.css){if(!(a="function"==typeof t.transform?t.transform(e.css):t.transform.default(e.css)))return function(){};e.css=a}if(t.singleton){var i=u++;n=c||(c=v(t)),r=w.bind(null,n,i,!1),o=w.bind(null,n,i,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",b(t,e.attrs),h(e,t),t}(t),r=function(e,t,n){var r=n.css,o=n.sourceMap,a=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||a)&&(r=d(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var i=new Blob([r],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(i),s&&URL.revokeObjectURL(s)}.bind(null,n,t),o=function(){m(n),n.href&&URL.revokeObjectURL(n.href)}):(n=v(t),r=function(e,t){var n=t.css,r=t.media;r&&e.setAttribute("media",r);if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,n),o=function(){m(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=i()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=p(e,t);return f(n,t),function(e){for(var r=[],o=0;o<n.length;o++){var i=n[o];(s=a[i.id]).refs--,r.push(s)}e&&f(p(e,t),t);for(o=0;o<r.length;o++){var s;if(0===(s=r[o]).refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete a[s.id]}}}};var y,S=(y=[],function(e,t){return y[e]=t,y.filter(Boolean).join("\n")});function w(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=S(t,o);else{var a=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var o,a=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(a)?e:(o=0===a.indexOf("//")?a:0===a.indexOf("/")?n+a:r+a.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}}]);