import ProjectCard from './ProjectCard';

export default function ProjectsList() {
  const projects = [
    {
      name: "ReviewAid",
      link: "",
      description:
        "An advanced AI-powered tool that rapidly screens and extracts full-text data from multiple research articles, determining inclusion or exclusion based on your research criteria — all in just seconds.",
      github: "https://github.com/aurumz-dev/reviewaid",
      tags: ["Full-text Screener", "Extractor", "AI"],
      backgroundColor: "#00466fff",
    },
    // Add more projects here
  ];

  return (
    <>
      <section
        className="projects-section"
        style={{
          width: '100%',
          padding: '0 0.651rem', // 0.7 * 0.93
          boxSizing: 'border-box',
        }}
      >
        <div
          className="projects-grid"
          style={{
            display: 'grid',
            gap: '0.976rem', // 1.05 * 0.93
            gridTemplateColumns: 'repeat(auto-fit, minmax(182.28px, 1fr))', // 196 * 0.93
            width: '100%',
            maxWidth: '1600px',
            margin: '0 auto',
          }}
        >
          {projects.map(({ github, ...project }) => (
            <ProjectCard
              key={project.name}
              {...project}
              github={github}
            />
          ))}
        </div>
      </section>

      <style jsx>{`
        @media (max-width: 1024px) {
          .projects-grid {
            gap: 0.8rem;
            grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
          }
        }

        @media (max-width: 768px) {
          .projects-section {
            padding: 0 1rem;
          }

          .projects-grid {
            gap: 0.7rem;
            grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
          }
        }

        @media (max-width: 480px) {
          .projects-grid {
            gap: 0.6rem;
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
}
