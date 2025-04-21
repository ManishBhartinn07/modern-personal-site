
import { Code } from "lucide-react";

const SkillsSection = () => {
  const skills = {
    languages: ["JavaScript", "TypeScript", "Python", "Java", "C++", "HTML", "CSS"],
    frameworks: ["React.js", "Node.js", "Express.js", "Next.js", "Bootstrap", "Tailwind CSS"],
    tools: ["Git", "GitHub", "VS Code", "MongoDB", "MySQL", "Firebase", "Redux", "REST API", "Postman"],
    concepts: ["Data Structures", "Algorithms", "OOPS", "DBMS", "Operating Systems", "Computer Networks"]
  };

  return (
    <section id="skills" className="py-20">
      <div className="container-custom">
        <h2 className="section-title text-center mx-auto">Skills & Technologies</h2>
        
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Languages */}
          <div className="bg-secondary rounded-lg p-6 transition-transform hover:translate-y-[-5px]">
            <div className="flex items-center gap-2 mb-4">
              <Code size={20} className="text-accent" />
              <h3 className="text-xl font-semibold">Languages</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.languages.map((skill) => (
                <span key={skill} className="skill-badge">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          {/* Frameworks */}
          <div className="bg-secondary rounded-lg p-6 transition-transform hover:translate-y-[-5px]">
            <div className="flex items-center gap-2 mb-4">
              <Code size={20} className="text-accent" />
              <h3 className="text-xl font-semibold">Frameworks</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.frameworks.map((skill) => (
                <span key={skill} className="skill-badge">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          {/* Tools */}
          <div className="bg-secondary rounded-lg p-6 transition-transform hover:translate-y-[-5px]">
            <div className="flex items-center gap-2 mb-4">
              <Code size={20} className="text-accent" />
              <h3 className="text-xl font-semibold">Tools</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.tools.map((skill) => (
                <span key={skill} className="skill-badge">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          {/* Concepts */}
          <div className="bg-secondary rounded-lg p-6 transition-transform hover:translate-y-[-5px]">
            <div className="flex items-center gap-2 mb-4">
              <Code size={20} className="text-accent" />
              <h3 className="text-xl font-semibold">Concepts</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.concepts.map((skill) => (
                <span key={skill} className="skill-badge">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
