import { useState, useEffect } from 'preact/hooks';
import TypingIntro from './TypingIntro.jsx';
import SecondSection from './SecondSection.jsx';

export default function MultiSectionPage() {
  const [showScrollButton, setShowScrollButton] = useState(false);

  const scrollToSecond = () => {
    const section = document.querySelector('.second-section');
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  };

  // Ensure hydration only happens in browser
  useEffect(() => {
    // no-op just to force client rendering
  }, []);

  return (
    <div className="page-container">
      <section className="section typing-section">
        <TypingIntro onTypingComplete={() => setShowScrollButton(true)} />

        {showScrollButton && (
          <div className="scroll-button">
            <button onClick={scrollToSecond}>↓ Scroll down</button>
          </div>
        )}
      </section>

      <SecondSection />
    </div>
  );
}
