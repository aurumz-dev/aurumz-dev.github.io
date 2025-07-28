import { useState, useEffect, useRef } from 'preact/hooks';

export default function DevIntro() {
  const [currentPath, setCurrentPath] = useState('/');
  const containerRef = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentPath(window.location.pathname);
    }
  }, []);

  // Lock scroll if content fits viewport, unlock if overflowing
  useEffect(() => {
    function updateScrollLock() {
      if (!containerRef.current) return;
      const contentHeight = containerRef.current.offsetHeight;
      const viewportHeight = window.innerHeight;

      if (contentHeight <= viewportHeight) {
        document.documentElement.style.overflowY = 'hidden';
        document.body.style.overflowY = 'hidden';
      } else {
        document.documentElement.style.overflowY = 'auto';
        document.body.style.overflowY = 'auto';
      }
    }

    updateScrollLock();

    window.addEventListener('resize', updateScrollLock);
    return () => {
      window.removeEventListener('resize', updateScrollLock);
      document.documentElement.style.overflowY = 'auto';
      document.body.style.overflowY = 'auto';
    };
  }, []);

  const devProjects = [
    {
      name: "ReviewAid [Dev]",
      link: "https://review-aid-private.onrender.com",
      description:
        "An advanced AI-powered tool that rapidly screens and extracts full-text data from multiple research articles, determining inclusion or exclusion based on your research criteria — all in just seconds. Github Source: github.com/aurumz-dev/Review_Aid_private",
      backgroundColor: "#0087d57b",
    },
  ];

  return (
    <div
      className="aspect-ratio-container"
      ref={containerRef}
      // Remove inline overflow style to avoid conflict with scroll locking
    >
      <div
        className="typing-wrapper shift-left"
        style={{
          textAlign: 'left',
          maxWidth: 'min(95vw, 950px)',
          marginInline: 'auto',
          padding: '0.7rem',
        }}
      >
        <h1
          className="main-title"
          style={{
            fontSize: 'clamp(1.4rem, 2.8vw, 2.1rem)',
          }}
        >
          Welcome to the Dev Page.
        </h1>
        <p
          className="subtitle"
          style={{
            color: '#ccc',
            lineHeight: '1.05',
            fontSize: 'clamp(0.7rem, 1.75vw, 0.91rem)',
          }}
        >
          This is the Developer&apos;s corner. <br />
          Here I share my private projects, beta-test Versions of My Projects.
        </p>
      </div>

      {/* Dev Projects List */}
      <section
        id="third-section"
        style={{
          maxWidth: 'min(95vw, 900px)',
          margin: '1.4rem auto',
          padding: '0 0.7rem',
        }}
      >
        <div
          style={{
            display: 'grid',
            gap: '1.05rem',
            gridTemplateColumns: 'repeat(auto-fit, minmax(175px, 1fr))',
          }}
        >
          {devProjects.map((project) => (
            <div
              key={project.name}
              className="project-card"
              style={{
                backgroundColor: project.backgroundColor,
                padding: '1.05rem',
                borderRadius: '0.7rem',
                boxShadow: '0 5.6px 14px rgba(0,0,0,0.1)',
                color: 'white',
                transition: 'transform 0.3s ease',
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = 'translateY(-4.2px)')
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = 'translateY(0)')
              }
            >
              <h3
                style={{
                  fontSize: 'clamp(0.84rem, 1.75vw, 1.05rem)',
                  marginBottom: '0.35rem',
                }}
              >
                {project.name}
              </h3>
              <p
                style={{
                  fontSize: 'clamp(0.63rem, 1.4vw, 0.7rem)',
                  marginBottom: '0.7rem',
                }}
              >
                {project.description}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: 'white',
                  fontWeight: 'bold',
                  textDecoration: 'none',
                }}
              >
                Visit
              </a>
            </div>
          ))}
        </div>
      </section>

      <nav className="nav-panel active" id="nav-panel">
        <a
          href="/"
          className={`nav-link ${currentPath === '/' ? 'active' : ''}`}
        >
          Main Page
        </a>
        <a
          href="/projects"
          className={`nav-link ${currentPath === '/projects' ? 'active' : ''}`}
        >
          Projects
        </a>
        <a
          href="/support"
          className={`nav-link ${
            currentPath === '/support' ? 'active' : ''
          }`}
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
    </div>
  );
}
