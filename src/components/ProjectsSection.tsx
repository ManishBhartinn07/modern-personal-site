import { Button } from "@/components/ui/button";
import { Github, Link, Folder } from "lucide-react";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubLink: string;
  demoLink?: string;
  image: string;
}

const ProjectsSection = () => {
  const projects: Project[] = [
    {
      title: "LMS System",
      description: "A comprehensive Learning Management System with features for course creation, student enrollment, progress tracking, and interactive learning materials.",
      technologies: ["Python", "Flask", "Redis", "React", "MongoDB", "JavaScript"],
      githubLink: "https://github.com/ManishBhartinn07/LMS-System",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
    },
    {
      title: "Tax Calculation Website",
      description: "An intuitive tax calculation platform that helps users estimate their tax liability based on income, deductions, and applicable tax laws.",
      technologies: ["Flask", "Python", "HTML", "CSS", "JavaScript", "Jinja2"],
      githubLink: "https://github.com/ManishBhartinn07/Tax-Calculation-website",
      image: "/lovable-uploads/c107a305-7d07-4c45-928d-714394566c5a.png"
    },
    {
      title: "Translating Application",
      description: "A real-time translation application supporting multiple languages with speech-to-text and text-to-speech capabilities.",
      technologies: ["React", "Node.js", "Express", "Translation API"],
      githubLink: "https://github.com/ManishBhartinn07/Translating_Application",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
    }
  ];

  return (
    <section id="projects" className="bg-secondary py-20">
      <div className="container-custom">
        <h2 className="section-title text-center mx-auto">Projects</h2>
        
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <Folder size={20} className="text-accent" />
                </div>
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="skill-badge">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                      <Github size={16} />
                      Code
                    </a>
                  </Button>
                  {project.demoLink && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                        <Link size={16} />
                        Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
