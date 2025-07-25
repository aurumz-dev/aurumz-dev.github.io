import { useEffect, useRef, useState } from 'preact/hooks';
import TypeIt from 'typeit';
import SocialLinks from './SocialLinks';

export default function TypingIntro({ onTypingComplete }) {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const wrapperRef = useRef(null);
  const [currentPath, setCurrentPath] = useState('/');
  const [showExtras, setShowExtras] = useState(false); // nav, socials, arrow
  const [showBottomPanel, setShowBottomPanel] = useState(false); // separate for bottom panel
  const [arrowVisible, setArrowVisible] = useState(true);
  const typingStarted = useRef(false);

  // Always update path so nav stays highlighted correctly
  useEffect(() => {
    const updatePath = () => setCurrentPath(window.location.pathname);
    updatePath();
    window.addEventListener('popstate', updatePath);
    return () => window.removeEventListener('popstate', updatePath);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (typingStarted.current) return;
    typingStarted.current = true;

    const timeout = setTimeout(() => {
      if (!titleRef.current || !subtitleRef.current) return;

      async function runTyping() {
        await new TypeIt(titleRef.current, {
          speed: 30,
          waitUntilVisible: true,
          cursor: true,
          afterComplete: async () => {
            const cursor = titleRef.current.querySelector('.ti-cursor');
            if (cursor) cursor.remove();

            await new Promise(res => setTimeout(res, 1000));

            if (!subtitleRef.current) return;

            await new TypeIt(subtitleRef.current, {
              speed: 20,
              waitUntilVisible: true,
              cursor: true,
              afterComplete: async () => {
                await new Promise(res => setTimeout(res, 2000));

                document.querySelectorAll('.code-tag').forEach(el => {
                  el.classList.add('slide-left-blur');
                  setTimeout(() => (el.style.display = 'none'), 600);
                });

                if (wrapperRef.current) wrapperRef.current.classList.add('shift-left');

                const navPanel = document.getElementById('nav-panel');
                if (navPanel) {
                  navPanel.classList.remove('hidden');
                  setTimeout(() => {
                    navPanel.classList.add('active');
                    if (currentPath === '/') {
                      setShowExtras(true); // show nav, socials, arrow here
                      setTimeout(() => setShowBottomPanel(true), 300); // delay bottom panel show a bit
                    }
                  }, 50);
                }

                const subCursor = subtitleRef.current.querySelector('.ti-cursor');
                if (subCursor) subCursor.remove();

                if (typeof document !== 'undefined') {
                  document.documentElement.classList.remove('lock-scroll');
                }

                if (onTypingComplete) onTypingComplete();
              }
            })
              .type(`<span class="code-tag">print("</span><span>I<strong style="color:#E9E3DF;">'</strong>m Vihaan<strong style="color:#E9E3DF;">,</strong></span><span class="code-tag">")</span>`)
              .pause(100).break()
              .type(`<span class="code-tag">print("</span><span>Also known as Aurumz<strong style="color:#E9E3DF;">.</strong></span><span class="code-tag">")</span>`)
              .pause(100).break()
              .type(`<span class="code-tag">print("</span><span>A Medical Student <strong style="color:#E9E3DF;"> & </strong> Creator with a keen interest in Developing<strong style="color:#E9E3DF;">,</strong></span><span class="code-tag">")</span>`)
              .pause(100).break()
              .type(`<span class="code-tag">print("</span><span>Animating <strong style="color:#E9E3DF;"> & </strong> Open-Access<strong style="color:#E9E3DF;">.</strong></span><span class="code-tag">")</span>`)
              .go();
          }
        })
          .type(`<span class="code-tag">print("</span><span>Hello there!</span><span class="code-tag">")</span>`)
          .go();
      }

      runTyping();
    }, 50);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (!showExtras) return;

    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      setArrowVisible(scrollY < 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showExtras]);

  const scrollToProjects = () => {
    const section = document.querySelector('.second-section');
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div className="aspect-ratio-container relative">
        <div className="typing-wrapper centered" ref={wrapperRef}>
          <h1 className="main-title" ref={titleRef}></h1>
          <p className="subtitle" ref={subtitleRef}></p>
        </div>

        <nav className="nav-panel hidden" id="nav-panel">
          <a href="/" className={`nav-link ${currentPath === '/' ? 'active' : ''}`}>Main Page</a>
          <a href="/support" className={`nav-link ${currentPath === '/support' ? 'active' : ''}`}>Support</a>
          <a href="/dev" className={`nav-link ${currentPath === '/dev' ? 'active' : ''}`}>Dev</a>
        </nav>

        {currentPath === '/' && showExtras && (
          <>
            <div className="socials-container-inside-section">
              <SocialLinks />
            </div>

            <div
              className={`down-arrow visible ${arrowVisible ? '' : 'hidden-scroll'}`}
              onClick={scrollToProjects}
              role="button"
              tabIndex={0}
              aria-label="Scroll down to projects"
              onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') scrollToProjects(); }}
            >
              ↓
            </div>
          </>
        )}
      </div>

      {currentPath === '/' && showBottomPanel && (
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
            <span className="last-update">Last Updated: 2025-07-26</span>
          </div>
        </footer>
      )}

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

        /* =============================== */
        /* RESPONSIVE ADJUSTMENTS START HERE */
        /* =============================== */

        /* Very large screens (4K and bigger) */
        @media (min-width: 1920px) {
          .typing-wrapper.centered {
            max-width: 900px;
            padding: 0 2rem;
          }
          .bottom-panel {
            padding: 1rem 4rem;
            font-size: 1rem;
          }
          .down-arrow {
            font-size: 4rem;
            margin-top: 2rem;
          }
        }

        /* Large desktops (1200px - 1919px) */
        @media (min-width: 1200px) and (max-width: 1919px) {
          .typing-wrapper.centered {
            max-width: 800px;
            padding: 0 1.5rem;
          }
          .bottom-panel {
            padding: 1rem 3rem;
            font-size: 0.95rem;
          }
          .down-arrow {
            font-size: 3.5rem;
            margin-top: 1.5rem;
          }
        }

        /* Medium desktops / laptops (992px - 1199px) */
        @media (min-width: 992px) and (max-width: 1199px) {
          .typing-wrapper.centered {
            max-width: 750px;
            padding: 0 1rem;
          }
          .bottom-panel {
            padding: 1rem 2rem;
            font-size: 0.9rem;
          }
          .down-arrow {
            font-size: 3rem;
            margin-top: 1rem;
          }
        }

        /* Tablets (768px - 991px) */
        @media (min-width: 768px) and (max-width: 991px) {
          .typing-wrapper.centered {
            max-width: 95%;
            padding: 0 1rem;
          }
          .bottom-panel {
            flex-direction: column;
            align-items: center;
            text-align: center;
            padding: 1rem 1.5rem;
            font-size: 0.9rem;
          }
          .bottom-panel .right-side {
            align-items: center;
            white-space: normal;
          }
          .down-arrow {
            font-size: 3.5rem;
            margin-top: 1.5rem;
          }
        }

        /* Mobile phones (up to 767px) */
        @media (max-width: 767px) {
          .typing-wrapper.centered {
            max-width: 100%;
            padding: 0 1rem;
          }
          .bottom-panel {
            flex-direction: column;
            align-items: center;
            text-align: center;
            padding: 1rem 1rem;
            font-size: 0.85rem;
          }
          .bottom-panel .right-side {
            align-items: center;
            white-space: normal;
          }
          .down-arrow {
            font-size: 4rem;
            margin-top: 2rem;
          }
        }

        /* Extra small devices (up to 480px) */
        @media (max-width: 480px) {
          .typing-wrapper.centered {
            padding: 0 0.5rem;
          }
          .bottom-panel {
            padding: 0.75rem 0.5rem;
            font-size: 0.8rem;
          }
          .down-arrow {
            font-size: 3rem;
            margin-top: 1rem;
          }
        }
      `}</style>
    </>
  );
}
