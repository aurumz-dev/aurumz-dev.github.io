import { useState, useEffect } from 'preact/hooks';
import NavPanel from './NavPanel.jsx';
import SocialLinks from './SocialLinks.jsx';

export default function App() {
  const [showUI, setShowUI] = useState(false);
  const [currentPath, setCurrentPath] = useState('/');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentPath(window.location.pathname);
      const timer = setTimeout(() => setShowUI(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const scrollToProjects = () => {
    const section = document.querySelector('.second-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <NavPanel
        currentPath={currentPath}
        className={showUI ? 'active' : ''}
      />

      {showUI && <SocialLinks className="social-links visible" />}

      {showUI && (
        <div
          className="down-arrow visible"
          style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)', // responsive arrow size
            bottom: 'clamp(20px, 8vh, 50px)',  // responsive distance from bottom
          }}
          onClick={scrollToProjects}
          role="button"
          tabIndex={0}
          aria-label="Scroll down to projects"
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') scrollToProjects();
          }}
        >
          ↓
        </div>
      )}

      <style>{`
        .down-arrow {
          position: fixed;
          left: 50%;
          transform: translateX(-50%);
          cursor: pointer;
          color: #f2855d;
          transition: transform 0.3s ease;
          z-index: 20;
        }

        .down-arrow:hover {
          transform: translateX(-50%) scale(1.1);
        }

        @media (max-width: 480px) {
          .down-arrow {
            font-size: 2rem !important;
            bottom: 30px !important;
          }
        }

        @media (min-width: 481px) and (max-width: 768px) {
          .down-arrow {
            font-size: 2.5rem !important;
          }
        }

        @media (min-width: 1440px) {
          .down-arrow {
            font-size: 3.5rem !important;
          }
        }
      `}</style>
    </>
  );
}
