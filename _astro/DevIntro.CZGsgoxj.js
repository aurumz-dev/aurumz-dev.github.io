import{d,A as s,y as a}from"./hooks.module.BdUF0wFT.js";import{u as e}from"./jsxRuntime.module.DISRiUsw.js";import"./preact.module.BZCTi7yd.js";function h(){const[n,o]=d("/"),i=s(null);a(()=>{typeof window<"u"&&o(window.location.pathname)},[]),a(()=>{function t(){if(!i.current)return;const r=i.current.offsetHeight,m=window.innerHeight;r<=m?(document.documentElement.style.overflowY="hidden",document.body.style.overflowY="hidden"):(document.documentElement.style.overflowY="auto",document.body.style.overflowY="auto")}return t(),window.addEventListener("resize",t),()=>{window.removeEventListener("resize",t),document.documentElement.style.overflowY="auto",document.body.style.overflowY="auto"}},[]);const l=[{name:"ReviewAid [Dev]",link:"https://review-aid-private.onrender.com",description:"An advanced AI-powered tool that rapidly screens and extracts full-text data from multiple research articles, determining inclusion or exclusion based on your research criteria — all in just seconds. Github Source: github.com/aurumz-dev/Review_Aid_private",backgroundColor:"#0087d57b"}];return e("div",{className:"aspect-ratio-container",ref:i,children:[e("div",{className:"typing-wrapper shift-left",style:{textAlign:"left",maxWidth:"min(95vw, 950px)",marginInline:"auto",padding:"0.7rem"},children:[e("h1",{className:"main-title",style:{fontSize:"clamp(1.4rem, 2.8vw, 2.1rem)"},children:"Welcome to the Dev Page."}),e("p",{className:"subtitle",style:{color:"#ccc",lineHeight:"1.05",fontSize:"clamp(0.7rem, 1.75vw, 0.91rem)"},children:["This is the Developer's corner. ",e("br",{}),"Here I share my private projects, beta-test Versions of My Projects."]})]}),e("section",{id:"third-section",style:{maxWidth:"min(95vw, 900px)",margin:"1.4rem auto",padding:"0 0.7rem"},children:e("div",{style:{display:"grid",gap:"1.05rem",gridTemplateColumns:"repeat(auto-fit, minmax(175px, 1fr))"},children:l.map(t=>e("div",{className:"project-card",style:{backgroundColor:t.backgroundColor,padding:"1.05rem",borderRadius:"0.7rem",boxShadow:"0 5.6px 14px rgba(0,0,0,0.1)",color:"white",transition:"transform 0.3s ease"},onMouseEnter:r=>r.currentTarget.style.transform="translateY(-4.2px)",onMouseLeave:r=>r.currentTarget.style.transform="translateY(0)",children:[e("h3",{style:{fontSize:"clamp(0.84rem, 1.75vw, 1.05rem)",marginBottom:"0.35rem"},children:t.name}),e("p",{style:{fontSize:"clamp(0.63rem, 1.4vw, 0.7rem)",marginBottom:"0.7rem"},children:t.description}),e("a",{href:t.link,target:"_blank",rel:"noopener noreferrer",style:{color:"white",fontWeight:"bold",textDecoration:"none"},children:"Visit"})]},t.name))})}),e("nav",{className:"nav-panel active",id:"nav-panel",children:[e("a",{href:"/",className:`nav-link ${n==="/"?"active":""}`,children:"Main Page"}),e("a",{href:"/projects",className:`nav-link ${n==="/projects"?"active":""}`,children:"Projects"}),e("a",{href:"/support",className:`nav-link ${n==="/support"?"active":""}`,children:"Support"}),e("a",{href:"/dev",className:`nav-link ${n==="/dev"?"active":""}`,children:"Dev"})]}),e("style",{children:`
        /* Phones */
        @media (max-width: 480px) {
          .typing-wrapper {
            text-align: center !important;
            padding: 1rem !important;
          }
          #third-section > div {
            grid-template-columns: 1fr !important;
          }
          .project-card {
            padding: 0.9rem !important;
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
            text-align: center !important;
          }
          #third-section > div {
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)) !important;
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
            text-align: left !important;
          }
          #third-section > div {
            grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)) !important;
          }
          .nav-panel {
            display: flex;
            justify-content: flex-start;
            gap: 1.2rem;
          }
        }

        /* Large screens */
        @media (min-width: 1440px) {
          #third-section > div {
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)) !important;
            gap: 1.5rem !important;
          }
          .nav-panel {
            font-size: 1.2rem;
            gap: 2rem;
          }
        }
      `})]})}export{h as default};
