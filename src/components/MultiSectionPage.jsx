import { useState } from 'preact/hooks';
import TypingIntro from './TypingIntro.jsx';
import SecondSection from './SecondSection.jsx';

export default function MultiSectionPage() {
  const [showScrollButton, setShowScrollButton] = useState(false);

  const scrollToSecond = () => {
    document.querySelector('.second-section')?.scrollIntoView({ behavior: 'smooth' });
  };

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
