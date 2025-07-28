const links = [
  { href: '/', label: 'Main Page' },
  { href: '/projects', label: 'Projects' },
  { href: '/support', label: 'Support' },
  { href: '/dev', label: 'Dev' },
];

export default function NavPanel({ currentPath }) {
  return (
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
  );
}
