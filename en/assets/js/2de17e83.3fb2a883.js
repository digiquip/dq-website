"use strict";(self.webpackChunkdq_website=self.webpackChunkdq_website||[]).push([[5976],{9040:(e,s,a)=>{a.d(s,{c:()=>i});var t=a(4357),n=a(7624);function i(){return(0,n.jsx)("a",{href:"#",className:"white-btn red-btn btn",children:(0,n.jsxs)("span",{className:"btn_wrapper",children:[(0,n.jsx)("span",{className:"btn_text",children:(0,n.jsx)(t.c,{children:"home.contact.button"})}),(0,n.jsx)("span",{className:"btn_text",children:(0,n.jsx)(t.c,{children:"home.contact.button"})})]})})}},5144:(e,s,a)=>{a.d(s,{c:()=>l});var t=a(5456),n=a(4357),i=(a(9040),a(7624));function l(){return(0,i.jsx)("section",{className:"competence-contactu-sec section-pd",children:(0,i.jsx)("div",{className:"container",children:(0,i.jsx)("div",{className:"row",children:(0,i.jsxs)("div",{className:(0,t.c)("col col--12"),children:[(0,i.jsxs)("h2",{className:"section-title",children:[(0,i.jsx)(n.c,{children:"general.contactus.title"}),(0,i.jsx)("span",{className:"orange",children:"."})]}),(0,i.jsxs)("div",{className:"rightcontact",children:[(0,i.jsx)("ul",{children:(0,i.jsx)("li",{children:(0,i.jsxs)("div",{className:"contact_people__item",children:[(0,i.jsx)("p",{className:"orange",children:"Chief Commercial Officer"}),(0,i.jsxs)("div",{className:"contact_item-content",children:[(0,i.jsxs)("div",{className:"contact-people-detail",children:[(0,i.jsx)("h3",{children:"Tom Freddy Braathen"}),(0,i.jsx)("a",{href:"mailto:salg@digiquip.no",className:"btn__lined","aria-label":"salg@digiquip.no",target:"_self",children:(0,i.jsxs)("span",{className:"btn__wrapper",children:[(0,i.jsx)("span",{className:"btn__text",children:"salg@digiquip.no"}),(0,i.jsx)("span",{className:"btn__icon",children:(0,i.jsxs)("svg",{viewBox:"0 0 11 11",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,i.jsx)("path",{d:"M1 10.1667L10.1667 1",stroke:"white",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,i.jsx)("path",{d:"M1 1H10.1667V10.1667",stroke:"white",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})})]})}),(0,i.jsx)("a",{href:"tel:+47 90 77 35 24","aria-label":"+47 90 77 35 24",target:"_self",children:(0,i.jsx)("span",{className:"btn__wrapper",children:(0,i.jsx)("span",{className:"btn__text",children:"+47 90 77 35 24"})})})]}),(0,i.jsx)("div",{className:"people-profile",children:(0,i.jsx)("img",{src:"img/competence-images/tom_freddy.webp"})})]})]})})}),(0,i.jsx)("div",{})]})]})})})})}},3192:(e,s,a)=>{a.d(s,{c:()=>o});var t=a(8264),n=a(5064),i=a(1504),l=a(7932),r=a(5556),c=a(8208),d=a(7624);function o(e){let{children:s}=e;const{siteConfig:a}=(0,t.c)();return(0,i.useEffect)((()=>{r.cp.registerPlugin(c.W);const e=r.cp.from(".navbar",{yPercent:-100,paused:!0,duration:.2}).progress(1);c.W.create({start:"top top",end:"max",onUpdate:s=>{let a=document.querySelector(".navbar");a&&(1===s.direction&&a.classList.add("my-class"),-1===s.direction&&a.classList.add("up"),0===s.progress&&(a.classList.remove("up"),a.classList.remove("my-class"))),-1===s.direction?e.play():e.reverse()}})})),(0,d.jsx)(l.Uf,{root:!0,children:(0,d.jsx)(n.c,{title:`${a.title}`,description:`${a.tagline}`,className:"main-header",children:(0,d.jsx)("main",{children:s})})})}},9628:(e,s,a)=>{a.r(s),a.d(s,{default:()=>T});var t=a(5456),n=a(3192),i=a(1504),l=a(3943),r=a(5592),c=a(5288),d=a(632),o=a(7128),u=a(1148);function h(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:s}=e;return!!s&&"object"==typeof s&&"value"in s}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:s,children:a}=e;return(0,i.useMemo)((()=>{const e=s??function(e){return h(e).map((e=>{let{props:{value:s,label:a,attributes:t,default:n}}=e;return{value:s,label:a,attributes:t,default:n}}))}(a);return function(e){const s=(0,o.w)(e,((e,s)=>e.value===s.value));if(s.length>0)throw new Error(`Docusaurus error: Duplicate values "${s.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[s,a])}function p(e){let{value:s,tabValues:a}=e;return a.some((e=>e.value===s))}function x(e){let{queryString:s=!1,groupId:a}=e;const t=(0,r.Uz)(),n=function(e){let{queryString:s=!1,groupId:a}=e;if("string"==typeof s)return s;if(!1===s)return null;if(!0===s&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:s,groupId:a});return[(0,d._M)(n),(0,i.useCallback)((e=>{if(!n)return;const s=new URLSearchParams(t.location.search);s.set(n,e),t.replace({...t.location,search:s.toString()})}),[n,t])]}function j(e){const{defaultValue:s,queryString:a=!1,groupId:t}=e,n=m(e),[l,r]=(0,i.useState)((()=>function(e){let{defaultValue:s,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(s){if(!p({value:s,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${s}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return s}const t=a.find((e=>e.default))??a[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:s,tabValues:n}))),[d,o]=x({queryString:a,groupId:t}),[h,j]=function(e){let{groupId:s}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(s),[t,n]=(0,u.IN)(a);return[t,(0,i.useCallback)((e=>{a&&n.set(e)}),[a,n])]}({groupId:t}),g=(()=>{const e=d??h;return p({value:e,tabValues:n})?e:null})();(0,c.c)((()=>{g&&r(g)}),[g]);return{selectedValue:l,selectValue:(0,i.useCallback)((e=>{if(!p({value:e,tabValues:n}))throw new Error(`Can't select invalid tab value=${e}`);r(e),o(e),j(e)}),[o,j,n]),tabValues:n}}var g=a(3664);const b={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var v=a(7624);function N(e){let{className:s,block:a,selectedValue:n,selectValue:i,tabValues:r}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.MV)(),o=e=>{const s=e.currentTarget,a=c.indexOf(s),t=r[a].value;t!==n&&(d(s),i(t))},u=e=>{let s=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;s=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;s=c[a]??c[c.length-1];break}}s?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.c)("tabs","tabs-menu",{"tabs--block":a},s),children:r.map((e=>{let{value:s,label:a,attributes:i}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:n===s?0:-1,"aria-selected":n===s,ref:e=>c.push(e),onKeyDown:u,onClick:o,...i,className:(0,t.c)("tabs__item ","cal-menu w-inline-block w-tab-link ",b.tabItem,i?.className,{"w--current":n===s}),children:a??s},s)}))})}function f(e){let{lazy:s,children:a,selectedValue:t}=e;const n=(Array.isArray(a)?a:[a]).filter(Boolean);if(s){const e=n.find((e=>e.props.value===t));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:n.map(((e,s)=>(0,i.cloneElement)(e,{key:s,hidden:e.props.value!==t})))})}function w(e){const s=j(e);return(0,v.jsxs)("div",{className:(0,t.c)("tabs-container",b.tabList),children:[(0,v.jsx)(N,{...e,...s}),(0,v.jsx)(f,{...e,...s})]})}function y(e){const s=(0,g.c)();return(0,v.jsx)(w,{...e,children:h(e.children)},String(s))}const k={tabItem:"tabItem_Ymn6"};function _(e){let{children:s,hidden:a,className:n}=e;return(0,v.jsx)("div",{role:"tabpanel",className:(0,t.c)(k.tabItem,n),hidden:a,children:s})}a(4357);function I(){return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("div",{className:(0,t.c)("col col--4 margin-bottom--md"),children:(0,v.jsxs)("div",{className:"package-list",children:[(0,v.jsxs)("div",{className:"package-title",children:[(0,v.jsx)("h4",{children:"Model Register"}),(0,v.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elitet dolore magna aliqua. "})]}),(0,v.jsx)("div",{className:"package-price",children:" Free "}),(0,v.jsxs)("ul",{children:[(0,v.jsxs)("li",{children:[(0,v.jsx)("img",{src:"img/tik.svg"})," Lorem Ipsum is simply dummy"]}),(0,v.jsxs)("li",{children:[(0,v.jsx)("img",{src:"img/tik.svg"}),"established fact that a reader will be distracted"]}),(0,v.jsxs)("li",{children:[(0,v.jsx)("img",{src:"img/tik.svg"}),"Many desktop publishing packages and web page editors"]})]}),(0,v.jsx)("a",{className:"btn",href:"#",title:"",children:"Contact us"})]})}),(0,v.jsx)("div",{className:(0,t.c)("col col--4 margin-bottom--md"),children:(0,v.jsxs)("div",{className:"package-list",children:[(0,v.jsxs)("div",{className:"package-title",children:[(0,v.jsx)("h4",{children:"DigiQuip"}),(0,v.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elitet dolore magna aliqua. "})]}),(0,v.jsx)("div",{className:"package-price",children:" 320 Kroner "}),(0,v.jsxs)("ul",{children:[(0,v.jsxs)("li",{children:[(0,v.jsx)("img",{src:"img/tik.svg"})," Lorem Ipsum is simply dummy"]}),(0,v.jsxs)("li",{children:[(0,v.jsx)("img",{src:"img/tik.svg"}),"established fact that a reader will be distracted"]}),(0,v.jsxs)("li",{children:[(0,v.jsx)("img",{src:"img/tik.svg"}),"Many desktop publishing packages and web page editors"]})]}),(0,v.jsx)("a",{className:"btn",href:"#",title:"",children:"Contact us"})]})}),(0,v.jsx)("div",{className:(0,t.c)("col col--4 margin-bottom--md"),children:(0,v.jsxs)("div",{className:"package-list",children:[(0,v.jsxs)("div",{className:"package-title",children:[(0,v.jsx)("h4",{children:"Brareg"}),(0,v.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elitet dolore magna aliqua. "})]}),(0,v.jsx)("div",{className:"package-price",children:" 4199 Kroner "}),(0,v.jsxs)("ul",{children:[(0,v.jsxs)("li",{children:[(0,v.jsx)("img",{src:"img/tik.svg"})," Lorem Ipsum is simply dummy"]}),(0,v.jsxs)("li",{children:[(0,v.jsx)("img",{src:"img/tik.svg"}),"established fact that a reader will be distracted"]}),(0,v.jsxs)("li",{children:[(0,v.jsx)("img",{src:"img/tik.svg"}),"Many desktop publishing packages and web page editors"]})]}),(0,v.jsx)("a",{className:"btn",href:"#",title:"",children:"Contact us"})]})})]})}var q=a(5144);function L(){const[e,s]=(0,i.useState)(55),[a,t]=(0,i.useState)(25),[n,l]=(0,i.useState)(2),[r,c]=(0,i.useState)(7501),[d,o]=(0,i.useState)(501),[u,h]=(0,i.useState)(32),[m,p]=(0,i.useState)(0),[x,j]=(0,i.useState)(0),[g,b]=(0,i.useState)(0),[N,f]=(0,i.useState)(0),[w,k]=(0,i.useState)(!1),I=e=>{switch(!0){case e<1:return 0;case e>=1&&e<=1:return 990;case e>1&&e<=2:return 1790;case e>2&&e<=4:return 3e3;case e>4&&e<=8:return 3600;case e>8&&e<=16:return 4200;case e>16&&e<=31:return 7e3;default:return k(!0),7e3}},q=e=>{switch(!0){case e<1:return 0;case e>=1&&e<=24:return 890;case e>24&&e<=100:return 3290;case e>100&&e<=175:return 4990;case e>175&&e<=250:return 6590;case e>251&&e<=500:return 12490;default:return k(!0),12490}},L=e=>{switch(!0){case e<1:return 0;case e>=1&&e<=50:return 390;case e>50&&e<=100:return 690;case e>100&&e<=500:return 1490;case e>500&&e<=1500:return 2490;case e>1500&&e<=2500:return 4490;case e>2500&&e<=5e3:return 5490;case e>5e3&&e<=7500:return 7490;default:return k(!0),s(e),7490}},S="rgb(240 90 8)",V="rgb(222, 226, 230)",T=(a,n,i)=>{"people"==n?(t(a),j(q(a)),f(x+m)):"equipment"==n?(s(a),p(L(a)),f(x+m),a>=r&&console.log(a,e,r+"Value greter equipment >= equipmentMaxValue")):"inspectors"==n&&(l(a),b(I(a)),f(g));let c=E(a);k(c)},E=s=>{let t=!1;return e==r&&(t=!0),a==d&&(t=!0),n==u&&(t=!0),t};(0,i.useEffect)((()=>{let s=!1;return s||(j(q(a)),p(L(e)),b(I(n)),f(q(a)+L(e))),()=>{s=!0}}),[e,a,n]);const $=(e,s)=>100*e/s;return(0,v.jsx)(v.Fragment,{children:(0,v.jsx)("section",{className:"pricing_calculator_section section-pd",children:(0,v.jsxs)("div",{className:"container",children:[(0,v.jsxs)("h2",{children:["Pricing Calculator",(0,v.jsx)("span",{className:"orange",children:"."})]}),(0,v.jsx)("div",{className:"pricing-center",children:(0,v.jsx)("div",{className:"tab-container",children:(0,v.jsxs)(y,{className:"tabs-menu",children:[(0,v.jsx)(_,{value:"digiQuip",label:"DigiQuip",default:!0,children:(0,v.jsx)("div",{className:"w-tab-content",children:(0,v.jsxs)("div",{className:"w-tab-pane w--tab-active",children:[(0,v.jsx)("div",{className:"tab-nav-dis",children:"DigiQuip Lorem Ipsum has been the industry's standard dummy."}),(0,v.jsx)("div",{className:"calculator-html w-embed",children:(0,v.jsxs)("div",{className:"pricing-row",children:[(0,v.jsxs)("div",{className:"pricing-left",children:[(0,v.jsxs)("div",{className:"slider-container",children:[(0,v.jsxs)("div",{className:"ui-set",children:[(0,v.jsx)("span",{className:"sub-heading",children:"  Equipment "}),(0,v.jsxs)("span",{className:"input-container",children:[(0,v.jsx)("input",{type:"number",min:"0",value:e,onChange:e=>T(e.target.value,"equipment"),className:"calculator-input"}),e>r?(0,v.jsxs)("div",{class:"tooltip",children:[(0,v.jsx)("span",{class:"tooltiparrow"}),(0,v.jsxs)("span",{class:"tooltiptext",children:["Choose a value less than ",r]})]}):""]})]}),(0,v.jsxs)("div",{className:"calculator-slider",children:[(0,v.jsx)("span",{className:"slider-track",style:{background:`linear-gradient(to right, ${S} ${$(e,r)}%, ${V} ${$(e,r)+.1}%)`}}),(0,v.jsx)("input",{type:"range",min:"0",max:r,value:e,onChange:e=>T(e.target.value,"equipment"),id:"equipmentSlider",className:"calculator-input calculator-range"})]})]}),(0,v.jsxs)("div",{className:"slider-container",children:[(0,v.jsxs)("div",{className:"ui-set",children:[(0,v.jsx)("span",{className:"sub-heading",children:" People "}),(0,v.jsxs)("span",{className:"input-container",children:[(0,v.jsx)("input",{type:"number",min:"0",value:a,onChange:e=>T(e.target.value,"people"),id:"participantsInput",className:"calculator-input"}),a>d?(0,v.jsxs)("div",{class:"tooltip",children:[(0,v.jsx)("span",{class:"tooltiparrow"}),(0,v.jsxs)("span",{class:"tooltiptext",children:["Choose a value less than ",d]})]}):""]})]}),(0,v.jsxs)("div",{className:"calculator-slider",children:[(0,v.jsx)("span",{className:"slider-track",style:{background:`linear-gradient(to right, ${S} ${$(a,d)}%, ${V} ${$(a,d)+.1}%)`}}),(0,v.jsx)("input",{type:"range",min:"0",max:d,value:a,onChange:e=>T(e.target.value,"people"),id:"peopleSlider",className:"calculator-input calculator-range"})]})]}),(0,v.jsx)("p",{children:"DigiQuip Lorem Ipsum has been the industry's standard dummy DigiQuip Lorem Ipsum has been the industry's standard dummy DigiQuip Lorem Ipsum has been the industry's standard dummy."})]}),(0,v.jsxs)("div",{className:"pricing-right",children:[!w&&(0,v.jsxs)("div",{className:"calculator-one",children:[(0,v.jsx)("div",{className:"calculator-view",children:(0,v.jsxs)("h6",{children:[(0,v.jsx)("img",{src:"img/estimated-cost.svg"})," Your estimated  cost"]})}),(0,v.jsxs)("div",{className:"calculator-price",children:[m>0&&(0,v.jsxs)("div",{className:"ui-set cost-section",children:[(0,v.jsx)("span",{className:"sub-heading",children:"Equipment"}),(0,v.jsxs)("span",{id:"confCost",children:["kr ",m]}),e>0&&(0,v.jsxs)("div",{className:"conferencing-cost-text",children:[(0,v.jsxs)("span",{className:"avg-call-length-small",children:["( ",(0,v.jsx)("span",{id:"confMinutes",children:"1"})," to ",e," equipment)"]}),(0,v.jsx)("img",{alt:"",src:"img/info-icon.svg"})]}),(0,v.jsx)("hr",{className:"calculator-hr"})]}),x>0&&(0,v.jsxs)("div",{className:"ui-set cost-section",children:[(0,v.jsx)("span",{className:"sub-heading",children:"People"}),(0,v.jsxs)("span",{id:"confCost",children:["kr ",x]}),a>0&&(0,v.jsxs)("div",{className:"conferencing-cost-text",children:[(0,v.jsxs)("span",{className:"avg-call-length-small",children:["( ",(0,v.jsx)("span",{id:"confMinutes",children:"1"})," to ",a," people)"]}),(0,v.jsx)("img",{alt:"",src:"img/info-icon.svg"})]}),(0,v.jsx)("hr",{className:"calculator-hr"})]}),(0,v.jsxs)("div",{className:"ui-set est",children:[(0,v.jsx)("span",{className:"est-text",children:"Estimated Total"}),(0,v.jsxs)("span",{className:"total-cost-text",id:"videototalCost",children:["kr ",m+x]})]}),(0,v.jsxs)("div",{className:"btn-container",children:[(0,v.jsx)("a",{href:"#",target:"_blank",children:(0,v.jsx)("button",{className:"calculator-button",disabled:!N,children:(0,v.jsx)("span",{className:"btn-t-1",children:"Start building"})})}),(0,v.jsx)("div",{className:"calculator-link",children:(0,v.jsx)("a",{href:"#",target:"_blank",children:"Talk to one of our experts"})})]})]})]}),w&&(0,v.jsx)(C,{})]})]})})]})})}),(0,v.jsx)(_,{value:"brareg",label:"Brareg",children:(0,v.jsx)("div",{className:"w-tab-content",children:(0,v.jsxs)("div",{className:"w-tab-pane w--tab-active",children:[(0,v.jsx)("div",{class:"tab-nav-dis",children:"Brareg Lorem Ipsum has been the industry's standard dummy."}),(0,v.jsx)("div",{className:"calculator-html w-embed",children:(0,v.jsxs)("div",{className:"pricing-row",children:[(0,v.jsxs)("div",{className:"pricing-left",children:[(0,v.jsxs)("div",{className:"slider-container",children:[(0,v.jsxs)("div",{className:"ui-set",children:[(0,v.jsx)("span",{className:"sub-heading",children:"  Inspectors "}),(0,v.jsxs)("span",{className:"input-container",children:[(0,v.jsx)("input",{type:"number",min:"0",value:n,onChange:e=>T(e.target.value,"inspectors"),className:"calculator-input"}),n>u?(0,v.jsxs)("div",{class:"tooltip",children:[(0,v.jsx)("span",{class:"tooltiparrow"}),(0,v.jsxs)("span",{class:"tooltiptext",children:["Choose a value less than ",u]})]}):""]})]}),(0,v.jsxs)("div",{className:"calculator-slider",children:[(0,v.jsx)("span",{className:"slider-track",style:{background:`linear-gradient(to right, ${S} ${$(n,u)}%, ${V} ${$(n,u)+.1}%)`}}),(0,v.jsx)("input",{type:"range",min:"0",max:u,value:n,onChange:e=>T(e.target.value,"inspectors"),className:"calculator-input calculator-range"})]})]}),(0,v.jsx)("p",{children:"DigiQuip Lorem Ipsum has been the industry's standard dummy DigiQuip Lorem Ipsum has been the industry's standard dummy DigiQuip Lorem Ipsum has been the industry's standard dummy."})]}),(0,v.jsxs)("div",{className:"pricing-right",children:[!w&&(0,v.jsxs)("div",{className:"calculator-one",children:[(0,v.jsx)("div",{className:"calculator-view",children:(0,v.jsxs)("h6",{children:[(0,v.jsx)("img",{src:"img/estimated-cost.svg"})," Your estimated  cost"]})}),(0,v.jsxs)("div",{className:"calculator-price",children:[g>0&&(0,v.jsxs)("div",{className:"ui-set cost-section",children:[(0,v.jsx)("span",{className:"sub-heading",children:"Equipment"}),(0,v.jsxs)("span",{id:"confCost",children:["kr ",g]}),n>0&&(0,v.jsxs)("div",{className:"conferencing-cost-text",children:[(0,v.jsxs)("span",{className:"avg-call-length-small",children:["( ",(0,v.jsx)("span",{id:"confMinutes",children:"1"})," to ",n," equipment)"]}),(0,v.jsx)("img",{alt:"",src:"img/info-icon.svg"})]}),(0,v.jsx)("hr",{className:"calculator-hr"})]}),(0,v.jsxs)("div",{className:"ui-set est",children:[(0,v.jsx)("span",{className:"est-text",children:"Estimated Total"}),(0,v.jsxs)("span",{className:"total-cost-text",id:"videototalCost",children:["kr ",g]})]}),(0,v.jsxs)("div",{className:"btn-container",children:[(0,v.jsx)("a",{href:"#",target:"_blank",children:(0,v.jsx)("button",{className:"calculator-button",disabled:!g,children:(0,v.jsx)("span",{className:"btn-t-1",children:"Start building"})})}),(0,v.jsx)("div",{className:"calculator-link",children:(0,v.jsx)("a",{href:"#",target:"_blank",children:"Talk to one of our experts"})})]})]})]}),w&&(0,v.jsx)(C,{})]})]})})]})})})]})})})]})})})}function C(){return(0,v.jsx)(v.Fragment,{children:(0,v.jsx)("div",{className:"calculator-count",children:(0,v.jsxs)("div",{className:"c2-v2-content",children:[(0,v.jsx)("img",{alt:"build",src:"img/calc-edit.svg"}),(0,v.jsxs)("div",{className:"alt-view-heading",children:["Let's build a ",(0,v.jsx)("br",{}),"custom plan "]}),(0,v.jsx)("div",{className:"alt-view-content",children:"Help us understand what you need, and we\u2019ll propose a suitable solution for you."}),(0,v.jsx)("div",{className:"btn-container",children:(0,v.jsx)("a",{href:"#",target:"_blank",children:(0,v.jsx)("button",{className:"btn-t-1 calculator-button",children:"Talk to one of our experts"})})})]})})})}function S(){return(0,v.jsx)("section",{className:"about-integrations section-pd",children:(0,v.jsx)("div",{className:"container",children:(0,v.jsxs)("div",{className:"integrations-center",children:[(0,v.jsxs)("h2",{children:["About our integrations",(0,v.jsx)("span",{className:"orange",children:"."})," "]}),(0,v.jsx)("p",{children:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."}),(0,v.jsxs)("div",{className:"row",children:[(0,v.jsx)("div",{className:(0,t.c)("col col--4 margin-bottom--lg"),children:(0,v.jsxs)("div",{className:"call-action",children:[(0,v.jsx)("h3",{children:"integrations 01"}),(0,v.jsx)("p",{children:"Reader will be distracted by the readable content of a page when looking at its layout."})]})}),(0,v.jsx)("div",{className:(0,t.c)("col col--4 margin-bottom--lg"),children:(0,v.jsxs)("div",{className:"call-action",children:[(0,v.jsx)("h3",{children:"integrations 02"}),(0,v.jsx)("p",{children:"Reader will be distracted by the readable content of a page when looking at its layout."})]})}),(0,v.jsx)("div",{className:(0,t.c)("col col--4 margin-bottom--lg"),children:(0,v.jsxs)("div",{className:"call-action",children:[(0,v.jsx)("h3",{children:"integrations 02"}),(0,v.jsx)("p",{children:"Reader will be distracted by the readable content of a page when looking at its layout."})]})}),(0,v.jsx)("div",{className:(0,t.c)("col col--4 margin-bottom--lg"),children:(0,v.jsxs)("div",{className:"call-action",children:[(0,v.jsx)("h3",{children:"integrations 02"}),(0,v.jsx)("p",{children:"Reader will be distracted by the readable content of a page when looking at its layout."})]})}),(0,v.jsx)("div",{className:(0,t.c)("col col--4 margin-bottom--md"),children:(0,v.jsxs)("div",{className:"call-action",children:[(0,v.jsx)("h3",{children:"integrations 02"}),(0,v.jsx)("p",{children:"Reader will be distracted by the readable content of a page when looking at its layout."})]})}),(0,v.jsx)("div",{className:(0,t.c)("col col--4 margin-bottom--md"),children:(0,v.jsxs)("div",{className:"call-action",children:[(0,v.jsx)("h3",{children:"integrations 02"}),(0,v.jsx)("p",{children:"Reader will be distracted by the readable content of a page when looking at its layout."})]})})]})]})})})}function V(){return(0,v.jsx)(v.Fragment,{children:(0,v.jsx)("section",{className:"homepage-banner",children:(0,v.jsxs)("div",{className:(0,t.c)("hero-25 hero hero--primary heroBanner"),children:[(0,v.jsxs)("div",{className:"container",children:[(0,v.jsxs)("h1",{className:"section-title",children:["Our Prices",(0,v.jsx)("span",{className:"orange",children:"."})]}),(0,v.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elitet aliqua."}),(0,v.jsx)("div",{className:"row",children:(0,v.jsx)(I,{})})]}),(0,v.jsx)("span",{className:"bg"})]})})})}function T(){return(0,v.jsxs)(n.c,{children:[(0,v.jsx)(V,{}),(0,v.jsx)(L,{}),(0,v.jsx)(S,{}),(0,v.jsx)(q.c,{})]})}}}]);