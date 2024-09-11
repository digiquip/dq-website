"use strict";(self.webpackChunkdq_website=self.webpackChunkdq_website||[]).push([[3114],{9010:(e,t,i)=>{i.d(t,{A:()=>a});var s=i(1312),n=i(4848);const r=[];for(let c=1;c<=3;c++){var l="home.event.keypoints_title"+c,o="home.event.keypoints_desc"+c;r.push({title:(0,s.T)({message:l}),description:(0,s.T)({message:o})})}const a={event:(0,n.jsx)(s.A,{children:"home.event.type"}),date:(0,n.jsx)(s.A,{children:"home.event.date"}),title:(0,n.jsx)(s.A,{children:"home.event.title"}),description:(0,n.jsx)(s.A,{children:"home.event.description"}),signup:(0,n.jsx)(s.A,{children:"home.event.signup"}),presentors:[{name:"Tom Freddy Braathen",image:"img/competence-images/tom_freddy.webp"},{name:"Cathrine Westbye",image:"team_imgs/CathrineWestbye.jpeg"},{name:"Ibtisam Andersen",image:"team_imgs/ibtisam.jpeg"}],keypoints:r}},998:(e,t,i)=>{i.d(t,{A:()=>h});var s=i(4586),n=i(3833),r=i(6540),l=i(8133),o=i(7083),a=i(4183),c=i(4848);function h(e){let{children:t}=e;const{siteConfig:i}=(0,s.A)();return(0,r.useEffect)((()=>{o.Ay.registerPlugin(a.u);const e=o.Ay.from(".navbar",{yPercent:-100,paused:!0,duration:.2}).progress(1);a.u.create({start:"top top",end:"max",onUpdate:t=>{let i=document.querySelector(".navbar");i&&(1===t.direction&&i.classList.add("my-class"),-1===t.direction&&i.classList.add("up"),0===t.progress&&(i.classList.remove("up"),i.classList.remove("my-class"))),-1===t.direction?e.play():e.reverse()}})})),(0,c.jsx)(l.iE,{root:!0,children:(0,c.jsx)(n.A,{title:`${i.title}`,description:`${i.tagline}`,className:"main-header",children:(0,c.jsx)("main",{children:t})})})}},9555:(e,t,i)=>{i.r(t),i.d(t,{default:()=>c});var s=i(6540),n=i(4164),r=i(998),l=i(9010),o=i(4848);function a(){return(0,s.useEffect)((()=>{const e=document.getElementById("mailService");var t=null;const i=document.createElement("script");i.src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js",i.type="text/javascript",e.appendChild(i),i.onload=()=>{const i=document.createElement("script");i.src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js",i.type="text/javascript",e.appendChild(i),i.onload=()=>{(t=document.createElement("script")).type="text/javascript",t.innerHTML='\n                (function($) {\n                  // alert(\'hello\')\n                  window.fnames = new Array(); window.ftypes = new Array();\n                  fnames[0]=\'EMAIL\';ftypes[0]=\'email\';fnames[1]=\'FNAME\';ftypes[1]=\'text\';\n                  fnames[2]=\'LNAME\';ftypes[2]=\'text\';fnames[4]=\'PHONE\';ftypes[4]=\'phone\';\n                  fnames[3]=\'ADDRESS\';ftypes[3]=\'address\';\n                  // Translated default messages for the $ validation plugin.\n                  // Locale: NO (Norwegian)\n                  $.extend($.validator.messages, {\n                    required: "Dette feltet er obligatorisk.",\n                    maxlength: $.validator.format("Maksimalt {0} tegn."),\n                    minlength: $.validator.format("Minimum {0} tegn."),\n                    rangelength: $.validator.format("Angi minimum {0} og maksimum {1} tegn."),\n                    email: "Oppgi en gyldig epostadresse.",\n                    url: "Angi en gyldig URL.",\n                    date: "Angi en gyldig dato.",\n                    dateISO: "Angi en gyldig dato (&ARING;&ARING;&ARING;&ARING;-MM-DD).",\n                    dateSE: "Angi en gyldig dato.",\n                    number: "Angi et gyldig nummer.",\n                    numberSE: "Angi et gyldig nummer.",\n                    digits: "Skriv kun tall.",\n                    equalTo: "Skriv samme verdi igjen.",\n                    range: $.validator.format("Angi en verdi mellom {0} og {1}."),\n                    max: $.validator.format("Angi en verdi som er mindre eller lik {0}."),\n                    min: $.validator.format("Angi en verdi som er st&oslash;rre eller lik {0}."),\n                    creditcard: "Angi et gyldig kredittkortnummer."\n                  });\n                }(jQuery));\n                var $mcj = jQuery.noConflict(true);\n            ',e.appendChild(t)}};const s=document.createElement("link");s.href="//cdn-images.mailchimp.com/embedcode/classic-061523.css",s.rel="stylesheet",s.type="text/css";const n=document.head.firstChild;return document.head.insertBefore(s,n),()=>{e.removeChild(t)}}),[]),(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("section",{className:"homepage-banner",children:(0,o.jsxs)("div",{className:(0,n.A)("hero-25 hero hero--primary heroBanner eventpage"),children:[(0,o.jsxs)("div",{className:"container",children:[(0,o.jsx)("p",{className:"ebtitle",children:l.A.event}),(0,o.jsxs)("h3",{className:"section-title",children:[l.A.title,(0,o.jsx)("span",{className:"orange",children:"."})]}),(0,o.jsx)("h5",{children:l.A.date}),(0,o.jsx)("div",{className:"eventpage-wrapper",children:(0,o.jsxs)("div",{className:"row",children:[(0,o.jsx)("div",{className:(0,n.A)("col col--6"),children:(0,o.jsxs)("div",{className:"eventdetail",children:[(0,o.jsx)("div",{className:"presentors",children:l.A.presentors&&l.A.presentors.map(((e,t)=>(0,o.jsxs)("div",{className:"presenter light-bg-grey",children:[(0,o.jsx)("div",{className:"team-image",children:(0,o.jsx)("img",{src:e.image,alt:e.name})}),(0,o.jsx)("div",{children:(0,o.jsx)("p",{children:e.name})})]},t)))}),(0,o.jsxs)("div",{className:"e-description",children:[(0,o.jsx)("p",{children:l.A.description}),(0,o.jsx)("div",{children:(0,o.jsx)("ul",{className:"e-keydetails",children:l.A.keypoints&&l.A.keypoints.map(((e,t)=>(0,o.jsxs)("li",{className:"e-keydetails-item",children:[(0,o.jsx)("p",{className:"e-keydetails-title",dangerouslySetInnerHTML:{__html:e.title}}),(0,o.jsx)("p",{className:"e-keydetails-item-desc",children:e.description})]},t)))})})]})]})}),(0,o.jsx)("div",{className:(0,n.A)("col col--5 col--offset-1 "),children:(0,o.jsx)("div",{className:"signup-form-service light-bg-grey",id:"mailService",children:(0,o.jsx)("div",{id:"mc_embed_shell",children:(0,o.jsx)("div",{id:"mc_embed_signup",children:(0,o.jsx)("form",{action:"https://digiquip.us21.list-manage.com/subscribe/post?u=45bf490556cbc57d81d50c4f6&id=e240c26309&v_id=274&f_id=00eb87e6f0",method:"post",id:"mc-embedded-subscribe-form",name:"mc-embedded-subscribe-form",className:"validate",target:"_blank",children:(0,o.jsxs)("div",{id:"mc_embed_signup_scroll",children:[(0,o.jsx)("h2",{children:"Webinar"}),(0,o.jsxs)("div",{className:"indicates-required",children:[(0,o.jsx)("span",{className:"asterisk",children:"*"})," indicates required"]}),(0,o.jsxs)("div",{className:"mc-field-group",children:[(0,o.jsxs)("label",{htmlFor:"mce-EMAIL",children:["Email Address ",(0,o.jsx)("span",{className:"asterisk",children:"*"})]}),(0,o.jsx)("input",{type:"email",name:"EMAIL",className:"required email",id:"mce-EMAIL",required:""})]}),(0,o.jsxs)("div",{className:"mc-field-group",children:[(0,o.jsx)("label",{htmlFor:"mce-FNAME",children:"First Name "}),(0,o.jsx)("input",{type:"text",name:"FNAME",className:" text",id:"mce-FNAME"})]}),(0,o.jsxs)("div",{className:"mc-field-group",children:[(0,o.jsx)("label",{htmlFor:"mce-LNAME",children:"Last Name "}),(0,o.jsx)("input",{type:"text",name:"LNAME",className:" text",id:"mce-LNAME"})]}),(0,o.jsxs)("div",{className:"mc-field-group",children:[(0,o.jsx)("label",{htmlFor:"mce-PHONE",children:"Phone Number "}),(0,o.jsx)("input",{type:"text",name:"PHONE",className:"REQ_CSS",id:"mce-PHONE"})]}),(0,o.jsxs)("div",{id:"mergeRow-gdpr",className:"mergeRow gdpr-mergeRow content__gdprBlock mc-field-group",children:[(0,o.jsxs)("div",{className:"content__gdpr",children:[(0,o.jsx)("label",{children:"Samtykker"}),(0,o.jsx)("p",{children:"Nedenfor kan du velge hvordan du \xf8nsker \xe5 f\xe5 informasjon fra oss."}),(0,o.jsxs)("fieldset",{className:"mc_fieldset gdprRequired mc-field-group",name:"interestgroup_field",children:[(0,o.jsxs)("label",{className:"checkbox subfield",htmlFor:"gdpr2194",children:[(0,o.jsx)("input",{type:"checkbox",id:"gdpr_2194",name:"gdpr[2194]",className:"gdpr",value:"Y"}),(0,o.jsx)("span",{children:"E-post"})]}),(0,o.jsxs)("label",{className:"checkbox subfield",htmlFor:"gdpr2195",children:[(0,o.jsx)("input",{type:"checkbox",id:"gdpr_2195",name:"gdpr[2195]",className:"gdpr",value:"Y"}),(0,o.jsx)("span",{children:"SMS"})]})]}),(0,o.jsx)("p",{children:"You can unsubscribe at any time by clicking the link in the footer of our emails. For information about our privacy practices, please visit our website, https://digiquip.no/docs/category/juridisk. "})]}),(0,o.jsx)("div",{className:"content__gdprLegal",children:(0,o.jsxs)("p",{children:["We use Mailchimp as our marketing platform. By clicking below to subscribe, you acknowledge that your information will be transferred to Mailchimp for processing. ",(0,o.jsx)("a",{href:"https://mailchimp.com/legal/terms",children:"Learn more"})," about Mailchimp's privacy practices."]})})]}),(0,o.jsx)("div",{hidden:"",children:(0,o.jsx)("input",{type:"hidden",name:"tags",value:"2975920"})}),(0,o.jsxs)("div",{id:"mce-responses",className:"clear",children:[(0,o.jsx)("div",{className:"response",id:"mce-error-response",style:{display:"none"}}),(0,o.jsx)("div",{className:"response",id:"mce-success-response",style:{display:"none"}})]}),(0,o.jsx)("div",{"aria-hidden":"true",style:{position:"absolute",left:"-5000px"},children:(0,o.jsx)("input",{type:"text",name:"b_45bf490556cbc57d81d50c4f6_e240c26309",tabIndex:"-1"})}),(0,o.jsx)("div",{className:"clear",children:(0,o.jsx)("input",{type:"submit",name:"subscribe",id:"mc-embedded-subscribe",className:"button",value:"Subscribe"})})]})})})})})})]})})]}),(0,o.jsx)("span",{className:"bg"})]})})})}function c(){return(0,o.jsx)(r.A,{children:(0,o.jsx)(a,{})})}},8133:(e,t,i)=>{i.d(t,{iE:()=>g});var s=i(4848),n="undefined"!=typeof window&&new class{constructor(){this.raf=e=>{requestAnimationFrame(this.raf);const t=e-this.now;this.now=e;for(let i=0;i<this.callbacks.length;i++)this.callbacks[i].callback(e,t)},this.callbacks=[],this.now=performance.now(),requestAnimationFrame(this.raf)}add(e,t=0){return this.callbacks.push({callback:e,priority:t}),this.callbacks.sort(((e,t)=>e.priority-t.priority)),()=>this.remove(e)}remove(e){this.callbacks=this.callbacks.filter((({callback:t})=>e!==t))}};function r(e,t,i){return Math.max(e,Math.min(t,i))}class l{constructor(){this.isRunning=!1,this.value=0,this.from=0,this.to=0,this.currentTime=0}advance(e){var t;if(!this.isRunning)return;let i=!1;if(this.duration&&this.easing){this.currentTime+=e;const t=r(0,this.currentTime/this.duration,1);i=t>=1;const s=i?1:this.easing(t);this.value=this.from+(this.to-this.from)*s}else this.lerp?(this.value=function(e,t,i,s){return function(e,t,i){return(1-i)*e+i*t}(e,t,1-Math.exp(-i*s))}(this.value,this.to,60*this.lerp,e),Math.round(this.value)===this.to&&(this.value=this.to,i=!0)):(this.value=this.to,i=!0);i&&this.stop(),null===(t=this.onUpdate)||void 0===t||t.call(this,this.value,i)}stop(){this.isRunning=!1}fromTo(e,t,{lerp:i,duration:s,easing:n,onStart:r,onUpdate:l}){this.from=this.value=e,this.to=t,this.lerp=i,this.duration=s,this.easing=n,this.currentTime=0,this.isRunning=!0,null==r||r(),this.onUpdate=l}}class o{constructor(e,t,{autoResize:i=!0,debounce:s=250}={}){this.wrapper=e,this.content=t,this.width=0,this.height=0,this.scrollHeight=0,this.scrollWidth=0,this.resize=()=>{this.onWrapperResize(),this.onContentResize()},this.onWrapperResize=()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)},this.onContentResize=()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)},i&&(this.debouncedResize=function(e,t){let i;return function(...s){let n=this;clearTimeout(i),i=setTimeout((()=>{i=void 0,e.apply(n,s)}),t)}}(this.resize,s),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize,!1):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var e,t;null===(e=this.wrapperResizeObserver)||void 0===e||e.disconnect(),null===(t=this.contentResizeObserver)||void 0===t||t.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize,!1)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}}class a{constructor(){this.events={}}emit(e,...t){var i;let s=this.events[e]||[];for(let n=0,r=s.length;n<r;n++)null===(i=s[n])||void 0===i||i.call(s,...t)}on(e,t){var i;return(null===(i=this.events[e])||void 0===i?void 0:i.push(t))||(this.events[e]=[t]),()=>{var i;this.events[e]=null===(i=this.events[e])||void 0===i?void 0:i.filter((e=>t!==e))}}off(e,t){var i;this.events[e]=null===(i=this.events[e])||void 0===i?void 0:i.filter((e=>t!==e))}destroy(){this.events={}}}const c=100/6,h={passive:!1};class d{constructor(e,t={wheelMultiplier:1,touchMultiplier:1}){this.element=e,this.options=t,this.touchStart={x:0,y:0},this.lastDelta={x:0,y:0},this.window={width:0,height:0},this.emitter=new a,this.onTouchStart=e=>{const{clientX:t,clientY:i}=e.targetTouches?e.targetTouches[0]:e;this.touchStart.x=t,this.touchStart.y=i,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:e})},this.onTouchMove=e=>{const{clientX:t,clientY:i}=e.targetTouches?e.targetTouches[0]:e,s=-(t-this.touchStart.x)*this.options.touchMultiplier,n=-(i-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=t,this.touchStart.y=i,this.lastDelta={x:s,y:n},this.emitter.emit("scroll",{deltaX:s,deltaY:n,event:e})},this.onTouchEnd=e=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:e})},this.onWheel=e=>{let{deltaX:t,deltaY:i,deltaMode:s}=e;t*=1===s?c:2===s?this.window.width:1,i*=1===s?c:2===s?this.window.height:1,t*=this.options.wheelMultiplier,i*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:t,deltaY:i,event:e})},this.onWindowResize=()=>{this.window={width:window.innerWidth,height:window.innerHeight}},window.addEventListener("resize",this.onWindowResize,!1),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,h),this.element.addEventListener("touchstart",this.onTouchStart,h),this.element.addEventListener("touchmove",this.onTouchMove,h),this.element.addEventListener("touchend",this.onTouchEnd,h)}on(e,t){return this.emitter.on(e,t)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize,!1),this.element.removeEventListener("wheel",this.onWheel,h),this.element.removeEventListener("touchstart",this.onTouchStart,h),this.element.removeEventListener("touchmove",this.onTouchMove,h),this.element.removeEventListener("touchend",this.onTouchEnd,h)}}class m{constructor({wrapper:e=window,content:t=document.documentElement,eventsTarget:i=e,smoothWheel:s=!0,syncTouch:n=!1,syncTouchLerp:r=.075,touchInertiaMultiplier:c=35,duration:h,easing:m=e=>Math.min(1,1.001-Math.pow(2,-10*e)),lerp:u=.1,infinite:p=!1,orientation:v="vertical",gestureOrientation:g="vertical",touchMultiplier:f=1,wheelMultiplier:y=1,autoResize:x=!0,prevent:w,virtualScroll:b,__experimental__naiveDimensions:S=!1}={}){this._isScrolling=!1,this._isStopped=!1,this._isLocked=!1,this._preventNextNativeScrollEvent=!1,this._resetVelocityTimeout=null,this.time=0,this.userData={},this.lastVelocity=0,this.velocity=0,this.direction=0,this.animate=new l,this.emitter=new a,this.onPointerDown=e=>{1===e.button&&this.reset()},this.onVirtualScroll=e=>{if("function"==typeof this.options.virtualScroll&&!1===this.options.virtualScroll(e))return;const{deltaX:t,deltaY:i,event:s}=e;if(this.emitter.emit("virtual-scroll",{deltaX:t,deltaY:i,event:s}),s.ctrlKey)return;const n=s.type.includes("touch"),r=s.type.includes("wheel");if(this.isTouching="touchstart"===s.type||"touchmove"===s.type,this.options.syncTouch&&n&&"touchstart"===s.type&&!this.isStopped&&!this.isLocked)return void this.reset();const l=0===t&&0===i,o="vertical"===this.options.gestureOrientation&&0===i||"horizontal"===this.options.gestureOrientation&&0===t;if(l||o)return;let a=s.composedPath();a=a.slice(0,a.indexOf(this.rootElement));const c=this.options.prevent;if(a.find((e=>{var t,i,s,l,o;return e instanceof HTMLElement&&("function"==typeof c&&(null==c?void 0:c(e))||(null===(t=e.hasAttribute)||void 0===t?void 0:t.call(e,"data-lenis-prevent"))||n&&(null===(i=e.hasAttribute)||void 0===i?void 0:i.call(e,"data-lenis-prevent-touch"))||r&&(null===(s=e.hasAttribute)||void 0===s?void 0:s.call(e,"data-lenis-prevent-wheel"))||(null===(l=e.classList)||void 0===l?void 0:l.contains("lenis"))&&!(null===(o=e.classList)||void 0===o?void 0:o.contains("lenis-stopped")))})))return;if(this.isStopped||this.isLocked)return void s.preventDefault();if(!(this.options.syncTouch&&n||this.options.smoothWheel&&r))return this.isScrolling="native",void this.animate.stop();s.preventDefault();let h=i;"both"===this.options.gestureOrientation?h=Math.abs(i)>Math.abs(t)?i:t:"horizontal"===this.options.gestureOrientation&&(h=t);const d=n&&this.options.syncTouch,m=n&&"touchend"===s.type&&Math.abs(h)>5;m&&(h=this.velocity*this.options.touchInertiaMultiplier),this.scrollTo(this.targetScroll+h,Object.assign({programmatic:!1},d?{lerp:m?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}))},this.onNativeScroll=()=>{if(null!==this._resetVelocityTimeout&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent)this._preventNextNativeScrollEvent=!1;else if(!1===this.isScrolling||"native"===this.isScrolling){const e=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-e,this.direction=Math.sign(this.animatedScroll-e),this.isScrolling="native",this.emit(),0!==this.velocity&&(this._resetVelocityTimeout=setTimeout((()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()}),400))}},window.lenisVersion="1.1.13",e&&e!==document.documentElement&&e!==document.body||(e=window),this.options={wrapper:e,content:t,eventsTarget:i,smoothWheel:s,syncTouch:n,syncTouchLerp:r,touchInertiaMultiplier:c,duration:h,easing:m,lerp:u,infinite:p,gestureOrientation:g,orientation:v,touchMultiplier:f,wheelMultiplier:y,autoResize:x,prevent:w,virtualScroll:b,__experimental__naiveDimensions:S},this.dimensions=new o(e,t,{autoResize:x}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown,!1),this.virtualScroll=new d(i,{touchMultiplier:f,wheelMultiplier:y}),this.virtualScroll.on("scroll",this.onVirtualScroll)}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown,!1),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName()}on(e,t){return this.emitter.on(e,t)}off(e,t){return this.emitter.off(e,t)}setScroll(e){this.isHorizontal?this.rootElement.scrollLeft=e:this.rootElement.scrollTop=e}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){this.isStopped&&(this.isStopped=!1,this.reset())}stop(){this.isStopped||(this.isStopped=!0,this.animate.stop(),this.reset())}raf(e){const t=e-(this.time||e);this.time=e,this.animate.advance(.001*t)}scrollTo(e,{offset:t=0,immediate:i=!1,lock:s=!1,duration:n=this.options.duration,easing:l=this.options.easing,lerp:o=this.options.lerp,onStart:a,onComplete:c,force:h=!1,programmatic:d=!0,userData:m}={}){if(!this.isStopped&&!this.isLocked||h){if("string"==typeof e&&["top","left","start"].includes(e))e=0;else if("string"==typeof e&&["bottom","right","end"].includes(e))e=this.limit;else{let i;if("string"==typeof e?i=document.querySelector(e):e instanceof HTMLElement&&(null==e?void 0:e.nodeType)&&(i=e),i){if(this.options.wrapper!==window){const e=this.rootElement.getBoundingClientRect();t-=this.isHorizontal?e.left:e.top}const s=i.getBoundingClientRect();e=(this.isHorizontal?s.left:s.top)+this.animatedScroll}}if("number"==typeof e){if(e+=t,e=Math.round(e),this.options.infinite?d&&(this.targetScroll=this.animatedScroll=this.scroll):e=r(0,e,this.limit),e===this.targetScroll)return null==a||a(this),void(null==c||c(this));if(this.userData=null!=m?m:{},i)return this.animatedScroll=this.targetScroll=e,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),null==c||c(this),void(this.userData={});d||(this.targetScroll=e),this.animate.fromTo(this.animatedScroll,e,{duration:n,easing:l,lerp:o,onStart:()=>{s&&(this.isLocked=!0),this.isScrolling="smooth",null==a||a(this)},onUpdate:(e,t)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=e-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=e,this.setScroll(this.scroll),d&&(this.targetScroll=e),t||this.emit(),t&&(this.reset(),this.emit(),null==c||c(this),this.userData={},this.preventNextNativeScrollEvent())}})}}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame((()=>{this._preventNextNativeScrollEvent=!1}))}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.__experimental__naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return"horizontal"===this.options.orientation}get actualScroll(){return this.isHorizontal?this.rootElement.scrollLeft:this.rootElement.scrollTop}get scroll(){return this.options.infinite?function(e,t){return(e%t+t)%t}(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return 0===this.limit?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(e){this._isScrolling!==e&&(this._isScrolling=e,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(e){this._isStopped!==e&&(this._isStopped=e,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(e){this._isLocked!==e&&(this._isLocked=e,this.updateClassName())}get isSmooth(){return"smooth"===this.isScrolling}get className(){let e="lenis";return this.isStopped&&(e+=" lenis-stopped"),this.isLocked&&(e+=" lenis-locked"),this.isScrolling&&(e+=" lenis-scrolling"),"smooth"===this.isScrolling&&(e+=" lenis-smooth"),e}updateClassName(){this.cleanUpClassName(),this.rootElement.className=`${this.rootElement.className} ${this.className}`.trim()}cleanUpClassName(){this.rootElement.className=this.rootElement.className.replace(/lenis(-\w+)?/g,"").trim()}}var u=i(6540);const p=(0,u.createContext)(null),v=new class{constructor(e){this.state=e,this.listeners=[]}set(e){this.state=e;for(let t of this.listeners)t(this.state)}subscribe(e){return this.listeners=[...this.listeners,e],()=>{this.listeners=this.listeners.filter((t=>t!==e))}}get(){return this.state}}(null);const g=(0,u.forwardRef)((({children:e,root:t=!1,options:i={},autoRaf:r=!0,rafPriority:l=0,className:o,props:a},c)=>{const h=(0,u.useRef)(null),d=(0,u.useRef)(null),[g,f]=(0,u.useState)(void 0);(0,u.useImperativeHandle)(c,(()=>({wrapper:h.current,content:d.current,lenis:g})),[g]),(0,u.useEffect)((()=>{const e=new m(Object.assign(Object.assign({},i),!t&&{wrapper:h.current,content:d.current}));return f(e),()=>{e.destroy(),f(void 0)}}),[t,JSON.stringify(i)]),(0,u.useEffect)((()=>{if(g&&r)return n.add((e=>g.raf(e)),l)}),[g,r,l]);const y=(0,u.useRef)([]),x=(0,u.useCallback)(((e,t)=>{y.current.push({callback:e,priority:t}),y.current.sort(((e,t)=>e.priority-t.priority))}),[]),w=(0,u.useCallback)((e=>{y.current=y.current.filter((t=>t.callback!==e))}),[]);return(0,u.useEffect)((()=>{if(t&&g)return v.set({lenis:g,addCallback:x,removeCallback:w}),()=>v.set(null)}),[t,g,x,w]),(0,u.useEffect)((()=>{if(!g)return;const e=e=>{for(let t=0;t<y.current.length;t++)y.current[t].callback(e)};return g.on("scroll",e),()=>{g.off("scroll",e)}}),[g]),(0,s.jsx)(p.Provider,{value:{lenis:g,addCallback:x,removeCallback:w},children:t?e:(0,s.jsx)("div",Object.assign({ref:h,className:o},a,{children:(0,s.jsx)("div",{ref:d,children:e})}))})}))}}]);