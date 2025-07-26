import { useState, useEffect, useRef } from 'preact/hooks';
import lottie from 'lottie-web';

export default function StaticIntro() {
  const [currentPath, setCurrentPath] = useState('/');
  const lottieContainer = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentPath(window.location.pathname);

      // Load Lottie animation
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
          gap: '2rem',
          flexWrap: 'wrap',
          justifyContent: 'center', // center for small screens
          textAlign: 'left',
        }}
      >
        {/* Lottie sticker on the left */}
        <div
          ref={lottieContainer}
          style={{
            width: 'min(90vw, 450px)',
            height: 'min(90vw, 450px)',
            flexShrink: 0,
          }}
        ></div>

        {/* Text content */}
        <div style={{ maxWidth: '700px', padding: '1rem' }}>
          <h1
            className="main-title"
            style={{
              fontSize: 'clamp(1.8rem, 4vw, 3rem)',
            }}
          >
            Support corner.
          </h1>
          <p
            className="subtitle"
            style={{
              color: '#ccc',
              lineHeight: '1.75',
              fontSize: 'clamp(1rem, 2.5vw, 1.5rem)',
            }}
          >
            Projects built during my personal time and made available as open-access.<br />
            Your support through donations is deeply appreciated and helps keep them free.<br />
            You may donate via my{' '}
            <a
              href="https://github.com/aurumz-dev"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#f26c5d', textDecoration: 'underline' }}
            >
              GitHub
            </a>
            .
          </p>
        </div>
      </div>

      <nav className="nav-panel active" id="nav-panel">
        <a href="/" className={`nav-link ${currentPath === '/' ? 'active' : ''}`}>
          Main Page
        </a>
        <a
          href="/support"
          className={`nav-link ${currentPath === '/support' ? 'active' : ''}`}
        >
          Support
        </a>
        <a href="/dev" className={`nav-link ${currentPath === '/dev' ? 'active' : ''}`}>
          Dev
        </a>
      </nav>
    </div>
  );
}
