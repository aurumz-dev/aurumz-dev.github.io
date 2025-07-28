import{A as T,d as k,y as L}from"./hooks.module.B6kYfvcd.js";import{u as l}from"./jsxRuntime.module.BLZlUNXw.js";import{k as A}from"./preact.module.BYSHj7yn.js";const V=t=>Array.isArray(t),_=t=>V(t)?t:[t];let X=function(t){let e=function(o){return _(o).forEach(h=>c.set(Symbol(h.char?.innerText),r({...h}))),this},s=()=>d().filter(o=>o.typeable),i=function(o,h){let v=[...c.keys()];c.set(v[o],r(h))},r=o=>(o.shouldPauseCursor=function(){return!!(this.typeable||this.cursorable||this.deletable)},o),n=function(){c.forEach(o=>delete o.done)},u=function(){c=new Map,e(t)},a=()=>c,d=()=>Array.from(c.values()),p=o=>c.delete(o),y=()=>{const o=[];for(let[,h]of a())h.done||o.push(h);return o},m=(o=!1)=>o?d():d().filter(h=>!h.done),f=(o,h=!1)=>h?c.delete(o):c.get(o).done=!0,c=new Map;return e(t),{add:e,set:i,wipe:u,done:f,reset:n,destroy:p,getItems:m,getQueue:a,getTypeable:s,getPendingQueueItems:y}};const U="data-typeit-id",g="ti-cursor",Z="END",ee={started:!1,completed:!1,frozen:!1,destroyed:!1},b={breakLines:!0,cursor:{autoPause:!0,autoPauseDelay:500,animation:{frames:[0,0,1].map(t=>({opacity:t})),options:{iterations:1/0,easing:"steps(2, start)",fill:"forwards"}}},cursorChar:"|",cursorSpeed:1e3,deleteSpeed:null,html:!0,lifeLike:!0,loop:!1,loopDelay:750,nextStringDelay:750,speed:100,startDelay:250,startDelete:!1,strings:[],waitUntilVisible:!1,beforeString:()=>{},afterString:()=>{},beforeStep:()=>{},afterStep:()=>{},afterComplete:()=>{}},te=`[${U}]:before {content: '.'; display: inline-block; width: 0; visibility: hidden;}`,N=t=>document.createElement(t),D=t=>document.createTextNode(t),j=(t,e="")=>{let s=N("style");s.id=e,s.appendChild(D(t)),document.head.appendChild(s)},F=t=>(V(t)||(t=[t/2,t/2]),t),R=(t,e)=>Math.abs(Math.random()*(t+e-(t-e))+(t-e));let H=t=>t/2;function se(t){let{speed:e,deleteSpeed:s,lifeLike:i}=t;return s=s!==null?s:e/3,i?[R(e,H(e)),R(s,H(s))]:[e,s]}const O=t=>Array.from(t);let z=t=>([...t.childNodes].forEach(e=>{if(e.nodeValue){[...e.nodeValue].forEach(s=>{e.parentNode.insertBefore(D(s),e)}),e.remove();return}z(e)}),t);const W=t=>{let e=document.implementation.createHTMLDocument();return e.body.innerHTML=t,z(e.body)};function G(t,e=!1,s=!1){let i=t.querySelector(`.${g}`),r=document.createTreeWalker(t,NodeFilter.SHOW_ALL,{acceptNode:a=>{if(i&&s){if(a.classList?.contains(g))return NodeFilter.FILTER_ACCEPT;if(i.contains(a))return NodeFilter.FILTER_REJECT}return a.classList?.contains(g)?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT}}),n,u=[];for(;n=r.nextNode();)n.originalParent||(n.originalParent=n.parentNode),u.push(n);return e?u.reverse():u}function ie(t){return G(W(t))}function re(t,e=!0){return e?ie(t):O(t).map(D)}const ne=({index:t,newIndex:e,queueItems:s,cleanUp:i})=>{for(let r=t+1;r<e+1;r++)i(s[r][0])},J=t=>Number.isInteger(t),$=({queueItems:t,selector:e,cursorPosition:s,to:i})=>{if(J(e))return e*-1;let r=new RegExp(Z,"i").test(i),n=e?[...t].reverse().findIndex(({char:a})=>{let d=a.parentElement,p=d.matches(e);return r&&p?!0:p&&d.firstChild.isSameNode(a)}):-1;n<0&&(n=r?0:t.length-1);let u=r?0:1;return n-s+u},oe=t=>(t.forEach(clearTimeout),[]),P=(t,e)=>new Array(e).fill(t);let C=t=>new Promise(e=>{requestAnimationFrame(async()=>{e(await t())})}),K=t=>t?.getAnimations().find(e=>e.id===t.dataset.tiAnimationId),Y=({cursor:t,frames:e,options:s})=>{let i=t.animate(e,s);return i.pause(),i.id=t.dataset.tiAnimationId,C(()=>{C(()=>{i.play()})}),i},ae=({cursor:t,options:e,cursorOptions:s})=>{if(!t||!s)return;let i=K(t),r;i&&(e.delay=i.effect.getComputedTiming().delay,r=i.currentTime,i.cancel());let n=Y({cursor:t,frames:s.animation.frames,options:e});return r&&(n.currentTime=r),n},B=t=>t.func?.call(null),le=async({index:t,queueItems:e,wait:s,cursor:i,cursorOptions:r})=>{let n=e[t][1],u=[],a=t,d=n,p=()=>d&&!d.delay,y=n.shouldPauseCursor()&&r.autoPause;for(;p();)u.push(d),p()&&a++,d=e[a]?e[a][1]:null;if(u.length)return await C(async()=>{for(let c of u)await B(c)}),a-1;let m=K(i),f;return m&&(f={...m.effect.getComputedTiming(),delay:y?r.autoPauseDelay:0}),await s(async()=>{m&&y&&m.cancel(),await C(()=>{B(n)})},n.delay),await ae({cursor:i,options:f,cursorOptions:r}),t};const ue=(t,e)=>{new IntersectionObserver((i,r)=>{i.forEach(n=>{n.isIntersecting&&(e(),r.unobserve(t))})},{threshold:1}).observe(t)},de=()=>Math.random().toString().substring(2,9),I=t=>"value"in t;let ce=t=>I(t)?O(t.value):G(t,!0).filter(e=>!(e.childNodes.length>0)),w=t=>typeof t=="function"?t():t,q=(t,e=document,s=!1)=>e[`querySelector${s?"All":""}`](t),he=t=>/body/i.test(t?.tagName),pe=(t,e)=>{if(I(t)){t.value=`${t.value}${e.textContent}`;return}e.innerHTML="";let s=he(e.originalParent)?t:e.originalParent||t,i=q("."+g,s)||null;i&&i.parentElement!==s&&(s=i.parentElement),s.insertBefore(e,i)};const me=t=>/<(.+)>(.*?)<\/(.+)>/.test(t.outerHTML),E=(t,e)=>Object.assign({},t,e);let fe=t=>{if(typeof t=="object"){let e={},{frames:s,options:i}=b.cursor.animation;return e.animation=t.animation||{},e.animation.frames=t.animation?.frames||s,e.animation.options=E(i,t.animation?.options||{}),e.autoPause=t.autoPause??b.cursor.autoPause,e.autoPauseDelay=t.autoPauseDelay||b.cursor.autoPauseDelay,e}return t===!0?b.cursor:t};const ge=(t,e)=>{if(!t)return;let s=t.parentNode;(s.childNodes.length>1||s.isSameNode(e)?t:s).remove()},ye=(t,e,s)=>{let i=e[s-1],r=q(`.${g}`,t);t=i?.parentNode||t,t.insertBefore(r,i||null)};function we(t){return typeof t=="string"?q(t):t}let be={"font-family":"","font-weight":"","font-size":"","font-style":"","line-height":"",color:"",transform:"translateX(-.125em)"},xe=(t,e)=>{let i=`${`[${U}='${t}']`} .${g}`,r=getComputedStyle(e),n=Object.entries(be).reduce((u,[a,d])=>`${u} ${a}: var(--ti-cursor-${a}, ${d||r[a]});`,"");j(`${i} { display: inline-block; width: 0; ${n} }`,t)};function Ee(t){return t.replace(/<!--(.+?)-->/g,"").trim().split(/<br(?:\s*?)(?:\/)?>/)}let ve=(t,e,s)=>Math.min(Math.max(e+t,0),s.length),Se=(t,e,s)=>new Promise(i=>{let r=async()=>{await t(),i()};s.push(setTimeout(r,e||0))});class Q{element;timeouts;cursorPosition;predictedCursorPosition;statuses={started:!1,completed:!1,frozen:!1,destroyed:!1,firing:!1};opts;id;queue;cursor;flushCallback=null;unfreeze=()=>{};constructor(e,s={}){this.opts=E(b,s),this.element=we(e),this.timeouts=[],this.cursorPosition=0,this.unfreeze=()=>{},this.predictedCursorPosition=null,this.statuses=E({},ee),this.id=de(),this.queue=X([{delay:this.opts.startDelay}]),this.#v(s),this.cursor=this.#T(),this.element.dataset.typeitId=this.id,j(te),this.opts.strings.length&&this.#E()}go(){return this.statuses.started?this:(this.#f(),this.opts.waitUntilVisible?(ue(this.element,this.#i.bind(this)),this):(this.#i(),this))}destroy(e=!0){this.timeouts=oe(this.timeouts),w(e)&&this.cursor&&this.#c(this.cursor),this.statuses.destroyed=!0}reset(e){!this.is("destroyed")&&this.destroy(),e?(this.queue.wipe(),e(this)):this.queue.reset(),this.cursorPosition=0;for(let s in this.statuses)this.statuses[s]=!1;return this.element[this.#u()?"value":"innerHTML"]="",this}is=function(e){return this.statuses[e]};type(e,s={}){e=w(e);let{instant:i}=s,r=this.#r(s),u=re(e,this.opts.html).map(d=>({func:()=>this.#d(d),char:d,delay:i||me(d)?0:this.#s(),typeable:d.nodeType===Node.TEXT_NODE})),a=[r[0],{func:async()=>await this.opts.beforeString(e,this)},...u,{func:async()=>await this.opts.afterString(e,this)},r[1]];return this.#e(a,s)}break(e={}){return this.#e({func:()=>this.#d(N("BR")),typeable:!0},e)}move(e,s={}){e=w(e);let i=this.#r(s),{instant:r,to:n}=s,u=$({queueItems:this.queue.getTypeable(),selector:e===null?"":e,to:n,cursorPosition:this.#a}),a=u<0?-1:1;return this.predictedCursorPosition=this.#a+u,this.#e([i[0],...P({func:()=>this.#h(a),delay:r?0:this.#s(),cursorable:!0},Math.abs(u)),i[1]],s)}exec(e,s={}){let i=this.#r(s);return this.#e([i[0],{func:()=>e(this)},i[1]],s)}options(e,s={}){return e=w(e),this.#n(e),this.#e({},s)}pause(e,s={}){return this.#e({delay:w(e)},s)}delete(e=null,s={}){e=w(e);let i=this.#r(s),r=e,{instant:n,to:u}=s,a=this.queue.getTypeable(),d=r===null?a.length:J(r)?r:$({queueItems:a,selector:r,cursorPosition:this.#a,to:u});return this.#e([i[0],...P({func:this.#o.bind(this),delay:n?0:this.#s(1),deletable:!0},d),i[1]],s)}freeze(){this.statuses.frozen=!0}flush(e=null){return this.flushCallback=e||this.flushCallback,this.statuses.firing?this:(this.#f(),this.#i(!1).then(()=>{if(this.queue.getPendingQueueItems().length>0)return this.flush();this.flushCallback(),this.flushCallback=null}),this)}getQueue(){return this.queue}getOptions(){return this.opts}updateOptions(e){return this.#n(e)}getElement(){return this.element}empty(e={}){return this.#e({func:this.#w.bind(this)},e)}async#w(){if(this.#u()){this.element.value="";return}this.#t.forEach(this.#c.bind(this))}async#i(e=!0){this.statuses.started=!0,this.statuses.firing=!0;let s=i=>{this.queue.done(i,!e)};try{let i=[...this.queue.getQueue()];for(let n=0;n<i.length;n++){let[u,a]=i[n];if(!a.done){if(!a.deletable||a.deletable&&this.#t.length){let d=await this.#p(n,i);ne({index:n,newIndex:d,queueItems:i,cleanUp:s}),n=d}s(u)}}if(!e)return this.statuses.firing=!1,this;if(this.statuses.completed=!0,this.statuses.firing=!1,await this.opts.afterComplete(this),!this.opts.loop)throw"";let r=this.opts.loopDelay;this.#m(async()=>{await this.#b(r[0]),this.#i()},r[1])}catch{}return this.statuses.firing=!1,this}async#h(e){this.cursorPosition=ve(e,this.cursorPosition,this.#t),ye(this.element,this.#t,this.cursorPosition)}async#b(e){let s=this.#a;s&&await this.#h({value:s});let i=this.#t.map(r=>[Symbol(),{func:this.#o.bind(this),delay:this.#s(1),deletable:!0,shouldPauseCursor:()=>!0}]);for(let r=0;r<i.length;r++)await this.#p(r,i);this.queue.reset(),this.queue.set(0,{delay:e})}#p(e,s){return le({index:e,queueItems:s,wait:this.#m.bind(this),cursor:this.cursor,cursorOptions:this.opts.cursor})}async#m(e,s,i=!1){this.statuses.frozen&&await new Promise(r=>{this.unfreeze=()=>{this.statuses.frozen=!1,r()}}),i||await this.opts.beforeStep(this),await Se(e,s,this.timeouts),i||await this.opts.afterStep(this)}async#f(){if(!this.#u()&&this.cursor&&this.element.appendChild(this.cursor),this.#y){xe(this.id,this.element),this.cursor.dataset.tiAnimationId=this.id;let{animation:e}=this.opts.cursor,{frames:s,options:i}=e;Y({frames:s,cursor:this.cursor,options:{duration:this.opts.cursorSpeed,...i}})}}#u(){return I(this.element)}#e(e,s){return this.queue.add(e),this.#x(s),this}#x(e={}){let s=e.delay;s&&this.queue.add({delay:s})}#r(e={}){return[{func:()=>this.#n(e)},{func:()=>this.#n(this.opts)}]}async#n(e){this.opts=E(this.opts,e)}#E(){let e=this.opts.strings.filter(s=>!!s);e.forEach((s,i)=>{if(this.type(s),i+1===e.length)return;let r=this.opts.breakLines?[{func:()=>this.#d(N("BR")),typeable:!0}]:P({func:this.#o.bind(this),delay:this.#s(1)},this.queue.getTypeable().length);this.#g(r)})}#v=e=>{this.opts.cursor=fe(e.cursor??b.cursor),this.opts.strings=this.#S(_(this.opts.strings)),this.opts=E(this.opts,{html:!this.#l&&this.opts.html,nextStringDelay:F(this.opts.nextStringDelay),loopDelay:F(this.opts.loopDelay)})};#S(e){let s=this.element.innerHTML;return s?(this.element.innerHTML="",this.opts.startDelete?(this.element.innerHTML=s,z(this.element),this.#g(P({func:this.#o.bind(this),delay:this.#s(1),deletable:!0},this.#t.length)),e):Ee(s).concat(e)):e}#T(){if(this.#l)return null;let e=N("span");return e.className=g,this.#y?(e.innerHTML=W(this.opts.cursorChar).innerHTML,e):(e.style.visibility="hidden",e)}#g(e){let s=this.opts.nextStringDelay;this.queue.add([{delay:s[0]},...e,{delay:s[1]}])}#d(e){pe(this.element,e)}#o(){this.#t.length&&(this.#l?this.element.value=this.element.value.slice(0,-1):this.#c(this.#t[this.cursorPosition]))}#c(e){ge(e,this.element)}#s(e=0){return se(this.opts)[e]}get#a(){return this.predictedCursorPosition??this.cursorPosition}get#l(){return I(this.element)}get#y(){return!!this.opts.cursor&&!this.#l}get#t(){return ce(this.element)}}function Te(){return l(A,{children:[l("div",{className:"social-links",style:{display:"flex",gap:"1rem"},role:"navigation","aria-label":"Social links",children:[l("a",{href:"mailto:aurumz.gg@hotmail.com",title:"Email",target:"_blank",rel:"noopener noreferrer","aria-label":"Send email",className:"social-link",children:l("svg",{xmlns:"http://www.w3.org/2000/svg",width:"50",height:"50",viewBox:"0 0 24 24",fill:"none",stroke:"#E9E3DF",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"social-icon",children:[l("path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"}),l("rect",{x:"2",y:"4",width:"20",height:"16",rx:"2"})]})}),l("a",{href:"https://github.com/aurumz-dev",title:"GitHub",target:"_blank",rel:"noopener noreferrer","aria-label":"GitHub profile",className:"social-link",children:l("svg",{xmlns:"http://www.w3.org/2000/svg",width:"45",height:"45",viewBox:"0 0 24 24",fill:"none",stroke:"#E9E3DF",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"social-icon",children:l("path",{d:"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7 A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0 C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7a3.37 3.37 0 0 0-.94 2.59V22Z"})})})]}),l("style",{children:`
        @media (max-width: 480px) {
          .social-links {
            justify-content: center !important;
          }
        }
      `})]})}function Ce({onTypingComplete:t}){const e=T(null),s=T(null),i=T(null),[r,n]=k("/"),[u,a]=k(!1),[d,p]=k(!1),[y,m]=k(!0),f=T(!1);L(()=>{const o=()=>n(window.location.pathname);return o(),window.addEventListener("popstate",o),()=>window.removeEventListener("popstate",o)},[]),L(()=>{if(typeof window>"u"||f.current)return;f.current=!0;const o=setTimeout(()=>{if(!e.current||!s.current)return;async function h(){await new Q(e.current,{speed:30,waitUntilVisible:!0,cursor:!0,afterComplete:async()=>{const v=e.current.querySelector(".ti-cursor");v&&v.remove(),await new Promise(x=>setTimeout(x,1e3)),s.current&&await new Q(s.current,{speed:20,waitUntilVisible:!0,cursor:!0,afterComplete:async()=>{await new Promise(S=>setTimeout(S,2e3)),document.querySelectorAll(".code-tag").forEach(S=>{S.classList.add("slide-left-blur"),setTimeout(()=>S.style.display="none",600)}),i.current&&i.current.classList.add("shift-left");const x=document.getElementById("nav-panel");x&&(x.classList.remove("hidden"),setTimeout(()=>{x.classList.add("active"),r==="/"&&(a(!0),setTimeout(()=>p(!0),300))},50));const M=s.current.querySelector(".ti-cursor");M&&M.remove(),typeof document<"u"&&document.documentElement.classList.remove("lock-scroll"),t&&t()}}).type(`<span class="code-tag">print("</span><span>I<strong style="color:#E9E3DF;">'</strong>m Vihaan<strong style="color:#E9E3DF;">,</strong></span><span class="code-tag">")</span>`).pause(100).break().type('<span class="code-tag">print("</span><span>Also known as Aurumz<strong style="color:#E9E3DF;">.</strong></span><span class="code-tag">")</span>').pause(100).break().type('<span class="code-tag">print("</span><span>A Medical Student <strong style="color:#E9E3DF;"> & </strong> Creator with a keen interest in Developing<strong style="color:#E9E3DF;">,</strong></span><span class="code-tag">")</span>').pause(100).break().type('<span class="code-tag">print("</span><span>Animating <strong style="color:#E9E3DF;"> & </strong> Open-Access<strong style="color:#E9E3DF;">.</strong></span><span class="code-tag">")</span>').go()}}).type('<span class="code-tag">print("</span><span>Hello there!</span><span class="code-tag">")</span>').go()}h()},50);return()=>clearTimeout(o)},[]),L(()=>{if(typeof window>"u"||!u)return;const o=()=>{const h=window.scrollY||window.pageYOffset;m(h<100)};return window.addEventListener("scroll",o,{passive:!0}),()=>window.removeEventListener("scroll",o)},[u]);const c=()=>{const o=document.querySelector(".second-section");o&&o.scrollIntoView({behavior:"smooth"})};return l(A,{children:[l("div",{className:"aspect-ratio-container relative",children:[l("div",{className:"typing-wrapper centered",ref:i,children:[l("h1",{className:"main-title",ref:e}),l("p",{className:"subtitle",ref:s})]}),l("nav",{className:"nav-panel hidden",id:"nav-panel",children:[l("a",{href:"/",className:`nav-link ${r==="/"?"active":""}`,children:"Main Page"}),l("a",{href:"/support",className:`nav-link ${r==="/support"?"active":""}`,children:"Support"}),l("a",{href:"/dev",className:`nav-link ${r==="/dev"?"active":""}`,children:"Dev"})]}),r==="/"&&u&&l(A,{children:[l("div",{className:"socials-container-inside-section",children:l(Te,{})}),l("div",{className:`down-arrow visible ${y?"":"hidden-scroll"}`,onClick:c,role:"button",tabIndex:0,"aria-label":"Scroll down to projects",onKeyDown:o=>{(o.key==="Enter"||o.key===" ")&&c()},children:"↓"})]})]}),r==="/"&&d&&l("footer",{className:"bottom-panel",children:[l("div",{className:"left-side",children:[l("span",{className:"version"}),l("a",{href:"https://github.com/aurumz-dev/aurumz-dev.github.io",target:"_blank",rel:"noopener noreferrer",className:"github-link",children:"GitHub Source Code"})]}),l("div",{className:"right-side",children:["Made with <3 by Aurumz",l("span",{className:"last-update",children:"Last Updated: 2025-07-26"})]})]}),l("style",{children:`
        .bottom-panel {
          position: fixed;
          bottom: 0;
          left: 0;
          width: 100%;
          background-color: #0e0e0e;
          color: #ccc;
          display: flex;
          justify-content: space-between;
          padding: 1rem 2rem;
          font-size: 0.9rem;
          border-top: 1px solid #222;
          user-select: none;
          z-index: 9999;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .bottom-panel .left-side {
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
        }
        .bottom-panel .right-side {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 0.2rem;
          font-weight: 500;
          white-space: nowrap;
        }
        .bottom-panel .github-link {
          color: #4098ff;
          text-decoration: none;
          font-weight: 600;
          transition: color 0.3s ease;
          margin-top: 0.2rem;
        }
        .bottom-panel .github-link:hover,
        .bottom-panel .github-link:focus {
          color: #1a5fcc;
          text-decoration: underline;
        }
        .bottom-panel .version {
          font-weight: 600;
        }
        .bottom-panel .last-update {
          font-size: 0.8rem;
          color: #777;
        }

        /* =============================== */
        /* RESPONSIVE ADJUSTMENTS START HERE */
        /* =============================== */

        /* Very large screens (4K and bigger) */
        @media (min-width: 1920px) {
          .typing-wrapper.centered {
            max-width: 900px;
            padding: 0 2rem;
          }
          .bottom-panel {
            padding: 1rem 4rem;
            font-size: 1rem;
          }
          .down-arrow {
            font-size: 4rem;
            margin-top: 2rem;
          }
        }

        /* Large desktops (1200px - 1919px) */
        @media (min-width: 1200px) and (max-width: 1919px) {
          .typing-wrapper.centered {
            max-width: 800px;
            padding: 0 1.5rem;
          }
          .bottom-panel {
            padding: 1rem 3rem;
            font-size: 0.95rem;
          }
          .down-arrow {
            font-size: 3.5rem;
            margin-top: 1.5rem;
          }
        }

        /* Medium desktops / laptops (992px - 1199px) */
        @media (min-width: 992px) and (max-width: 1199px) {
          .typing-wrapper.centered {
            max-width: 750px;
            padding: 0 1rem;
          }
          .bottom-panel {
            padding: 1rem 2rem;
            font-size: 0.9rem;
          }
          .down-arrow {
            font-size: 3rem;
            margin-top: 1rem;
          }
        }

        /* Tablets (768px - 991px) */
        @media (min-width: 768px) and (max-width: 991px) {
          .typing-wrapper.centered {
            max-width: 95%;
            padding: 0 1rem;
          }
          .bottom-panel {
            flex-direction: column;
            align-items: center;
            text-align: center;
            padding: 1rem 1.5rem;
            font-size: 0.9rem;
          }
          .bottom-panel .right-side {
            align-items: center;
            white-space: normal;
          }
          .down-arrow {
            font-size: 3.5rem;
            margin-top: 1.5rem;
          }
        }

        /* Mobile phones (up to 767px) */
        @media (max-width: 767px) {
          .typing-wrapper.centered {
            max-width: 100%;
            padding: 0 1rem;
          }
          .bottom-panel {
            flex-direction: column;
            align-items: center;
            text-align: center;
            padding: 1rem 1rem;
            font-size: 0.85rem;
          }
          .bottom-panel .right-side {
            align-items: center;
            white-space: normal;
          }
          .down-arrow {
            font-size: 4rem;
            margin-top: 2rem;
          }
        }

        /* Extra small devices (up to 480px) */
        @media (max-width: 480px) {
          .typing-wrapper.centered {
            padding: 0 0.5rem;
          }
          .bottom-panel {
            padding: 0.75rem 0.5rem;
            font-size: 0.8rem;
          }
          .down-arrow {
            font-size: 3rem;
            margin-top: 1rem;
          }
        }
      `})]})}export{Ce as default};
