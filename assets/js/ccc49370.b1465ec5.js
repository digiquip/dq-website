"use strict";(self.webpackChunkdq_website=self.webpackChunkdq_website||[]).push([[6344],{8320:(e,n,t)=>{t.r(n),t.d(n,{default:()=>f});t(1504);var s=t(5456),a=t(5756),i=t(5864),r=t(3152),l=t(9452),c=t(1392),o=t(4357),d=t(308),m=t(7624);function u(e){const{nextItem:n,prevItem:t}=e;return(0,m.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,o.G)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"}),children:[t&&(0,m.jsx)(d.c,{...t,subLabel:(0,m.jsx)(o.c,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post",children:"Newer Post"})}),n&&(0,m.jsx)(d.c,{...n,subLabel:(0,m.jsx)(o.c,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post",children:"Older Post"}),isNext:!0})]})}function h(){const{assets:e,metadata:n}=(0,r.g)(),{title:t,description:s,date:i,tags:l,authors:c,frontMatter:o}=n,{keywords:d}=o,u=e.image??o.image;return(0,m.jsxs)(a.U7,{title:t,description:s,keywords:d,image:u,children:[(0,m.jsx)("meta",{property:"og:type",content:"article"}),(0,m.jsx)("meta",{property:"article:published_time",content:i}),c.some((e=>e.url))&&(0,m.jsx)("meta",{property:"article:author",content:c.map((e=>e.url)).filter(Boolean).join(",")}),l.length>0&&(0,m.jsx)("meta",{property:"article:tag",content:l.map((e=>e.label)).join(",")})]})}var p=t(5124),g=t(1528);function x(e){let{sidebar:n,children:t}=e;const{metadata:s,toc:a}=(0,r.g)(),{nextItem:i,prevItem:o,frontMatter:d,unlisted:h}=s,{hide_table_of_contents:x,toc_min_heading_level:f,toc_max_heading_level:v}=d;return(0,m.jsxs)(l.c,{sidebar:n,toc:!x&&a.length>0?(0,m.jsx)(p.c,{toc:a,minHeadingLevel:f,maxHeadingLevel:v}):void 0,children:[h&&(0,m.jsx)(g.c,{}),(0,m.jsx)(c.c,{children:t}),(i||o)&&(0,m.jsx)(u,{nextItem:i,prevItem:o})]})}function f(e){const n=e.content;return(0,m.jsx)(r.E,{content:e.content,isBlogPostPage:!0,children:(0,m.jsxs)(a.cr,{className:(0,s.c)(i.W.wrapper.blogPages,i.W.page.blogPostPage),children:[(0,m.jsx)(h,{}),(0,m.jsx)(x,{sidebar:e.sidebar,children:(0,m.jsx)(n,{})})]})})}},5124:(e,n,t)=>{t.d(n,{c:()=>o});t(1504);var s=t(5456),a=t(3088);const i={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"};var r=t(7624);const l="table-of-contents__link toc-highlight",c="table-of-contents__link--active";function o(e){let{className:n,...t}=e;return(0,r.jsx)("div",{className:(0,s.c)(i.tableOfContents,"thin-scrollbar",n),children:(0,r.jsx)(a.c,{...t,linkClassName:l,linkActiveClassName:c})})}},3088:(e,n,t)=>{t.d(n,{c:()=>g});var s=t(1504),a=t(1824);function i(e){const n=e.map((e=>({...e,parentIndex:-1,children:[]}))),t=Array(7).fill(-1);n.forEach(((e,n)=>{const s=t.slice(2,e.level);e.parentIndex=Math.max(...s),t[e.level]=n}));const s=[];return n.forEach((e=>{const{parentIndex:t,...a}=e;t>=0?n[t].children.push(a):s.push(a)})),s}function r(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:s}=e;return n.flatMap((e=>{const n=r({toc:e.children,minHeadingLevel:t,maxHeadingLevel:s});return function(e){return e.level>=t&&e.level<=s}(e)?[{...e,children:n}]:n}))}function l(e){const n=e.getBoundingClientRect();return n.top===n.bottom?l(e.parentNode):n}function c(e,n){let{anchorTopOffset:t}=n;const s=e.find((e=>l(e).top>=t));if(s){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(l(s))?s:e[e.indexOf(s)-1]??null}return e[e.length-1]??null}function o(){const e=(0,s.useRef)(0),{navbar:{hideOnScroll:n}}=(0,a.y)();return(0,s.useEffect)((()=>{e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function d(e){const n=(0,s.useRef)(void 0),t=o();(0,s.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:s,linkActiveClassName:a,minHeadingLevel:i,maxHeadingLevel:r}=e;function l(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(s),l=function(e){let{minHeadingLevel:n,maxHeadingLevel:t}=e;const s=[];for(let a=n;a<=t;a+=1)s.push(`h${a}.anchor`);return Array.from(document.querySelectorAll(s.join()))}({minHeadingLevel:i,maxHeadingLevel:r}),o=c(l,{anchorTopOffset:t.current}),d=e.find((e=>o&&o.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(a),e.classList.add(a),n.current=e):e.classList.remove(a)}(e,e===d)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),()=>{document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,t])}var m=t(867),u=t(7624);function h(e){let{toc:n,className:t,linkClassName:s,isChild:a}=e;return n.length?(0,u.jsx)("ul",{className:a?void 0:t,children:n.map((e=>(0,u.jsxs)("li",{children:[(0,u.jsx)(m.c,{to:`#${e.id}`,className:s??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,u.jsx)(h,{isChild:!0,toc:e.children,className:t,linkClassName:s})]},e.id)))}):null}const p=s.memo(h);function g(e){let{toc:n,className:t="table-of-contents table-of-contents__left-border",linkClassName:l="table-of-contents__link",linkActiveClassName:c,minHeadingLevel:o,maxHeadingLevel:m,...h}=e;const g=(0,a.y)(),x=o??g.tableOfContents.minHeadingLevel,f=m??g.tableOfContents.maxHeadingLevel,v=function(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:a}=e;return(0,s.useMemo)((()=>r({toc:i(n),minHeadingLevel:t,maxHeadingLevel:a})),[n,t,a])}({toc:n,minHeadingLevel:x,maxHeadingLevel:f});return d((0,s.useMemo)((()=>{if(l&&c)return{linkClassName:l,linkActiveClassName:c,minHeadingLevel:x,maxHeadingLevel:f}}),[l,c,x,f])),(0,u.jsx)(p,{toc:v,className:t,linkClassName:l,...h})}},1528:(e,n,t)=>{t.d(n,{c:()=>h});t(1504);var s=t(5456),a=t(4357),i=t(6952),r=t(7624);function l(){return(0,r.jsx)(a.c,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function c(){return(0,r.jsx)(a.c,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function o(){return(0,r.jsx)(i.c,{children:(0,r.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}var d=t(5864),m=t(304);function u(e){let{className:n}=e;return(0,r.jsx)(m.c,{type:"caution",title:(0,r.jsx)(l,{}),className:(0,s.c)(n,d.W.common.unlistedBanner),children:(0,r.jsx)(c,{})})}function h(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o,{}),(0,r.jsx)(u,{...e})]})}},9040:(e,n,t)=>{t.d(n,{c:()=>i});var s=t(4357),a=t(7624);function i(){return(0,a.jsx)("a",{href:"#",className:"white-btn red-btn btn",children:(0,a.jsxs)("span",{className:"btn_wrapper",children:[(0,a.jsx)("span",{className:"btn_text",children:(0,a.jsx)(s.c,{children:"home.contact.button"})}),(0,a.jsx)("span",{className:"btn_text",children:(0,a.jsx)(s.c,{children:"home.contact.button"})})]})})}},1392:(e,n,t)=>{t.d(n,{c:()=>d});var s=t(1504),a=t(7792),i=t(4357),r=t(9040),l=t(5556),c=t(8208),o=t(7624);function d(e){return(0,s.useEffect)((()=>{l.cp.registerPlugin(c.W);const e=l.cp.from(".navbar",{yPercent:-100,paused:!0,duration:.2}).progress(1);c.W.create({start:"top top",end:"max",onUpdate:n=>{let t=document.querySelector(".navbar");t&&(1===n.direction&&t.classList.add("my-class"),-1===n.direction&&t.classList.add("up"),0===n.progress&&(t.classList.remove("up"),t.classList.remove("my-class"))),-1===n.direction?e.play():e.reverse()}})})),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.c,{...e}),(0,o.jsxs)("section",{className:"blog-contact",children:[(0,o.jsxs)("h3",{className:"section-title text--center",children:[(0,o.jsx)(i.c,{children:"general.contactus.title"}),(0,o.jsx)("span",{className:"orange",children:"."})]}),(0,o.jsxs)("div",{className:"",children:[(0,o.jsxs)("div",{className:"contact_people__item",children:[(0,o.jsx)("div",{className:"people-profile",children:(0,o.jsx)("img",{src:"../img/competence-images/tom_freddy.webp"})}),(0,o.jsx)("div",{className:"contact_item-content",children:(0,o.jsxs)("div",{className:"contact-people-detail",children:[(0,o.jsx)("p",{className:"orange",children:"Sales and marketing manager"}),(0,o.jsx)("h3",{children:"Tom Freddy Braathen"}),(0,o.jsx)("a",{href:"mailto:salg@digiquip.no",class:"btn__lined","aria-label":"salg@digiquip.no",target:"_self",children:(0,o.jsxs)("span",{class:"btn__wrapper",children:[(0,o.jsx)("span",{class:"btn__text",children:"salg@digiquip.no"}),(0,o.jsx)("span",{class:"btn__icon",children:(0,o.jsxs)("svg",{viewBox:"0 0 11 11",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,o.jsx)("path",{d:"M1 10.1667L10.1667 1",stroke:"white","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}),(0,o.jsx)("path",{d:"M1 1H10.1667V10.1667",stroke:"white","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})]})})]})}),(0,o.jsx)("a",{href:"tel:+47 90 77 35 24","aria-label":"+47 90 77 35 24",target:"_self",children:(0,o.jsx)("span",{class:"btn__wrapper",children:(0,o.jsx)("span",{class:"btn__text",children:"+47 90 77 35 24"})})})]})})]}),(0,o.jsx)("div",{className:"text--center",children:(0,o.jsx)(r.c,{})})]})]})]})}}}]);