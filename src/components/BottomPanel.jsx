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
          <span className="last-update">Last Updated: 2025-07-29</span>
        </div>
      </footer>

      <style>{`
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
      `}</style>
    </>
  );
}

