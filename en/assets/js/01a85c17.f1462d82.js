"use strict";(self.webpackChunkdq_website=self.webpackChunkdq_website||[]).push([[8209],{9158:(e,s,t)=>{t.r(s),t.d(s,{default:()=>j});t(6540);var a=t(4164),l=t(1312);const r=()=>(0,l.T)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});var n=t(1213),i=t(7559),c=t(9520),o=t(6133),g=t(1107);const h={tag:"tag_Nnez"};var m=t(4848);function d(e){let{letterEntry:s}=e;return(0,m.jsxs)("article",{children:[(0,m.jsx)(g.A,{as:"h2",id:s.letter,children:s.letter}),(0,m.jsx)("ul",{className:"padding--none",children:s.tags.map((e=>(0,m.jsx)("li",{className:h.tag,children:(0,m.jsx)(o.A,{...e})},e.permalink)))}),(0,m.jsx)("hr",{})]})}function p(e){let{tags:s}=e;const t=function(e){const s={};return Object.values(e).forEach((e=>{const t=function(e){return e[0].toUpperCase()}(e.label);s[t]??=[],s[t].push(e)})),Object.entries(s).sort(((e,s)=>{let[t]=e,[a]=s;return t.localeCompare(a)})).map((e=>{let[s,t]=e;return{letter:s,tags:t.sort(((e,s)=>e.label.localeCompare(s.label)))}}))}(s);return(0,m.jsx)("section",{className:"margin-vert--lg",children:t.map((e=>(0,m.jsx)(d,{letterEntry:e},e.letter)))})}var u=t(1463);function j(e){let{tags:s,sidebar:t}=e;const l=r();return(0,m.jsxs)(n.e3,{className:(0,a.A)(i.G.wrapper.blogPages,i.G.page.blogTagsListPage),children:[(0,m.jsx)(n.be,{title:l}),(0,m.jsx)(u.A,{tag:"blog_tags_list"}),(0,m.jsxs)(c.A,{sidebar:t,children:[(0,m.jsx)(g.A,{as:"h1",children:l}),(0,m.jsx)(p,{tags:s})]})]})}},6133:(e,s,t)=>{t.d(s,{A:()=>i});t(6540);var a=t(4164),l=t(8774);const r={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};var n=t(4848);function i(e){let{permalink:s,label:t,count:i}=e;return(0,n.jsxs)(l.A,{href:s,className:(0,a.A)(r.tag,i?r.tagWithCount:r.tagRegular),children:[t,i&&(0,n.jsx)("span",{children:i})]})}},9520:(e,s,t)=>{t.d(s,{A:()=>o});var a=t(6540),l=t(4164),r=t(3833),n=t(4586),i=t(6347),c=t(4848);function o(e){const[s,t]=(0,a.useState)([]),[o,g]=(0,a.useState)([]),{siteConfig:h}=(0,n.A)(),[m,d]=(0,a.useState)("all"),p=(0,i.zy)(),{sidebar:u,toc:j,children:x,...b}=e,f=u&&u?.items?.length>0;(0,a.useEffect)((()=>{let e=!1;if(!e){(e=>{var s=e.split("/");return"tags"===s[s.length-2]?(d(s[s.length-1]),s[s.length-1]):(d("all"),"")})(p.pathname),(x&&x?.length>0?x:[]).forEach((e=>{if("BlogPostItemsWrapper"==e?.type?.name){e.props.items&&e.props.items.map((e=>e.content.frontMatter.tags.forEach((e=>{let t={label:e,permalink:e};s.push(t)}))));let t={label:"all",permalink:h.baseUrl+"blog"};s.splice(0,0,t);const a=s.map((e=>e.label)).filter(((e,s,t)=>t.indexOf(e)===s));g(a)}}))}let t=document.querySelector(".navbar");return s&&s.length>0?t.classList.remove("white-header"):t.classList.add("white-header"),()=>{e=!0}}),[s]);return(0,c.jsx)(c.Fragment,{children:(0,c.jsxs)(r.A,{...b,children:[o&&o.length>0?(0,c.jsx)("section",{className:"blog-items-banner",children:(0,c.jsxs)("div",{className:(0,l.A)("hero-25  hero hero--primary heroBanner"),children:[(0,c.jsxs)("div",{className:"container",children:[(0,c.jsxs)("h1",{className:"section-title",children:["God lesing",(0,c.jsx)("span",{className:"orange",children:"."})]}),(0,c.jsx)("nav",{class:"categories-blog",children:o.map(((e,s)=>(0,c.jsx)("a",{className:m===e?"active":"",onClick:s=>{d(e)},href:"all"!=e?h.baseUrl+"blog/tags/"+e:h.baseUrl+"blog",children:(0,c.jsx)("span",{children:e})},s)))})]}),(0,c.jsx)("span",{className:"bg"})]})}):(0,c.jsx)("div",{className:"margin-vert--lg",children:" "}),(0,c.jsx)("section",{className:"post-items-main",children:(0,c.jsx)("div",{className:"container margin-vert--lg",children:(0,c.jsx)("div",{className:"row",children:(0,c.jsx)("main",{className:(0,l.A)("col",{"col--12 mainblog":f,"col--9 col--offset-1":!f}),itemScope:!0,itemType:"https://schema.org/Blog",children:x})})})})]})})}}}]);