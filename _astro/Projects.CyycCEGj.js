import{d as a,A as i,y as l}from"./hooks.module.BdUF0wFT.js";import{l as o}from"./lottie.gPbTJSkg.js";import{u as e}from"./jsxRuntime.module.DISRiUsw.js";import"./preact.module.BZCTi7yd.js";function d(){const[t,r]=a("/"),n=i(null);return l(()=>{typeof window<"u"&&(r(window.location.pathname),o.loadAnimation({container:n.current,renderer:"svg",loop:!0,autoplay:!0,path:"/lottie/hammy.json"}))},[]),e("div",{className:"aspect-ratio-container",children:[e("div",{className:"typing-wrapper centered shift-left",style:{display:"flex",alignItems:"center",gap:"1.4rem",flexWrap:"wrap",justifyContent:"center",textAlign:"left"},children:[e("div",{ref:n,style:{width:"min(45vw, 240px)",height:"min(45vw, 240px)",flexShrink:0}}),e("div",{style:{maxWidth:"700px",padding:"0.7rem"},children:[e("h1",{className:"main-title",style:{fontSize:"clamp(1.2rem, 2.8vw, 2.1rem)"},children:"Projects Showcase."}),e("p",{className:"subtitle",style:{color:"#ccc",lineHeight:"1.5",fontSize:"clamp(0.7rem, 1.75vw, 1rem)"},children:["A curated list of personal projects built with dedication during free hours.",e("br",{}),"All are accessible online and open-source — feel free to explore or contribute!",e("br",{}),"Check out their repositories on"," ",e("a",{href:"https://github.com/aurumz-rgb",target:"_blank",rel:"noopener noreferrer",style:{color:"#f2855d",textDecoration:"underline"},children:"GitHub"}),"."]})]})]}),e("nav",{className:"nav-panel active",id:"nav-panel",children:[e("a",{href:"/",className:`nav-link ${t==="/"?"active":""}`,children:"Main Page"}),e("a",{href:"/projects",className:`nav-link ${t==="/projects"?"active":""}`,children:"Projects"}),e("a",{href:"/support",className:`nav-link ${t==="/support"?"active":""}`,children:"Support"}),e("a",{href:"/dev",className:`nav-link ${t==="/dev"?"active":""}`,children:"Dev"})]}),e("style",{children:`
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
