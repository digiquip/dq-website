"use strict";(self.webpackChunkdq_website=self.webpackChunkdq_website||[]).push([[7643],{5124:(e,t,s)=>{s.r(t),s.d(t,{default:()=>j});s(6540);var a=s(4164),r=s(4586),n=s(1213),i=s(7559),l=s(9520),o=s(7713),c=s(1463),d=s(2852),m=s(5260),g=s(4096),h=s(4848);function p(e){const t=(0,g.kJ)(e);return(0,h.jsx)(m.A,{children:(0,h.jsx)("script",{type:"application/ld+json",children:JSON.stringify(t)})})}function u(e){const{metadata:t}=e,{siteConfig:{title:s}}=(0,r.A)(),{blogDescription:a,blogTitle:i,permalink:l}=t,o="/"===l?s:i;return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(n.be,{title:o,description:a}),(0,h.jsx)(c.A,{tag:"blog_posts_list"})]})}function x(e){const{metadata:t,items:s,sidebar:a}=e;return(0,h.jsxs)(l.A,{sidebar:a,children:[(0,h.jsx)(d.A,{items:s}),(0,h.jsx)(o.A,{metadata:t})]})}function j(e){return(0,h.jsxs)(n.e3,{className:(0,a.A)(i.G.wrapper.blogPages,i.G.page.blogListPage),children:[(0,h.jsx)(u,{...e}),(0,h.jsx)(p,{...e}),(0,h.jsx)(x,{...e})]})}},7713:(e,t,s)=>{s.d(t,{A:()=>i});s(6540);var a=s(1312),r=s(9022),n=s(4848);function i(e){const{metadata:t}=e,{previousPage:s,nextPage:i}=t;return(0,n.jsxs)("nav",{className:"pagination-nav","aria-label":(0,a.T)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[s&&(0,n.jsx)(r.A,{permalink:s,title:(0,n.jsx)(a.A,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer entries"})}),i&&(0,n.jsx)(r.A,{permalink:i,title:(0,n.jsx)(a.A,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older entries"}),isNext:!0})]})}},1989:(e,t,s)=>{s.d(t,{A:()=>r});var a=s(4848);function r(e){let{Img:t,width:s,height:r,alt:n,zIndex:i}=e;return(0,a.jsx)("img",{src:t,width:s,height:r,alt:n,style:{zIndex:i}})}},9520:(e,t,s)=>{s.d(t,{A:()=>c});var a=s(6540),r=s(4164),n=s(3833),i=s(4586),l=s(6347),o=s(4848);function c(e){const[t,s]=(0,a.useState)([]),[c,d]=(0,a.useState)([]),{siteConfig:m}=(0,i.A)(),[g,h]=(0,a.useState)("all"),p=(0,l.zy)(),{sidebar:u,toc:x,children:j,...f}=e,b=u&&u?.items?.length>0;(0,a.useEffect)((()=>{const e=document.createElement("script");return e.src="https://static.elfsight.com/platform/platform.js",e.async=!0,document.body.appendChild(e),()=>{document.body.removeChild(e)}}),[]),(0,a.useEffect)((()=>{let e=!1;if(!e){(e=>{var t=e.split("/");return"tags"===t[t.length-2]?(h(t[t.length-1]),t[t.length-1]):(h("all"),"")})(p.pathname),(j&&j?.length>0?j:[]).forEach((e=>{if("BlogPostItemsWrapper"==e?.type?.name){e.props.items&&e.props.items.map((e=>e.content.frontMatter.tags.forEach((e=>{let s={label:e,permalink:e};t.push(s)}))));let s={label:"all",permalink:m.baseUrl+"blog"};t.splice(0,0,s);const a=t.map((e=>e.label)).filter(((e,t,s)=>s.indexOf(e)===t));d(a)}}))}let s=document.querySelector(".navbar");return t&&t.length>0?s.classList.remove("white-header"):s.classList.add("white-header"),()=>{e=!0}}),[t]);return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)(n.A,{...f,children:[c&&c.length>0?(0,o.jsx)("section",{className:"blog-items-banner",children:(0,o.jsxs)("div",{className:(0,r.A)("hero-25  hero hero--primary heroBanner"),children:[(0,o.jsxs)("div",{className:"container",children:[(0,o.jsxs)("h1",{className:"section-title",children:["God lesing",(0,o.jsx)("span",{className:"orange",children:"."})]}),(0,o.jsx)("nav",{className:"categories-blog",children:c.map(((e,t)=>(0,o.jsx)("a",{className:g===e?"active":"",onClick:t=>{h(e)},href:"all"!=e?m.baseUrl+"blog/tags/"+e:m.baseUrl+"blog",children:(0,o.jsx)("span",{children:e})},t)))})]}),(0,o.jsx)("span",{className:"bg"})]})}):(0,o.jsx)("div",{className:"margin-vert--lg",children:" "}),(0,o.jsx)("section",{className:"post-items-main",children:(0,o.jsxs)("div",{className:"container margin-vert--lg",children:[(0,o.jsx)("div",{className:"row",children:(0,o.jsx)("main",{className:(0,r.A)("col",{"col--12 mainblog":b,"col--9 col--offset-1":!b}),itemScope:!0,itemType:"https://schema.org/Blog",children:j})}),/\/blog\/?$/.test(p.pathname)&&(0,o.jsx)("div",{className:"elfsight-app-ffc7fb08-4ac1-4121-8929-9cb66e965724","data-elfsight-app-lazy":!0,style:{margin:"20px 0"}})]})})]})})}},925:(e,t,s)=>{s.d(t,{A:()=>d});s(6540);var a=s(4164),r=s(4096),n=s(1943),i=s(2053),l=s(485);const o={blogPostFooterDetailsFull:"blogPostFooterDetailsFull_Wr5y"};var c=s(4848);function d(e){const{metadata:t,isBlogPostPage:s}=(0,r.e7)(),{tags:d,title:m,editUrl:g,hasTruncateMarker:h}=t,p=!s&&h,u=d.length>0;return u||p||g?(0,c.jsx)(c.Fragment,{children:s?(0,c.jsxs)("footer",{className:(0,a.A)("row docusaurus-mt-lg",s&&o.blogPostFooterDetailsFull),children:[u&&(0,c.jsx)("div",{className:(0,a.A)("col",{"col--9":p}),children:(0,c.jsx)(i.A,{tags:d})}),s&&g&&(0,c.jsx)("div",{className:"col margin-top--sm",children:(0,c.jsx)(n.A,{editUrl:g})}),p&&(0,c.jsx)("div",{className:(0,a.A)("col text--right",{"col--3":u}),children:(0,c.jsx)(l.A,{blogPostTitle:m,to:t.permalink})})]}):""}):null}},1499:(e,t,s)=>{s.d(t,{A:()=>x});s(6540);var a=s(4164),r=s(4096);const n={title:"title_xvU1"};var i=s(4848);function l(e){let{className:t}=e;const{metadata:s,isBlogPostPage:l}=(0,r.e7)(),{permalink:o,title:c}=s,d=l?"h1":"h2";return(0,i.jsx)(d,{className:(0,a.A)(n.title,t),itemProp:"headline",children:l?c:""})}var o=s(1312),c=s(5846);const d={container:"container_iJTo"};function m(e){let{readingTime:t}=e;const s=function(){const{selectMessage:e}=(0,c.W)();return t=>{const s=Math.ceil(t);return e(s,(0,o.T)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:s}))}}();return(0,i.jsx)(i.Fragment,{children:s(t)})}function g(e){let{date:t,formattedDate:s}=e;return(0,i.jsx)("time",{dateTime:t,itemProp:"datePublished",children:s})}function h(){return(0,i.jsx)(i.Fragment,{children:" \xb7 "})}function p(e){let{className:t}=e;const{metadata:s,isBlogPostPage:n}=(0,r.e7)(),{date:l,formattedDate:o,readingTime:c}=s;return(0,i.jsx)(i.Fragment,{children:n?(0,i.jsxs)("div",{className:(0,a.A)(d.container,"margin-vert--md",t),children:[(0,i.jsx)(g,{date:l,formattedDate:o}),void 0!==c&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(h,{}),(0,i.jsx)(m,{readingTime:c})]})]}):""})}var u=s(3563);function x(e){const{isBlogPostPage:t}=(0,r.e7)();return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("header",{children:[(0,i.jsx)(l,{}),(0,i.jsx)(p,{}),t?(0,i.jsx)(u.A,{}):""]})})}},2011:(e,t,s)=>{s.d(t,{A:()=>g});var a=s(6540),r=s(5104),n=s(7083),i=s(4183),l=s(6347),o=s(4096),c=s(4164),d=s(1989),m=s(4848);function g(e){const t=(0,l.zy)(),[s,c]=(0,a.useState)(""),[d,g]=(0,a.useState)({}),{metadata:p,isBlogPostPage:u}=(0,o.e7)();return(0,a.useEffect)((()=>{n.Ay.registerPlugin(i.u);const e=n.Ay.from(".navbar",{yPercent:-100,paused:!0,duration:.2}).progress(1);i.u.create({start:"top top",end:"max",onUpdate:t=>{let s=document.querySelector(".navbar");s&&(1===t.direction&&s.classList.add("my-class"),-1===t.direction&&s.classList.add("up"),0===t.progress&&(s.classList.remove("up"),s.classList.remove("my-class"))),-1===t.direction?e.play():e.reverse()}}),c(t.pathname)}),[s]),(0,a.useEffect)((()=>{let e=!1;return e||g(p),()=>{e=!0}}),[d]),(0,m.jsx)(m.Fragment,{children:u?(0,m.jsx)("div",{className:"blog-post-center",children:(0,m.jsx)(r.A,{...e})}):(0,m.jsx)(h,{item:d})})}function h(e){const t=e.item;let s="";return s=(0,l.zy)().pathname.indexOf("tags")>-1?"../../":"",(0,m.jsx)(m.Fragment,{children:t&&t.frontMatter&&(0,m.jsx)("div",{className:"row",children:(0,m.jsx)("div",{className:(0,c.A)("col",{"col--12":!0}),children:(0,m.jsx)("article",{itemProp:"blogPost",itemScope:"",itemType:"http://schema.org/BlogPosting",children:(0,m.jsxs)("div",{className:"post-card",children:[(0,m.jsx)("div",{className:"post-img",children:(0,m.jsx)("a",{itemProp:"url",href:t.permalink,children:(0,m.jsx)(d.A,{Img:`${s}`+t.frontMatter.image,width:"",height:"",alt:""})})}),(0,m.jsxs)("div",{className:"post-content",children:[(0,m.jsx)("a",{itemProp:"url",href:t.permalink,children:t.frontMatter.title}),(0,m.jsx)("p",{children:t.description})]})]})})})})})}},2852:(e,t,s)=>{s.d(t,{A:()=>l});s(6540);var a=s(4096),r=s(2011),n=s(4164),i=s(4848);function l(e){let{items:t,component:s=r.A}=e;return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("div",{className:"row",children:t.map((e=>{let{content:t}=e;return(0,i.jsx)(a.in,{content:t,children:(0,i.jsx)("div",{className:(0,n.A)("col",{"col--4 margin-bottom--lg":true,"col--9 col--offset-1":!1}),children:(0,i.jsx)(s,{children:(0,i.jsx)(t,{})})})},t.metadata.permalink)}))})})}}}]);