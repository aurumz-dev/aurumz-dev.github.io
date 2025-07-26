import ProjectCard from './ProjectCard';

export default function ProjectsList() {
  const projects = [
    {
      name: "ReviewAid",
      link: "",
      description:
        "An advanced AI-powered tool that rapidly screens and extracts full-text data from multiple research articles, determining inclusion or exclusion based on your research criteria — all in just seconds. Github Source: ",
      tags: ["Full-text Screener", "Extractor", "Ai"],
      backgroundColor: "#0786cfff",
    },
  ];

  return (
    <section
      className="projects-section"
      style={{
        width: '100%',
        padding: '0 1rem', // Padding for small screens
        boxSizing: 'border-box',
      }}
    >
      <div
        className="projects-grid"
        style={{
          display: 'grid',
          gap: '1.5rem',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          width: '100%',
          maxWidth: '1600px',
          margin: '0 auto',
        }}
      >
        {projects.map((project) => (
          <ProjectCard key={project.name} {...project} />
        ))}
      </div>
    </section>
  );
}
