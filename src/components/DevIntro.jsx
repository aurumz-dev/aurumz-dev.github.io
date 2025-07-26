import { useState, useEffect } from 'preact/hooks';

export default function DevIntro() {
  const [currentPath, setCurrentPath] = useState('/');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentPath(window.location.pathname);
    }
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
    <div className="aspect-ratio-container">
      <div
        className="typing-wrapper shift-left"
        style={{
          textAlign: 'left',
          maxWidth: 'min(95vw, 950px)',
          marginInline: 'auto',
          padding: '1rem',
        }}
      >
        <h1
          className="main-title"
          style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
          }}
        >
          Welcome to the Dev Page.
        </h1>
        <p
          className="subtitle"
          style={{
            color: '#ccc',
            lineHeight: '1.5',
            fontSize: 'clamp(1rem, 2.5vw, 1.3rem)',
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
          margin: '2rem auto',
          padding: '0 1rem',
        }}
      >
        <div
          style={{
            display: 'grid',
            gap: '1.5rem',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          }}
        >
          {devProjects.map((project) => (
            <div
              key={project.name}
              className="project-card"
              style={{
                backgroundColor: project.backgroundColor,
                padding: '1.5rem',
                borderRadius: '1rem',
                boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
                color: 'white',
                transition: 'transform 0.3s ease',
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = 'translateY(-6px)')
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = 'translateY(0)')
              }
            >
              <h3
                style={{
                  fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)',
                  marginBottom: '0.5rem',
                }}
              >
                {project.name}
              </h3>
              <p
                style={{
                  fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                  marginBottom: '1rem',
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
