(()=>{"use strict";var n,e,t,o,r,i,a,s,c,p,l,u,d,f,v={421:(n,e,t)=>{t.d(e,{Z:()=>s});var o=t(81),r=t.n(o),i=t(645),a=t.n(i)()(r());a.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap);"]),a.push([n.id,':root {\n    --font-poppins: "Poppins";\n}\n\nbody {\n    font-family: var(--font-poppins);\n    background-color: rgb(255, 255, 255);\n    \n}\n\n\n\n#openSidePanel {\n    font-family: var(--font-poppins);\n    background-color: #3e77b5;\n    color:black;\n    font-size:7px;\n    width:200px;\n    border-radius:2vw;\n    margin-bottom:3vw;\n    cursor:pointer;\n}\n\n#openSidePanel:hover {\n    background-color: #95b8de;\n}\n\n#startRecording{\n    font-family: var(--font-poppins);\n    font-weight:500;\n    background-color: lightgreen;\n    border-radius:2vw;\n    color:black;\n    margin-top:5vw;\n    width:250px;\n    cursor:pointer;\n    font-size:10vw;\n    display:inline;\n}\n\n#startRecording:hover{\n    background-color:lightseagreen;\n}\n\n#status{\n    color:maroon;\n    \n}\n\n#mainButtons{\n    text-align:center;\n    justify-content:center;\n    align-items:center;\n    position: fixed;\n    top: 0;\n    left: 0;\n    z-index: 999;\n    width: 100%;\n    background-color: white;\n}\n\n#features{\n    height:100vw;\n    margin-top:125vw;\n}\n\n#transcriptlist{\n    list-style-type: none;\n    margin-left:-3vw;\n    \n}\n\n#transcriptwords{\n    font-weight:700;\n    font-size:4vw;\n    color:black;\n    display:inline;\n}\n\n#timestamp{\n    font-size:4vw;\n    font-weight:700;\n    color:darkviolet;\n    display:inline;\n}\n\n#wpmcontent{\n    margin-top:-20vw;\n    justify-content: center;\n    align-items:center;\n    text-align: center;\n\n}\n\n#wpm{\n    display:none;\n    font-weight:bolder;\n    font-size:100px;\n}\n\n#wpmtext{\n    display:none;\n    font-weight:bolder;\n    font-size:30px;\n    margin-top:-30vw;\n}\n\n#disconnecthelp{\n    display:none;\n    font-size:15px;\n    margin-bottom:-10vw;\n}\n\n\n#instruct{\n    animation: blinker 3s linear infinite;\n    display:none;\n    font-weight:bolder;\n    font-size:30px;\n    \n}\n  \n  @keyframes blinker {\n    50% {\n      opacity: 0;\n    }\n  }\n\n',""]);const s=a},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(o)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var p=0;p<n.length;p++){var l=[].concat(n[p]);o&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),e.push(l))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var i={},a=[],s=0;s<n.length;s++){var c=n[s],p=o.base?c[0]+o.base:c[0],l=i[p]||0,u="".concat(p," ").concat(l);i[p]=l+1;var d=t(u),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==d)e[d].references++,e[d].updater(f);else{var v=r(f,o);o.byIndex=s,e.splice(s,0,{identifier:u,updater:v,references:1})}a.push(u)}return a}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var i=o(n=n||[],r=r||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var s=t(i[a]);e[s].references--}for(var c=o(n,r),p=0;p<i.length;p++){var l=t(i[p]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=c}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},m={};function h(n){var e=m[n];if(void 0!==e)return e.exports;var t=m[n]={id:n,exports:{}};return v[n](t,t.exports,h),t.exports}h.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return h.d(e,{a:e}),e},h.d=(n,e)=>{for(var t in e)h.o(e,t)&&!h.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},h.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),h.nc=void 0,n=h(379),e=h.n(n),t=h(795),o=h.n(t),r=h(569),i=h.n(r),a=h(565),s=h.n(a),c=h(216),p=h.n(c),l=h(589),u=h.n(l),d=h(421),(f={}).styleTagTransform=u(),f.setAttributes=s(),f.insert=i().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=p(),e()(d.Z,f),d.Z&&d.Z.locals&&d.Z.locals})();