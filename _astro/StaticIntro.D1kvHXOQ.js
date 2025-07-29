import{d as r,A as i,y as l}from"./hooks.module.BdUF0wFT.js";import{l as p}from"./lottie.gPbTJSkg.js";import{u as e}from"./jsxRuntime.module.DISRiUsw.js";import"./preact.module.BZCTi7yd.js";function d(){const[t,n]=r("/"),a=i(null);return l(()=>{typeof window<"u"&&(n(window.location.pathname),p.loadAnimation({container:a.current,renderer:"svg",loop:!0,autoplay:!0,path:"/lottie/Tamashi.json"}))},[]),e("div",{className:"aspect-ratio-container",children:[e("div",{className:"typing-wrapper centered shift-left",style:{display:"flex",alignItems:"center",gap:"1.4rem",flexWrap:"wrap",justifyContent:"center",textAlign:"left"},children:[e("div",{ref:a,style:{width:"min(60vw, 315px)",height:"min(60vw, 315px)",flexShrink:0}}),e("div",{style:{maxWidth:"700px",padding:"0.7rem"},children:[e("h1",{className:"main-title",style:{fontSize:"clamp(1.2rem, 2.8vw, 2.1rem)"},children:"Support corner."}),e("p",{className:"subtitle",style:{color:"#ccc",lineHeight:"1.5",fontSize:"clamp(0.7rem, 1.75vw, 1rem)"},children:["Projects built during my personal time and made available as open-access.",e("br",{}),"Your support through donations is deeply appreciated and helps keep them free.",e("br",{}),"You may donate via my"," ",e("a",{href:"https://github.com/aurumz-rgb",target:"_blank",rel:"noopener noreferrer",style:{color:"#f2855d",textDecoration:"underline"},children:"GitHub"}),"."]})]})]}),e("nav",{className:"nav-panel active",id:"nav-panel",children:[e("a",{href:"/",className:`nav-link ${t==="/"?"active":""}`,children:"Main Page"}),e("a",{href:"/projects",className:`nav-link ${t==="/projects"?"active":""}`,children:"Projects"}),e("a",{href:"/support",className:`nav-link ${t==="/support"?"active":""}`,children:"Support"}),e("a",{href:"/dev",className:`nav-link ${t==="/dev"?"active":""}`,children:"Dev"})]}),e("style",{children:`
        /* Small phones */
        @media (max-width: 480px) {
          .typing-wrapper {
            flex-direction: column !important;
            text-align: center !important;
            gap: 1rem !important;
          }
          .nav-panel {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 0.5rem;
            font-size: 0.9rem;
          }
        }

        /* Tablets */
        @media (min-width: 481px) and (max-width: 768px) {
          .typing-wrapper {
            justify-content: center !important;
            text-align: center !important;
          }
          .nav-panel {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 1rem;
          }
        }

        /* Small laptops */
        @media (min-width: 769px) and (max-width: 1024px) {
          .typing-wrapper {
            justify-content: flex-start;
          }
          .nav-panel {
            display: flex;
            justify-content: flex-start;
            gap: 1.2rem;
          }
        }

        /* Large screens */
        @media (min-width: 1440px) {
          .typing-wrapper {
            gap: 2.5rem !important;
          }
          .nav-panel {
            font-size: 1.2rem;
            gap: 2rem;
          }
        }
      `})]})}export{d as default};
