export default function ProjectCard({ name, link, description, tags, backgroundColor }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="project-card" style={{ backgroundColor }}>
      <h3>{name}</h3>
      <p>{description}</p>
      <div className="project-tags">
        {tags.map(tag => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </div>
    </a>
  );
}
