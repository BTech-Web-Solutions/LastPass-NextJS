(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,n,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i(8772)}])},8772:function(e,n,i){"use strict";i.r(n),i.d(n,{default:function(){return u}});var t=i(5893),s=i(7294),r=i(9571);function c(e){let{navigateToPage:n}=e,{currentUrl:i,setCurrentUrl:c}=(0,s.useContext)(r.Z);return(0,s.useEffect)(()=>{chrome.tabs.query({active:!0,currentWindow:!0},e=>{let n=e[0];c(n.url)})},[]),(0,t.jsx)("div",{children:(0,t.jsxs)("main",{children:[(0,t.jsx)("h1",{className:"font-semibold text-3xl",children:"Current URL:"}),(0,t.jsx)("p",{className:"font-semibold text-xl",children:i}),(0,t.jsx)("p",{onClick:()=>n("new"),children:"Go to New Page >"})]})})}function o(e){let{navigateToPage:n}=e;return(0,t.jsx)("div",{children:(0,t.jsxs)("main",{children:[(0,t.jsx)("h1",{children:"NEXT-CHROME-STARTER"}),(0,t.jsx)("p",{children:"This is an example of a Browser Extension built with NEXT.JS. Please refer to the GitHub repo for running instructions and documentation"}),(0,t.jsx)("h1",{children:"New Page ./components/New/index.js"}),(0,t.jsx)("p",{children:"[ - This is New page content - ]"}),(0,t.jsx)("p",{onClick:()=>n("index"),children:"< Go Back"})]})})}function u(){let[e,n]=(0,s.useState)("index"),i=e=>{n(e)};return(0,t.jsxs)("div",{children:["index"===e&&(0,t.jsx)(c,{navigateToPage:i}),"new"===e&&(0,t.jsx)(o,{navigateToPage:i})]})}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);