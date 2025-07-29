import{u as e}from"./jsxRuntime.module.DISRiUsw.js";import{k as t}from"./preact.module.BZCTi7yd.js";function n(){return e(t,{children:[e("footer",{className:"bottom-panel",children:[e("div",{className:"left-side",children:[e("span",{className:"version"}),e("a",{href:"https://github.com/aurumz-dev/aurumz-dev.github.io",target:"_blank",rel:"noopener noreferrer",className:"github-link",children:"GitHub Source Code"})]}),e("div",{className:"right-side",children:["Made with <3 by Aurumz",e("span",{className:"last-update",children:"Last Updated: 2025-07-29"})]})]}),e("style",{children:`
        .bottom-panel {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.8rem 1rem;
          font-size: 0.95rem;
          color: #ccc;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .bottom-panel .left-side,
        .bottom-panel .right-side {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          flex-wrap: wrap;
        }

        .bottom-panel .github-link {
          color: #f2855d;
          text-decoration: underline;
        }

        @media (max-width: 480px) {
          .bottom-panel {
            flex-direction: column;
            text-align: center;
            font-size: 0.85rem;
            gap: 0.7rem;
          }
          .bottom-panel .left-side,
          .bottom-panel .right-side {
            justify-content: center;
          }
        }

        @media (min-width: 481px) and (max-width: 768px) {
          .bottom-panel {
            font-size: 0.9rem;
            gap: 0.6rem;
          }
        }

        @media (min-width: 1440px) {
          .bottom-panel {
            padding: 1rem 2rem;
            font-size: 1.05rem;
          }
        }
      `})]})}export{n as default};
