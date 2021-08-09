(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[646],{4252:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(5893),s=n(9008),i=n(1664);function c(){return(0,r.jsxs)("div",{className:"flex justify-between border-b-2 border-gray-50 h-10",children:[(0,r.jsx)("div",{className:"w-16 text-center text-2xl text-blue-500",children:(0,r.jsx)(i.default,{href:"/",children:(0,r.jsx)("a",{children:"Blog"})})}),(0,r.jsxs)("div",{className:"flex w-3/4 justify-end items-center space-x-6",children:[(0,r.jsx)("div",{className:"inline-block h-5 text-sm border-b-2 border-opacity-0 border-green-500 hover:border-opacity-100",children:(0,r.jsx)(i.default,{href:"/posts/test",children:(0,r.jsx)("a",{children:"test"})})}),(0,r.jsxs)("a",{href:"https://github.com/mudssky",target:"_blank",rel:"noreferrer",className:"h-6 flex text-sm mr-4 mt-2 text-gray-600 font-sans font-semibold",children:["GitHub",(0,r.jsx)("span",{className:"ml-1 mt-1",children:(0,r.jsxs)("svg",{className:"fill-current text-gray-400",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"15",height:"15",children:[(0,r.jsx)("path",{fill:"none",d:"M0 0h24v24H0z"}),(0,r.jsx)("path",{d:"M10 6v2H5v11h11v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6zm11-3v8h-2V6.413l-7.793 7.794-1.414-1.414L17.585 5H13V3h8z"})]})})]})]})]})}function o(e){var t=e.children;return(0,r.jsxs)("div",{children:[(0,r.jsxs)(s.default,{children:[(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,r.jsx)("meta",{name:"description",content:"Learn how to build a personal website using Next.js"}),(0,r.jsx)("meta",{name:"og:title",content:"Next.js Sample Website"}),(0,r.jsx)("meta",{name:"twitter:card",content:"summary_large_image"})]}),(0,r.jsx)(c,{}),(0,r.jsx)("main",{children:t})]})}},8947:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return h},default:function(){return m}});var r=n(5893),s=n(9008),i=n(4252),c=n(7294),o=n(8456),l=n.n(o),a=n(43),d=n.n(a),u=n(8579);n(9177);function f(){var e=(0,c.useState)(Array()),t=e[0],n=e[1],s=(0,c.useState)(0),i=s[0],o=s[1],l=(0,c.useState)(!1),a=l[0],d=l[1],u=(0,c.useRef)(0),f=(0,c.useRef)(null),h=(0,c.useState)(!1),m=h[0],x=h[1];(0,c.useEffect)((function(){var e=Array();return document.querySelectorAll("h1,h2,h3,h4,h5,h6").forEach((function(t,n,r){var s="heading-".concat(n),i="data-headid";t.setAttribute(i,s),e.push({title:t.innerText,node:t,prop:i,mark:s,tagName:t.tagName,offsetTop:t.offsetTop})})),n(e),u.current=e[0].node.offsetTop,function(){}}),[m]),(0,c.useEffect)((function(){return window.addEventListener("scroll",(function(){var e=document.documentElement.scrollTop;t.forEach((function(t,n){e<t.offsetTop-u.current||o(n)}))})),function(){}}),[t]),(0,c.useEffect)((function(){var e=localStorage.getItem("tocposition"),t={left:20,top:50};e&&(t=JSON.parse(e));var n=t;function r(e){f.current.style.left=e.left+"px",f.current.style.top=e.top+"px"}if(r(n),f.current){f.current.addEventListener("mousedown",(function(e){var t,s,i=e.clientX-((null===(t=f.current)||void 0===t?void 0:t.getBoundingClientRect().left)||0),c=e.clientY-((null===(s=f.current)||void 0===s?void 0:s.getBoundingClientRect().top)||0);function o(e){r(n={left:e.clientX-i,top:e.clientY-c})}document.addEventListener("mousemove",o),document.addEventListener("mouseup",(function e(t){document.removeEventListener("mousemove",o),document.removeEventListener("mouseup",e),localStorage.setItem("tocposition",JSON.stringify(n))}))})),f.current.ondragstart=function(){return!1}}return function(){}}),[]);var p={H1:"text-md",H2:"pl-2",H3:"pl-4",H4:"pl-5",H5:"pl-5",H6:"pl-5"};return(0,r.jsxs)("div",{ref:f,draggable:"true",className:"bg-pink-50 fixed shadow rounded w-1/5",children:[(0,r.jsx)("div",{className:"absolute",onClick:function(){d(!a)},children:(0,r.jsxs)("svg",{className:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"3262",width:"22",height:"22",children:[(0,r.jsx)("path",{d:"M91.89 238.457c-29.899 0-54.133 24.239-54.133 54.134 0 29.899 24.234 54.137 54.133 54.137s54.138-24.238 54.138-54.137c0-29.896-24.239-54.134-54.138-54.134z",fill:"#E5594F","p-id":"3263"}),(0,r.jsx)("path",{d:"M91.89 462.463c-29.899 0-54.133 24.239-54.133 54.139 0 29.895 24.234 54.133 54.133 54.133s54.138-24.238 54.138-54.133c0-29.9-24.239-54.139-54.138-54.139z",fill:"#C45FA0","p-id":"3264"}),(0,r.jsx)("path",{d:"M91.89 686.475c-29.899 0-54.133 24.237-54.133 54.133 0 29.899 24.234 54.138 54.133 54.138s54.138-24.238 54.138-54.138c0-29.896-24.239-54.133-54.138-54.133z",fill:"#F39A2B","p-id":"3265"}),(0,r.jsx)("path",{d:"M941.26 234.723H328.964c-28.867 0-52.263 23.4-52.263 52.268v3.734c0 28.868 23.396 52.269 52.263 52.269H941.26c28.869 0 52.269-23.401 52.269-52.269v-3.734c-0.001-28.868-23.4-52.268-52.269-52.268z",fill:"#F0D043","p-id":"3266"}),(0,r.jsx)("path",{d:"M941.26 682.74H328.964c-28.867 0-52.263 23.399-52.263 52.268v3.734c0 28.863 23.396 52.269 52.263 52.269H941.26c28.869 0 52.269-23.405 52.269-52.269v-3.734c-0.001-28.868-23.4-52.268-52.269-52.268z",fill:"#4A5699","p-id":"3267"}),(0,r.jsx)("path",{d:"M709.781 458.729H328.964c-28.867 0-52.263 23.4-52.263 52.269v3.734c0 28.873 23.396 52.269 52.263 52.269h380.817c28.866 0 52.271-23.396 52.271-52.269v-3.734c0.001-28.869-23.405-52.269-52.271-52.269z",fill:"#E5594F","p-id":"3268"})]})}),(0,r.jsx)("div",{className:"absolute right-0 "+(a?"hidden":"")+(m?"transition duration-500 transform -rotate-180":"transition duration-500 transform rotate-180"),onClick:function(){x(!m)},children:(0,r.jsx)("svg",{className:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"1196",width:"22",height:"22",children:(0,r.jsx)("path",{d:"M432.2304 103.2192c-9.216-6.5536-22.016-4.3008-28.5696 4.9152-6.5536 9.216-4.3008 22.016 4.9152 28.5696l59.0848 41.7792 3.2768 2.2528c-71.8848 9.9328-138.3424 42.8032-190.5664 95.0272-63.3856 63.3856-98.2016 147.5584-98.2016 237.1584 0 45.568 9.0112 89.7024 26.7264 131.3792 17.1008 40.1408 41.5744 76.1856 72.704 107.008 3.9936 3.9936 9.216 5.9392 14.4384 5.9392 5.3248 0 10.5472-2.048 14.5408-6.0416 7.9872-7.9872 7.8848-20.992-0.1024-28.9792-56.32-55.7056-87.2448-130.048-87.2448-209.2032 0-78.6432 30.6176-152.576 86.2208-208.1792 46.4896-46.4896 105.8816-75.5712 169.984-83.7632l-2.9696 3.072-52.4288 52.9408c-7.9872 7.9872-7.8848 20.992 0.1024 28.9792 3.9936 3.9936 9.216 5.9392 14.4384 5.9392 5.3248 0 10.5472-2.048 14.5408-6.0416l109.4656-110.4896-130.3552-92.2624zM841.9328 511.0784c0-45.568-9.0112-89.7024-26.7264-131.3792-17.1008-40.1408-41.5744-76.1856-72.704-107.008-3.9936-3.9936-9.216-5.9392-14.4384-5.9392-5.3248 0-10.5472 2.048-14.5408 6.0416-7.9872 7.9872-7.8848 20.992 0.1024 28.9792 56.32 55.7056 87.2448 130.048 87.2448 209.2032 0 78.6432-30.6176 152.576-86.2208 208.1792-46.4896 46.4896-105.8816 75.5712-169.984 83.7632l2.9696-3.072 52.4288-52.9408c7.9872-7.9872 7.8848-20.992-0.1024-28.9792-3.9936-3.9936-9.216-5.9392-14.4384-5.9392-5.3248 0-10.5472 2.048-14.5408 6.0416L461.6192 828.7232l130.1504 92.0576c9.216 6.5536 22.016 4.3008 28.5696-4.9152 6.5536-9.216 4.3008-22.016-4.9152-28.5696l-59.0848-41.7792-3.2768-2.2528c71.8848-9.9328 138.3424-42.8032 190.5664-95.0272 63.3856-63.3856 98.304-147.5584 98.304-237.1584z","p-id":"1197"})})}),(0,r.jsxs)("ul",{className:"flex flex-col"+(a?" hidden":""),children:[(0,r.jsx)("li",{className:"font-bold border-b-2 border-gray-300 pl-7 select-none cursor-move",children:"\u76ee\u5f55"}),t.map((function(e,t){return(0,r.jsx)("li",{className:(i===t?"text-blue-400 border-l-2 border-red-500":"")+" pl-2 truncate",onClick:function(){e.node.scrollIntoView(!0)},children:(0,r.jsx)("a",{className:"hover:underline hover:bg-gray-200 "+p[e.tagName],title:e.title,children:e.title})},e.mark)}))]})]})}var h=!0;function m(e){var t=e.postData;return(0,c.useEffect)((function(){u.Z.highlightAll()}),[]),(0,r.jsxs)(i.Z,{children:[(0,r.jsx)(s.default,{children:(0,r.jsx)("title",{children:t.title})}),t.id,(0,r.jsx)("br",{}),t.date,(0,r.jsx)(l(),{remarkPlugins:[d()],className:"w-1/2 m-auto prose",children:t.content}),(0,r.jsx)(f,{})]})}},5734:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/[id]",function(){return n(8947)}])}},function(e){e.O(0,[774,996,326,888,179],(function(){return t=5734,e(e.s=t);var t}));var t=e.O();_N_E=t}]);