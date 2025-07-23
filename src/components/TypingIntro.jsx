import { useEffect, useRef, useState } from 'preact/hooks';
import TypeIt from 'typeit';
import SocialLinks from './SocialLinks';

export default function TypingIntro({ onTypingComplete }) {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const wrapperRef = useRef(null);
  const [currentPath, setCurrentPath] = useState('/');
  const [showSocials, setShowSocials] = useState(false);
  const typingStarted = useRef(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    setCurrentPath(window.location.pathname);
    if (typingStarted.current) return;
    typingStarted.current = true;

    // Delay to ensure DOM is ready on GH Pages
    const timeout = setTimeout(() => {
      if (!titleRef.current || !subtitleRef.current) return; // Safety check

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
              speed: 10,
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
                      setShowSocials(true);
                    }
                  }, 50);
                }

                const subCursor = subtitleRef.current.querySelector('.ti-cursor');
                if (subCursor) subCursor.remove();

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
    }, 50); // Delay to ensure hydration

    return () => clearTimeout(timeout);
  }, []);

  return (
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

      {currentPath === '/' && showSocials && (
        <div className="socials-container-inside-section">
          <SocialLinks />
        </div>
      )}
    </div>
  );
}
