const links = [
  { href: '/', label: 'Main Page' },
  { href: '/projects', label: 'Projects' },
  { href: '/support', label: 'Support' },
  { href: '/dev', label: 'Dev' },
];

export default function NavPanel({ currentPath }) {
  return (
    <>
      <nav className="nav-panel" aria-label="Main navigation">
        {links.map(({ href, label }) => (
          <a
            href={href}
            className={`nav-link ${currentPath === href ? 'active' : ''}`}
            aria-current={currentPath === href ? 'page' : undefined}
            key={href}
          >
            {label}
          </a>
        ))}
      </nav>

      <style>{`
        .nav-panel {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
          justify-content: center;
          padding: 0.8rem;
        }

        .nav-link {
          color: #e9e3dfca;
          text-decoration: none;
          font-size: 1rem;
          transition: color 0.3s ease;
        }

        .nav-link:hover {
          color: #f2855d;
        }

        .nav-link.active {
          font-weight: bold;
          color: #f2855d;
        }

        @media (max-width: 480px) {
          .nav-panel {
            flex-direction: column;
            align-items: center;
            gap: 0.5rem;
            font-size: 0.9rem;
          }
        }

        @media (min-width: 481px) and (max-width: 768px) {
          .nav-panel {
            justify-content: center;
            gap: 0.8rem;
          }
        }

        @media (min-width: 1440px) {
          .nav-panel {
            gap: 2rem;
            font-size: 1.15rem;
          }
        }
      `}</style>
    </>
  );
}
