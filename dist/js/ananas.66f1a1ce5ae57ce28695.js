(()=>{"use strict";var e,t={5270:(e,t,r)=>{var n=r(6486),o=r.n(n);function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==i(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==i(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===i(o)?o:String(o)),n)}var o}r(1703),r(6649),r(6078),r(2526),r(1817),r(1539),r(9653),r(9070),r(2165),r(6992),r(8783),r(3948);var u=function(){function e(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";a(this,e),this.idLogo=t,this.classLogo=r}var t,r;return t=e,(r=[{key:"render",value:function(e){var t=document.createElement("img");t.id=this.idLogo,this.classLogo&&t.classList.add(this.classLogo),e.insertBefore(t,e.firstChild)}}])&&l(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==c(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==c(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===c(o)?o:String(o)),n)}var o}var p=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(f(this,e),!1!==t){if(!(t instanceof u))throw new TypeError("Componente MainHeader requires a Logo Component");this.logo=t,this.isLogoPresent=!0}else this.isLogoPresent=!1}var t,r;return t=e,(r=[{key:"render",value:function(e){var t=document.createElement("header");t.id="main-header";var r=document.createElement("h1");r.textContent=e,t.appendChild(r),this.isLogoPresent&&this.logo.render(t),document.body.insertBefore(t,document.body.firstChild)}}])&&s(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();r(4916),r(3123),r(2222);const y=r.p+"assets/img/logo-ananas.cdf14905f29729fdf389.png";function d(e){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(e)}function v(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==d(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==d(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===d(o)?o:String(o)),n)}var o}var b=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,r;return t=e,(r=[{key:"render",value:function(e){var t=document.createElement("img");t.id=e,t.classList.add("ananas"),t.src=y,t.alt="Ananas",document.body.appendChild(t)}}])&&v(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();new p(new u("logo-ananas","ananas")).render(o().upperFirst("ananas page")),function(e,t,r){console.log("Ciao");var n=e.split(/\./),o=n[n.length-1],i=document.getElementById("logo-ananas");i.src=e,i.title=r,i.alt="".concat(r,".").concat(o)}(y,0,"Ananas"),new b("ananas").render()}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var i=r[e]={id:e,loaded:!1,exports:{}};return t[e].call(i.exports,i,i.exports,n),i.loaded=!0,i.exports}n.m=t,e=[],n.O=(t,r,o,i)=>{if(!r){var a=1/0;for(f=0;f<e.length;f++){for(var[r,o,i]=e[f],l=!0,u=0;u<r.length;u++)(!1&i||a>=i)&&Object.keys(n.O).every((e=>n.O[e](r[u])))?r.splice(u--,1):(l=!1,i<a&&(a=i));if(l){e.splice(f--,1);var c=o();void 0!==c&&(t=c)}}return t}i=i||0;for(var f=e.length;f>0&&e[f-1][2]>i;f--)e[f]=e[f-1];e[f]=[r,o,i]},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),n.p="./",(()=>{var e={749:0};n.O.j=t=>0===e[t];var t=(t,r)=>{var o,i,[a,l,u]=r,c=0;if(a.some((t=>0!==e[t]))){for(o in l)n.o(l,o)&&(n.m[o]=l[o]);if(u)var f=u(n)}for(t&&t(r);c<a.length;c++)i=a[c],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(f)},r=self.webpackChunkproject5=self.webpackChunkproject5||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var o=n.O(void 0,[873],(()=>n(5270)));o=n.O(o)})();