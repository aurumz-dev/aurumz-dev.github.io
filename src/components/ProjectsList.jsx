import ProjectCard from './ProjectCard.jsx';

const projectsData = [
  {
    name: "Open-Access Library",
    website: "https://openaccess.example",
    github: "https://github.com/yourrepo/open-access",
    description: "An open-access platform for sharing scientific research papers with zero paywall.",
    
  },
  {
    name: "Code Animator",
    website: "https://codeanimator.example",
    github: "https://github.com/yourrepo/code-animator",
    description: "A tool to animate code snippets for tutorials and presentations.",
    
  },
];

export default function ProjectsList() {
  return (
    <div className="projects-list">
      {projectsData.map((proj, i) => (
        <ProjectCard 
          key={i}
          name={proj.name}
          website={proj.website}
          github={proj.github}
          description={proj.description}
          image={proj.image}
        />
      ))}
    </div>
  );
}
