import ProjectCard from './ProjectCard';

export default function ProjectsList() {
  const projects = [
    {
      name: "ReviewAid",
      link: "",
      description: "An advanced AI-powered tool that rapidly screens and extracts full-text data from multiple research articles, determining inclusion or exclusion based on your research criteria — all in just seconds. Github Source: ",
      tags: ["Full-text Screener", "Extractor", "Ai"],
      backgroundColor: "#0786cfff", 
    },

  ];

  return (
    <section className="projects-section">
      <div className="projects-grid">
        {projects.map(project => (
          <ProjectCard key={project.name} {...project} />
        ))}
      </div>
    </section>
  );
}
