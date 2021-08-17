(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[646],{4252:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var i=n(5893),r=n(9008),s=n(1664);function o(e){return(0,i.jsx)("div",{children:(0,i.jsxs)("div",{className:"m-auto flex justify-between border-b-2 border-gray-50 h-12",style:{maxWidth:"1200px"},children:[(0,i.jsx)("div",{className:"w-16 flex items-center justify-center text-2xl text-blue-500",onClick:e.handleLogoClick,children:(0,i.jsx)(s.default,{href:"/",children:(0,i.jsx)("a",{children:"Blog"})})}),(0,i.jsxs)("div",{className:"flex w-3/4 justify-end space-x-6",children:[(0,i.jsx)("div",{className:"flex items-center text-2xl font-mono  border-b-2 border-opacity-0 border-green-500 hover:border-opacity-100",children:(0,i.jsx)(s.default,{href:"/posts/test",children:(0,i.jsx)("a",{children:"test"})})}),(0,i.jsxs)("a",{href:"https://github.com/mudssky",target:"_blank",rel:"noreferrer",className:"flex text-lg items-center text-gray-600 font-sans font-semibold",children:["GitHub",(0,i.jsx)("span",{className:"ml-1 mt-1",children:(0,i.jsxs)("svg",{className:"fill-current text-gray-400",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"15",height:"15",children:[(0,i.jsx)("path",{fill:"none",d:"M0 0h24v24H0z"}),(0,i.jsx)("path",{d:"M10 6v2H5v11h11v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6zm11-3v8h-2V6.413l-7.793 7.794-1.414-1.414L17.585 5H13V3h8z"})]})})]})]})]})})}function a(e){return(0,i.jsx)("div",{children:(0,i.jsxs)("div",{style:{maxWidth:"1920px"},className:"m-auto",children:[(0,i.jsxs)(r.default,{children:[(0,i.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,i.jsx)("meta",{name:"description",content:"Learn how to build a personal website using Next.js"}),(0,i.jsx)("meta",{name:"og:title",content:"Next.js Sample Website"}),(0,i.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,i.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"})]}),(0,i.jsx)(o,{handleLogoClick:e.handleLogoClick}),(0,i.jsx)("main",{className:e.className,children:e.children})]})})}},9056:function(e,t,n){"use strict";function i(e,t){var n=new Date(e),i={yyyy:n.getFullYear(),MM:n.getMonth()+1<10?"0"+(n.getMonth()+1):n.getMonth()+1,dd:n.getDate()<10?"0"+n.getDate():n.getDate(),hh:n.getHours()<10?"0"+n.getHours():n.getHours(),mm:n.getMinutes()<10?"0"+n.getMinutes():n.getMinutes(),ss:n.getSeconds()<10?"0"+n.getSeconds():n.getSeconds()};for(var r in i){var s=new RegExp("".concat(r),"g");s.test(t)&&(t=t.replace(s,i[r]+""))}return t}function r(e){var t=Math.floor((new Date).getTime()/1e3)-e,n=3600,i=86400,r=30*i,s=31104e3;return t>s?"".concat(Math.floor(t/s),"\u5e74\u524d"):t>r?"".concat(Math.floor(t/r),"\u6708\u524d"):t>i?"".concat(Math.floor(t/i),"\u5929\u524d"):t>n?"".concat(Math.floor(t/n),"\u5c0f\u65f6\u524d"):t>60?"".concat(Math.floor(t/60),"\u5206\u949f\u524d"):"".concat(Math.floor(t),"\u79d2\u524d")}n.d(t,{vc:function(){return i},O5:function(){return r}})},8947:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return m},default:function(){return x}});var i=n(5893),r=n(9008),s=n(4252),o=n(7294),a=n(8456),c=n.n(a),l=n(43),d=n.n(l),u=n(8579);n(9177);function h(){var e=(0,o.useState)(Array()),t=e[0],n=e[1],r=(0,o.useState)(0),s=r[0],a=r[1],c=(0,o.useState)(!1),l=c[0],d=c[1],u=(0,o.useRef)(null),h=(0,o.useState)(!1),f=h[0],m=h[1];(0,o.useEffect)((function(){var e=Array();return document.querySelectorAll("h1,h2,h3,h4,h5,h6").forEach((function(t,n,i){var r="heading-".concat(n),s="data-headid";t.setAttribute(s,r),e.push({title:t.innerText,node:t,prop:s,mark:r,tagName:t.tagName})})),n(e),function(){}}),[f]),(0,o.useEffect)((function(){return window.addEventListener("scroll",(function(){var e=window.innerHeight,n=0;for(var i in t){var r=t[i].node.getBoundingClientRect();if(r.bottom>=0&&r.bottom<e){n=parseInt(i),a(n);break}}})),function(){}}),[t]),(0,o.useEffect)((function(){function e(e){u.current.style.left=e.left+"px",u.current.style.top=e.top+"px"}(function(){for(var e=navigator.userAgent,t=["Android","iPhone","SymbianOS","Windows Phone","iPod","iPad"],n=0;n<t.length;n++)if(e.indexOf(t[n])>=0)return!0;return!1})()&&d(!0);var t=localStorage.getItem("tocposition"),n={left:10,top:50};if(t&&e(n=JSON.parse(t)),u.current){u.current.addEventListener("mousedown",(function(t){var i,r,s=t.clientX-((null===(i=u.current)||void 0===i?void 0:i.getBoundingClientRect().left)||0),o=t.clientY-((null===(r=u.current)||void 0===r?void 0:r.getBoundingClientRect().top)||0);function a(t){e(n={left:t.clientX-s,top:t.clientY-o})}document.addEventListener("mousemove",a),document.addEventListener("mouseup",(function e(t){document.removeEventListener("mousemove",a),document.removeEventListener("mouseup",e),localStorage.setItem("tocposition",JSON.stringify(n))}))})),u.current.ondragstart=function(){return!1}}return function(){}}),[]);var x={H1:"text-md",H2:"pl-2",H3:"pl-4",H4:"pl-5",H5:"pl-5",H6:"pl-5"};return(0,i.jsxs)("div",{ref:u,draggable:"true",className:"bg-pink-50 left-2 top-14 fixed shadow rounded w-1/5",style:l?{width:"25px",height:"22px",overflow:"hidden",transitionProperty:"height,width",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"150ms"}:{minWidth:"10rem"},children:[(0,i.jsx)("div",{className:"absolute",onClick:function(){d(!l)},children:(0,i.jsxs)("svg",{className:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"3262",width:"22",height:"22",children:[(0,i.jsx)("path",{d:"M91.89 238.457c-29.899 0-54.133 24.239-54.133 54.134 0 29.899 24.234 54.137 54.133 54.137s54.138-24.238 54.138-54.137c0-29.896-24.239-54.134-54.138-54.134z",fill:"#E5594F","p-id":"3263"}),(0,i.jsx)("path",{d:"M91.89 462.463c-29.899 0-54.133 24.239-54.133 54.139 0 29.895 24.234 54.133 54.133 54.133s54.138-24.238 54.138-54.133c0-29.9-24.239-54.139-54.138-54.139z",fill:"#C45FA0","p-id":"3264"}),(0,i.jsx)("path",{d:"M91.89 686.475c-29.899 0-54.133 24.237-54.133 54.133 0 29.899 24.234 54.138 54.133 54.138s54.138-24.238 54.138-54.138c0-29.896-24.239-54.133-54.138-54.133z",fill:"#F39A2B","p-id":"3265"}),(0,i.jsx)("path",{d:"M941.26 234.723H328.964c-28.867 0-52.263 23.4-52.263 52.268v3.734c0 28.868 23.396 52.269 52.263 52.269H941.26c28.869 0 52.269-23.401 52.269-52.269v-3.734c-0.001-28.868-23.4-52.268-52.269-52.268z",fill:"#F0D043","p-id":"3266"}),(0,i.jsx)("path",{d:"M941.26 682.74H328.964c-28.867 0-52.263 23.399-52.263 52.268v3.734c0 28.863 23.396 52.269 52.263 52.269H941.26c28.869 0 52.269-23.405 52.269-52.269v-3.734c-0.001-28.868-23.4-52.268-52.269-52.268z",fill:"#4A5699","p-id":"3267"}),(0,i.jsx)("path",{d:"M709.781 458.729H328.964c-28.867 0-52.263 23.4-52.263 52.269v3.734c0 28.873 23.396 52.269 52.263 52.269h380.817c28.866 0 52.271-23.396 52.271-52.269v-3.734c0.001-28.869-23.405-52.269-52.271-52.269z",fill:"#E5594F","p-id":"3268"})]})}),(0,i.jsx)("div",{className:"absolute right-0 "+(l?" hidden ":" ")+(f?"transition duration-500 transform -rotate-180":"transition duration-500 transform rotate-180"),onClick:function(){m(!f)},children:(0,i.jsx)("svg",{className:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"1196",width:"22",height:"22",children:(0,i.jsx)("path",{d:"M432.2304 103.2192c-9.216-6.5536-22.016-4.3008-28.5696 4.9152-6.5536 9.216-4.3008 22.016 4.9152 28.5696l59.0848 41.7792 3.2768 2.2528c-71.8848 9.9328-138.3424 42.8032-190.5664 95.0272-63.3856 63.3856-98.2016 147.5584-98.2016 237.1584 0 45.568 9.0112 89.7024 26.7264 131.3792 17.1008 40.1408 41.5744 76.1856 72.704 107.008 3.9936 3.9936 9.216 5.9392 14.4384 5.9392 5.3248 0 10.5472-2.048 14.5408-6.0416 7.9872-7.9872 7.8848-20.992-0.1024-28.9792-56.32-55.7056-87.2448-130.048-87.2448-209.2032 0-78.6432 30.6176-152.576 86.2208-208.1792 46.4896-46.4896 105.8816-75.5712 169.984-83.7632l-2.9696 3.072-52.4288 52.9408c-7.9872 7.9872-7.8848 20.992 0.1024 28.9792 3.9936 3.9936 9.216 5.9392 14.4384 5.9392 5.3248 0 10.5472-2.048 14.5408-6.0416l109.4656-110.4896-130.3552-92.2624zM841.9328 511.0784c0-45.568-9.0112-89.7024-26.7264-131.3792-17.1008-40.1408-41.5744-76.1856-72.704-107.008-3.9936-3.9936-9.216-5.9392-14.4384-5.9392-5.3248 0-10.5472 2.048-14.5408 6.0416-7.9872 7.9872-7.8848 20.992 0.1024 28.9792 56.32 55.7056 87.2448 130.048 87.2448 209.2032 0 78.6432-30.6176 152.576-86.2208 208.1792-46.4896 46.4896-105.8816 75.5712-169.984 83.7632l2.9696-3.072 52.4288-52.9408c7.9872-7.9872 7.8848-20.992-0.1024-28.9792-3.9936-3.9936-9.216-5.9392-14.4384-5.9392-5.3248 0-10.5472 2.048-14.5408 6.0416L461.6192 828.7232l130.1504 92.0576c9.216 6.5536 22.016 4.3008 28.5696-4.9152 6.5536-9.216 4.3008-22.016-4.9152-28.5696l-59.0848-41.7792-3.2768-2.2528c71.8848-9.9328 138.3424-42.8032 190.5664-95.0272 63.3856-63.3856 98.304-147.5584 98.304-237.1584z","p-id":"1197"})})}),(0,i.jsx)("div",{className:"font-bold   pl-7 select-none cursor-move",children:"\u76ee\u5f55"}),(0,i.jsx)("div",{className:"overflow-auto",style:{maxHeight:"70vh"},children:(0,i.jsx)("ul",{className:"flex flex-col",children:t.map((function(e,t){return(0,i.jsx)("li",{className:(s===t?"text-blue-400 border-l-2 border-red-500":"")+" pl-2 text-xs font-sans truncate",onClick:function(){e.node.scrollIntoView(!0,{behavior:"auto"})},children:(0,i.jsx)("a",{className:"hover:underline hover:bg-gray-200 "+x[e.tagName],title:e.title,children:e.title})},e.mark)}))})})]})}var f=n(9056),m=!0;function x(e){var t=e.postData;return(0,o.useEffect)((function(){u.Z.highlightAll()}),[]),(0,i.jsxs)(s.Z,{className:"lg:w-full flex justify-center",children:[(0,i.jsx)(r.default,{children:(0,i.jsx)("title",{children:t.title})}),(0,i.jsxs)("div",{className:"w-full lg:w-auto  p-10 mt-5 ring-1 ring-gray-100 shadow-sm",children:[(0,i.jsxs)("div",{className:"text-xs text-gray-400 space-x-4 border-b-2 mb-2 shadow-xs",children:[(0,i.jsx)("span",{children:(0,f.vc)(1e3*t.lastUpdated,"yyyy.MM.dd hh:mm:ss")}),(0,i.jsxs)("span",{children:["\u5b57\u6570: ",t.content.length]})]}),(0,i.jsx)(c(),{linkTarget:"_blank",transformImageUri:function(e,t,n){return e.startsWith("assets")?"/"+e:e},remarkPlugins:[d()],className:"m-auto prose prose-indigo",children:t.content})]}),(0,i.jsx)(h,{})]})}},5734:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/[id]",function(){return n(8947)}])}},function(e){e.O(0,[774,996,326,888,179],(function(){return t=5734,e(e.s=t);var t}));var t=e.O();_N_E=t}]);