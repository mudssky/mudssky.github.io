(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(4186)}])},8434:function(e,t,n){"use strict";n.d(t,{Z:function(){return N}});var r=n(5893),s=n(9008),a=n(1664),i=n.n(a),l=n(4051),c=n.n(l),o=n(7294);function u(e,t,n,r,s,a,i){try{var l=e[a](i),c=l.value}catch(o){return void n(o)}l.done?t(c):Promise.resolve(c).then(r,s)}function d(e){return function(){var t=this,n=arguments;return new Promise((function(r,s){var a=e.apply(t,n);function i(e){u(a,r,s,i,l,"next",e)}function l(e){u(a,r,s,i,l,"throw",e)}i(void 0)}))}}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var f={isMenuOpen:!1},m="setIsMenuOpen",x=function(e,t){var n=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){h(e,t,n[t])}))}return e}({},e);if(t.type===m)return n.isMenuOpen=t.payload,n;throw new Error("not match actions")},p=function(e){return{type:"setIsMenuOpen",payload:e}};var g=n(3321),v=n(1233),j=n(5819),b=n(5503);function y(e){var t=function(e){var t=e.menuList,n=e.menuTitle,r=(0,o.useReducer)(x,f),s=r[0],a=r[1],i=s.isMenuOpen,l=(0,o.useRef)(null),u=function(){var e=d(c().mark((function e(){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("open menu",n),a(p(!0));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=function(){var e=d(c().mark((function e(){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("close menu",n),a(p(!1));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return{buttonDom:l,isMenuOpen:i,menuList:t,menuTitle:n,handleMenuOpen:u,handleMenuClose:h}}(e),n=t.buttonDom,s=t.isMenuOpen,a=t.menuList,l=t.menuTitle,u=t.handleMenuOpen,h=t.handleMenuClose,m=e.className;return(0,r.jsxs)("div",{className:m,children:[(0,r.jsx)(g.Z,{ref:n,endIcon:(0,r.jsx)(b.Z,{}),onClick:u,children:l}),(0,r.jsx)(v.Z,{anchorEl:n.current,open:s,onClose:h,MenuListProps:{"aria-labelledby":"basic-button"},children:a.map((function(e){return(0,r.jsx)(j.Z,{children:(0,r.jsx)(i(),{href:e.link,children:e.title})},e.link)}))})]})}function w(e){return(0,r.jsx)("div",{children:(0,r.jsxs)("div",{className:"m-auto flex justify-between border-b-2 border-gray-50 h-12",style:{maxWidth:"1200px"},children:[(0,r.jsx)("div",{className:"w-16 flex items-center justify-center text-2xl text-blue-500",onClick:e.handleLogoClick,children:(0,r.jsx)(i(),{href:"/",children:(0,r.jsx)("a",{children:"Blog"})})}),(0,r.jsxs)("div",{className:"flex w-3/4 justify-end space-x-6",children:[(0,r.jsx)(y,{className:"flex items-center",menuList:[{title:"txtformat",link:"/tools/txtformat"}],menuTitle:"\u5de5\u5177\u7bb1"}),(0,r.jsx)("div",{className:"flex items-center text-2xl font-mono border-b-2 border-opacity-0 border-green-500 hover:border-opacity-100",children:(0,r.jsx)(i(),{href:"/posts/test",children:(0,r.jsx)("a",{children:"test"})})}),(0,r.jsxs)("a",{href:"https://github.com/mudssky",target:"_blank",rel:"noreferrer",className:"flex text-lg items-center text-gray-600 font-sans font-semibold",children:["GitHub",(0,r.jsx)("span",{className:"ml-1 mt-1",children:(0,r.jsxs)("svg",{className:"fill-current text-gray-400",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"15",height:"15",children:[(0,r.jsx)("path",{fill:"none",d:"M0 0h24v24H0z"}),(0,r.jsx)("path",{d:"M10 6v2H5v11h11v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6zm11-3v8h-2V6.413l-7.793 7.794-1.414-1.414L17.585 5H13V3h8z"})]})})]})]})]})})}function N(e){return(0,r.jsx)("div",{children:(0,r.jsxs)("div",{style:{maxWidth:"1920px"},className:"m-auto",children:[(0,r.jsxs)(s.default,{children:[(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,r.jsx)("meta",{name:"description",content:"Learn how to build a personal website using Next.js"}),(0,r.jsx)("meta",{name:"og:title",content:"Next.js Sample Website"}),(0,r.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"})]}),(0,r.jsx)(w,{handleLogoClick:e.handleLogoClick}),(0,r.jsx)("main",{className:e.className,children:e.children})]})})}},3047:function(e,t,n){"use strict";function r(e,t){var n=new Date(e),r={yyyy:n.getFullYear(),MM:n.getMonth()+1<10?"0"+(n.getMonth()+1):n.getMonth()+1,dd:n.getDate()<10?"0"+n.getDate():n.getDate(),hh:n.getHours()<10?"0"+n.getHours():n.getHours(),mm:n.getMinutes()<10?"0"+n.getMinutes():n.getMinutes(),ss:n.getSeconds()<10?"0"+n.getSeconds():n.getSeconds()};for(var s in r){var a=new RegExp("".concat(s),"g");a.test(t)&&(t=t.replace(a,r[s]+""))}return t}function s(e){var t=Math.floor((new Date).getTime()/1e3)-e,n=3600,r=86400,s=30*r,a=31104e3;return t>a?"".concat(Math.floor(t/a),"\u5e74\u524d"):t>s?"".concat(Math.floor(t/s),"\u6708\u524d"):t>r?"".concat(Math.floor(t/r),"\u5929\u524d"):t>n?"".concat(Math.floor(t/n),"\u5c0f\u65f6\u524d"):t>60?"".concat(Math.floor(t/60),"\u5206\u949f\u524d"):"".concat(Math.floor(t),"\u79d2\u524d")}n.d(t,{O5:function(){return s},vc:function(){return r}})},4186:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return d},default:function(){return h}});var r=n(5893),s=n(7294),a=n(8434),i=n(1664),l=n.n(i),c=n(3047);function o(e){return(0,r.jsx)("div",{className:e.className,title:e.title,onClick:function(){e.handleClick(e.tagname)},children:e.children})}function u(e){var t=e.tagInfos,n=Object.keys(t);return(0,r.jsx)("div",{className:"",children:(0,r.jsxs)("div",{className:"w-full  p-1 lg:w-56 lg:absolute lg:top-1/4 lg:right-0 bg-gray-50 transition-all",children:[(0,r.jsx)("div",{className:"font-serif text-center text-gray-500 mb-2",children:"TAGS"}),(0,r.jsx)("div",{className:"flex flex-wrap justify-center lg:justify-start",children:n.map((function(n){return(0,r.jsxs)(o,{tagname:n,className:"text-xs font-serif p-1 mt-1 cursor-pointer text-gray-500 rounded-full border-2 border-gray-500 mx-1 hover:text-blue-500 hover:border-blue-500",title:t[n].length+"\u7bc7",handleClick:e.handleClick,children:[n," (",t[n].length,"\u7bc7)"]},n)}))})]})})}var d=!0;function h(e){var t=e.allPostsData,n=e.tagInfos,i=function(e){f(t.filter((function(t){return t.tags.includes(e)})))},d=(0,s.useState)(t),h=d[0],f=d[1];return(0,r.jsx)(a.Z,{handleLogoClick:function(){h.length!==t.length&&f(t)},children:(0,r.jsxs)("div",{className:"relative",children:[(0,r.jsx)(u,{tagInfos:n,handleClick:i}),(0,r.jsx)("ul",{className:"flex-col mt-8 space-y-3",children:h.map((function(e){var t=e.id,n=e.lastUpdated,s=(e.title,e.excerpt),a=e.tags;return(0,r.jsxs)("li",{className:"w-1/2 min-w-min mx-auto pb-2 border-b-2 border-gray-100",children:[(0,r.jsxs)("div",{className:"text-xs text-gray-500 flex justify-items-start",children:[(0,r.jsx)("span",{id:"home-lastUpdated",className:"",children:(0,c.O5)(n)}),(0,r.jsx)("div",{id:"home-taglist",className:"",children:a.map((function(e){return(0,r.jsx)(o,{tagname:e,className:"inline hover:text-pink-400 cursor-pointer",handleClick:i,children:e},e)}))})]}),(0,r.jsx)(l(),{href:"/posts/"+t,children:(0,r.jsxs)("a",{className:"cursor-pointer inline-block pt-1",children:[(0,r.jsx)("div",{className:"text-base font-sans font-semibold",children:t}),(0,r.jsxs)("div",{className:"text-xs text-gray-400 font-sans pt-1",children:[s,"..."]})]})})]},t)}))})]})})}}},function(e){e.O(0,[207,774,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);