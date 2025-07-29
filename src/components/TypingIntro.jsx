import { useEffect, useRef, useState } from 'preact/hooks';
import TypeIt from 'typeit';
import SocialLinks from './SocialLinks';
import Lottie from 'lottie-react';

export default function TypingIntro({ onTypingComplete }) {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const wrapperRef = useRef(null);
  const navPanelRef = useRef(null);

  const [currentPath, setCurrentPath] = useState('/');
  const [showExtras, setShowExtras] = useState(false);
  const [showBottomPanel, setShowBottomPanel] = useState(false);
  const [animationData, setAnimationData] = useState(null);
  const [showLottie, setShowLottie] = useState(false);
  const [triggerShiftLeft, setTriggerShiftLeft] = useState(false);

  const typingStarted = useRef(false);

  // Update currentPath on route change
  useEffect(() => {
    const updatePath = () => setCurrentPath(window.location.pathname);
    updatePath();
    window.addEventListener('popstate', updatePath);
    return () => window.removeEventListener('popstate', updatePath);
  }, []);

  // Load Lottie JSON
  useEffect(() => {
    fetch('/lottie/smileyy.json')
      .then(res => res.json())
      .then(data => setAnimationData(data))
      .catch(err => console.error('Failed to load Lottie animation', err));
  }, []);

  // Typing animation logic
  useEffect(() => {
    if (typeof window === 'undefined' || typingStarted.current) return;
    typingStarted.current = true;

    const runTyping = async () => {
      if (!titleRef.current || !subtitleRef.current) return;

      await new TypeIt(titleRef.current, {
        speed: 30,
        waitUntilVisible: true,
        cursor: true,
        afterComplete: async () => {
          const cursor = titleRef.current.querySelector('.ti-cursor');
          if (cursor) cursor.remove();
          await new Promise(res => setTimeout(res, 1000));

          await new TypeIt(subtitleRef.current, {
            speed: 20,
            waitUntilVisible: true,
            cursor: true,
            afterComplete: async () => {
              await new Promise(res => setTimeout(res, 1000));

              // Animate out code tags
              document.querySelectorAll('.code-tag').forEach(el => {
                el.classList.add('slide-left-blur');
                setTimeout(() => (el.style.display = 'none'), 600);
              });

              // ⏳ Trigger .shift-left 3s later
              setTimeout(() => {
                setTriggerShiftLeft(true);
              },400);

              // Show nav + extras
              if (navPanelRef.current) {
                navPanelRef.current.classList.remove('hidden');
                setTimeout(() => {
                  navPanelRef.current.classList.add('active');
                  if (currentPath === '/') {
                    setShowExtras(true);
                    setTimeout(() => {
                      setShowBottomPanel(true);
                      setShowLottie(true);
                    }, 700);
                  }
                }, 50);
              }

              const subCursor = subtitleRef.current.querySelector('.ti-cursor');
              if (subCursor) subCursor.remove();

              document.documentElement.classList.remove('lock-scroll');
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
    };

    const timeout = setTimeout(runTyping, 50);
    return () => clearTimeout(timeout);
  }, [currentPath, onTypingComplete]);

  return (
    <>
      <div className="aspect-ratio-container relative">
        <div
          className={`typing-wrapper centered ${triggerShiftLeft ? 'shift-left' : ''}`}
          ref={wrapperRef}
        >
          <div>
            <h1 className="main-title" ref={titleRef}></h1>
            <p className="subtitle" ref={subtitleRef} style={{ display: 'inline-block', margin: 0 }}></p>
          </div>
        </div>

        {/* Lottie animation - Bigger */}
        {currentPath === '/' && showExtras && showLottie && animationData && (
          <div className="lottie-right fade-in" role="img" aria-label="Animated sticker">
            <Lottie animationData={animationData} loop={true} />
          </div>
        )}

        {/* Navigation panel */}
        <nav
          className="nav-panel hidden"
          id="nav-panel"
          ref={navPanelRef}
          aria-label="Main navigation"
        >
          <a href="/" className={`nav-link ${currentPath === '/' ? 'active' : ''}`}>Main Page</a>
          <a href="/projects" className={`nav-link ${currentPath === '/projects' ? 'active' : ''}`}>Projects</a>
          <a href="/support" className={`nav-link ${currentPath === '/support' ? 'active' : ''}`}>Support</a>
          <a href="/dev" className={`nav-link ${currentPath === '/dev' ? 'active' : ''}`}>Dev</a>
        </nav>

        {/* Social links */}
        {currentPath === '/' && showExtras && (
          <div className="socials-container-inside-section">
            <SocialLinks />
          </div>
        )}
      </div>

      {/* Bottom panel */}
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
            <span className="last-update">Last Updated: 2025-07-29</span>
          </div>
        </footer>
      )}

      
      <style>
  {`
    .fade-in {
      opacity: 0;
      animation: fadeInAnim 1s forwards;
      animation-delay: 0.5s;
    }
    @keyframes fadeInAnim {
      to {
        opacity: 1;
      }
    }

    .slide-left-blur {
      animation: slideLeftBlur 0.6s forwards;
    }
    @keyframes slideLeftBlur {
      to {
        opacity: 0;
        transform: translateX(-20px) scale(0.95);
        filter: blur(4px);
      }
    }

    .shift-left {
      transform: translateX(-150px);
      transition: transform 0.6s ease;
    }

    .typing-wrapper {
      transition: transform 0.6s ease;
      display: flex;
      align-items: center;
      gap: 1rem;
      flex-wrap: wrap;
      padding: 1rem;
    }

    .main-title {
      font-size: 2rem;
    }

    .subtitle {
      font-size: 1.2rem;
    }

    .lottie-right {
      position: absolute;
      top: 50%;
      right: 6rem;
      transform: translateY(-50%);
      width: 180px;
      height: 180px;
    }

    .nav-panel.active {
      opacity: 1;
      transition: opacity 0.5s ease;
    }

    .nav-panel.hidden {
      opacity: 0;
      transition: opacity 0.5s ease;
    }

    @media (max-width: 1024px) {
      .lottie-right {
        width: 140px;
        height: 140px;
        right: 3rem;
      }

      .main-title {
        font-size: 1.8rem;
      }

      .subtitle {
        font-size: 1.1rem;
      }
    }

    @media (max-width: 768px) {
      .lottie-right {
        position: static;
        transform: none;
        margin-top: 2rem;
        width: 120px;
        height: 120px;
        align-self: center;
      }

      .typing-wrapper {
        justify-content: center;
        text-align: center;
        padding: 2rem 1rem;
      }

      .main-title {
        font-size: 1.6rem;
      }

      .subtitle {
        font-size: 1rem;
      }
    }

    @media (max-width: 480px) {
      .lottie-right {
        width: 100px;
        height: 100px;
      }

      .main-title {
        font-size: 1.4rem;
      }

      .subtitle {
        font-size: 0.95rem;
      }
    }
  `}
</style>

    </>
  );
}
