"use strict";(self.webpackChunkdq_website=self.webpackChunkdq_website||[]).push([[9468],{8189:(e,s,a)=>{a.d(s,{A:()=>t});var r=a(1312),n=a(4848);function t(){return(0,n.jsx)("a",{href:"#",className:"white-btn red-btn btn",children:(0,n.jsxs)("span",{className:"btn_wrapper",children:[(0,n.jsx)("span",{className:"btn_text",children:(0,n.jsx)(r.A,{children:"home.contact.button"})}),(0,n.jsx)("span",{className:"btn_text",children:(0,n.jsx)(r.A,{children:"home.contact.button"})})]})})}},8003:(e,s,a)=>{a.d(s,{A:()=>i});var r=a(4164),n=a(1312),t=(a(8189),a(4848));function i(){return(0,t.jsx)("section",{className:"competence-contactu-sec section-pd",children:(0,t.jsx)("div",{className:"container",children:(0,t.jsx)("div",{className:"row",children:(0,t.jsxs)("div",{className:(0,r.A)("col col--12"),children:[(0,t.jsxs)("h2",{className:"section-title",children:[(0,t.jsx)(n.A,{children:"general.contactus.title"}),(0,t.jsx)("span",{className:"orange",children:"."})]}),(0,t.jsxs)("div",{className:"rightcontact",children:[(0,t.jsx)("ul",{children:(0,t.jsx)("li",{children:(0,t.jsxs)("div",{className:"contact_people__item",children:[(0,t.jsx)("p",{className:"orange",children:"Chief Commercial Officer"}),(0,t.jsxs)("div",{className:"contact_item-content",children:[(0,t.jsxs)("div",{className:"contact-people-detail",children:[(0,t.jsx)("h3",{children:"Tom Freddy Braathen"}),(0,t.jsx)("a",{href:"mailto:salg@digiquip.no",className:"btn__lined","aria-label":"salg@digiquip.no",target:"_self",children:(0,t.jsxs)("span",{className:"btn__wrapper",children:[(0,t.jsx)("span",{className:"btn__text",children:"tfb@digiquip.no"}),(0,t.jsx)("span",{className:"btn__icon",children:(0,t.jsxs)("svg",{viewBox:"0 0 11 11",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,t.jsx)("path",{d:"M1 10.1667L10.1667 1",stroke:"white",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,t.jsx)("path",{d:"M1 1H10.1667V10.1667",stroke:"white",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})})]})}),(0,t.jsx)("a",{href:"tel:+47 90 77 35 24","aria-label":"+47 90 77 35 24",target:"_self",children:(0,t.jsx)("span",{className:"btn__wrapper",children:(0,t.jsx)("span",{className:"btn__text",children:"+47 45 48 85 25"})})})]}),(0,t.jsx)("div",{className:"people-profile",children:(0,t.jsx)("img",{src:"img/competence-images/tom_freddy.webp"})})]})]})})}),(0,t.jsx)("div",{})]})]})})})})}},120:(e,s,a)=>{a.d(s,{A:()=>m});var r=a(4586),n=a(3833),t=a(6540),i=a(8133),c=a(7083),l=a(4183),d=a(8774),o=a(1312),h=a(4848);function u(){return(0,h.jsx)("div",{className:"contactUsDropdown",children:(0,h.jsxs)("div",{className:"dropdown",children:[(0,h.jsx)("button",{className:"btn red-btn dropdown-btn",children:(0,h.jsx)("img",{src:"/icons/phone.svg",alt:"Contact Us"})}),(0,h.jsxs)("div",{className:"dropdown-content",children:[(0,h.jsx)(d.A,{href:"https://us21.list-manage.com/contact-form?u=45bf490556cbc57d81d50c4f6&form_id=fb2b014417ac7312f80a8bb815f52ab5",target:"_blank",children:(0,h.jsx)(o.A,{children:"navbar.label.contact_us"})}),(0,h.jsx)(d.A,{href:"/about",children:(0,h.jsx)(o.A,{children:"navbar.label.book_meeting"})})]})]})})}function m(e){let{children:s}=e;const{siteConfig:a}=(0,r.A)();return(0,t.useEffect)((()=>{c.Ay.registerPlugin(l.u);const e=c.Ay.from(".navbar",{yPercent:-100,paused:!0,duration:.2}).progress(1);l.u.create({start:"top top",end:"max",onUpdate:s=>{let a=document.querySelector(".navbar");a&&(1===s.direction&&a.classList.add("my-class"),-1===s.direction&&a.classList.add("up"),0===s.progress&&(a.classList.remove("up"),a.classList.remove("my-class"))),-1===s.direction?e.play():e.reverse()}})})),(0,h.jsxs)(i.iE,{root:!0,children:[(0,h.jsx)(n.A,{title:`${a.title}`,description:`${a.tagline}`,className:"main-header",children:(0,h.jsx)("main",{children:s})}),(0,h.jsx)(u,{})]})}},9398:(e,s,a)=>{a.r(s),a.d(s,{default:()=>f});var r=a(4164),n=a(120),t=a(6540),i=a(3104),c=a(7751),l=a(2303);const d={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var o=a(4848);function h(e){let{className:s,block:a,selectedValue:n,selectValue:t,tabValues:c}=e;const l=[],{blockElementScrollPositionUntilNextRender:h}=(0,i.a_)(),u=e=>{const s=e.currentTarget,a=l.indexOf(s),r=c[a].value;r!==n&&(h(s),t(r))},m=e=>{let s=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const a=l.indexOf(e.currentTarget)+1;s=l[a]??l[0];break}case"ArrowLeft":{const a=l.indexOf(e.currentTarget)-1;s=l[a]??l[l.length-1];break}}s?.focus()};return(0,o.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs","tabs-menu",{"tabs--block":a},s),children:c.map((e=>{let{value:s,label:a,attributes:t}=e;return(0,o.jsx)("li",{role:"tab",tabIndex:n===s?0:-1,"aria-selected":n===s,ref:e=>l.push(e),onKeyDown:m,onClick:u,...t,className:(0,r.A)("tabs__item ","cal-menu w-inline-block w-tab-link ",d.tabItem,t?.className,{"w--current":n===s}),children:a??s},s)}))})}function u(e){let{lazy:s,children:a,selectedValue:r}=e;const n=(Array.isArray(a)?a:[a]).filter(Boolean);if(s){const e=n.find((e=>e.props.value===r));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,o.jsx)("div",{className:"margin-top--md",children:n.map(((e,s)=>(0,t.cloneElement)(e,{key:s,hidden:e.props.value!==r})))})}function m(e){const s=(0,c.u)(e);return(0,o.jsxs)("div",{className:(0,r.A)("tabs-container",d.tabList),children:[(0,o.jsx)(h,{...e,...s}),(0,o.jsx)(u,{...e,...s})]})}function x(e){const s=(0,l.A)();return(0,o.jsx)(m,{...e,children:(0,c.v)(e.children)},String(s))}var j=a(9365);a(1312);function p(){return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("div",{className:(0,r.A)("col col--4 margin-bottom--md"),children:(0,o.jsxs)("div",{className:"package-list",children:[(0,o.jsxs)("div",{className:"package-title",children:[(0,o.jsx)("h4",{children:"Priseksempel"}),(0,o.jsx)("p",{children:"L\xf8sning for oppl\xe6ring og kontroll av maskiner."})]}),(0,o.jsx)("div",{className:"package-price",children:" fra 1590 kroner "}),(0,o.jsxs)("ul",{children:[(0,o.jsxs)("li",{children:[(0,o.jsx)("img",{src:"img/tik.svg"})," Utstyrsspesifikk oppl\xe6ring. "]}),(0,o.jsxs)("li",{children:[(0,o.jsx)("img",{src:"img/tik.svg"})," Kompetanseoversikt. "]}),(0,o.jsxs)("li",{children:[(0,o.jsx)("img",{src:"img/tik.svg"})," Kontroll p\xe5 arbeidsutstyr. "]})]})]})})})}var g=a(8003);function v(){const[e,s]=(0,t.useState)(55),[a,r]=(0,t.useState)(25),[n,i]=(0,t.useState)(2),[c,l]=(0,t.useState)(7501),[d,h]=(0,t.useState)(1001),[u,m]=(0,t.useState)(32),[p,g]=(0,t.useState)(0),[v,N]=(0,t.useState)(0),[k,f]=(0,t.useState)(0),[w,_]=(0,t.useState)(0),[y,A]=(0,t.useState)(!1),[S,C]=(0,t.useState)(!1),[q,L]=(0,t.useState)(0),I=e=>{switch(!0){case e<1:return 0;case e>=1&&e<=1:return 990;case e>1&&e<=2:return 1790;case e>2&&e<=4:return 3e3;case e>4&&e<=8:return 3600;case e>8&&e<=16:return 4200;case e>16&&e<=31:return 7e3;default:return A(!0),7e3}},P=e=>{switch(!0){case e<1:return 0;case e>=1&&e<=25:return 1590;case e>25&&e<=50:return 2490;case e>50&&e<=100:return 4190;case e>100&&e<=175:return 6290;case e>175&&e<=250:return 8290;case e>250&&e<=325:return 10190;case e>325&&e<=400:return 11990;case e>400&&e<=475:return 13990;case e>475&&e<=550:return 14990;case e>550&&e<=625:return 16390;case e>625&&e<=700:return 17690;case e>700&&e<=1e3:return 22690;default:return A(!0),18090}},$=e=>{switch(!0){case e<1:return 0;case e>=1&&e<=50:return 490;case e>50&&e<=100:return 890;case e>100&&e<=500:return 1890;case e>500&&e<=1500:return 3190;case e>1500&&e<=2500:return 5690;case e>2500&&e<=5e3:return 6890;case e>5e3&&e<=7500:return 9390;default:return A(!0),s(e),9390}},K="rgb(240 90 8)",V="rgb(222, 226, 230)",E=(a,n,t)=>{"people"==n?(r(a),N(P(a)),_(v+p)):"equipment"==n?(s(a),g($(a)),_(v+p),a>=c&&console.log(a,e,c+"Value greter equipment >= equipmentMaxValue"),S&&L(F(a))):"inspectors"==n&&(i(a),f(I(a)),_(k));let l=M(a);A(l)},M=s=>{let r=!1;return e==c&&(r=!0),a==d&&(r=!0),n==u&&(r=!0),r};(0,t.useEffect)((()=>{let s=!1;return s||(N(P(a)),g($(e)),f(I(n)),_(P(a)+$(e))),()=>{s=!0}}),[e,a,n]);const B=(e,s)=>100*e/s,F=e=>{switch(!0){case e<1:return 0;case e>=1&&e<=50:return 290;case e>=50&&e<=100:return 690;case e>100&&e<=500:return 1490;case e>500&&e<=1500:return 2690;case e>1500&&e<=2500:return 4990;case e>2500&&e<=5e3:return 5890;case e>5e3&&e<=7500:return 7690;default:return 0}};return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("section",{className:"pricing_calculator_section section-pd",children:(0,o.jsxs)("div",{className:"container",children:[(0,o.jsxs)("h2",{children:["Priskalkulator",(0,o.jsx)("span",{className:"orange",children:"."})]}),(0,o.jsx)("div",{className:"pricing-center",children:(0,o.jsx)("div",{className:"tab-container",children:(0,o.jsx)(x,{className:"tabs-menu",children:(0,o.jsx)(j.A,{value:"digiQuip",label:"DigiQuip",default:!0,children:(0,o.jsx)("div",{className:"w-tab-content",children:(0,o.jsxs)("div",{className:"w-tab-pane w--tab-active",children:[(0,o.jsx)("div",{className:"tab-nav-dis",children:"Pris beregnes ut fra mengde arbeidsutstyr og antall personer."}),(0,o.jsx)("div",{className:"calculator-html w-embed",children:(0,o.jsxs)("div",{className:"pricing-row",children:[(0,o.jsxs)("div",{className:"pricing-left",children:[(0,o.jsxs)("div",{className:"slider-container",children:[(0,o.jsxs)("div",{className:"ui-set",children:[(0,o.jsx)("span",{className:"sub-heading",children:" Arbeidsutstyr "}),(0,o.jsxs)("span",{className:"input-container",children:[(0,o.jsx)("input",{type:"number",min:"0",value:e,onChange:e=>E(e.target.value,"equipment"),className:"calculator-input"}),e>c?(0,o.jsxs)("div",{className:"tooltip",children:[(0,o.jsx)("span",{className:"tooltiparrow"}),(0,o.jsxs)("span",{className:"tooltiptext",children:["Choose a value less than ",c]})]}):""]})]}),(0,o.jsxs)("div",{className:"calculator-slider",children:[(0,o.jsx)("span",{className:"slider-track",style:{background:`linear-gradient(to right, ${K} ${B(e,c)}%, ${V} ${B(e,c)+.1}%)`}}),(0,o.jsx)("input",{type:"range",min:"0",max:c,value:e,onChange:e=>E(e.target.value,"equipment"),id:"equipmentSlider",className:"calculator-input calculator-range"})]})]}),(0,o.jsxs)("div",{className:"slider-container",children:[(0,o.jsxs)("div",{className:"ui-set",children:[(0,o.jsx)("span",{className:"sub-heading",children:" Personer "}),(0,o.jsxs)("span",{className:"input-container",children:[(0,o.jsx)("input",{type:"number",min:"0",value:a,onChange:e=>E(e.target.value,"people"),id:"participantsInput",className:"calculator-input"}),a>d?(0,o.jsxs)("div",{className:"tooltip",children:[(0,o.jsx)("span",{className:"tooltiparrow"}),(0,o.jsxs)("span",{className:"tooltiptext",children:["Choose a value less than ",d]})]}):""]})]}),(0,o.jsxs)("div",{className:"calculator-slider",children:[(0,o.jsx)("span",{className:"slider-track",style:{background:`linear-gradient(to right, ${K} ${B(a,d)}%, ${V} ${B(a,d)+.1}%)`}}),(0,o.jsx)("input",{type:"range",min:"0",max:d,value:a,onChange:e=>E(e.target.value,"people"),id:"peopleSlider",className:"calculator-input calculator-range"})]}),(0,o.jsxs)("div",{className:"price-additional-main",children:[(0,o.jsx)("div",{className:"ui-set",children:(0,o.jsx)("span",{className:"sub-heading",children:" Ytterligere alternativer: "})}),(0,o.jsx)("div",{className:"price-additional-options",children:(0,o.jsxs)("label",{className:"checkbox-container checkbox cursor-pointer",children:["Vedlikehold",(0,o.jsx)("input",{type:"checkbox",checked:S,onChange:s=>{C(s.target.checked),s.target.checked?L(F(e)):L(0)}}),(0,o.jsx)("span",{className:"checkmark"})]})})]})]}),(0,o.jsxs)("p",{children:["Etableringskostnad 5000 kroner. Alle priser er eks. mva. For ytterligere detaljer se v\xe5r detaljerte ",(0,o.jsx)("a",{href:"https://digiquip.no/docs/prices/detailed-price-list",children:"prisliste"})]})]}),(0,o.jsxs)("div",{className:"pricing-right",children:[!y&&(0,o.jsxs)("div",{className:"calculator-one",children:[(0,o.jsx)("div",{className:"calculator-view",children:(0,o.jsxs)("h6",{children:[(0,o.jsx)("img",{src:"img/estimated-cost.svg"})," Beregnet m\xe5nedlig kostnad"]})}),(0,o.jsxs)("div",{className:"calculator-price",children:[p>0&&(0,o.jsxs)("div",{className:"ui-set cost-section",children:[(0,o.jsx)("span",{className:"sub-heading",children:"Arbeidsutstyr"}),(0,o.jsxs)("span",{id:"confCost",children:["kr ",p]}),e>0&&(0,o.jsx)("div",{className:"conferencing-cost-text"}),(0,o.jsx)("hr",{className:"calculator-hr"})]}),v>0&&(0,o.jsxs)("div",{className:"ui-set cost-section",children:[(0,o.jsx)("span",{className:"sub-heading",children:"Personer"}),(0,o.jsxs)("span",{id:"confCost",children:["kr ",v]}),a>0&&(0,o.jsx)("div",{className:"conferencing-cost-text"}),(0,o.jsx)("hr",{className:"calculator-hr"})]}),S&&(0,o.jsxs)("div",{className:"ui-set cost-section",children:[(0,o.jsx)("span",{className:"sub-heading",children:"Vedlikehold"}),(0,o.jsxs)("span",{id:"confCost",children:["kr ",q]}),(0,o.jsx)("hr",{className:"calculator-hr"})]}),(0,o.jsxs)("div",{className:"ui-set est",children:[(0,o.jsx)("span",{className:"est-text",children:"Beregnet m\xe5nedlig kostnad"}),(0,o.jsxs)("span",{className:"total-cost-text",id:"videototalCost",children:["kr ",p+v+q]})]})]})]}),y&&(0,o.jsx)(b,{})]})]})})]})})})})})})]})})})}function b(){return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("div",{className:"calculator-count",children:(0,o.jsxs)("div",{className:"c2-v2-content",children:[(0,o.jsx)("img",{alt:"build",src:"img/calc-edit.svg"}),(0,o.jsxs)("div",{className:"alt-view-heading",children:["Oi sann p\xe5 utsiden av kalkulatoren! ",(0,o.jsx)("br",{})," Det ordner vi. "]}),(0,o.jsx)("div",{className:"alt-view-content",children:"Ta kontakt s\xe5 blir vi enige om en god pris."}),(0,o.jsx)("div",{className:"btn-container",children:(0,o.jsx)("a",{href:"https://digiquip.no/about",target:"kontakt",children:(0,o.jsx)("button",{className:"btn-t-1 calculator-button",children:"Kontakt oss"})})})]})})})}function N(){return(0,o.jsx)("section",{className:"about-integrations section-pd",children:(0,o.jsx)("div",{className:"container",children:(0,o.jsxs)("div",{className:"integrations-center",children:[(0,o.jsxs)("h2",{children:["Integrasjoner",(0,o.jsx)("span",{className:"orange",children:"."})," "]}),(0,o.jsx)("p",{children:"Integrasjoner er et av v\xe5re viktigste satsningsomr\xe5der."}),(0,o.jsxs)("div",{className:"row",children:[(0,o.jsx)("div",{className:(0,r.A)("col col--4 margin-bottom--lg"),children:(0,o.jsxs)("div",{className:"call-action",children:[(0,o.jsx)("h3",{children:"Skredders\xf8m"}),(0,o.jsxs)("p",{children:["I 2024 setter vi fart p\xe5 integrasjonsarbeidet. For st\xf8rst mulig fleksibilitet bruker vi integrasjonsplattformen ",(0,o.jsx)("a",{href:"https://www.snaplogic.com/",target:"_blank",children:"Snaplogic"}),", og flere av kundene v\xe5re har allerede benyttet seg av muligheten for skreddersydde integrasjoner."]}),(0,o.jsx)("p",{children:"Pris p\xe5 foresp\xf8rsel."})]})}),(0,o.jsx)("div",{className:(0,r.A)("col col--4 margin-bottom--lg"),children:(0,o.jsxs)("div",{className:"call-action",children:[(0,o.jsx)("h3",{children:"Kompetanseregisteret"}),(0,o.jsxs)("p",{children:["Sentralregisterets Kompetanseregister (K-reg) lagrer og utsteder kompetansebevis. Snart kan du hente kompetansebevis fra K-reg til DigiQuip. Se ",(0,o.jsx)("a",{href:"https://sentralregisteret.no/kompetanseregisteret/",target:"_blank",children:"Kompetanseregisteret"})," for mer informasjon."]}),(0,o.jsx)("p",{children:"Integrasjonen har ingen ekstra kostnad."})]})}),(0,o.jsx)("div",{className:(0,r.A)("col col--4 margin-bottom--lg"),children:(0,o.jsxs)("div",{className:"call-action",children:[(0,o.jsx)("h3",{children:"Maskinregisteret"}),(0,o.jsxs)("p",{children:["Sentralregisterets Maskinregister (M-reg) er et register for arbeidsmaskiner og utstyr. Hent arbeidsutstyr og sakkyndig kontroll fra M-reg til DigiQuip. Se ",(0,o.jsx)("a",{href:"",target:"_blank",children:"Maskinregisteret"})," for mer informasjon."]}),(0,o.jsx)("p",{children:"Integrasjonen har ingen ekstra kostnad."})]})})]})]})})})}function k(){return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("section",{className:"homepage-banner",children:(0,o.jsxs)("div",{className:(0,r.A)("hero-25 hero hero--primary heroBanner"),children:[(0,o.jsxs)("div",{className:"container",children:[(0,o.jsxs)("h1",{className:"section-title",children:["Priser",(0,o.jsx)("span",{className:"orange",children:"."})]}),(0,o.jsx)("p",{children:"Beregn m\xe5nedlig kostnad i priskalkulatoren nedenfor."}),(0,o.jsx)("div",{className:"row",children:(0,o.jsx)(p,{})})]}),(0,o.jsx)("span",{className:"bg"})]})})})}function f(){return(0,o.jsxs)(n.A,{children:[(0,o.jsx)(k,{}),(0,o.jsx)(v,{}),(0,o.jsx)(N,{}),(0,o.jsx)(g.A,{})]})}}}]);