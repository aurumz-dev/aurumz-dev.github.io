export default function NavPanel({ currentPath }) {
  return (
    <nav className="nav-panel" id="nav-panel" aria-label="Main navigation">
      <a
        href="/"
        className={`nav-link ${currentPath === '/' ? 'active' : ''}`}
      >
        Main Page
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
  );
}
