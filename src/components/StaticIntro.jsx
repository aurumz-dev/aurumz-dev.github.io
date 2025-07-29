import { useState, useEffect, useRef } from 'preact/hooks';
import lottie from 'lottie-web';

export default function StaticIntro() {
  const [currentPath, setCurrentPath] = useState('/');
  const lottieContainer = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentPath(window.location.pathname);

      lottie.loadAnimation({
        container: lottieContainer.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: '/lottie/Tamashi.json',
      });
    }
  }, []);

  return (
    <div className="aspect-ratio-container">
      <div
        className="typing-wrapper centered shift-left"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1.4rem', // reduced
          flexWrap: 'wrap',
          justifyContent: 'center',
          textAlign: 'left',
        }}
      >
        {/* Lottie sticker */}
        <div
          ref={lottieContainer}
          style={{
            width: 'min(60vw, 315px)', // reduced from 450px
            height: 'min(60vw, 315px)',
            flexShrink: 0,
          }}
        ></div>

        {/* Text section */}
        <div style={{ maxWidth: '700px', padding: '0.7rem' }}>
          <h1
            className="main-title"
            style={{
              fontSize: 'clamp(1.2rem, 2.8vw, 2.1rem)', // reduced ~30%
            }}
          >
            Support corner.
          </h1>
          <p
            className="subtitle"
            style={{
              color: '#ccc',
              lineHeight: '1.5', // reduced
              fontSize: 'clamp(0.7rem, 1.75vw, 1rem)', // reduced
            }}
          >
            Projects built during my personal time and made available as open-access.
            <br />
            Your support through donations is deeply appreciated and helps keep them free.
            <br />
            You may donate via my{' '}
            <a
              href="https://github.com/aurumz-rgb"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#f2855d', textDecoration: 'underline' }}
            >
              GitHub
            </a>
            .
          </p>
        </div>
      </div>

      {/* Nav Panel */}
      <nav className="nav-panel active" id="nav-panel">
        <a href="/" className={`nav-link ${currentPath === '/' ? 'active' : ''}`}>
          Main Page
        </a>
        <a
          href="/projects"
          className={`nav-link ${currentPath === '/projects' ? 'active' : ''}`}
        >
          Projects
        </a>
        <a
          href="/support"
          className={`nav-link ${currentPath === '/support' ? 'active' : ''}`}
        >
          Support
        </a>
        <a
          href="/dev"
          className={`nav-link ${currentPath === '/dev' ? 'active' : ''}`}
        >
          Dev
        </a>
      </nav>

      <style>{`
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
      `}</style>
    </div>
  );
}
