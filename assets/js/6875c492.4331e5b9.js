"use strict";(self.webpackChunkdq_website=self.webpackChunkdq_website||[]).push([[4813],{7713:(e,t,s)=>{s.d(t,{A:()=>r});s(6540);var a=s(1312),n=s(9022),i=s(4848);function r(e){const{metadata:t}=e,{previousPage:s,nextPage:r}=t;return(0,i.jsxs)("nav",{className:"pagination-nav","aria-label":(0,a.T)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[s&&(0,i.jsx)(n.A,{permalink:s,title:(0,i.jsx)(a.A,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer entries"})}),r&&(0,i.jsx)(n.A,{permalink:r,title:(0,i.jsx)(a.A,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older entries"}),isNext:!0})]})}},3069:(e,t,s)=>{s.r(t),s.d(t,{default:()=>f});s(6540);var a=s(4164),n=s(1312),i=s(1213),r=s(7559),l=s(6461),o=s(8774),c=s(9520),d=s(7713),m=s(1463),g=s(2852),h=s(2234),u=s(1107),p=s(4848);function x(e){let{tag:t}=e;const s=(0,l.ZD)(t);return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(i.be,{title:s,description:t.description}),(0,p.jsx)(m.A,{tag:"blog_tags_posts"})]})}function j(e){let{tag:t,items:s,sidebar:a,listMetadata:i}=e;const r=(0,l.ZD)(t);return(0,p.jsxs)(c.A,{sidebar:a,children:[t.unlisted&&(0,p.jsx)(h.A,{}),(0,p.jsxs)("header",{className:"margin-bottom--xl",children:[(0,p.jsx)(u.A,{as:"h1",children:r}),t.description&&(0,p.jsx)("p",{children:t.description}),(0,p.jsx)(o.A,{href:t.allTagsPath,children:(0,p.jsx)(n.A,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page",children:"View All Tags"})})]}),(0,p.jsx)(g.A,{items:s}),(0,p.jsx)(d.A,{metadata:i})]})}function f(e){return(0,p.jsxs)(i.e3,{className:(0,a.A)(r.G.wrapper.blogPages,r.G.page.blogTagPostListPage),children:[(0,p.jsx)(x,{...e}),(0,p.jsx)(j,{...e})]})}},2234:(e,t,s)=>{s.d(t,{A:()=>c});s(6540);var a=s(4164),n=s(4084),i=s(7559),r=s(7293),l=s(4848);function o(e){let{className:t}=e;return(0,l.jsx)(r.A,{type:"caution",title:(0,l.jsx)(n.Rc,{}),className:(0,a.A)(t,i.G.common.unlistedBanner),children:(0,l.jsx)(n.Uh,{})})}function c(e){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.AE,{}),(0,l.jsx)(o,{...e})]})}},6461:(e,t,s)=>{s.d(t,{ZD:()=>r,uz:()=>l});s(6540);var a=s(1312),n=s(5846);s(4848);function i(){const{selectMessage:e}=(0,n.W)();return t=>e(t,(0,a.T)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}function r(e){const t=i();return(0,a.T)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:t(e.count),tagName:e.label})}const l=()=>(0,a.T)({id:"theme.blog.authorsList.pageTitle",message:"Authors",description:"The title of the authors page"})},4084:(e,t,s)=>{s.d(t,{AE:()=>o,Rc:()=>r,TT:()=>d,Uh:()=>l,Yh:()=>c});s(6540);var a=s(1312),n=s(5260),i=s(4848);function r(){return(0,i.jsx)(a.A,{id:"theme.contentVisibility.unlistedBanner.title",description:"The unlisted content banner title",children:"Unlisted page"})}function l(){return(0,i.jsx)(a.A,{id:"theme.contentVisibility.unlistedBanner.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function o(){return(0,i.jsx)(n.A,{children:(0,i.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}function c(){return(0,i.jsx)(a.A,{id:"theme.contentVisibility.draftBanner.title",description:"The draft content banner title",children:"Draft page"})}function d(){return(0,i.jsx)(a.A,{id:"theme.contentVisibility.draftBanner.message",description:"The draft content banner message",children:"This page is a draft. It will only be visible in dev and be excluded from the production build."})}},1989:(e,t,s)=>{s.d(t,{A:()=>n});var a=s(4848);function n(e){let{Img:t,width:s,height:n,alt:i,zIndex:r}=e;return(0,a.jsx)("img",{src:t,width:s,height:n,alt:i,style:{zIndex:r}})}},9520:(e,t,s)=>{s.d(t,{A:()=>c});var a=s(6540),n=s(4164),i=s(3833),r=s(4586),l=s(6347),o=s(4848);function c(e){const[t,s]=(0,a.useState)([]),[c,d]=(0,a.useState)([]),{siteConfig:m}=(0,r.A)(),[g,h]=(0,a.useState)("all"),u=(0,l.zy)(),{sidebar:p,toc:x,children:j,...f}=e,b=p&&p?.items?.length>0;(0,a.useEffect)((()=>{let e=!1;if(!e){(e=>{var t=e.split("/");return"tags"===t[t.length-2]?(h(t[t.length-1]),t[t.length-1]):(h("all"),"")})(u.pathname),(j&&j?.length>0?j:[]).forEach((e=>{if("BlogPostItemsWrapper"==e?.type?.name){e.props.items&&e.props.items.map((e=>e.content.frontMatter.tags.forEach((e=>{let s={label:e,permalink:e};t.push(s)}))));let s={label:"all",permalink:m.baseUrl+"blog"};t.splice(0,0,s);const a=t.map((e=>e.label)).filter(((e,t,s)=>s.indexOf(e)===t));d(a)}}))}let s=document.querySelector(".navbar");return t&&t.length>0?s.classList.remove("white-header"):s.classList.add("white-header"),()=>{e=!0}}),[t]);return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)(i.A,{...f,children:[c&&c.length>0?(0,o.jsx)("section",{className:"blog-items-banner",children:(0,o.jsxs)("div",{className:(0,n.A)("hero-25  hero hero--primary heroBanner"),children:[(0,o.jsxs)("div",{className:"container",children:[(0,o.jsxs)("h1",{className:"section-title",children:["God lesing",(0,o.jsx)("span",{className:"orange",children:"."})]}),(0,o.jsx)("nav",{className:"categories-blog",children:c.map(((e,t)=>(0,o.jsx)("a",{className:g===e?"active":"",onClick:t=>{h(e)},href:"all"!=e?m.baseUrl+"blog/tags/"+e:m.baseUrl+"blog",children:(0,o.jsx)("span",{children:e})},t)))})]}),(0,o.jsx)("span",{className:"bg"})]})}):(0,o.jsx)("div",{className:"margin-vert--lg",children:" "}),(0,o.jsx)("section",{className:"post-items-main",children:(0,o.jsx)("div",{className:"container margin-vert--lg",children:(0,o.jsx)("div",{className:"row",children:(0,o.jsx)("main",{className:(0,n.A)("col",{"col--12 mainblog":b,"col--9 col--offset-1":!b}),itemScope:!0,itemType:"https://schema.org/Blog",children:j})})})})]})})}},925:(e,t,s)=>{s.d(t,{A:()=>d});s(6540);var a=s(4164),n=s(4096),i=s(1943),r=s(4434),l=s(485);const o={blogPostFooterDetailsFull:"blogPostFooterDetailsFull_Wr5y"};var c=s(4848);function d(e){const{metadata:t,isBlogPostPage:s}=(0,n.e7)(),{tags:d,title:m,editUrl:g,hasTruncateMarker:h}=t,u=!s&&h,p=d.length>0;return p||u||g?(0,c.jsx)(c.Fragment,{children:s?(0,c.jsxs)("footer",{className:(0,a.A)("row docusaurus-mt-lg",s&&o.blogPostFooterDetailsFull),children:[p&&(0,c.jsx)("div",{className:(0,a.A)("col",{"col--9":u}),children:(0,c.jsx)(r.A,{tags:d})}),s&&g&&(0,c.jsx)("div",{className:"col margin-top--sm",children:(0,c.jsx)(i.A,{editUrl:g})}),u&&(0,c.jsx)("div",{className:(0,a.A)("col text--right",{"col--3":p}),children:(0,c.jsx)(l.A,{blogPostTitle:m,to:t.permalink})})]}):""}):null}},1499:(e,t,s)=>{s.d(t,{A:()=>x});s(6540);var a=s(4164),n=s(4096);const i={title:"title_xvU1"};var r=s(4848);function l(e){let{className:t}=e;const{metadata:s,isBlogPostPage:l}=(0,n.e7)(),{permalink:o,title:c}=s,d=l?"h1":"h2";return(0,r.jsx)(d,{className:(0,a.A)(i.title,t),itemProp:"headline",children:l?c:""})}var o=s(1312),c=s(5846);const d={container:"container_iJTo"};function m(e){let{readingTime:t}=e;const s=function(){const{selectMessage:e}=(0,c.W)();return t=>{const s=Math.ceil(t);return e(s,(0,o.T)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:s}))}}();return(0,r.jsx)(r.Fragment,{children:s(t)})}function g(e){let{date:t,formattedDate:s}=e;return(0,r.jsx)("time",{dateTime:t,itemProp:"datePublished",children:s})}function h(){return(0,r.jsx)(r.Fragment,{children:" \xb7 "})}function u(e){let{className:t}=e;const{metadata:s,isBlogPostPage:i}=(0,n.e7)(),{date:l,formattedDate:o,readingTime:c}=s;return(0,r.jsx)(r.Fragment,{children:i?(0,r.jsxs)("div",{className:(0,a.A)(d.container,"margin-vert--md",t),children:[(0,r.jsx)(g,{date:l,formattedDate:o}),void 0!==c&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(h,{}),(0,r.jsx)(m,{readingTime:c})]})]}):""})}var p=s(3563);function x(e){const{isBlogPostPage:t}=(0,n.e7)();return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("header",{children:[(0,r.jsx)(l,{}),(0,r.jsx)(u,{}),t?(0,r.jsx)(p.A,{}):""]})})}},2011:(e,t,s)=>{s.d(t,{A:()=>g});var a=s(6540),n=s(5104),i=s(7083),r=s(4183),l=s(6347),o=s(4096),c=s(4164),d=s(1989),m=s(4848);function g(e){const t=(0,l.zy)(),[s,c]=(0,a.useState)(""),[d,g]=(0,a.useState)({}),{metadata:u,isBlogPostPage:p}=(0,o.e7)();return(0,a.useEffect)((()=>{i.Ay.registerPlugin(r.u);const e=i.Ay.from(".navbar",{yPercent:-100,paused:!0,duration:.2}).progress(1);r.u.create({start:"top top",end:"max",onUpdate:t=>{let s=document.querySelector(".navbar");s&&(1===t.direction&&s.classList.add("my-class"),-1===t.direction&&s.classList.add("up"),0===t.progress&&(s.classList.remove("up"),s.classList.remove("my-class"))),-1===t.direction?e.play():e.reverse()}}),c(t.pathname)}),[s]),(0,a.useEffect)((()=>{let e=!1;return e||g(u),()=>{e=!0}}),[d]),(0,m.jsx)(m.Fragment,{children:p?(0,m.jsx)("div",{className:"blog-post-center",children:(0,m.jsx)(n.A,{...e})}):(0,m.jsx)(h,{item:d})})}function h(e){const t=e.item;let s="";return s=(0,l.zy)().pathname.indexOf("tags")>-1?"../../":"",(0,m.jsx)(m.Fragment,{children:t&&t.frontMatter&&(0,m.jsx)("div",{className:"row",children:(0,m.jsx)("div",{className:(0,c.A)("col",{"col--12":!0}),children:(0,m.jsx)("article",{itemProp:"blogPost",itemScope:"",itemType:"http://schema.org/BlogPosting",children:(0,m.jsxs)("div",{className:"post-card",children:[(0,m.jsx)("div",{className:"post-img",children:(0,m.jsx)("a",{itemProp:"url",href:t.permalink,children:(0,m.jsx)(d.A,{Img:`${s}`+t.frontMatter.image,width:"",height:"",alt:""})})}),(0,m.jsxs)("div",{className:"post-content",children:[(0,m.jsx)("a",{itemProp:"url",href:t.permalink,children:t.frontMatter.title}),(0,m.jsx)("p",{children:t.description})]})]})})})})})}},2852:(e,t,s)=>{s.d(t,{A:()=>l});s(6540);var a=s(4096),n=s(2011),i=s(4164),r=s(4848);function l(e){let{items:t,component:s=n.A}=e;const l=!0;return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{className:"row",children:t.map((e=>{let{content:t}=e;return(0,r.jsx)(a.in,{content:t,children:(0,r.jsx)("div",{className:(0,i.A)("col",{"col--4 margin-bottom--lg":l,"col--9 col--offset-1":!1}),children:(0,r.jsx)(s,{children:(0,r.jsx)(t,{})})})},t.metadata.permalink)}))})})}}}]);