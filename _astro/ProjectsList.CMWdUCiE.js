import{u as e}from"./jsxRuntime.module.DISRiUsw.js";import{k as s}from"./preact.module.BZCTi7yd.js";function m({name:i,link:r,description:t,github:o,tags:n=[],backgroundColor:c="#222"}){const a=!!r;return e(s,{children:[e("a",{href:a?r:void 0,target:"_blank",rel:"noopener noreferrer",className:`project-card ${a?"":"disabled"}`,style:{backgroundColor:c,color:"#fff",textDecoration:"none",padding:"1.21rem",borderRadius:"0.805rem",display:"flex",flexDirection:"column",justifyContent:"space-between",transition:"transform 0.2s ease, box-shadow 0.2s ease",...a&&{cursor:"pointer"}},children:[e("h3",{style:{fontSize:"1.127rem",marginBottom:"0.644rem"},children:i})," ",e("p",{style:{fontSize:"0.77rem",lineHeight:"1.4",flexGrow:1},children:t})," ",o&&e("a",{href:o,target:"_blank",rel:"noopener noreferrer",style:{marginTop:"0.575rem",fontSize:"0.92rem",color:"#4d6595",textDecoration:"underline",alignSelf:"flex-start"},children:"GitHub Source"}),n.length>0&&e("div",{className:"project-tags",style:{marginTop:"0.805rem",display:"flex",flexWrap:"wrap",gap:"0.402rem"},children:n.map(d=>e("span",{className:"tag",style:{backgroundColor:"#00000040",color:"#fff",padding:"0.241rem 0.564rem",borderRadius:"999px",fontSize:"0.604rem"},children:d},d))})]}),e("style",{jsx:!0,children:`
        @media (max-width: 768px) {
          .project-card {
            padding: 1rem;
            border-radius: 0.65rem;
          }

          .project-card h3 {
            font-size: 1rem;
          }

          .project-card p {
            font-size: 0.7rem;
          }

          .project-card a {
            font-size: 0.85rem;
          }

          .project-tags .tag {
            font-size: 0.55rem;
            padding: 0.2rem 0.5rem;
          }
        }

        @media (max-width: 480px) {
          .project-card {
            padding: 0.9rem;
          }

          .project-card h3 {
            font-size: 0.94rem;
          }

          .project-card p {
            font-size: 0.65rem;
          }

          .project-card a {
            font-size: 0.8rem;
          }

          .project-tags .tag {
            font-size: 0.5rem;
            padding: 0.18rem 0.45rem;
          }
        }
      `})]})}function f(){return e(s,{children:[e("section",{className:"projects-section",style:{width:"100%",padding:"0 0.651rem",boxSizing:"border-box"},children:e("div",{className:"projects-grid",style:{display:"grid",gap:"0.976rem",gridTemplateColumns:"repeat(auto-fit, minmax(182.28px, 1fr))",width:"100%",maxWidth:"1600px",margin:"0 auto"},children:[{name:"ReviewAid",link:"",description:"An advanced AI-powered tool that rapidly screens and extracts full-text data from multiple research articles, determining inclusion or exclusion based on your research criteria — all in just seconds.",github:"https://github.com/aurumz-dev/reviewaid",tags:["Full-text Screener","Extractor","AI"],backgroundColor:"#00466fff"}].map(({github:r,...t})=>e(m,{...t,github:r},t.name))})}),e("style",{jsx:!0,children:`
        @media (max-width: 1024px) {
          .projects-grid {
            gap: 0.8rem;
            grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
          }
        }

        @media (max-width: 768px) {
          .projects-section {
            padding: 0 1rem;
          }

          .projects-grid {
            gap: 0.7rem;
            grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
          }
        }

        @media (max-width: 480px) {
          .projects-grid {
            gap: 0.6rem;
            grid-template-columns: 1fr;
          }
        }
      `})]})}export{f as default};
