export default function BottomPanel() {
  return (
    <>
      <footer className="bottom-panel">
        <div className="left-side">
          <span className="version"></span>
          <a
            href="https://github.com/aurumz-dev/aurumz-dev.github.io"
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
          >
            GitHub Source Code
          </a>
        </div>
        <div className="right-side">
          Made with &lt;3 by Aurumz
          <span className="last-update">Last Update: 2025-07-24</span>
        </div>

        <style>{`
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

          @media (max-width: 600px) {
            .bottom-panel {
              flex-direction: column;
              align-items: center;
              text-align: center;
            }
            .bottom-panel .right-side {
              align-items: center;
              white-space: normal;
            }
          }
        `}</style>
      </footer>
    </>
  );
}
