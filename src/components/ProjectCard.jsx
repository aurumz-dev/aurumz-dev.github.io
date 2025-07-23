import { useState } from 'preact/hooks';

export default function ProjectCard({ name, website, github, description, image }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={`project-horizontal-box ${expanded ? 'expanded' : ''}`}>
      <img 
        src={image} 
        alt={`Screenshot of ${name}`} 
        className="project-image" 
        loading="lazy"
        onError={(e) => e.target.style.display = 'none'}
      />

      <div className="project-content">
        <div className="project-header">
          <h2 className="project-name">{name}</h2>
          {!expanded && (
            <button 
              className="info-btn" 
              onClick={() => setExpanded(true)}
              aria-label={`Show ${name} details`}
            >
              Info
            </button>
          )}
        </div>

        {expanded && (
          <div className="project-info">
            <p>{description}</p>
            <button 
              className="info-btn hide-btn" 
              onClick={() => setExpanded(false)}
              aria-label="Hide details"
            >
              Hide Info
            </button>
          </div>
        )}

        <div className="project-links">
          <a 
            href={website} 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label={`Visit ${name} (opens in new tab)`}
          >
            Website
          </a>
          <a 
            href={github} 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label={`View ${name} code (opens in new tab)`}
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}