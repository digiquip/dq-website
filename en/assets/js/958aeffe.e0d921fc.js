"use strict";(self.webpackChunkdq_website=self.webpackChunkdq_website||[]).push([[2482],{1989:(t,e,i)=>{i.d(e,{A:()=>n});var s=i(4848);function n(t){let{Img:e,width:i,height:n,alt:o,zIndex:r}=t;return(0,s.jsx)("img",{src:e,width:i,height:n,alt:o,style:{zIndex:r}})}},8189:(t,e,i)=>{i.d(e,{A:()=>o});var s=i(1312),n=i(4848);function o(){return(0,n.jsx)("a",{href:"#",className:"white-btn red-btn btn",children:(0,n.jsxs)("span",{className:"btn_wrapper",children:[(0,n.jsx)("span",{className:"btn_text",children:(0,n.jsx)(s.A,{children:"home.contact.button"})}),(0,n.jsx)("span",{className:"btn_text",children:(0,n.jsx)(s.A,{children:"home.contact.button"})})]})})}},120:(t,e,i)=>{i.d(e,{A:()=>m});var s=i(4586),n=i(3833),o=i(6540),r=i(8133),l=i(7083),a=i(4183),h=i(8774),c=i(1312),d=i(4848);function u(){return(0,d.jsx)("div",{className:"contactUsDropdown",children:(0,d.jsxs)("div",{className:"dropdown",children:[(0,d.jsx)("button",{className:"btn dropdown-btn",children:(0,d.jsx)("img",{src:"/icons/contact.svg",alt:"Contact Us"})}),(0,d.jsxs)("div",{className:"dropdown-content",children:[(0,d.jsx)(h.A,{href:"https://us21.list-manage.com/contact-form?u=45bf490556cbc57d81d50c4f6&form_id=fb2b014417ac7312f80a8bb815f52ab5",target:"_blank",children:(0,d.jsx)(c.A,{children:"navbar.label.contact_us"})}),(0,d.jsx)(h.A,{href:"/about",children:(0,d.jsx)(c.A,{children:"navbar.label.book_meeting"})})]})]})})}function m(t){let{children:e}=t;const{siteConfig:i}=(0,s.A)();return(0,o.useEffect)((()=>{l.Ay.registerPlugin(a.u);const t=l.Ay.from(".navbar",{yPercent:-100,paused:!0,duration:.2}).progress(1);a.u.create({start:"top top",end:"max",onUpdate:e=>{let i=document.querySelector(".navbar");i&&(1===e.direction&&i.classList.add("my-class"),-1===e.direction&&i.classList.add("up"),0===e.progress&&(i.classList.remove("up"),i.classList.remove("my-class"))),-1===e.direction?t.play():t.reverse()}})})),(0,d.jsxs)(r.iE,{root:!0,children:[(0,d.jsx)(n.A,{title:`${i.title}`,description:`${i.tagline}`,className:"main-header",children:(0,d.jsx)("main",{children:e})}),(0,d.jsx)(u,{})]})}},2498:(t,e,i)=>{i.r(e),i.d(e,{default:()=>m});var s=i(4164),n=i(120),o=i(1312),r=(i(8189),i(6540));const l={teamDataSource:[{id:1,fullName:"Tom Freddy Braathen",designation:"Chief Commercial Officer",emailAddress:"tfb@digiquip.no",mobileNumber:"+47 45488525",image:"img/competence-images/tom_freddy.webp",contactLink:"https://outlook.office.com/bookwithme/user/738fbc66e13643ae8133926efedcf889@digiquip.no/meetingtype/SVRwCe7HMUGxuT6WGxi68g2?anonymous&ep=mcard"},{id:2,fullName:"Cathrine Westbye",designation:"Solution Manager, Competence",emailAddress:"cw@digiquip.no",mobileNumber:"+47 90470526",image:"team_imgs/CathrineWestbye.jpeg",contactLink:"https://outlook.office.com/bookwithme/user/91ccd91ccb974029aaff26e951e8fe2f%40digiquip.no/meetingtype/SVRwCe7HMUGxuT6WGxi68g2?anonymous&isanonymous=true"},{id:3,fullName:"Ibtisam Andersen",designation:"Solution Manager, Controls",emailAddress:"ibtisam@digiquip.no",mobileNumber:"+47 96861313",image:"team_imgs/ibtisam.jpeg",contactLink:""},{id:4,fullName:"Olav Landmark Pedersen",designation:"Tech Lead",emailAddress:"olav@digiquip.no",mobileNumber:"+47 92686493",image:"team_imgs/olav.jpg",contactLink:""},{id:5,fullName:"Kevin Andr\xe9 Hovland",designation:"Support Engineer",emailAddress:"kah@digiquip.no",mobileNumber:"+47 99260197",image:"team_imgs/kevin.jpg",contactLink:""},{id:6,fullName:"Lars S\xf8rby",designation:"Founder",emailAddress:"lars@digiquip.no",mobileNumber:"+47 41339219",image:"team_imgs/lars.jpg",contactLink:"https://outlook-sdf.office.com/bookwithme/user/b65c9380e5e34e97ad39e8386158d7dd@digiquip.no/meetingtype/SVRwCe7HMUGxuT6WGxi68g2?anonymous&ep=mcard"},{id:7,fullName:"Andreas Lydersen",designation:"CEO",emailAddress:"andreas@digiquip.no",mobileNumber:"+47 97599799",image:"team_imgs/andreas.jpg",contactLink:"https://outlook.office.com/bookwithme/user/9f93e8df70fe42af9b51c1a8c7dc998a@digiquip.no?anonymous&ep=plink"}]};var a=i(1989),h=i(4848);function c(){const[t,e]=(0,r.useState)([]);return(0,r.useEffect)((()=>{e(l.teamDataSource)}),[]),(0,h.jsx)("section",{className:"ourteamsec",children:(0,h.jsxs)("div",{className:"container",children:[(0,h.jsx)("div",{className:"row",children:(0,h.jsx)("div",{className:(0,s.A)("col col--12"),children:(0,h.jsxs)("h1",{className:"section-title",children:[" ",(0,h.jsx)(o.A,{children:"aboutus.team.title"}),(0,h.jsx)("span",{className:"orange",children:"."})]})})}),(0,h.jsx)("div",{className:"team-row",children:t&&t?.map((t=>(0,h.jsx)("div",{className:"team-item margin-bottom--lg",children:(0,h.jsxs)("div",{className:"team-member text--center",children:[(0,h.jsx)("div",{className:"team-img",children:(0,h.jsx)(a.A,{Img:t.image,width:"",height:"",alt:""})}),(0,h.jsxs)("div",{className:"team-details",children:[(0,h.jsx)("h6",{className:"team-title",children:t.fullName}),(0,h.jsx)("p",{children:t.designation}),(0,h.jsxs)("div",{className:"detail-email",children:[(0,h.jsxs)("a",{href:`mailto: ${t.emailAddress}`,children:[(0,h.jsx)("img",{src:"img/email-icon.svg",alt:""}),t.emailAddress]}),(0,h.jsxs)("a",{href:`tel: ${t.mobileNumber}`,children:[(0,h.jsx)("img",{src:"img/call-icon.svg",alt:""}),t.mobileNumber]})]}),""!=t.contactLink?(0,h.jsxs)("a",{href:`${t.contactLink}`,target:"_blank",className:"btn-book",title:"book-meeting",children:[" ",(0,h.jsx)(o.A,{children:"aboutus.team.button_lavel"})," "]}):""]})]})},t.id)))})]})})}function d(){return(0,h.jsx)("section",{className:"aboutus-banner",children:(0,h.jsxs)("div",{className:(0,s.A)("hero hero--primary heroBanner"),children:[(0,h.jsxs)("div",{className:"container",children:[(0,h.jsxs)("h1",{className:"section-title",children:[(0,h.jsx)(o.A,{children:"aboutus.banner.title1"}),(0,h.jsx)("span",{className:"orange",children:"."})]}),(0,h.jsx)("div",{className:"banner-img",children:(0,h.jsx)("img",{src:"img/about_us_image01.webp"})}),(0,h.jsxs)("div",{className:"row",children:[(0,h.jsx)("div",{className:(0,s.A)("col col--6"),children:(0,h.jsx)("h3",{children:(0,h.jsx)(o.A,{children:"aboutus.banner.title2"})})}),(0,h.jsxs)("div",{className:(0,s.A)("col col--6"),children:[(0,h.jsx)("p",{children:(0,h.jsx)(o.A,{children:"aboutus.banner.arg1"})}),(0,h.jsx)("p",{children:(0,h.jsx)(o.A,{children:"aboutus.banner.arg2"})}),(0,h.jsx)("p",{children:(0,h.jsx)(o.A,{children:"aboutus.banner.arg3"})})]})]})]}),(0,h.jsx)("span",{className:"bg"})]})})}function u(){return(0,h.jsx)("section",{className:"about-contact section-pd",children:(0,h.jsx)("div",{className:"container",children:(0,h.jsx)("div",{className:"home-contact-img",children:(0,h.jsx)("img",{src:"img/home-contact.webp"})})})})}function m(){return(0,r.useEffect)((()=>{let t=document.querySelector(".navbar");return t.classList.add("white-header"),()=>{t.classList.remove("white-header")}}),[]),(0,h.jsxs)(n.A,{children:[(0,h.jsx)(c,{}),(0,h.jsx)(d,{}),(0,h.jsx)(u,{})]})}},8133:(t,e,i)=>{i.d(e,{iE:()=>g});var s=i(4848),n="undefined"!=typeof window&&new class{constructor(){this.raf=t=>{requestAnimationFrame(this.raf);const e=t-this.now;this.now=t;for(let i=0;i<this.callbacks.length;i++)this.callbacks[i].callback(t,e)},this.callbacks=[],this.now=performance.now(),requestAnimationFrame(this.raf)}add(t,e=0){return this.callbacks.push({callback:t,priority:e}),this.callbacks.sort(((t,e)=>t.priority-e.priority)),()=>this.remove(t)}remove(t){this.callbacks=this.callbacks.filter((({callback:e})=>t!==e))}};function o(t,e,i){return Math.max(t,Math.min(e,i))}class r{constructor(){this.isRunning=!1,this.value=0,this.from=0,this.to=0,this.currentTime=0}advance(t){var e;if(!this.isRunning)return;let i=!1;if(this.duration&&this.easing){this.currentTime+=t;const e=o(0,this.currentTime/this.duration,1);i=e>=1;const s=i?1:this.easing(e);this.value=this.from+(this.to-this.from)*s}else this.lerp?(this.value=function(t,e,i,s){return function(t,e,i){return(1-i)*t+i*e}(t,e,1-Math.exp(-i*s))}(this.value,this.to,60*this.lerp,t),Math.round(this.value)===this.to&&(this.value=this.to,i=!0)):(this.value=this.to,i=!0);i&&this.stop(),null===(e=this.onUpdate)||void 0===e||e.call(this,this.value,i)}stop(){this.isRunning=!1}fromTo(t,e,{lerp:i,duration:s,easing:n,onStart:o,onUpdate:r}){this.from=this.value=t,this.to=e,this.lerp=i,this.duration=s,this.easing=n,this.currentTime=0,this.isRunning=!0,null==o||o(),this.onUpdate=r}}class l{constructor(t,e,{autoResize:i=!0,debounce:s=250}={}){this.wrapper=t,this.content=e,this.width=0,this.height=0,this.scrollHeight=0,this.scrollWidth=0,this.resize=()=>{this.onWrapperResize(),this.onContentResize()},this.onWrapperResize=()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)},this.onContentResize=()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)},i&&(this.debouncedResize=function(t,e){let i;return function(...s){let n=this;clearTimeout(i),i=setTimeout((()=>{i=void 0,t.apply(n,s)}),e)}}(this.resize,s),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize,!1):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var t,e;null===(t=this.wrapperResizeObserver)||void 0===t||t.disconnect(),null===(e=this.contentResizeObserver)||void 0===e||e.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize,!1)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}}class a{constructor(){this.events={}}emit(t,...e){var i;let s=this.events[t]||[];for(let n=0,o=s.length;n<o;n++)null===(i=s[n])||void 0===i||i.call(s,...e)}on(t,e){var i;return(null===(i=this.events[t])||void 0===i?void 0:i.push(e))||(this.events[t]=[e]),()=>{var i;this.events[t]=null===(i=this.events[t])||void 0===i?void 0:i.filter((t=>e!==t))}}off(t,e){var i;this.events[t]=null===(i=this.events[t])||void 0===i?void 0:i.filter((t=>e!==t))}destroy(){this.events={}}}const h=100/6,c={passive:!1};class d{constructor(t,e={wheelMultiplier:1,touchMultiplier:1}){this.element=t,this.options=e,this.touchStart={x:0,y:0},this.lastDelta={x:0,y:0},this.window={width:0,height:0},this.emitter=new a,this.onTouchStart=t=>{const{clientX:e,clientY:i}=t.targetTouches?t.targetTouches[0]:t;this.touchStart.x=e,this.touchStart.y=i,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:t})},this.onTouchMove=t=>{const{clientX:e,clientY:i}=t.targetTouches?t.targetTouches[0]:t,s=-(e-this.touchStart.x)*this.options.touchMultiplier,n=-(i-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=i,this.lastDelta={x:s,y:n},this.emitter.emit("scroll",{deltaX:s,deltaY:n,event:t})},this.onTouchEnd=t=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:t})},this.onWheel=t=>{let{deltaX:e,deltaY:i,deltaMode:s}=t;e*=1===s?h:2===s?this.window.width:1,i*=1===s?h:2===s?this.window.height:1,e*=this.options.wheelMultiplier,i*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:i,event:t})},this.onWindowResize=()=>{this.window={width:window.innerWidth,height:window.innerHeight}},window.addEventListener("resize",this.onWindowResize,!1),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,c),this.element.addEventListener("touchstart",this.onTouchStart,c),this.element.addEventListener("touchmove",this.onTouchMove,c),this.element.addEventListener("touchend",this.onTouchEnd,c)}on(t,e){return this.emitter.on(t,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize,!1),this.element.removeEventListener("wheel",this.onWheel,c),this.element.removeEventListener("touchstart",this.onTouchStart,c),this.element.removeEventListener("touchmove",this.onTouchMove,c),this.element.removeEventListener("touchend",this.onTouchEnd,c)}}class u{constructor({wrapper:t=window,content:e=document.documentElement,eventsTarget:i=t,smoothWheel:s=!0,syncTouch:n=!1,syncTouchLerp:o=.075,touchInertiaMultiplier:h=35,duration:c,easing:u=t=>Math.min(1,1.001-Math.pow(2,-10*t)),lerp:m=.1,infinite:p=!1,orientation:v="vertical",gestureOrientation:g="vertical",touchMultiplier:f=1,wheelMultiplier:b=1,autoResize:w=!0,prevent:S,virtualScroll:x,__experimental__naiveDimensions:y=!1}={}){this._isScrolling=!1,this._isStopped=!1,this._isLocked=!1,this._preventNextNativeScrollEvent=!1,this._resetVelocityTimeout=null,this.time=0,this.userData={},this.lastVelocity=0,this.velocity=0,this.direction=0,this.animate=new r,this.emitter=new a,this.onPointerDown=t=>{1===t.button&&this.reset()},this.onVirtualScroll=t=>{if("function"==typeof this.options.virtualScroll&&!1===this.options.virtualScroll(t))return;const{deltaX:e,deltaY:i,event:s}=t;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:i,event:s}),s.ctrlKey)return;const n=s.type.includes("touch"),o=s.type.includes("wheel");if(this.isTouching="touchstart"===s.type||"touchmove"===s.type,this.options.syncTouch&&n&&"touchstart"===s.type&&!this.isStopped&&!this.isLocked)return void this.reset();const r=0===e&&0===i,l="vertical"===this.options.gestureOrientation&&0===i||"horizontal"===this.options.gestureOrientation&&0===e;if(r||l)return;let a=s.composedPath();a=a.slice(0,a.indexOf(this.rootElement));const h=this.options.prevent;if(a.find((t=>{var e,i,s,r,l;return t instanceof HTMLElement&&("function"==typeof h&&(null==h?void 0:h(t))||(null===(e=t.hasAttribute)||void 0===e?void 0:e.call(t,"data-lenis-prevent"))||n&&(null===(i=t.hasAttribute)||void 0===i?void 0:i.call(t,"data-lenis-prevent-touch"))||o&&(null===(s=t.hasAttribute)||void 0===s?void 0:s.call(t,"data-lenis-prevent-wheel"))||(null===(r=t.classList)||void 0===r?void 0:r.contains("lenis"))&&!(null===(l=t.classList)||void 0===l?void 0:l.contains("lenis-stopped")))})))return;if(this.isStopped||this.isLocked)return void s.preventDefault();if(!(this.options.syncTouch&&n||this.options.smoothWheel&&o))return this.isScrolling="native",void this.animate.stop();s.preventDefault();let c=i;"both"===this.options.gestureOrientation?c=Math.abs(i)>Math.abs(e)?i:e:"horizontal"===this.options.gestureOrientation&&(c=e);const d=n&&this.options.syncTouch,u=n&&"touchend"===s.type&&Math.abs(c)>5;u&&(c=this.velocity*this.options.touchInertiaMultiplier),this.scrollTo(this.targetScroll+c,Object.assign({programmatic:!1},d?{lerp:u?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}))},this.onNativeScroll=()=>{if(null!==this._resetVelocityTimeout&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent)this._preventNextNativeScrollEvent=!1;else if(!1===this.isScrolling||"native"===this.isScrolling){const t=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-t,this.direction=Math.sign(this.animatedScroll-t),this.isScrolling="native",this.emit(),0!==this.velocity&&(this._resetVelocityTimeout=setTimeout((()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()}),400))}},window.lenisVersion="1.1.13",t&&t!==document.documentElement&&t!==document.body||(t=window),this.options={wrapper:t,content:e,eventsTarget:i,smoothWheel:s,syncTouch:n,syncTouchLerp:o,touchInertiaMultiplier:h,duration:c,easing:u,lerp:m,infinite:p,gestureOrientation:g,orientation:v,touchMultiplier:f,wheelMultiplier:b,autoResize:w,prevent:S,virtualScroll:x,__experimental__naiveDimensions:y},this.dimensions=new l(t,e,{autoResize:w}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown,!1),this.virtualScroll=new d(i,{touchMultiplier:f,wheelMultiplier:b}),this.virtualScroll.on("scroll",this.onVirtualScroll)}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown,!1),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName()}on(t,e){return this.emitter.on(t,e)}off(t,e){return this.emitter.off(t,e)}setScroll(t){this.isHorizontal?this.rootElement.scrollLeft=t:this.rootElement.scrollTop=t}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){this.isStopped&&(this.isStopped=!1,this.reset())}stop(){this.isStopped||(this.isStopped=!0,this.animate.stop(),this.reset())}raf(t){const e=t-(this.time||t);this.time=t,this.animate.advance(.001*e)}scrollTo(t,{offset:e=0,immediate:i=!1,lock:s=!1,duration:n=this.options.duration,easing:r=this.options.easing,lerp:l=this.options.lerp,onStart:a,onComplete:h,force:c=!1,programmatic:d=!0,userData:u}={}){if(!this.isStopped&&!this.isLocked||c){if("string"==typeof t&&["top","left","start"].includes(t))t=0;else if("string"==typeof t&&["bottom","right","end"].includes(t))t=this.limit;else{let i;if("string"==typeof t?i=document.querySelector(t):t instanceof HTMLElement&&(null==t?void 0:t.nodeType)&&(i=t),i){if(this.options.wrapper!==window){const t=this.rootElement.getBoundingClientRect();e-=this.isHorizontal?t.left:t.top}const s=i.getBoundingClientRect();t=(this.isHorizontal?s.left:s.top)+this.animatedScroll}}if("number"==typeof t){if(t+=e,t=Math.round(t),this.options.infinite?d&&(this.targetScroll=this.animatedScroll=this.scroll):t=o(0,t,this.limit),t===this.targetScroll)return null==a||a(this),void(null==h||h(this));if(this.userData=null!=u?u:{},i)return this.animatedScroll=this.targetScroll=t,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),null==h||h(this),void(this.userData={});d||(this.targetScroll=t),this.animate.fromTo(this.animatedScroll,t,{duration:n,easing:r,lerp:l,onStart:()=>{s&&(this.isLocked=!0),this.isScrolling="smooth",null==a||a(this)},onUpdate:(t,e)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=t-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=t,this.setScroll(this.scroll),d&&(this.targetScroll=t),e||this.emit(),e&&(this.reset(),this.emit(),null==h||h(this),this.userData={},this.preventNextNativeScrollEvent())}})}}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame((()=>{this._preventNextNativeScrollEvent=!1}))}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.__experimental__naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return"horizontal"===this.options.orientation}get actualScroll(){return this.isHorizontal?this.rootElement.scrollLeft:this.rootElement.scrollTop}get scroll(){return this.options.infinite?function(t,e){return(t%e+e)%e}(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return 0===this.limit?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(t){this._isScrolling!==t&&(this._isScrolling=t,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(t){this._isStopped!==t&&(this._isStopped=t,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(t){this._isLocked!==t&&(this._isLocked=t,this.updateClassName())}get isSmooth(){return"smooth"===this.isScrolling}get className(){let t="lenis";return this.isStopped&&(t+=" lenis-stopped"),this.isLocked&&(t+=" lenis-locked"),this.isScrolling&&(t+=" lenis-scrolling"),"smooth"===this.isScrolling&&(t+=" lenis-smooth"),t}updateClassName(){this.cleanUpClassName(),this.rootElement.className=`${this.rootElement.className} ${this.className}`.trim()}cleanUpClassName(){this.rootElement.className=this.rootElement.className.replace(/lenis(-\w+)?/g,"").trim()}}var m=i(6540);const p=(0,m.createContext)(null),v=new class{constructor(t){this.state=t,this.listeners=[]}set(t){this.state=t;for(let e of this.listeners)e(this.state)}subscribe(t){return this.listeners=[...this.listeners,t],()=>{this.listeners=this.listeners.filter((e=>e!==t))}}get(){return this.state}}(null);const g=(0,m.forwardRef)((({children:t,root:e=!1,options:i={},autoRaf:o=!0,rafPriority:r=0,className:l,props:a},h)=>{const c=(0,m.useRef)(null),d=(0,m.useRef)(null),[g,f]=(0,m.useState)(void 0);(0,m.useImperativeHandle)(h,(()=>({wrapper:c.current,content:d.current,lenis:g})),[g]),(0,m.useEffect)((()=>{const t=new u(Object.assign(Object.assign({},i),!e&&{wrapper:c.current,content:d.current}));return f(t),()=>{t.destroy(),f(void 0)}}),[e,JSON.stringify(i)]),(0,m.useEffect)((()=>{if(g&&o)return n.add((t=>g.raf(t)),r)}),[g,o,r]);const b=(0,m.useRef)([]),w=(0,m.useCallback)(((t,e)=>{b.current.push({callback:t,priority:e}),b.current.sort(((t,e)=>t.priority-e.priority))}),[]),S=(0,m.useCallback)((t=>{b.current=b.current.filter((e=>e.callback!==t))}),[]);return(0,m.useEffect)((()=>{if(e&&g)return v.set({lenis:g,addCallback:w,removeCallback:S}),()=>v.set(null)}),[e,g,w,S]),(0,m.useEffect)((()=>{if(!g)return;const t=t=>{for(let e=0;e<b.current.length;e++)b.current[e].callback(t)};return g.on("scroll",t),()=>{g.off("scroll",t)}}),[g]),(0,s.jsx)(p.Provider,{value:{lenis:g,addCallback:w,removeCallback:S},children:e?t:(0,s.jsx)("div",Object.assign({ref:c,className:l},a,{children:(0,s.jsx)("div",{ref:d,children:t})}))})}))}}]);