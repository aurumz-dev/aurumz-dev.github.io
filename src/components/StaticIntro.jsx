import SocialLinks from './SocialLinks.jsx';

export default function StaticIntro() {
  const currentPath = typeof window !== 'undefined' ? window.location.pathname : '/';

  return (
    <div className="aspect-ratio-container">
      <div className="typing-wrapper centered shift-left">
        <h1 className="main-title">Hello there!</h1>
        <p className="subtitle">
          <span className="code-tag">print("</span>
          <span>
            I<strong style={{ color: '#ffe8d8' }}>'</strong>m Vihaan
            <strong style={{ color: '#ffe8d8' }}>,</strong>
          </span>
          <span className="code-tag">")</span>
          <br />
          <span className="code-tag">print("</span>
          <span>
            Also known as Aurumz<strong style={{ color: '#ffe8d8' }}>.</strong>
          </span>
          <span className="code-tag">")</span>
          <br />
          <span className="code-tag">print("</span>
          <span>
            A Medical Student <strong style={{ color: '#ffe8d8' }}> & </strong> Creator with keen interest in Developing
            <strong style={{ color: '#ffe8d8' }}>,</strong>
          </span>
          <span className="code-tag">")</span>
          <br />
          <span className="code-tag">print("</span>
          <span>
            Animating <strong style={{ color: '#ffe8d8' }}> & </strong> Open-Access
            <strong style={{ color: '#ffe8d8' }}>.</strong>
          </span>
          <span className="code-tag">")</span>
        </p>
      </div>

      <nav className="nav-panel active" id="nav-panel">
        <a href="/" className={`nav-link ${currentPath === '/' ? 'active' : ''}`}>
          Main Page
        </a>
        <a href="/support" className={`nav-link ${currentPath === '/support' ? 'active' : ''}`}>
          Support
        </a>
        <a href="/dev" className={`nav-link ${currentPath === '/dev' ? 'active' : ''}`}>
          Dev
        </a>
      </nav>

      {currentPath === '/' && (
        <div className="socials-container-inside-section">
          <SocialLinks />
        </div>
      )}
    </div>
  );
}
