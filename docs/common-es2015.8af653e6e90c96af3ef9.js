(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"6i10":function(n,t,e){"use strict";e.d(t,"a",(function(){return i}));const i={bubbles:{dur:1e3,circles:9,fn:(n,t,e)=>{const i=`${n*t/e-n}ms`,r=2*Math.PI*t/e;return{r:5,style:{top:`${9*Math.sin(r)}px`,left:`${9*Math.cos(r)}px`,"animation-delay":i}}}},circles:{dur:1e3,circles:8,fn:(n,t,e)=>{const i=t/e,r=`${n*i-n}ms`,o=2*Math.PI*i;return{r:5,style:{top:`${9*Math.sin(o)}px`,left:`${9*Math.cos(o)}px`,"animation-delay":r}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(n,t)=>({r:6,style:{left:`${9-9*t}px`,"animation-delay":-110*t+"ms"}})},lines:{dur:1e3,lines:12,fn:(n,t,e)=>({y1:17,y2:29,style:{transform:`rotate(${30*t+(t<6?180:-180)}deg)`,"animation-delay":`${n*t/e-n}ms`}})},"lines-small":{dur:1e3,lines:12,fn:(n,t,e)=>({y1:12,y2:20,style:{transform:`rotate(${30*t+(t<6?180:-180)}deg)`,"animation-delay":`${n*t/e-n}ms`}})}}},Bpjv:function(n,t,e){"use strict";e.d(t,"a",(function(){return i}));class i{constructor(n,t){this.platform=n,this.renderer=t,this.colors=["AliceBlue","CadetBlue","Cyan","DarkBlue","DarkRed","Lavender","LightCyan","LightSkyBlue","MistyRose","PaleTurquoise","SkyBlue","Teal"],this.rand=Math.floor(Math.random()*this.colors.length),this.bgColor=this.colors[this.rand]}ionViewDidLoad(){this.myCanvasInitializationFunction()}myCanvasInitializationFunction(){this.canvasElement=this.canvas.nativeElement,this.renderer.setElementAttribute(this.canvasElement,"width",this.platform.width()+""),this.renderer.setElementAttribute(this.canvasElement,"height",this.platform.height()+"");let n=this.canvasElement.getContext("2d");n.fillStyle=this.bgColor,this.myCanvasDrawingFunction(n)}myCanvasDrawingFunction(n){this.canvas.width=window.innerWidth,this.canvas.height=window.innerHeight,n.fillRect(0,0,this.canvas.width,this.canvas.height);for(var t=0;t<this.canvas.height;t++){var e=10+15*t;n.beginPath(),n.lineWidth=6,n.moveTo(e,0),n.bezierCurveTo(5+5*t,5+8*t,8+13*t,3+12*t,0,20+18*t),n.stroke(),n.save()}}handleMotionEvent(n){console.log("init");var t=n.accelerationIncludingGravity.y,e=n.accelerationIncludingGravity.z;console.log("x: "+n.accelerationIncludingGravity.x),console.log("y: "+t),console.log("z: "+e),t>0&&this.myCanvasAnimationFunction()}permission(){requestPermission().then(window.addEventListener("devicemotion",this.handleMotionEvent,!0))}myCanvasAnimationFunction(){this.canvasElement=this.canvas.nativeElement;let n=this.canvasElement.getContext("2d");console.log("running"),n.clearRect(0,0,this.canvas.width,this.canvas.height),n.fillStyle=this.bgColor,n.fillRect(0,0,this.canvas.width,this.canvas.height);var t=0,e=setInterval((function(){200==t?clearInterval(e):(t++,n.beginPath(),n.lineWidth=6,n.moveTo(10+15*t,0),n.bezierCurveTo(5+5*t,5+8*t,8+13*t,3+12*t,0,20+18*t),n.stroke(),n.save())}),5)}ngOnInit(){this.myCanvasInitializationFunction()}}},KwJk:function(n,t,e){"use strict";e.d(t,"a",(function(){return r})),e.d(t,"b",(function(){return o})),e.d(t,"c",(function(){return i})),e.d(t,"d",(function(){return a}));const i=(n,t)=>null!==t.closest(n),r=n=>"string"==typeof n&&n.length>0?{"ion-color":!0,[`ion-color-${n}`]:!0}:void 0,o=n=>{const t={};return(n=>void 0!==n?(Array.isArray(n)?n:n.split(" ")).filter(n=>null!=n).map(n=>n.trim()).filter(n=>""!==n):[])(n).forEach(n=>t[n]=!0),t},s=/^[a-z][a-z0-9+\-.]*:/,a=async(n,t,e)=>{if(null!=n&&"#"!==n[0]&&!s.test(n)){const i=document.querySelector("ion-router");if(i)return null!=t&&t.preventDefault(),i.push(n,e)}return!1}},NqGI:function(n,t,e){"use strict";e.d(t,"a",(function(){return i})),e.d(t,"b",(function(){return r}));const i=async(n,t,e,i,r)=>{if(n)return n.attachViewToDom(t,e,r,i);if("string"!=typeof e&&!(e instanceof HTMLElement))throw new Error("framework delegate is missing");const o="string"==typeof e?t.ownerDocument&&t.ownerDocument.createElement(e):e;return i&&i.forEach(n=>o.classList.add(n)),r&&Object.assign(o,r),t.appendChild(o),o.componentOnReady&&await o.componentOnReady(),o},r=(n,t)=>{if(t){if(n)return n.removeViewFromDom(t.parentElement,t);t.remove()}return Promise.resolve()}},Uwmq:function(n,t,e){"use strict";e.d(t,"a",(function(){return i}));const i=n=>{try{if("string"!=typeof n||""===n)return n;const t=document.createDocumentFragment(),e=document.createElement("div");t.appendChild(e),e.innerHTML=n,a.forEach(n=>{const e=t.querySelectorAll(n);for(let i=e.length-1;i>=0;i--){const n=e[i];n.parentNode?n.parentNode.removeChild(n):t.removeChild(n);const s=o(n);for(let t=0;t<s.length;t++)r(s[t])}});const i=o(t);for(let n=0;n<i.length;n++)r(i[n]);const s=document.createElement("div");s.appendChild(t);const l=s.querySelector("div");return null!==l?l.innerHTML:s.innerHTML}catch(t){return console.error(t),""}},r=n=>{if(n.nodeType&&1!==n.nodeType)return;for(let e=n.attributes.length-1;e>=0;e--){const t=n.attributes.item(e),i=t.name;if(!s.includes(i.toLowerCase())){n.removeAttribute(i);continue}const r=t.value;null!=r&&r.toLowerCase().includes("javascript:")&&n.removeAttribute(i)}const t=o(n);for(let e=0;e<t.length;e++)r(t[e])},o=n=>null!=n.children?n.children:n.childNodes,s=["class","id","href","src","name","slot"],a=["script","style","iframe","meta","link","object","embed"]},eZfe:function(n,t,e){"use strict";var i=e("8Y7J"),r=e("MKJQ"),o=e("sZkV");e("Bpjv"),e.d(t,"a",(function(){return s})),e.d(t,"b",(function(){return a}));var s=i.lb({encapsulation:0,styles:[["canvas[_ngcontent-%COMP%]{display:block;width:100%;height:100%;background-color:#00f}"]],data:{}});function a(n){return i.Cb(0,[i.zb(402653184,1,{canvas:0}),(n()(),i.nb(1,0,null,null,2,"ion-button",[],null,[[null,"click"]],(function(n,t,e){var i=!0;return"click"===t&&(i=!1!==n.component.permission()&&i),i}),r.m,r.b)),i.mb(2,49152,null,0,o.h,[i.h,i.k,i.x],null,null),(n()(),i.Bb(-1,0,["Request Permission"])),(n()(),i.nb(4,0,[[1,0],["canvas",1]],null,0,"canvas",[],null,null,null,null,null))],null,null)}},fzvj:function(n,t,e){"use strict";e.d(t,"a",(function(){return r})),e.d(t,"b",(function(){return o})),e.d(t,"c",(function(){return s})),e.d(t,"d",(function(){return i}));const i=()=>{const n=window.TapticEngine;n&&n.selection()},r=()=>{const n=window.TapticEngine;n&&n.gestureSelectionStart()},o=()=>{const n=window.TapticEngine;n&&n.gestureSelectionChanged()},s=()=>{const n=window.TapticEngine;n&&n.gestureSelectionEnd()}},j1ZV:function(n,t,e){"use strict";e.d(t,"a",(function(){return i}));class i{}},qtYk:function(n,t,e){"use strict";e.d(t,"a",(function(){return i}));class i{}}}]);