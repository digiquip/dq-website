"use strict";(self.webpackChunkdq_website=self.webpackChunkdq_website||[]).push([[3514],{1985:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var n=s(5893),a=s(1151);const i={slug:"principles-of-development",title:"Our principles of development",authors:"andreas",tags:["development","howto","internal"]},r=void 0,o={permalink:"/dq-website/blog/principles-of-development",source:"@site/blog/2019-05-29-long-blog-post.md",title:"Our principles of development",description:"These are general guidelines when developing for DigiQuip. Whenever you feel that they don\u2019t apply to your current task, stop and think and then discuss it with someone else in the team to make sure that we avoid to many deviations from these principles.",date:"2019-05-29T00:00:00.000Z",formattedDate:"May 29, 2019",tags:[{label:"development",permalink:"/dq-website/blog/tags/development"},{label:"howto",permalink:"/dq-website/blog/tags/howto"},{label:"internal",permalink:"/dq-website/blog/tags/internal"}],readingTime:2.765,hasTruncateMarker:!1,authors:[{name:"Andreas N. Lydersen",title:"CEO",url:"https://github.com/alydersen",imageURL:"https://github.com/alydersen.png",key:"andreas"}],frontMatter:{slug:"principles-of-development",title:"Our principles of development",authors:"andreas",tags:["development","howto","internal"]},unlisted:!1,prevItem:{title:"MDX Blog Post",permalink:"/dq-website/blog/mdx-blog-post"},nextItem:{title:"First Blog Post",permalink:"/dq-website/blog/first-blog-post"}},l={authorsImageUrls:[void 0]},d=[{value:"General principles",id:"general-principles",level:2},{value:"Proper Layers",id:"proper-layers",level:3},{value:"The obvious ones",id:"the-obvious-ones",level:3},{value:"Small PRs",id:"small-prs",level:3},{value:"Principles for database Development",id:"principles-for-database-development",level:2},{value:"UUIDs for Primary Keys (PK)",id:"uuids-for-primary-keys-pk",level:3},{value:"Use default values, restrictions and triggers",id:"use-default-values-restrictions-and-triggers",level:3},{value:"Databases are testable!",id:"databases-are-testable",level:3},{value:"Clean up after yourself and others",id:"clean-up-after-yourself-and-others",level:3},{value:"Migrations goes both ways",id:"migrations-goes-both-ways",level:3},{value:"For us, JSON is OK to use in the schema",id:"for-us-json-is-ok-to-use-in-the-schema",level:3},{value:"Principles for backend development",id:"principles-for-backend-development",level:2}];function h(e){const t={em:"em",h2:"h2",h3:"h3",p:"p",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"These are general guidelines when developing for DigiQuip. Whenever you feel that they don\u2019t apply to your current task, stop and think and then discuss it with someone else in the team to make sure that we avoid to many deviations from these principles."}),"\n",(0,n.jsx)(t.h2,{id:"general-principles",children:"General principles"}),"\n",(0,n.jsx)(t.h3,{id:"proper-layers",children:"Proper Layers"}),"\n",(0,n.jsx)(t.p,{children:"We have a properly layered structure of our software. The easiest three layers to identify is our Database, Backends and Frontends. Obviously, we can have several of each, but there is an important principle in this layering: We do not allow functions that belong in one layer to be set in another. Examples: We do not set database logic in the backend layer, and we do not apply security measures in the frontend if it should be in the backend."}),"\n",(0,n.jsx)(t.p,{children:"Another important thing about the layers is that we treat them as freestanding and with a purpose of their own. We should be able to have two backends talking to the same database without repeating code (see \u201cDRY\u201d below).  We should have proper security on every layer. We should make every layer usable by multiple other layers (so that we don\u2019t make a backend specifically for only one frontend)."}),"\n",(0,n.jsx)(t.h3,{id:"the-obvious-ones",children:"The obvious ones"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.em,{children:"KISS (Keep It Simple, Short)"})," and ",(0,n.jsx)(t.em,{children:"DRY (Don\u2019t Repeat Yourself)"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"Not fully test-driven development, but test-focused\nStarting everything with writing the test is the ideal, but not always practical. Our principle is that we will strive to write tests for most, especially now that AI is helping us."}),"\n",(0,n.jsx)(t.h3,{id:"small-prs",children:"Small PRs"}),"\n",(0,n.jsx)(t.h2,{id:"principles-for-database-development",children:"Principles for database Development"}),"\n",(0,n.jsx)(t.h3,{id:"uuids-for-primary-keys-pk",children:"UUIDs for Primary Keys (PK)"}),"\n",(0,n.jsx)(t.p,{children:"There are pros and cons with having UUIDs for PKs, where size is the biggest con. In our scenario, where we have several databases where we potentially want to merge over time, UUIDs will ensure that we can avoid PK conflicts. Also, it is a nice and simple security measure."}),"\n",(0,n.jsx)(t.h3,{id:"use-default-values-restrictions-and-triggers",children:"Use default values, restrictions and triggers"}),"\n",(0,n.jsx)(t.p,{children:"Following the principle of proper layering, we use these functions to make sure that the database makes it easy for the backend to stay \u201cDRY\u201d. E.g. we make PK values by default rather than having the backend creating them (you can always set a default value yourself if you need to). If we know that a field only should have specifically formatted strings, don\u2019t just set the schema for string, but set the restriction also. In general, you should be able to read a schema and understand what the database wants as content."}),"\n",(0,n.jsx)(t.h3,{id:"databases-are-testable",children:"Databases are testable!"}),"\n",(0,n.jsx)(t.p,{children:"Like everything else, databases are testable, and we should write tests that makes sure that we are achieving what we need while maintaining regression consistency."}),"\n",(0,n.jsx)(t.h3,{id:"clean-up-after-yourself-and-others",children:"Clean up after yourself and others"}),"\n",(0,n.jsx)(t.p,{children:"If you find stuff in the schema that is no longer in use or you are writing functionality that replaces something, create a migration that removes the unneeded stuff."}),"\n",(0,n.jsx)(t.h3,{id:"migrations-goes-both-ways",children:"Migrations goes both ways"}),"\n",(0,n.jsx)(t.p,{children:"Often, to save a bit of time, migrations contain \u201cup\u201d but not \u201cdown\u201d. Don\u2019t save that time \u2013 write the \u201cdown\u201d unless there is a very good reason not to."}),"\n",(0,n.jsx)(t.h3,{id:"for-us-json-is-ok-to-use-in-the-schema",children:"For us, JSON is OK to use in the schema"}),"\n",(0,n.jsx)(t.p,{children:"A controversial subject for some, but we are OK with using JSON as a field type if it removes unneeded complexities elsewhere."}),"\n",(0,n.jsx)(t.h2,{id:"principles-for-backend-development",children:"Principles for backend development"})]})}function p(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},1151:(e,t,s)=>{s.d(t,{Z:()=>o,a:()=>r});var n=s(7294);const a={},i=n.createContext(a);function r(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);