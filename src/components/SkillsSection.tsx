
import { Code } from "lucide-react";

const SkillsSection = () => {
  const skills = {
    languages: ["Python", "Node.js", "R", "C++", "Java"],
    frameworks: ["HTML", "CSS", "Flask"],
    tools: ["MySQL", "Power BI", "MS-Excel", "Tableau", "Git", "GitHub", "VS Code"],
    concepts: ["Leadership", "Project Management", "Adaptability", "Time Management"]
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
          
          {/* Soft Skills */}
          <div className="bg-secondary rounded-lg p-6 transition-transform hover:translate-y-[-5px]">
            <div className="flex items-center gap-2 mb-4">
              <Code size={20} className="text-accent" />
              <h3 className="text-xl font-semibold">Soft Skills</h3>
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
